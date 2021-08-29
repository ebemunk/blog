create schema if not exists playboy;

set search_path to playboy;

drop table if exists playmates;
create table playmates (
	name character varying,
	year int,
	month int,
	wiki json default '{}'::json,
	babepedia json default '{}'::json,
	parsed json default '{}'::json
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

update playmates set name = 'Nicole Dahm' where name = 'Dahm triplets';
insert into playmates (name, year, month) values ('Erica Dahm', 1998, 11);
insert into playmates (name, year, month) values ('Jaclyn Dahm', 1998, 11);

update playmates set name = 'Jennifer Lyn Jackson' where name = 'Jennifer Jackson' and year = 1989;
-- RUN AFTER STEP 1 END

-- sanity checks
select * from playmates where name like '% & %';
select * from playmates where name like '% and %';
select * from playmates where name like '%a.k.a.%';

-- RUN AFTER STEP 4
-- corrections
update playmates
set babepedia = '{"Age":"27 years young","Born":"Friday 8th of July 1977","Birthplace":"Queens, New York, United States","Ethnicity":"Other","Profession":"Centerfold, Playboy Model","Hair color":"Brown","Eye color":"Brown","Height":"54\" (or 162 cm)","Weight":"112 lbs (or 51 kg)","Body type":"Slim","Measurements":"34-25-36","Bra/cup size":"H","Boobs":"Real/Natural","Years active":"2001 - present","Tattoos":"None","Piercings":"None","":"Playboy Playmate Of The Month March 2001"}'
where name = 'Miriam Gonzalez';

update playmates
set babepedia = '{"Age":"72 years young","Born":"Saturday 24th of January 1948","Birthplace":"Cleveland, Ohio, United States","Ethnicity":"Caucasian","Hair color":"Black","Height":"151\" (or 160 cm)","Weight":"112 lbs (or 51 kg)","Body type":"Slim","Measurements":"36-25-36","Bra/cup size":"C","Boobs":"Real/Natural","":"Playboy Playmate Of The Month August 1969"}'
where name = 'Debbie Hooper';

update playmates
set babepedia = '{"Died":"Saturday 1st of January 2011 (age 55)","Born":"Saturday 15th of October 1955","Birthplace":"Vancouver, British Columbia, Canada","Ethnicity":"Caucasian","Profession":"Glamour Model","Hair color":"Brown","Eye color":"Brown","Height":"19\" (or 168 cm)","Weight":"368 lbs (or 54 kg)","Body type":"Slim","Measurements":"34D-25-34","Bra/cup size":"34D","Boobs":"Real/Natural","Tattoos":"None","Piercings":"None","":"Playboy Playmate Of The Month October 1977"}'
where name = 'Kristine Winder';

update playmates
set babepedia = '{"Age":"65 years young","Born":"Sunday 3rd of July 1955","Birthplace":"Buffalo, New York, United States","Ethnicity":"Caucasian","Profession":"Model","Hair color":"Brown","Height":"56\" (or 167 cm)","Weight":"112 lbs (or 51 kg)","Body type":"Average","Measurements":"36-23-32","Bra/cup size":"36E (80E)","Boobs":"Real/Natural","":"Playboy Playmate Of The Month August 1977"}'
where name = 'Julia Lyndon';
-- RUN AFTER STEP 4 END