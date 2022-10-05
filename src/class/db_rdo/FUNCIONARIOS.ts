import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { EMPRESAS, EMPRESASId } from './EMPRESAS';
import type { EQUIPAMENTOS, EQUIPAMENTOSId } from './EQUIPAMENTOS';
import type { FUNCAO, FUNCAOId } from './FUNCAO';
import type { OBRAS, OBRASId } from './OBRAS';
import type { RDO_EQUIPAMENTOS, RDO_EQUIPAMENTOSId } from './RDO_EQUIPAMENTOS';
import type { RDO_FUNCIONARIOS, RDO_FUNCIONARIOSId } from './RDO_FUNCIONARIOS';

export interface FUNCIONARIOSAttributes {
  funcionarioId: number;
  nome: string;
  situacao: string;
  cpf: string;
  nascimento?: number;
  telefoneFixo?: string;
  telefoneCelular?: string;
  email?: string;
  apelido?: string;
  foto?: string;
  obraId: number;
  empresaId: number;
  funcaoId: number;
}

export type FUNCIONARIOSPk = "funcionarioId";
export type FUNCIONARIOSId = FUNCIONARIOS[FUNCIONARIOSPk];
export type FUNCIONARIOSOptionalAttributes = "funcionarioId" | "situacao" | "nascimento" | "telefoneFixo" | "telefoneCelular" | "email" | "apelido" | "foto";
export type FUNCIONARIOSCreationAttributes = Optional<FUNCIONARIOSAttributes, FUNCIONARIOSOptionalAttributes>;

export class FUNCIONARIOS extends Model<FUNCIONARIOSAttributes, FUNCIONARIOSCreationAttributes> implements FUNCIONARIOSAttributes {
  funcionarioId!: number;
  nome!: string;
  situacao!: string;
  cpf!: string;
  nascimento?: number;
  telefoneFixo?: string;
  telefoneCelular?: string;
  email?: string;
  apelido?: string;
  foto?: string;
  obraId!: number;
  empresaId!: number;
  funcaoId!: number;

  // FUNCIONARIOS belongsTo EMPRESAS via empresaId
  empresa!: EMPRESAS;
  getEmpresa!: Sequelize.BelongsToGetAssociationMixin<EMPRESAS>;
  setEmpresa!: Sequelize.BelongsToSetAssociationMixin<EMPRESAS, EMPRESASId>;
  createEmpresa!: Sequelize.BelongsToCreateAssociationMixin<EMPRESAS>;
  // FUNCIONARIOS belongsTo FUNCAO via funcaoId
  funcao!: FUNCAO;
  getFuncao!: Sequelize.BelongsToGetAssociationMixin<FUNCAO>;
  setFuncao!: Sequelize.BelongsToSetAssociationMixin<FUNCAO, FUNCAOId>;
  createFuncao!: Sequelize.BelongsToCreateAssociationMixin<FUNCAO>;
  // FUNCIONARIOS belongsToMany EQUIPAMENTOS via funcionarioId and equipamentoId
  equipamentoId_EQUIPAMENTOs!: EQUIPAMENTOS[];
  getEquipamentoId_EQUIPAMENTOs!: Sequelize.BelongsToManyGetAssociationsMixin<EQUIPAMENTOS>;
  setEquipamentoId_EQUIPAMENTOs!: Sequelize.BelongsToManySetAssociationsMixin<EQUIPAMENTOS, EQUIPAMENTOSId>;
  addEquipamentoId_EQUIPAMENTO!: Sequelize.BelongsToManyAddAssociationMixin<EQUIPAMENTOS, EQUIPAMENTOSId>;
  addEquipamentoId_EQUIPAMENTOs!: Sequelize.BelongsToManyAddAssociationsMixin<EQUIPAMENTOS, EQUIPAMENTOSId>;
  createEquipamentoId_EQUIPAMENTO!: Sequelize.BelongsToManyCreateAssociationMixin<EQUIPAMENTOS>;
  removeEquipamentoId_EQUIPAMENTO!: Sequelize.BelongsToManyRemoveAssociationMixin<EQUIPAMENTOS, EQUIPAMENTOSId>;
  removeEquipamentoId_EQUIPAMENTOs!: Sequelize.BelongsToManyRemoveAssociationsMixin<EQUIPAMENTOS, EQUIPAMENTOSId>;
  hasEquipamentoId_EQUIPAMENTO!: Sequelize.BelongsToManyHasAssociationMixin<EQUIPAMENTOS, EQUIPAMENTOSId>;
  hasEquipamentoId_EQUIPAMENTOs!: Sequelize.BelongsToManyHasAssociationsMixin<EQUIPAMENTOS, EQUIPAMENTOSId>;
  countEquipamentoId_EQUIPAMENTOs!: Sequelize.BelongsToManyCountAssociationsMixin;
  // FUNCIONARIOS hasMany RDO_EQUIPAMENTOS via funcionarioId
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
  // FUNCIONARIOS hasMany RDO_FUNCIONARIOS via funcionarioId
  RDO_FUNCIONARIOs!: RDO_FUNCIONARIOS[];
  getRDO_FUNCIONARIOs!: Sequelize.HasManyGetAssociationsMixin<RDO_FUNCIONARIOS>;
  setRDO_FUNCIONARIOs!: Sequelize.HasManySetAssociationsMixin<RDO_FUNCIONARIOS, RDO_FUNCIONARIOSId>;
  addRDO_FUNCIONARIO!: Sequelize.HasManyAddAssociationMixin<RDO_FUNCIONARIOS, RDO_FUNCIONARIOSId>;
  addRDO_FUNCIONARIOs!: Sequelize.HasManyAddAssociationsMixin<RDO_FUNCIONARIOS, RDO_FUNCIONARIOSId>;
  createRDO_FUNCIONARIO!: Sequelize.HasManyCreateAssociationMixin<RDO_FUNCIONARIOS>;
  removeRDO_FUNCIONARIO!: Sequelize.HasManyRemoveAssociationMixin<RDO_FUNCIONARIOS, RDO_FUNCIONARIOSId>;
  removeRDO_FUNCIONARIOs!: Sequelize.HasManyRemoveAssociationsMixin<RDO_FUNCIONARIOS, RDO_FUNCIONARIOSId>;
  hasRDO_FUNCIONARIO!: Sequelize.HasManyHasAssociationMixin<RDO_FUNCIONARIOS, RDO_FUNCIONARIOSId>;
  hasRDO_FUNCIONARIOs!: Sequelize.HasManyHasAssociationsMixin<RDO_FUNCIONARIOS, RDO_FUNCIONARIOSId>;
  countRDO_FUNCIONARIOs!: Sequelize.HasManyCountAssociationsMixin;
  // FUNCIONARIOS belongsTo OBRAS via obraId
  obra!: OBRAS;
  getObra!: Sequelize.BelongsToGetAssociationMixin<OBRAS>;
  setObra!: Sequelize.BelongsToSetAssociationMixin<OBRAS, OBRASId>;
  createObra!: Sequelize.BelongsToCreateAssociationMixin<OBRAS>;

  static initModel(sequelize: Sequelize.Sequelize): typeof FUNCIONARIOS {
    return sequelize.define('FUNCIONARIOS', {
      funcionarioId: {
        autoIncrement: true,
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true
      },
      nome: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
      situacao: {
        type: DataTypes.STRING(7),
        allowNull: false
      },
      cpf: {
        type: DataTypes.STRING(14),
        allowNull: false,
        unique: "cpf_UNIQUE"
      },
      nascimento: {
        type: DataTypes.BIGINT,
        allowNull: true
      },
      telefoneFixo: {
        type: DataTypes.STRING(14),
        allowNull: true
      },
      telefoneCelular: {
        type: DataTypes.STRING(16),
        allowNull: true
      },
      email: {
        type: DataTypes.STRING(45),
        allowNull: true
      },
      apelido: {
        type: DataTypes.STRING(20),
        allowNull: true
      },
      foto: {
        type: DataTypes.STRING(45),
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
      empresaId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          model: 'EMPRESAS',
          key: 'empresaId'
        }
      },
      funcaoId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          model: 'FUNCAO',
          key: 'funcaoId'
        }
      }
    }, {
      tableName: 'FUNCIONARIOS',
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [
            { name: "funcionarioId" },
          ]
        },
        {
          name: "cpf_UNIQUE",
          unique: true,
          using: "BTREE",
          fields: [
            { name: "cpf" },
          ]
        },
        {
          name: "funcionarioId_UNIQUE",
          unique: true,
          using: "BTREE",
          fields: [
            { name: "funcionarioId" },
          ]
        },
        {
          name: "fk_FUNCIONARIOS_OBRAS1_idx",
          using: "BTREE",
          fields: [
            { name: "obraId" },
          ]
        },
        {
          name: "fk_FUNCIONARIOS_EMPRESAS1_idx",
          using: "BTREE",
          fields: [
            { name: "empresaId" },
          ]
        },
        {
          name: "fk_FUNCIONARIOS_FUNCAO1_idx",
          using: "BTREE",
          fields: [
            { name: "funcaoId" },
          ]
        },
      ]
    }) as typeof FUNCIONARIOS;
  }
}
