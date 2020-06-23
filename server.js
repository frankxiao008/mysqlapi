const express = require('express');
const apiRouter =  require('./routes');
var cors = require('cors');

const app = express();
app.use('/api/data', apiRouter);
app.use(cors());
app.use(express.json());

app.listen(process.env.PORT || '3000', ()=>{

    console.log(`Server is listening on port: ${process.env.PORT || '3000'}`);

});
