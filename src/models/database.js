const mongoose = require('mongoose');

// URL de conexão com o MongoDB
const mongoURI = 'mongodb://localhost:27017/meu_banco_de_dados';

// Conectando ao MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Conexão com o MongoDB estabelecida'))
.catch(err => console.error('Erro ao conectar ao MongoDB:', err));

module.exports = mongoose; // Exportando o mongoose para uso em outros arquivos
