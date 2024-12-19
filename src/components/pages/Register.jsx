import React, { useState } from "react";
import '../style/register.scss'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../scripts/firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";

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
            
            if (user) {
                await setDoc(doc(db, "Users", user.uid), {
                    _email: user.email,
                    _firstName: fname,
                    _lastName: lname
                })
            }
            console.log(user)
            toast.success("👍 User registered successfuly!", {
                position: "top-center",
            })

            window.location.href = "/profile"
        } catch (error) {
            console.log(error.message)
            toast.error("Error: " + error.message, {
                position: "bottom-center",
            })
        }
    }

    const handleLogin = async () => {
                try {
                    window.location.href = "/login"
                } catch (error) {
                    toast.error("Error: " + error.message)
                    console.log(error)
                }
            }

    return (
      <div className="containerReg">
        <div className="formBox">
            <h2>yuLogged</h2>
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
                    <label>Password</label>
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
            <button onClick={handleLogin}>
                LOGIN
            </button>
        </div>
      </div>
    );
  }
  
  export default Register;