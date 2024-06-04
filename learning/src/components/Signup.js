import Input from "../common/Input"
import Button from "../common/Button"

function Signup() {

    var ComponentName = "Sign Up"
    return (
        <div style={{
            width:"400px",
            margin: "20px",
            padding: "10px",
            backgroundColor: "aqua",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <h1>{ComponentName}</h1>
            <div>
                Full Name :
                <br />
                <Input />
            </div>
            <div>
                Email :
                <br />
                <Input />
            </div>
            <div>
                User Name :
                <br />
                <Input />
            </div>
            <div>
                Password
                <br />
                <Input />
            </div>
            <div>
                <br />
                <Button />
            </div>
        </div>
    )
}

export default Signup;