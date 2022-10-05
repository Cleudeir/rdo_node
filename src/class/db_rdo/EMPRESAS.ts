import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { EQUIPAMENTOS, EQUIPAMENTOSId } from './EQUIPAMENTOS';
import type { FUNCIONARIOS, FUNCIONARIOSId } from './FUNCIONARIOS';
import type { OBRAS, OBRASId } from './OBRAS';
import type { OBRAS_EMPRESAS, OBRAS_EMPRESASId } from './OBRAS_EMPRESAS';

export interface EMPRESASAttributes {
  empresaId: number;
  cnpj: string;
  razaoSocial: string;
  situacao: string;
  nomeFantasia?: string;
  nomeResponsavel?: string;
  telefoneFixo?: string;
  telefoneCelular?: string;
}

export type EMPRESASPk = "empresaId";
export type EMPRESASId = EMPRESAS[EMPRESASPk];
export type EMPRESASOptionalAttributes = "empresaId" | "situacao" | "nomeFantasia" | "nomeResponsavel" | "telefoneFixo" | "telefoneCelular";
export type EMPRESASCreationAttributes = Optional<EMPRESASAttributes, EMPRESASOptionalAttributes>;

export class EMPRESAS extends Model<EMPRESASAttributes, EMPRESASCreationAttributes> implements EMPRESASAttributes {
  empresaId!: number;
  cnpj!: string;
  razaoSocial!: string;
  situacao: string;
  nomeFantasia?: string;
  nomeResponsavel?: string;
  telefoneFixo?: string;
  telefoneCelular?: string;

  // EMPRESAS hasMany EQUIPAMENTOS via empresaId
  EQUIPAMENTOs!: EQUIPAMENTOS[];
  getEQUIPAMENTOs!: Sequelize.HasManyGetAssociationsMixin<EQUIPAMENTOS>;
  setEQUIPAMENTOs!: Sequelize.HasManySetAssociationsMixin<EQUIPAMENTOS, EQUIPAMENTOSId>;
  addEQUIPAMENTO!: Sequelize.HasManyAddAssociationMixin<EQUIPAMENTOS, EQUIPAMENTOSId>;
  addEQUIPAMENTOs!: Sequelize.HasManyAddAssociationsMixin<EQUIPAMENTOS, EQUIPAMENTOSId>;
  createEQUIPAMENTO!: Sequelize.HasManyCreateAssociationMixin<EQUIPAMENTOS>;
  removeEQUIPAMENTO!: Sequelize.HasManyRemoveAssociationMixin<EQUIPAMENTOS, EQUIPAMENTOSId>;
  removeEQUIPAMENTOs!: Sequelize.HasManyRemoveAssociationsMixin<EQUIPAMENTOS, EQUIPAMENTOSId>;
  hasEQUIPAMENTO!: Sequelize.HasManyHasAssociationMixin<EQUIPAMENTOS, EQUIPAMENTOSId>;
  hasEQUIPAMENTOs!: Sequelize.HasManyHasAssociationsMixin<EQUIPAMENTOS, EQUIPAMENTOSId>;
  countEQUIPAMENTOs!: Sequelize.HasManyCountAssociationsMixin;
  // EMPRESAS hasMany FUNCIONARIOS via empresaId
  FUNCIONARIOs!: FUNCIONARIOS[];
  getFUNCIONARIOs!: Sequelize.HasManyGetAssociationsMixin<FUNCIONARIOS>;
  setFUNCIONARIOs!: Sequelize.HasManySetAssociationsMixin<FUNCIONARIOS, FUNCIONARIOSId>;
  addFUNCIONARIO!: Sequelize.HasManyAddAssociationMixin<FUNCIONARIOS, FUNCIONARIOSId>;
  addFUNCIONARIOs!: Sequelize.HasManyAddAssociationsMixin<FUNCIONARIOS, FUNCIONARIOSId>;
  createFUNCIONARIO!: Sequelize.HasManyCreateAssociationMixin<FUNCIONARIOS>;
  removeFUNCIONARIO!: Sequelize.HasManyRemoveAssociationMixin<FUNCIONARIOS, FUNCIONARIOSId>;
  removeFUNCIONARIOs!: Sequelize.HasManyRemoveAssociationsMixin<FUNCIONARIOS, FUNCIONARIOSId>;
  hasFUNCIONARIO!: Sequelize.HasManyHasAssociationMixin<FUNCIONARIOS, FUNCIONARIOSId>;
  hasFUNCIONARIOs!: Sequelize.HasManyHasAssociationsMixin<FUNCIONARIOS, FUNCIONARIOSId>;
  countFUNCIONARIOs!: Sequelize.HasManyCountAssociationsMixin;
  // EMPRESAS belongsToMany OBRAS via empresaId and obraId
  obraId_OBRAs!: OBRAS[];
  getObraId_OBRAs!: Sequelize.BelongsToManyGetAssociationsMixin<OBRAS>;
  setObraId_OBRAs!: Sequelize.BelongsToManySetAssociationsMixin<OBRAS, OBRASId>;
  addObraId_OBRA!: Sequelize.BelongsToManyAddAssociationMixin<OBRAS, OBRASId>;
  addObraId_OBRAs!: Sequelize.BelongsToManyAddAssociationsMixin<OBRAS, OBRASId>;
  createObraId_OBRA!: Sequelize.BelongsToManyCreateAssociationMixin<OBRAS>;
  removeObraId_OBRA!: Sequelize.BelongsToManyRemoveAssociationMixin<OBRAS, OBRASId>;
  removeObraId_OBRAs!: Sequelize.BelongsToManyRemoveAssociationsMixin<OBRAS, OBRASId>;
  hasObraId_OBRA!: Sequelize.BelongsToManyHasAssociationMixin<OBRAS, OBRASId>;
  hasObraId_OBRAs!: Sequelize.BelongsToManyHasAssociationsMixin<OBRAS, OBRASId>;
  countObraId_OBRAs!: Sequelize.BelongsToManyCountAssociationsMixin;
  // EMPRESAS hasMany OBRAS_EMPRESAS via empresaId
  OBRAS_EMPRESAs!: OBRAS_EMPRESAS[];
  getOBRAS_EMPRESAs!: Sequelize.HasManyGetAssociationsMixin<OBRAS_EMPRESAS>;
  setOBRAS_EMPRESAs!: Sequelize.HasManySetAssociationsMixin<OBRAS_EMPRESAS, OBRAS_EMPRESASId>;
  addOBRAS_EMPRESA!: Sequelize.HasManyAddAssociationMixin<OBRAS_EMPRESAS, OBRAS_EMPRESASId>;
  addOBRAS_EMPRESAs!: Sequelize.HasManyAddAssociationsMixin<OBRAS_EMPRESAS, OBRAS_EMPRESASId>;
  createOBRAS_EMPRESA!: Sequelize.HasManyCreateAssociationMixin<OBRAS_EMPRESAS>;
  removeOBRAS_EMPRESA!: Sequelize.HasManyRemoveAssociationMixin<OBRAS_EMPRESAS, OBRAS_EMPRESASId>;
  removeOBRAS_EMPRESAs!: Sequelize.HasManyRemoveAssociationsMixin<OBRAS_EMPRESAS, OBRAS_EMPRESASId>;
  hasOBRAS_EMPRESA!: Sequelize.HasManyHasAssociationMixin<OBRAS_EMPRESAS, OBRAS_EMPRESASId>;
  hasOBRAS_EMPRESAs!: Sequelize.HasManyHasAssociationsMixin<OBRAS_EMPRESAS, OBRAS_EMPRESASId>;
  countOBRAS_EMPRESAs!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof EMPRESAS {
    return sequelize.define('EMPRESAS', {
      empresaId: {
        autoIncrement: true,
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true
      },
      cnpj: {
        type: DataTypes.STRING(18),
        allowNull: false,
        unique: "cnpj_UNIQUE"
      },
      razaoSocial: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
      nomeFantasia: {
        type: DataTypes.STRING(45),
        allowNull: true
      },
      nomeResponsavel: {
        type: DataTypes.STRING(45),
        allowNull: true
      },
      telefoneFixo: {
        type: DataTypes.STRING(14),
        allowNull: true
      },
      telefoneCelular: {
        type: DataTypes.STRING(16),
        allowNull: true
      }, situacao: {
        type: DataTypes.STRING(7),
        allowNull: false
      }
    }, {
      tableName: 'EMPRESAS',
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [
            { name: "empresaId" },
          ]
        },
        {
          name: "cnpj_UNIQUE",
          unique: true,
          using: "BTREE",
          fields: [
            { name: "cnpj" },
          ]
        },
      ]
    }) as typeof EMPRESAS;
  }
}
