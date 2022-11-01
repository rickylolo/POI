import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">FCFM TEAMS</span>
        <span className="title">Inicio de sesión</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Correo Electrónico" />
          <input type="password" placeholder="Contraseña" />
          <button>Ingresar</button>
          {err && <span>Algo salio mal</span>}
        </form>
        <p>¿Aún no tienes cuenta? <Link to="/Registrarse">Registrar</Link></p>
      </div>
    </div>
  );
};

export default Login;
