import Input from "../common/input";
import Button from "../common/button";

function Login() {
    var componentName = "Login";
    return (
        <div style={{ backgroundColor: "Blue", color: "red" }}>
            <h1>{componentName}</h1>

            <div>
                <Input />
            </div>
            <div>
                <Input />
            </div>
            <div>
                <Button />
            </div>
        </div>
    )
}
export default Login;