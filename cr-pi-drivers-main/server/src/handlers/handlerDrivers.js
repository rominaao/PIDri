const { json } = require("sequelize");
const { getidDrivers, getDriversName, getAllDrivers, createDirvesDb } = require("../controlers/controlersDrivers");

//  query ===> ? name =name
const getDriversHandler = async (req, res)=>{
    const {name} = req.query;
    try{
        if(name){
            const response = await getDriversName(name);
            return res.status(200).json(response);
        }
        const response = await getAllDrivers();
        res.status(200).json(response);
    }
    catch (error) {
        res.status(400).json({error: error.message})
    }
};
//   /id => params
const getDetailHandler = async (req, res) =>{
    const {id} = req.params;
    const source = isNaN(id)?"bdd":"api";
    try {
        const response = await getidDrivers(id,source);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message})
    }

};

//   body ===>
const createtDriverHandler = async (req,res) =>{
    const {name} = req.body;
    try {
        const response = await createDirvesDb(name, surname,description,image, nationality, team);
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
    
};

module.exports ={
    getDriversHandler,
    getDetailHandler,
    createtDriverHandler,
}