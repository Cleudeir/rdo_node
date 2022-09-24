import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { EMPRESAS, EMPRESASId } from './EMPRESAS';
import type { EQUIPAMENTOS, EQUIPAMENTOSId } from './EQUIPAMENTOS';
import type { FRENTES, FRENTESId } from './FRENTES';
import type { FUNCIONARIOS, FUNCIONARIOSId } from './FUNCIONARIOS';
import type { OBRAS_EMPRESAS, OBRAS_EMPRESASId } from './OBRAS_EMPRESAS';
import type { RDO_EQUIPAMENTOS, RDO_EQUIPAMENTOSId } from './RDO_EQUIPAMENTOS';
import type { RDO_FUNCIONARIOS, RDO_FUNCIONARIOSId } from './RDO_FUNCIONARIOS';

export interface OBRASAttributes {
  obraId: number;
  nome: string;
  cep: string;
  logradouro: string;
  numero?: string;
  bairro: string;
  cidade: string;
  estado: string;
  telefoneFixo?: string;
  telefoneCelular?: string;
  cno: string;
  situacao: string;
}

export type OBRASPk = "obraId";
export type OBRASId = OBRAS[OBRASPk];
export type OBRASOptionalAttributes = "obraId" | "numero" | "telefoneFixo" | "telefoneCelular";
export type OBRASCreationAttributes = Optional<OBRASAttributes, OBRASOptionalAttributes>;

export class OBRAS extends Model<OBRASAttributes, OBRASCreationAttributes> implements OBRASAttributes {
  obraId!: number;
  nome!: string;
  cep!: string;
  logradouro!: string;
  numero?: string;
  bairro!: string;
  cidade!: string;
  estado!: string;
  telefoneFixo?: string;
  telefoneCelular?: string;
  cno!: string;
  situacao!: string;

  // OBRAS belongsToMany EMPRESAS via obraId and empresaId
  empresaId_EMPRESAs!: EMPRESAS[];
  getEmpresaId_EMPRESAs!: Sequelize.BelongsToManyGetAssociationsMixin<EMPRESAS>;
  setEmpresaId_EMPRESAs!: Sequelize.BelongsToManySetAssociationsMixin<EMPRESAS, EMPRESASId>;
  addEmpresaId_EMPRESA!: Sequelize.BelongsToManyAddAssociationMixin<EMPRESAS, EMPRESASId>;
  addEmpresaId_EMPRESAs!: Sequelize.BelongsToManyAddAssociationsMixin<EMPRESAS, EMPRESASId>;
  createEmpresaId_EMPRESA!: Sequelize.BelongsToManyCreateAssociationMixin<EMPRESAS>;
  removeEmpresaId_EMPRESA!: Sequelize.BelongsToManyRemoveAssociationMixin<EMPRESAS, EMPRESASId>;
  removeEmpresaId_EMPRESAs!: Sequelize.BelongsToManyRemoveAssociationsMixin<EMPRESAS, EMPRESASId>;
  hasEmpresaId_EMPRESA!: Sequelize.BelongsToManyHasAssociationMixin<EMPRESAS, EMPRESASId>;
  hasEmpresaId_EMPRESAs!: Sequelize.BelongsToManyHasAssociationsMixin<EMPRESAS, EMPRESASId>;
  countEmpresaId_EMPRESAs!: Sequelize.BelongsToManyCountAssociationsMixin;
  // OBRAS hasMany EQUIPAMENTOS via obraId
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
  // OBRAS hasMany FRENTES via obraId
  FRENTEs!: FRENTES[];
  getFRENTEs!: Sequelize.HasManyGetAssociationsMixin<FRENTES>;
  setFRENTEs!: Sequelize.HasManySetAssociationsMixin<FRENTES, FRENTESId>;
  addFRENTE!: Sequelize.HasManyAddAssociationMixin<FRENTES, FRENTESId>;
  addFRENTEs!: Sequelize.HasManyAddAssociationsMixin<FRENTES, FRENTESId>;
  createFRENTE!: Sequelize.HasManyCreateAssociationMixin<FRENTES>;
  removeFRENTE!: Sequelize.HasManyRemoveAssociationMixin<FRENTES, FRENTESId>;
  removeFRENTEs!: Sequelize.HasManyRemoveAssociationsMixin<FRENTES, FRENTESId>;
  hasFRENTE!: Sequelize.HasManyHasAssociationMixin<FRENTES, FRENTESId>;
  hasFRENTEs!: Sequelize.HasManyHasAssociationsMixin<FRENTES, FRENTESId>;
  countFRENTEs!: Sequelize.HasManyCountAssociationsMixin;
  // OBRAS hasMany FUNCIONARIOS via obraId
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
  // OBRAS hasMany OBRAS_EMPRESAS via obraId
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
  // OBRAS hasMany RDO_EQUIPAMENTOS via obraId
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
  // OBRAS hasMany RDO_FUNCIONARIOS via obraId
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

  static initModel(sequelize: Sequelize.Sequelize): typeof OBRAS {
    return sequelize.define('OBRAS', {
    obraId: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING(18),
      allowNull: false,
      unique: "nome_UNIQUE"
    },
    cep: {
      type: DataTypes.STRING(9),
      allowNull: false
    },
    logradouro: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    numero: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    bairro: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    cidade: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    estado: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    telefoneFixo: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    telefoneCelular: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    cno: {
      type: DataTypes.STRING(15),
      allowNull: false,
      unique: "cno_UNIQUE"
    },
    situacao: {
      type: DataTypes.STRING(7),
      allowNull: false
    }
  }, {
    tableName: 'OBRAS',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "obraId" },
        ]
      },
      {
        name: "id_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "obraId" },
        ]
      },
      {
        name: "cno_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cno" },
        ]
      },
      {
        name: "nome_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "nome" },
        ]
      },
    ]
  }) as typeof OBRAS;
  }
}
