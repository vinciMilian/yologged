import React, { useEffect, useState } from "react";
import '../style/profile.scss'
import { auth, db } from "../scripts/firebase";
import { doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";

function Profile() {
    const [userDetails, setUserDetails] = useState(null)

    const fetchUserData = async () => {
        auth.onAuthStateChanged(async (user) => {
            console.log(user)

            const docRef = doc(db, "Users", user.uid)
            const docSnap = await getDoc(docRef)

            if (docSnap.exists()) {
                setUserDetails(docSnap.data())
                console.log(docSnap.data())
            } else {
                console.log("User is not logged in!")
            }
        })
    }

    const handleLogout = async () => {
        try {
            await auth.signOut()
            window.location.href = "/login"
        } catch (error) {
            toast.error("Error: " + error.message)
            console.log(error)
        }
    }

    useEffect(() => {
        fetchUserData()
    }, [])

    return (
      <div className="containerReg">
        {userDetails ? (
            <div className="formBox">
                <h2>yuLogged</h2>
                <div className="form">
                    <h3>- LOGIN -</h3>
                    <div className="inputs">
                        <label>Email</label>
                        <h3>{userDetails._email}</h3>
                        <label>First Name</label>
                        <h3>{userDetails._firstName}</h3>
                        <label>Last Name</label>
                        <h3>{userDetails._lastName}</h3>
                        <br />
                        <button onClick={handleLogout}>
                        LOG OUT
                    </button>
                    </div>
                </div>
            </div>
        ) : (
            <div className="formBox">
                <h2>yuLogged</h2>
                <div className="form">
                    <h3>- Loading... -</h3>
                </div>
            </div>
        )}
      </div>
    );
  }
  
  export default Profile;