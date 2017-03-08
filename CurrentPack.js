var SchemaObject = require('schema-object');

var CurrentPack = new SchemaObject({
    packageId: String,
    description: String,
    dpiCode: String,
    dpiQuotaName: String,
    expirationDate: String,
    purchaseDate: String,
    quota: String,
    availableQuota: String,
});
module.exports = CurrentPack;
