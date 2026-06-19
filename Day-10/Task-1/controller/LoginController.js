export const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email) {
        return res.status(400).json({msg: "Email Required" });
    }

    if (!password || password.length < 6) {
        return res.status(400).json({msg: "Password must be at least 6 characters"});
    }

    return res.status(200).json({ msg: "Login Successful"});
};