const express = require('express')
const app = express();

require("./models")

var users = require('./routes/userRouter');
app.use('/', users);
app.listen(process.env.PORT || 5000, () => {
    console.log('The library app is listening on a system defined port or port 5000! http://localhost:5000')
})

app.get('/', (req, res) => {
    res.send('<h1>Comp Sys Dropouts Personal CRM</h1>')
})

app.get('/express_backend', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
}); 

//don't know how to link this with an actual react file - NR
app.get('/loginpage', (req, res) => {
    res.send({ react: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});