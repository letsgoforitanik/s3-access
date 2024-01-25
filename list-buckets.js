const { S3Client, ListBucketsCommand } = require("@aws-sdk/client-s3");

async function listBuckets() {
    try {
        const s3Client = new S3Client({});
        const command = new ListBucketsCommand({});
        const response = await s3Client.send(command);

        return {
            statusCode: 200,
            body: response
        }
    }
    catch (error) {
        console.log('Error occurred', error);

        return {
            statusCode: 500,
            body: error
        }
    }
}


module.exports.handler = listBuckets; 