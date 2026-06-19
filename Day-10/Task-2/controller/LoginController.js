export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (email === "mk@gmail.com" && password === "123456") {
            return res.status(200).json({msg: "Login Successful"});
        }

        return res.status(401).json({msg: "Invalid Credentials"});

    } 
    catch (error) {
        return res.status(500).json({msg: "Internal Server Error" });
    }
};