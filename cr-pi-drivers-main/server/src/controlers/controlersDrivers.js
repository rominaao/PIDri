const axios = require("axios");
const { where } = require("sequelize");
const {Driver, Teams} = ("../db.js");

const cleanApi = (arr) => arr.map((drivers) => {
        return {
            id: drivers.id,
            forename: drivers.name.forename,
            surname: drivers.name.surname,
            description: drivers.description || "",
            image: drivers.image.url,
            nationality: drivers.nationality,
             dob: drivers.dob,
             team: drivers.teams,
        };
    });

const getAllDrivers = async () => {
    const infoApi =(await axios.get('http://localhost:5000/drivers')).data;
     const driverDb = await Driver.findAll();
     const driversApi = cleanApi (infoApi);
     const allDrivers =[...driversApi, ...driverDb];
     return allDrivers;
    
  
};
const getidDrivers = async (id,source) =>{
  
    const drive = source === "api" ?(await axios.get(`http://localhost:5000/drivers/${id}`)).data:
     await Driver.findByPk(id);
    return drive;
    
  
}
const getDriversName  = async (name) =>{
  const infoApi =(await axios.get(`http://localhost:5000/drivers?name.forename=${name}`)).data;
  const nameDriver = cleanApi (infoApi);
  const driversFil = nameDriver.filter(drive =>drive.name === name);
  const nameDB = await Driver.findAll({where: {name:name}});
  const todoDriver = [...driversFil, ...nameDB];
  const primeros15 = todoDriver.slice(0, 15);
  return primeros15;
}
const createDirvesDb = async ({forename,surname,description,image,nationality,dod,team}) =>{
  const newDriver = await Driver.create({forename,surname,description,image,nationality,dod});
  const dieTeams = await Teams.findAll({where:{name: team}})
  await newDriver.adddriver(dieTeams);
  
}
module.exports = {
  getAllDrivers,
  getidDrivers,
  getDriversName,
  createDirvesDb,
};
