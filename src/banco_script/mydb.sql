-- MySQL Script generated by MySQL Workbench
-- seg 08 ago 2022 23:58:25
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `mydb` ;
DROP SCHEMA IF EXISTS `sys` ;

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`EMPRESAS`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`EMPRESAS` ;

CREATE TABLE IF NOT EXISTS `mydb`.`EMPRESAS` (
  `empresaId` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `cnpj` VARCHAR(18) NOT NULL,
  `razaoSocial` VARCHAR(45) NOT NULL,
  `nomeFantasia` VARCHAR(45) NULL,
  `nomeResponsavel` VARCHAR(45) NULL,
  `telefoneFixo` VARCHAR(14) NULL,
  `telefoneCelular` VARCHAR(16) NULL,
  `obraId` INT NULL,
  UNIQUE INDEX `cnpj_UNIQUE` (`cnpj` ASC) VISIBLE,
  PRIMARY KEY (`empresaId`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`OBRAS`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`OBRAS` ;

CREATE TABLE IF NOT EXISTS `mydb`.`OBRAS` (
  `obraId` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `logradouro` VARCHAR(20) NOT NULL,
  `bairro` VARCHAR(20) NOT NULL,
  `cidade` VARCHAR(20) NOT NULL,
  `estado` VARCHAR(20) NOT NULL,
  `telefoneFixo` VARCHAR(14) NULL,
  `telefoneCelular` VARCHAR(16) NULL,
  `cno` BIGINT NULL,
  `situacao` TINYINT NULL,
  UNIQUE INDEX `id_UNIQUE` (`obraId` ASC) VISIBLE,
  UNIQUE INDEX `cnpj_UNIQUE` (`logradouro` ASC) VISIBLE,
  PRIMARY KEY (`obraId`),
  UNIQUE INDEX `cno_UNIQUE` (`cno` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`FUNCAO`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`FUNCAO` ;

CREATE TABLE IF NOT EXISTS `mydb`.`FUNCAO` (
  `funcaoId` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nomeFuncao` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`funcaoId`),
  UNIQUE INDEX `nomeFuncao_UNIQUE` (`nomeFuncao` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`FUNCIONARIOS`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`FUNCIONARIOS` ;

CREATE TABLE IF NOT EXISTS `mydb`.`FUNCIONARIOS` (
  `funcionarioId` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `situacao` TINYINT NULL,
  `cpf` VARCHAR(14) NOT NULL,
  `nascimento` BIGINT NULL,
  `telefoneFixo` VARCHAR(14) NULL,
  `telefoneCelular` VARCHAR(16) NULL,
  `email` VARCHAR(45) NULL,
  `apelido` VARCHAR(20) NULL,
  `foto` VARCHAR(45) NULL,
  `obraId` INT UNSIGNED NOT NULL,
  `empresaId` INT UNSIGNED NOT NULL,
  `funcaoId` INT UNSIGNED NOT NULL,
  UNIQUE INDEX `cpf_UNIQUE` (`cpf` ASC) VISIBLE,
  PRIMARY KEY (`funcionarioId`),
  INDEX `fk_FUNCIONARIOS_OBRAS1_idx` (`obraId` ASC) VISIBLE,
  INDEX `fk_FUNCIONARIOS_EMPRESAS1_idx` (`empresaId` ASC) VISIBLE,
  INDEX `fk_FUNCIONARIOS_FUNCAO1_idx` (`funcaoId` ASC) VISIBLE,
  UNIQUE INDEX `funcionarioId_UNIQUE` (`funcionarioId` ASC) VISIBLE,
  CONSTRAINT `fk_FUNCIONARIOS_OBRAS1`
    FOREIGN KEY (`obraId`)
    REFERENCES `mydb`.`OBRAS` (`obraId`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE,
  CONSTRAINT `fk_FUNCIONARIOS_EMPRESAS1`
    FOREIGN KEY (`empresaId`)
    REFERENCES `mydb`.`EMPRESAS` (`empresaId`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE,
  CONSTRAINT `fk_FUNCIONARIOS_FUNCAO1`
    FOREIGN KEY (`funcaoId`)
    REFERENCES `mydb`.`FUNCAO` (`funcaoId`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`CATEGORIA`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`CATEGORIA` ;

CREATE TABLE IF NOT EXISTS `mydb`.`CATEGORIA` (
  `categoriaId` INT NOT NULL AUTO_INCREMENT,
  `nomeCategoria` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`categoriaId`),
  UNIQUE INDEX `nomeCategoria_UNIQUE` (`nomeCategoria` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`EQUIPAMENTOS`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`EQUIPAMENTOS` ;

CREATE TABLE IF NOT EXISTS `mydb`.`EQUIPAMENTOS` (
  `equipamentoId` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nomeEquipamento` VARCHAR(45) NOT NULL,
  `situacao` TINYINT NULL,
  `numeracao` INT UNSIGNED NOT NULL,
  `anoFabricacao` INT UNSIGNED NULL,
  `apelido` VARCHAR(20) NULL,
  `empresaId` INT UNSIGNED NOT NULL,
  `obraId` INT UNSIGNED NOT NULL,
  `categoriaId` INT NOT NULL,
  UNIQUE INDEX `cpf_UNIQUE` (`numeracao` ASC) VISIBLE,
  UNIQUE INDEX `matricula_UNIQUE` (`equipamentoId` ASC) VISIBLE,
  PRIMARY KEY (`equipamentoId`, `obraId`),
  INDEX `fk_EQUIPAMENTOS_EMPRESAS1_idx` (`empresaId` ASC) VISIBLE,
  INDEX `fk_EQUIPAMENTOS_OBRAS1_idx` (`obraId` ASC) VISIBLE,
  INDEX `fk_EQUIPAMENTOS_categoria1_idx` (`categoriaId` ASC) VISIBLE,
  CONSTRAINT `fk_EQUIPAMENTOS_EMPRESAS1`
    FOREIGN KEY (`empresaId`)
    REFERENCES `mydb`.`EMPRESAS` (`empresaId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_EQUIPAMENTOS_OBRAS1`
    FOREIGN KEY (`obraId`)
    REFERENCES `mydb`.`OBRAS` (`obraId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_EQUIPAMENTOS_categoria1`
    FOREIGN KEY (`categoriaId`)
    REFERENCES `mydb`.`CATEGORIA` (`categoriaId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`OBRAS_EMPRESAS`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`OBRAS_EMPRESAS` ;

CREATE TABLE IF NOT EXISTS `mydb`.`OBRAS_EMPRESAS` (
  `obraId` INT UNSIGNED NOT NULL,
  `empresaId` INT UNSIGNED NOT NULL,
  `situacao` TINYINT NULL,
  PRIMARY KEY (`obraId`, `empresaId`),
  INDEX `fk_OBRAS_has_EMPRESAS_EMPRESAS1_idx` (`empresaId` ASC) VISIBLE,
  INDEX `fk_OBRAS_has_EMPRESAS_OBRAS1_idx` (`obraId` ASC) VISIBLE,
  CONSTRAINT `fk_OBRAS_has_EMPRESAS_OBRAS1`
    FOREIGN KEY (`obraId`)
    REFERENCES `mydb`.`OBRAS` (`obraId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_OBRAS_has_EMPRESAS_EMPRESAS1`
    FOREIGN KEY (`empresaId`)
    REFERENCES `mydb`.`EMPRESAS` (`empresaId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`FRENTES`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`FRENTES` ;

CREATE TABLE IF NOT EXISTS `mydb`.`FRENTES` (
  `frenteId` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(20) NULL,
  `localizacao` VARCHAR(30) NULL,
  `obraId` INT UNSIGNED NOT NULL,
  `observacao` VARCHAR(45) NULL,
  PRIMARY KEY (`frenteId`),
  INDEX `fk_frente_OBRAS1_idx` (`obraId` ASC) VISIBLE,
  CONSTRAINT `fk_frente_OBRAS1`
    FOREIGN KEY (`obraId`)
    REFERENCES `mydb`.`OBRAS` (`obraId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`RDO_FUNCIONARIOS`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`RDO_FUNCIONARIOS` ;

CREATE TABLE IF NOT EXISTS `mydb`.`RDO_FUNCIONARIOS` (
  `rdoId` INT NOT NULL AUTO_INCREMENT,
  `descricao` VARCHAR(45) NULL,
  `dataInicio` BIGINT NULL,
  `dataFinal` BIGINT NULL,
  `obraId` INT UNSIGNED NOT NULL,
  `frenteId` INT NOT NULL,
  `funcionarioId` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`rdoId`),
  INDEX `fk_RDO_FUNCIONARIOS_OBRAS1_idx` (`obraId` ASC) VISIBLE,
  INDEX `fk_RDO_FUNCIONARIOS_frente1_idx` (`frenteId` ASC) VISIBLE,
  INDEX `fk_RDO_FUNCIONARIOS_FUNCIONARIOS1_idx` (`funcionarioId` ASC) VISIBLE,
  CONSTRAINT `fk_RDO_FUNCIONARIOS_OBRAS1`
    FOREIGN KEY (`obraId`)
    REFERENCES `mydb`.`OBRAS` (`obraId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_RDO_FUNCIONARIOS_frente1`
    FOREIGN KEY (`frenteId`)
    REFERENCES `mydb`.`FRENTES` (`frenteId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_RDO_FUNCIONARIOS_FUNCIONARIOS1`
    FOREIGN KEY (`funcionarioId`)
    REFERENCES `mydb`.`FUNCIONARIOS` (`funcionarioId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`RDO_EQUIPAMENTOS`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`RDO_EQUIPAMENTOS` ;

CREATE TABLE IF NOT EXISTS `mydb`.`RDO_EQUIPAMENTOS` (
  `rdoId` INT NOT NULL AUTO_INCREMENT,
  `descricao` VARCHAR(45) NULL,
  `dataInicio` BIGINT NULL,
  `dataFinal` BIGINT NULL,
  `horimetroInicio` BIGINT NULL,
  `horimetroFinal` BIGINT NULL,
  `obraId` INT UNSIGNED NOT NULL,
  `frenteId` INT NOT NULL,
  `equipamentoId` INT UNSIGNED NOT NULL,
  `funcionarioId` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`rdoId`, `equipamentoId`, `funcionarioId`),
  INDEX `fk_RDO_FUNCIONARIOS_OBRAS1_idx` (`obraId` ASC) VISIBLE,
  INDEX `fk_RDO_FUNCIONARIOS_frente1_idx` (`frenteId` ASC) VISIBLE,
  INDEX `fk_RDO_EQUIPAMENTO_EQUIPAMENTOS1_idx` (`equipamentoId` ASC) VISIBLE,
  INDEX `fk_RDO_EQUIPAMENTO_FUNCIONARIOS1_idx` (`funcionarioId` ASC) VISIBLE,
  CONSTRAINT `fk_RDO_FUNCIONARIOS_OBRAS10`
    FOREIGN KEY (`obraId`)
    REFERENCES `mydb`.`OBRAS` (`obraId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_RDO_FUNCIONARIOS_frente10`
    FOREIGN KEY (`frenteId`)
    REFERENCES `mydb`.`FRENTES` (`frenteId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_RDO_EQUIPAMENTO_EQUIPAMENTOS1`
    FOREIGN KEY (`equipamentoId`)
    REFERENCES `mydb`.`EQUIPAMENTOS` (`equipamentoId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_RDO_EQUIPAMENTO_FUNCIONARIOS1`
    FOREIGN KEY (`funcionarioId`)
    REFERENCES `mydb`.`FUNCIONARIOS` (`funcionarioId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`USUARIOS`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`USUARIOS` ;

CREATE TABLE IF NOT EXISTS `mydb`.`USUARIOS` (
  `uid` VARCHAR(30) NOT NULL,
  `name` VARCHAR(45) NULL,
  `photoUrl` VARCHAR(100) NULL,
  `email` VARCHAR(45) NULL,
  `permission` VARCHAR(12) NULL DEFAULT '[3]',
  UNIQUE INDEX `id_UNIQUE` (`uid` ASC) VISIBLE,
  PRIMARY KEY (`uid`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
