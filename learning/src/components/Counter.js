import { useState } from "react"

function Counter() {
    var [count, setCount] = useState("0")
    return (
        <div style={{
            height: "250px",
            width: "200px",
            textAlign: "center",
            backgroundColor: "pink",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"

        }}>
            <h1>{count}</h1>
            <button
                onClick={function () { setCount(count++) }}
                style={{
                    Padding: "10px",
                    width: "100px",
                    height: "20px",
                }}>Increase</button>
        </div>
    )
}
export default Counter;