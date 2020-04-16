var app = require('./config/customExpress')();

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor Rodando na porta ${PORT}!`);
})

/* rota para testar se api está atendendo requisicoes.*/
app.get("/teste", (req, res) => {
    res.send(`Recebida requisicao de teste na porta ${PORT}.`);
})