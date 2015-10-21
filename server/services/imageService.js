var AWS = require('aws-sdk');

AWS.config.update({
	accessKeyId: '',
	secretAccessKey: '',
	region: 'us-west-2'
})

var s3bucket = new AWS.S3 ({params: {Bucket: 'velour'}})

module.exports.uploadToS3 = function (buf, fileObj, callback){

	var params = {
		ACL: 'public-read',
		Body: fileObj.fileBody,
		Key: fileObj.fileName,
		ContentType: fileObj.fileType
		
	}
	s3bucket.upload(params, callback)
}