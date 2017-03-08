var CurrentPack = require('./CurrentPack');
var CurrentPass = require('./CurrentPass');
var DataSubscription = require('./DataSubscription');
var Postaid = require('./Postpaid');
var QueuedPack = require('./QueuedPack');
var SchemaObject = require('schema-object');

var Client = new SchemaObject({
    clientType: String,
    availableQuota: String,
    currentBalance: Number,
    postpaid: Object(Postaid),
    currentPack: Object(CurrentPack),
    currentPass:[Object(CurrentPass)],
    queuedPack: [Object(QueuedPack)],
    dataSubscriptions: [Object(DataSubscription)]
});
module.exports = Client;

//haciendo cambio
