const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const ini = require('ini');
const fs = require('fs');

const requireDir = require('require-dir');

// definindo environment
const DBENV = process.env.DBENV || "development";

// carregando db_uri de um arquivo config.ini
const config = ini.parse(fs.readFileSync(`./config/${DBENV}/config.ini`, 'utf-8'));

// iniciando o App
const app = express();
app.use(express.json()); // permite que o envio de dados para aplicação em formato json.
app.use(cors()); // permitindo acesso de diferentes origens - CORS

// iniciando o DB
mongoose.connect(config.db.mongo_uri, { useUnifiedTopology: true, useNewUrlParser: true },);
requireDir('./src/models');

// rotas
app.use('/api', require('./src/routes'));

// Constants

const PORT = process.env.PORT || 3001;
const HOST = '0.0.0.0'

app.listen(PORT, HOST);
console.log(`Runing on http://${HOST}:${PORT}`);
