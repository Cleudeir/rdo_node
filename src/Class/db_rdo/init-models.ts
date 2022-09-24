import type { Sequelize } from "sequelize";
import { CATEGORIA as _CATEGORIA } from "./CATEGORIA";
import type { CATEGORIAAttributes, CATEGORIACreationAttributes } from "./CATEGORIA";
import { EMPRESAS as _EMPRESAS } from "./EMPRESAS";
import type { EMPRESASAttributes, EMPRESASCreationAttributes } from "./EMPRESAS";
import { EQUIPAMENTOS as _EQUIPAMENTOS } from "./EQUIPAMENTOS";
import type { EQUIPAMENTOSAttributes, EQUIPAMENTOSCreationAttributes } from "./EQUIPAMENTOS";
import { FRENTES as _FRENTES } from "./FRENTES";
import type { FRENTESAttributes, FRENTESCreationAttributes } from "./FRENTES";
import { FUNCAO as _FUNCAO } from "./FUNCAO";
import type { FUNCAOAttributes, FUNCAOCreationAttributes } from "./FUNCAO";
import { FUNCIONARIOS as _FUNCIONARIOS } from "./FUNCIONARIOS";
import type { FUNCIONARIOSAttributes, FUNCIONARIOSCreationAttributes } from "./FUNCIONARIOS";
import { OBRAS as _OBRAS } from "./OBRAS";
import type { OBRASAttributes, OBRASCreationAttributes } from "./OBRAS";
import { OBRAS_EMPRESAS as _OBRAS_EMPRESAS } from "./OBRAS_EMPRESAS";
import type { OBRAS_EMPRESASAttributes, OBRAS_EMPRESASCreationAttributes } from "./OBRAS_EMPRESAS";
import { RDO_EQUIPAMENTOS as _RDO_EQUIPAMENTOS } from "./RDO_EQUIPAMENTOS";
import type { RDO_EQUIPAMENTOSAttributes, RDO_EQUIPAMENTOSCreationAttributes } from "./RDO_EQUIPAMENTOS";
import { RDO_FUNCIONARIOS as _RDO_FUNCIONARIOS } from "./RDO_FUNCIONARIOS";
import type { RDO_FUNCIONARIOSAttributes, RDO_FUNCIONARIOSCreationAttributes } from "./RDO_FUNCIONARIOS";
import { USUARIOS as _USUARIOS } from "./USUARIOS";
import type { USUARIOSAttributes, USUARIOSCreationAttributes } from "./USUARIOS";

export {
  _CATEGORIA as CATEGORIA,
  _EMPRESAS as EMPRESAS,
  _EQUIPAMENTOS as EQUIPAMENTOS,
  _FRENTES as FRENTES,
  _FUNCAO as FUNCAO,
  _FUNCIONARIOS as FUNCIONARIOS,
  _OBRAS as OBRAS,
  _OBRAS_EMPRESAS as OBRAS_EMPRESAS,
  _RDO_EQUIPAMENTOS as RDO_EQUIPAMENTOS,
  _RDO_FUNCIONARIOS as RDO_FUNCIONARIOS,
  _USUARIOS as USUARIOS,
};

export type {
  CATEGORIAAttributes,
  CATEGORIACreationAttributes,
  EMPRESASAttributes,
  EMPRESASCreationAttributes,
  EQUIPAMENTOSAttributes,
  EQUIPAMENTOSCreationAttributes,
  FRENTESAttributes,
  FRENTESCreationAttributes,
  FUNCAOAttributes,
  FUNCAOCreationAttributes,
  FUNCIONARIOSAttributes,
  FUNCIONARIOSCreationAttributes,
  OBRASAttributes,
  OBRASCreationAttributes,
  OBRAS_EMPRESASAttributes,
  OBRAS_EMPRESASCreationAttributes,
  RDO_EQUIPAMENTOSAttributes,
  RDO_EQUIPAMENTOSCreationAttributes,
  RDO_FUNCIONARIOSAttributes,
  RDO_FUNCIONARIOSCreationAttributes,
  USUARIOSAttributes,
  USUARIOSCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const CATEGORIA = _CATEGORIA.initModel(sequelize);
  const EMPRESAS = _EMPRESAS.initModel(sequelize);
  const EQUIPAMENTOS = _EQUIPAMENTOS.initModel(sequelize);
  const FRENTES = _FRENTES.initModel(sequelize);
  const FUNCAO = _FUNCAO.initModel(sequelize);
  const FUNCIONARIOS = _FUNCIONARIOS.initModel(sequelize);
  const OBRAS = _OBRAS.initModel(sequelize);
  const OBRAS_EMPRESAS = _OBRAS_EMPRESAS.initModel(sequelize);
  const RDO_EQUIPAMENTOS = _RDO_EQUIPAMENTOS.initModel(sequelize);
  const RDO_FUNCIONARIOS = _RDO_FUNCIONARIOS.initModel(sequelize);
  const USUARIOS = _USUARIOS.initModel(sequelize);

  EMPRESAS.belongsToMany(OBRAS, { as: 'obraId_OBRAs', through: OBRAS_EMPRESAS, foreignKey: "empresaId", otherKey: "obraId" });
  EQUIPAMENTOS.belongsToMany(FUNCIONARIOS, { as: 'funcionarioId_FUNCIONARIOs', through: RDO_EQUIPAMENTOS, foreignKey: "equipamentoId", otherKey: "funcionarioId" });
  FUNCIONARIOS.belongsToMany(EQUIPAMENTOS, { as: 'equipamentoId_EQUIPAMENTOs', through: RDO_EQUIPAMENTOS, foreignKey: "funcionarioId", otherKey: "equipamentoId" });
  OBRAS.belongsToMany(EMPRESAS, { as: 'empresaId_EMPRESAs', through: OBRAS_EMPRESAS, foreignKey: "obraId", otherKey: "empresaId" });
  EQUIPAMENTOS.belongsTo(CATEGORIA, { as: "categorium", foreignKey: "categoriaId" });
  CATEGORIA.hasMany(EQUIPAMENTOS, { as: "EQUIPAMENTOs", foreignKey: "categoriaId" });
  EQUIPAMENTOS.belongsTo(EMPRESAS, { as: "empresa", foreignKey: "empresaId" });
  EMPRESAS.hasMany(EQUIPAMENTOS, { as: "EQUIPAMENTOs", foreignKey: "empresaId" });
  FUNCIONARIOS.belongsTo(EMPRESAS, { as: "empresa", foreignKey: "empresaId" });
  EMPRESAS.hasMany(FUNCIONARIOS, { as: "FUNCIONARIOs", foreignKey: "empresaId" });
  OBRAS_EMPRESAS.belongsTo(EMPRESAS, { as: "empresa", foreignKey: "empresaId" });
  EMPRESAS.hasMany(OBRAS_EMPRESAS, { as: "OBRAS_EMPRESAs", foreignKey: "empresaId" });
  RDO_EQUIPAMENTOS.belongsTo(EQUIPAMENTOS, { as: "equipamento", foreignKey: "equipamentoId" });
  EQUIPAMENTOS.hasMany(RDO_EQUIPAMENTOS, { as: "RDO_EQUIPAMENTOs", foreignKey: "equipamentoId" });
  RDO_EQUIPAMENTOS.belongsTo(FRENTES, { as: "frente", foreignKey: "frenteId" });
  FRENTES.hasMany(RDO_EQUIPAMENTOS, { as: "RDO_EQUIPAMENTOs", foreignKey: "frenteId" });
  RDO_FUNCIONARIOS.belongsTo(FRENTES, { as: "frente", foreignKey: "frenteId" });
  FRENTES.hasMany(RDO_FUNCIONARIOS, { as: "RDO_FUNCIONARIOs", foreignKey: "frenteId" });
  FUNCIONARIOS.belongsTo(FUNCAO, { as: "funcao", foreignKey: "funcaoId" });
  FUNCAO.hasMany(FUNCIONARIOS, { as: "FUNCIONARIOs", foreignKey: "funcaoId" });
  RDO_EQUIPAMENTOS.belongsTo(FUNCIONARIOS, { as: "funcionario", foreignKey: "funcionarioId" });
  FUNCIONARIOS.hasMany(RDO_EQUIPAMENTOS, { as: "RDO_EQUIPAMENTOs", foreignKey: "funcionarioId" });
  RDO_FUNCIONARIOS.belongsTo(FUNCIONARIOS, { as: "funcionario", foreignKey: "funcionarioId" });
  FUNCIONARIOS.hasMany(RDO_FUNCIONARIOS, { as: "RDO_FUNCIONARIOs", foreignKey: "funcionarioId" });
  EQUIPAMENTOS.belongsTo(OBRAS, { as: "obra", foreignKey: "obraId" });
  OBRAS.hasMany(EQUIPAMENTOS, { as: "EQUIPAMENTOs", foreignKey: "obraId" });
  FRENTES.belongsTo(OBRAS, { as: "obra", foreignKey: "obraId" });
  OBRAS.hasMany(FRENTES, { as: "FRENTEs", foreignKey: "obraId" });
  FUNCIONARIOS.belongsTo(OBRAS, { as: "obra", foreignKey: "obraId" });
  OBRAS.hasMany(FUNCIONARIOS, { as: "FUNCIONARIOs", foreignKey: "obraId" });
  OBRAS_EMPRESAS.belongsTo(OBRAS, { as: "obra", foreignKey: "obraId" });
  OBRAS.hasMany(OBRAS_EMPRESAS, { as: "OBRAS_EMPRESAs", foreignKey: "obraId" });
  RDO_EQUIPAMENTOS.belongsTo(OBRAS, { as: "obra", foreignKey: "obraId" });
  OBRAS.hasMany(RDO_EQUIPAMENTOS, { as: "RDO_EQUIPAMENTOs", foreignKey: "obraId" });
  RDO_FUNCIONARIOS.belongsTo(OBRAS, { as: "obra", foreignKey: "obraId" });
  OBRAS.hasMany(RDO_FUNCIONARIOS, { as: "RDO_FUNCIONARIOs", foreignKey: "obraId" });

  const force = false

  CATEGORIA.sync({ force })
  EMPRESAS.sync({ force })
  EQUIPAMENTOS.sync({ force })
  FRENTES.sync({ force })
  FUNCAO.sync({ force })
  FUNCIONARIOS.sync({ force })
  OBRAS.sync({ force })
  OBRAS_EMPRESAS.sync({ force })
  RDO_EQUIPAMENTOS.sync({ force })
  RDO_FUNCIONARIOS.sync({ force })
  USUARIOS.sync({ force })

  return {
    CATEGORIA: CATEGORIA,
    EMPRESAS: EMPRESAS,
    EQUIPAMENTOS: EQUIPAMENTOS,
    FRENTES: FRENTES,
    FUNCAO: FUNCAO,
    FUNCIONARIOS: FUNCIONARIOS,
    OBRAS: OBRAS,
    OBRAS_EMPRESAS: OBRAS_EMPRESAS,
    RDO_EQUIPAMENTOS: RDO_EQUIPAMENTOS,
    RDO_FUNCIONARIOS: RDO_FUNCIONARIOS,
    USUARIOS: USUARIOS,
  };
}
