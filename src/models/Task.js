const mongoose = require('mongoose');

// Definindo o esquema do modelo Task
const taskSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  concluida: {
    type: Boolean,
    default: false
  }
});

// Criando o modelo Task com o esquema definido
const Task = mongoose.model('Task', taskSchema);

module.exports = Task; // Exportando o modelo Task para uso em outros arquivos
