import React, { useState } from "react";
import '../style/register.scss'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../scripts/firebase";

function Register() {
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleRegister = async (e) => {
        e.preventDefault()

        try {
            await createUserWithEmailAndPassword(auth, email, password)
            const user = auth.currentUser
            //LEMBRAR -> CRIAR DATABASE E CONECTAR PARA CRIAR USUARIO
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
      <div className="containerReg">
        <div className="formBox">
            <form onSubmit={handleRegister}>
                <h3>- REGISTER YOUR ACCOUNT -</h3>
                <div className="inputs">
                    <label>First Name</label>
                    <input 
                        type="text" 
                        placeholder="fisrt name..."
                        onChange={(e) => setFname(e.target.value)}
                        required
                    />
                    <label>Last Name</label>
                    <input 
                        type="text" 
                        placeholder="last name..."
                        onChange={(e) => setLname(e.target.value)}
                        required
                    />
                    <label>Email</label>
                    <input 
                        type="email" 
                        placeholder="email..."
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <label>First Name</label>
                    <input 
                        type="password" 
                        placeholder="password..."
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <br />
                    <button type="submit">
                        REGISTER
                    </button>
                </div>
            </form>
        </div>
      </div>
    );
  }
  
  export default Register;