import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {Link}from  "react-router-dom"
function Login() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    // const [ruser, setruser] = useState(true);
    
    const navigate = useNavigate();

    function handleLogin() {
        // Retrieve users from local storage
        const users = JSON.parse(localStorage.getItem("users")) || [];

        // Check if user exists
        const userFound = users.some(user => user.name === name && user.password === password);

        if (userFound) {
            console.log("Login successful");
            navigate("/landing"); // Redirect to a landing page
        } else {
            console.log("Invalid Credentials");
            setError("Invalid Credentials");
        }
    }

    return (
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Login</h1>
                <h1 className="text-3xl font-medium">Hey Hi</h1>
                {/* {ruser ? <p>I help you manage your activities after you login:)</p> : <p className="text-red-500">Please Sign up Before you Login</p>} */}

                {error && <p className="text-red-500">{error}</p>}
                <div className="flex flex-col gap-2 my-2">
                    <input
                        type="text"
                        placeholder="Name"
                        className="w-52 border-black p-1 bg-transparent border rounded-md"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-52 border-black p-1 bg-transparent border rounded-md"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        className="bg-[#8272DA] w-24 p-1 rounded-md"
                        onClick={handleLogin}
                    >
                        Login
                    </button>
                    <p>Don't  have an account? <Link to={"/signup"} className="underline">signup</Link></p>
              
                </div>
            </div>
        </div>
    );
}

export default Login;
