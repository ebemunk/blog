-- bootstrap database with empty tables

drop table crashes;
create table crashes (
	id character varying,
	raw json default '{}'::json,
	parsed json default '{}'::json
);

drop table locations;
create table locations (
	location character varying,
	search character varying,
	geo json default '{}'::json
);
