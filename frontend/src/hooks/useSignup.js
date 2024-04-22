import { useState } from "react";
import {toast} from "react-hot-toast";



const useSignup = () => {
    const [loading, setLoading] = useState(false);

    const signup = async ({ fullName, username, password, confirmPassword, gender }) => {
        const success = handleInputErrors({ fullName, username, password, confirmPassword, gender });
        if (!success) return;

        setLoading(true);
        try {
            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ fullName, username, password, confirmPassword, gender }),
            });

            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }
            // Handle successful signup
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
            console.log("user created successfully")
        }
    };

    return { loading, signup };
};

export default useSignup;

function handleInputErrors({ fullName, username, password, confirmPassword, gender }) {
	if (!fullName || !username || !password || !confirmPassword || !gender) {
		toast.error("Please fill in all fields");
		
	}

	if (password !== confirmPassword) {
		toast.error("Passwords do not match");
    }

	if (password.length < 3) {
		toast.error("Password must be at least 6 characters");
    }

	return true;
}

