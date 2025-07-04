// src/config/database.js - Configuração do banco de dados MySQL
const mysql = require('mysql2/promise');

const dbConfig = {
    port: 3307,
    host: '127.0.0.1',
    user: 'root',
    password: 'root',  // Senha padrão do XAMPP é vazia
    database: 'hopi_hari_db'
  
};

const pool = mysql.createPool(dbConfig);

// Função para verificar a conexão com o banco de dados
const testConnection = async () => {
    try {
        const connection = await pool.getConnection();
        console.log('Conexão com o banco de dados MySQL estabelecida com sucesso!');
        connection.release();
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
    }
};

// Testar a conexão ao iniciar a aplicação
testConnection();

module.exports = pool;

// ==============================================================