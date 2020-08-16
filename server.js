const express = require('express');
const mongoose = require('mongoose');
const ini = require('ini');
const fs = require('fs');

const requireDir = require('require-dir');

// carregando db_uri de um arquivo config.ini
const config = ini.parse(fs.readFileSync('./config/config.ini', 'utf-8'));

// iniciando o App
const app = express();
app.use(express.json()); // permite que o envio de dados para aplicação em formato json.

// iniciando o DB
mongoose.connect(config.db.mongo_uri, { useUnifiedTopology: true, useNewUrlParser: true },);
requireDir('./src/models');

// rotas
app.use('/api', require('./src/routes'));

app.listen(3001);
