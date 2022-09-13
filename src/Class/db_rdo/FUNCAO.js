const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('FUNCAO', {
    funcaoId: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    nomeFuncao: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: "nomeFuncao_UNIQUE"
    }
  }, {
    sequelize,
    tableName: 'FUNCAO',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "funcaoId" },
        ]
      },
      {
        name: "nomeFuncao_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "nomeFuncao" },
        ]
      },
    ]
  });
};
