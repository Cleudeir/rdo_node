import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { EQUIPAMENTOS, EQUIPAMENTOSId } from './EQUIPAMENTOS';

export interface CATEGORIAAttributes {
  categoriaId: number;
  nomeCategoria: string;
}

export type CATEGORIAPk = "categoriaId";
export type CATEGORIAId = CATEGORIA[CATEGORIAPk];
export type CATEGORIAOptionalAttributes = "categoriaId";
export type CATEGORIACreationAttributes = Optional<CATEGORIAAttributes, CATEGORIAOptionalAttributes>;

export class CATEGORIA extends Model<CATEGORIAAttributes, CATEGORIACreationAttributes> implements CATEGORIAAttributes {
  categoriaId!: number;
  nomeCategoria!: string;

  // CATEGORIA hasMany EQUIPAMENTOS via categoriaId
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

  static initModel(sequelize: Sequelize.Sequelize): typeof CATEGORIA {
    return sequelize.define('CATEGORIA', {
    categoriaId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nomeCategoria: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: "nomeCategoria_UNIQUE"
    }
  }, {
    tableName: 'CATEGORIA',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "categoriaId" },
        ]
      },
      {
        name: "nomeCategoria_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "nomeCategoria" },
        ]
      },
    ]
  }) as typeof CATEGORIA;
  }
}
