const DataTypes = require("sequelize").DataTypes;
const _CATEGORIA = require("./CATEGORIA");
const _EMPRESAS = require("./EMPRESAS");
const _EQUIPAMENTOS = require("./EQUIPAMENTOS");
const _FRENTES = require("./FRENTES");
const _FUNCAO = require("./FUNCAO");
const _FUNCIONARIOS = require("./FUNCIONARIOS");
const _OBRAS = require("./OBRAS");
const _OBRAS_EMPRESAS = require("./OBRAS_EMPRESAS");
const _RDO_EQUIPAMENTOS = require("./RDO_EQUIPAMENTOS");
const _RDO_FUNCIONARIOS = require("./RDO_FUNCIONARIOS");
const _USUARIOS = require("./USUARIOS");

function initModels(sequelize) {
  const CATEGORIA = _CATEGORIA(sequelize, DataTypes);
  const EMPRESAS = _EMPRESAS(sequelize, DataTypes);
  const EQUIPAMENTOS = _EQUIPAMENTOS(sequelize, DataTypes);
  const FRENTES = _FRENTES(sequelize, DataTypes);
  const FUNCAO = _FUNCAO(sequelize, DataTypes);
  const FUNCIONARIOS = _FUNCIONARIOS(sequelize, DataTypes);
  const OBRAS = _OBRAS(sequelize, DataTypes);
  const OBRAS_EMPRESAS = _OBRAS_EMPRESAS(sequelize, DataTypes);
  const RDO_EQUIPAMENTOS = _RDO_EQUIPAMENTOS(sequelize, DataTypes);
  const RDO_FUNCIONARIOS = _RDO_FUNCIONARIOS(sequelize, DataTypes);
  const USUARIOS = _USUARIOS(sequelize, DataTypes);

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
    CATEGORIA,
    EMPRESAS,
    EQUIPAMENTOS,
    FRENTES,
    FUNCAO,
    FUNCIONARIOS,
    OBRAS,
    OBRAS_EMPRESAS,
    RDO_EQUIPAMENTOS,
    RDO_FUNCIONARIOS,
    USUARIOS,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
