const Sequelize = require('sequelize')
const sequelize = new Sequelize('test', 'suporte', 'Usbw@2951', {
    host: "10.0.0.108",
    dialect: 'mysql'

})


const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})


const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

