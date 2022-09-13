const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FRENTES', {
    frenteId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    localizacao: {
      type: DataTypes.STRING(30),
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
    observacao: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'FRENTES',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "frenteId" },
        ]
      },
      {
        name: "fk_frente_OBRAS1_idx",
        using: "BTREE",
        fields: [
          { name: "obraId" },
        ]
      },
    ]
  });
};
