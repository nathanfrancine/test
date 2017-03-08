var SchemaObject = require('schema-object');

var QueuedPack = new SchemaObject({
    transactionId: String,
    packageId: String,
    packageName: String,
    purchaseDate: String,
    amount: Number,
    quota: String,
    validityType: String,
    validityNumber: String,
});
module.exports = QueuedPack;
