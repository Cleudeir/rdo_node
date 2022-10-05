import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { CATEGORIA, CATEGORIAId } from './CATEGORIA';
import type { EMPRESAS, EMPRESASId } from './EMPRESAS';
import type { FUNCIONARIOS, FUNCIONARIOSId } from './FUNCIONARIOS';
import type { OBRAS, OBRASId } from './OBRAS';
import type { RDO_EQUIPAMENTOS, RDO_EQUIPAMENTOSId } from './RDO_EQUIPAMENTOS';

export interface EQUIPAMENTOSAttributes {
  equipamentoId: number;
  nomeEquipamento: string;
  situacao: string;
  numeracao: number;
  anoFabricacao?: number;
  apelido?: string;
  empresaId: number;
  obraId: number;
  categoriaId: number;
}

export type EQUIPAMENTOSPk = "equipamentoId" | "obraId";
export type EQUIPAMENTOSId = EQUIPAMENTOS[EQUIPAMENTOSPk];
export type EQUIPAMENTOSOptionalAttributes = "equipamentoId" | "situacao" | "anoFabricacao" | "apelido";
export type EQUIPAMENTOSCreationAttributes = Optional<EQUIPAMENTOSAttributes, EQUIPAMENTOSOptionalAttributes>;

export class EQUIPAMENTOS extends Model<EQUIPAMENTOSAttributes, EQUIPAMENTOSCreationAttributes> implements EQUIPAMENTOSAttributes {
  equipamentoId!: number;
  nomeEquipamento!: string;
  situacao: string;
  numeracao!: number;
  anoFabricacao?: number;
  apelido?: string;
  empresaId!: number;
  obraId!: number;
  categoriaId!: number;

  // EQUIPAMENTOS belongsTo CATEGORIA via categoriaId
  categorium!: CATEGORIA;
  getCategorium!: Sequelize.BelongsToGetAssociationMixin<CATEGORIA>;
  setCategorium!: Sequelize.BelongsToSetAssociationMixin<CATEGORIA, CATEGORIAId>;
  createCategorium!: Sequelize.BelongsToCreateAssociationMixin<CATEGORIA>;
  // EQUIPAMENTOS belongsTo EMPRESAS via empresaId
  empresa!: EMPRESAS;
  getEmpresa!: Sequelize.BelongsToGetAssociationMixin<EMPRESAS>;
  setEmpresa!: Sequelize.BelongsToSetAssociationMixin<EMPRESAS, EMPRESASId>;
  createEmpresa!: Sequelize.BelongsToCreateAssociationMixin<EMPRESAS>;
  // EQUIPAMENTOS belongsToMany FUNCIONARIOS via equipamentoId and funcionarioId
  funcionarioId_FUNCIONARIOs!: FUNCIONARIOS[];
  getFuncionarioId_FUNCIONARIOs!: Sequelize.BelongsToManyGetAssociationsMixin<FUNCIONARIOS>;
  setFuncionarioId_FUNCIONARIOs!: Sequelize.BelongsToManySetAssociationsMixin<FUNCIONARIOS, FUNCIONARIOSId>;
  addFuncionarioId_FUNCIONARIO!: Sequelize.BelongsToManyAddAssociationMixin<FUNCIONARIOS, FUNCIONARIOSId>;
  addFuncionarioId_FUNCIONARIOs!: Sequelize.BelongsToManyAddAssociationsMixin<FUNCIONARIOS, FUNCIONARIOSId>;
  createFuncionarioId_FUNCIONARIO!: Sequelize.BelongsToManyCreateAssociationMixin<FUNCIONARIOS>;
  removeFuncionarioId_FUNCIONARIO!: Sequelize.BelongsToManyRemoveAssociationMixin<FUNCIONARIOS, FUNCIONARIOSId>;
  removeFuncionarioId_FUNCIONARIOs!: Sequelize.BelongsToManyRemoveAssociationsMixin<FUNCIONARIOS, FUNCIONARIOSId>;
  hasFuncionarioId_FUNCIONARIO!: Sequelize.BelongsToManyHasAssociationMixin<FUNCIONARIOS, FUNCIONARIOSId>;
  hasFuncionarioId_FUNCIONARIOs!: Sequelize.BelongsToManyHasAssociationsMixin<FUNCIONARIOS, FUNCIONARIOSId>;
  countFuncionarioId_FUNCIONARIOs!: Sequelize.BelongsToManyCountAssociationsMixin;
  // EQUIPAMENTOS hasMany RDO_EQUIPAMENTOS via equipamentoId
  RDO_EQUIPAMENTOs!: RDO_EQUIPAMENTOS[];
  getRDO_EQUIPAMENTOs!: Sequelize.HasManyGetAssociationsMixin<RDO_EQUIPAMENTOS>;
  setRDO_EQUIPAMENTOs!: Sequelize.HasManySetAssociationsMixin<RDO_EQUIPAMENTOS, RDO_EQUIPAMENTOSId>;
  addRDO_EQUIPAMENTO!: Sequelize.HasManyAddAssociationMixin<RDO_EQUIPAMENTOS, RDO_EQUIPAMENTOSId>;
  addRDO_EQUIPAMENTOs!: Sequelize.HasManyAddAssociationsMixin<RDO_EQUIPAMENTOS, RDO_EQUIPAMENTOSId>;
  createRDO_EQUIPAMENTO!: Sequelize.HasManyCreateAssociationMixin<RDO_EQUIPAMENTOS>;
  removeRDO_EQUIPAMENTO!: Sequelize.HasManyRemoveAssociationMixin<RDO_EQUIPAMENTOS, RDO_EQUIPAMENTOSId>;
  removeRDO_EQUIPAMENTOs!: Sequelize.HasManyRemoveAssociationsMixin<RDO_EQUIPAMENTOS, RDO_EQUIPAMENTOSId>;
  hasRDO_EQUIPAMENTO!: Sequelize.HasManyHasAssociationMixin<RDO_EQUIPAMENTOS, RDO_EQUIPAMENTOSId>;
  hasRDO_EQUIPAMENTOs!: Sequelize.HasManyHasAssociationsMixin<RDO_EQUIPAMENTOS, RDO_EQUIPAMENTOSId>;
  countRDO_EQUIPAMENTOs!: Sequelize.HasManyCountAssociationsMixin;
  // EQUIPAMENTOS belongsTo OBRAS via obraId
  obra!: OBRAS;
  getObra!: Sequelize.BelongsToGetAssociationMixin<OBRAS>;
  setObra!: Sequelize.BelongsToSetAssociationMixin<OBRAS, OBRASId>;
  createObra!: Sequelize.BelongsToCreateAssociationMixin<OBRAS>;

  static initModel(sequelize: Sequelize.Sequelize): typeof EQUIPAMENTOS {
    return sequelize.define('EQUIPAMENTOS', {
    equipamentoId: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    nomeEquipamento: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    situacao: {
      type: DataTypes.STRING(7),
      allowNull: false
    },
    numeracao: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      unique: "cpf_UNIQUE"
    },
    anoFabricacao: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    apelido: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    empresaId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'EMPRESAS',
        key: 'empresaId'
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
    categoriaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'CATEGORIA',
        key: 'categoriaId'
      }
    }
  }, {
    tableName: 'EQUIPAMENTOS',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "equipamentoId" },
          { name: "obraId" },
        ]
      },
      {
        name: "cpf_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "numeracao" },
        ]
      },
      {
        name: "matricula_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "equipamentoId" },
        ]
      },
      {
        name: "fk_EQUIPAMENTOS_EMPRESAS1_idx",
        using: "BTREE",
        fields: [
          { name: "empresaId" },
        ]
      },
      {
        name: "fk_EQUIPAMENTOS_OBRAS1_idx",
        using: "BTREE",
        fields: [
          { name: "obraId" },
        ]
      },
      {
        name: "fk_EQUIPAMENTOS_categoria1_idx",
        using: "BTREE",
        fields: [
          { name: "categoriaId" },
        ]
      },
    ]
  }) as typeof EQUIPAMENTOS;
  }
}
