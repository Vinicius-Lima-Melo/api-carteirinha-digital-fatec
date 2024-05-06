const fatecApi = require('fatec-api')
const express = require('express')
const app = express()
app.use(express.json())

// GET method route
app.get('/', (req, res) => {
    res.send('GET request to the homepage')
})


  // POST method route
app.post('/login', async (req, res) => {
    console.log(req.body)
    const minhaConta = new fatecApi.Account(req.body.login, req.body.senha)

    await minhaConta.getName().then((name) => {
        res.send("Olá, " + name + "!")
    }, (err) => {
        res.send("Não foi possível acessar sua conta.")
    })
})

// console.log(fatecApi, minhaConta.student.getName)
// minhaConta.getName().then(() => {
// })

app.listen(8000, () => {
    console.log('Servidor iniciado na porta 8000!')
})
