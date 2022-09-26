import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { OBRAS, OBRASId } from './OBRAS';
import type { USUARIOS_OBRAS, USUARIOS_OBRASId } from './USUARIOS_OBRAS';

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

  // USUARIOS belongsToMany OBRAS via uid and obraId
  obraId_OBRAS_USUARIOS_OBRAs!: OBRAS[];
  getObraId_OBRAS_USUARIOS_OBRAs!: Sequelize.BelongsToManyGetAssociationsMixin<OBRAS>;
  setObraId_OBRAS_USUARIOS_OBRAs!: Sequelize.BelongsToManySetAssociationsMixin<OBRAS, OBRASId>;
  addObraId_OBRAS_USUARIOS_OBRA!: Sequelize.BelongsToManyAddAssociationMixin<OBRAS, OBRASId>;
  addObraId_OBRAS_USUARIOS_OBRAs!: Sequelize.BelongsToManyAddAssociationsMixin<OBRAS, OBRASId>;
  createObraId_OBRAS_USUARIOS_OBRA!: Sequelize.BelongsToManyCreateAssociationMixin<OBRAS>;
  removeObraId_OBRAS_USUARIOS_OBRA!: Sequelize.BelongsToManyRemoveAssociationMixin<OBRAS, OBRASId>;
  removeObraId_OBRAS_USUARIOS_OBRAs!: Sequelize.BelongsToManyRemoveAssociationsMixin<OBRAS, OBRASId>;
  hasObraId_OBRAS_USUARIOS_OBRA!: Sequelize.BelongsToManyHasAssociationMixin<OBRAS, OBRASId>;
  hasObraId_OBRAS_USUARIOS_OBRAs!: Sequelize.BelongsToManyHasAssociationsMixin<OBRAS, OBRASId>;
  countObraId_OBRAS_USUARIOS_OBRAs!: Sequelize.BelongsToManyCountAssociationsMixin;
  // USUARIOS hasMany USUARIOS_OBRAS via uid
  USUARIOS_OBRAs!: USUARIOS_OBRAS[];
  getUSUARIOS_OBRAs!: Sequelize.HasManyGetAssociationsMixin<USUARIOS_OBRAS>;
  setUSUARIOS_OBRAs!: Sequelize.HasManySetAssociationsMixin<USUARIOS_OBRAS, USUARIOS_OBRASId>;
  addUSUARIOS_OBRA!: Sequelize.HasManyAddAssociationMixin<USUARIOS_OBRAS, USUARIOS_OBRASId>;
  addUSUARIOS_OBRAs!: Sequelize.HasManyAddAssociationsMixin<USUARIOS_OBRAS, USUARIOS_OBRASId>;
  createUSUARIOS_OBRA!: Sequelize.HasManyCreateAssociationMixin<USUARIOS_OBRAS>;
  removeUSUARIOS_OBRA!: Sequelize.HasManyRemoveAssociationMixin<USUARIOS_OBRAS, USUARIOS_OBRASId>;
  removeUSUARIOS_OBRAs!: Sequelize.HasManyRemoveAssociationsMixin<USUARIOS_OBRAS, USUARIOS_OBRASId>;
  hasUSUARIOS_OBRA!: Sequelize.HasManyHasAssociationMixin<USUARIOS_OBRAS, USUARIOS_OBRASId>;
  hasUSUARIOS_OBRAs!: Sequelize.HasManyHasAssociationsMixin<USUARIOS_OBRAS, USUARIOS_OBRASId>;
  countUSUARIOS_OBRAs!: Sequelize.HasManyCountAssociationsMixin;

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
