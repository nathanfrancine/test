var SchemaObject = require('schema-object');

var Postpaid = new SchemaObject({
    description: String,
    dpiCode: String,
    dpiQuotaName: String,
    nextResetDate: String,
    quota: String,
    availableQuota: String
});
module.exports =Postpaid;
