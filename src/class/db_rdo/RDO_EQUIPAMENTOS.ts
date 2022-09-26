import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { EQUIPAMENTOS, EQUIPAMENTOSId } from './EQUIPAMENTOS';
import type { FRENTES, FRENTESId } from './FRENTES';
import type { FUNCIONARIOS, FUNCIONARIOSId } from './FUNCIONARIOS';
import type { OBRAS, OBRASId } from './OBRAS';

export interface RDO_EQUIPAMENTOSAttributes {
  rdoId: number;
  descricao?: string;
  dataInicio?: number;
  dataFinal?: number;
  horimetroInicio?: number;
  horimetroFinal?: number;
  obraId: number;
  frenteId: number;
  equipamentoId: number;
  funcionarioId: number;
}

export type RDO_EQUIPAMENTOSPk = "rdoId" | "equipamentoId" | "funcionarioId";
export type RDO_EQUIPAMENTOSId = RDO_EQUIPAMENTOS[RDO_EQUIPAMENTOSPk];
export type RDO_EQUIPAMENTOSOptionalAttributes = "rdoId" | "descricao" | "dataInicio" | "dataFinal" | "horimetroInicio" | "horimetroFinal";
export type RDO_EQUIPAMENTOSCreationAttributes = Optional<RDO_EQUIPAMENTOSAttributes, RDO_EQUIPAMENTOSOptionalAttributes>;

export class RDO_EQUIPAMENTOS extends Model<RDO_EQUIPAMENTOSAttributes, RDO_EQUIPAMENTOSCreationAttributes> implements RDO_EQUIPAMENTOSAttributes {
  rdoId!: number;
  descricao?: string;
  dataInicio?: number;
  dataFinal?: number;
  horimetroInicio?: number;
  horimetroFinal?: number;
  obraId!: number;
  frenteId!: number;
  equipamentoId!: number;
  funcionarioId!: number;

  // RDO_EQUIPAMENTOS belongsTo EQUIPAMENTOS via equipamentoId
  equipamento!: EQUIPAMENTOS;
  getEquipamento!: Sequelize.BelongsToGetAssociationMixin<EQUIPAMENTOS>;
  setEquipamento!: Sequelize.BelongsToSetAssociationMixin<EQUIPAMENTOS, EQUIPAMENTOSId>;
  createEquipamento!: Sequelize.BelongsToCreateAssociationMixin<EQUIPAMENTOS>;
  // RDO_EQUIPAMENTOS belongsTo FRENTES via frenteId
  frente!: FRENTES;
  getFrente!: Sequelize.BelongsToGetAssociationMixin<FRENTES>;
  setFrente!: Sequelize.BelongsToSetAssociationMixin<FRENTES, FRENTESId>;
  createFrente!: Sequelize.BelongsToCreateAssociationMixin<FRENTES>;
  // RDO_EQUIPAMENTOS belongsTo FUNCIONARIOS via funcionarioId
  funcionario!: FUNCIONARIOS;
  getFuncionario!: Sequelize.BelongsToGetAssociationMixin<FUNCIONARIOS>;
  setFuncionario!: Sequelize.BelongsToSetAssociationMixin<FUNCIONARIOS, FUNCIONARIOSId>;
  createFuncionario!: Sequelize.BelongsToCreateAssociationMixin<FUNCIONARIOS>;
  // RDO_EQUIPAMENTOS belongsTo OBRAS via obraId
  obra!: OBRAS;
  getObra!: Sequelize.BelongsToGetAssociationMixin<OBRAS>;
  setObra!: Sequelize.BelongsToSetAssociationMixin<OBRAS, OBRASId>;
  createObra!: Sequelize.BelongsToCreateAssociationMixin<OBRAS>;

  static initModel(sequelize: Sequelize.Sequelize): typeof RDO_EQUIPAMENTOS {
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
  }) as typeof RDO_EQUIPAMENTOS;
  }
}
