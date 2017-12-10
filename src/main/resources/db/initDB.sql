DROP TABLE IF EXISTS records;
DROP SEQUENCE IF EXISTS global_seq;

CREATE SEQUENCE global_seq START 100000;

CREATE TABLE records
(
  id        INTEGER PRIMARY KEY DEFAULT nextval('global_seq'),
  date      DATE NOT NULL,
  text      VARCHAR NOT NULL
);