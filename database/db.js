const mongoose = require('mongoose');

const connect = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });

        console.log('DB is online');
    } catch (error) {
        console.error(error);
        throw new Error('db-error');
    }
}

module.exports = {
    connect
}