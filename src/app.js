const express = require('express');
const app = express();
const path = require('path');


app.use(express.static(path.join(__dirname, 'views')));


app.get('/', (req, res) => {
    res.sendFile('index.html', { root: path.join(__dirname, 'views') });
});


app.get('/integrantes', (req, res) => {
    const data = {
        'integrantes': [
            { 'nome': 'Iago Vicente' },
            { 'nome': 'João Maia' }
        ]
    };
    res.json(data);
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
