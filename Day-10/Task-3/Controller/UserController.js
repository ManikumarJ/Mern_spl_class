export const getUserById = async (req, res) => {
    try {
        return res.status(200).json({id: req.params.id,msg: "User Found" });
    } 
    catch (error) {
        return res.status(500).json({msg: "Internal Server Error"});
    }
};