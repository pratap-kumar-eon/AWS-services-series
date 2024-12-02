module.exports.handler = async (event)=>{
    return {
        statusCode:200,
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify({message:'hello from serverless'})
    };
};