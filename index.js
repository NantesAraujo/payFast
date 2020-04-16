var app = require('./config/customExpress')();

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor Rodando na porta ${PORT}!`);
})