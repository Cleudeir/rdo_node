import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { FRENTES, FRENTESId } from './FRENTES';
import type { FUNCIONARIOS, FUNCIONARIOSId } from './FUNCIONARIOS';
import type { OBRAS, OBRASId } from './OBRAS';

export interface RDO_FUNCIONARIOSAttributes {
  rdoId: number;
  descricao?: string;
  dataInicio?: number;
  dataFinal?: number;
  obraId: number;
  frenteId: number;
  funcionarioId: number;
}

export type RDO_FUNCIONARIOSPk = "rdoId";
export type RDO_FUNCIONARIOSId = RDO_FUNCIONARIOS[RDO_FUNCIONARIOSPk];
export type RDO_FUNCIONARIOSOptionalAttributes = "rdoId" | "descricao" | "dataInicio" | "dataFinal";
export type RDO_FUNCIONARIOSCreationAttributes = Optional<RDO_FUNCIONARIOSAttributes, RDO_FUNCIONARIOSOptionalAttributes>;

export class RDO_FUNCIONARIOS extends Model<RDO_FUNCIONARIOSAttributes, RDO_FUNCIONARIOSCreationAttributes> implements RDO_FUNCIONARIOSAttributes {
  rdoId!: number;
  descricao?: string;
  dataInicio?: number;
  dataFinal?: number;
  obraId!: number;
  frenteId!: number;
  funcionarioId!: number;

  // RDO_FUNCIONARIOS belongsTo FRENTES via frenteId
  frente!: FRENTES;
  getFrente!: Sequelize.BelongsToGetAssociationMixin<FRENTES>;
  setFrente!: Sequelize.BelongsToSetAssociationMixin<FRENTES, FRENTESId>;
  createFrente!: Sequelize.BelongsToCreateAssociationMixin<FRENTES>;
  // RDO_FUNCIONARIOS belongsTo FUNCIONARIOS via funcionarioId
  funcionario!: FUNCIONARIOS;
  getFuncionario!: Sequelize.BelongsToGetAssociationMixin<FUNCIONARIOS>;
  setFuncionario!: Sequelize.BelongsToSetAssociationMixin<FUNCIONARIOS, FUNCIONARIOSId>;
  createFuncionario!: Sequelize.BelongsToCreateAssociationMixin<FUNCIONARIOS>;
  // RDO_FUNCIONARIOS belongsTo OBRAS via obraId
  obra!: OBRAS;
  getObra!: Sequelize.BelongsToGetAssociationMixin<OBRAS>;
  setObra!: Sequelize.BelongsToSetAssociationMixin<OBRAS, OBRASId>;
  createObra!: Sequelize.BelongsToCreateAssociationMixin<OBRAS>;

  static initModel(sequelize: Sequelize.Sequelize): typeof RDO_FUNCIONARIOS {
    return sequelize.define('RDO_FUNCIONARIOS', {
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
    funcionarioId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'FUNCIONARIOS',
        key: 'funcionarioId'
      }
    }
  }, {
    tableName: 'RDO_FUNCIONARIOS',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "rdoId" },
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
        name: "fk_RDO_FUNCIONARIOS_FUNCIONARIOS1_idx",
        using: "BTREE",
        fields: [
          { name: "funcionarioId" },
        ]
      },
    ]
  }) as typeof RDO_FUNCIONARIOS;
  }
}
