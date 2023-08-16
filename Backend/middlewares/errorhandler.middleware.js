

const handleError = (res,res,error) => {
    if (error) {
        console.log(error.message);
        return res.status(500).json({message:"Server error"})
    }
}

module.exports = handleError;