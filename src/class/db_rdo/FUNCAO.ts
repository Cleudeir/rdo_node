import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { FUNCIONARIOS, FUNCIONARIOSId } from './FUNCIONARIOS';

export interface FUNCAOAttributes {
  funcaoId: number;
  nomeFuncao: string;
}

export type FUNCAOPk = "funcaoId";
export type FUNCAOId = FUNCAO[FUNCAOPk];
export type FUNCAOOptionalAttributes = "funcaoId";
export type FUNCAOCreationAttributes = Optional<FUNCAOAttributes, FUNCAOOptionalAttributes>;

export class FUNCAO extends Model<FUNCAOAttributes, FUNCAOCreationAttributes> implements FUNCAOAttributes {
  funcaoId!: number;
  nomeFuncao!: string;

  // FUNCAO hasMany FUNCIONARIOS via funcaoId
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

  static initModel(sequelize: Sequelize.Sequelize): typeof FUNCAO {
    return sequelize.define('FUNCAO', {
    funcaoId: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    nomeFuncao: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: "nomeFuncao_UNIQUE"
    }
  }, {
    tableName: 'FUNCAO',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "funcaoId" },
        ]
      },
      {
        name: "nomeFuncao_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "nomeFuncao" },
        ]
      },
    ]
  }) as typeof FUNCAO;
  }
}
