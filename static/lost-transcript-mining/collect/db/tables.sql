-- dialog table
CREATE TABLE public.dialog
(
  id SERIAL NOT NULL,
  season integer NOT NULL,
  episode integer NOT NULL,
  seq integer NOT NULL,
  act integer NOT NULL,
  scene integer NOT NULL,
  flashback boolean NOT NULL,
  flashsideways boolean NOT NULL,
  type character varying NOT NULL,
  char_name character varying DEFAULT NULL,
  line text DEFAULT NULL,
  directions json DEFAULT '[]'::json,
  raw text DEFAULT NULL
)

-- watson personality insights
CREATE TABLE public.personality
(
  id SERIAL NOT NULL,
  char_name character varying DEFAULT NULL,
  profile json DEFAULT '{}'::json
)

-- watson tone analyzer for all episodes
CREATE TABLE public.tone
(
  season integer NOT NULL,
  episode integer NOT NULL,
  document_tone json DEFAULT '{}'::json,
  sentences_tone json DEFAULT '[]'::json
)
