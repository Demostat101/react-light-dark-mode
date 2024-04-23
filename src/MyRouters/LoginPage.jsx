import { useState } from "react";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import {NameContext} from "../UseContext/UseContext";


let LoginPage = () => {

  let userName = useContext(NameContext)

    let navigate = useNavigate();

    let [name, setName] = useState("");
    let [lastName, setLastName] = useState("");
    let [email, setEmail] = useState("");
    let [passWord, setPassWord] = useState("");
    let [files, SetFiles] = useState();



    let handlePageNavigation=()=>{

      (name&&passWord&&email&&lastName) === "" ? alert("Kindly input your details") : navigate("/logout", {replace: true, state:{name,passWord,email,lastName,files}});
        
    };

  




  return (
    <>
      <div className="Login">
        
        <div className="inputForm">

                <form action="">

                    <input type="file" value={files} onChange={(e)=> SetFiles(e.target.value)}/> <br />
                    <input type="text" placeholder="First Name" value={name} onChange={(e) => setName(e.target.value)}/> <br />
                    <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)}/> <br />
                    <input type="mail" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)}/> <br />
                    <input type="password" placeholder="Your Password" value={passWord} onChange={(e) => setPassWord(e.target.value)}/> <br /><button  onClick={handlePageNavigation}>SUBMIT</button>

                    <p>{`The creator of this page is:  ${userName}`}</p>

                </form>

                

        </div>
                
      </div>
    </>
  );
};

export default LoginPage;
