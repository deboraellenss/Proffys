//servidor
const express = require('express')
const server = express()

const {
    pageLanding,
    pageStudy,
    pageGiveClass,
    saveClasses
} = require('./pages')


// configurar nunjucks (Template Engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true, //destiva o cache
})

//a  () no fim indica que está retornando um objeto:::: 5500 , NUMERO DE PORTA //  
//'() => {}' é chamado de função curta/arrow function, em que parenteses representa a função//

// Inicio e config. do servidor
//arquivos estaticos sao todos as fotos, os scripts, css, tudo na pasta public precisa ser servido p/ o cliente//
server
// receber body
.use(express.urlencoded({ extended: true }))
// configurar arquviso estaticos (css, scripts, imagens)
.use(express.static("public")) 
// rotas da aplicacao
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClass)
.post("/save-classes", saveClasses)
//start do servidor
.listen(5500)

