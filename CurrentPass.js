var SchemaObject = require('schema-object');

var CurrentPass = new SchemaObject({
    description: String,
    expirationDate: String,
});
module.exports = CurrentPass;
