const express = require('express');
const { errorHandler } = require('./Middleware/errorHandler');
const dotenv = require('dotenv').config();

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/contacts', require('./Routes/contactsRoutes'));
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

