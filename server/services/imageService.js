var AWS = require('aws-sdk');

AWS.config.update({
	accessKeyId: '',
	secretAccessKey: '',
	region: 'us-west-2'
})

var s3bucket = new AWS.S3 ({params: {Bucket: 'velour'}})

module.exports.uploadToS3 = function (fileObj, callback){

	var params = {
		Key: fileObj.fileName,
		Body: fileObj.fileBody,
		ContentType: fileObj.fileType,
		ACL: 'public-read'
	}
	s3bucket.upload(params, callback)
}