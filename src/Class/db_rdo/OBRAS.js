const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('OBRAS', {
    obraId: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING(18),
      allowNull: false,
      unique: "nome_UNIQUE"
    },
    cep: {
      type: DataTypes.STRING(9),
      allowNull: false
    },
    logradouro: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    numero: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    bairro: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    cidade: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    estado: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    telefoneFixo: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    telefoneCelular: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    cno: {
      type: DataTypes.STRING(15),
      allowNull: false,
      unique: "cno_UNIQUE"
    },
    situacao: {
      type: DataTypes.STRING(7),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'OBRAS',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "obraId" },
        ]
      },
      {
        name: "id_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "obraId" },
        ]
      },
      {
        name: "cno_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cno" },
        ]
      },
      {
        name: "nome_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "nome" },
        ]
      },
    ]
  });
};
