const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RDO_EQUIPAMENTOS', {
    rdoId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    descricao: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    dataInicio: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    dataFinal: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    horimetroInicio: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    horimetroFinal: {
      type: DataTypes.BIGINT,
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
    frenteId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'FRENTES',
        key: 'frenteId'
      }
    },
    equipamentoId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'EQUIPAMENTOS',
        key: 'equipamentoId'
      }
    },
    funcionarioId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'FUNCIONARIOS',
        key: 'funcionarioId'
      }
    }
  }, {
    sequelize,
    tableName: 'RDO_EQUIPAMENTOS',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "rdoId" },
          { name: "equipamentoId" },
          { name: "funcionarioId" },
        ]
      },
      {
        name: "fk_RDO_FUNCIONARIOS_OBRAS1_idx",
        using: "BTREE",
        fields: [
          { name: "obraId" },
        ]
      },
      {
        name: "fk_RDO_FUNCIONARIOS_frente1_idx",
        using: "BTREE",
        fields: [
          { name: "frenteId" },
        ]
      },
      {
        name: "fk_RDO_EQUIPAMENTO_EQUIPAMENTOS1_idx",
        using: "BTREE",
        fields: [
          { name: "equipamentoId" },
        ]
      },
      {
        name: "fk_RDO_EQUIPAMENTO_FUNCIONARIOS1_idx",
        using: "BTREE",
        fields: [
          { name: "funcionarioId" },
        ]
      },
    ]
  });
};
