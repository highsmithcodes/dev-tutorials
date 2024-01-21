import AWS from 'aws-sdk';

const config = {

};

AWS.config.update(config);

export const s3 = new AWS.S3();
