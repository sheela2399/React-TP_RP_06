// import Input from "../common/Input";
// import Button from "../common/button";
import {useStates} from "react";


function Login() {
    var componentName = "Login";
    var [username, setUsername] = useStates("")
    var [password, setPassword] = useStates("")

    function handleUserChange(event){
        var value = event.target.value;
        setUsername(value)
    }

    function handlePasswordChange(event){
        var value = event.target.value;
        setPassword(value)
    }

    return (
        <>
        <div style={{textAlign: "center" }}>
            <h1>{componentName}</h1>

            <div style ={{padding:"20px"}}>
                <input 
                onchange = {function(event) {handleUserChange(event)}}
                type= "text"
                placeholder = " Enter Username"
                style={{padding:"10px"}}
                />
            </div>
            <div style={{padding:"20px"}}>
                <input 
                onchange = {function (event){handlePasswordChange(event)}}
                type="password"
                placeholder="Enter Password"
                style ={{padding:"10px"}}/>
            </div>
            <div>
                <button style={{padding:"10px 20px"}}>Submit</button>
            </div>
        </div>
        
        <div> 
        <h1>Username : {username}</h1>
        <h1>Password: {password}</h1>
        </div>
        </>
    )
}

export default Login;