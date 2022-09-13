const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('OBRAS_EMPRESAS', {
    obraId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'OBRAS',
        key: 'obraId'
      }
    },
    empresaId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'EMPRESAS',
        key: 'empresaId'
      }
    },
    situacao: {
      type: DataTypes.TINYINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'OBRAS_EMPRESAS',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "obraId" },
          { name: "empresaId" },
        ]
      },
      {
        name: "fk_OBRAS_has_EMPRESAS_EMPRESAS1_idx",
        using: "BTREE",
        fields: [
          { name: "empresaId" },
        ]
      },
      {
        name: "fk_OBRAS_has_EMPRESAS_OBRAS1_idx",
        using: "BTREE",
        fields: [
          { name: "obraId" },
        ]
      },
    ]
  });
};
