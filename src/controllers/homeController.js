let getHomePage = (req,res) =>{
    return res.send("Hello Tin")
}

module.exports = {
    getHomePage : getHomePage
}