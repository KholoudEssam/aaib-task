const mongoose = require('mongoose');

mongoose
    .connect(process.env.MONGO_URI || 'mongodb://localhost:27017/reportsdb', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('DB Connected'))
    .catch((err) => console.log(err));
