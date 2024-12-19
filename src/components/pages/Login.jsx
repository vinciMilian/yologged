import React, { useState } from "react";
import '../style/login.scss'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth} from "../scripts/firebase";
import { toast } from "react-toastify";


function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = async (e) => {
        e.preventDefault()

        try {
            await signInWithEmailAndPassword(auth, email, password)
            
            console.log("User Signed In")
            toast.success("👍 User Signed In", {
                position: "top-center"
            })

            window.location.href = "/profile"
        } catch (error) {
            console.log(error.message)
            toast.error("Error: " + error.message, {
                position: "bottom-center",
            })
        }
    }

    const handleRegister = async () => {
            try {
                window.location.href = "/"
            } catch (error) {
                toast.error("Error: " + error.message)
                console.log(error)
            }
        }


    return (
      <div className="containerReg">
        <div className="formBox">
            <h2>yuLogged</h2>
            <form onSubmit={handleLogin}>
                <h3>- LOGIN -</h3>
                <div className="inputs">
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
                        LOGIN
                    </button>
                </div>
            </form>
            <button onClick={handleRegister}>
                REGISTER
            </button>
        </div>
      </div>
    );
  }
  
  export default Login;