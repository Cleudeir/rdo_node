const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('FUNCIONARIOS', {
    funcionarioId: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    situacao: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    cpf: {
      type: DataTypes.STRING(14),
      allowNull: false,
      unique: "cpf_UNIQUE"
    },
    nascimento: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    telefoneFixo: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    telefoneCelular: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    apelido: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    foto: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    obraId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'OBRAS',
        key: 'obraId'
      }
    },
    empresaId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'EMPRESAS',
        key: 'empresaId'
      }
    },
    funcaoId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'FUNCAO',
        key: 'funcaoId'
      }
    }
  }, {
    sequelize,
    tableName: 'FUNCIONARIOS',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "funcionarioId" },
        ]
      },
      {
        name: "cpf_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cpf" },
        ]
      },
      {
        name: "funcionarioId_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "funcionarioId" },
        ]
      },
      {
        name: "fk_FUNCIONARIOS_OBRAS1_idx",
        using: "BTREE",
        fields: [
          { name: "obraId" },
        ]
      },
      {
        name: "fk_FUNCIONARIOS_EMPRESAS1_idx",
        using: "BTREE",
        fields: [
          { name: "empresaId" },
        ]
      },
      {
        name: "fk_FUNCIONARIOS_FUNCAO1_idx",
        using: "BTREE",
        fields: [
          { name: "funcaoId" },
        ]
      },
    ]
  });
};
