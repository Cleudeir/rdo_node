import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { OBRAS, OBRASId } from './OBRAS';
import type { RDO_EQUIPAMENTOS, RDO_EQUIPAMENTOSId } from './RDO_EQUIPAMENTOS';
import type { RDO_FUNCIONARIOS, RDO_FUNCIONARIOSId } from './RDO_FUNCIONARIOS';

export interface FRENTESAttributes {
  frenteId: number;
  situacao: string;
  nome?: string;
  localizacao?: string;
  obraId: number;
  observacao?: string;  
}

export type FRENTESPk = "frenteId";
export type FRENTESId = FRENTES[FRENTESPk];
export type FRENTESOptionalAttributes = "frenteId" | "nome" | "localizacao" | "observacao";
export type FRENTESCreationAttributes = Optional<FRENTESAttributes, FRENTESOptionalAttributes>;

export class FRENTES extends Model<FRENTESAttributes, FRENTESCreationAttributes> implements FRENTESAttributes {
  frenteId!: number;
  nome?: string;
  localizacao?: string;
  obraId!: number;
  observacao?: string;
  situacao!: string;

  // FRENTES hasMany RDO_EQUIPAMENTOS via frenteId
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
  // FRENTES hasMany RDO_FUNCIONARIOS via frenteId
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
  // FRENTES belongsTo OBRAS via obraId
  obra!: OBRAS;
  getObra!: Sequelize.BelongsToGetAssociationMixin<OBRAS>;
  setObra!: Sequelize.BelongsToSetAssociationMixin<OBRAS, OBRASId>;
  createObra!: Sequelize.BelongsToCreateAssociationMixin<OBRAS>;

  static initModel(sequelize: Sequelize.Sequelize): typeof FRENTES {
    return sequelize.define('FRENTES', {
    frenteId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    localizacao: {
      type: DataTypes.STRING(30),
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
    observacao: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    situacao: {
      type: DataTypes.STRING(7),
      allowNull: false
    }
  }, {
    tableName: 'FRENTES',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "frenteId" },
        ]
      },
      {
        name: "fk_frente_OBRAS1_idx",
        using: "BTREE",
        fields: [
          { name: "obraId" },
        ]
      },
    ]
  }) as typeof FRENTES;
  }
}
