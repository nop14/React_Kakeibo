CREATE DATABASE incomeandexpenditure;
\c incomeandexpenditure
CREATE TABLE IF NOT EXISTS Users (
    USER_ID SERIAL  NOT NULL,
    USER_NAME    varchar(80)  NOT NULL,
    PASSWORD    varchar(80)   NOT NULL,
    PRIMARY KEY (USER_ID)
);
CREATE TABLE IF NOT EXISTS IncomeAndExpenditure (
    INCOME_AND_EXPENDITURE_ID   SERIAL  NOT NULL,
    USER_ID int NOT NULL,
    DATE    date    NOT NULL,
    IN_OUT  int NOT NULL,
    MONEY_SOURCE_ID int,
    USAGE_ID    int,
    AMOUNT_OF_MONEY int,
    PRIMARY KEY (INCOME_AND_EXPENDITURE_ID)
);
CREATE TABLE IF NOT EXISTS MoneySources (
    MONEY_SOURCE_ID SERIAL  NOT NULL,
    USER_ID int  NOT NULL,
    MONEY_SOURCE_NAME    varchar(80)  NOT NULL,
    PRIMARY KEY (MONEY_SOURCE_ID)
);
CREATE TABLE IF NOT EXISTS Usages (
    USAGE_ID SERIAL  NOT NULL,
    USER_ID int  NOT NULL,
    USAGE_NAME    varchar(80)  NOT NULL,
    IN_OUT  int NOT NULL,
    PRIMARY KEY (USAGE_ID)
);