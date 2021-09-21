create schema if not exists playboy;

set search_path to playboy;

drop table if exists playmates;
create table playmates (
	name character varying,
	year int,
	month int,
	wiki json default '{}'::json,
	babepedia json default '{}'::json,
	mypmates json default '{}'::json,
	first character varying
);

-- RUN AFTER STEP 1
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

update playmates set name = 'Nicole Dahm' where name = 'Nicole, Erica and Jaclyn Dahm';
insert into playmates (name, year, month) values ('Erica Dahm', 1998, 11);
insert into playmates (name, year, month) values ('Jaclyn Dahm', 1998, 11);

update playmates set name = 'Jennifer Lyn Jackson' where name = 'Jennifer Jackson' and year = 1989;

update playmates set name ='Khrystyana Kazakova' where name = 'Khrystyana[2]';

update playmates set name = 'Tanerelle Stephens' where name = 'Tanerélle';

update playmates set name = 'Eniko Mihalik' where name = 'Enikő Mihalik';

update playmates set name = 'Sophie O''Neil' where name = 'Sophie O’Neil';
-- RUN AFTER STEP 1 END

-- sanity checks
select * from playmates where name like '% & %';
select * from playmates where name like '% and %';
select * from playmates where name like '%a.k.a.%';

-- RUN AFTER STEP 3
-- corrections
update playmates
set babepedia = babepedia::jsonb || '{"Measurements": "36-23-32"}'::jsonb
where name = 'Julia Lyndon';

update playmates
set babepedia = babepedia::jsonb || '{"Born": "Saturday 19th of September 1920"}'::jsonb
where name = 'Dolores Donlon';

update playmates
set babepedia = babepedia::jsonb || '{"Ethnicity": "Latin"}'::jsonb
where name = 'Ester Cordet';

update playmates
set babepedia = babepedia::jsonb || '{"Hair color":"Black","Boobs":"Real/Natural"}'::jsonb
where name = 'Tanerelle Stephens';

update playmates
set babepedia = babepedia::jsonb || '{"Hair color":"Blonde","Ethnicity":"Caucasian","Boobs":"Real/Natural"}'::jsonb
where name = 'Jeane Manson';

update playmates
set babepedia = babepedia::jsonb || '{"Hair color":"Brunette","Ethnicity":"Black","Boobs":"Fake/Enhanced"}'::jsonb
where name = 'Ines Rau';

update playmates
set babepedia = babepedia::jsonb || '{"Hair color":"Auburn"}'::jsonb
where name = 'Phyllis Coleman';

update playmates
set mypmates = mypmates::jsonb || '{"born":"October 9, 1942"}'::jsonb
where name = 'Gay Collier';

update playmates
set mypmates = mypmates::jsonb || '{"hips":86,"waist":61}'::jsonb
where name = 'Buffy Tyler';
-- RUN AFTER STEP 3 END

-- RUN AT THE END
-- "firsts" according to https://en.wikipedia.org/wiki/Playboy_Playmate
update playmates
set first = 'First and only "Sweetheart of the Month".'
where name = 'Marilyn Monroe';

update playmates
set first = 'First ever Playmate.'
where name = 'Margie Harrison';

update playmates
set first = 'First to be chosen three times.'
where name = 'Marilyn Waltz';

update playmates
set first = 'First centerfold (two-page).'
where name = 'Janet Pilgrim';

update playmates
set first = 'First fold-out centerfold (three-page).'
where name = 'Marian Stafford';

update playmates
set first = 'First foreign born Playmate.'
where name = 'Marion Scott';

update playmates
set first = 'Youngest Playmate ever featured.'
where name = 'Elizabeth Ann Roberts';

update playmates
set first = 'First to share the Playmate title in the same month, with Mara Corday.'
where name = 'Pet Sheehan';

update playmates
set first = 'First to share the Playmate title in the same month, with Pat Sheehan.'
where name = 'Mara Corday';

update playmates
set first = 'First to share the Playmate title in the same month, with Mara Corday.'
where name = 'Pat Sheehan';

update playmates
set first = 'First to become Playmate of the Year.'
where name = 'Ellen Stratton';

update playmates
set first = 'First Asian-American Playmate.'
where name = 'China Lee';

update playmates
set first = 'First African-American Playmate.'
where name = 'Jennifer Jackson';

update playmates
set first = 'First twin Playmate with Madeleine Collinson.'
where name = 'Mary Collinson';

update playmates
set first = 'First twin Playmate with Mary Collinson.'
where name = 'Madeleine Collinson';

update playmates
set first = 'First Playmate to show clearly visible pubic hair.'
where name = 'Liv Lindeland';

update playmates
set first = 'First full frontal nude centerfold.'
where name = 'Marilyn Cole';

update playmates
set first = 'First full frontal nude centerfold with clearly visible entire pubic hair.'
where name = 'Bonnie Large';

update playmates
set first = 'First Hispanic-American Playmate.'
where name = 'Ester Cordet';

update playmates
set first = 'First cousins to be Playmates with Karen Morton.'
where name = 'Elaine Morton';

update playmates
set first = 'First cousins to be Playmates with Elaine Morton.'
where name = 'Karen Morton';

update playmates
set first = 'First video Playmate.'
where name = 'Lonny Chin';

update playmates
set first = 'First mother and daughter (separately) to become Playmates. Daughter: Simone Eden'
where name = 'Carol Eden';

update playmates
set first = 'First mother and daughter (separately) to become Playmates. Mother: Carol Eden'
where name = 'Simone Eden';

update playmates
set first = 'First African-American Playmate of the Year.'
where name = 'Renee Tenison';

update playmates
set first = 'First triplets to become Playmates.'
where name = 'Erica Dahm';

update playmates
set first = 'First triplets to become Playmates.'
where name = 'Nicole Dahm';

update playmates
set first = 'First triplets to become Playmates.'
where name = 'Jaclyn Dahm';

update playmates
set first = 'First Playmate to pose with shaved pubic area.'
where name = 'Dalene Kurtis';

update playmates
set first = 'First Mexican-American Playmate of the Year.'
where name = 'Raquel Pomplun';

update playmates
set first = 'First openly transgender Playmate.'
where name = 'Ines Rau';

update playmates
set first = 'First amputee Playmate.'
where name = 'Marsha Elle';

update playmates
set first = 'First digital only Playmate.'
where name = 'Priscilla Huggins';
-- END