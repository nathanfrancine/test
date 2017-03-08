var SchemaObject = require('schema-object');

var dataSubscription = new SchemaObject({
    subscriptionId: String,
    subscriptionName: String,
    purchaseDate: String,
    recurrentFee: Number,
    quota: String,
    recurrentTimeUnit: String,
    recurrentPeriod: String,
    expirationDate: String,
});
module.exports = dataSubscription;
