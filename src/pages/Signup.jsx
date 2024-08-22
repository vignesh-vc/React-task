import { Link } from "react-router-dom"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [profession, setProfession] = useState("");
    
    const navigate = useNavigate();

    function handleSubmit() {
        // Validate input
        if (!name || !email || !password || !phone || !profession) {
            alert("All fields are required");
            return;
        }

        // Get existing users from local storage
        const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

        // Add new user to the list
        const newUser = { name, email, password, phone, profession };
        existingUsers.push(newUser);

        // Save updated users list to local storage
        localStorage.setItem("users", JSON.stringify(existingUsers));

        // Redirect to login page
        navigate("/");
    }

    return (
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
            <h1 className="text-3xl font-medium">Hey Hi</h1>
            <p>Sign Up here:)</p>
                
                <div className="flex flex-col gap-2 my-2">
                    <input
                        type="text"
                        placeholder="Name"
                        className="w-52 border-black p-1 bg-transparent border rounded-md"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-52 border-black p-1 bg-transparent border rounded-md"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-52 border-black p-1 bg-transparent border rounded-md"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Phone Number"
                        className="w-52 border-black p-1 bg-transparent border rounded-md"
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <select
                        className="w-52 border-black p-1 bg-transparent border rounded-md"
                        onChange={(e) => setProfession(e.target.value)}
                    >
                        <option value="">Select Profession</option>
                        <option value="Engineer">Engineer</option>
                        <option value="Doctor">Doctor</option>
                        <option value="Teacher">Teacher</option>
                        <option value="Other">Other</option>
                    </select>
                    <button
                        className="bg-[#FCA201] w-24 p-1 rounded-md"
                        onClick={handleSubmit}
                    >
                        Sign Up
                    </button>
                    <p>Already have an account? <Link to={"/"} className="underline">Login</Link></p>
             
                </div>
            </div>
        </div>

        
    );
}

export default Signup;
