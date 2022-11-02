import React, { useContext, useState } from "react";
import Cam from "../images/cam.png";
import Add from "../images/add.png";
import More from "../images/more.png";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
  getDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";

const Chat = () => {
  const { data } = useContext(ChatContext);
  const [show,setShow] = useState(false)
  const [username, setUsernameChat2] = useState("");
  const [user, setUserChatAdd] = useState(null);
  const [userTeammate, setUserChat] = useState(null);
  const [err, setErrChat] = useState(false);
  const { currentUser } = useContext(AuthContext);
  
  
  const handleSearch = async () => {
    const q = query(
      collection(db, "Usuarios"),
      where("displayName", "==", username)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUserChatAdd(doc.data());
      });
    } catch (err) {
      setErrChat(true);
    }
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  
  const handleSelect2 = async () => {
    
    const q2 = query(
      collection(db, "Usuarios"),
      where("displayName", "==", data.user.displayName)
    );
    try {
      const querySnapshot = await getDocs(q2);
      querySnapshot.forEach((doc) => {
        setUserChat(doc.data());
      });
    } catch (err) {
      setErrChat(true);
    }

    //check whether the group(chats in firestore) exists, if not create
    const combinedId = user.uid + currentUser.uid + userTeammate.uid;
    try {
      const res = await getDoc(doc(db, "chats", combinedId));

      if (!res.exists()) {
        //create a chat in chats collection
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        //create user chats
        await updateDoc(doc(db, "ChatsUsuarios", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "ChatsUsuarios", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
        
        await updateDoc(doc(db, "ChatsUsuarios", userTeammate.uid), {
          [combinedId + ".userInfo"]: {
            uid: userTeammate.uid,
            displayName: userTeammate.displayName,
            photoURL: userTeammate.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (err) {}

    setUserChatAdd(null);
    setUsernameChat2("")
  };
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} onClick={()=>setShow(!show)} alt="Añadir miembros al chat" />
          <div>
            {
      show?<div className="search">
      <div className="searchForm">
        <input
          type="text"
          placeholder="Busca un usuario"
          onKeyDown={handleKey}
          onChange={(e) => setUsernameChat2(e.target.value)}
          value={username}
        />
      </div>
      {err && <span>Usuario no encontrado</span>}
      {user && (
        <div className="userChat" onClick={handleSelect2}>
          <img src={user.photoURL} alt="" />
          <div className="userChatInfo">
            <span>{user.displayName}</span>
          </div>
        </div>
      )}
    </div>:null
      }

    </div>

          <img src={More} alt="" />
        </div>
      </div>
      <Messages />
      <Input/>
    </div>
  );
};

export default Chat;
