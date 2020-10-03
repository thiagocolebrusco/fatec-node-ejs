const express = require("express");
const path = require('path');
const port = 8080

const app = express();

app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');


app.get("/usuarios", (req, res) => {
    let usuarios = [
        {
            id: 1,
            nome: "Thiago",
            email: "thiago@teste.com.br"
        },
        {
            id: 2,
            nome: "Thiago 2",
            email: "thiago2@teste.com.br"
        },
    ]
    res.render("lista_usuarios", {usuarios})
})

app.listen(port, err => {
    console.log(`Aplicação rodando na porta ${port}`);
});