const express = require('express');
const Group = require('./routes/group.route');
const View = require('./routes/view.route');


const PORT = 3000

const app = express();
app.use(express.json());

app.use('/group', Group);
app.use('/view', View);


app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));

