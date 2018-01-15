drop table events;
create table events (
  id character varying primary key,
  evt json not null
);
