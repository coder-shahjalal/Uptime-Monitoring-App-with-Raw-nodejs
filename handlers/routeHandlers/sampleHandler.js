/**
 * Titile:
 * Description:
 * Author:
 * Date:
 * 
 */

// modules scaffolding 
const handler = {};


handler.sampleHandler = (requestProperties,callback) =>{
    console.log(requestProperties);
    callback(200,{
        massage: "this is a smaple "
    })
}

module.exports = handler;