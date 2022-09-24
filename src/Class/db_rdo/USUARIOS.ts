import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface USUARIOSAttributes {
  uid: string;
  nome?: string;
  foto?: string;
  email?: string;
  permissao?: string;
  situacao: string;
}

export type USUARIOSPk = "uid";
export type USUARIOSId = USUARIOS[USUARIOSPk];
export type USUARIOSOptionalAttributes = "nome" | "foto" | "email" | "permissao";
export type USUARIOSCreationAttributes = Optional<USUARIOSAttributes, USUARIOSOptionalAttributes>;

export class USUARIOS extends Model<USUARIOSAttributes, USUARIOSCreationAttributes> implements USUARIOSAttributes {
  uid!: string;
  nome?: string;
  foto?: string;
  email?: string;
  permissao?: string;
  situacao!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof USUARIOS {
    return sequelize.define('USUARIOS', {
    uid: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    foto: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    permissao: {
      type: DataTypes.STRING(12),
      allowNull: true,
      defaultValue: "[3]"
    },
    situacao: {
      type: DataTypes.STRING(7),
      allowNull: false
    }
  }, {
    tableName: 'USUARIOS',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "uid" },
        ]
      },
      {
        name: "id_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "uid" },
        ]
      },
    ]
  }) as typeof USUARIOS;
  }
}
