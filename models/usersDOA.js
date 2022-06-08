const mongoose = require('mongoose');

let Users

class usersDOA {
    static async injectdb(client){
     if(Users){
         return
     }
     try {
         Users = await client.db(Users).collections(Users);
     } catch (error) {
         console.log(error);
     }   
    }
}



module.exports = usersDOA