export const createStudent = async (req, res) => {
    try {
        const { name, course, city } = req.body;

        return res.status(201).json({ data: { name, course, city } });

    } 
    catch (error) {
        return res.status(500).json({message: "Internal Server Error"});
    }
};