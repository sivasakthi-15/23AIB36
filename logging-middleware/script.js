require("dotenv").config();
const AUTH_TOKEN = process.env.AUTH_TOKEN;
const API_URL = process.env.API_URL;


async function Log(stack, level, packageName, message) {
    try{
        const response =  await fetch(API_URL, {
        method : "POST",
        headers : {
            Authorization : `Bearer  ${AUTH_TOKEN}`,
            "Content-Type" : "application/json",
        },

        body: JSON.stringify({
            stack,
            level,
            package : packageName,
            message
        })
    });

    const data = await response.json();
    return data;
    
    }catch(error){
        return error;
    }
    
}

module.exports = Log;