const express = require('express');
const path = require('path');
const routes = require('./routes');
const cors = require('cors');
const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    credentials: true
}));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', routes);
app.use('/uploads', express.static('uploads'));
app.use('/media', express.static(path.join(__dirname, 'received')));


app.listen(3001, () => {
    console.log(`Server running at http://localhost:${3001}`);
});