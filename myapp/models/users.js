var mongoose = require('mongoose');
var schema = mongoose.Schema;

var UseSchema = new schema({
    firstName: {type: String},
    lastName: {type: String},
    company: {type: String},
    position: {type: String},
    email: {type: String},
    phoneNumber: {type: String}
});

UseSchema.set('toJSON', {
    transform: function(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
    }
});

module.exports = mongoose.model("User", UseSchema);