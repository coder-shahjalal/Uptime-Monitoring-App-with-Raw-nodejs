/**
 * Title:Routes 
 * Description:Application Routes
 * Author: Shahjalal
 * Date:03-12-2022
 */

//dependencies 

const {sampleHandler} = require('./handlers/routeHandlers/sampleHandler')

const routes = {
    sample: sampleHandler,  
};

module.exports = routes;