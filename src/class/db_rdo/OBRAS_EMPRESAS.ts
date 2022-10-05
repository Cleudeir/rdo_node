import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { EMPRESAS, EMPRESASId } from './EMPRESAS';
import type { OBRAS, OBRASId } from './OBRAS';

export interface OBRAS_EMPRESASAttributes {
  obraId: number;
  empresaId: number;
  situacao: string;
}

export type OBRAS_EMPRESASPk = "obraId" | "empresaId";
export type OBRAS_EMPRESASId = OBRAS_EMPRESAS[OBRAS_EMPRESASPk];
export type OBRAS_EMPRESASOptionalAttributes = "situacao";
export type OBRAS_EMPRESASCreationAttributes = Optional<OBRAS_EMPRESASAttributes, OBRAS_EMPRESASOptionalAttributes>;

export class OBRAS_EMPRESAS extends Model<OBRAS_EMPRESASAttributes, OBRAS_EMPRESASCreationAttributes> implements OBRAS_EMPRESASAttributes {
  obraId!: number;
  empresaId!: number;
  situacao: string;

  // OBRAS_EMPRESAS belongsTo EMPRESAS via empresaId
  empresa!: EMPRESAS;
  getEmpresa!: Sequelize.BelongsToGetAssociationMixin<EMPRESAS>;
  setEmpresa!: Sequelize.BelongsToSetAssociationMixin<EMPRESAS, EMPRESASId>;
  createEmpresa!: Sequelize.BelongsToCreateAssociationMixin<EMPRESAS>;
  // OBRAS_EMPRESAS belongsTo OBRAS via obraId
  obra!: OBRAS;
  getObra!: Sequelize.BelongsToGetAssociationMixin<OBRAS>;
  setObra!: Sequelize.BelongsToSetAssociationMixin<OBRAS, OBRASId>;
  createObra!: Sequelize.BelongsToCreateAssociationMixin<OBRAS>;

  static initModel(sequelize: Sequelize.Sequelize): typeof OBRAS_EMPRESAS {
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
      type: DataTypes.STRING(7),
      allowNull: false
    },
  }, {
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
  }) as typeof OBRAS_EMPRESAS;
  }
}
