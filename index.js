const express = require('express')
const app = express()
const port = 3000
let user = {
    name: ''
}

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))


app.get('/', (req, res) => {
    res.render('index', user)
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/contact', (req, res) => {
    res.render('contact')
})

app.get('/reset', (req, res) => {
    user.name = ''
    res.render('index', user)
})

app.get('/:id', (req, res) => {
    res.render('id', {
        id: req.params.id
    })
})

app.post('/', (req, res) => {
    user.name = req.body.name
    res.render('index', user)
})


app.listen(port, () =>{
    console.log(`Server berjalan di http://localhost:${port}`)
})