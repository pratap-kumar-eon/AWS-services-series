const { S3Client,GetObjectCommand } = require('@aws-sdk/client-s3')

const { getSignedUrl } = require('@aws-sdk/s3-request-presigner')

const s3Client = new S3Client({
    region: 'ap-south-1',
    credentials:{
        accessKeyId:'',
        secretAccessKey:''
    },
});

async function getObjectURL(key){
    const command = new GetObjectCommand({
        Bucket:'s3-nodejs-private',
        Key:key
    });
    const url = await getSignedUrl(s3Client,command)
    return url;
}

getObjectURL('0-cl7fc6pt1MHjIF4K.png')
.then((url)=>{
    console.log('URl is',url);
    
})
.catch((error)=>{
    console.log('Err',error);
    
})