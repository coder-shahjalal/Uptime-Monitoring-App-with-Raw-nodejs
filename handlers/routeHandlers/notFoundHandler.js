/**
 * Title:
 * Description:
 * Author:
 * Date:
 */
//dependencies

// scaffolding
const handler = {};


handler.notFoundHandler = (requestProperties,callback) =>{
 callback(404,{
    message: 'this not fount page '
 })
}

module.exports = handler;