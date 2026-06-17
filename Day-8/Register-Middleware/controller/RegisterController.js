export const reg = async (req, res) =>{
    console.log(req.body);
     return res.status(200).json({msg: "Sucessfully register"});

    
}