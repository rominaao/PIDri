const axios = require("axios");
const { teams } = require("../db");

const getTeams = async () =>{
    const teamsDB = await teams.findAll();
    if (teamsDB.length === 0) {
        const teamsApi = (await axios.get('http://localhost:5000/drivers')).data.results.map((t) =>{return {name: t.name}})
        await teams.bulkCreate(teamsApi)
        return await teams.findAll()
    }

}
module.exports = {
    getTeams
}