/*
 * Title:
 * Author:
 * Description:
 * Date:03-12-2022
 */

// dependeace 

const url = require('url');
const {StringDecoder} = require('string_decoder');
const routes = require('../routes')
const {notFoundHandler} = require ('../handlers/routeHandlers/notFoundHandler')
// module scaffolding

const handler ={};

handler.handleReqRes = (req, res) => {

    //request handle
    //get url and parse it 
    const parsedUrl = url.parse(req.url,true);
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g,'');
    const method = req.method.toLowerCase();
    const queryStringObject = parsedUrl.query;
    const headersObject = req.headers;
    
    const requestProperties = {
        parsedUrl,
        path,
        trimmedPath,
        method,
        queryStringObject,
        headersObject,
    }

    const decoder = new StringDecoder('utf-8')
    let realData = '';

    const chosenHandler = routes[trimmedPath] ? routes[trimmedPath]: notFoundHandler;
    
    chosenHandler(requestProperties,(statusCode,payload)=>{
        statusCode = typeof(statusCode)=== 'number' ? statusCode : 500;
        payload = typeof(payload) ==='object' ? payload:{};

        const payloadString = JSON.stringify(payload);

        //teturn the final respone 
        res.writeHead(statusCode);
        res.end(payloadString);
    });
    
    
  chosenHandler(requestProperties,(statusCode,payLoad)=>{})
    req.on ('data', (buffer)=>{
        realData+= decoder.write(buffer);
    });
    req.on ('end',()=>{
        realData += decoder.end();
        console.log(realData);
        // response handle
       res.end ('Hello World');
    })

    console.log ()


    
}


module.exports = handler;