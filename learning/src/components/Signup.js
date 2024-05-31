import Input from "../common"
import Button from "../common"

function Signup() {

    var ComponentName = "Sign Up"
    return (
        <div>
        <div>
            Full Name
            <Input />
        </div>
        <div>
        Email
        <Input />
    </div>
    <div>
            User Name
            <Input />
        </div>
        <div>
            Password
            <Input />
        </div>
        <div>
            Submit
            <Button />
        </div>
    </div>
    )
}