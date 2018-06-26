-- bootstrap database with empty tables

drop table dialog;
create table dialog (
	season int,
	episode int,
	seq int,
	act int,
	scene int,
	type character varying,
	char_name character varying,
	line text,
	directions json default '[]'::json,
	meta json default '{}'::json,
	raw text
);

drop table personality;
create table personality (
	char_name character varying,
	profile json
);

drop table tone;
create table tone (
	season int,
	episode int,
	document_tone json,
	sentences_tone json
);

drop table scene_tone;
create table scene_tone (
	season int,
	episode int,
	act int,
	scene int,
	length int,
	document_tone json
);

drop table word_count;
create table word_count (
	season int,
	episode int,
	total int,
	uniq int
);
