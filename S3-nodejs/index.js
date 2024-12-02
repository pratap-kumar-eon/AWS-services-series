const { S3Client,GetObjectCommand,PutObjectCommand } = require('@aws-sdk/client-s3')

const { getSignedUrl } = require('@aws-sdk/s3-request-presigner')

const s3Client = new S3Client({
    region: 'ap-south-1',
    credentials:{
        accessKeyId:'AKIAWOOXTS7OV4LSXOHW',
        secretAccessKey:'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'
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

async function putObjectURL(filename,contentType){
    const command  = new PutObjectCommand({
        Bucket:'s3-nodejs-private',
        Key:`uploads/user-uploads/${filename}`,
        ContentType:contentType,
    });

    const url = await getSignedUrl(s3Client,command)
    return url;
}

// code for get object
getObjectURL('uploads/user-uploads/image-1733142960515.png')
.then((url)=>{
    console.log('URl is',url);
    
})
.catch((error)=>{
    console.log('Err',error);
    
})

//code for put object

putObjectURL(`image-${Date.now()}.png`,'image/png')
.then((url)=>{
    console.log('URl is',url);
    
})
.catch((error)=>{
    console.log('Err',error);
    
})
