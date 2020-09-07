const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json({
        message: 'successs',
        status: 200,
        data: {id: 1, name: 'Tuong Nguye'}
    })
})

app.listen(8000, () => {
    console.log('Server is running on port 8000');
})