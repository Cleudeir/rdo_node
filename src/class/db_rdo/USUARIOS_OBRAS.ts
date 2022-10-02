import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { OBRAS, OBRASId } from './OBRAS';
import type { USUARIOS, USUARIOSId } from './USUARIOS';

export interface USUARIOS_OBRASAttributes {
  uid: string;
  obraId: number;
}

export type USUARIOS_OBRASPk = "uid" | "obraId";
export type USUARIOS_OBRASId = USUARIOS_OBRAS[USUARIOS_OBRASPk];
export type USUARIOS_OBRASCreationAttributes = USUARIOS_OBRASAttributes;

export class USUARIOS_OBRAS extends Model<USUARIOS_OBRASAttributes, USUARIOS_OBRASCreationAttributes> implements USUARIOS_OBRASAttributes {
  uid!: string;
  obraId!: number;

  // USUARIOS_OBRAS belongsTo OBRAS via obraId
  obra!: OBRAS;
  getObra!: Sequelize.BelongsToGetAssociationMixin<OBRAS>;
  setObra!: Sequelize.BelongsToSetAssociationMixin<OBRAS, OBRASId>;
  createObra!: Sequelize.BelongsToCreateAssociationMixin<OBRAS>;
  // USUARIOS_OBRAS belongsTo USUARIOS via uid
  uid_USUARIO!: USUARIOS;
  getUid_USUARIO!: Sequelize.BelongsToGetAssociationMixin<USUARIOS>;
  setUid_USUARIO!: Sequelize.BelongsToSetAssociationMixin<USUARIOS, USUARIOSId>;
  createUid_USUARIO!: Sequelize.BelongsToCreateAssociationMixin<USUARIOS>;

  static initModel(sequelize: Sequelize.Sequelize): typeof USUARIOS_OBRAS {
    return sequelize.define('USUARIOS_OBRAS', {
    uid: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'USUARIOS',
        key: 'uid'
      }
    },
    obraId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'OBRAS',
        key: 'obraId'
      }
    },
  }, {
    tableName: 'USUARIOS_OBRAS',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "uid" },
          { name: "obraId" },
        ]
      },
      {
        name: "fk_USUARIOS_has_OBRAS_OBRAS1_idx",
        using: "BTREE",
        fields: [
          { name: "obraId" },
        ]
      },
      {
        name: "fk_USUARIOS_has_OBRAS_USUARIOS1_idx",
        using: "BTREE",
        fields: [
          { name: "uid" },
        ]
      },
    ]
  }) as typeof USUARIOS_OBRAS;
  }
}
