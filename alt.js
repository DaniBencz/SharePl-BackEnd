const express = require('express');
const app = express();

//it will serve index.html from defined folder
app.use(express.static('assets'));

app.get('/', (req, res) => {
    res.send('No index.html is provided...');
});

app.listen(3000, () => console.log('Alternative app listening on port 3000!'));
