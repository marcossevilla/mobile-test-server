const { Schema, model } = require('mongoose');

const SeedSchema = Schema({

    seed: {
        type: String,
        required: true
    },
    expires_at: {
        type: Schema.Types.Date,
        required: true
    },

});

SeedSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;
});

module.exports = model('Seed', SeedSchema);