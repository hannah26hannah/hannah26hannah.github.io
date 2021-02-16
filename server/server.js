const express = require('express');
const app = express();

const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => { 
    res.send(`Response Complete`);
})

app.listen(PORT, () => { 
    console.log(`Server On : http://localhost:${PORT}`)
})