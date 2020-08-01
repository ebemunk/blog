-- bootstrap database with empty tables
drop table playmates;
create table playmates (
	name character varying,
	year int,
	month int,
	wiki json default '{}'::json,
	babepedia json default '{}'::json,
	parsed json default '{}'::json
);

-- clean
delete from playmates where name in ('N/A', 'magazine was not published');
-- aka
update playmates set name = 'Marilyn Waltz' where name = 'Margaret Scott (a.k.a. Marilyn Waltz)';
update playmates set name = 'Angela Dorian' where name = 'Angela Dorian (a.k.a. Victoria Vetri)';
-- 2-in-1
update playmates set name = 'Mara Corday' where name = 'Mara Corday and Pat Sheehan';
insert into playmates (name, year, month) values ('Pat Sheehan', 1958, 9);

update playmates set name = 'Jennifer Campbell' where name = 'Jennifer and Natalie Jo Campbell';
insert into playmates (name, year, month) values ('Natalie Campbell', 2008, 11);

update playmates set name = 'Carol Bernaola' where name = 'Carol Bernaola & Darlene Bernaola';
insert into playmates (name, year, month) values ('Darlene Bernaola', 2000, 0);

update playmates set name = 'Deisy Teles' where name = 'Deisy Teles & Sarah Teles';
insert into playmates (name, year, month) values ('Sarah Teles', 2003, 11);

update playmates set name = 'Madeleine Collinson' where name = 'Madeleine Collinson & Mary Collinson';
insert into playmates (name, year, month) values ('Mary Collinson', 1970, 9);

update playmates set name = 'Karin van Breeschooten' where name = 'Karin van Breeschooten & Mirjam van Breeschooten';
insert into playmates (name, year, month) values ('Mirjam van Breeschooten', 1989, 8);

-- sanity checks
select * from playmates where name like '% & %';
select * from playmates where name like '% and %';
select * from playmates where name like '%a.k.a.%';
