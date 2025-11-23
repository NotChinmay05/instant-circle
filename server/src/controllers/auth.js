import { auth, db } from "../config/firebaseConfig.js";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "secret69";

// POST /signup { username, password }
const handleUserSignUp = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) return res.status(400).json({ error: "Missing Email or Password" });

        const user = await auth.createUser({
            email: email,
            password: password,
        });

        await db.collection('users').doc(user.uid).set({
            email: email,
            createdAt: new Date().toISOString()
        });

        return res.status(200).json({ userId: uid, message: "User Signed up successfully" });
    } catch (error) {
        console.log(error.message);
        return res.status(400).json({ error: "Failed to signup: " + error.message });
    }
};

// POST /login { username, password }
const handleUserLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) return res.status(400).json({ error: "Missing Email or Password" });

        const userRecord = await signInWithEmailAndPassword(
            email,
            password
        );

        const userId = userRecord.user.uid;

        const userDoc = await db.collection("users").doc(userId).get();
        if (!userDoc.exists) return res.status(401).json({ error: "User not found" });

        const token = jwt.sign(
            {
                uid: userId,
                email: email,
            },
            JWT_SECRET,
            { expiresIn: 60 * 60 * 24 * 1000 }
        );

        res
            .cookie("auth_token", token, {
                httpOnly: true,
                secure: process.env.WORK_ENV === "production",
                maxAge: 60 * 60 * 24 * 1000,
            })
            .status(200)
            .json({
                message: "User logged in successfully",
                data: {
                    uid: userId,
                    email: email,
                },
            });

    } catch (error) {
        console.log(error.message);
        return res.status(400).json({ error: "Failed to Login: " + error.message });
    }
};

const handleUserLogout = async (req, res) => {
    res
        .status(200)
        .clearCookie("auth-token", {
            httpOnly: true,
            secure: process.env.WORK_ENV === "production",
            sameSite: "strict",
        })
        .json({ message: "User logged out successfully" });
}

export { handleUserSignUp, handleUserLogin, handleUserLogout };
