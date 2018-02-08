/*
with s as (
	select
		distinct char_name, season, episode, scene
	from dialog
	where type='dialog'
	group by season, episode, scene, char_name
	order by season, episode, scene
)
select a.season, a.episode, a.char_name as "from_char", b.char_name as "to_char", count(*) as "val"
from s a
inner join s b
	on a.season = b.season
	and a.episode = b.episode
	and a.scene = b.scene
	and a.char_name<b.char_name
group by a.season, a.episode, a.char_name, b.char_name
order by season,episode
*/
export default [
  {
    "season": 1,
    "episode": 1,
    "from_char": "BOONE",
    "to_char": "CHARLIE",
    "val": 3
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "BOONE",
    "to_char": "CLAIRE",
    "val": 2
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "BOONE",
    "to_char": "GARY",
    "val": 1
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "BOONE",
    "to_char": "HURLEY",
    "val": 3
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "BOONE",
    "to_char": "JACK",
    "val": 3
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "BOONE",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "BOONE",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "BOONE",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "BOONE",
    "to_char": "MICHAEL",
    "val": 3
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "BOONE",
    "to_char": "REDSHIRT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "BOONE",
    "to_char": "REDSHIRT #2",
    "val": 1
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "BOONE",
    "to_char": "SAYID",
    "val": 3
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "BOONE",
    "to_char": "SHANNON",
    "val": 2
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "BOONE",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "CHARLIE",
    "to_char": "CINDY",
    "val": 1
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "CHARLIE",
    "to_char": "CLAIRE",
    "val": 3
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "CHARLIE",
    "to_char": "HURLEY",
    "val": 5
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "CHARLIE",
    "to_char": "JACK",
    "val": 8
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "CHARLIE",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "CHARLIE",
    "to_char": "KATE",
    "val": 7
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "CHARLIE",
    "to_char": "MICHAEL",
    "val": 4
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "CHARLIE",
    "to_char": "PILOT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "CHARLIE",
    "to_char": "ROSE",
    "val": 3
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "CHARLIE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "CHARLIE",
    "to_char": "SAYID",
    "val": 4
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "CHARLIE",
    "to_char": "SHANNON",
    "val": 4
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "CHARLIE",
    "to_char": "WALT",
    "val": 2
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "CINDY",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "CINDY",
    "to_char": "ROSE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "CLAIRE",
    "to_char": "GARY",
    "val": 1
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "CLAIRE",
    "to_char": "HURLEY",
    "val": 4
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "CLAIRE",
    "to_char": "JACK",
    "val": 3
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "CLAIRE",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "CLAIRE",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "CLAIRE",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "CLAIRE",
    "to_char": "MICHAEL",
    "val": 3
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "CLAIRE",
    "to_char": "REDSHIRT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "CLAIRE",
    "to_char": "REDSHIRT #2",
    "val": 1
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "CLAIRE",
    "to_char": "ROSE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "CLAIRE",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "CLAIRE",
    "to_char": "SHANNON",
    "val": 2
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "CLAIRE",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "GARY",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "GARY",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "GARY",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "GARY",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "GARY",
    "to_char": "REDSHIRT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "GARY",
    "to_char": "REDSHIRT #2",
    "val": 1
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "HURLEY",
    "to_char": "JACK",
    "val": 5
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "HURLEY",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "HURLEY",
    "to_char": "KATE",
    "val": 3
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "HURLEY",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "HURLEY",
    "to_char": "MICHAEL",
    "val": 5
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "HURLEY",
    "to_char": "REDSHIRT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "HURLEY",
    "to_char": "REDSHIRT #2",
    "val": 1
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "HURLEY",
    "to_char": "ROSE",
    "val": 2
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "HURLEY",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "HURLEY",
    "to_char": "SAYID",
    "val": 3
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "HURLEY",
    "to_char": "SHANNON",
    "val": 4
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "HURLEY",
    "to_char": "WALT",
    "val": 2
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "JACK",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "JACK",
    "to_char": "KATE",
    "val": 8
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "JACK",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "JACK",
    "to_char": "MICHAEL",
    "val": 5
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "JACK",
    "to_char": "PILOT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "JACK",
    "to_char": "REDSHIRT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "JACK",
    "to_char": "REDSHIRT #2",
    "val": 1
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "JACK",
    "to_char": "ROSE",
    "val": 2
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "JACK",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "JACK",
    "to_char": "SAYID",
    "val": 3
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "JACK",
    "to_char": "SHANNON",
    "val": 4
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "JACK",
    "to_char": "WALT",
    "val": 2
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "JIN",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "JIN",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "JIN",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "JIN",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "KATE",
    "to_char": "MICHAEL",
    "val": 3
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "KATE",
    "to_char": "PILOT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "KATE",
    "to_char": "ROSE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "KATE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "KATE",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "KATE",
    "to_char": "SHANNON",
    "val": 3
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "KATE",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "LOCKE",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "LOCKE",
    "to_char": "REDSHIRT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "LOCKE",
    "to_char": "REDSHIRT #2",
    "val": 1
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "MICHAEL",
    "to_char": "REDSHIRT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "MICHAEL",
    "to_char": "REDSHIRT #2",
    "val": 1
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "MICHAEL",
    "to_char": "ROSE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "MICHAEL",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "MICHAEL",
    "to_char": "SAYID",
    "val": 3
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "MICHAEL",
    "to_char": "SHANNON",
    "val": 4
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "MICHAEL",
    "to_char": "WALT",
    "val": 2
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "REDSHIRT",
    "to_char": "REDSHIRT #2",
    "val": 1
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "ROSE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "ROSE",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "ROSE",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "SAWYER",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "SAWYER",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "SAYID",
    "to_char": "SHANNON",
    "val": 3
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "SAYID",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 1,
    "from_char": "SHANNON",
    "to_char": "WALT",
    "val": 2
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "BOONE",
    "to_char": "CHARLIE",
    "val": 4
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "BOONE",
    "to_char": "CLAIRE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "BOONE",
    "to_char": "HURLEY",
    "val": 2
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "BOONE",
    "to_char": "JACK",
    "val": 3
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "BOONE",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "BOONE",
    "to_char": "KATE",
    "val": 5
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "BOONE",
    "to_char": "MARSHAL",
    "val": 1
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "BOONE",
    "to_char": "MICHAEL",
    "val": 3
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "BOONE",
    "to_char": "RADIO",
    "val": 1
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "BOONE",
    "to_char": "ROSE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "BOONE",
    "to_char": "SAWYER",
    "val": 4
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "BOONE",
    "to_char": "SAYID",
    "val": 4
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "BOONE",
    "to_char": "SAYID AND KATE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "BOONE",
    "to_char": "SHANNON",
    "val": 5
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "BOONE",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "BOONE",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "CHARLIE",
    "to_char": "CINDY",
    "val": 1
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "CHARLIE",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "CHARLIE",
    "to_char": "JACK",
    "val": 3
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "CHARLIE",
    "to_char": "JD",
    "val": 1
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "CHARLIE",
    "to_char": "KATE",
    "val": 5
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "CHARLIE",
    "to_char": "MARSHAL",
    "val": 1
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "CHARLIE",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "CHARLIE",
    "to_char": "RADIO",
    "val": 1
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "CHARLIE",
    "to_char": "ROSE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "CHARLIE",
    "to_char": "SAWYER",
    "val": 3
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "CHARLIE",
    "to_char": "SAYID",
    "val": 3
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "CHARLIE",
    "to_char": "SAYID AND KATE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "CHARLIE",
    "to_char": "SHANNON",
    "val": 5
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "CHARLIE",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "CINDY",
    "to_char": "JD",
    "val": 1
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "CINDY",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "CINDY",
    "to_char": "MARSHAL",
    "val": 1
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "CINDY",
    "to_char": "MICHELLE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "CINDY",
    "to_char": "ROSE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "CINDY",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "CLAIRE",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "CLAIRE",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "CLAIRE",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "CLAIRE",
    "to_char": "MICHAEL",
    "val": 2
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "CLAIRE",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "CLAIRE",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "CLAIRE",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "HURLEY",
    "to_char": "JACK",
    "val": 3
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "HURLEY",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "HURLEY",
    "to_char": "MICHAEL",
    "val": 2
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "HURLEY",
    "to_char": "ROSE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "HURLEY",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "HURLEY",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "HURLEY",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "HURLEY",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "JACK",
    "to_char": "KATE",
    "val": 5
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "JACK",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "JACK",
    "to_char": "MARSHAL",
    "val": 1
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "JACK",
    "to_char": "MICHAEL",
    "val": 3
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "JACK",
    "to_char": "RADIO",
    "val": 1
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "JACK",
    "to_char": "ROSE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "JACK",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "JACK",
    "to_char": "SAYID",
    "val": 3
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "JACK",
    "to_char": "SHANNON",
    "val": 2
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "JACK",
    "to_char": "WALT",
    "val": 2
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "JD",
    "to_char": "ROSE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "JD",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "JIN",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "JIN",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "JIN",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "KATE",
    "to_char": "MARSHAL",
    "val": 2
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "KATE",
    "to_char": "MICHAEL",
    "val": 2
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "KATE",
    "to_char": "MICHELLE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "KATE",
    "to_char": "RADIO",
    "val": 1
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "KATE",
    "to_char": "ROSE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "KATE",
    "to_char": "SAWYER",
    "val": 5
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "KATE",
    "to_char": "SAYID",
    "val": 5
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "KATE",
    "to_char": "SAYID AND KATE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "KATE",
    "to_char": "SHANNON",
    "val": 4
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "KATE",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "LOCKE",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "LOCKE",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "MARSHAL",
    "to_char": "MICHELLE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "MARSHAL",
    "to_char": "RADIO",
    "val": 1
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "MARSHAL",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "MARSHAL",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "MARSHAL",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "MICHAEL",
    "to_char": "ROSE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "MICHAEL",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "MICHAEL",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "MICHAEL",
    "to_char": "SHANNON",
    "val": 2
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "MICHAEL",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "MICHAEL",
    "to_char": "WALT",
    "val": 3
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "RADIO",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "RADIO",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "RADIO",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "ROSE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "ROSE",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "ROSE",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "SAWYER",
    "to_char": "SAYID",
    "val": 4
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "SAWYER",
    "to_char": "SAYID AND KATE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "SAWYER",
    "to_char": "SHANNON",
    "val": 3
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "SAYID",
    "to_char": "SAYID AND KATE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "SAYID",
    "to_char": "SHANNON",
    "val": 3
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "SAYID AND KATE",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "SHANNON",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 2,
    "from_char": "SHANNON",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 3,
    "from_char": "BOONE",
    "to_char": "CHARLIE",
    "val": 3
  },
  {
    "season": 1,
    "episode": 3,
    "from_char": "BOONE",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 1,
    "episode": 3,
    "from_char": "BOONE",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 1,
    "episode": 3,
    "from_char": "BOONE",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 3,
    "from_char": "BOONE",
    "to_char": "MARSHAL",
    "val": 1
  },
  {
    "season": 1,
    "episode": 3,
    "from_char": "BOONE",
    "to_char": "SAWYER",
    "val": 3
  },
  {
    "season": 1,
    "episode": 3,
    "from_char": "BOONE",
    "to_char": "SAYID",
    "val": 3
  },
  {
    "season": 1,
    "episode": 3,
    "from_char": "BOONE",
    "to_char": "SHANNON",
    "val": 3
  },
  {
    "season": 1,
    "episode": 3,
    "from_char": "CHARLIE",
    "to_char": "CLAIRE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 3,
    "from_char": "CHARLIE",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 1,
    "episode": 3,
    "from_char": "CHARLIE",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 3,
    "from_char": "CHARLIE",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 1,
    "episode": 3,
    "from_char": "CHARLIE",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 3,
    "from_char": "CHARLIE",
    "to_char": "MARSHAL",
    "val": 1
  },
  {
    "season": 1,
    "episode": 3,
    "from_char": "CHARLIE",
    "to_char": "SAWYER",
    "val": 3
  },
  {
    "season": 1,
    "episode": 3,
    "from_char": "CHARLIE",
    "to_char": "SAYID",
    "val": 3
  },
  {
    "season": 1,
    "episode": 3,
    "from_char": "CHARLIE",
    "to_char": "SHANNON",
    "val": 3
  },
  {
    "season": 1,
    "episode": 3,
    "from_char": "CHARLIE",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 3,
    "from_char": "CLAIRE",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 3,
    "from_char": "CLAIRE",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 3,
    "from_char": "HURLEY",
    "to_char": "JACK",
    "val": 4
  },
  {
    "season": 1,
    "episode": 3,
    "from_char": "HURLEY",
    "to_char": "KATE",
    "val": 3
  },
  {
    "season": 1,
    "episode": 3,
    "from_char": "HURLEY",
    "to_char": "MARSHAL",
    "val": 1
  },
  {
    "season": 1,
    "episode": 3,
    "from_char": "HURLEY",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 1,
    "episode": 3,
    "from_char": "HURLEY",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 1,
    "episode": 3,
    "from_char": "JACK",
    "to_char": "KATE",
    "val": 5
  },
  {
    "season": 1,
    "episode": 3,
    "from_char": "JACK",
    "to_char": "LOCKE",
    "val": 2
  },
  {
    "season": 1,
    "episode": 3,
    "from_char": "JACK",
    "to_char": "MARSHAL",
    "val": 3
  },
  {
    "season": 1,
    "episode": 3,
    "from_char": "JACK",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 1,
    "episode": 3,
    "from_char": "JACK",
    "to_char": "SAWYER",
    "val": 3
  },
  {
    "season": 1,
    "episode": 3,
    "from_char": "JACK",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 1,
    "episode": 3,
    "from_char": "JACK",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 1,
    "episode": 3,
    "from_char": "JIN",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 3,
    "from_char": "KATE",
    "to_char": "LOCKE",
    "val": 2
  },
  {
    "season": 1,
    "episode": 3,
    "from_char": "KATE",
    "to_char": "MARSHAL",
    "val": 2
  },
  {
    "season": 1,
    "episode": 3,
    "from_char": "KATE",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 1,
    "episode": 3,
    "from_char": "KATE",
    "to_char": "RAY",
    "val": 3
  },
  {
    "season": 1,
    "episode": 3,
    "from_char": "KATE",
    "to_char": "SAWYER",
    "val": 3
  },
  {
    "season": 1,
    "episode": 3,
    "from_char": "KATE",
    "to_char": "SAYID",
    "val": 3
  },
  {
    "season": 1,
    "episode": 3,
    "from_char": "KATE",
    "to_char": "SHANNON",
    "val": 2
  },
  {
    "season": 1,
    "episode": 3,
    "from_char": "LOCKE",
    "to_char": "MARSHAL",
    "val": 1
  },
  {
    "season": 1,
    "episode": 3,
    "from_char": "LOCKE",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 1,
    "episode": 3,
    "from_char": "LOCKE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 1,
    "episode": 3,
    "from_char": "LOCKE",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 1,
    "episode": 3,
    "from_char": "LOCKE",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 1,
    "episode": 3,
    "from_char": "MARSHAL",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 1,
    "episode": 3,
    "from_char": "MARSHAL",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 1,
    "episode": 3,
    "from_char": "MARSHAL",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 1,
    "episode": 3,
    "from_char": "MICHAEL",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 3,
    "from_char": "SAWYER",
    "to_char": "SAYID",
    "val": 3
  },
  {
    "season": 1,
    "episode": 3,
    "from_char": "SAWYER",
    "to_char": "SHANNON",
    "val": 3
  },
  {
    "season": 1,
    "episode": 3,
    "from_char": "SAYID",
    "to_char": "SHANNON",
    "val": 3
  },
  {
    "season": 1,
    "episode": 4,
    "from_char": "AGENT",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 4,
    "from_char": "BOONE",
    "to_char": "CHARLIE",
    "val": 2
  },
  {
    "season": 1,
    "episode": 4,
    "from_char": "BOONE",
    "to_char": "CLAIRE",
    "val": 2
  },
  {
    "season": 1,
    "episode": 4,
    "from_char": "BOONE",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 1,
    "episode": 4,
    "from_char": "BOONE",
    "to_char": "JACK",
    "val": 2
  },
  {
    "season": 1,
    "episode": 4,
    "from_char": "BOONE",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 1,
    "episode": 4,
    "from_char": "BOONE",
    "to_char": "MICHAEL",
    "val": 2
  },
  {
    "season": 1,
    "episode": 4,
    "from_char": "BOONE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 1,
    "episode": 4,
    "from_char": "BOONE",
    "to_char": "SHANNON",
    "val": 3
  },
  {
    "season": 1,
    "episode": 4,
    "from_char": "BOONE",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 1,
    "episode": 4,
    "from_char": "BOONE",
    "to_char": "WALT",
    "val": 2
  },
  {
    "season": 1,
    "episode": 4,
    "from_char": "CHARLIE",
    "to_char": "CLAIRE",
    "val": 2
  },
  {
    "season": 1,
    "episode": 4,
    "from_char": "CHARLIE",
    "to_char": "HURLEY",
    "val": 3
  },
  {
    "season": 1,
    "episode": 4,
    "from_char": "CHARLIE",
    "to_char": "JACK",
    "val": 3
  },
  {
    "season": 1,
    "episode": 4,
    "from_char": "CHARLIE",
    "to_char": "KATE",
    "val": 3
  },
  {
    "season": 1,
    "episode": 4,
    "from_char": "CHARLIE",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 4,
    "from_char": "CHARLIE",
    "to_char": "MICHAEL",
    "val": 2
  },
  {
    "season": 1,
    "episode": 4,
    "from_char": "CHARLIE",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 1,
    "episode": 4,
    "from_char": "CHARLIE",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 1,
    "episode": 4,
    "from_char": "CHARLIE",
    "to_char": "SHANNON",
    "val": 2
  },
  {
    "season": 1,
    "episode": 4,
    "from_char": "CHARLIE",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 4,
    "from_char": "CHARLIE",
    "to_char": "WALT",
    "val": 2
  },
  {
    "season": 1,
    "episode": 4,
    "from_char": "CLAIRE",
    "to_char": "HURLEY",
    "val": 2
  },
  {
    "season": 1,
    "episode": 4,
    "from_char": "CLAIRE",
    "to_char": "JACK",
    "val": 2
  },
  {
    "season": 1,
    "episode": 4,
    "from_char": "CLAIRE",
    "to_char": "KATE",
    "val": 4
  },
  {
    "season": 1,
    "episode": 4,
    "from_char": "CLAIRE",
    "to_char": "LOCKE",
    "val": 2
  },
  {
    "season": 1,
    "episode": 4,
    "from_char": "CLAIRE",
    "to_char": "MICHAEL",
    "val": 4
  },
  {
    "season": 1,
    "episode": 4,
    "from_char": "CLAIRE",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 1,
    "episode": 4,
    "from_char": "CLAIRE",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 1,
    "episode": 4,
    "from_char": "CLAIRE",
    "to_char": "SHANNON",
    "val": 2
  },
  {
    "season": 1,
    "episode": 4,
    "from_char": "CLAIRE",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 1,
    "episode": 4,
    "from_char": "CLAIRE",
    "to_char": "WALT",
    "val": 3
  },
  {
    "season": 1,
    "episode": 4,
    "from_char": "GL12",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 4,
    "from_char": "GL12",
    "to_char": "LOCKE",
    "val": 2
  },
  {
    "season": 1,
    "episode": 4,
    "from_char": "GL12",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 1,
    "episode": 4,
    "from_char": "GL12",
    "to_char": "RANDY",
    "val": 2
  },
  {
    "season": 1,
    "episode": 4,
    "from_char": "HELEN",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 4,
    "from_char": "HURLEY",
    "to_char": "JACK",
    "val": 2
  },
  {
    "season": 1,
    "episode": 4,
    "from_char": "HURLEY",
    "to_char": "KATE",
    "val": 3
  },
  {
    "season": 1,
    "episode": 4,
    "from_char": "HURLEY",
    "to_char": "LOCKE",
    "val": 2
  },
  {
    "season": 1,
    "episode": 4,
    "from_char": "HURLEY",
    "to_char": "MICHAEL",
    "val": 3
  },
  {
    "season": 1,
    "episode": 4,
    "from_char": "HURLEY",
    "to_char": "SAWYER",
    "val": 3
  },
  {
    "season": 1,
    "episode": 4,
    "from_char": "HURLEY",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 1,
    "episode": 4,
    "from_char": "HURLEY",
    "to_char": "SHANNON",
    "val": 2
  },
  {
    "season": 1,
    "episode": 4,
    "from_char": "HURLEY",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 4,
    "from_char": "HURLEY",
    "to_char": "WALT",
    "val": 3
  },
  {
    "season": 1,
    "episode": 4,
    "from_char": "JACK",
    "to_char": "KATE",
    "val": 5
  },
  {
    "season": 1,
    "episode": 4,
    "from_char": "JACK",
    "to_char": "LOCKE",
    "val": 2
  },
  {
    "season": 1,
    "episode": 4,
    "from_char": "JACK",
    "to_char": "MICHAEL",
    "val": 3
  },
  {
    "season": 1,
    "episode": 4,
    "from_char": "JACK",
    "to_char": "ROSE",
    "val": 2
  },
  {
    "season": 1,
    "episode": 4,
    "from_char": "JACK",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 1,
    "episode": 4,
    "from_char": "JACK",
    "to_char": "SAYID",
    "val": 4
  },
  {
    "season": 1,
    "episode": 4,
    "from_char": "JACK",
    "to_char": "SHANNON",
    "val": 3
  },
  {
    "season": 1,
    "episode": 4,
    "from_char": "JACK",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 4,
    "from_char": "JACK",
    "to_char": "WALT",
    "val": 3
  },
  {
    "season": 1,
    "episode": 4,
    "from_char": "KATE",
    "to_char": "LOCKE",
    "val": 6
  },
  {
    "season": 1,
    "episode": 4,
    "from_char": "KATE",
    "to_char": "MICHAEL",
    "val": 8
  },
  {
    "season": 1,
    "episode": 4,
    "from_char": "KATE",
    "to_char": "RANDY",
    "val": 1
  },
  {
    "season": 1,
    "episode": 4,
    "from_char": "KATE",
    "to_char": "SAWYER",
    "val": 3
  },
  {
    "season": 1,
    "episode": 4,
    "from_char": "KATE",
    "to_char": "SAYID",
    "val": 4
  },
  {
    "season": 1,
    "episode": 4,
    "from_char": "KATE",
    "to_char": "SHANNON",
    "val": 3
  },
  {
    "season": 1,
    "episode": 4,
    "from_char": "KATE",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 1,
    "episode": 4,
    "from_char": "KATE",
    "to_char": "WALT",
    "val": 4
  },
  {
    "season": 1,
    "episode": 4,
    "from_char": "LOCKE",
    "to_char": "MICHAEL",
    "val": 5
  },
  {
    "season": 1,
    "episode": 4,
    "from_char": "LOCKE",
    "to_char": "RANDY",
    "val": 2
  },
  {
    "season": 1,
    "episode": 4,
    "from_char": "LOCKE",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 1,
    "episode": 4,
    "from_char": "LOCKE",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 1,
    "episode": 4,
    "from_char": "LOCKE",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 1,
    "episode": 4,
    "from_char": "LOCKE",
    "to_char": "WALT",
    "val": 2
  },
  {
    "season": 1,
    "episode": 4,
    "from_char": "MICHAEL",
    "to_char": "RANDY",
    "val": 1
  },
  {
    "season": 1,
    "episode": 4,
    "from_char": "MICHAEL",
    "to_char": "SAWYER",
    "val": 3
  },
  {
    "season": 1,
    "episode": 4,
    "from_char": "MICHAEL",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 1,
    "episode": 4,
    "from_char": "MICHAEL",
    "to_char": "SHANNON",
    "val": 3
  },
  {
    "season": 1,
    "episode": 4,
    "from_char": "MICHAEL",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 1,
    "episode": 4,
    "from_char": "MICHAEL",
    "to_char": "WALT",
    "val": 4
  },
  {
    "season": 1,
    "episode": 4,
    "from_char": "SAWYER",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 1,
    "episode": 4,
    "from_char": "SAWYER",
    "to_char": "SHANNON",
    "val": 2
  },
  {
    "season": 1,
    "episode": 4,
    "from_char": "SAWYER",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 4,
    "from_char": "SAWYER",
    "to_char": "WALT",
    "val": 3
  },
  {
    "season": 1,
    "episode": 4,
    "from_char": "SAYID",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 1,
    "episode": 4,
    "from_char": "SAYID",
    "to_char": "WALT",
    "val": 2
  },
  {
    "season": 1,
    "episode": 4,
    "from_char": "SHANNON",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 1,
    "episode": 4,
    "from_char": "SHANNON",
    "to_char": "WALT",
    "val": 3
  },
  {
    "season": 1,
    "episode": 4,
    "from_char": "SUN",
    "to_char": "WALT",
    "val": 2
  },
  {
    "season": 1,
    "episode": 5,
    "from_char": "AGENT",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 1,
    "episode": 5,
    "from_char": "BOONE",
    "to_char": "CHARLIE",
    "val": 2
  },
  {
    "season": 1,
    "episode": 5,
    "from_char": "BOONE",
    "to_char": "CLAIRE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 5,
    "from_char": "BOONE",
    "to_char": "JACK",
    "val": 3
  },
  {
    "season": 1,
    "episode": 5,
    "from_char": "BOONE",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 5,
    "from_char": "BOONE",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 1,
    "episode": 5,
    "from_char": "BOONE",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 1,
    "episode": 5,
    "from_char": "BOONE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 1,
    "episode": 5,
    "from_char": "BOONE",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 5,
    "from_char": "CHARLIE",
    "to_char": "CLAIRE",
    "val": 4
  },
  {
    "season": 1,
    "episode": 5,
    "from_char": "CHARLIE",
    "to_char": "HURLEY",
    "val": 2
  },
  {
    "season": 1,
    "episode": 5,
    "from_char": "CHARLIE",
    "to_char": "JACK",
    "val": 4
  },
  {
    "season": 1,
    "episode": 5,
    "from_char": "CHARLIE",
    "to_char": "JIN",
    "val": 3
  },
  {
    "season": 1,
    "episode": 5,
    "from_char": "CHARLIE",
    "to_char": "KATE",
    "val": 5
  },
  {
    "season": 1,
    "episode": 5,
    "from_char": "CHARLIE",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 5,
    "from_char": "CHARLIE",
    "to_char": "MICHAEL",
    "val": 3
  },
  {
    "season": 1,
    "episode": 5,
    "from_char": "CHARLIE",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 1,
    "episode": 5,
    "from_char": "CHARLIE",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 1,
    "episode": 5,
    "from_char": "CHARLIE",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 1,
    "episode": 5,
    "from_char": "CHARLIE",
    "to_char": "SUN",
    "val": 3
  },
  {
    "season": 1,
    "episode": 5,
    "from_char": "CHARLIE",
    "to_char": "WALT",
    "val": 2
  },
  {
    "season": 1,
    "episode": 5,
    "from_char": "CHRISTIAN SHEPHARD",
    "to_char": "YOUNG JACK",
    "val": 1
  },
  {
    "season": 1,
    "episode": 5,
    "from_char": "CLAIRE",
    "to_char": "HURLEY",
    "val": 2
  },
  {
    "season": 1,
    "episode": 5,
    "from_char": "CLAIRE",
    "to_char": "JACK",
    "val": 3
  },
  {
    "season": 1,
    "episode": 5,
    "from_char": "CLAIRE",
    "to_char": "JIN",
    "val": 3
  },
  {
    "season": 1,
    "episode": 5,
    "from_char": "CLAIRE",
    "to_char": "KATE",
    "val": 4
  },
  {
    "season": 1,
    "episode": 5,
    "from_char": "CLAIRE",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 5,
    "from_char": "CLAIRE",
    "to_char": "MICHAEL",
    "val": 3
  },
  {
    "season": 1,
    "episode": 5,
    "from_char": "CLAIRE",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 1,
    "episode": 5,
    "from_char": "CLAIRE",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 1,
    "episode": 5,
    "from_char": "CLAIRE",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 1,
    "episode": 5,
    "from_char": "CLAIRE",
    "to_char": "SUN",
    "val": 3
  },
  {
    "season": 1,
    "episode": 5,
    "from_char": "CLAIRE",
    "to_char": "WALT",
    "val": 2
  },
  {
    "season": 1,
    "episode": 5,
    "from_char": "HOTEL MANAGER",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 1,
    "episode": 5,
    "from_char": "HURLEY",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 1,
    "episode": 5,
    "from_char": "HURLEY",
    "to_char": "JIN",
    "val": 2
  },
  {
    "season": 1,
    "episode": 5,
    "from_char": "HURLEY",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 1,
    "episode": 5,
    "from_char": "HURLEY",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 1,
    "episode": 5,
    "from_char": "HURLEY",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 1,
    "episode": 5,
    "from_char": "HURLEY",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 1,
    "episode": 5,
    "from_char": "HURLEY",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 1,
    "episode": 5,
    "from_char": "HURLEY",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 1,
    "episode": 5,
    "from_char": "HURLEY",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 5,
    "from_char": "JACK",
    "to_char": "JIN",
    "val": 2
  },
  {
    "season": 1,
    "episode": 5,
    "from_char": "JACK",
    "to_char": "KATE",
    "val": 4
  },
  {
    "season": 1,
    "episode": 5,
    "from_char": "JACK",
    "to_char": "LOCKE",
    "val": 2
  },
  {
    "season": 1,
    "episode": 5,
    "from_char": "JACK",
    "to_char": "MARGO",
    "val": 1
  },
  {
    "season": 1,
    "episode": 5,
    "from_char": "JACK",
    "to_char": "MEDICAL EXAMINER",
    "val": 1
  },
  {
    "season": 1,
    "episode": 5,
    "from_char": "JACK",
    "to_char": "MICHAEL",
    "val": 3
  },
  {
    "season": 1,
    "episode": 5,
    "from_char": "JACK",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 1,
    "episode": 5,
    "from_char": "JACK",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 1,
    "episode": 5,
    "from_char": "JACK",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 1,
    "episode": 5,
    "from_char": "JACK",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 1,
    "episode": 5,
    "from_char": "JACK",
    "to_char": "WALT",
    "val": 2
  },
  {
    "season": 1,
    "episode": 5,
    "from_char": "JIN",
    "to_char": "KATE",
    "val": 3
  },
  {
    "season": 1,
    "episode": 5,
    "from_char": "JIN",
    "to_char": "MICHAEL",
    "val": 2
  },
  {
    "season": 1,
    "episode": 5,
    "from_char": "JIN",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 1,
    "episode": 5,
    "from_char": "JIN",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 1,
    "episode": 5,
    "from_char": "JIN",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 1,
    "episode": 5,
    "from_char": "JIN",
    "to_char": "SUN",
    "val": 3
  },
  {
    "season": 1,
    "episode": 5,
    "from_char": "JIN",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 5,
    "from_char": "KATE",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 5,
    "from_char": "KATE",
    "to_char": "MICHAEL",
    "val": 3
  },
  {
    "season": 1,
    "episode": 5,
    "from_char": "KATE",
    "to_char": "SAWYER",
    "val": 3
  },
  {
    "season": 1,
    "episode": 5,
    "from_char": "KATE",
    "to_char": "SAYID",
    "val": 3
  },
  {
    "season": 1,
    "episode": 5,
    "from_char": "KATE",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 1,
    "episode": 5,
    "from_char": "KATE",
    "to_char": "SUN",
    "val": 3
  },
  {
    "season": 1,
    "episode": 5,
    "from_char": "KATE",
    "to_char": "WALT",
    "val": 2
  },
  {
    "season": 1,
    "episode": 5,
    "from_char": "LOCKE",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 1,
    "episode": 5,
    "from_char": "LOCKE",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 1,
    "episode": 5,
    "from_char": "LOCKE",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 5,
    "from_char": "MICHAEL",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 1,
    "episode": 5,
    "from_char": "MICHAEL",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 1,
    "episode": 5,
    "from_char": "MICHAEL",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 1,
    "episode": 5,
    "from_char": "MICHAEL",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 1,
    "episode": 5,
    "from_char": "MICHAEL",
    "to_char": "WALT",
    "val": 2
  },
  {
    "season": 1,
    "episode": 5,
    "from_char": "SAWYER",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 1,
    "episode": 5,
    "from_char": "SAWYER",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 1,
    "episode": 5,
    "from_char": "SAWYER",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 1,
    "episode": 5,
    "from_char": "SAWYER",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 5,
    "from_char": "SAYID",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 5,
    "from_char": "SAYID",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 5,
    "from_char": "SHANNON",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 5,
    "from_char": "SHANNON",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 5,
    "from_char": "SUN",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 6,
    "from_char": "CHARLIE",
    "to_char": "JACK",
    "val": 4
  },
  {
    "season": 1,
    "episode": 6,
    "from_char": "CHARLIE",
    "to_char": "KATE",
    "val": 3
  },
  {
    "season": 1,
    "episode": 6,
    "from_char": "CHARLIE",
    "to_char": "LOCKE",
    "val": 5
  },
  {
    "season": 1,
    "episode": 6,
    "from_char": "HURLEY",
    "to_char": "JACK",
    "val": 2
  },
  {
    "season": 1,
    "episode": 6,
    "from_char": "HURLEY",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 6,
    "from_char": "HURLEY",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 6,
    "from_char": "HURLEY",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 6,
    "from_char": "HURLEY",
    "to_char": "MICHAEL",
    "val": 3
  },
  {
    "season": 1,
    "episode": 6,
    "from_char": "HURLEY",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 1,
    "episode": 6,
    "from_char": "HURLEY",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 1,
    "episode": 6,
    "from_char": "HURLEY",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 6,
    "from_char": "HURLEY",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 6,
    "from_char": "INTERIOR DECORATOR",
    "to_char": "INTERIOR DECORATOR,",
    "val": 1
  },
  {
    "season": 1,
    "episode": 6,
    "from_char": "INTERIOR DECORATOR",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 6,
    "from_char": "INTERIOR DECORATOR",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 6,
    "from_char": "INTERIOR DECORATOR,",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 6,
    "from_char": "INTERIOR DECORATOR,",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 6,
    "from_char": "JACK",
    "to_char": "KATE",
    "val": 8
  },
  {
    "season": 1,
    "episode": 6,
    "from_char": "JACK",
    "to_char": "LOCKE",
    "val": 5
  },
  {
    "season": 1,
    "episode": 6,
    "from_char": "JACK",
    "to_char": "MICHAEL",
    "val": 3
  },
  {
    "season": 1,
    "episode": 6,
    "from_char": "JACK",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 1,
    "episode": 6,
    "from_char": "JACK",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 1,
    "episode": 6,
    "from_char": "JACK",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 6,
    "from_char": "JIN",
    "to_char": "MICHAEL",
    "val": 2
  },
  {
    "season": 1,
    "episode": 6,
    "from_char": "JIN",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 1,
    "episode": 6,
    "from_char": "JIN",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 1,
    "episode": 6,
    "from_char": "JIN",
    "to_char": "SUN",
    "val": 9
  },
  {
    "season": 1,
    "episode": 6,
    "from_char": "JIN",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 6,
    "from_char": "KATE",
    "to_char": "LOCKE",
    "val": 3
  },
  {
    "season": 1,
    "episode": 6,
    "from_char": "KATE",
    "to_char": "MICHAEL",
    "val": 2
  },
  {
    "season": 1,
    "episode": 6,
    "from_char": "KATE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 1,
    "episode": 6,
    "from_char": "KATE",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 1,
    "episode": 6,
    "from_char": "LOCKE",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 1,
    "episode": 6,
    "from_char": "LOCKE",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 6,
    "from_char": "MICHAEL",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 1,
    "episode": 6,
    "from_char": "MICHAEL",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 1,
    "episode": 6,
    "from_char": "MICHAEL",
    "to_char": "SUN",
    "val": 5
  },
  {
    "season": 1,
    "episode": 6,
    "from_char": "MICHAEL",
    "to_char": "WALT",
    "val": 3
  },
  {
    "season": 1,
    "episode": 6,
    "from_char": "SAWYER",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 1,
    "episode": 6,
    "from_char": "SAWYER",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 6,
    "from_char": "SAYID",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 6,
    "from_char": "SUN",
    "to_char": "WALT",
    "val": 2
  },
  {
    "season": 1,
    "episode": 7,
    "from_char": "BOONE",
    "to_char": "CHARLIE",
    "val": 3
  },
  {
    "season": 1,
    "episode": 7,
    "from_char": "BOONE",
    "to_char": "HURLEY",
    "val": 4
  },
  {
    "season": 1,
    "episode": 7,
    "from_char": "BOONE",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 1,
    "episode": 7,
    "from_char": "BOONE",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 7,
    "from_char": "BOONE",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 1,
    "episode": 7,
    "from_char": "BOONE",
    "to_char": "MICHAEL",
    "val": 5
  },
  {
    "season": 1,
    "episode": 7,
    "from_char": "BOONE",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 1,
    "episode": 7,
    "from_char": "BOONE",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 1,
    "episode": 7,
    "from_char": "BOONE",
    "to_char": "SCOTT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 7,
    "from_char": "BOONE",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 1,
    "episode": 7,
    "from_char": "BOONE",
    "to_char": "STEVE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 7,
    "from_char": "CHARLIE",
    "to_char": "HURLEY",
    "val": 7
  },
  {
    "season": 1,
    "episode": 7,
    "from_char": "CHARLIE",
    "to_char": "JACK",
    "val": 5
  },
  {
    "season": 1,
    "episode": 7,
    "from_char": "CHARLIE",
    "to_char": "JIN",
    "val": 2
  },
  {
    "season": 1,
    "episode": 7,
    "from_char": "CHARLIE",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 1,
    "episode": 7,
    "from_char": "CHARLIE",
    "to_char": "LIAM",
    "val": 5
  },
  {
    "season": 1,
    "episode": 7,
    "from_char": "CHARLIE",
    "to_char": "LOCKE",
    "val": 5
  },
  {
    "season": 1,
    "episode": 7,
    "from_char": "CHARLIE",
    "to_char": "MICHAEL",
    "val": 5
  },
  {
    "season": 1,
    "episode": 7,
    "from_char": "CHARLIE",
    "to_char": "PRIEST",
    "val": 1
  },
  {
    "season": 1,
    "episode": 7,
    "from_char": "CHARLIE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 1,
    "episode": 7,
    "from_char": "CHARLIE",
    "to_char": "SCOTT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 7,
    "from_char": "CHARLIE",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 1,
    "episode": 7,
    "from_char": "CHARLIE",
    "to_char": "STEVE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 7,
    "from_char": "CHARLIE",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 7,
    "from_char": "CHARLIE",
    "to_char": "WALT",
    "val": 2
  },
  {
    "season": 1,
    "episode": 7,
    "from_char": "HURLEY",
    "to_char": "JACK",
    "val": 5
  },
  {
    "season": 1,
    "episode": 7,
    "from_char": "HURLEY",
    "to_char": "JIN",
    "val": 2
  },
  {
    "season": 1,
    "episode": 7,
    "from_char": "HURLEY",
    "to_char": "KATE",
    "val": 3
  },
  {
    "season": 1,
    "episode": 7,
    "from_char": "HURLEY",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 7,
    "from_char": "HURLEY",
    "to_char": "MICHAEL",
    "val": 6
  },
  {
    "season": 1,
    "episode": 7,
    "from_char": "HURLEY",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 7,
    "from_char": "HURLEY",
    "to_char": "WALT",
    "val": 3
  },
  {
    "season": 1,
    "episode": 7,
    "from_char": "JACK",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 7,
    "from_char": "JACK",
    "to_char": "KATE",
    "val": 3
  },
  {
    "season": 1,
    "episode": 7,
    "from_char": "JACK",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 7,
    "from_char": "JACK",
    "to_char": "MICHAEL",
    "val": 2
  },
  {
    "season": 1,
    "episode": 7,
    "from_char": "JACK",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 1,
    "episode": 7,
    "from_char": "JACK",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 7,
    "from_char": "JACK",
    "to_char": "WALT",
    "val": 2
  },
  {
    "season": 1,
    "episode": 7,
    "from_char": "JIN",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 1,
    "episode": 7,
    "from_char": "JIN",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 7,
    "from_char": "KATE",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 7,
    "from_char": "KATE",
    "to_char": "MICHAEL",
    "val": 2
  },
  {
    "season": 1,
    "episode": 7,
    "from_char": "KATE",
    "to_char": "SAWYER",
    "val": 5
  },
  {
    "season": 1,
    "episode": 7,
    "from_char": "KATE",
    "to_char": "SAYID",
    "val": 3
  },
  {
    "season": 1,
    "episode": 7,
    "from_char": "KATE",
    "to_char": "WALT",
    "val": 2
  },
  {
    "season": 1,
    "episode": 7,
    "from_char": "LIAM",
    "to_char": "PRIEST",
    "val": 1
  },
  {
    "season": 1,
    "episode": 7,
    "from_char": "LOCKE",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 7,
    "from_char": "MICHAEL",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 1,
    "episode": 7,
    "from_char": "MICHAEL",
    "to_char": "SCOTT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 7,
    "from_char": "MICHAEL",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 1,
    "episode": 7,
    "from_char": "MICHAEL",
    "to_char": "STEVE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 7,
    "from_char": "MICHAEL",
    "to_char": "WALT",
    "val": 2
  },
  {
    "season": 1,
    "episode": 7,
    "from_char": "SAWYER",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 1,
    "episode": 7,
    "from_char": "SAWYER",
    "to_char": "SCOTT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 7,
    "from_char": "SAWYER",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 1,
    "episode": 7,
    "from_char": "SAWYER",
    "to_char": "STEVE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 7,
    "from_char": "SAYID",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 1,
    "episode": 7,
    "from_char": "SCOTT",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 1,
    "episode": 7,
    "from_char": "SCOTT",
    "to_char": "STEVE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 7,
    "from_char": "SHANNON",
    "to_char": "STEVE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 8,
    "from_char": "BOONE",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 1,
    "episode": 8,
    "from_char": "BOONE",
    "to_char": "JACK",
    "val": 5
  },
  {
    "season": 1,
    "episode": 8,
    "from_char": "BOONE",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 8,
    "from_char": "BOONE",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 1,
    "episode": 8,
    "from_char": "BOONE",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 1,
    "episode": 8,
    "from_char": "BOONE",
    "to_char": "SAYID",
    "val": 3
  },
  {
    "season": 1,
    "episode": 8,
    "from_char": "BOONE",
    "to_char": "SHANNON",
    "val": 3
  },
  {
    "season": 1,
    "episode": 8,
    "from_char": "BOONE",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 8,
    "from_char": "BOY",
    "to_char": "DAVID",
    "val": 1
  },
  {
    "season": 1,
    "episode": 8,
    "from_char": "BOY",
    "to_char": "JESS",
    "val": 1
  },
  {
    "season": 1,
    "episode": 8,
    "from_char": "BOY",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 1,
    "episode": 8,
    "from_char": "CHARLIE",
    "to_char": "CLAIRE",
    "val": 3
  },
  {
    "season": 1,
    "episode": 8,
    "from_char": "CHARLIE",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 1,
    "episode": 8,
    "from_char": "DAVID",
    "to_char": "JESS",
    "val": 2
  },
  {
    "season": 1,
    "episode": 8,
    "from_char": "DAVID",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 1,
    "episode": 8,
    "from_char": "HURLEY",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 1,
    "episode": 8,
    "from_char": "HURLEY",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 1,
    "episode": 8,
    "from_char": "HURLEY",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 1,
    "episode": 8,
    "from_char": "JACK",
    "to_char": "KATE",
    "val": 4
  },
  {
    "season": 1,
    "episode": 8,
    "from_char": "JACK",
    "to_char": "SAWYER",
    "val": 6
  },
  {
    "season": 1,
    "episode": 8,
    "from_char": "JACK",
    "to_char": "SAYID",
    "val": 4
  },
  {
    "season": 1,
    "episode": 8,
    "from_char": "JACK",
    "to_char": "SHANNON",
    "val": 2
  },
  {
    "season": 1,
    "episode": 8,
    "from_char": "JESS",
    "to_char": "SAWYER",
    "val": 4
  },
  {
    "season": 1,
    "episode": 8,
    "from_char": "JIN",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 1,
    "episode": 8,
    "from_char": "JIN",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 1,
    "episode": 8,
    "from_char": "JIN",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 1,
    "episode": 8,
    "from_char": "JIN",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 8,
    "from_char": "KATE",
    "to_char": "SAWYER",
    "val": 6
  },
  {
    "season": 1,
    "episode": 8,
    "from_char": "KATE",
    "to_char": "SAYID",
    "val": 3
  },
  {
    "season": 1,
    "episode": 8,
    "from_char": "KILO",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 1,
    "episode": 8,
    "from_char": "LOCKE",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 1,
    "episode": 8,
    "from_char": "MICHAEL",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 1,
    "episode": 8,
    "from_char": "MICHAEL",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 1,
    "episode": 8,
    "from_char": "MICHAEL",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 1,
    "episode": 8,
    "from_char": "SAWYER",
    "to_char": "SAYID",
    "val": 3
  },
  {
    "season": 1,
    "episode": 8,
    "from_char": "SAWYER",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 1,
    "episode": 8,
    "from_char": "SAYID",
    "to_char": "SHANNON",
    "val": 3
  },
  {
    "season": 1,
    "episode": 8,
    "from_char": "SAYID",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 8,
    "from_char": "SHANNON",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 9,
    "from_char": "BOONE",
    "to_char": "CHARLIE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 9,
    "from_char": "BOONE",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 1,
    "episode": 9,
    "from_char": "BOONE",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 1,
    "episode": 9,
    "from_char": "BOONE",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 1,
    "episode": 9,
    "from_char": "BOONE",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 1,
    "episode": 9,
    "from_char": "BOONE",
    "to_char": "SHANNON",
    "val": 2
  },
  {
    "season": 1,
    "episode": 9,
    "from_char": "BOONE",
    "to_char": "SULLIVAN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 9,
    "from_char": "CHARLIE",
    "to_char": "HURLEY",
    "val": 3
  },
  {
    "season": 1,
    "episode": 9,
    "from_char": "CHARLIE",
    "to_char": "JACK",
    "val": 3
  },
  {
    "season": 1,
    "episode": 9,
    "from_char": "CHARLIE",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 1,
    "episode": 9,
    "from_char": "CHARLIE",
    "to_char": "MICHAEL",
    "val": 4
  },
  {
    "season": 1,
    "episode": 9,
    "from_char": "CHARLIE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 1,
    "episode": 9,
    "from_char": "CHARLIE",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 1,
    "episode": 9,
    "from_char": "CHARLIE",
    "to_char": "SULLIVAN",
    "val": 2
  },
  {
    "season": 1,
    "episode": 9,
    "from_char": "CHARLIE",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 9,
    "from_char": "DANIELLE",
    "to_char": "SAYID",
    "val": 9
  },
  {
    "season": 1,
    "episode": 9,
    "from_char": "ETHAN",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 1,
    "episode": 9,
    "from_char": "ETHAN",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 9,
    "from_char": "ETHAN",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 1,
    "episode": 9,
    "from_char": "ETHAN",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 9,
    "from_char": "HURLEY",
    "to_char": "JACK",
    "val": 4
  },
  {
    "season": 1,
    "episode": 9,
    "from_char": "HURLEY",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 1,
    "episode": 9,
    "from_char": "HURLEY",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 9,
    "from_char": "HURLEY",
    "to_char": "MICHAEL",
    "val": 5
  },
  {
    "season": 1,
    "episode": 9,
    "from_char": "HURLEY",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 1,
    "episode": 9,
    "from_char": "HURLEY",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 1,
    "episode": 9,
    "from_char": "HURLEY",
    "to_char": "SULLIVAN",
    "val": 2
  },
  {
    "season": 1,
    "episode": 9,
    "from_char": "HURLEY",
    "to_char": "WALT",
    "val": 3
  },
  {
    "season": 1,
    "episode": 9,
    "from_char": "JACK",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 1,
    "episode": 9,
    "from_char": "JACK",
    "to_char": "MICHAEL",
    "val": 4
  },
  {
    "season": 1,
    "episode": 9,
    "from_char": "JACK",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 1,
    "episode": 9,
    "from_char": "JACK",
    "to_char": "SULLIVAN",
    "val": 2
  },
  {
    "season": 1,
    "episode": 9,
    "from_char": "JACK",
    "to_char": "WALT",
    "val": 2
  },
  {
    "season": 1,
    "episode": 9,
    "from_char": "KATE",
    "to_char": "MICHAEL",
    "val": 2
  },
  {
    "season": 1,
    "episode": 9,
    "from_char": "KATE",
    "to_char": "SAWYER",
    "val": 3
  },
  {
    "season": 1,
    "episode": 9,
    "from_char": "KATE",
    "to_char": "SHANNON",
    "val": 2
  },
  {
    "season": 1,
    "episode": 9,
    "from_char": "KATE",
    "to_char": "SULLIVAN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 9,
    "from_char": "KATE",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 9,
    "from_char": "LOCKE",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 1,
    "episode": 9,
    "from_char": "LOCKE",
    "to_char": "WALT",
    "val": 2
  },
  {
    "season": 1,
    "episode": 9,
    "from_char": "MICHAEL",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 1,
    "episode": 9,
    "from_char": "MICHAEL",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 1,
    "episode": 9,
    "from_char": "MICHAEL",
    "to_char": "SULLIVAN",
    "val": 2
  },
  {
    "season": 1,
    "episode": 9,
    "from_char": "MICHAEL",
    "to_char": "WALT",
    "val": 3
  },
  {
    "season": 1,
    "episode": 9,
    "from_char": "NADIA",
    "to_char": "OMAR",
    "val": 3
  },
  {
    "season": 1,
    "episode": 9,
    "from_char": "NADIA",
    "to_char": "SAYID",
    "val": 4
  },
  {
    "season": 1,
    "episode": 9,
    "from_char": "OMAR",
    "to_char": "PRISONER",
    "val": 1
  },
  {
    "season": 1,
    "episode": 9,
    "from_char": "OMAR",
    "to_char": "SAYID",
    "val": 4
  },
  {
    "season": 1,
    "episode": 9,
    "from_char": "PRISONER",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 1,
    "episode": 9,
    "from_char": "SAWYER",
    "to_char": "SHANNON",
    "val": 2
  },
  {
    "season": 1,
    "episode": 9,
    "from_char": "SAWYER",
    "to_char": "SULLIVAN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 9,
    "from_char": "SHANNON",
    "to_char": "SULLIVAN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 10,
    "from_char": "ARLENE",
    "to_char": "CLAIRE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 10,
    "from_char": "ARLENE",
    "to_char": "LAWYER",
    "val": 1
  },
  {
    "season": 1,
    "episode": 10,
    "from_char": "BOONE",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 1,
    "episode": 10,
    "from_char": "BOONE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 1,
    "episode": 10,
    "from_char": "BOONE",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 1,
    "episode": 10,
    "from_char": "CHARLIE",
    "to_char": "CLAIRE",
    "val": 10
  },
  {
    "season": 1,
    "episode": 10,
    "from_char": "CHARLIE",
    "to_char": "ETHAN",
    "val": 3
  },
  {
    "season": 1,
    "episode": 10,
    "from_char": "CHARLIE",
    "to_char": "HURLEY",
    "val": 3
  },
  {
    "season": 1,
    "episode": 10,
    "from_char": "CHARLIE",
    "to_char": "JACK",
    "val": 4
  },
  {
    "season": 1,
    "episode": 10,
    "from_char": "CHARLIE",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 10,
    "from_char": "CHARLIE",
    "to_char": "LOCKE",
    "val": 2
  },
  {
    "season": 1,
    "episode": 10,
    "from_char": "CHARLIE",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 1,
    "episode": 10,
    "from_char": "CHARLIE",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 1,
    "episode": 10,
    "from_char": "CLAIRE",
    "to_char": "ETHAN",
    "val": 3
  },
  {
    "season": 1,
    "episode": 10,
    "from_char": "CLAIRE",
    "to_char": "HURLEY",
    "val": 2
  },
  {
    "season": 1,
    "episode": 10,
    "from_char": "CLAIRE",
    "to_char": "JACK",
    "val": 4
  },
  {
    "season": 1,
    "episode": 10,
    "from_char": "CLAIRE",
    "to_char": "LAWYER",
    "val": 1
  },
  {
    "season": 1,
    "episode": 10,
    "from_char": "CLAIRE",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 10,
    "from_char": "CLAIRE",
    "to_char": "MALKIN",
    "val": 5
  },
  {
    "season": 1,
    "episode": 10,
    "from_char": "CLAIRE",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 1,
    "episode": 10,
    "from_char": "CLAIRE",
    "to_char": "RACHEL",
    "val": 1
  },
  {
    "season": 1,
    "episode": 10,
    "from_char": "CLAIRE",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 1,
    "episode": 10,
    "from_char": "CLAIRE",
    "to_char": "THOMAS",
    "val": 2
  },
  {
    "season": 1,
    "episode": 10,
    "from_char": "ETHAN",
    "to_char": "HURLEY",
    "val": 3
  },
  {
    "season": 1,
    "episode": 10,
    "from_char": "ETHAN",
    "to_char": "JACK",
    "val": 2
  },
  {
    "season": 1,
    "episode": 10,
    "from_char": "ETHAN",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 1,
    "episode": 10,
    "from_char": "ETHAN",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 1,
    "episode": 10,
    "from_char": "HURLEY",
    "to_char": "JACK",
    "val": 4
  },
  {
    "season": 1,
    "episode": 10,
    "from_char": "HURLEY",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 10,
    "from_char": "HURLEY",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 10,
    "from_char": "HURLEY",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 1,
    "episode": 10,
    "from_char": "HURLEY",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 1,
    "episode": 10,
    "from_char": "HURLEY",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 1,
    "episode": 10,
    "from_char": "HURLEY",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 1,
    "episode": 10,
    "from_char": "JACK",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 1,
    "episode": 10,
    "from_char": "JACK",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 10,
    "from_char": "JACK",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 1,
    "episode": 10,
    "from_char": "JACK",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 1,
    "episode": 10,
    "from_char": "KATE",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 10,
    "from_char": "MALKIN",
    "to_char": "RACHEL",
    "val": 1
  },
  {
    "season": 1,
    "episode": 10,
    "from_char": "SAWYER",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 1,
    "episode": 11,
    "from_char": "ANDREA",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 1,
    "episode": 11,
    "from_char": "BOONE",
    "to_char": "JACK",
    "val": 2
  },
  {
    "season": 1,
    "episode": 11,
    "from_char": "BOONE",
    "to_char": "KATE",
    "val": 3
  },
  {
    "season": 1,
    "episode": 11,
    "from_char": "BOONE",
    "to_char": "LOCKE",
    "val": 6
  },
  {
    "season": 1,
    "episode": 11,
    "from_char": "BOONE",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 1,
    "episode": 11,
    "from_char": "BOONE",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 1,
    "episode": 11,
    "from_char": "BOONE",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 11,
    "from_char": "CHARLIE",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 1,
    "episode": 11,
    "from_char": "CHARLIE",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 11,
    "from_char": "CHARLIE",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 1,
    "episode": 11,
    "from_char": "CHARLIE",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 1,
    "episode": 11,
    "from_char": "CHARLIE",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 11,
    "from_char": "CHRISTIAN SHEPHARD",
    "to_char": "HOSPITAL ADMINISTRATOR",
    "val": 1
  },
  {
    "season": 1,
    "episode": 11,
    "from_char": "CHRISTIAN SHEPHARD",
    "to_char": "JACK",
    "val": 4
  },
  {
    "season": 1,
    "episode": 11,
    "from_char": "CHRISTIAN SHEPHARD",
    "to_char": "NURSE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 11,
    "from_char": "CHRISTIAN SHEPHARD",
    "to_char": "NURSE #2",
    "val": 1
  },
  {
    "season": 1,
    "episode": 11,
    "from_char": "ETHAN",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 1,
    "episode": 11,
    "from_char": "ETHAN",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 11,
    "from_char": "HOSPITAL ADMINISTRATOR",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 1,
    "episode": 11,
    "from_char": "HURLEY",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 1,
    "episode": 11,
    "from_char": "HURLEY",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 11,
    "from_char": "HURLEY",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 11,
    "from_char": "HURLEY",
    "to_char": "MICHAEL",
    "val": 2
  },
  {
    "season": 1,
    "episode": 11,
    "from_char": "HURLEY",
    "to_char": "WALT",
    "val": 2
  },
  {
    "season": 1,
    "episode": 11,
    "from_char": "JACK",
    "to_char": "KATE",
    "val": 9
  },
  {
    "season": 1,
    "episode": 11,
    "from_char": "JACK",
    "to_char": "LOCKE",
    "val": 5
  },
  {
    "season": 1,
    "episode": 11,
    "from_char": "JACK",
    "to_char": "MICHAEL",
    "val": 2
  },
  {
    "season": 1,
    "episode": 11,
    "from_char": "JACK",
    "to_char": "NURSE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 11,
    "from_char": "JACK",
    "to_char": "NURSE #2",
    "val": 1
  },
  {
    "season": 1,
    "episode": 11,
    "from_char": "JACK",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 1,
    "episode": 11,
    "from_char": "JACK",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 11,
    "from_char": "KATE",
    "to_char": "LOCKE",
    "val": 5
  },
  {
    "season": 1,
    "episode": 11,
    "from_char": "KATE",
    "to_char": "MICHAEL",
    "val": 3
  },
  {
    "season": 1,
    "episode": 11,
    "from_char": "KATE",
    "to_char": "SHANNON",
    "val": 2
  },
  {
    "season": 1,
    "episode": 11,
    "from_char": "KATE",
    "to_char": "WALT",
    "val": 2
  },
  {
    "season": 1,
    "episode": 11,
    "from_char": "LOCKE",
    "to_char": "MICHAEL",
    "val": 2
  },
  {
    "season": 1,
    "episode": 11,
    "from_char": "LOCKE",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 1,
    "episode": 11,
    "from_char": "LOCKE",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 11,
    "from_char": "MICHAEL",
    "to_char": "SHANNON",
    "val": 2
  },
  {
    "season": 1,
    "episode": 11,
    "from_char": "MICHAEL",
    "to_char": "WALT",
    "val": 3
  },
  {
    "season": 1,
    "episode": 11,
    "from_char": "NURSE",
    "to_char": "NURSE #2",
    "val": 1
  },
  {
    "season": 1,
    "episode": 11,
    "from_char": "SAWYER",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 1,
    "episode": 11,
    "from_char": "SAWYER",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 11,
    "from_char": "SHANNON",
    "to_char": "WALT",
    "val": 2
  },
  {
    "season": 1,
    "episode": 12,
    "from_char": "BASEBALL HAT",
    "to_char": "HUTTON",
    "val": 1
  },
  {
    "season": 1,
    "episode": 12,
    "from_char": "BASEBALL HAT",
    "to_char": "JASON",
    "val": 1
  },
  {
    "season": 1,
    "episode": 12,
    "from_char": "BASEBALL HAT",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 12,
    "from_char": "BASEBALL HAT",
    "to_char": "ROBBER #2",
    "val": 1
  },
  {
    "season": 1,
    "episode": 12,
    "from_char": "BOONE",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 1,
    "episode": 12,
    "from_char": "BOONE",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 12,
    "from_char": "BOONE",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 1,
    "episode": 12,
    "from_char": "BOONE",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 1,
    "episode": 12,
    "from_char": "CHARLIE",
    "to_char": "ROSE",
    "val": 3
  },
  {
    "season": 1,
    "episode": 12,
    "from_char": "CHARLIE",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 1,
    "episode": 12,
    "from_char": "CHARLIE",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 1,
    "episode": 12,
    "from_char": "HURLEY",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 1,
    "episode": 12,
    "from_char": "HURLEY",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 1,
    "episode": 12,
    "from_char": "HURLEY",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 1,
    "episode": 12,
    "from_char": "HURLEY",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 1,
    "episode": 12,
    "from_char": "HUTTON",
    "to_char": "JASON",
    "val": 4
  },
  {
    "season": 1,
    "episode": 12,
    "from_char": "HUTTON",
    "to_char": "KATE",
    "val": 4
  },
  {
    "season": 1,
    "episode": 12,
    "from_char": "HUTTON",
    "to_char": "MARK HUTTON",
    "val": 1
  },
  {
    "season": 1,
    "episode": 12,
    "from_char": "HUTTON",
    "to_char": "ROBBER #2",
    "val": 3
  },
  {
    "season": 1,
    "episode": 12,
    "from_char": "HUTTON",
    "to_char": "ROBBER #3",
    "val": 1
  },
  {
    "season": 1,
    "episode": 12,
    "from_char": "HUTTON",
    "to_char": "ROBBERS",
    "val": 1
  },
  {
    "season": 1,
    "episode": 12,
    "from_char": "JACK",
    "to_char": "KATE",
    "val": 5
  },
  {
    "season": 1,
    "episode": 12,
    "from_char": "JACK",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 1,
    "episode": 12,
    "from_char": "JACK",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 1,
    "episode": 12,
    "from_char": "JACK",
    "to_char": "SHANNON",
    "val": 2
  },
  {
    "season": 1,
    "episode": 12,
    "from_char": "JACK",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 12,
    "from_char": "JASON",
    "to_char": "KATE",
    "val": 4
  },
  {
    "season": 1,
    "episode": 12,
    "from_char": "JASON",
    "to_char": "MARK HUTTON",
    "val": 1
  },
  {
    "season": 1,
    "episode": 12,
    "from_char": "JASON",
    "to_char": "ROBBER #2",
    "val": 3
  },
  {
    "season": 1,
    "episode": 12,
    "from_char": "JASON",
    "to_char": "ROBBER #3",
    "val": 1
  },
  {
    "season": 1,
    "episode": 12,
    "from_char": "JASON",
    "to_char": "ROBBERS",
    "val": 1
  },
  {
    "season": 1,
    "episode": 12,
    "from_char": "KATE",
    "to_char": "MARK HUTTON",
    "val": 1
  },
  {
    "season": 1,
    "episode": 12,
    "from_char": "KATE",
    "to_char": "ROBBER #2",
    "val": 3
  },
  {
    "season": 1,
    "episode": 12,
    "from_char": "KATE",
    "to_char": "ROBBER #3",
    "val": 1
  },
  {
    "season": 1,
    "episode": 12,
    "from_char": "KATE",
    "to_char": "ROBBERS",
    "val": 1
  },
  {
    "season": 1,
    "episode": 12,
    "from_char": "KATE",
    "to_char": "SAWYER",
    "val": 4
  },
  {
    "season": 1,
    "episode": 12,
    "from_char": "KATE",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 12,
    "from_char": "MARK HUTTON",
    "to_char": "ROBBER #2",
    "val": 1
  },
  {
    "season": 1,
    "episode": 12,
    "from_char": "MARK HUTTON",
    "to_char": "ROBBERS",
    "val": 1
  },
  {
    "season": 1,
    "episode": 12,
    "from_char": "MICHAEL",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 1,
    "episode": 12,
    "from_char": "MICHAEL",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 1,
    "episode": 12,
    "from_char": "MICHAEL",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 1,
    "episode": 12,
    "from_char": "ROBBER #2",
    "to_char": "ROBBERS",
    "val": 1
  },
  {
    "season": 1,
    "episode": 12,
    "from_char": "ROSE",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 1,
    "episode": 12,
    "from_char": "ROSE",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 1,
    "episode": 12,
    "from_char": "SAWYER",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 1,
    "episode": 12,
    "from_char": "SAWYER",
    "to_char": "SHANNON",
    "val": 2
  },
  {
    "season": 1,
    "episode": 12,
    "from_char": "SAYID",
    "to_char": "SHANNON",
    "val": 5
  },
  {
    "season": 1,
    "episode": 13,
    "from_char": "BOONE",
    "to_char": "BRYAN",
    "val": 3
  },
  {
    "season": 1,
    "episode": 13,
    "from_char": "BOONE",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 1,
    "episode": 13,
    "from_char": "BOONE",
    "to_char": "LOCKE",
    "val": 6
  },
  {
    "season": 1,
    "episode": 13,
    "from_char": "BOONE",
    "to_char": "MALCOLM",
    "val": 1
  },
  {
    "season": 1,
    "episode": 13,
    "from_char": "BOONE",
    "to_char": "NICOLE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 13,
    "from_char": "BOONE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 1,
    "episode": 13,
    "from_char": "BOONE",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 1,
    "episode": 13,
    "from_char": "BOONE",
    "to_char": "SHANNON",
    "val": 9
  },
  {
    "season": 1,
    "episode": 13,
    "from_char": "BRYAN",
    "to_char": "SHANNON",
    "val": 2
  },
  {
    "season": 1,
    "episode": 13,
    "from_char": "CHARLIE",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 1,
    "episode": 13,
    "from_char": "HURLEY",
    "to_char": "JACK",
    "val": 2
  },
  {
    "season": 1,
    "episode": 13,
    "from_char": "HURLEY",
    "to_char": "JIN",
    "val": 3
  },
  {
    "season": 1,
    "episode": 13,
    "from_char": "HURLEY",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 1,
    "episode": 13,
    "from_char": "HURLEY",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 1,
    "episode": 13,
    "from_char": "HURLEY",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 1,
    "episode": 13,
    "from_char": "HURLEY",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 1,
    "episode": 13,
    "from_char": "HURLEY",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 13,
    "from_char": "HURLEY",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 13,
    "from_char": "JACK",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 13,
    "from_char": "JACK",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 1,
    "episode": 13,
    "from_char": "JACK",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 13,
    "from_char": "JACK",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 1,
    "episode": 13,
    "from_char": "JACK",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 1,
    "episode": 13,
    "from_char": "JACK",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 13,
    "from_char": "JACK",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 13,
    "from_char": "JIN",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 13,
    "from_char": "JIN",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 1,
    "episode": 13,
    "from_char": "JIN",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 13,
    "from_char": "JIN",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 13,
    "from_char": "KATE",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 1,
    "episode": 13,
    "from_char": "KATE",
    "to_char": "SUN",
    "val": 3
  },
  {
    "season": 1,
    "episode": 13,
    "from_char": "KATE",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 13,
    "from_char": "LOCKE",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 1,
    "episode": 13,
    "from_char": "MALCOLM",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 1,
    "episode": 13,
    "from_char": "MICHAEL",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 13,
    "from_char": "MICHAEL",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 13,
    "from_char": "NICOLE",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 1,
    "episode": 13,
    "from_char": "SAYID",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 1,
    "episode": 13,
    "from_char": "SUN",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 14,
    "from_char": "BOONE",
    "to_char": "LOCKE",
    "val": 4
  },
  {
    "season": 1,
    "episode": 14,
    "from_char": "BOONE",
    "to_char": "MICHAEL",
    "val": 3
  },
  {
    "season": 1,
    "episode": 14,
    "from_char": "BOONE",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 1,
    "episode": 14,
    "from_char": "BOONE",
    "to_char": "WALT",
    "val": 2
  },
  {
    "season": 1,
    "episode": 14,
    "from_char": "BRIAN",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 14,
    "from_char": "BRIAN",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 14,
    "from_char": "BRIAN",
    "to_char": "MICHAEL",
    "val": 2
  },
  {
    "season": 1,
    "episode": 14,
    "from_char": "BRIAN",
    "to_char": "SUSAN",
    "val": 2
  },
  {
    "season": 1,
    "episode": 14,
    "from_char": "BRIAN",
    "to_char": "WALT",
    "val": 2
  },
  {
    "season": 1,
    "episode": 14,
    "from_char": "CHARLIE",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 1,
    "episode": 14,
    "from_char": "CHARLIE",
    "to_char": "JACK",
    "val": 2
  },
  {
    "season": 1,
    "episode": 14,
    "from_char": "CHARLIE",
    "to_char": "KATE",
    "val": 3
  },
  {
    "season": 1,
    "episode": 14,
    "from_char": "CHARLIE",
    "to_char": "MICHAEL",
    "val": 2
  },
  {
    "season": 1,
    "episode": 14,
    "from_char": "CHARLIE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 1,
    "episode": 14,
    "from_char": "CHARLIE",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 1,
    "episode": 14,
    "from_char": "CHARLIE",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 14,
    "from_char": "HURLEY",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 1,
    "episode": 14,
    "from_char": "HURLEY",
    "to_char": "MICHAEL",
    "val": 2
  },
  {
    "season": 1,
    "episode": 14,
    "from_char": "JACK",
    "to_char": "MICHAEL",
    "val": 3
  },
  {
    "season": 1,
    "episode": 14,
    "from_char": "JACK",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 1,
    "episode": 14,
    "from_char": "JACK",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 1,
    "episode": 14,
    "from_char": "JACK",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 14,
    "from_char": "JACK",
    "to_char": "WALT",
    "val": 2
  },
  {
    "season": 1,
    "episode": 14,
    "from_char": "KATE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 1,
    "episode": 14,
    "from_char": "LOCKE",
    "to_char": "MICHAEL",
    "val": 7
  },
  {
    "season": 1,
    "episode": 14,
    "from_char": "LOCKE",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 1,
    "episode": 14,
    "from_char": "LOCKE",
    "to_char": "WALT",
    "val": 6
  },
  {
    "season": 1,
    "episode": 14,
    "from_char": "MAN",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 1,
    "episode": 14,
    "from_char": "MAN",
    "to_char": "SUSAN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 14,
    "from_char": "MICHAEL",
    "to_char": "NANNY",
    "val": 1
  },
  {
    "season": 1,
    "episode": 14,
    "from_char": "MICHAEL",
    "to_char": "NURSE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 14,
    "from_char": "MICHAEL",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 1,
    "episode": 14,
    "from_char": "MICHAEL",
    "to_char": "SHANNON",
    "val": 2
  },
  {
    "season": 1,
    "episode": 14,
    "from_char": "MICHAEL",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 14,
    "from_char": "MICHAEL",
    "to_char": "SUSAN",
    "val": 4
  },
  {
    "season": 1,
    "episode": 14,
    "from_char": "MICHAEL",
    "to_char": "WALT",
    "val": 11
  },
  {
    "season": 1,
    "episode": 14,
    "from_char": "NANNY",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 14,
    "from_char": "NURSE",
    "to_char": "SUSAN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 14,
    "from_char": "SAYID",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 1,
    "episode": 14,
    "from_char": "SAYID",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 14,
    "from_char": "SAYID",
    "to_char": "WALT",
    "val": 2
  },
  {
    "season": 1,
    "episode": 14,
    "from_char": "SHANNON",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 14,
    "from_char": "SHANNON",
    "to_char": "WALT",
    "val": 2
  },
  {
    "season": 1,
    "episode": 14,
    "from_char": "SUN",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 14,
    "from_char": "SUSAN",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 15,
    "from_char": "BOONE",
    "to_char": "CHARLIE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 15,
    "from_char": "BOONE",
    "to_char": "CLAIRE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 15,
    "from_char": "BOONE",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 1,
    "episode": 15,
    "from_char": "BOONE",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 1,
    "episode": 15,
    "from_char": "BOONE",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 15,
    "from_char": "BOONE",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 15,
    "from_char": "BOONE",
    "to_char": "LOCKE",
    "val": 3
  },
  {
    "season": 1,
    "episode": 15,
    "from_char": "BOONE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 1,
    "episode": 15,
    "from_char": "BOONE",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 1,
    "episode": 15,
    "from_char": "BOONE",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 15,
    "from_char": "CHARLIE",
    "to_char": "CLAIRE",
    "val": 6
  },
  {
    "season": 1,
    "episode": 15,
    "from_char": "CHARLIE",
    "to_char": "ETHAN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 15,
    "from_char": "CHARLIE",
    "to_char": "FRANK",
    "val": 1
  },
  {
    "season": 1,
    "episode": 15,
    "from_char": "CHARLIE",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 1,
    "episode": 15,
    "from_char": "CHARLIE",
    "to_char": "JACK",
    "val": 7
  },
  {
    "season": 1,
    "episode": 15,
    "from_char": "CHARLIE",
    "to_char": "JIN",
    "val": 2
  },
  {
    "season": 1,
    "episode": 15,
    "from_char": "CHARLIE",
    "to_char": "LOCKE",
    "val": 5
  },
  {
    "season": 1,
    "episode": 15,
    "from_char": "CHARLIE",
    "to_char": "LUCY",
    "val": 5
  },
  {
    "season": 1,
    "episode": 15,
    "from_char": "CHARLIE",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 1,
    "episode": 15,
    "from_char": "CHARLIE",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 1,
    "episode": 15,
    "from_char": "CHARLIE",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 1,
    "episode": 15,
    "from_char": "CHARLIE",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 15,
    "from_char": "CHARLIE",
    "to_char": "TOMMY",
    "val": 3
  },
  {
    "season": 1,
    "episode": 15,
    "from_char": "CHARLIE",
    "to_char": "VOICE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 15,
    "from_char": "CHARLIE",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 15,
    "from_char": "CLAIRE",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 1,
    "episode": 15,
    "from_char": "CLAIRE",
    "to_char": "JACK",
    "val": 3
  },
  {
    "season": 1,
    "episode": 15,
    "from_char": "CLAIRE",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 15,
    "from_char": "CLAIRE",
    "to_char": "LOCKE",
    "val": 3
  },
  {
    "season": 1,
    "episode": 15,
    "from_char": "CLAIRE",
    "to_char": "LUCY",
    "val": 1
  },
  {
    "season": 1,
    "episode": 15,
    "from_char": "CLAIRE",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 1,
    "episode": 15,
    "from_char": "CLAIRE",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 1,
    "episode": 15,
    "from_char": "CLAIRE",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 1,
    "episode": 15,
    "from_char": "CLAIRE",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 15,
    "from_char": "CLAIRE",
    "to_char": "VOICE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 15,
    "from_char": "CLAIRE",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 15,
    "from_char": "ETHAN",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 15,
    "from_char": "FRANK",
    "to_char": "LUCY",
    "val": 1
  },
  {
    "season": 1,
    "episode": 15,
    "from_char": "HURLEY",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 1,
    "episode": 15,
    "from_char": "HURLEY",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 15,
    "from_char": "HURLEY",
    "to_char": "LOCKE",
    "val": 2
  },
  {
    "season": 1,
    "episode": 15,
    "from_char": "HURLEY",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 1,
    "episode": 15,
    "from_char": "HURLEY",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 1,
    "episode": 15,
    "from_char": "HURLEY",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 1,
    "episode": 15,
    "from_char": "HURLEY",
    "to_char": "SEVERAL PEOPLE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 15,
    "from_char": "HURLEY",
    "to_char": "VOICE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 15,
    "from_char": "HURLEY",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 15,
    "from_char": "JACK",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 15,
    "from_char": "JACK",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 1,
    "episode": 15,
    "from_char": "JACK",
    "to_char": "LOCKE",
    "val": 8
  },
  {
    "season": 1,
    "episode": 15,
    "from_char": "JACK",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 1,
    "episode": 15,
    "from_char": "JACK",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 1,
    "episode": 15,
    "from_char": "JACK",
    "to_char": "SAYID",
    "val": 3
  },
  {
    "season": 1,
    "episode": 15,
    "from_char": "JACK",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 15,
    "from_char": "JACK",
    "to_char": "VOICE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 15,
    "from_char": "JACK",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 15,
    "from_char": "JIN",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 15,
    "from_char": "JIN",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 1,
    "episode": 15,
    "from_char": "KATE",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 15,
    "from_char": "KATE",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 1,
    "episode": 15,
    "from_char": "KATE",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 1,
    "episode": 15,
    "from_char": "LOCKE",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 1,
    "episode": 15,
    "from_char": "LOCKE",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 1,
    "episode": 15,
    "from_char": "LOCKE",
    "to_char": "SAYID",
    "val": 5
  },
  {
    "season": 1,
    "episode": 15,
    "from_char": "LOCKE",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 15,
    "from_char": "LOCKE",
    "to_char": "VOICE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 15,
    "from_char": "LOCKE",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 15,
    "from_char": "LUCY",
    "to_char": "TOMMY",
    "val": 1
  },
  {
    "season": 1,
    "episode": 15,
    "from_char": "MICHAEL",
    "to_char": "VOICE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 15,
    "from_char": "MICHAEL",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 15,
    "from_char": "SAWYER",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 1,
    "episode": 15,
    "from_char": "VOICE",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 16,
    "from_char": "BARTENDER",
    "to_char": "CHRISTIAN SHEPHARD",
    "val": 1
  },
  {
    "season": 1,
    "episode": 16,
    "from_char": "BARTENDER",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 1,
    "episode": 16,
    "from_char": "CHARLIE",
    "to_char": "CLAIRE",
    "val": 2
  },
  {
    "season": 1,
    "episode": 16,
    "from_char": "CHARLIE",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 1,
    "episode": 16,
    "from_char": "CHARLIE",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 1,
    "episode": 16,
    "from_char": "CHRISTIAN SHEPHARD",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 1,
    "episode": 16,
    "from_char": "DUCKETT",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 1,
    "episode": 16,
    "from_char": "HIBBS",
    "to_char": "MARY JO",
    "val": 1
  },
  {
    "season": 1,
    "episode": 16,
    "from_char": "HIBBS",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 1,
    "episode": 16,
    "from_char": "HURLEY",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 1,
    "episode": 16,
    "from_char": "JACK",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 16,
    "from_char": "JACK",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 1,
    "episode": 16,
    "from_char": "KATE",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 16,
    "from_char": "KATE",
    "to_char": "SAWYER",
    "val": 5
  },
  {
    "season": 1,
    "episode": 16,
    "from_char": "LAURENCE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 1,
    "episode": 16,
    "from_char": "LOCKE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 1,
    "episode": 16,
    "from_char": "MARY",
    "to_char": "SAWYER'S FATHER",
    "val": 1
  },
  {
    "season": 1,
    "episode": 16,
    "from_char": "MARY",
    "to_char": "YOUNG SAWYER",
    "val": 1
  },
  {
    "season": 1,
    "episode": 16,
    "from_char": "MARY JO",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 1,
    "episode": 16,
    "from_char": "SAWYER",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 1,
    "episode": 16,
    "from_char": "SAWYER'S FATHER",
    "to_char": "YOUNG SAWYER",
    "val": 1
  },
  {
    "season": 1,
    "episode": 17,
    "from_char": "BEST FRIEND",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 17,
    "from_char": "BEST FRIEND",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 17,
    "from_char": "BOONE",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 1,
    "episode": 17,
    "from_char": "CHARLIE",
    "to_char": "CLAIRE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 17,
    "from_char": "CHARLIE",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 1,
    "episode": 17,
    "from_char": "CHARLIE",
    "to_char": "JACK",
    "val": 3
  },
  {
    "season": 1,
    "episode": 17,
    "from_char": "CHARLIE",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 17,
    "from_char": "CHARLIE",
    "to_char": "KATE",
    "val": 3
  },
  {
    "season": 1,
    "episode": 17,
    "from_char": "CHARLIE",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 17,
    "from_char": "CHARLIE",
    "to_char": "MICHAEL",
    "val": 4
  },
  {
    "season": 1,
    "episode": 17,
    "from_char": "CHARLIE",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 1,
    "episode": 17,
    "from_char": "CHARLIE",
    "to_char": "SUN",
    "val": 4
  },
  {
    "season": 1,
    "episode": 17,
    "from_char": "CHARLIE",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 17,
    "from_char": "CLAIRE",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 1,
    "episode": 17,
    "from_char": "CLAIRE",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 17,
    "from_char": "CLAIRE",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 17,
    "from_char": "CLAIRE",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 1,
    "episode": 17,
    "from_char": "CLAIRE",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 17,
    "from_char": "FATHER",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 17,
    "from_char": "HAN",
    "to_char": "JIN",
    "val": 2
  },
  {
    "season": 1,
    "episode": 17,
    "from_char": "HAN",
    "to_char": "WHITE SUIT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 17,
    "from_char": "HURLEY",
    "to_char": "JACK",
    "val": 2
  },
  {
    "season": 1,
    "episode": 17,
    "from_char": "HURLEY",
    "to_char": "JIN",
    "val": 2
  },
  {
    "season": 1,
    "episode": 17,
    "from_char": "HURLEY",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 17,
    "from_char": "HURLEY",
    "to_char": "MICHAEL",
    "val": 2
  },
  {
    "season": 1,
    "episode": 17,
    "from_char": "HURLEY",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 1,
    "episode": 17,
    "from_char": "HURLEY",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 1,
    "episode": 17,
    "from_char": "HURLEY",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 1,
    "episode": 17,
    "from_char": "JACK",
    "to_char": "JIN",
    "val": 2
  },
  {
    "season": 1,
    "episode": 17,
    "from_char": "JACK",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 1,
    "episode": 17,
    "from_char": "JACK",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 17,
    "from_char": "JACK",
    "to_char": "MICHAEL",
    "val": 5
  },
  {
    "season": 1,
    "episode": 17,
    "from_char": "JACK",
    "to_char": "SAWYER",
    "val": 4
  },
  {
    "season": 1,
    "episode": 17,
    "from_char": "JACK",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 1,
    "episode": 17,
    "from_char": "JACK",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 1,
    "episode": 17,
    "from_char": "JACK",
    "to_char": "SUN",
    "val": 4
  },
  {
    "season": 1,
    "episode": 17,
    "from_char": "JACK",
    "to_char": "WALT",
    "val": 2
  },
  {
    "season": 1,
    "episode": 17,
    "from_char": "JIN",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 17,
    "from_char": "JIN",
    "to_char": "MICHAEL",
    "val": 2
  },
  {
    "season": 1,
    "episode": 17,
    "from_char": "JIN",
    "to_char": "MR. PAIK",
    "val": 2
  },
  {
    "season": 1,
    "episode": 17,
    "from_char": "JIN",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 1,
    "episode": 17,
    "from_char": "JIN",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 1,
    "episode": 17,
    "from_char": "JIN",
    "to_char": "SUN",
    "val": 7
  },
  {
    "season": 1,
    "episode": 17,
    "from_char": "JIN",
    "to_char": "WHITE SUIT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 17,
    "from_char": "KATE",
    "to_char": "MICHAEL",
    "val": 3
  },
  {
    "season": 1,
    "episode": 17,
    "from_char": "KATE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 1,
    "episode": 17,
    "from_char": "KATE",
    "to_char": "SUN",
    "val": 3
  },
  {
    "season": 1,
    "episode": 17,
    "from_char": "KATE",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 17,
    "from_char": "LOCKE",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 1,
    "episode": 17,
    "from_char": "LOCKE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 1,
    "episode": 17,
    "from_char": "LOCKE",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 1,
    "episode": 17,
    "from_char": "LOCKE",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 17,
    "from_char": "LOCKE",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 17,
    "from_char": "MICHAEL",
    "to_char": "SAWYER",
    "val": 4
  },
  {
    "season": 1,
    "episode": 17,
    "from_char": "MICHAEL",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 1,
    "episode": 17,
    "from_char": "MICHAEL",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 1,
    "episode": 17,
    "from_char": "MICHAEL",
    "to_char": "SUN",
    "val": 6
  },
  {
    "season": 1,
    "episode": 17,
    "from_char": "MICHAEL",
    "to_char": "WALT",
    "val": 3
  },
  {
    "season": 1,
    "episode": 17,
    "from_char": "SAWYER",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 1,
    "episode": 17,
    "from_char": "SAWYER",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 1,
    "episode": 17,
    "from_char": "SAWYER",
    "to_char": "SUN",
    "val": 3
  },
  {
    "season": 1,
    "episode": 17,
    "from_char": "SAWYER",
    "to_char": "WALT",
    "val": 2
  },
  {
    "season": 1,
    "episode": 17,
    "from_char": "SAYID",
    "to_char": "SHANNON",
    "val": 3
  },
  {
    "season": 1,
    "episode": 17,
    "from_char": "SAYID",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 17,
    "from_char": "SAYID",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 17,
    "from_char": "SHANNON",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 17,
    "from_char": "SUN",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 18,
    "from_char": "CARMEN",
    "to_char": "COP",
    "val": 1
  },
  {
    "season": 1,
    "episode": 18,
    "from_char": "CARMEN",
    "to_char": "HURLEY",
    "val": 2
  },
  {
    "season": 1,
    "episode": 18,
    "from_char": "CARMEN",
    "to_char": "LOTTO OFFICIAL",
    "val": 1
  },
  {
    "season": 1,
    "episode": 18,
    "from_char": "CARMEN",
    "to_char": "MARY JO",
    "val": 1
  },
  {
    "season": 1,
    "episode": 18,
    "from_char": "CHARLIE",
    "to_char": "DANIELLE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 18,
    "from_char": "CHARLIE",
    "to_char": "HURLEY",
    "val": 6
  },
  {
    "season": 1,
    "episode": 18,
    "from_char": "CHARLIE",
    "to_char": "JACK",
    "val": 5
  },
  {
    "season": 1,
    "episode": 18,
    "from_char": "CHARLIE",
    "to_char": "SAYID",
    "val": 5
  },
  {
    "season": 1,
    "episode": 18,
    "from_char": "CLAIRE",
    "to_char": "LOCKE",
    "val": 3
  },
  {
    "season": 1,
    "episode": 18,
    "from_char": "COP",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 1,
    "episode": 18,
    "from_char": "DANIELLE",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 1,
    "episode": 18,
    "from_char": "DIEGO",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 1,
    "episode": 18,
    "from_char": "DIEGO",
    "to_char": "REPORTER #1",
    "val": 1
  },
  {
    "season": 1,
    "episode": 18,
    "from_char": "DIEGO",
    "to_char": "REPORTER #2",
    "val": 1
  },
  {
    "season": 1,
    "episode": 18,
    "from_char": "DIEGO",
    "to_char": "TITO",
    "val": 1
  },
  {
    "season": 1,
    "episode": 18,
    "from_char": "DR. CURTIS",
    "to_char": "HUGO",
    "val": 1
  },
  {
    "season": 1,
    "episode": 18,
    "from_char": "DR. CURTIS",
    "to_char": "HURLEY",
    "val": 2
  },
  {
    "season": 1,
    "episode": 18,
    "from_char": "DR. CURTIS",
    "to_char": "LENNY",
    "val": 1
  },
  {
    "season": 1,
    "episode": 18,
    "from_char": "DR. CURTIS",
    "to_char": "NURSE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 18,
    "from_char": "HUGO",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 1,
    "episode": 18,
    "from_char": "HUGO",
    "to_char": "LENNY",
    "val": 1
  },
  {
    "season": 1,
    "episode": 18,
    "from_char": "HURLEY",
    "to_char": "JACK",
    "val": 5
  },
  {
    "season": 1,
    "episode": 18,
    "from_char": "HURLEY",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 18,
    "from_char": "HURLEY",
    "to_char": "KEN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 18,
    "from_char": "HURLEY",
    "to_char": "KEN HALPERIN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 18,
    "from_char": "HURLEY",
    "to_char": "LENNY",
    "val": 2
  },
  {
    "season": 1,
    "episode": 18,
    "from_char": "HURLEY",
    "to_char": "LOTTO OFFICIAL",
    "val": 1
  },
  {
    "season": 1,
    "episode": 18,
    "from_char": "HURLEY",
    "to_char": "MARTHA",
    "val": 2
  },
  {
    "season": 1,
    "episode": 18,
    "from_char": "HURLEY",
    "to_char": "MARY JO",
    "val": 1
  },
  {
    "season": 1,
    "episode": 18,
    "from_char": "HURLEY",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 1,
    "episode": 18,
    "from_char": "HURLEY",
    "to_char": "NURSE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 18,
    "from_char": "HURLEY",
    "to_char": "ORDERLY",
    "val": 1
  },
  {
    "season": 1,
    "episode": 18,
    "from_char": "HURLEY",
    "to_char": "REPORTER #1",
    "val": 1
  },
  {
    "season": 1,
    "episode": 18,
    "from_char": "HURLEY",
    "to_char": "REPORTER #2",
    "val": 1
  },
  {
    "season": 1,
    "episode": 18,
    "from_char": "HURLEY",
    "to_char": "SAYID",
    "val": 5
  },
  {
    "season": 1,
    "episode": 18,
    "from_char": "HURLEY",
    "to_char": "TITO",
    "val": 1
  },
  {
    "season": 1,
    "episode": 18,
    "from_char": "JACK",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 18,
    "from_char": "JACK",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 1,
    "episode": 18,
    "from_char": "JACK",
    "to_char": "SAYID",
    "val": 8
  },
  {
    "season": 1,
    "episode": 18,
    "from_char": "JACK",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 1,
    "episode": 18,
    "from_char": "JIN",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 18,
    "from_char": "JIN",
    "to_char": "MICHAEL",
    "val": 2
  },
  {
    "season": 1,
    "episode": 18,
    "from_char": "JIN",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 1,
    "episode": 18,
    "from_char": "JIN",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 18,
    "from_char": "JIN",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 18,
    "from_char": "KATE",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 1,
    "episode": 18,
    "from_char": "KATE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 1,
    "episode": 18,
    "from_char": "KATE",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 18,
    "from_char": "KATE",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 18,
    "from_char": "KEN",
    "to_char": "KEN HALPERIN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 18,
    "from_char": "LENNY",
    "to_char": "ORDERLY",
    "val": 1
  },
  {
    "season": 1,
    "episode": 18,
    "from_char": "LOTTO OFFICIAL",
    "to_char": "MARY JO",
    "val": 1
  },
  {
    "season": 1,
    "episode": 18,
    "from_char": "MICHAEL",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 1,
    "episode": 18,
    "from_char": "MICHAEL",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 18,
    "from_char": "MICHAEL",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 18,
    "from_char": "REPORTER #1",
    "to_char": "REPORTER #2",
    "val": 1
  },
  {
    "season": 1,
    "episode": 18,
    "from_char": "REPORTER #1",
    "to_char": "TITO",
    "val": 1
  },
  {
    "season": 1,
    "episode": 18,
    "from_char": "REPORTER #2",
    "to_char": "TITO",
    "val": 1
  },
  {
    "season": 1,
    "episode": 18,
    "from_char": "SAWYER",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 18,
    "from_char": "SAWYER",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 18,
    "from_char": "SAYID",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 1,
    "episode": 18,
    "from_char": "SUN",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 19,
    "from_char": "BOONE",
    "to_char": "LOCKE",
    "val": 11
  },
  {
    "season": 1,
    "episode": 19,
    "from_char": "BOONE",
    "to_char": "RADIO VOICE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 19,
    "from_char": "COOPER",
    "to_char": "LOCKE",
    "val": 4
  },
  {
    "season": 1,
    "episode": 19,
    "from_char": "EDDIE",
    "to_char": "LOCKE",
    "val": 3
  },
  {
    "season": 1,
    "episode": 19,
    "from_char": "EMILY",
    "to_char": "KID",
    "val": 1
  },
  {
    "season": 1,
    "episode": 19,
    "from_char": "EMILY",
    "to_char": "LOCKE",
    "val": 4
  },
  {
    "season": 1,
    "episode": 19,
    "from_char": "EMILY",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 19,
    "from_char": "EMILY",
    "to_char": "NURSE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 19,
    "from_char": "FRAINEY",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 19,
    "from_char": "HURLEY",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 1,
    "episode": 19,
    "from_char": "HURLEY",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 1,
    "episode": 19,
    "from_char": "JACK",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 19,
    "from_char": "JACK",
    "to_char": "KATE",
    "val": 3
  },
  {
    "season": 1,
    "episode": 19,
    "from_char": "JACK",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 19,
    "from_char": "JACK",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 1,
    "episode": 19,
    "from_char": "JACK",
    "to_char": "SAWYER",
    "val": 3
  },
  {
    "season": 1,
    "episode": 19,
    "from_char": "JIN",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 1,
    "episode": 19,
    "from_char": "JIN",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 1,
    "episode": 19,
    "from_char": "KATE",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 19,
    "from_char": "KATE",
    "to_char": "SAWYER",
    "val": 3
  },
  {
    "season": 1,
    "episode": 19,
    "from_char": "KATE",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 19,
    "from_char": "KID",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 19,
    "from_char": "LOCKE",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 19,
    "from_char": "LOCKE",
    "to_char": "NURSE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 19,
    "from_char": "LOCKE",
    "to_char": "RADIO VOICE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 19,
    "from_char": "MICHAEL",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 1,
    "episode": 19,
    "from_char": "SAWYER",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 20,
    "from_char": "BOONE",
    "to_char": "CHARLIE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 20,
    "from_char": "BOONE",
    "to_char": "JACK",
    "val": 5
  },
  {
    "season": 1,
    "episode": 20,
    "from_char": "BOONE",
    "to_char": "SUN",
    "val": 3
  },
  {
    "season": 1,
    "episode": 20,
    "from_char": "CHARLIE",
    "to_char": "CLAIRE",
    "val": 2
  },
  {
    "season": 1,
    "episode": 20,
    "from_char": "CHARLIE",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 1,
    "episode": 20,
    "from_char": "CHARLIE",
    "to_char": "JACK",
    "val": 3
  },
  {
    "season": 1,
    "episode": 20,
    "from_char": "CHARLIE",
    "to_char": "JIN",
    "val": 2
  },
  {
    "season": 1,
    "episode": 20,
    "from_char": "CHARLIE",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 1,
    "episode": 20,
    "from_char": "CHARLIE",
    "to_char": "SUN",
    "val": 3
  },
  {
    "season": 1,
    "episode": 20,
    "from_char": "CHRISTIAN SHEPHARD",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 1,
    "episode": 20,
    "from_char": "CLAIRE",
    "to_char": "JIN",
    "val": 2
  },
  {
    "season": 1,
    "episode": 20,
    "from_char": "CLAIRE",
    "to_char": "KATE",
    "val": 7
  },
  {
    "season": 1,
    "episode": 20,
    "from_char": "CLAIRE",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 1,
    "episode": 20,
    "from_char": "CLAIRE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 1,
    "episode": 20,
    "from_char": "HURLEY",
    "to_char": "JACK",
    "val": 3
  },
  {
    "season": 1,
    "episode": 20,
    "from_char": "HURLEY",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 20,
    "from_char": "HURLEY",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 20,
    "from_char": "HURLEY",
    "to_char": "SUN",
    "val": 3
  },
  {
    "season": 1,
    "episode": 20,
    "from_char": "JACK",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 20,
    "from_char": "JACK",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 1,
    "episode": 20,
    "from_char": "JACK",
    "to_char": "MARC",
    "val": 1
  },
  {
    "season": 1,
    "episode": 20,
    "from_char": "JACK",
    "to_char": "MICHAEL",
    "val": 2
  },
  {
    "season": 1,
    "episode": 20,
    "from_char": "JACK",
    "to_char": "MINISTER",
    "val": 1
  },
  {
    "season": 1,
    "episode": 20,
    "from_char": "JACK",
    "to_char": "SARAH",
    "val": 2
  },
  {
    "season": 1,
    "episode": 20,
    "from_char": "JACK",
    "to_char": "SUN",
    "val": 10
  },
  {
    "season": 1,
    "episode": 20,
    "from_char": "JACK",
    "to_char": "TUX SHOP OWNER",
    "val": 1
  },
  {
    "season": 1,
    "episode": 20,
    "from_char": "JIN",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 1,
    "episode": 20,
    "from_char": "JIN",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 20,
    "from_char": "KATE",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 1,
    "episode": 20,
    "from_char": "KATE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 1,
    "episode": 20,
    "from_char": "KATE",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 20,
    "from_char": "MARC",
    "to_char": "SARAH",
    "val": 1
  },
  {
    "season": 1,
    "episode": 20,
    "from_char": "MARC",
    "to_char": "TUX SHOP OWNER",
    "val": 1
  },
  {
    "season": 1,
    "episode": 20,
    "from_char": "MICHAEL",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 1,
    "episode": 20,
    "from_char": "MICHAEL",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 1,
    "episode": 20,
    "from_char": "MINISTER",
    "to_char": "SARAH",
    "val": 1
  },
  {
    "season": 1,
    "episode": 20,
    "from_char": "SAYID",
    "to_char": "SHANNON",
    "val": 2
  },
  {
    "season": 1,
    "episode": 21,
    "from_char": "AGENT COLE",
    "to_char": "AGENT HEWITT",
    "val": 3
  },
  {
    "season": 1,
    "episode": 21,
    "from_char": "AGENT COLE",
    "to_char": "AIRPORT ANNOUNCEMENT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 21,
    "from_char": "AGENT COLE",
    "to_char": "SAYID",
    "val": 3
  },
  {
    "season": 1,
    "episode": 21,
    "from_char": "AGENT HEWITT",
    "to_char": "AIRPORT ANNOUNCEMENT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 21,
    "from_char": "AGENT HEWITT",
    "to_char": "SAYID",
    "val": 3
  },
  {
    "season": 1,
    "episode": 21,
    "from_char": "AIRPORT ANNOUNCEMENT",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 1,
    "episode": 21,
    "from_char": "CHARLIE",
    "to_char": "CLAIRE",
    "val": 2
  },
  {
    "season": 1,
    "episode": 21,
    "from_char": "CHARLIE",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 1,
    "episode": 21,
    "from_char": "CHARLIE",
    "to_char": "JACK",
    "val": 2
  },
  {
    "season": 1,
    "episode": 21,
    "from_char": "CHARLIE",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 21,
    "from_char": "CHARLIE",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 21,
    "from_char": "CHARLIE",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 21,
    "from_char": "CHARLIE",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 1,
    "episode": 21,
    "from_char": "CHARLIE",
    "to_char": "SAWYER",
    "val": 3
  },
  {
    "season": 1,
    "episode": 21,
    "from_char": "CHARLIE",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 1,
    "episode": 21,
    "from_char": "CHARLIE",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 1,
    "episode": 21,
    "from_char": "CHARLIE",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 21,
    "from_char": "CHARLIE",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 21,
    "from_char": "CLAIRE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 1,
    "episode": 21,
    "from_char": "CLAIRE",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 21,
    "from_char": "ESSAM",
    "to_char": "HADDAD",
    "val": 2
  },
  {
    "season": 1,
    "episode": 21,
    "from_char": "ESSAM",
    "to_char": "SAYID",
    "val": 5
  },
  {
    "season": 1,
    "episode": 21,
    "from_char": "ESSAM",
    "to_char": "YUSEF",
    "val": 1
  },
  {
    "season": 1,
    "episode": 21,
    "from_char": "HADDAD",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 1,
    "episode": 21,
    "from_char": "HADDAD",
    "to_char": "YUSEF",
    "val": 1
  },
  {
    "season": 1,
    "episode": 21,
    "from_char": "JACK",
    "to_char": "KATE",
    "val": 5
  },
  {
    "season": 1,
    "episode": 21,
    "from_char": "JACK",
    "to_char": "LOCKE",
    "val": 2
  },
  {
    "season": 1,
    "episode": 21,
    "from_char": "JACK",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 1,
    "episode": 21,
    "from_char": "JACK",
    "to_char": "SAYID",
    "val": 4
  },
  {
    "season": 1,
    "episode": 21,
    "from_char": "JACK",
    "to_char": "SHANNON",
    "val": 2
  },
  {
    "season": 1,
    "episode": 21,
    "from_char": "JACK",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 21,
    "from_char": "JIN",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 1,
    "episode": 21,
    "from_char": "JIN",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 1,
    "episode": 21,
    "from_char": "JIN",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 21,
    "from_char": "KATE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 1,
    "episode": 21,
    "from_char": "KATE",
    "to_char": "SAYID",
    "val": 3
  },
  {
    "season": 1,
    "episode": 21,
    "from_char": "KATE",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 21,
    "from_char": "LOCKE",
    "to_char": "SAYID",
    "val": 7
  },
  {
    "season": 1,
    "episode": 21,
    "from_char": "LOCKE",
    "to_char": "SHANNON",
    "val": 3
  },
  {
    "season": 1,
    "episode": 21,
    "from_char": "MICHAEL",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 1,
    "episode": 21,
    "from_char": "MICHAEL",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 21,
    "from_char": "SAWYER",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 21,
    "from_char": "SAYID",
    "to_char": "SHANNON",
    "val": 4
  },
  {
    "season": 1,
    "episode": 21,
    "from_char": "SAYID",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 21,
    "from_char": "SAYID",
    "to_char": "YUSEF",
    "val": 1
  },
  {
    "season": 1,
    "episode": 22,
    "from_char": "ARZT",
    "to_char": "CHARLIE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 22,
    "from_char": "ARZT",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 1,
    "episode": 22,
    "from_char": "ARZT",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 22,
    "from_char": "ARZT",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 1,
    "episode": 22,
    "from_char": "ARZT",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 1,
    "episode": 22,
    "from_char": "CHARLIE",
    "to_char": "CLAIRE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 22,
    "from_char": "CHARLIE",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 1,
    "episode": 22,
    "from_char": "CHARLIE",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 1,
    "episode": 22,
    "from_char": "CHARLIE",
    "to_char": "MICHAEL",
    "val": 2
  },
  {
    "season": 1,
    "episode": 22,
    "from_char": "CHARLIE",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 1,
    "episode": 22,
    "from_char": "DIANE",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 22,
    "from_char": "DIANE",
    "to_char": "SECURITY GUARD",
    "val": 1
  },
  {
    "season": 1,
    "episode": 22,
    "from_char": "DIANE",
    "to_char": "TOM",
    "val": 1
  },
  {
    "season": 1,
    "episode": 22,
    "from_char": "HOSPITAL ANNOUNCEMENT",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 22,
    "from_char": "HOSPITAL ANNOUNCEMENT",
    "to_char": "NURSE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 22,
    "from_char": "HURLEY",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 1,
    "episode": 22,
    "from_char": "HURLEY",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 22,
    "from_char": "HURLEY",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 1,
    "episode": 22,
    "from_char": "JACK",
    "to_char": "KATE",
    "val": 4
  },
  {
    "season": 1,
    "episode": 22,
    "from_char": "JACK",
    "to_char": "LOCKE",
    "val": 4
  },
  {
    "season": 1,
    "episode": 22,
    "from_char": "JACK",
    "to_char": "MICHAEL",
    "val": 3
  },
  {
    "season": 1,
    "episode": 22,
    "from_char": "JACK",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 1,
    "episode": 22,
    "from_char": "JACK",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 1,
    "episode": 22,
    "from_char": "JACK",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 22,
    "from_char": "JIN",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 22,
    "from_char": "KATE",
    "to_char": "MICHAEL",
    "val": 5
  },
  {
    "season": 1,
    "episode": 22,
    "from_char": "KATE",
    "to_char": "NURSE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 22,
    "from_char": "KATE",
    "to_char": "SANJAY",
    "val": 1
  },
  {
    "season": 1,
    "episode": 22,
    "from_char": "KATE",
    "to_char": "SAWYER",
    "val": 5
  },
  {
    "season": 1,
    "episode": 22,
    "from_char": "KATE",
    "to_char": "SECURITY GUARD",
    "val": 1
  },
  {
    "season": 1,
    "episode": 22,
    "from_char": "KATE",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 1,
    "episode": 22,
    "from_char": "KATE",
    "to_char": "TOM",
    "val": 5
  },
  {
    "season": 1,
    "episode": 22,
    "from_char": "KATE",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 22,
    "from_char": "KATE",
    "to_char": "YOUNG KATE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 22,
    "from_char": "KATE",
    "to_char": "YOUNG TOM",
    "val": 1
  },
  {
    "season": 1,
    "episode": 22,
    "from_char": "LOCKE",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 1,
    "episode": 22,
    "from_char": "LOCKE",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 1,
    "episode": 22,
    "from_char": "LOCKE",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 22,
    "from_char": "MICHAEL",
    "to_char": "SAWYER",
    "val": 4
  },
  {
    "season": 1,
    "episode": 22,
    "from_char": "MICHAEL",
    "to_char": "WALT",
    "val": 2
  },
  {
    "season": 1,
    "episode": 22,
    "from_char": "SECURITY GUARD",
    "to_char": "TOM",
    "val": 1
  },
  {
    "season": 1,
    "episode": 22,
    "from_char": "SUN",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 22,
    "from_char": "TOM",
    "to_char": "YOUNG KATE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 22,
    "from_char": "TOM",
    "to_char": "YOUNG TOM",
    "val": 1
  },
  {
    "season": 1,
    "episode": 22,
    "from_char": "YOUNG KATE",
    "to_char": "YOUNG TOM",
    "val": 1
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "AIRPORT ANNOUNCEMENT",
    "to_char": "BOONE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "AIRPORT ANNOUNCEMENT",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "AIRPORT ANNOUNCEMENT",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "AIRPORT COP",
    "to_char": "BOONE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "AIRPORT COP",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "ANA LUCIA",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "ARZT",
    "to_char": "CHARLIE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "ARZT",
    "to_char": "DANIELLE",
    "val": 3
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "ARZT",
    "to_char": "HURLEY",
    "val": 3
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "ARZT",
    "to_char": "JACK",
    "val": 4
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "ARZT",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "ARZT",
    "to_char": "KATE",
    "val": 3
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "ARZT",
    "to_char": "LOCKE",
    "val": 3
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "ARZT",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "ARZT",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "AUSTRALIAN OFFICIAL",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "AUSTRALIAN OFFICIAL",
    "to_char": "MARSHAL",
    "val": 1
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "BOONE",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "BOONE",
    "to_char": "SHANNON",
    "val": 2
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "CALDERWOOD",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "CHARLIE",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "CHARLIE",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "CHARLIE",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "CHARLIE",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "CHARLIE",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "CHARLIE",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "CHARLIE",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "DANIELLE",
    "to_char": "HURLEY",
    "val": 3
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "DANIELLE",
    "to_char": "JACK",
    "val": 5
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "DANIELLE",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "DANIELLE",
    "to_char": "LOCKE",
    "val": 4
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "DANIELLE",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "DANIELLE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "DANIELLE",
    "to_char": "SAYID",
    "val": 3
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "DANIELLE",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "GINA",
    "to_char": "JEFF",
    "val": 1
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "GINA",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "GINA",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "HURLEY",
    "to_char": "JACK",
    "val": 3
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "HURLEY",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "HURLEY",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "HURLEY",
    "to_char": "LOCKE",
    "val": 4
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "HURLEY",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "HURLEY",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "HURLEY",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "JACK",
    "to_char": "JIN",
    "val": 2
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "JACK",
    "to_char": "KATE",
    "val": 3
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "JACK",
    "to_char": "LOCKE",
    "val": 4
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "JACK",
    "to_char": "MICHAEL",
    "val": 2
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "JACK",
    "to_char": "REDSHIRT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "JACK",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "JACK",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "JACK",
    "to_char": "WALT",
    "val": 2
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "JEFF",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "JEFF",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "JIN",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "JIN",
    "to_char": "LOCKE",
    "val": 2
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "JIN",
    "to_char": "MICHAEL",
    "val": 5
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "JIN",
    "to_char": "REDSHIRT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "JIN",
    "to_char": "SAWYER",
    "val": 3
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "JIN",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "JIN",
    "to_char": "WALT",
    "val": 3
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "KATE",
    "to_char": "LOCKE",
    "val": 2
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "KATE",
    "to_char": "MARSHAL",
    "val": 1
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "KATE",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "KATE",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "LOCKE",
    "to_char": "MICHAEL",
    "val": 2
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "LOCKE",
    "to_char": "REDSHIRT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "LOCKE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "LOCKE",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "LOCKE",
    "to_char": "WALT",
    "val": 2
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "MICHAEL",
    "to_char": "REDSHIRT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "MICHAEL",
    "to_char": "SAWYER",
    "val": 4
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "MICHAEL",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "MICHAEL",
    "to_char": "STEVE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "MICHAEL",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "MICHAEL",
    "to_char": "WALT",
    "val": 5
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "REDSHIRT",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "REDSHIRT",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "SAWYER",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "SAWYER",
    "to_char": "WALT",
    "val": 2
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "SAYID",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "SAYID",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "SHANNON",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "STEVE",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 23,
    "from_char": "SUN",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "AIRPORT COP",
    "to_char": "ARZT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "AIRPORT COP",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "AIRPORT COP",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "AIRPORT COP",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "AIRPORT COP",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "AIRPORT COP",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "ARZT",
    "to_char": "CHARLIE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "ARZT",
    "to_char": "DANIELLE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "ARZT",
    "to_char": "GATE AGENT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "ARZT",
    "to_char": "HURLEY",
    "val": 4
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "ARZT",
    "to_char": "JACK",
    "val": 2
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "ARZT",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "ARZT",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "ARZT",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "ARZT",
    "to_char": "OLD SCOOTER MAN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "ARZT",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "ARZT",
    "to_char": "SECURITY AGENT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "ARZT",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "ARZT",
    "to_char": "TICKET AGENT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "BEARDED MAN",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "BEARDED MAN",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "BEARDED MAN",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "BEARDED MAN",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "CHARLIE",
    "to_char": "CLAIRE",
    "val": 4
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "CHARLIE",
    "to_char": "DANIELLE",
    "val": 2
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "CHARLIE",
    "to_char": "GATE AGENT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "CHARLIE",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "CHARLIE",
    "to_char": "LILY",
    "val": 1
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "CHARLIE",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "CHARLIE",
    "to_char": "OLD SCOOTER MAN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "CHARLIE",
    "to_char": "SAYID",
    "val": 6
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "CHARLIE",
    "to_char": "SECURITY AGENT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "CHARLIE",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "CHARLIE",
    "to_char": "TICKET AGENT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "CHARLIE",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "CLAIRE",
    "to_char": "DANIELLE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "CLAIRE",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "CLAIRE",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "CLAIRE",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "CLAIRE",
    "to_char": "LILY",
    "val": 1
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "CLAIRE",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "CLAIRE",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "CLAIRE",
    "to_char": "SAYID",
    "val": 3
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "CLAIRE",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "CLAIRE",
    "to_char": "SUN",
    "val": 3
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "CLAIRE",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "DANIELLE",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "DANIELLE",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "DANIELLE",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "DANIELLE",
    "to_char": "LILY",
    "val": 1
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "DANIELLE",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "DANIELLE",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "GATE AGENT",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "GATE AGENT",
    "to_char": "JD",
    "val": 1
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "GATE AGENT",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "GATE AGENT",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "GATE AGENT",
    "to_char": "OLD SCOOTER MAN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "GATE AGENT",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "GATE AGENT",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "GATE AGENT",
    "to_char": "SECURITY AGENT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "GATE AGENT",
    "to_char": "TICKET AGENT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "HAWAIIAN SHIRT",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "HURLEY",
    "to_char": "JACK",
    "val": 7
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "HURLEY",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "HURLEY",
    "to_char": "KATE",
    "val": 7
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "HURLEY",
    "to_char": "LOCKE",
    "val": 7
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "HURLEY",
    "to_char": "OLD SCOOTER MAN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "HURLEY",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "HURLEY",
    "to_char": "SECURITY AGENT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "HURLEY",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "HURLEY",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "HURLEY",
    "to_char": "TICKET AGENT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "JACK",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "JACK",
    "to_char": "KATE",
    "val": 8
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "JACK",
    "to_char": "LOCKE",
    "val": 9
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "JACK",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "JACK",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "JACK",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "JD",
    "to_char": "LOCKE",
    "val": 2
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "JD",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "JD",
    "to_char": "MICHELLE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "JD",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "JIN",
    "to_char": "MICHAEL",
    "val": 3
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "JIN",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "JIN",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "JIN",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "JIN",
    "to_char": "WALT",
    "val": 2
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "KATE",
    "to_char": "LOCKE",
    "val": 8
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "KATE",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "KATE",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "LOCKE",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "LOCKE",
    "to_char": "MICHELLE",
    "val": 1
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "LOCKE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "LOCKE",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "LOCKE",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "MICHAEL",
    "to_char": "SAWYER",
    "val": 5
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "MICHAEL",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "MICHAEL",
    "to_char": "WALT",
    "val": 5
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "OLD SCOOTER MAN",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "OLD SCOOTER MAN",
    "to_char": "SECURITY AGENT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "OLD SCOOTER MAN",
    "to_char": "TICKET AGENT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "SAWYER",
    "to_char": "WALT",
    "val": 4
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "SAYID",
    "to_char": "SECURITY AGENT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "SAYID",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "SAYID",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "SAYID",
    "to_char": "TICKET AGENT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "SAYID",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "SECURITY AGENT",
    "to_char": "TICKET AGENT",
    "val": 1
  },
  {
    "season": 1,
    "episode": 24,
    "from_char": "SHANNON",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 1,
    "from_char": "CHARLIE",
    "to_char": "CLAIRE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 1,
    "from_char": "CHARLIE",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 2,
    "episode": 1,
    "from_char": "CHARLIE",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 1,
    "from_char": "CHARLIE",
    "to_char": "N.D. SURVIVOR",
    "val": 1
  },
  {
    "season": 2,
    "episode": 1,
    "from_char": "CHARLIE",
    "to_char": "REDSHIRT",
    "val": 1
  },
  {
    "season": 2,
    "episode": 1,
    "from_char": "CHARLIE",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 2,
    "episode": 1,
    "from_char": "CHARLIE",
    "to_char": "SHANNON",
    "val": 3
  },
  {
    "season": 2,
    "episode": 1,
    "from_char": "CHARLIE",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 1,
    "from_char": "CHRISTIAN SHEPHARD",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 2,
    "episode": 1,
    "from_char": "CHRISTIAN SHEPHARD",
    "to_char": "SARAH",
    "val": 1
  },
  {
    "season": 2,
    "episode": 1,
    "from_char": "CLAIRE",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 2,
    "episode": 1,
    "from_char": "CLAIRE",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 2,
    "episode": 1,
    "from_char": "CLAIRE",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 1,
    "from_char": "DESMOND",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 2,
    "episode": 1,
    "from_char": "EMT",
    "to_char": "EMT #2",
    "val": 1
  },
  {
    "season": 2,
    "episode": 1,
    "from_char": "EMT",
    "to_char": "INTERN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 1,
    "from_char": "EMT",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 2,
    "episode": 1,
    "from_char": "EMT",
    "to_char": "NURSE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 1,
    "from_char": "EMT",
    "to_char": "NURSE #2",
    "val": 1
  },
  {
    "season": 2,
    "episode": 1,
    "from_char": "EMT",
    "to_char": "SARAH",
    "val": 1
  },
  {
    "season": 2,
    "episode": 1,
    "from_char": "EMT #2",
    "to_char": "INTERN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 1,
    "from_char": "EMT #2",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 2,
    "episode": 1,
    "from_char": "EMT #2",
    "to_char": "NURSE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 1,
    "from_char": "EMT #2",
    "to_char": "NURSE #2",
    "val": 1
  },
  {
    "season": 2,
    "episode": 1,
    "from_char": "EMT #2",
    "to_char": "SARAH",
    "val": 1
  },
  {
    "season": 2,
    "episode": 1,
    "from_char": "GUNMAN'S VOICE",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 2,
    "episode": 1,
    "from_char": "GUNMAN'S VOICE",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 1,
    "from_char": "HURLEY",
    "to_char": "JACK",
    "val": 4
  },
  {
    "season": 2,
    "episode": 1,
    "from_char": "HURLEY",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 2,
    "episode": 1,
    "from_char": "HURLEY",
    "to_char": "LOCKE",
    "val": 2
  },
  {
    "season": 2,
    "episode": 1,
    "from_char": "INTERN",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 2,
    "episode": 1,
    "from_char": "INTERN",
    "to_char": "NURSE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 1,
    "from_char": "INTERN",
    "to_char": "NURSE #2",
    "val": 1
  },
  {
    "season": 2,
    "episode": 1,
    "from_char": "INTERN",
    "to_char": "SARAH",
    "val": 1
  },
  {
    "season": 2,
    "episode": 1,
    "from_char": "JACK",
    "to_char": "KATE",
    "val": 3
  },
  {
    "season": 2,
    "episode": 1,
    "from_char": "JACK",
    "to_char": "KEVIN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 1,
    "from_char": "JACK",
    "to_char": "LOCKE",
    "val": 5
  },
  {
    "season": 2,
    "episode": 1,
    "from_char": "JACK",
    "to_char": "NURSE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 1,
    "from_char": "JACK",
    "to_char": "NURSE #2",
    "val": 1
  },
  {
    "season": 2,
    "episode": 1,
    "from_char": "JACK",
    "to_char": "SARAH",
    "val": 4
  },
  {
    "season": 2,
    "episode": 1,
    "from_char": "JACK",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 2,
    "episode": 1,
    "from_char": "KATE",
    "to_char": "LOCKE",
    "val": 4
  },
  {
    "season": 2,
    "episode": 1,
    "from_char": "LOCKE",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 2,
    "episode": 1,
    "from_char": "N.D. SURVIVOR",
    "to_char": "REDSHIRT",
    "val": 1
  },
  {
    "season": 2,
    "episode": 1,
    "from_char": "N.D. SURVIVOR",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 2,
    "episode": 1,
    "from_char": "N.D. SURVIVOR",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 2,
    "episode": 1,
    "from_char": "NURSE",
    "to_char": "NURSE #2",
    "val": 1
  },
  {
    "season": 2,
    "episode": 1,
    "from_char": "NURSE",
    "to_char": "SARAH",
    "val": 1
  },
  {
    "season": 2,
    "episode": 1,
    "from_char": "NURSE #2",
    "to_char": "SARAH",
    "val": 1
  },
  {
    "season": 2,
    "episode": 1,
    "from_char": "REDSHIRT",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 2,
    "episode": 1,
    "from_char": "REDSHIRT",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 2,
    "episode": 1,
    "from_char": "SAYID",
    "to_char": "SHANNON",
    "val": 3
  },
  {
    "season": 2,
    "episode": 1,
    "from_char": "SAYID",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 1,
    "from_char": "SHANNON",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 2,
    "from_char": "ATTORNEY",
    "to_char": "LIZZY",
    "val": 1
  },
  {
    "season": 2,
    "episode": 2,
    "from_char": "ATTORNEY",
    "to_char": "MICHAEL",
    "val": 2
  },
  {
    "season": 2,
    "episode": 2,
    "from_char": "CHARLIE",
    "to_char": "CLAIRE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 2,
    "from_char": "CHARLIE",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 2,
    "episode": 2,
    "from_char": "CHARLIE",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 2,
    "episode": 2,
    "from_char": "CLAIRE",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 2,
    "episode": 2,
    "from_char": "CLAIRE",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 2,
    "episode": 2,
    "from_char": "DESMOND",
    "to_char": "JACK",
    "val": 2
  },
  {
    "season": 2,
    "episode": 2,
    "from_char": "DESMOND",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 2,
    "episode": 2,
    "from_char": "DESMOND",
    "to_char": "LOCKE",
    "val": 4
  },
  {
    "season": 2,
    "episode": 2,
    "from_char": "HURLEY",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 2,
    "episode": 2,
    "from_char": "JACK",
    "to_char": "LOCKE",
    "val": 2
  },
  {
    "season": 2,
    "episode": 2,
    "from_char": "JIN",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 2,
    "episode": 2,
    "from_char": "JIN",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 2,
    "episode": 2,
    "from_char": "JIN",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 2,
    "episode": 2,
    "from_char": "KATE",
    "to_char": "LOCKE",
    "val": 2
  },
  {
    "season": 2,
    "episode": 2,
    "from_char": "LIZZY",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 2,
    "episode": 2,
    "from_char": "MICHAEL",
    "to_char": "SAWYER",
    "val": 9
  },
  {
    "season": 2,
    "episode": 2,
    "from_char": "MICHAEL",
    "to_char": "SUSAN",
    "val": 2
  },
  {
    "season": 2,
    "episode": 2,
    "from_char": "MICHAEL",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 2,
    "episode": 2,
    "from_char": "SAWYER",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 2,
    "episode": 3,
    "from_char": "ANA LUCIA",
    "to_char": "LEADER",
    "val": 1
  },
  {
    "season": 2,
    "episode": 3,
    "from_char": "ANA LUCIA",
    "to_char": "MICHAEL",
    "val": 2
  },
  {
    "season": 2,
    "episode": 3,
    "from_char": "ANA LUCIA",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 2,
    "episode": 3,
    "from_char": "COOPER",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 3,
    "from_char": "DESMOND",
    "to_char": "JACK",
    "val": 6
  },
  {
    "season": 2,
    "episode": 3,
    "from_char": "DESMOND",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 3,
    "from_char": "DESMOND",
    "to_char": "LOCKE",
    "val": 4
  },
  {
    "season": 2,
    "episode": 3,
    "from_char": "FRANCINE",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 3,
    "from_char": "FRANCINE",
    "to_char": "MODERATOR",
    "val": 1
  },
  {
    "season": 2,
    "episode": 3,
    "from_char": "HELEN",
    "to_char": "LOCKE",
    "val": 4
  },
  {
    "season": 2,
    "episode": 3,
    "from_char": "HURLEY",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 2,
    "episode": 3,
    "from_char": "HURLEY",
    "to_char": "KATE",
    "val": 3
  },
  {
    "season": 2,
    "episode": 3,
    "from_char": "HURLEY",
    "to_char": "LOCKE",
    "val": 2
  },
  {
    "season": 2,
    "episode": 3,
    "from_char": "HURLEY",
    "to_char": "SAYID",
    "val": 3
  },
  {
    "season": 2,
    "episode": 3,
    "from_char": "JACK",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 2,
    "episode": 3,
    "from_char": "JACK",
    "to_char": "LOCKE",
    "val": 7
  },
  {
    "season": 2,
    "episode": 3,
    "from_char": "JACK",
    "to_char": "MARVIN CANDLE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 3,
    "from_char": "JACK",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 2,
    "episode": 3,
    "from_char": "JIN",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 2,
    "episode": 3,
    "from_char": "JIN",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 2,
    "episode": 3,
    "from_char": "KATE",
    "to_char": "LOCKE",
    "val": 3
  },
  {
    "season": 2,
    "episode": 3,
    "from_char": "KATE",
    "to_char": "SAYID",
    "val": 3
  },
  {
    "season": 2,
    "episode": 3,
    "from_char": "LEADER",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 2,
    "episode": 3,
    "from_char": "LEADER",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 2,
    "episode": 3,
    "from_char": "LOCKE",
    "to_char": "MARVIN CANDLE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 3,
    "from_char": "LOCKE",
    "to_char": "MODERATOR",
    "val": 1
  },
  {
    "season": 2,
    "episode": 3,
    "from_char": "LOCKE",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 2,
    "episode": 3,
    "from_char": "MICHAEL",
    "to_char": "SAWYER",
    "val": 3
  },
  {
    "season": 2,
    "episode": 4,
    "from_char": "ANA LUCIA",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 4,
    "from_char": "ANA LUCIA",
    "to_char": "LEADER",
    "val": 3
  },
  {
    "season": 2,
    "episode": 4,
    "from_char": "ANA LUCIA",
    "to_char": "LIBBY",
    "val": 1
  },
  {
    "season": 2,
    "episode": 4,
    "from_char": "ANA LUCIA",
    "to_char": "MICHAEL",
    "val": 3
  },
  {
    "season": 2,
    "episode": 4,
    "from_char": "ANA LUCIA",
    "to_char": "SAWYER",
    "val": 3
  },
  {
    "season": 2,
    "episode": 4,
    "from_char": "BERNARD",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 2,
    "episode": 4,
    "from_char": "BERNARD",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 2,
    "episode": 4,
    "from_char": "CARMEN",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 2,
    "episode": 4,
    "from_char": "CARMEN",
    "to_char": "LOTTO OFFICIAL",
    "val": 1
  },
  {
    "season": 2,
    "episode": 4,
    "from_char": "CARMEN",
    "to_char": "MARY JO",
    "val": 1
  },
  {
    "season": 2,
    "episode": 4,
    "from_char": "CHARLIE",
    "to_char": "HURLEY",
    "val": 2
  },
  {
    "season": 2,
    "episode": 4,
    "from_char": "CHARLIE",
    "to_char": "LOCKE",
    "val": 2
  },
  {
    "season": 2,
    "episode": 4,
    "from_char": "CLAIRE",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 4,
    "from_char": "GAS STATION CLERK",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 2,
    "episode": 4,
    "from_char": "HURLEY",
    "to_char": "JACK",
    "val": 3
  },
  {
    "season": 2,
    "episode": 4,
    "from_char": "HURLEY",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 4,
    "from_char": "HURLEY",
    "to_char": "JOHNNY",
    "val": 6
  },
  {
    "season": 2,
    "episode": 4,
    "from_char": "HURLEY",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 2,
    "episode": 4,
    "from_char": "HURLEY",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 4,
    "from_char": "HURLEY",
    "to_char": "LOTTO OFFICIAL",
    "val": 1
  },
  {
    "season": 2,
    "episode": 4,
    "from_char": "HURLEY",
    "to_char": "MARY JO",
    "val": 1
  },
  {
    "season": 2,
    "episode": 4,
    "from_char": "HURLEY",
    "to_char": "RANDY",
    "val": 2
  },
  {
    "season": 2,
    "episode": 4,
    "from_char": "HURLEY",
    "to_char": "ROSE",
    "val": 5
  },
  {
    "season": 2,
    "episode": 4,
    "from_char": "HURLEY",
    "to_char": "STARLA",
    "val": 1
  },
  {
    "season": 2,
    "episode": 4,
    "from_char": "JACK",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 2,
    "episode": 4,
    "from_char": "JACK",
    "to_char": "ROSE",
    "val": 2
  },
  {
    "season": 2,
    "episode": 4,
    "from_char": "JACK",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 2,
    "episode": 4,
    "from_char": "JIN",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 4,
    "from_char": "JIN",
    "to_char": "LEADER",
    "val": 1
  },
  {
    "season": 2,
    "episode": 4,
    "from_char": "JIN",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 2,
    "episode": 4,
    "from_char": "JIN",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 2,
    "episode": 4,
    "from_char": "JOHNNY",
    "to_char": "RANDY",
    "val": 2
  },
  {
    "season": 2,
    "episode": 4,
    "from_char": "JOHNNY",
    "to_char": "STARLA",
    "val": 1
  },
  {
    "season": 2,
    "episode": 4,
    "from_char": "KATE",
    "to_char": "ROSE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 4,
    "from_char": "KATE",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 2,
    "episode": 4,
    "from_char": "LEADER",
    "to_char": "LIBBY",
    "val": 1
  },
  {
    "season": 2,
    "episode": 4,
    "from_char": "LEADER",
    "to_char": "MICHAEL",
    "val": 3
  },
  {
    "season": 2,
    "episode": 4,
    "from_char": "LEADER",
    "to_char": "SAWYER",
    "val": 3
  },
  {
    "season": 2,
    "episode": 4,
    "from_char": "LIBBY",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 2,
    "episode": 4,
    "from_char": "LIBBY",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 2,
    "episode": 4,
    "from_char": "LOTTO OFFICIAL",
    "to_char": "MARY JO",
    "val": 1
  },
  {
    "season": 2,
    "episode": 4,
    "from_char": "MICHAEL",
    "to_char": "SAWYER",
    "val": 4
  },
  {
    "season": 2,
    "episode": 5,
    "from_char": "ANA LUCIA",
    "to_char": "BERNARD",
    "val": 1
  },
  {
    "season": 2,
    "episode": 5,
    "from_char": "ANA LUCIA",
    "to_char": "EKO",
    "val": 2
  },
  {
    "season": 2,
    "episode": 5,
    "from_char": "ANA LUCIA",
    "to_char": "JIN",
    "val": 4
  },
  {
    "season": 2,
    "episode": 5,
    "from_char": "ANA LUCIA",
    "to_char": "LEADER",
    "val": 2
  },
  {
    "season": 2,
    "episode": 5,
    "from_char": "ANA LUCIA",
    "to_char": "LIBBY",
    "val": 2
  },
  {
    "season": 2,
    "episode": 5,
    "from_char": "ANA LUCIA",
    "to_char": "MICHAEL",
    "val": 2
  },
  {
    "season": 2,
    "episode": 5,
    "from_char": "ANA LUCIA",
    "to_char": "SAWYER",
    "val": 5
  },
  {
    "season": 2,
    "episode": 5,
    "from_char": "BERNARD",
    "to_char": "EKO",
    "val": 1
  },
  {
    "season": 2,
    "episode": 5,
    "from_char": "BERNARD",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 5,
    "from_char": "BERNARD",
    "to_char": "LEADER",
    "val": 1
  },
  {
    "season": 2,
    "episode": 5,
    "from_char": "BERNARD",
    "to_char": "LIBBY",
    "val": 1
  },
  {
    "season": 2,
    "episode": 5,
    "from_char": "BERNARD",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 2,
    "episode": 5,
    "from_char": "CLAIRE",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 5,
    "from_char": "EKO",
    "to_char": "JIN",
    "val": 8
  },
  {
    "season": 2,
    "episode": 5,
    "from_char": "EKO",
    "to_char": "LEADER",
    "val": 1
  },
  {
    "season": 2,
    "episode": 5,
    "from_char": "EKO",
    "to_char": "LIBBY",
    "val": 1
  },
  {
    "season": 2,
    "episode": 5,
    "from_char": "EKO",
    "to_char": "MICHAEL",
    "val": 2
  },
  {
    "season": 2,
    "episode": 5,
    "from_char": "EKO",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 2,
    "episode": 5,
    "from_char": "HURLEY",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 2,
    "episode": 5,
    "from_char": "JACK",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 5,
    "from_char": "JAE",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 5,
    "from_char": "JAE",
    "to_char": "MANAGER",
    "val": 1
  },
  {
    "season": 2,
    "episode": 5,
    "from_char": "JAE",
    "to_char": "MRS. LEE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 5,
    "from_char": "JAE",
    "to_char": "MRS. PAIK",
    "val": 1
  },
  {
    "season": 2,
    "episode": 5,
    "from_char": "JAE",
    "to_char": "MRS. SHIN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 5,
    "from_char": "JAE",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 2,
    "episode": 5,
    "from_char": "JIN",
    "to_char": "LEADER",
    "val": 2
  },
  {
    "season": 2,
    "episode": 5,
    "from_char": "JIN",
    "to_char": "LIBBY",
    "val": 2
  },
  {
    "season": 2,
    "episode": 5,
    "from_char": "JIN",
    "to_char": "MICHAEL",
    "val": 3
  },
  {
    "season": 2,
    "episode": 5,
    "from_char": "JIN",
    "to_char": "MR. KIM",
    "val": 2
  },
  {
    "season": 2,
    "episode": 5,
    "from_char": "JIN",
    "to_char": "MRS. PAIK",
    "val": 1
  },
  {
    "season": 2,
    "episode": 5,
    "from_char": "JIN",
    "to_char": "MRS. SHIN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 5,
    "from_char": "JIN",
    "to_char": "POOR MAN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 5,
    "from_char": "JIN",
    "to_char": "SAWYER",
    "val": 3
  },
  {
    "season": 2,
    "episode": 5,
    "from_char": "JIN",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 5,
    "from_char": "JIN",
    "to_char": "SUN, JIN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 5,
    "from_char": "JIN",
    "to_char": "TAI",
    "val": 1
  },
  {
    "season": 2,
    "episode": 5,
    "from_char": "KATE",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 2,
    "episode": 5,
    "from_char": "LEADER",
    "to_char": "LIBBY",
    "val": 2
  },
  {
    "season": 2,
    "episode": 5,
    "from_char": "LEADER",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 2,
    "episode": 5,
    "from_char": "LEADER",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 2,
    "episode": 5,
    "from_char": "LIBBY",
    "to_char": "MICHAEL",
    "val": 2
  },
  {
    "season": 2,
    "episode": 5,
    "from_char": "LIBBY",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 2,
    "episode": 5,
    "from_char": "LOCKE",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 5,
    "from_char": "MANAGER",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 5,
    "from_char": "MICHAEL",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 2,
    "episode": 5,
    "from_char": "MR. KIM",
    "to_char": "POOR MAN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 5,
    "from_char": "MRS. LEE",
    "to_char": "MRS. PAIK",
    "val": 1
  },
  {
    "season": 2,
    "episode": 5,
    "from_char": "MRS. LEE",
    "to_char": "MRS. SHIN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 5,
    "from_char": "MRS. LEE",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 5,
    "from_char": "MRS. PAIK",
    "to_char": "MRS. SHIN",
    "val": 2
  },
  {
    "season": 2,
    "episode": 5,
    "from_char": "MRS. PAIK",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 2,
    "episode": 5,
    "from_char": "MRS. SHIN",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 5,
    "from_char": "SUN",
    "to_char": "SUN, JIN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 6,
    "from_char": "ANA",
    "to_char": "BERNARD",
    "val": 4
  },
  {
    "season": 2,
    "episode": 6,
    "from_char": "ANA",
    "to_char": "CINDY",
    "val": 2
  },
  {
    "season": 2,
    "episode": 6,
    "from_char": "ANA",
    "to_char": "EKO",
    "val": 4
  },
  {
    "season": 2,
    "episode": 6,
    "from_char": "ANA",
    "to_char": "JIN",
    "val": 3
  },
  {
    "season": 2,
    "episode": 6,
    "from_char": "ANA",
    "to_char": "LIBBY",
    "val": 4
  },
  {
    "season": 2,
    "episode": 6,
    "from_char": "ANA",
    "to_char": "MICHAEL",
    "val": 5
  },
  {
    "season": 2,
    "episode": 6,
    "from_char": "ANA",
    "to_char": "SAWYER",
    "val": 3
  },
  {
    "season": 2,
    "episode": 6,
    "from_char": "BERNARD",
    "to_char": "CINDY",
    "val": 2
  },
  {
    "season": 2,
    "episode": 6,
    "from_char": "BERNARD",
    "to_char": "EKO",
    "val": 3
  },
  {
    "season": 2,
    "episode": 6,
    "from_char": "BERNARD",
    "to_char": "JIN",
    "val": 3
  },
  {
    "season": 2,
    "episode": 6,
    "from_char": "BERNARD",
    "to_char": "LIBBY",
    "val": 4
  },
  {
    "season": 2,
    "episode": 6,
    "from_char": "BERNARD",
    "to_char": "MICHAEL",
    "val": 5
  },
  {
    "season": 2,
    "episode": 6,
    "from_char": "BERNARD",
    "to_char": "SAWYER",
    "val": 3
  },
  {
    "season": 2,
    "episode": 6,
    "from_char": "BOONE",
    "to_char": "SHANNON",
    "val": 3
  },
  {
    "season": 2,
    "episode": 6,
    "from_char": "CHARLIE",
    "to_char": "CLAIRE",
    "val": 2
  },
  {
    "season": 2,
    "episode": 6,
    "from_char": "CHARLIE",
    "to_char": "LOCKE",
    "val": 2
  },
  {
    "season": 2,
    "episode": 6,
    "from_char": "CHARLIE",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 2,
    "episode": 6,
    "from_char": "CHARLIE",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 2,
    "episode": 6,
    "from_char": "CINDY",
    "to_char": "EKO",
    "val": 1
  },
  {
    "season": 2,
    "episode": 6,
    "from_char": "CINDY",
    "to_char": "JIN",
    "val": 2
  },
  {
    "season": 2,
    "episode": 6,
    "from_char": "CINDY",
    "to_char": "LIBBY",
    "val": 2
  },
  {
    "season": 2,
    "episode": 6,
    "from_char": "CINDY",
    "to_char": "MICHAEL",
    "val": 2
  },
  {
    "season": 2,
    "episode": 6,
    "from_char": "CINDY",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 2,
    "episode": 6,
    "from_char": "CLAIRE",
    "to_char": "LOCKE",
    "val": 2
  },
  {
    "season": 2,
    "episode": 6,
    "from_char": "CLAIRE",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 2,
    "episode": 6,
    "from_char": "CLAIRE",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 2,
    "episode": 6,
    "from_char": "DOCTOR",
    "to_char": "SABRINA",
    "val": 1
  },
  {
    "season": 2,
    "episode": 6,
    "from_char": "EKO",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 6,
    "from_char": "EKO",
    "to_char": "LIBBY",
    "val": 3
  },
  {
    "season": 2,
    "episode": 6,
    "from_char": "EKO",
    "to_char": "MICHAEL",
    "val": 3
  },
  {
    "season": 2,
    "episode": 6,
    "from_char": "EKO",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 2,
    "episode": 6,
    "from_char": "HURLEY",
    "to_char": "ROSE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 6,
    "from_char": "HURLEY",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 2,
    "episode": 6,
    "from_char": "JIN",
    "to_char": "LIBBY",
    "val": 2
  },
  {
    "season": 2,
    "episode": 6,
    "from_char": "JIN",
    "to_char": "MICHAEL",
    "val": 4
  },
  {
    "season": 2,
    "episode": 6,
    "from_char": "JIN",
    "to_char": "SAWYER",
    "val": 3
  },
  {
    "season": 2,
    "episode": 6,
    "from_char": "LIBBY",
    "to_char": "MICHAEL",
    "val": 4
  },
  {
    "season": 2,
    "episode": 6,
    "from_char": "LIBBY",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 2,
    "episode": 6,
    "from_char": "MICHAEL",
    "to_char": "SAWYER",
    "val": 4
  },
  {
    "season": 2,
    "episode": 6,
    "from_char": "NORA",
    "to_char": "SABRINA",
    "val": 1
  },
  {
    "season": 2,
    "episode": 6,
    "from_char": "NORA",
    "to_char": "SHANNON",
    "val": 2
  },
  {
    "season": 2,
    "episode": 6,
    "from_char": "NORA",
    "to_char": "SOPHIE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 6,
    "from_char": "ROSE",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 2,
    "episode": 6,
    "from_char": "SABRINA",
    "to_char": "SHANNON",
    "val": 2
  },
  {
    "season": 2,
    "episode": 6,
    "from_char": "SABRINA",
    "to_char": "SOPHIE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 6,
    "from_char": "SAYID",
    "to_char": "SHANNON",
    "val": 6
  },
  {
    "season": 2,
    "episode": 6,
    "from_char": "SAYID",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 2,
    "episode": 6,
    "from_char": "SHANNON",
    "to_char": "SOPHIE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 6,
    "from_char": "SHANNON",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 2,
    "episode": 7,
    "from_char": "ANA",
    "to_char": "ANA LUCIA",
    "val": 5
  },
  {
    "season": 2,
    "episode": 7,
    "from_char": "ANA",
    "to_char": "BERNARD",
    "val": 3
  },
  {
    "season": 2,
    "episode": 7,
    "from_char": "ANA",
    "to_char": "CINDY",
    "val": 3
  },
  {
    "season": 2,
    "episode": 7,
    "from_char": "ANA",
    "to_char": "EKO",
    "val": 1
  },
  {
    "season": 2,
    "episode": 7,
    "from_char": "ANA",
    "to_char": "EMMA",
    "val": 1
  },
  {
    "season": 2,
    "episode": 7,
    "from_char": "ANA",
    "to_char": "GOODWIN",
    "val": 3
  },
  {
    "season": 2,
    "episode": 7,
    "from_char": "ANA",
    "to_char": "LIBBY",
    "val": 3
  },
  {
    "season": 2,
    "episode": 7,
    "from_char": "ANA",
    "to_char": "NATHAN",
    "val": 3
  },
  {
    "season": 2,
    "episode": 7,
    "from_char": "ANA",
    "to_char": "YELLING MAN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 7,
    "from_char": "ANA",
    "to_char": "ZACH",
    "val": 1
  },
  {
    "season": 2,
    "episode": 7,
    "from_char": "ANA LUCIA",
    "to_char": "BERNARD",
    "val": 10
  },
  {
    "season": 2,
    "episode": 7,
    "from_char": "ANA LUCIA",
    "to_char": "BOONE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 7,
    "from_char": "ANA LUCIA",
    "to_char": "CINDY",
    "val": 9
  },
  {
    "season": 2,
    "episode": 7,
    "from_char": "ANA LUCIA",
    "to_char": "DONALD",
    "val": 1
  },
  {
    "season": 2,
    "episode": 7,
    "from_char": "ANA LUCIA",
    "to_char": "EKO",
    "val": 4
  },
  {
    "season": 2,
    "episode": 7,
    "from_char": "ANA LUCIA",
    "to_char": "EMMA",
    "val": 2
  },
  {
    "season": 2,
    "episode": 7,
    "from_char": "ANA LUCIA",
    "to_char": "GOODWIN",
    "val": 13
  },
  {
    "season": 2,
    "episode": 7,
    "from_char": "ANA LUCIA",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 7,
    "from_char": "ANA LUCIA",
    "to_char": "LIBBY",
    "val": 10
  },
  {
    "season": 2,
    "episode": 7,
    "from_char": "ANA LUCIA",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 2,
    "episode": 7,
    "from_char": "ANA LUCIA",
    "to_char": "NATHAN",
    "val": 6
  },
  {
    "season": 2,
    "episode": 7,
    "from_char": "ANA LUCIA",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 2,
    "episode": 7,
    "from_char": "ANA LUCIA",
    "to_char": "UNKNOWN VOICE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 7,
    "from_char": "ANA LUCIA",
    "to_char": "YELLING MAN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 7,
    "from_char": "ANA LUCIA",
    "to_char": "ZACH",
    "val": 1
  },
  {
    "season": 2,
    "episode": 7,
    "from_char": "BERNARD",
    "to_char": "BOONE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 7,
    "from_char": "BERNARD",
    "to_char": "CINDY",
    "val": 7
  },
  {
    "season": 2,
    "episode": 7,
    "from_char": "BERNARD",
    "to_char": "DONALD",
    "val": 1
  },
  {
    "season": 2,
    "episode": 7,
    "from_char": "BERNARD",
    "to_char": "EKO",
    "val": 3
  },
  {
    "season": 2,
    "episode": 7,
    "from_char": "BERNARD",
    "to_char": "GOODWIN",
    "val": 6
  },
  {
    "season": 2,
    "episode": 7,
    "from_char": "BERNARD",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 7,
    "from_char": "BERNARD",
    "to_char": "LIBBY",
    "val": 5
  },
  {
    "season": 2,
    "episode": 7,
    "from_char": "BERNARD",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 2,
    "episode": 7,
    "from_char": "BERNARD",
    "to_char": "NATHAN",
    "val": 3
  },
  {
    "season": 2,
    "episode": 7,
    "from_char": "BERNARD",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 2,
    "episode": 7,
    "from_char": "BOONE",
    "to_char": "CINDY",
    "val": 1
  },
  {
    "season": 2,
    "episode": 7,
    "from_char": "CINDY",
    "to_char": "DONALD",
    "val": 1
  },
  {
    "season": 2,
    "episode": 7,
    "from_char": "CINDY",
    "to_char": "EKO",
    "val": 2
  },
  {
    "season": 2,
    "episode": 7,
    "from_char": "CINDY",
    "to_char": "GOODWIN",
    "val": 5
  },
  {
    "season": 2,
    "episode": 7,
    "from_char": "CINDY",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 7,
    "from_char": "CINDY",
    "to_char": "LIBBY",
    "val": 5
  },
  {
    "season": 2,
    "episode": 7,
    "from_char": "CINDY",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 2,
    "episode": 7,
    "from_char": "CINDY",
    "to_char": "NATHAN",
    "val": 2
  },
  {
    "season": 2,
    "episode": 7,
    "from_char": "CINDY",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 2,
    "episode": 7,
    "from_char": "DONALD",
    "to_char": "EKO",
    "val": 1
  },
  {
    "season": 2,
    "episode": 7,
    "from_char": "DONALD",
    "to_char": "GOODWIN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 7,
    "from_char": "DONALD",
    "to_char": "LIBBY",
    "val": 1
  },
  {
    "season": 2,
    "episode": 7,
    "from_char": "EKO",
    "to_char": "EMMA",
    "val": 1
  },
  {
    "season": 2,
    "episode": 7,
    "from_char": "EKO",
    "to_char": "GOODWIN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 7,
    "from_char": "EKO",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 7,
    "from_char": "EKO",
    "to_char": "LIBBY",
    "val": 1
  },
  {
    "season": 2,
    "episode": 7,
    "from_char": "EKO",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 2,
    "episode": 7,
    "from_char": "EKO",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 2,
    "episode": 7,
    "from_char": "EKO",
    "to_char": "YELLING MAN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 7,
    "from_char": "EKO",
    "to_char": "ZACH",
    "val": 1
  },
  {
    "season": 2,
    "episode": 7,
    "from_char": "EMMA",
    "to_char": "GOODWIN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 7,
    "from_char": "EMMA",
    "to_char": "LIBBY",
    "val": 1
  },
  {
    "season": 2,
    "episode": 7,
    "from_char": "EMMA",
    "to_char": "UNKNOWN VOICE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 7,
    "from_char": "EMMA",
    "to_char": "YELLING MAN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 7,
    "from_char": "EMMA",
    "to_char": "ZACH",
    "val": 1
  },
  {
    "season": 2,
    "episode": 7,
    "from_char": "GOODWIN",
    "to_char": "LIBBY",
    "val": 7
  },
  {
    "season": 2,
    "episode": 7,
    "from_char": "GOODWIN",
    "to_char": "NATHAN",
    "val": 5
  },
  {
    "season": 2,
    "episode": 7,
    "from_char": "GOODWIN",
    "to_char": "UNKNOWN VOICE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 7,
    "from_char": "JIN",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 2,
    "episode": 7,
    "from_char": "JIN",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 2,
    "episode": 7,
    "from_char": "LIBBY",
    "to_char": "NATHAN",
    "val": 2
  },
  {
    "season": 2,
    "episode": 7,
    "from_char": "LIBBY",
    "to_char": "UNKNOWN VOICE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 7,
    "from_char": "MICHAEL",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 2,
    "episode": 7,
    "from_char": "YELLING MAN",
    "to_char": "ZACH",
    "val": 1
  },
  {
    "season": 2,
    "episode": 8,
    "from_char": "ANA LUCIA",
    "to_char": "BERNARD",
    "val": 3
  },
  {
    "season": 2,
    "episode": 8,
    "from_char": "ANA LUCIA",
    "to_char": "BIG MIKE",
    "val": 2
  },
  {
    "season": 2,
    "episode": 8,
    "from_char": "ANA LUCIA",
    "to_char": "CAPTAIN",
    "val": 2
  },
  {
    "season": 2,
    "episode": 8,
    "from_char": "ANA LUCIA",
    "to_char": "EKO",
    "val": 2
  },
  {
    "season": 2,
    "episode": 8,
    "from_char": "ANA LUCIA",
    "to_char": "JASON",
    "val": 1
  },
  {
    "season": 2,
    "episode": 8,
    "from_char": "ANA LUCIA",
    "to_char": "JIN",
    "val": 2
  },
  {
    "season": 2,
    "episode": 8,
    "from_char": "ANA LUCIA",
    "to_char": "LIBBY",
    "val": 5
  },
  {
    "season": 2,
    "episode": 8,
    "from_char": "ANA LUCIA",
    "to_char": "MATTHEW",
    "val": 1
  },
  {
    "season": 2,
    "episode": 8,
    "from_char": "ANA LUCIA",
    "to_char": "MICHAEL",
    "val": 4
  },
  {
    "season": 2,
    "episode": 8,
    "from_char": "ANA LUCIA",
    "to_char": "POLICE RADIO VOICE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 8,
    "from_char": "ANA LUCIA",
    "to_char": "RAGGS",
    "val": 2
  },
  {
    "season": 2,
    "episode": 8,
    "from_char": "ANA LUCIA",
    "to_char": "SAYID",
    "val": 5
  },
  {
    "season": 2,
    "episode": 8,
    "from_char": "ANA LUCIA",
    "to_char": "SHAWNA",
    "val": 1
  },
  {
    "season": 2,
    "episode": 8,
    "from_char": "ANA LUCIA",
    "to_char": "TRAVIS",
    "val": 1
  },
  {
    "season": 2,
    "episode": 8,
    "from_char": "BERNARD",
    "to_char": "EKO",
    "val": 1
  },
  {
    "season": 2,
    "episode": 8,
    "from_char": "BERNARD",
    "to_char": "JIN",
    "val": 2
  },
  {
    "season": 2,
    "episode": 8,
    "from_char": "BERNARD",
    "to_char": "LIBBY",
    "val": 3
  },
  {
    "season": 2,
    "episode": 8,
    "from_char": "BERNARD",
    "to_char": "MICHAEL",
    "val": 2
  },
  {
    "season": 2,
    "episode": 8,
    "from_char": "BERNARD",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 2,
    "episode": 8,
    "from_char": "BIG MIKE",
    "to_char": "POLICE RADIO VOICE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 8,
    "from_char": "BIG MIKE",
    "to_char": "RAGGS",
    "val": 1
  },
  {
    "season": 2,
    "episode": 8,
    "from_char": "BIG MIKE",
    "to_char": "SHAWNA",
    "val": 1
  },
  {
    "season": 2,
    "episode": 8,
    "from_char": "BIG MIKE",
    "to_char": "TRAVIS",
    "val": 1
  },
  {
    "season": 2,
    "episode": 8,
    "from_char": "CAPTAIN",
    "to_char": "RAGGS",
    "val": 1
  },
  {
    "season": 2,
    "episode": 8,
    "from_char": "CHARLIE",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 2,
    "episode": 8,
    "from_char": "CHARLIE",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 2,
    "episode": 8,
    "from_char": "CHARLIE",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 8,
    "from_char": "CHARLIE",
    "to_char": "ROSE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 8,
    "from_char": "EKO",
    "to_char": "JACK",
    "val": 5
  },
  {
    "season": 2,
    "episode": 8,
    "from_char": "EKO",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 8,
    "from_char": "EKO",
    "to_char": "KATE",
    "val": 3
  },
  {
    "season": 2,
    "episode": 8,
    "from_char": "EKO",
    "to_char": "LIBBY",
    "val": 2
  },
  {
    "season": 2,
    "episode": 8,
    "from_char": "EKO",
    "to_char": "LOCKE",
    "val": 4
  },
  {
    "season": 2,
    "episode": 8,
    "from_char": "EKO",
    "to_char": "MICHAEL",
    "val": 3
  },
  {
    "season": 2,
    "episode": 8,
    "from_char": "EKO",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 2,
    "episode": 8,
    "from_char": "EKO",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 8,
    "from_char": "HURLEY",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 2,
    "episode": 8,
    "from_char": "HURLEY",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 8,
    "from_char": "HURLEY",
    "to_char": "ROSE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 8,
    "from_char": "JACK",
    "to_char": "KATE",
    "val": 5
  },
  {
    "season": 2,
    "episode": 8,
    "from_char": "JACK",
    "to_char": "LOCKE",
    "val": 4
  },
  {
    "season": 2,
    "episode": 8,
    "from_char": "JACK",
    "to_char": "MICHAEL",
    "val": 2
  },
  {
    "season": 2,
    "episode": 8,
    "from_char": "JACK",
    "to_char": "ROSE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 8,
    "from_char": "JACK",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 8,
    "from_char": "JIN",
    "to_char": "LIBBY",
    "val": 2
  },
  {
    "season": 2,
    "episode": 8,
    "from_char": "JIN",
    "to_char": "MICHAEL",
    "val": 2
  },
  {
    "season": 2,
    "episode": 8,
    "from_char": "JIN",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 2,
    "episode": 8,
    "from_char": "KATE",
    "to_char": "LOCKE",
    "val": 2
  },
  {
    "season": 2,
    "episode": 8,
    "from_char": "KATE",
    "to_char": "ROSE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 8,
    "from_char": "LIBBY",
    "to_char": "MICHAEL",
    "val": 3
  },
  {
    "season": 2,
    "episode": 8,
    "from_char": "LIBBY",
    "to_char": "SAYID",
    "val": 3
  },
  {
    "season": 2,
    "episode": 8,
    "from_char": "LOCKE",
    "to_char": "MICHAEL",
    "val": 2
  },
  {
    "season": 2,
    "episode": 8,
    "from_char": "LOCKE",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 8,
    "from_char": "MICHAEL",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 2,
    "episode": 8,
    "from_char": "MICHAEL",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 2,
    "episode": 8,
    "from_char": "POLICE RADIO VOICE",
    "to_char": "SHAWNA",
    "val": 1
  },
  {
    "season": 2,
    "episode": 8,
    "from_char": "POLICE RADIO VOICE",
    "to_char": "TRAVIS",
    "val": 1
  },
  {
    "season": 2,
    "episode": 8,
    "from_char": "SHAWNA",
    "to_char": "TRAVIS",
    "val": 1
  },
  {
    "season": 2,
    "episode": 9,
    "from_char": "ANA",
    "to_char": "EKO",
    "val": 1
  },
  {
    "season": 2,
    "episode": 9,
    "from_char": "ANA",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 2,
    "episode": 9,
    "from_char": "AUSTEN",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 9,
    "from_char": "CHARLIE",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 2,
    "episode": 9,
    "from_char": "CHARLIE",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 9,
    "from_char": "DIANE",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 9,
    "from_char": "EKO",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 9,
    "from_char": "EKO",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 9,
    "from_char": "EKO",
    "to_char": "LOCKE",
    "val": 3
  },
  {
    "season": 2,
    "episode": 9,
    "from_char": "EKO",
    "to_char": "MICHAEL",
    "val": 2
  },
  {
    "season": 2,
    "episode": 9,
    "from_char": "EKO",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 2,
    "episode": 9,
    "from_char": "GUY IN LINE",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 9,
    "from_char": "GUY IN LINE",
    "to_char": "MARSHAL",
    "val": 1
  },
  {
    "season": 2,
    "episode": 9,
    "from_char": "HURLEY",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 2,
    "episode": 9,
    "from_char": "JACK",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 2,
    "episode": 9,
    "from_char": "JACK",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 9,
    "from_char": "JACK",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 2,
    "episode": 9,
    "from_char": "JACK",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 2,
    "episode": 9,
    "from_char": "JIN",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 9,
    "from_char": "JIN",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 2,
    "episode": 9,
    "from_char": "KATE",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 9,
    "from_char": "KATE",
    "to_char": "MARSHAL",
    "val": 2
  },
  {
    "season": 2,
    "episode": 9,
    "from_char": "KATE",
    "to_char": "SAWYER",
    "val": 3
  },
  {
    "season": 2,
    "episode": 9,
    "from_char": "KATE",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 2,
    "episode": 9,
    "from_char": "KATE",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 9,
    "from_char": "KATE",
    "to_char": "WAYNE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 9,
    "from_char": "LOCKE",
    "to_char": "MARVIN CANDLE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 9,
    "from_char": "LOCKE",
    "to_char": "MICHAEL",
    "val": 3
  },
  {
    "season": 2,
    "episode": 9,
    "from_char": "LOCKE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 2,
    "episode": 9,
    "from_char": "MARVIN CANDLE",
    "to_char": "MICHAEL",
    "val": 2
  },
  {
    "season": 2,
    "episode": 9,
    "from_char": "MARVIN CANDLE",
    "to_char": "MONITOR",
    "val": 1
  },
  {
    "season": 2,
    "episode": 9,
    "from_char": "MICHAEL",
    "to_char": "MONITOR",
    "val": 1
  },
  {
    "season": 2,
    "episode": 10,
    "from_char": "CHARLIE",
    "to_char": "CLAIRE",
    "val": 2
  },
  {
    "season": 2,
    "episode": 10,
    "from_char": "CHARLIE",
    "to_char": "EKO",
    "val": 8
  },
  {
    "season": 2,
    "episode": 10,
    "from_char": "CHARLIE",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 10,
    "from_char": "CLAIRE",
    "to_char": "EKO",
    "val": 3
  },
  {
    "season": 2,
    "episode": 10,
    "from_char": "EKO",
    "to_char": "GOLDIE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 10,
    "from_char": "EKO",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 10,
    "from_char": "EKO",
    "to_char": "NIGERIAN WOMAN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 10,
    "from_char": "EKO",
    "to_char": "OLU",
    "val": 1
  },
  {
    "season": 2,
    "episode": 10,
    "from_char": "EKO",
    "to_char": "TOUGH MOROCCAN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 10,
    "from_char": "EKO",
    "to_char": "YEMI",
    "val": 3
  },
  {
    "season": 2,
    "episode": 10,
    "from_char": "GOLDIE",
    "to_char": "OLU",
    "val": 1
  },
  {
    "season": 2,
    "episode": 10,
    "from_char": "GOLDIE",
    "to_char": "YEMI",
    "val": 1
  },
  {
    "season": 2,
    "episode": 10,
    "from_char": "HURLEY",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 10,
    "from_char": "HURLEY",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 2,
    "episode": 10,
    "from_char": "HURLEY",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 2,
    "episode": 10,
    "from_char": "JACK",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 2,
    "episode": 10,
    "from_char": "JACK",
    "to_char": "MONITOR",
    "val": 1
  },
  {
    "season": 2,
    "episode": 10,
    "from_char": "KATE",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 2,
    "episode": 10,
    "from_char": "KATE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 2,
    "episode": 10,
    "from_char": "LOCKE",
    "to_char": "MICHAEL",
    "val": 2
  },
  {
    "season": 2,
    "episode": 10,
    "from_char": "MICHAEL",
    "to_char": "MONITOR",
    "val": 1
  },
  {
    "season": 2,
    "episode": 10,
    "from_char": "MICHAEL",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 2,
    "episode": 10,
    "from_char": "NIGERIAN WOMAN",
    "to_char": "YEMI",
    "val": 1
  },
  {
    "season": 2,
    "episode": 10,
    "from_char": "OLU",
    "to_char": "YEMI",
    "val": 1
  },
  {
    "season": 2,
    "episode": 10,
    "from_char": "PRIEST",
    "to_char": "THUG",
    "val": 1
  },
  {
    "season": 2,
    "episode": 10,
    "from_char": "PRIEST",
    "to_char": "THUG #2",
    "val": 1
  },
  {
    "season": 2,
    "episode": 10,
    "from_char": "PRIEST",
    "to_char": "THUG CAPTAIN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 10,
    "from_char": "PRIEST",
    "to_char": "YOUNG EKO",
    "val": 1
  },
  {
    "season": 2,
    "episode": 10,
    "from_char": "THUG",
    "to_char": "THUG #2",
    "val": 1
  },
  {
    "season": 2,
    "episode": 10,
    "from_char": "THUG",
    "to_char": "THUG CAPTAIN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 10,
    "from_char": "THUG",
    "to_char": "YOUNG EKO",
    "val": 1
  },
  {
    "season": 2,
    "episode": 10,
    "from_char": "THUG #2",
    "to_char": "THUG CAPTAIN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 10,
    "from_char": "THUG #2",
    "to_char": "YOUNG EKO",
    "val": 1
  },
  {
    "season": 2,
    "episode": 10,
    "from_char": "THUG CAPTAIN",
    "to_char": "YOUNG EKO",
    "val": 1
  },
  {
    "season": 2,
    "episode": 11,
    "from_char": "ANA",
    "to_char": "CLAIRE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 11,
    "from_char": "ANA",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 2,
    "episode": 11,
    "from_char": "ANA",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 11,
    "from_char": "ANA",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 2,
    "episode": 11,
    "from_char": "ANGELO",
    "to_char": "CHRISTIAN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 11,
    "from_char": "ANGELO",
    "to_char": "GABRIELA",
    "val": 1
  },
  {
    "season": 2,
    "episode": 11,
    "from_char": "ANGELO",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 2,
    "episode": 11,
    "from_char": "CHARLIE",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 2,
    "episode": 11,
    "from_char": "CHARLIE",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 2,
    "episode": 11,
    "from_char": "CHRISTIAN",
    "to_char": "GABRIELA",
    "val": 2
  },
  {
    "season": 2,
    "episode": 11,
    "from_char": "CHRISTIAN",
    "to_char": "JACK",
    "val": 3
  },
  {
    "season": 2,
    "episode": 11,
    "from_char": "CLAIRE",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 2,
    "episode": 11,
    "from_char": "CLAIRE",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 11,
    "from_char": "CLAIRE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 2,
    "episode": 11,
    "from_char": "GABRIELA",
    "to_char": "JACK",
    "val": 4
  },
  {
    "season": 2,
    "episode": 11,
    "from_char": "HURLEY",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 11,
    "from_char": "HURLEY",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 2,
    "episode": 11,
    "from_char": "HURLEY",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 11,
    "from_char": "JACK",
    "to_char": "KATE",
    "val": 4
  },
  {
    "season": 2,
    "episode": 11,
    "from_char": "JACK",
    "to_char": "LOCKE",
    "val": 10
  },
  {
    "season": 2,
    "episode": 11,
    "from_char": "JACK",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 2,
    "episode": 11,
    "from_char": "JACK",
    "to_char": "SARAH",
    "val": 2
  },
  {
    "season": 2,
    "episode": 11,
    "from_char": "JACK",
    "to_char": "SAWYER",
    "val": 9
  },
  {
    "season": 2,
    "episode": 11,
    "from_char": "JACK",
    "to_char": "TOM",
    "val": 3
  },
  {
    "season": 2,
    "episode": 11,
    "from_char": "JIN",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 2,
    "episode": 11,
    "from_char": "KATE",
    "to_char": "LOCKE",
    "val": 3
  },
  {
    "season": 2,
    "episode": 11,
    "from_char": "KATE",
    "to_char": "SAWYER",
    "val": 3
  },
  {
    "season": 2,
    "episode": 11,
    "from_char": "KATE",
    "to_char": "TOM",
    "val": 1
  },
  {
    "season": 2,
    "episode": 11,
    "from_char": "LOCKE",
    "to_char": "SAWYER",
    "val": 8
  },
  {
    "season": 2,
    "episode": 11,
    "from_char": "LOCKE",
    "to_char": "TOM",
    "val": 2
  },
  {
    "season": 2,
    "episode": 11,
    "from_char": "SAWYER",
    "to_char": "TOM",
    "val": 3
  },
  {
    "season": 2,
    "episode": 12,
    "from_char": "ANA",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 2,
    "episode": 12,
    "from_char": "BUTCHER",
    "to_char": "CHARLIE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 12,
    "from_char": "BUTCHER",
    "to_char": "LIAM",
    "val": 1
  },
  {
    "season": 2,
    "episode": 12,
    "from_char": "BUTCHER",
    "to_char": "MRS. PACE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 12,
    "from_char": "BUTCHER",
    "to_char": "VOICE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 12,
    "from_char": "BUTCHER",
    "to_char": "YOUNG CHARLIE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 12,
    "from_char": "BUTCHER",
    "to_char": "YOUNG LIAM",
    "val": 1
  },
  {
    "season": 2,
    "episode": 12,
    "from_char": "CHARLIE",
    "to_char": "CLAIRE",
    "val": 4
  },
  {
    "season": 2,
    "episode": 12,
    "from_char": "CHARLIE",
    "to_char": "CREW",
    "val": 1
  },
  {
    "season": 2,
    "episode": 12,
    "from_char": "CHARLIE",
    "to_char": "DIRECTOR",
    "val": 1
  },
  {
    "season": 2,
    "episode": 12,
    "from_char": "CHARLIE",
    "to_char": "EKO",
    "val": 2
  },
  {
    "season": 2,
    "episode": 12,
    "from_char": "CHARLIE",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 2,
    "episode": 12,
    "from_char": "CHARLIE",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 2,
    "episode": 12,
    "from_char": "CHARLIE",
    "to_char": "KAREN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 12,
    "from_char": "CHARLIE",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 12,
    "from_char": "CHARLIE",
    "to_char": "LIAM",
    "val": 6
  },
  {
    "season": 2,
    "episode": 12,
    "from_char": "CHARLIE",
    "to_char": "LOCKE",
    "val": 4
  },
  {
    "season": 2,
    "episode": 12,
    "from_char": "CHARLIE",
    "to_char": "MRS. PACE",
    "val": 2
  },
  {
    "season": 2,
    "episode": 12,
    "from_char": "CHARLIE",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 2,
    "episode": 12,
    "from_char": "CHARLIE",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 12,
    "from_char": "CHARLIE",
    "to_char": "VOICE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 12,
    "from_char": "CHARLIE",
    "to_char": "YOUNG CHARLIE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 12,
    "from_char": "CHARLIE",
    "to_char": "YOUNG LIAM",
    "val": 1
  },
  {
    "season": 2,
    "episode": 12,
    "from_char": "CLAIRE",
    "to_char": "EKO",
    "val": 2
  },
  {
    "season": 2,
    "episode": 12,
    "from_char": "CLAIRE",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 2,
    "episode": 12,
    "from_char": "CLAIRE",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 12,
    "from_char": "CLAIRE",
    "to_char": "LOCKE",
    "val": 2
  },
  {
    "season": 2,
    "episode": 12,
    "from_char": "CLAIRE",
    "to_char": "MRS. PACE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 12,
    "from_char": "CREW",
    "to_char": "DIRECTOR",
    "val": 1
  },
  {
    "season": 2,
    "episode": 12,
    "from_char": "CREW",
    "to_char": "LIAM",
    "val": 1
  },
  {
    "season": 2,
    "episode": 12,
    "from_char": "DIRECTOR",
    "to_char": "LIAM",
    "val": 1
  },
  {
    "season": 2,
    "episode": 12,
    "from_char": "EKO",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 12,
    "from_char": "HURLEY",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 12,
    "from_char": "HURLEY",
    "to_char": "LIBBY",
    "val": 2
  },
  {
    "season": 2,
    "episode": 12,
    "from_char": "HURLEY",
    "to_char": "MRS. PACE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 12,
    "from_char": "HURLEY",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 2,
    "episode": 12,
    "from_char": "KATE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 2,
    "episode": 12,
    "from_char": "LIAM",
    "to_char": "MRS. PACE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 12,
    "from_char": "LIAM",
    "to_char": "VOICE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 12,
    "from_char": "LIAM",
    "to_char": "YOUNG CHARLIE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 12,
    "from_char": "LIAM",
    "to_char": "YOUNG LIAM",
    "val": 1
  },
  {
    "season": 2,
    "episode": 12,
    "from_char": "LIBBY",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 2,
    "episode": 12,
    "from_char": "LOCKE",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 2,
    "episode": 12,
    "from_char": "MRS. PACE",
    "to_char": "VOICE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 12,
    "from_char": "MRS. PACE",
    "to_char": "YOUNG CHARLIE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 12,
    "from_char": "MRS. PACE",
    "to_char": "YOUNG LIAM",
    "val": 1
  },
  {
    "season": 2,
    "episode": 12,
    "from_char": "VOICE",
    "to_char": "YOUNG CHARLIE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 12,
    "from_char": "VOICE",
    "to_char": "YOUNG LIAM",
    "val": 1
  },
  {
    "season": 2,
    "episode": 12,
    "from_char": "YOUNG CHARLIE",
    "to_char": "YOUNG LIAM",
    "val": 1
  },
  {
    "season": 2,
    "episode": 13,
    "from_char": "ANA",
    "to_char": "CLAIRE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 13,
    "from_char": "ANA",
    "to_char": "JACK",
    "val": 4
  },
  {
    "season": 2,
    "episode": 13,
    "from_char": "ANA",
    "to_char": "JIN",
    "val": 2
  },
  {
    "season": 2,
    "episode": 13,
    "from_char": "ANA",
    "to_char": "KATE",
    "val": 3
  },
  {
    "season": 2,
    "episode": 13,
    "from_char": "ANA",
    "to_char": "LOCKE",
    "val": 2
  },
  {
    "season": 2,
    "episode": 13,
    "from_char": "ANA",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 2,
    "episode": 13,
    "from_char": "ANA",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 13,
    "from_char": "CASSIDY",
    "to_char": "GUY",
    "val": 1
  },
  {
    "season": 2,
    "episode": 13,
    "from_char": "CASSIDY",
    "to_char": "GUY #2",
    "val": 1
  },
  {
    "season": 2,
    "episode": 13,
    "from_char": "CASSIDY",
    "to_char": "SAWYER",
    "val": 5
  },
  {
    "season": 2,
    "episode": 13,
    "from_char": "CHARLIE",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 2,
    "episode": 13,
    "from_char": "CHARLIE",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 2,
    "episode": 13,
    "from_char": "CLAIRE",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 2,
    "episode": 13,
    "from_char": "CLAIRE",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 13,
    "from_char": "CLAIRE",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 13,
    "from_char": "CLAIRE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 2,
    "episode": 13,
    "from_char": "CLAIRE",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 13,
    "from_char": "DIANE",
    "to_char": "GORDY",
    "val": 1
  },
  {
    "season": 2,
    "episode": 13,
    "from_char": "DIANE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 2,
    "episode": 13,
    "from_char": "GORDY",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 2,
    "episode": 13,
    "from_char": "GUY",
    "to_char": "GUY #2",
    "val": 1
  },
  {
    "season": 2,
    "episode": 13,
    "from_char": "GUY",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 2,
    "episode": 13,
    "from_char": "GUY #2",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 2,
    "episode": 13,
    "from_char": "HURLEY",
    "to_char": "RADIO ANNOUNCER",
    "val": 1
  },
  {
    "season": 2,
    "episode": 13,
    "from_char": "HURLEY",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 2,
    "episode": 13,
    "from_char": "JACK",
    "to_char": "JIN",
    "val": 3
  },
  {
    "season": 2,
    "episode": 13,
    "from_char": "JACK",
    "to_char": "KATE",
    "val": 4
  },
  {
    "season": 2,
    "episode": 13,
    "from_char": "JACK",
    "to_char": "LOCKE",
    "val": 4
  },
  {
    "season": 2,
    "episode": 13,
    "from_char": "JACK",
    "to_char": "SAWYER",
    "val": 5
  },
  {
    "season": 2,
    "episode": 13,
    "from_char": "JACK",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 13,
    "from_char": "JIN",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 2,
    "episode": 13,
    "from_char": "JIN",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 13,
    "from_char": "JIN",
    "to_char": "SAWYER",
    "val": 3
  },
  {
    "season": 2,
    "episode": 13,
    "from_char": "JIN",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 13,
    "from_char": "KATE",
    "to_char": "LOCKE",
    "val": 3
  },
  {
    "season": 2,
    "episode": 13,
    "from_char": "KATE",
    "to_char": "SAWYER",
    "val": 5
  },
  {
    "season": 2,
    "episode": 13,
    "from_char": "KATE",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 13,
    "from_char": "LOCKE",
    "to_char": "SAWYER",
    "val": 4
  },
  {
    "season": 2,
    "episode": 13,
    "from_char": "RADIO ANNOUNCER",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 2,
    "episode": 13,
    "from_char": "SAWYER",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 14,
    "from_char": "ANA",
    "to_char": "DANIELLE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 14,
    "from_char": "ANA",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 2,
    "episode": 14,
    "from_char": "CHARLIE",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 2,
    "episode": 14,
    "from_char": "DANIELLE",
    "to_char": "GALE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 14,
    "from_char": "DANIELLE",
    "to_char": "SAYID",
    "val": 4
  },
  {
    "season": 2,
    "episode": 14,
    "from_char": "DANIELLE",
    "to_char": "VOICE",
    "val": 2
  },
  {
    "season": 2,
    "episode": 14,
    "from_char": "GALE",
    "to_char": "JACK",
    "val": 3
  },
  {
    "season": 2,
    "episode": 14,
    "from_char": "GALE",
    "to_char": "LOCKE",
    "val": 3
  },
  {
    "season": 2,
    "episode": 14,
    "from_char": "GALE",
    "to_char": "SAYID",
    "val": 4
  },
  {
    "season": 2,
    "episode": 14,
    "from_char": "GALE",
    "to_char": "VOICE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 14,
    "from_char": "HURLEY",
    "to_char": "SAWYER",
    "val": 3
  },
  {
    "season": 2,
    "episode": 14,
    "from_char": "INMAN",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 2,
    "episode": 14,
    "from_char": "INMAN",
    "to_char": "SGT. AUSTEN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 14,
    "from_char": "JACK",
    "to_char": "LOCKE",
    "val": 5
  },
  {
    "season": 2,
    "episode": 14,
    "from_char": "JACK",
    "to_char": "SAYID",
    "val": 5
  },
  {
    "season": 2,
    "episode": 14,
    "from_char": "LOCKE",
    "to_char": "SAYID",
    "val": 6
  },
  {
    "season": 2,
    "episode": 14,
    "from_char": "SAYID",
    "to_char": "SGT. AUSTEN",
    "val": 3
  },
  {
    "season": 2,
    "episode": 14,
    "from_char": "SAYID",
    "to_char": "SGT. BUCCELLI",
    "val": 2
  },
  {
    "season": 2,
    "episode": 14,
    "from_char": "SAYID",
    "to_char": "TARIQ",
    "val": 3
  },
  {
    "season": 2,
    "episode": 14,
    "from_char": "SAYID",
    "to_char": "U.S. SOLDIER #1",
    "val": 1
  },
  {
    "season": 2,
    "episode": 14,
    "from_char": "SAYID",
    "to_char": "U.S. SOLDIER #2",
    "val": 1
  },
  {
    "season": 2,
    "episode": 14,
    "from_char": "SAYID",
    "to_char": "VOICE",
    "val": 2
  },
  {
    "season": 2,
    "episode": 14,
    "from_char": "SGT. AUSTEN",
    "to_char": "SGT. BUCCELLI",
    "val": 1
  },
  {
    "season": 2,
    "episode": 14,
    "from_char": "SGT. AUSTEN",
    "to_char": "TARIQ",
    "val": 1
  },
  {
    "season": 2,
    "episode": 14,
    "from_char": "SGT. BUCCELLI",
    "to_char": "TARIQ",
    "val": 1
  },
  {
    "season": 2,
    "episode": 14,
    "from_char": "SGT. BUCCELLI",
    "to_char": "U.S. SOLDIER #1",
    "val": 1
  },
  {
    "season": 2,
    "episode": 14,
    "from_char": "SGT. BUCCELLI",
    "to_char": "U.S. SOLDIER #2",
    "val": 1
  },
  {
    "season": 2,
    "episode": 14,
    "from_char": "TARIQ",
    "to_char": "U.S. SOLDIER #1",
    "val": 1
  },
  {
    "season": 2,
    "episode": 14,
    "from_char": "TARIQ",
    "to_char": "U.S. SOLDIER #2",
    "val": 1
  },
  {
    "season": 2,
    "episode": 14,
    "from_char": "U.S. SOLDIER #1",
    "to_char": "U.S. SOLDIER #2",
    "val": 1
  },
  {
    "season": 2,
    "episode": 15,
    "from_char": "CLAIRE",
    "to_char": "DANIELLE",
    "val": 8
  },
  {
    "season": 2,
    "episode": 15,
    "from_char": "CLAIRE",
    "to_char": "ETHAN",
    "val": 4
  },
  {
    "season": 2,
    "episode": 15,
    "from_char": "CLAIRE",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 2,
    "episode": 15,
    "from_char": "CLAIRE",
    "to_char": "JACK",
    "val": 2
  },
  {
    "season": 2,
    "episode": 15,
    "from_char": "CLAIRE",
    "to_char": "KATE",
    "val": 11
  },
  {
    "season": 2,
    "episode": 15,
    "from_char": "CLAIRE",
    "to_char": "LIBBY",
    "val": 4
  },
  {
    "season": 2,
    "episode": 15,
    "from_char": "CLAIRE",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 15,
    "from_char": "CLAIRE",
    "to_char": "MR. FRIENDLY",
    "val": 1
  },
  {
    "season": 2,
    "episode": 15,
    "from_char": "CLAIRE",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 2,
    "episode": 15,
    "from_char": "CLAIRE",
    "to_char": "VOICE",
    "val": 2
  },
  {
    "season": 2,
    "episode": 15,
    "from_char": "CLAIRE",
    "to_char": "YOUNG GIRL",
    "val": 1
  },
  {
    "season": 2,
    "episode": 15,
    "from_char": "DANIELLE",
    "to_char": "ETHAN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 15,
    "from_char": "DANIELLE",
    "to_char": "KATE",
    "val": 5
  },
  {
    "season": 2,
    "episode": 15,
    "from_char": "EKO",
    "to_char": "GALE",
    "val": 2
  },
  {
    "season": 2,
    "episode": 15,
    "from_char": "EKO",
    "to_char": "JACK",
    "val": 3
  },
  {
    "season": 2,
    "episode": 15,
    "from_char": "EKO",
    "to_char": "LOCKE",
    "val": 2
  },
  {
    "season": 2,
    "episode": 15,
    "from_char": "ETHAN",
    "to_char": "MR. FRIENDLY",
    "val": 1
  },
  {
    "season": 2,
    "episode": 15,
    "from_char": "ETHAN",
    "to_char": "VOICE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 15,
    "from_char": "GALE",
    "to_char": "JACK",
    "val": 3
  },
  {
    "season": 2,
    "episode": 15,
    "from_char": "GALE",
    "to_char": "LOCKE",
    "val": 4
  },
  {
    "season": 2,
    "episode": 15,
    "from_char": "HURLEY",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 15,
    "from_char": "HURLEY",
    "to_char": "LIBBY",
    "val": 1
  },
  {
    "season": 2,
    "episode": 15,
    "from_char": "JACK",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 15,
    "from_char": "JACK",
    "to_char": "LOCKE",
    "val": 5
  },
  {
    "season": 2,
    "episode": 15,
    "from_char": "KATE",
    "to_char": "LIBBY",
    "val": 3
  },
  {
    "season": 2,
    "episode": 15,
    "from_char": "KATE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 2,
    "episode": 15,
    "from_char": "KATE",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 15,
    "from_char": "MR. FRIENDLY",
    "to_char": "VOICE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 16,
    "from_char": "ANA",
    "to_char": "CHARLIE",
    "val": 4
  },
  {
    "season": 2,
    "episode": 16,
    "from_char": "ANA",
    "to_char": "GALE",
    "val": 2
  },
  {
    "season": 2,
    "episode": 16,
    "from_char": "ANA",
    "to_char": "JACK",
    "val": 2
  },
  {
    "season": 2,
    "episode": 16,
    "from_char": "ANA",
    "to_char": "LOCKE",
    "val": 3
  },
  {
    "season": 2,
    "episode": 16,
    "from_char": "ANA",
    "to_char": "SAYID",
    "val": 5
  },
  {
    "season": 2,
    "episode": 16,
    "from_char": "BERNARD",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 16,
    "from_char": "BERNARD",
    "to_char": "ROSE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 16,
    "from_char": "BERNARD",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 2,
    "episode": 16,
    "from_char": "BERNARD",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 16,
    "from_char": "CHARLIE",
    "to_char": "SAYID",
    "val": 4
  },
  {
    "season": 2,
    "episode": 16,
    "from_char": "DR. KIM",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 16,
    "from_char": "DR. KIM",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 2,
    "episode": 16,
    "from_char": "GALE",
    "to_char": "JACK",
    "val": 2
  },
  {
    "season": 2,
    "episode": 16,
    "from_char": "GALE",
    "to_char": "LOCKE",
    "val": 2
  },
  {
    "season": 2,
    "episode": 16,
    "from_char": "HURLEY",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 16,
    "from_char": "JACK",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 16,
    "from_char": "JACK",
    "to_char": "LOCKE",
    "val": 4
  },
  {
    "season": 2,
    "episode": 16,
    "from_char": "JACK",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 16,
    "from_char": "JAE",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 2,
    "episode": 16,
    "from_char": "JIN",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 2,
    "episode": 16,
    "from_char": "JIN",
    "to_char": "SUN",
    "val": 6
  },
  {
    "season": 2,
    "episode": 16,
    "from_char": "KATE",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 2,
    "episode": 16,
    "from_char": "ROSE",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 16,
    "from_char": "SAWYER",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 17,
    "from_char": "ANA",
    "to_char": "CHARLIE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 17,
    "from_char": "ANA",
    "to_char": "GALE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 17,
    "from_char": "ANA",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 2,
    "episode": 17,
    "from_char": "ANA",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 17,
    "from_char": "ANA",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 2,
    "episode": 17,
    "from_char": "BANE",
    "to_char": "HELEN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 17,
    "from_char": "BANE",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 17,
    "from_char": "CHARLIE",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 2,
    "episode": 17,
    "from_char": "CHARLIE",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 17,
    "from_char": "CHARLIE",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 2,
    "episode": 17,
    "from_char": "CLAIRE",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 2,
    "episode": 17,
    "from_char": "CLAIRE",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 2,
    "episode": 17,
    "from_char": "CLAIRE",
    "to_char": "LIBBY",
    "val": 1
  },
  {
    "season": 2,
    "episode": 17,
    "from_char": "COOPER",
    "to_char": "HELEN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 17,
    "from_char": "COOPER",
    "to_char": "LOCKE",
    "val": 3
  },
  {
    "season": 2,
    "episode": 17,
    "from_char": "COOPER",
    "to_char": "NADIA",
    "val": 1
  },
  {
    "season": 2,
    "episode": 17,
    "from_char": "FATHER CHUCK",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 17,
    "from_char": "GALE",
    "to_char": "JACK",
    "val": 2
  },
  {
    "season": 2,
    "episode": 17,
    "from_char": "GALE",
    "to_char": "LOCKE",
    "val": 9
  },
  {
    "season": 2,
    "episode": 17,
    "from_char": "GALE",
    "to_char": "LOUDSPEAKER VOICE",
    "val": 2
  },
  {
    "season": 2,
    "episode": 17,
    "from_char": "GALE",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 2,
    "episode": 17,
    "from_char": "HELEN",
    "to_char": "LOCKE",
    "val": 4
  },
  {
    "season": 2,
    "episode": 17,
    "from_char": "HURLEY",
    "to_char": "JACK",
    "val": 4
  },
  {
    "season": 2,
    "episode": 17,
    "from_char": "HURLEY",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 2,
    "episode": 17,
    "from_char": "HURLEY",
    "to_char": "LIBBY",
    "val": 2
  },
  {
    "season": 2,
    "episode": 17,
    "from_char": "HURLEY",
    "to_char": "SAWYER",
    "val": 3
  },
  {
    "season": 2,
    "episode": 17,
    "from_char": "JACK",
    "to_char": "KATE",
    "val": 3
  },
  {
    "season": 2,
    "episode": 17,
    "from_char": "JACK",
    "to_char": "LIBBY",
    "val": 2
  },
  {
    "season": 2,
    "episode": 17,
    "from_char": "JACK",
    "to_char": "LOCKE",
    "val": 2
  },
  {
    "season": 2,
    "episode": 17,
    "from_char": "JACK",
    "to_char": "SAWYER",
    "val": 4
  },
  {
    "season": 2,
    "episode": 17,
    "from_char": "JACK",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 2,
    "episode": 17,
    "from_char": "KATE",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 2,
    "episode": 17,
    "from_char": "LIBBY",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 2,
    "episode": 17,
    "from_char": "LOCKE",
    "to_char": "LOUDSPEAKER VOICE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 17,
    "from_char": "LOCKE",
    "to_char": "NADIA",
    "val": 1
  },
  {
    "season": 2,
    "episode": 17,
    "from_char": "LOCKE",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 2,
    "episode": 18,
    "from_char": "ANA",
    "to_char": "GALE",
    "val": 2
  },
  {
    "season": 2,
    "episode": 18,
    "from_char": "ANA",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 2,
    "episode": 18,
    "from_char": "ANA",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 18,
    "from_char": "ANA",
    "to_char": "LOCKE",
    "val": 2
  },
  {
    "season": 2,
    "episode": 18,
    "from_char": "ANA",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 2,
    "episode": 18,
    "from_char": "CHARLIE",
    "to_char": "EKO",
    "val": 2
  },
  {
    "season": 2,
    "episode": 18,
    "from_char": "CHARLIE",
    "to_char": "HURLEY",
    "val": 2
  },
  {
    "season": 2,
    "episode": 18,
    "from_char": "CHARLIE",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 18,
    "from_char": "CHARLIE",
    "to_char": "LIBBY",
    "val": 1
  },
  {
    "season": 2,
    "episode": 18,
    "from_char": "CHARLIE",
    "to_char": "REDSHIRT #1",
    "val": 1
  },
  {
    "season": 2,
    "episode": 18,
    "from_char": "CHARLIE",
    "to_char": "REDSHIRT #2",
    "val": 1
  },
  {
    "season": 2,
    "episode": 18,
    "from_char": "CHARLIE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 2,
    "episode": 18,
    "from_char": "CHARLIE",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 18,
    "from_char": "DAVE",
    "to_char": "DR. BROOKS",
    "val": 1
  },
  {
    "season": 2,
    "episode": 18,
    "from_char": "DAVE",
    "to_char": "HURLEY",
    "val": 6
  },
  {
    "season": 2,
    "episode": 18,
    "from_char": "DAVE",
    "to_char": "LENNY",
    "val": 1
  },
  {
    "season": 2,
    "episode": 18,
    "from_char": "DAVE",
    "to_char": "NURSE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 18,
    "from_char": "DR. BROOKS",
    "to_char": "HURLEY",
    "val": 4
  },
  {
    "season": 2,
    "episode": 18,
    "from_char": "DR. BROOKS",
    "to_char": "LENNY",
    "val": 1
  },
  {
    "season": 2,
    "episode": 18,
    "from_char": "DR. BROOKS",
    "to_char": "NURSE",
    "val": 2
  },
  {
    "season": 2,
    "episode": 18,
    "from_char": "EKO",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 2,
    "episode": 18,
    "from_char": "GALE",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 2,
    "episode": 18,
    "from_char": "GALE",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 18,
    "from_char": "GALE",
    "to_char": "LOCKE",
    "val": 2
  },
  {
    "season": 2,
    "episode": 18,
    "from_char": "GALE",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 2,
    "episode": 18,
    "from_char": "HURLEY",
    "to_char": "JIN",
    "val": 2
  },
  {
    "season": 2,
    "episode": 18,
    "from_char": "HURLEY",
    "to_char": "LENNY",
    "val": 1
  },
  {
    "season": 2,
    "episode": 18,
    "from_char": "HURLEY",
    "to_char": "LIBBY",
    "val": 5
  },
  {
    "season": 2,
    "episode": 18,
    "from_char": "HURLEY",
    "to_char": "NURSE",
    "val": 2
  },
  {
    "season": 2,
    "episode": 18,
    "from_char": "HURLEY",
    "to_char": "REDSHIRT #1",
    "val": 1
  },
  {
    "season": 2,
    "episode": 18,
    "from_char": "HURLEY",
    "to_char": "REDSHIRT #2",
    "val": 1
  },
  {
    "season": 2,
    "episode": 18,
    "from_char": "HURLEY",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 2,
    "episode": 18,
    "from_char": "HURLEY",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 2,
    "episode": 18,
    "from_char": "JACK",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 18,
    "from_char": "JACK",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 18,
    "from_char": "JACK",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 2,
    "episode": 18,
    "from_char": "JIN",
    "to_char": "LIBBY",
    "val": 1
  },
  {
    "season": 2,
    "episode": 18,
    "from_char": "JIN",
    "to_char": "REDSHIRT #1",
    "val": 1
  },
  {
    "season": 2,
    "episode": 18,
    "from_char": "JIN",
    "to_char": "REDSHIRT #2",
    "val": 1
  },
  {
    "season": 2,
    "episode": 18,
    "from_char": "JIN",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 2,
    "episode": 18,
    "from_char": "JIN",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 2,
    "episode": 18,
    "from_char": "KATE",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 18,
    "from_char": "KATE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 2,
    "episode": 18,
    "from_char": "KATE",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 2,
    "episode": 18,
    "from_char": "LENNY",
    "to_char": "NURSE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 18,
    "from_char": "LIBBY",
    "to_char": "REDSHIRT #1",
    "val": 1
  },
  {
    "season": 2,
    "episode": 18,
    "from_char": "LIBBY",
    "to_char": "REDSHIRT #2",
    "val": 1
  },
  {
    "season": 2,
    "episode": 18,
    "from_char": "LIBBY",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 2,
    "episode": 18,
    "from_char": "LIBBY",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 18,
    "from_char": "LOCKE",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 2,
    "episode": 18,
    "from_char": "REDSHIRT #1",
    "to_char": "REDSHIRT #2",
    "val": 1
  },
  {
    "season": 2,
    "episode": 18,
    "from_char": "REDSHIRT #1",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 2,
    "episode": 18,
    "from_char": "REDSHIRT #1",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 18,
    "from_char": "REDSHIRT #2",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 2,
    "episode": 18,
    "from_char": "REDSHIRT #2",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 18,
    "from_char": "SAWYER",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 2,
    "episode": 19,
    "from_char": "ANA",
    "to_char": "GALE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 19,
    "from_char": "ANA",
    "to_char": "JACK",
    "val": 2
  },
  {
    "season": 2,
    "episode": 19,
    "from_char": "ANA",
    "to_char": "LOCKE",
    "val": 2
  },
  {
    "season": 2,
    "episode": 19,
    "from_char": "AUSSIE WOMAN",
    "to_char": "ISAAC",
    "val": 1
  },
  {
    "season": 2,
    "episode": 19,
    "from_char": "AUSSIE WOMAN",
    "to_char": "ROSE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 19,
    "from_char": "BERNARD",
    "to_char": "CHARLIE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 19,
    "from_char": "BERNARD",
    "to_char": "CLAIRE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 19,
    "from_char": "BERNARD",
    "to_char": "EKO",
    "val": 1
  },
  {
    "season": 2,
    "episode": 19,
    "from_char": "BERNARD",
    "to_char": "HURLEY",
    "val": 3
  },
  {
    "season": 2,
    "episode": 19,
    "from_char": "BERNARD",
    "to_char": "JIN",
    "val": 2
  },
  {
    "season": 2,
    "episode": 19,
    "from_char": "BERNARD",
    "to_char": "ROSE",
    "val": 10
  },
  {
    "season": 2,
    "episode": 19,
    "from_char": "BERNARD",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 2,
    "episode": 19,
    "from_char": "CHARLIE",
    "to_char": "EKO",
    "val": 1
  },
  {
    "season": 2,
    "episode": 19,
    "from_char": "CLAIRE",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 2,
    "episode": 19,
    "from_char": "CLAIRE",
    "to_char": "ROSE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 19,
    "from_char": "GALE",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 2,
    "episode": 19,
    "from_char": "HURLEY",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 19,
    "from_char": "HURLEY",
    "to_char": "ROSE",
    "val": 2
  },
  {
    "season": 2,
    "episode": 19,
    "from_char": "ISAAC",
    "to_char": "ROSE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 19,
    "from_char": "JACK",
    "to_char": "KATE",
    "val": 5
  },
  {
    "season": 2,
    "episode": 19,
    "from_char": "JACK",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 2,
    "episode": 19,
    "from_char": "KATE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 2,
    "episode": 19,
    "from_char": "LOCKE",
    "to_char": "ROSE",
    "val": 2
  },
  {
    "season": 2,
    "episode": 19,
    "from_char": "ROSE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 2,
    "episode": 20,
    "from_char": "ANA",
    "to_char": "CAPTAIN",
    "val": 3
  },
  {
    "season": 2,
    "episode": 20,
    "from_char": "ANA",
    "to_char": "CHRISTIAN",
    "val": 4
  },
  {
    "season": 2,
    "episode": 20,
    "from_char": "ANA",
    "to_char": "GALE",
    "val": 2
  },
  {
    "season": 2,
    "episode": 20,
    "from_char": "ANA",
    "to_char": "JACK",
    "val": 3
  },
  {
    "season": 2,
    "episode": 20,
    "from_char": "ANA",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 2,
    "episode": 20,
    "from_char": "ANA",
    "to_char": "LIBBY",
    "val": 2
  },
  {
    "season": 2,
    "episode": 20,
    "from_char": "ANA",
    "to_char": "LINDSEY",
    "val": 1
  },
  {
    "season": 2,
    "episode": 20,
    "from_char": "ANA",
    "to_char": "LOCKE",
    "val": 3
  },
  {
    "season": 2,
    "episode": 20,
    "from_char": "ANA",
    "to_char": "MICHAEL",
    "val": 2
  },
  {
    "season": 2,
    "episode": 20,
    "from_char": "ANA",
    "to_char": "PARTNER",
    "val": 1
  },
  {
    "season": 2,
    "episode": 20,
    "from_char": "ANA",
    "to_char": "SAWYER",
    "val": 4
  },
  {
    "season": 2,
    "episode": 20,
    "from_char": "CAPTAIN",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 2,
    "episode": 20,
    "from_char": "CAPTAIN",
    "to_char": "PARTNER",
    "val": 1
  },
  {
    "season": 2,
    "episode": 20,
    "from_char": "CHRISTIAN",
    "to_char": "LINDSEY",
    "val": 1
  },
  {
    "season": 2,
    "episode": 20,
    "from_char": "CHRISTIAN",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 2,
    "episode": 20,
    "from_char": "GALE",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 2,
    "episode": 20,
    "from_char": "GALE",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 20,
    "from_char": "GALE",
    "to_char": "LOCKE",
    "val": 2
  },
  {
    "season": 2,
    "episode": 20,
    "from_char": "HURLEY",
    "to_char": "LIBBY",
    "val": 2
  },
  {
    "season": 2,
    "episode": 20,
    "from_char": "HURLEY",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 2,
    "episode": 20,
    "from_char": "JACK",
    "to_char": "KATE",
    "val": 6
  },
  {
    "season": 2,
    "episode": 20,
    "from_char": "JACK",
    "to_char": "LOCKE",
    "val": 5
  },
  {
    "season": 2,
    "episode": 20,
    "from_char": "JACK",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 2,
    "episode": 20,
    "from_char": "JACK",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 2,
    "episode": 20,
    "from_char": "KATE",
    "to_char": "LOCKE",
    "val": 5
  },
  {
    "season": 2,
    "episode": 20,
    "from_char": "KATE",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 2,
    "episode": 20,
    "from_char": "KATE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 2,
    "episode": 20,
    "from_char": "LIBBY",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 2,
    "episode": 20,
    "from_char": "LOCKE",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 2,
    "episode": 20,
    "from_char": "LOCKE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 2,
    "episode": 21,
    "from_char": "AGENT",
    "to_char": "CHARLOTTE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 21,
    "from_char": "AGENT",
    "to_char": "EKO",
    "val": 1
  },
  {
    "season": 2,
    "episode": 21,
    "from_char": "AGENT",
    "to_char": "LIBBY",
    "val": 1
  },
  {
    "season": 2,
    "episode": 21,
    "from_char": "ANA",
    "to_char": "EKO",
    "val": 1
  },
  {
    "season": 2,
    "episode": 21,
    "from_char": "CALDWELL",
    "to_char": "EKO",
    "val": 2
  },
  {
    "season": 2,
    "episode": 21,
    "from_char": "CALDWELL",
    "to_char": "MONSIGNOR",
    "val": 1
  },
  {
    "season": 2,
    "episode": 21,
    "from_char": "CHARLIE",
    "to_char": "EKO",
    "val": 1
  },
  {
    "season": 2,
    "episode": 21,
    "from_char": "CHARLOTTE",
    "to_char": "EKO",
    "val": 1
  },
  {
    "season": 2,
    "episode": 21,
    "from_char": "CHARLOTTE",
    "to_char": "LIBBY",
    "val": 1
  },
  {
    "season": 2,
    "episode": 21,
    "from_char": "EKO",
    "to_char": "JACK",
    "val": 2
  },
  {
    "season": 2,
    "episode": 21,
    "from_char": "EKO",
    "to_char": "JOYCE",
    "val": 2
  },
  {
    "season": 2,
    "episode": 21,
    "from_char": "EKO",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 2,
    "episode": 21,
    "from_char": "EKO",
    "to_char": "LIBBY",
    "val": 1
  },
  {
    "season": 2,
    "episode": 21,
    "from_char": "EKO",
    "to_char": "LOCKE",
    "val": 9
  },
  {
    "season": 2,
    "episode": 21,
    "from_char": "EKO",
    "to_char": "MALKIN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 21,
    "from_char": "EKO",
    "to_char": "MCVAY",
    "val": 1
  },
  {
    "season": 2,
    "episode": 21,
    "from_char": "EKO",
    "to_char": "MICHAEL",
    "val": 2
  },
  {
    "season": 2,
    "episode": 21,
    "from_char": "EKO",
    "to_char": "MONSIGNOR",
    "val": 2
  },
  {
    "season": 2,
    "episode": 21,
    "from_char": "EKO",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 2,
    "episode": 21,
    "from_char": "EKO",
    "to_char": "VALERIE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 21,
    "from_char": "EKO",
    "to_char": "WICKMAN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 21,
    "from_char": "EKO",
    "to_char": "YEMI",
    "val": 2
  },
  {
    "season": 2,
    "episode": 21,
    "from_char": "HURLEY",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 2,
    "episode": 21,
    "from_char": "HURLEY",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 21,
    "from_char": "HURLEY",
    "to_char": "LIBBY",
    "val": 1
  },
  {
    "season": 2,
    "episode": 21,
    "from_char": "HURLEY",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 2,
    "episode": 21,
    "from_char": "HURLEY",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 2,
    "episode": 21,
    "from_char": "JACK",
    "to_char": "KATE",
    "val": 4
  },
  {
    "season": 2,
    "episode": 21,
    "from_char": "JACK",
    "to_char": "LIBBY",
    "val": 1
  },
  {
    "season": 2,
    "episode": 21,
    "from_char": "JACK",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 21,
    "from_char": "JACK",
    "to_char": "MICHAEL",
    "val": 3
  },
  {
    "season": 2,
    "episode": 21,
    "from_char": "JACK",
    "to_char": "SAWYER",
    "val": 3
  },
  {
    "season": 2,
    "episode": 21,
    "from_char": "JOYCE",
    "to_char": "MALKIN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 21,
    "from_char": "JOYCE",
    "to_char": "MONSIGNOR",
    "val": 1
  },
  {
    "season": 2,
    "episode": 21,
    "from_char": "KATE",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 21,
    "from_char": "KATE",
    "to_char": "MICHAEL",
    "val": 3
  },
  {
    "season": 2,
    "episode": 21,
    "from_char": "KATE",
    "to_char": "SAWYER",
    "val": 4
  },
  {
    "season": 2,
    "episode": 21,
    "from_char": "LOCKE",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 2,
    "episode": 21,
    "from_char": "LOCKE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 2,
    "episode": 21,
    "from_char": "LOCKE",
    "to_char": "WICKMAN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 21,
    "from_char": "LOCKE",
    "to_char": "YEMI",
    "val": 1
  },
  {
    "season": 2,
    "episode": 21,
    "from_char": "MCVAY",
    "to_char": "VALERIE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 21,
    "from_char": "MICHAEL",
    "to_char": "SAWYER",
    "val": 3
  },
  {
    "season": 2,
    "episode": 22,
    "from_char": "ALEX",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 2,
    "episode": 22,
    "from_char": "ALEX",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 22,
    "from_char": "ALEX",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 2,
    "episode": 22,
    "from_char": "ALEX",
    "to_char": "PICKETT",
    "val": 1
  },
  {
    "season": 2,
    "episode": 22,
    "from_char": "ALEX",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 2,
    "episode": 22,
    "from_char": "ALEX",
    "to_char": "TOM",
    "val": 1
  },
  {
    "season": 2,
    "episode": 22,
    "from_char": "CHARLIE",
    "to_char": "CLAIRE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 22,
    "from_char": "CHARLIE",
    "to_char": "EKO",
    "val": 1
  },
  {
    "season": 2,
    "episode": 22,
    "from_char": "CHARLIE",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 22,
    "from_char": "CHARLIE",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 2,
    "episode": 22,
    "from_char": "CHARLIE",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 22,
    "from_char": "CLAIRE",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 22,
    "from_char": "CLAIRE",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 2,
    "episode": 22,
    "from_char": "CLAIRE",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 22,
    "from_char": "EKO",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 2,
    "episode": 22,
    "from_char": "EKO",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 2,
    "episode": 22,
    "from_char": "EKO",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 2,
    "episode": 22,
    "from_char": "HURLEY",
    "to_char": "JACK",
    "val": 2
  },
  {
    "season": 2,
    "episode": 22,
    "from_char": "HURLEY",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 2,
    "episode": 22,
    "from_char": "HURLEY",
    "to_char": "MICHAEL",
    "val": 2
  },
  {
    "season": 2,
    "episode": 22,
    "from_char": "HURLEY",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 2,
    "episode": 22,
    "from_char": "HURLEY",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 22,
    "from_char": "JACK",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 22,
    "from_char": "JACK",
    "to_char": "LOCKE",
    "val": 2
  },
  {
    "season": 2,
    "episode": 22,
    "from_char": "JACK",
    "to_char": "MICHAEL",
    "val": 5
  },
  {
    "season": 2,
    "episode": 22,
    "from_char": "JACK",
    "to_char": "MONITOR",
    "val": 1
  },
  {
    "season": 2,
    "episode": 22,
    "from_char": "JACK",
    "to_char": "PICKETT",
    "val": 1
  },
  {
    "season": 2,
    "episode": 22,
    "from_char": "JACK",
    "to_char": "SAWYER",
    "val": 4
  },
  {
    "season": 2,
    "episode": 22,
    "from_char": "JACK",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 2,
    "episode": 22,
    "from_char": "JACK",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 22,
    "from_char": "JACK",
    "to_char": "TOM",
    "val": 1
  },
  {
    "season": 2,
    "episode": 22,
    "from_char": "JIN",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 2,
    "episode": 22,
    "from_char": "JIN",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 22,
    "from_char": "KATE",
    "to_char": "MICHAEL",
    "val": 2
  },
  {
    "season": 2,
    "episode": 22,
    "from_char": "KATE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 2,
    "episode": 22,
    "from_char": "LOCKE",
    "to_char": "MICHAEL",
    "val": 2
  },
  {
    "season": 2,
    "episode": 22,
    "from_char": "LOCKE",
    "to_char": "MONITOR",
    "val": 1
  },
  {
    "season": 2,
    "episode": 22,
    "from_char": "LOCKE",
    "to_char": "PICKETT",
    "val": 1
  },
  {
    "season": 2,
    "episode": 22,
    "from_char": "LOCKE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 2,
    "episode": 22,
    "from_char": "LOCKE",
    "to_char": "TOM",
    "val": 1
  },
  {
    "season": 2,
    "episode": 22,
    "from_char": "MICHAEL",
    "to_char": "MONITOR",
    "val": 1
  },
  {
    "season": 2,
    "episode": 22,
    "from_char": "MICHAEL",
    "to_char": "MR. FRIENDLY",
    "val": 1
  },
  {
    "season": 2,
    "episode": 22,
    "from_char": "MICHAEL",
    "to_char": "MS. KLUGH",
    "val": 2
  },
  {
    "season": 2,
    "episode": 22,
    "from_char": "MICHAEL",
    "to_char": "PICKETT",
    "val": 3
  },
  {
    "season": 2,
    "episode": 22,
    "from_char": "MICHAEL",
    "to_char": "SAWYER",
    "val": 3
  },
  {
    "season": 2,
    "episode": 22,
    "from_char": "MICHAEL",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 2,
    "episode": 22,
    "from_char": "MICHAEL",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 22,
    "from_char": "MICHAEL",
    "to_char": "TOM",
    "val": 2
  },
  {
    "season": 2,
    "episode": 22,
    "from_char": "MICHAEL",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 2,
    "episode": 22,
    "from_char": "MR. FRIENDLY",
    "to_char": "MS. KLUGH",
    "val": 1
  },
  {
    "season": 2,
    "episode": 22,
    "from_char": "MR. FRIENDLY",
    "to_char": "PICKETT",
    "val": 1
  },
  {
    "season": 2,
    "episode": 22,
    "from_char": "MS. KLUGH",
    "to_char": "PICKETT",
    "val": 1
  },
  {
    "season": 2,
    "episode": 22,
    "from_char": "MS. KLUGH",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 2,
    "episode": 22,
    "from_char": "PICKETT",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 2,
    "episode": 22,
    "from_char": "PICKETT",
    "to_char": "TOM",
    "val": 2
  },
  {
    "season": 2,
    "episode": 22,
    "from_char": "SAWYER",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 2,
    "episode": 22,
    "from_char": "SAWYER",
    "to_char": "TOM",
    "val": 1
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "BERNARD",
    "to_char": "CHARLIE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "CHARLIE",
    "to_char": "CLAIRE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "CHARLIE",
    "to_char": "DESMOND",
    "val": 5
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "CHARLIE",
    "to_char": "EKO",
    "val": 5
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "CHARLIE",
    "to_char": "HURLEY",
    "val": 2
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "CHARLIE",
    "to_char": "INMAN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "CHARLIE",
    "to_char": "JACK",
    "val": 2
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "CHARLIE",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "CHARLIE",
    "to_char": "LOCKE",
    "val": 5
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "CHARLIE",
    "to_char": "PENELOPE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "CHARLIE",
    "to_char": "REDSHIRT",
    "val": 1
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "CHARLIE",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "CHARLIE",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "CHARLIE",
    "to_char": "VOICE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "CLAIRE",
    "to_char": "DESMOND",
    "val": 1
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "DESMOND",
    "to_char": "EKO",
    "val": 5
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "DESMOND",
    "to_char": "GALE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "DESMOND",
    "to_char": "HURLEY",
    "val": 4
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "DESMOND",
    "to_char": "INMAN",
    "val": 5
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "DESMOND",
    "to_char": "JACK",
    "val": 4
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "DESMOND",
    "to_char": "KATE",
    "val": 4
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "DESMOND",
    "to_char": "LIBBY",
    "val": 2
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "DESMOND",
    "to_char": "LOCKE",
    "val": 11
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "DESMOND",
    "to_char": "MARVIN CANDLE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "DESMOND",
    "to_char": "MASTER SERGEANT",
    "val": 1
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "DESMOND",
    "to_char": "MICHAEL",
    "val": 3
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "DESMOND",
    "to_char": "MR. FRIENDLY",
    "val": 1
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "DESMOND",
    "to_char": "MS. KLUGH",
    "val": 1
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "DESMOND",
    "to_char": "PENELOPE",
    "val": 3
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "DESMOND",
    "to_char": "REDSHIRT",
    "val": 1
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "DESMOND",
    "to_char": "SAWYER",
    "val": 5
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "DESMOND",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "DESMOND",
    "to_char": "VOICE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "DESMOND",
    "to_char": "WIDMORE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "EKO",
    "to_char": "INMAN",
    "val": 1
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "EKO",
    "to_char": "LOCKE",
    "val": 6
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "EKO",
    "to_char": "PENELOPE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "GALE",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "GALE",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "GALE",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "GALE",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "GALE",
    "to_char": "MR. FRIENDLY",
    "val": 1
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "GALE",
    "to_char": "MS. KLUGH",
    "val": 2
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "GALE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "GALE",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "HURLEY",
    "to_char": "JACK",
    "val": 6
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "HURLEY",
    "to_char": "KATE",
    "val": 5
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "HURLEY",
    "to_char": "LOCKE",
    "val": 3
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "HURLEY",
    "to_char": "MICHAEL",
    "val": 5
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "HURLEY",
    "to_char": "MS. KLUGH",
    "val": 1
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "HURLEY",
    "to_char": "REDSHIRT",
    "val": 1
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "HURLEY",
    "to_char": "SAWYER",
    "val": 6
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "HURLEY",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "HURLEY",
    "to_char": "VOICE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "HURLEY",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "INMAN",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "INMAN",
    "to_char": "MARVIN CANDLE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "JACK",
    "to_char": "KATE",
    "val": 5
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "JACK",
    "to_char": "LOCKE",
    "val": 3
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "JACK",
    "to_char": "MICHAEL",
    "val": 4
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "JACK",
    "to_char": "REDSHIRT",
    "val": 1
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "JACK",
    "to_char": "SAWYER",
    "val": 6
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "JACK",
    "to_char": "SAYID",
    "val": 3
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "JACK",
    "to_char": "VOICE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "JIN",
    "to_char": "SAYID",
    "val": 3
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "JIN",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "KATE",
    "to_char": "LOCKE",
    "val": 3
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "KATE",
    "to_char": "MICHAEL",
    "val": 3
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "KATE",
    "to_char": "MR. FRIENDLY",
    "val": 1
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "KATE",
    "to_char": "MS. KLUGH",
    "val": 1
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "KATE",
    "to_char": "REDSHIRT",
    "val": 1
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "KATE",
    "to_char": "SAWYER",
    "val": 6
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "KATE",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "KATE",
    "to_char": "VOICE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "LOCKE",
    "to_char": "MICHAEL",
    "val": 2
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "LOCKE",
    "to_char": "MR. FRIENDLY",
    "val": 1
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "LOCKE",
    "to_char": "MS. KLUGH",
    "val": 1
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "LOCKE",
    "to_char": "PENELOPE",
    "val": 2
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "LOCKE",
    "to_char": "SAWYER",
    "val": 4
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "MAN #1",
    "to_char": "MAN #2",
    "val": 1
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "MAN #1",
    "to_char": "PENELOPE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "MAN #2",
    "to_char": "PENELOPE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "MICHAEL",
    "to_char": "MS. KLUGH",
    "val": 1
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "MICHAEL",
    "to_char": "SAWYER",
    "val": 4
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "MICHAEL",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "MICHAEL",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "MR. FRIENDLY",
    "to_char": "MS. KLUGH",
    "val": 1
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "MR. FRIENDLY",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "MS. KLUGH",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "MS. KLUGH",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "REDSHIRT",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "REDSHIRT",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "REDSHIRT",
    "to_char": "VOICE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "SAWYER",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "SAWYER",
    "to_char": "VOICE",
    "val": 1
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "SAYID",
    "to_char": "SUN",
    "val": 3
  },
  {
    "season": 2,
    "episode": 23,
    "from_char": "SAYID",
    "to_char": "VOICE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 1,
    "from_char": "ADAM",
    "to_char": "AMELIA",
    "val": 1
  },
  {
    "season": 3,
    "episode": 1,
    "from_char": "ADAM",
    "to_char": "GALE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 1,
    "from_char": "ADAM",
    "to_char": "GOODWIN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 1,
    "from_char": "ADAM",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 3,
    "episode": 1,
    "from_char": "AMELIA",
    "to_char": "GALE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 1,
    "from_char": "AMELIA",
    "to_char": "GOODWIN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 1,
    "from_char": "AMELIA",
    "to_char": "JULIET",
    "val": 2
  },
  {
    "season": 3,
    "episode": 1,
    "from_char": "AMELIA",
    "to_char": "WORKER GUY",
    "val": 1
  },
  {
    "season": 3,
    "episode": 1,
    "from_char": "CHRISTIAN",
    "to_char": "JACK",
    "val": 2
  },
  {
    "season": 3,
    "episode": 1,
    "from_char": "CHRISTIAN",
    "to_char": "MODERATOR",
    "val": 1
  },
  {
    "season": 3,
    "episode": 1,
    "from_char": "GALE",
    "to_char": "GOODWIN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 1,
    "from_char": "GALE",
    "to_char": "JACK",
    "val": 2
  },
  {
    "season": 3,
    "episode": 1,
    "from_char": "GALE",
    "to_char": "JULIET",
    "val": 3
  },
  {
    "season": 3,
    "episode": 1,
    "from_char": "GALE",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 1,
    "from_char": "GOODWIN",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 3,
    "episode": 1,
    "from_char": "GUARD",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 3,
    "episode": 1,
    "from_char": "GUARD",
    "to_char": "SARAH",
    "val": 1
  },
  {
    "season": 3,
    "episode": 1,
    "from_char": "JACK",
    "to_char": "JULIET",
    "val": 6
  },
  {
    "season": 3,
    "episode": 1,
    "from_char": "JACK",
    "to_char": "MODERATOR",
    "val": 1
  },
  {
    "season": 3,
    "episode": 1,
    "from_char": "JACK",
    "to_char": "NURSE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 1,
    "from_char": "JACK",
    "to_char": "SARAH",
    "val": 2
  },
  {
    "season": 3,
    "episode": 1,
    "from_char": "JULIET",
    "to_char": "KARL",
    "val": 1
  },
  {
    "season": 3,
    "episode": 1,
    "from_char": "JULIET",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 1,
    "from_char": "JULIET",
    "to_char": "TOM",
    "val": 1
  },
  {
    "season": 3,
    "episode": 1,
    "from_char": "JULIET",
    "to_char": "UNKNOWN VOICE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 1,
    "from_char": "JULIET",
    "to_char": "WORKER GUY",
    "val": 1
  },
  {
    "season": 3,
    "episode": 1,
    "from_char": "KARL",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 3,
    "episode": 1,
    "from_char": "KARL",
    "to_char": "TOM",
    "val": 1
  },
  {
    "season": 3,
    "episode": 1,
    "from_char": "KATE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 1,
    "from_char": "KATE",
    "to_char": "TOM",
    "val": 3
  },
  {
    "season": 3,
    "episode": 1,
    "from_char": "SAWYER",
    "to_char": "TOM",
    "val": 2
  },
  {
    "season": 3,
    "episode": 2,
    "from_char": "ALEX",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 2,
    "from_char": "ALEX",
    "to_char": "PICKETT",
    "val": 1
  },
  {
    "season": 3,
    "episode": 2,
    "from_char": "ALEX",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 2,
    "from_char": "BEN",
    "to_char": "COLLEEN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 2,
    "from_char": "BEN",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 3,
    "episode": 2,
    "from_char": "BEN",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 3,
    "episode": 2,
    "from_char": "COLLEEN",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 3,
    "episode": 2,
    "from_char": "COLLEEN",
    "to_char": "PICKETT",
    "val": 1
  },
  {
    "season": 3,
    "episode": 2,
    "from_char": "COLLEEN",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 3,
    "episode": 2,
    "from_char": "COLLEEN",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 2,
    "from_char": "JAE",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 2,
    "from_char": "JAE",
    "to_char": "MR. PAIK",
    "val": 1
  },
  {
    "season": 3,
    "episode": 2,
    "from_char": "JAE",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 2,
    "from_char": "JIN",
    "to_char": "MR. PAIK",
    "val": 1
  },
  {
    "season": 3,
    "episode": 2,
    "from_char": "JIN",
    "to_char": "SAYID",
    "val": 4
  },
  {
    "season": 3,
    "episode": 2,
    "from_char": "JIN",
    "to_char": "SUN",
    "val": 5
  },
  {
    "season": 3,
    "episode": 2,
    "from_char": "JULIET",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 2,
    "from_char": "KATE",
    "to_char": "PICKETT",
    "val": 3
  },
  {
    "season": 3,
    "episode": 2,
    "from_char": "KATE",
    "to_char": "SAWYER",
    "val": 4
  },
  {
    "season": 3,
    "episode": 2,
    "from_char": "MR. PAIK",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 3,
    "episode": 2,
    "from_char": "MR. PAIK",
    "to_char": "YOUNG SUN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 2,
    "from_char": "PICKETT",
    "to_char": "SAWYER",
    "val": 3
  },
  {
    "season": 3,
    "episode": 2,
    "from_char": "SAYID",
    "to_char": "SUN",
    "val": 5
  },
  {
    "season": 3,
    "episode": 3,
    "from_char": "BOONE",
    "to_char": "CHARLIE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 3,
    "from_char": "BOONE",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 3,
    "from_char": "CHARLIE",
    "to_char": "CLAIRE",
    "val": 2
  },
  {
    "season": 3,
    "episode": 3,
    "from_char": "CHARLIE",
    "to_char": "EKO",
    "val": 2
  },
  {
    "season": 3,
    "episode": 3,
    "from_char": "CHARLIE",
    "to_char": "HURLEY",
    "val": 3
  },
  {
    "season": 3,
    "episode": 3,
    "from_char": "CHARLIE",
    "to_char": "LOCKE",
    "val": 11
  },
  {
    "season": 3,
    "episode": 3,
    "from_char": "CHARLIE",
    "to_char": "NIKKI",
    "val": 1
  },
  {
    "season": 3,
    "episode": 3,
    "from_char": "CHARLIE",
    "to_char": "PAULO",
    "val": 1
  },
  {
    "season": 3,
    "episode": 3,
    "from_char": "CLAIRE",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 3,
    "episode": 3,
    "from_char": "CLAIRE",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 3,
    "from_char": "CLAIRE",
    "to_char": "NIKKI",
    "val": 1
  },
  {
    "season": 3,
    "episode": 3,
    "from_char": "CLAIRE",
    "to_char": "PAULO",
    "val": 1
  },
  {
    "season": 3,
    "episode": 3,
    "from_char": "DESMOND",
    "to_char": "HURLEY",
    "val": 2
  },
  {
    "season": 3,
    "episode": 3,
    "from_char": "EDDIE",
    "to_char": "JAN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 3,
    "from_char": "EDDIE",
    "to_char": "LOCKE",
    "val": 5
  },
  {
    "season": 3,
    "episode": 3,
    "from_char": "EDDIE",
    "to_char": "MIKE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 3,
    "from_char": "EDDIE",
    "to_char": "SHERIFF",
    "val": 1
  },
  {
    "season": 3,
    "episode": 3,
    "from_char": "EKO",
    "to_char": "LOCKE",
    "val": 2
  },
  {
    "season": 3,
    "episode": 3,
    "from_char": "HURLEY",
    "to_char": "LOCKE",
    "val": 3
  },
  {
    "season": 3,
    "episode": 3,
    "from_char": "HURLEY",
    "to_char": "NIKKI",
    "val": 1
  },
  {
    "season": 3,
    "episode": 3,
    "from_char": "HURLEY",
    "to_char": "PAULO",
    "val": 1
  },
  {
    "season": 3,
    "episode": 3,
    "from_char": "JAN",
    "to_char": "KIM",
    "val": 1
  },
  {
    "season": 3,
    "episode": 3,
    "from_char": "JAN",
    "to_char": "LOCKE",
    "val": 2
  },
  {
    "season": 3,
    "episode": 3,
    "from_char": "JAN",
    "to_char": "MIKE",
    "val": 2
  },
  {
    "season": 3,
    "episode": 3,
    "from_char": "KIM",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 3,
    "from_char": "KIM",
    "to_char": "MIKE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 3,
    "from_char": "LOCKE",
    "to_char": "MIKE",
    "val": 2
  },
  {
    "season": 3,
    "episode": 3,
    "from_char": "LOCKE",
    "to_char": "NIKKI",
    "val": 1
  },
  {
    "season": 3,
    "episode": 3,
    "from_char": "LOCKE",
    "to_char": "PAULO",
    "val": 1
  },
  {
    "season": 3,
    "episode": 3,
    "from_char": "LOCKE",
    "to_char": "SHERIFF",
    "val": 1
  },
  {
    "season": 3,
    "episode": 3,
    "from_char": "NIKKI",
    "to_char": "PAULO",
    "val": 1
  },
  {
    "season": 3,
    "episode": 4,
    "from_char": "AGENT FREEDMAN",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 4,
    "from_char": "AGENT FREEDMAN",
    "to_char": "WARDEN HARRIS",
    "val": 1
  },
  {
    "season": 3,
    "episode": 4,
    "from_char": "ANOTHER VOICE",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 3,
    "episode": 4,
    "from_char": "ANOTHER VOICE",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 3,
    "episode": 4,
    "from_char": "ANOTHER VOICE",
    "to_char": "VOICE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 4,
    "from_char": "BEN",
    "to_char": "JACK",
    "val": 2
  },
  {
    "season": 3,
    "episode": 4,
    "from_char": "BEN",
    "to_char": "JASON",
    "val": 1
  },
  {
    "season": 3,
    "episode": 4,
    "from_char": "BEN",
    "to_char": "JULIET",
    "val": 2
  },
  {
    "season": 3,
    "episode": 4,
    "from_char": "BEN",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 3,
    "episode": 4,
    "from_char": "BEN",
    "to_char": "MATTHEW",
    "val": 1
  },
  {
    "season": 3,
    "episode": 4,
    "from_char": "BEN",
    "to_char": "PICKETT",
    "val": 1
  },
  {
    "season": 3,
    "episode": 4,
    "from_char": "BEN",
    "to_char": "SAWYER",
    "val": 5
  },
  {
    "season": 3,
    "episode": 4,
    "from_char": "BEN",
    "to_char": "TOM",
    "val": 3
  },
  {
    "season": 3,
    "episode": 4,
    "from_char": "CASSIDY",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 4,
    "from_char": "CHARLIE",
    "to_char": "CLAIRE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 4,
    "from_char": "CHARLIE",
    "to_char": "DESMOND",
    "val": 1
  },
  {
    "season": 3,
    "episode": 4,
    "from_char": "CLAIRE",
    "to_char": "DESMOND",
    "val": 1
  },
  {
    "season": 3,
    "episode": 4,
    "from_char": "DESMOND",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 3,
    "episode": 4,
    "from_char": "DESMOND",
    "to_char": "PAULO",
    "val": 1
  },
  {
    "season": 3,
    "episode": 4,
    "from_char": "GUARD",
    "to_char": "PRISON TOUGH",
    "val": 1
  },
  {
    "season": 3,
    "episode": 4,
    "from_char": "GUARD",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 4,
    "from_char": "JACK",
    "to_char": "JULIET",
    "val": 4
  },
  {
    "season": 3,
    "episode": 4,
    "from_char": "JACK",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 4,
    "from_char": "JACK",
    "to_char": "PICKETT",
    "val": 1
  },
  {
    "season": 3,
    "episode": 4,
    "from_char": "JACK",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 4,
    "from_char": "JACK",
    "to_char": "TOM",
    "val": 1
  },
  {
    "season": 3,
    "episode": 4,
    "from_char": "JACK",
    "to_char": "VOICE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 4,
    "from_char": "JASON",
    "to_char": "MATTHEW",
    "val": 1
  },
  {
    "season": 3,
    "episode": 4,
    "from_char": "JASON",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 4,
    "from_char": "JASON",
    "to_char": "TOM",
    "val": 1
  },
  {
    "season": 3,
    "episode": 4,
    "from_char": "JULIET",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 3,
    "episode": 4,
    "from_char": "JULIET",
    "to_char": "PICKETT",
    "val": 2
  },
  {
    "season": 3,
    "episode": 4,
    "from_char": "JULIET",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 3,
    "episode": 4,
    "from_char": "JULIET",
    "to_char": "TOM",
    "val": 2
  },
  {
    "season": 3,
    "episode": 4,
    "from_char": "JULIET",
    "to_char": "VOICE",
    "val": 2
  },
  {
    "season": 3,
    "episode": 4,
    "from_char": "KATE",
    "to_char": "PICKETT",
    "val": 3
  },
  {
    "season": 3,
    "episode": 4,
    "from_char": "KATE",
    "to_char": "SAWYER",
    "val": 8
  },
  {
    "season": 3,
    "episode": 4,
    "from_char": "KATE",
    "to_char": "TOM",
    "val": 3
  },
  {
    "season": 3,
    "episode": 4,
    "from_char": "KATE",
    "to_char": "VOICE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 4,
    "from_char": "MATTHEW",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 4,
    "from_char": "MATTHEW",
    "to_char": "TOM",
    "val": 1
  },
  {
    "season": 3,
    "episode": 4,
    "from_char": "MUNSON",
    "to_char": "SAWYER",
    "val": 3
  },
  {
    "season": 3,
    "episode": 4,
    "from_char": "MUNSON",
    "to_char": "WARDEN HARRIS",
    "val": 1
  },
  {
    "season": 3,
    "episode": 4,
    "from_char": "PICKETT",
    "to_char": "SAWYER",
    "val": 3
  },
  {
    "season": 3,
    "episode": 4,
    "from_char": "PICKETT",
    "to_char": "TOM",
    "val": 2
  },
  {
    "season": 3,
    "episode": 4,
    "from_char": "PICKETT",
    "to_char": "VOICE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 4,
    "from_char": "PRISON TOUGH",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 4,
    "from_char": "SAWYER",
    "to_char": "TOM",
    "val": 4
  },
  {
    "season": 3,
    "episode": 4,
    "from_char": "SAWYER",
    "to_char": "VOICE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 4,
    "from_char": "SAWYER",
    "to_char": "WARDEN HARRIS",
    "val": 2
  },
  {
    "season": 3,
    "episode": 4,
    "from_char": "TOM",
    "to_char": "VOICE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 5,
    "from_char": "AMINA",
    "to_char": "DANIEL",
    "val": 2
  },
  {
    "season": 3,
    "episode": 5,
    "from_char": "AMINA",
    "to_char": "EKO",
    "val": 4
  },
  {
    "season": 3,
    "episode": 5,
    "from_char": "AMINA",
    "to_char": "EMEKA",
    "val": 1
  },
  {
    "season": 3,
    "episode": 5,
    "from_char": "AMINA",
    "to_char": "SOLDIER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 5,
    "from_char": "BEN",
    "to_char": "JACK",
    "val": 3
  },
  {
    "season": 3,
    "episode": 5,
    "from_char": "BEN",
    "to_char": "JULIET",
    "val": 2
  },
  {
    "season": 3,
    "episode": 5,
    "from_char": "CHARLIE",
    "to_char": "DESMOND",
    "val": 1
  },
  {
    "season": 3,
    "episode": 5,
    "from_char": "CHARLIE",
    "to_char": "EKO",
    "val": 1
  },
  {
    "season": 3,
    "episode": 5,
    "from_char": "CHARLIE",
    "to_char": "HURLEY",
    "val": 2
  },
  {
    "season": 3,
    "episode": 5,
    "from_char": "CHARLIE",
    "to_char": "LOCKE",
    "val": 2
  },
  {
    "season": 3,
    "episode": 5,
    "from_char": "CHARLIE",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 3,
    "episode": 5,
    "from_char": "CHARLIE",
    "to_char": "SOLDIER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 5,
    "from_char": "CHARLIE",
    "to_char": "YEMI",
    "val": 1
  },
  {
    "season": 3,
    "episode": 5,
    "from_char": "DANIEL",
    "to_char": "EKO",
    "val": 2
  },
  {
    "season": 3,
    "episode": 5,
    "from_char": "DANIEL",
    "to_char": "EMEKA",
    "val": 1
  },
  {
    "season": 3,
    "episode": 5,
    "from_char": "DANIEL",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 5,
    "from_char": "DESMOND",
    "to_char": "HURLEY",
    "val": 2
  },
  {
    "season": 3,
    "episode": 5,
    "from_char": "DESMOND",
    "to_char": "LOCKE",
    "val": 2
  },
  {
    "season": 3,
    "episode": 5,
    "from_char": "DESMOND",
    "to_char": "NIKKI",
    "val": 1
  },
  {
    "season": 3,
    "episode": 5,
    "from_char": "DESMOND",
    "to_char": "PAULO",
    "val": 1
  },
  {
    "season": 3,
    "episode": 5,
    "from_char": "DESMOND",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 3,
    "episode": 5,
    "from_char": "EKO",
    "to_char": "EMEKA",
    "val": 2
  },
  {
    "season": 3,
    "episode": 5,
    "from_char": "EKO",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 3,
    "episode": 5,
    "from_char": "EKO",
    "to_char": "LOCKE",
    "val": 5
  },
  {
    "season": 3,
    "episode": 5,
    "from_char": "EKO",
    "to_char": "NIKKI",
    "val": 1
  },
  {
    "season": 3,
    "episode": 5,
    "from_char": "EKO",
    "to_char": "NUN",
    "val": 2
  },
  {
    "season": 3,
    "episode": 5,
    "from_char": "EKO",
    "to_char": "PAULO",
    "val": 1
  },
  {
    "season": 3,
    "episode": 5,
    "from_char": "EKO",
    "to_char": "SAYID",
    "val": 3
  },
  {
    "season": 3,
    "episode": 5,
    "from_char": "EKO",
    "to_char": "SOLDIER",
    "val": 2
  },
  {
    "season": 3,
    "episode": 5,
    "from_char": "EKO",
    "to_char": "WARLORD",
    "val": 1
  },
  {
    "season": 3,
    "episode": 5,
    "from_char": "EKO",
    "to_char": "YEMI",
    "val": 2
  },
  {
    "season": 3,
    "episode": 5,
    "from_char": "HURLEY",
    "to_char": "LOCKE",
    "val": 3
  },
  {
    "season": 3,
    "episode": 5,
    "from_char": "HURLEY",
    "to_char": "NIKKI",
    "val": 1
  },
  {
    "season": 3,
    "episode": 5,
    "from_char": "HURLEY",
    "to_char": "PAULO",
    "val": 1
  },
  {
    "season": 3,
    "episode": 5,
    "from_char": "HURLEY",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 3,
    "episode": 5,
    "from_char": "HURLEY",
    "to_char": "SOLDIER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 5,
    "from_char": "HURLEY",
    "to_char": "YEMI",
    "val": 1
  },
  {
    "season": 3,
    "episode": 5,
    "from_char": "JACK",
    "to_char": "JULIET",
    "val": 3
  },
  {
    "season": 3,
    "episode": 5,
    "from_char": "LOCKE",
    "to_char": "NARRATION",
    "val": 1
  },
  {
    "season": 3,
    "episode": 5,
    "from_char": "LOCKE",
    "to_char": "NIKKI",
    "val": 3
  },
  {
    "season": 3,
    "episode": 5,
    "from_char": "LOCKE",
    "to_char": "PAULO",
    "val": 3
  },
  {
    "season": 3,
    "episode": 5,
    "from_char": "LOCKE",
    "to_char": "SAYID",
    "val": 5
  },
  {
    "season": 3,
    "episode": 5,
    "from_char": "LOCKE",
    "to_char": "SOLDIER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 5,
    "from_char": "LOCKE",
    "to_char": "YEMI",
    "val": 2
  },
  {
    "season": 3,
    "episode": 5,
    "from_char": "NARRATION",
    "to_char": "NIKKI",
    "val": 1
  },
  {
    "season": 3,
    "episode": 5,
    "from_char": "NARRATION",
    "to_char": "PAULO",
    "val": 1
  },
  {
    "season": 3,
    "episode": 5,
    "from_char": "NARRATION",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 3,
    "episode": 5,
    "from_char": "NIKKI",
    "to_char": "PAULO",
    "val": 3
  },
  {
    "season": 3,
    "episode": 5,
    "from_char": "NIKKI",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 3,
    "episode": 5,
    "from_char": "PAULO",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 3,
    "episode": 5,
    "from_char": "SAYID",
    "to_char": "SOLDIER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 5,
    "from_char": "SAYID",
    "to_char": "YEMI",
    "val": 2
  },
  {
    "season": 3,
    "episode": 5,
    "from_char": "SOLDIER",
    "to_char": "YEMI",
    "val": 1
  },
  {
    "season": 3,
    "episode": 6,
    "from_char": "ALEX",
    "to_char": "PICKETT",
    "val": 1
  },
  {
    "season": 3,
    "episode": 6,
    "from_char": "BEN",
    "to_char": "FEMALE VOICE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 6,
    "from_char": "BEN",
    "to_char": "JACK",
    "val": 3
  },
  {
    "season": 3,
    "episode": 6,
    "from_char": "BEN",
    "to_char": "JASON",
    "val": 1
  },
  {
    "season": 3,
    "episode": 6,
    "from_char": "BEN",
    "to_char": "JULIET",
    "val": 2
  },
  {
    "season": 3,
    "episode": 6,
    "from_char": "BEN",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 6,
    "from_char": "BEN",
    "to_char": "PICKETT",
    "val": 1
  },
  {
    "season": 3,
    "episode": 6,
    "from_char": "DESMOND",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 6,
    "from_char": "DESMOND",
    "to_char": "NIKKI",
    "val": 1
  },
  {
    "season": 3,
    "episode": 6,
    "from_char": "DESMOND",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 3,
    "episode": 6,
    "from_char": "FEMALE VOICE",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 3,
    "episode": 6,
    "from_char": "IVAN",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 3,
    "episode": 6,
    "from_char": "IVAN",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 3,
    "episode": 6,
    "from_char": "IVAN",
    "to_char": "TOM",
    "val": 1
  },
  {
    "season": 3,
    "episode": 6,
    "from_char": "JACK",
    "to_char": "JASON",
    "val": 1
  },
  {
    "season": 3,
    "episode": 6,
    "from_char": "JACK",
    "to_char": "JULIET",
    "val": 4
  },
  {
    "season": 3,
    "episode": 6,
    "from_char": "JACK",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 3,
    "episode": 6,
    "from_char": "JACK",
    "to_char": "PICKETT",
    "val": 2
  },
  {
    "season": 3,
    "episode": 6,
    "from_char": "JACK",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 6,
    "from_char": "JACK",
    "to_char": "TOM",
    "val": 2
  },
  {
    "season": 3,
    "episode": 6,
    "from_char": "JASON",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 3,
    "episode": 6,
    "from_char": "JASON",
    "to_char": "PICKETT",
    "val": 1
  },
  {
    "season": 3,
    "episode": 6,
    "from_char": "JULIET",
    "to_char": "KATE",
    "val": 3
  },
  {
    "season": 3,
    "episode": 6,
    "from_char": "JULIET",
    "to_char": "PICKETT",
    "val": 3
  },
  {
    "season": 3,
    "episode": 6,
    "from_char": "JULIET",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 6,
    "from_char": "JULIET",
    "to_char": "TOM",
    "val": 1
  },
  {
    "season": 3,
    "episode": 6,
    "from_char": "KATE",
    "to_char": "KEVIN",
    "val": 5
  },
  {
    "season": 3,
    "episode": 6,
    "from_char": "KATE",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 6,
    "from_char": "KATE",
    "to_char": "MARSHAL",
    "val": 1
  },
  {
    "season": 3,
    "episode": 6,
    "from_char": "KATE",
    "to_char": "PICKETT",
    "val": 5
  },
  {
    "season": 3,
    "episode": 6,
    "from_char": "KATE",
    "to_char": "SAWYER",
    "val": 5
  },
  {
    "season": 3,
    "episode": 6,
    "from_char": "KATE",
    "to_char": "SUZANNE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 6,
    "from_char": "KATE",
    "to_char": "TOM",
    "val": 1
  },
  {
    "season": 3,
    "episode": 6,
    "from_char": "KEVIN",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 6,
    "from_char": "LOCKE",
    "to_char": "NIKKI",
    "val": 1
  },
  {
    "season": 3,
    "episode": 6,
    "from_char": "LOCKE",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 3,
    "episode": 6,
    "from_char": "NIKKI",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 3,
    "episode": 6,
    "from_char": "PICKETT",
    "to_char": "SAWYER",
    "val": 3
  },
  {
    "season": 3,
    "episode": 6,
    "from_char": "PICKETT",
    "to_char": "TOM",
    "val": 1
  },
  {
    "season": 3,
    "episode": 6,
    "from_char": "SAWYER",
    "to_char": "TOM",
    "val": 1
  },
  {
    "season": 3,
    "episode": 7,
    "from_char": "ALDO",
    "to_char": "ALEX",
    "val": 1
  },
  {
    "season": 3,
    "episode": 7,
    "from_char": "ALDO",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 3,
    "episode": 7,
    "from_char": "ALDO",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 7,
    "from_char": "ALDO",
    "to_char": "PICKETT",
    "val": 2
  },
  {
    "season": 3,
    "episode": 7,
    "from_char": "ALDO",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 7,
    "from_char": "ALEX",
    "to_char": "IVAN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 7,
    "from_char": "ALEX",
    "to_char": "JACK",
    "val": 2
  },
  {
    "season": 3,
    "episode": 7,
    "from_char": "ALEX",
    "to_char": "JULIET",
    "val": 2
  },
  {
    "season": 3,
    "episode": 7,
    "from_char": "ALEX",
    "to_char": "KARL",
    "val": 2
  },
  {
    "season": 3,
    "episode": 7,
    "from_char": "ALEX",
    "to_char": "KATE",
    "val": 6
  },
  {
    "season": 3,
    "episode": 7,
    "from_char": "ALEX",
    "to_char": "PICKETT",
    "val": 2
  },
  {
    "season": 3,
    "episode": 7,
    "from_char": "ALEX",
    "to_char": "SAWYER",
    "val": 6
  },
  {
    "season": 3,
    "episode": 7,
    "from_char": "ALEX",
    "to_char": "TOM",
    "val": 1
  },
  {
    "season": 3,
    "episode": 7,
    "from_char": "ALPERT",
    "to_char": "ETHAN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 7,
    "from_char": "ALPERT",
    "to_char": "JULIET",
    "val": 2
  },
  {
    "season": 3,
    "episode": 7,
    "from_char": "BEN",
    "to_char": "JACK",
    "val": 2
  },
  {
    "season": 3,
    "episode": 7,
    "from_char": "BEN",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 3,
    "episode": 7,
    "from_char": "BEN",
    "to_char": "TOM",
    "val": 2
  },
  {
    "season": 3,
    "episode": 7,
    "from_char": "DIANA",
    "to_char": "EDMUND",
    "val": 1
  },
  {
    "season": 3,
    "episode": 7,
    "from_char": "DIANA",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 3,
    "episode": 7,
    "from_char": "DIANA",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 7,
    "from_char": "EDMUND",
    "to_char": "JULIET",
    "val": 3
  },
  {
    "season": 3,
    "episode": 7,
    "from_char": "EDMUND",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 7,
    "from_char": "ETHAN",
    "to_char": "JULIET",
    "val": 2
  },
  {
    "season": 3,
    "episode": 7,
    "from_char": "ETHAN",
    "to_char": "RACHEL",
    "val": 1
  },
  {
    "season": 3,
    "episode": 7,
    "from_char": "IVAN",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 3,
    "episode": 7,
    "from_char": "IVAN",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 7,
    "from_char": "IVAN",
    "to_char": "PICKETT",
    "val": 2
  },
  {
    "season": 3,
    "episode": 7,
    "from_char": "IVAN",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 7,
    "from_char": "JACK",
    "to_char": "JULIET",
    "val": 7
  },
  {
    "season": 3,
    "episode": 7,
    "from_char": "JACK",
    "to_char": "KARL",
    "val": 1
  },
  {
    "season": 3,
    "episode": 7,
    "from_char": "JACK",
    "to_char": "KATE",
    "val": 3
  },
  {
    "season": 3,
    "episode": 7,
    "from_char": "JACK",
    "to_char": "PICKETT",
    "val": 1
  },
  {
    "season": 3,
    "episode": 7,
    "from_char": "JACK",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 3,
    "episode": 7,
    "from_char": "JACK",
    "to_char": "TOM",
    "val": 8
  },
  {
    "season": 3,
    "episode": 7,
    "from_char": "JULIET",
    "to_char": "KARL",
    "val": 2
  },
  {
    "season": 3,
    "episode": 7,
    "from_char": "JULIET",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 3,
    "episode": 7,
    "from_char": "JULIET",
    "to_char": "MORGUE EMPLOYEE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 7,
    "from_char": "JULIET",
    "to_char": "PICKETT",
    "val": 1
  },
  {
    "season": 3,
    "episode": 7,
    "from_char": "JULIET",
    "to_char": "RACHEL",
    "val": 2
  },
  {
    "season": 3,
    "episode": 7,
    "from_char": "JULIET",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 3,
    "episode": 7,
    "from_char": "JULIET",
    "to_char": "SHERRY",
    "val": 1
  },
  {
    "season": 3,
    "episode": 7,
    "from_char": "JULIET",
    "to_char": "TOM",
    "val": 6
  },
  {
    "season": 3,
    "episode": 7,
    "from_char": "JULIET",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 7,
    "from_char": "KARL",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 3,
    "episode": 7,
    "from_char": "KARL",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 3,
    "episode": 7,
    "from_char": "KARL",
    "to_char": "TOM",
    "val": 1
  },
  {
    "season": 3,
    "episode": 7,
    "from_char": "KATE",
    "to_char": "PICKETT",
    "val": 2
  },
  {
    "season": 3,
    "episode": 7,
    "from_char": "KATE",
    "to_char": "SAWYER",
    "val": 6
  },
  {
    "season": 3,
    "episode": 7,
    "from_char": "KATE",
    "to_char": "TOM",
    "val": 1
  },
  {
    "season": 3,
    "episode": 7,
    "from_char": "PICKETT",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 3,
    "episode": 7,
    "from_char": "SAWYER",
    "to_char": "TOM",
    "val": 1
  },
  {
    "season": 3,
    "episode": 8,
    "from_char": "BARTENDER",
    "to_char": "DESMOND",
    "val": 1
  },
  {
    "season": 3,
    "episode": 8,
    "from_char": "BARTENDER",
    "to_char": "JIMMY",
    "val": 1
  },
  {
    "season": 3,
    "episode": 8,
    "from_char": "CHARLIE",
    "to_char": "CLAIRE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 8,
    "from_char": "CHARLIE",
    "to_char": "DESMOND",
    "val": 7
  },
  {
    "season": 3,
    "episode": 8,
    "from_char": "CHARLIE",
    "to_char": "DESMOND AND CHARLIE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 8,
    "from_char": "CHARLIE",
    "to_char": "HURLEY",
    "val": 5
  },
  {
    "season": 3,
    "episode": 8,
    "from_char": "CHARLIE",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 8,
    "from_char": "CHARLIE",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 3,
    "episode": 8,
    "from_char": "CHARLIE",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 8,
    "from_char": "CLAIRE",
    "to_char": "DESMOND",
    "val": 1
  },
  {
    "season": 3,
    "episode": 8,
    "from_char": "DELIVERY MAN",
    "to_char": "DESMOND",
    "val": 1
  },
  {
    "season": 3,
    "episode": 8,
    "from_char": "DELIVERY MAN",
    "to_char": "RECEPTIONIST",
    "val": 1
  },
  {
    "season": 3,
    "episode": 8,
    "from_char": "DESMOND",
    "to_char": "DESMOND AND CHARLIE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 8,
    "from_char": "DESMOND",
    "to_char": "DONOVAN",
    "val": 2
  },
  {
    "season": 3,
    "episode": 8,
    "from_char": "DESMOND",
    "to_char": "HURLEY",
    "val": 4
  },
  {
    "season": 3,
    "episode": 8,
    "from_char": "DESMOND",
    "to_char": "JIMMY",
    "val": 1
  },
  {
    "season": 3,
    "episode": 8,
    "from_char": "DESMOND",
    "to_char": "LOCKE",
    "val": 2
  },
  {
    "season": 3,
    "episode": 8,
    "from_char": "DESMOND",
    "to_char": "MS. HAWKING",
    "val": 3
  },
  {
    "season": 3,
    "episode": 8,
    "from_char": "DESMOND",
    "to_char": "PENELOPE",
    "val": 4
  },
  {
    "season": 3,
    "episode": 8,
    "from_char": "DESMOND",
    "to_char": "PHOTOGRAPHER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 8,
    "from_char": "DESMOND",
    "to_char": "RECEPTIONIST",
    "val": 1
  },
  {
    "season": 3,
    "episode": 8,
    "from_char": "DESMOND",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 3,
    "episode": 8,
    "from_char": "DESMOND",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 8,
    "from_char": "DESMOND",
    "to_char": "WIDMORE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 8,
    "from_char": "DESMOND AND CHARLIE",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 3,
    "episode": 8,
    "from_char": "HURLEY",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 8,
    "from_char": "HURLEY",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 3,
    "episode": 8,
    "from_char": "HURLEY",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 8,
    "from_char": "LOCKE",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 3,
    "episode": 8,
    "from_char": "LOCKE",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 8,
    "from_char": "PENELOPE",
    "to_char": "PHOTOGRAPHER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 8,
    "from_char": "SAYID",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 9,
    "from_char": "ACHARA",
    "to_char": "CHET",
    "val": 1
  },
  {
    "season": 3,
    "episode": 9,
    "from_char": "ACHARA",
    "to_char": "JACK",
    "val": 4
  },
  {
    "season": 3,
    "episode": 9,
    "from_char": "ACHARA",
    "to_char": "THAI BOY",
    "val": 1
  },
  {
    "season": 3,
    "episode": 9,
    "from_char": "ACHARA",
    "to_char": "THAI MAN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 9,
    "from_char": "ALEX",
    "to_char": "BEN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 9,
    "from_char": "ALEX",
    "to_char": "ISABEL",
    "val": 1
  },
  {
    "season": 3,
    "episode": 9,
    "from_char": "ALEX",
    "to_char": "JACK",
    "val": 2
  },
  {
    "season": 3,
    "episode": 9,
    "from_char": "ALEX",
    "to_char": "TOM",
    "val": 1
  },
  {
    "season": 3,
    "episode": 9,
    "from_char": "BEN",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 3,
    "episode": 9,
    "from_char": "CHET",
    "to_char": "JACK",
    "val": 2
  },
  {
    "season": 3,
    "episode": 9,
    "from_char": "CHET",
    "to_char": "THAI MAN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 9,
    "from_char": "CINDY",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 3,
    "episode": 9,
    "from_char": "ISABEL",
    "to_char": "JACK",
    "val": 3
  },
  {
    "season": 3,
    "episode": 9,
    "from_char": "ISABEL",
    "to_char": "TOM",
    "val": 2
  },
  {
    "season": 3,
    "episode": 9,
    "from_char": "JACK",
    "to_char": "JULIET",
    "val": 3
  },
  {
    "season": 3,
    "episode": 9,
    "from_char": "JACK",
    "to_char": "THAI BOY",
    "val": 1
  },
  {
    "season": 3,
    "episode": 9,
    "from_char": "JACK",
    "to_char": "THAI MAN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 9,
    "from_char": "JACK",
    "to_char": "TOM",
    "val": 3
  },
  {
    "season": 3,
    "episode": 9,
    "from_char": "JULIET",
    "to_char": "TOM",
    "val": 1
  },
  {
    "season": 3,
    "episode": 9,
    "from_char": "KARL",
    "to_char": "KATE",
    "val": 3
  },
  {
    "season": 3,
    "episode": 9,
    "from_char": "KARL",
    "to_char": "SAWYER",
    "val": 3
  },
  {
    "season": 3,
    "episode": 9,
    "from_char": "KATE",
    "to_char": "SAWYER",
    "val": 5
  },
  {
    "season": 3,
    "episode": 10,
    "from_char": "CARMEN",
    "to_char": "DAVID",
    "val": 2
  },
  {
    "season": 3,
    "episode": 10,
    "from_char": "CARMEN",
    "to_char": "HURLEY",
    "val": 2
  },
  {
    "season": 3,
    "episode": 10,
    "from_char": "CHARLIE",
    "to_char": "CLAIRE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 10,
    "from_char": "CHARLIE",
    "to_char": "DESMOND",
    "val": 1
  },
  {
    "season": 3,
    "episode": 10,
    "from_char": "CHARLIE",
    "to_char": "HURLEY",
    "val": 4
  },
  {
    "season": 3,
    "episode": 10,
    "from_char": "CHARLIE",
    "to_char": "JIN",
    "val": 2
  },
  {
    "season": 3,
    "episode": 10,
    "from_char": "CHARLIE",
    "to_char": "NIKKI",
    "val": 1
  },
  {
    "season": 3,
    "episode": 10,
    "from_char": "CHARLIE",
    "to_char": "PAULO",
    "val": 1
  },
  {
    "season": 3,
    "episode": 10,
    "from_char": "CHARLIE",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 3,
    "episode": 10,
    "from_char": "CHARLIE",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 10,
    "from_char": "CLAIRE",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 3,
    "episode": 10,
    "from_char": "CLAIRE",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 10,
    "from_char": "CLAIRE",
    "to_char": "NIKKI",
    "val": 1
  },
  {
    "season": 3,
    "episode": 10,
    "from_char": "CLAIRE",
    "to_char": "PAULO",
    "val": 1
  },
  {
    "season": 3,
    "episode": 10,
    "from_char": "CLAIRE",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 10,
    "from_char": "DANIELLE",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 10,
    "from_char": "DANIELLE",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 10,
    "from_char": "DANIELLE",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 3,
    "episode": 10,
    "from_char": "DAVID",
    "to_char": "HURLEY",
    "val": 5
  },
  {
    "season": 3,
    "episode": 10,
    "from_char": "DAVID",
    "to_char": "LYNN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 10,
    "from_char": "DAVID",
    "to_char": "YOUNG HURLEY",
    "val": 1
  },
  {
    "season": 3,
    "episode": 10,
    "from_char": "DESMOND",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 10,
    "from_char": "HURLEY",
    "to_char": "JIN",
    "val": 8
  },
  {
    "season": 3,
    "episode": 10,
    "from_char": "HURLEY",
    "to_char": "LYNN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 10,
    "from_char": "HURLEY",
    "to_char": "NIKKI",
    "val": 1
  },
  {
    "season": 3,
    "episode": 10,
    "from_char": "HURLEY",
    "to_char": "PAULO",
    "val": 1
  },
  {
    "season": 3,
    "episode": 10,
    "from_char": "HURLEY",
    "to_char": "RANDY",
    "val": 1
  },
  {
    "season": 3,
    "episode": 10,
    "from_char": "HURLEY",
    "to_char": "SAWYER",
    "val": 6
  },
  {
    "season": 3,
    "episode": 10,
    "from_char": "HURLEY",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 10,
    "from_char": "HURLEY",
    "to_char": "TRICIA",
    "val": 1
  },
  {
    "season": 3,
    "episode": 10,
    "from_char": "JIN",
    "to_char": "NIKKI",
    "val": 1
  },
  {
    "season": 3,
    "episode": 10,
    "from_char": "JIN",
    "to_char": "PAULO",
    "val": 1
  },
  {
    "season": 3,
    "episode": 10,
    "from_char": "JIN",
    "to_char": "SAWYER",
    "val": 6
  },
  {
    "season": 3,
    "episode": 10,
    "from_char": "JIN",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 10,
    "from_char": "KATE",
    "to_char": "LOCKE",
    "val": 2
  },
  {
    "season": 3,
    "episode": 10,
    "from_char": "KATE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 10,
    "from_char": "KATE",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 3,
    "episode": 10,
    "from_char": "LOCKE",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 3,
    "episode": 10,
    "from_char": "NIKKI",
    "to_char": "PAULO",
    "val": 1
  },
  {
    "season": 3,
    "episode": 10,
    "from_char": "NIKKI",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 10,
    "from_char": "PAULO",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 10,
    "from_char": "RANDY",
    "to_char": "TRICIA",
    "val": 1
  },
  {
    "season": 3,
    "episode": 11,
    "from_char": "AMIRA",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 11,
    "from_char": "AMIRA",
    "to_char": "SAMI",
    "val": 2
  },
  {
    "season": 3,
    "episode": 11,
    "from_char": "AMIRA",
    "to_char": "SAYID",
    "val": 3
  },
  {
    "season": 3,
    "episode": 11,
    "from_char": "BACKGROUND VOICE",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 3,
    "episode": 11,
    "from_char": "BACKGROUND VOICE",
    "to_char": "PAULO",
    "val": 1
  },
  {
    "season": 3,
    "episode": 11,
    "from_char": "BACKGROUND VOICE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 11,
    "from_char": "CHARLIE",
    "to_char": "HURLEY",
    "val": 2
  },
  {
    "season": 3,
    "episode": 11,
    "from_char": "CHARLIE",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 11,
    "from_char": "CHARLIE",
    "to_char": "NIKKI",
    "val": 1
  },
  {
    "season": 3,
    "episode": 11,
    "from_char": "CHARLIE",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 3,
    "episode": 11,
    "from_char": "CHARLIE",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 11,
    "from_char": "COMPUTER VOICE",
    "to_char": "DR. CANDLE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 11,
    "from_char": "COMPUTER VOICE",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 3,
    "episode": 11,
    "from_char": "COMPUTER VOICE",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 11,
    "from_char": "COMPUTER VOICE",
    "to_char": "MIKHAIL",
    "val": 2
  },
  {
    "season": 3,
    "episode": 11,
    "from_char": "COMPUTER VOICE",
    "to_char": "MS. KLUGH",
    "val": 1
  },
  {
    "season": 3,
    "episode": 11,
    "from_char": "COMPUTER VOICE",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 3,
    "episode": 11,
    "from_char": "DR. CANDLE",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 3,
    "episode": 11,
    "from_char": "DR. CANDLE",
    "to_char": "LOCKE",
    "val": 2
  },
  {
    "season": 3,
    "episode": 11,
    "from_char": "DR. CANDLE",
    "to_char": "MIKHAIL",
    "val": 1
  },
  {
    "season": 3,
    "episode": 11,
    "from_char": "DR. CANDLE",
    "to_char": "MS. KLUGH",
    "val": 1
  },
  {
    "season": 3,
    "episode": 11,
    "from_char": "DR. CANDLE",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 3,
    "episode": 11,
    "from_char": "HURLEY",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 11,
    "from_char": "HURLEY",
    "to_char": "NIKKI",
    "val": 1
  },
  {
    "season": 3,
    "episode": 11,
    "from_char": "HURLEY",
    "to_char": "PAULO",
    "val": 1
  },
  {
    "season": 3,
    "episode": 11,
    "from_char": "HURLEY",
    "to_char": "SAWYER",
    "val": 4
  },
  {
    "season": 3,
    "episode": 11,
    "from_char": "HURLEY",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 11,
    "from_char": "JIN",
    "to_char": "NIKKI",
    "val": 1
  },
  {
    "season": 3,
    "episode": 11,
    "from_char": "JIN",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 11,
    "from_char": "JIN",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 11,
    "from_char": "KATE",
    "to_char": "LOCKE",
    "val": 6
  },
  {
    "season": 3,
    "episode": 11,
    "from_char": "KATE",
    "to_char": "MIKHAIL",
    "val": 5
  },
  {
    "season": 3,
    "episode": 11,
    "from_char": "KATE",
    "to_char": "MS. KLUGH",
    "val": 1
  },
  {
    "season": 3,
    "episode": 11,
    "from_char": "KATE",
    "to_char": "ROUSSEAU",
    "val": 1
  },
  {
    "season": 3,
    "episode": 11,
    "from_char": "KATE",
    "to_char": "SAYID",
    "val": 7
  },
  {
    "season": 3,
    "episode": 11,
    "from_char": "LOCKE",
    "to_char": "MIKHAIL",
    "val": 3
  },
  {
    "season": 3,
    "episode": 11,
    "from_char": "LOCKE",
    "to_char": "MS. KLUGH",
    "val": 1
  },
  {
    "season": 3,
    "episode": 11,
    "from_char": "LOCKE",
    "to_char": "ROUSSEAU",
    "val": 2
  },
  {
    "season": 3,
    "episode": 11,
    "from_char": "LOCKE",
    "to_char": "SAYID",
    "val": 7
  },
  {
    "season": 3,
    "episode": 11,
    "from_char": "MAN",
    "to_char": "SAMI",
    "val": 1
  },
  {
    "season": 3,
    "episode": 11,
    "from_char": "MAN",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 3,
    "episode": 11,
    "from_char": "MIKHAIL",
    "to_char": "MS. KLUGH",
    "val": 1
  },
  {
    "season": 3,
    "episode": 11,
    "from_char": "MIKHAIL",
    "to_char": "ROUSSEAU",
    "val": 1
  },
  {
    "season": 3,
    "episode": 11,
    "from_char": "MIKHAIL",
    "to_char": "SAYID",
    "val": 6
  },
  {
    "season": 3,
    "episode": 11,
    "from_char": "MS. KLUGH",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 3,
    "episode": 11,
    "from_char": "NIKKI",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 11,
    "from_char": "NIKKI",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 11,
    "from_char": "PAULO",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 11,
    "from_char": "ROUSSEAU",
    "to_char": "SAYID",
    "val": 3
  },
  {
    "season": 3,
    "episode": 11,
    "from_char": "SAMI",
    "to_char": "SAYID",
    "val": 4
  },
  {
    "season": 3,
    "episode": 11,
    "from_char": "SAWYER",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 12,
    "from_char": "BARNES",
    "to_char": "CLAIRE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 12,
    "from_char": "BARNES",
    "to_char": "E.R. DOCTOR",
    "val": 1
  },
  {
    "season": 3,
    "episode": 12,
    "from_char": "BARNES",
    "to_char": "OFFICER BARNES",
    "val": 1
  },
  {
    "season": 3,
    "episode": 12,
    "from_char": "CHARLIE",
    "to_char": "CLAIRE",
    "val": 6
  },
  {
    "season": 3,
    "episode": 12,
    "from_char": "CHARLIE",
    "to_char": "DESMOND",
    "val": 1
  },
  {
    "season": 3,
    "episode": 12,
    "from_char": "CHARLIE",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 12,
    "from_char": "CHARLIE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 12,
    "from_char": "CHARLIE",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 12,
    "from_char": "CHRISTIAN",
    "to_char": "CLAIRE",
    "val": 3
  },
  {
    "season": 3,
    "episode": 12,
    "from_char": "CHRISTIAN",
    "to_char": "HEAD NURSE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 12,
    "from_char": "CHRISTIAN",
    "to_char": "LINDSEY",
    "val": 1
  },
  {
    "season": 3,
    "episode": 12,
    "from_char": "CHRISTIAN",
    "to_char": "LOUDSPEAKER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 12,
    "from_char": "CLAIRE",
    "to_char": "DESMOND",
    "val": 3
  },
  {
    "season": 3,
    "episode": 12,
    "from_char": "CLAIRE",
    "to_char": "DR. WOODRUFF",
    "val": 1
  },
  {
    "season": 3,
    "episode": 12,
    "from_char": "CLAIRE",
    "to_char": "E.R. DOCTOR",
    "val": 1
  },
  {
    "season": 3,
    "episode": 12,
    "from_char": "CLAIRE",
    "to_char": "HEAD NURSE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 12,
    "from_char": "CLAIRE",
    "to_char": "JIN",
    "val": 3
  },
  {
    "season": 3,
    "episode": 12,
    "from_char": "CLAIRE",
    "to_char": "LINDSEY",
    "val": 2
  },
  {
    "season": 3,
    "episode": 12,
    "from_char": "CLAIRE",
    "to_char": "LOUDSPEAKER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 12,
    "from_char": "CLAIRE",
    "to_char": "OFFICER BARNES",
    "val": 1
  },
  {
    "season": 3,
    "episode": 12,
    "from_char": "CLAIRE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 12,
    "from_char": "CLAIRE",
    "to_char": "SUN",
    "val": 3
  },
  {
    "season": 3,
    "episode": 12,
    "from_char": "CLAIRE",
    "to_char": "WOODRUFF",
    "val": 1
  },
  {
    "season": 3,
    "episode": 12,
    "from_char": "DESMOND",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 12,
    "from_char": "DR. WOODRUFF",
    "to_char": "LINDSEY",
    "val": 1
  },
  {
    "season": 3,
    "episode": 12,
    "from_char": "DR. WOODRUFF",
    "to_char": "WOODRUFF",
    "val": 1
  },
  {
    "season": 3,
    "episode": 12,
    "from_char": "E.R. DOCTOR",
    "to_char": "OFFICER BARNES",
    "val": 1
  },
  {
    "season": 3,
    "episode": 12,
    "from_char": "HEAD NURSE",
    "to_char": "LINDSEY",
    "val": 1
  },
  {
    "season": 3,
    "episode": 12,
    "from_char": "HEAD NURSE",
    "to_char": "LOUDSPEAKER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 12,
    "from_char": "JIN",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 12,
    "from_char": "JIN",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 3,
    "episode": 12,
    "from_char": "KATE",
    "to_char": "LOCKE",
    "val": 5
  },
  {
    "season": 3,
    "episode": 12,
    "from_char": "KATE",
    "to_char": "MIKHAIL",
    "val": 3
  },
  {
    "season": 3,
    "episode": 12,
    "from_char": "KATE",
    "to_char": "ROUSSEAU",
    "val": 4
  },
  {
    "season": 3,
    "episode": 12,
    "from_char": "KATE",
    "to_char": "SAYID",
    "val": 6
  },
  {
    "season": 3,
    "episode": 12,
    "from_char": "KATE",
    "to_char": "TOM",
    "val": 1
  },
  {
    "season": 3,
    "episode": 12,
    "from_char": "LINDSEY",
    "to_char": "LOUDSPEAKER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 12,
    "from_char": "LINDSEY",
    "to_char": "WOODRUFF",
    "val": 1
  },
  {
    "season": 3,
    "episode": 12,
    "from_char": "LOCKE",
    "to_char": "MIKHAIL",
    "val": 3
  },
  {
    "season": 3,
    "episode": 12,
    "from_char": "LOCKE",
    "to_char": "ROUSSEAU",
    "val": 3
  },
  {
    "season": 3,
    "episode": 12,
    "from_char": "LOCKE",
    "to_char": "SAYID",
    "val": 5
  },
  {
    "season": 3,
    "episode": 12,
    "from_char": "MIKHAIL",
    "to_char": "ROUSSEAU",
    "val": 2
  },
  {
    "season": 3,
    "episode": 12,
    "from_char": "MIKHAIL",
    "to_char": "SAYID",
    "val": 3
  },
  {
    "season": 3,
    "episode": 12,
    "from_char": "ROUSSEAU",
    "to_char": "SAYID",
    "val": 3
  },
  {
    "season": 3,
    "episode": 12,
    "from_char": "SAWYER",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 12,
    "from_char": "SAYID",
    "to_char": "TOM",
    "val": 1
  },
  {
    "season": 3,
    "episode": 13,
    "from_char": "ALEX",
    "to_char": "ALPERT",
    "val": 1
  },
  {
    "season": 3,
    "episode": 13,
    "from_char": "ALEX",
    "to_char": "BEN",
    "val": 2
  },
  {
    "season": 3,
    "episode": 13,
    "from_char": "ALEX",
    "to_char": "LOCKE",
    "val": 2
  },
  {
    "season": 3,
    "episode": 13,
    "from_char": "ALEX",
    "to_char": "PRYCE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 13,
    "from_char": "ALEX",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 3,
    "episode": 13,
    "from_char": "ALEX",
    "to_char": "TOM",
    "val": 1
  },
  {
    "season": 3,
    "episode": 13,
    "from_char": "ALPERT",
    "to_char": "BEN",
    "val": 2
  },
  {
    "season": 3,
    "episode": 13,
    "from_char": "ALPERT",
    "to_char": "LOCKE",
    "val": 2
  },
  {
    "season": 3,
    "episode": 13,
    "from_char": "ALPERT",
    "to_char": "TOM",
    "val": 1
  },
  {
    "season": 3,
    "episode": 13,
    "from_char": "AUTUMN",
    "to_char": "CRYSTAL",
    "val": 1
  },
  {
    "season": 3,
    "episode": 13,
    "from_char": "AUTUMN",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 13,
    "from_char": "AUTUMN",
    "to_char": "PETER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 13,
    "from_char": "BEN",
    "to_char": "JACK",
    "val": 2
  },
  {
    "season": 3,
    "episode": 13,
    "from_char": "BEN",
    "to_char": "JULIET",
    "val": 2
  },
  {
    "season": 3,
    "episode": 13,
    "from_char": "BEN",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 13,
    "from_char": "BEN",
    "to_char": "LOCKE",
    "val": 8
  },
  {
    "season": 3,
    "episode": 13,
    "from_char": "BEN",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 3,
    "episode": 13,
    "from_char": "BEN",
    "to_char": "TOM",
    "val": 2
  },
  {
    "season": 3,
    "episode": 13,
    "from_char": "COOPER",
    "to_char": "LOCKE",
    "val": 2
  },
  {
    "season": 3,
    "episode": 13,
    "from_char": "COOPER",
    "to_char": "MRS. TALBOT",
    "val": 1
  },
  {
    "season": 3,
    "episode": 13,
    "from_char": "CRYSTAL",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 13,
    "from_char": "CRYSTAL",
    "to_char": "PETER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 13,
    "from_char": "DETECTIVE MASON",
    "to_char": "KINCAID",
    "val": 1
  },
  {
    "season": 3,
    "episode": 13,
    "from_char": "DETECTIVE MASON",
    "to_char": "LOCKE",
    "val": 2
  },
  {
    "season": 3,
    "episode": 13,
    "from_char": "GOVERNMENT WORKER",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 13,
    "from_char": "JACK",
    "to_char": "JULIET",
    "val": 3
  },
  {
    "season": 3,
    "episode": 13,
    "from_char": "JACK",
    "to_char": "KATE",
    "val": 3
  },
  {
    "season": 3,
    "episode": 13,
    "from_char": "JACK",
    "to_char": "LOCKE",
    "val": 3
  },
  {
    "season": 3,
    "episode": 13,
    "from_char": "JACK",
    "to_char": "OTHER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 13,
    "from_char": "JACK",
    "to_char": "PRYCE",
    "val": 2
  },
  {
    "season": 3,
    "episode": 13,
    "from_char": "JACK",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 3,
    "episode": 13,
    "from_char": "JACK",
    "to_char": "TOM",
    "val": 2
  },
  {
    "season": 3,
    "episode": 13,
    "from_char": "JULIET",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 3,
    "episode": 13,
    "from_char": "JULIET",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 13,
    "from_char": "JULIET",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 3,
    "episode": 13,
    "from_char": "JULIET",
    "to_char": "TOM",
    "val": 2
  },
  {
    "season": 3,
    "episode": 13,
    "from_char": "KATE",
    "to_char": "LOCKE",
    "val": 3
  },
  {
    "season": 3,
    "episode": 13,
    "from_char": "KATE",
    "to_char": "OTHER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 13,
    "from_char": "KATE",
    "to_char": "PRYCE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 13,
    "from_char": "KATE",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 3,
    "episode": 13,
    "from_char": "KATE",
    "to_char": "TOM",
    "val": 2
  },
  {
    "season": 3,
    "episode": 13,
    "from_char": "KINCAID",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 13,
    "from_char": "LOCKE",
    "to_char": "MRS. TALBOT",
    "val": 1
  },
  {
    "season": 3,
    "episode": 13,
    "from_char": "LOCKE",
    "to_char": "OTHER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 13,
    "from_char": "LOCKE",
    "to_char": "PETER",
    "val": 2
  },
  {
    "season": 3,
    "episode": 13,
    "from_char": "LOCKE",
    "to_char": "PRYCE",
    "val": 2
  },
  {
    "season": 3,
    "episode": 13,
    "from_char": "LOCKE",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 3,
    "episode": 13,
    "from_char": "LOCKE",
    "to_char": "TOM",
    "val": 2
  },
  {
    "season": 3,
    "episode": 13,
    "from_char": "OTHER",
    "to_char": "PRYCE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 13,
    "from_char": "PRYCE",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 3,
    "episode": 13,
    "from_char": "SAYID",
    "to_char": "TOM",
    "val": 1
  },
  {
    "season": 3,
    "episode": 14,
    "from_char": "AIRPORT PA",
    "to_char": "BOONE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 14,
    "from_char": "AIRPORT PA",
    "to_char": "NIKKI",
    "val": 1
  },
  {
    "season": 3,
    "episode": 14,
    "from_char": "AIRPORT PA",
    "to_char": "PAULO",
    "val": 1
  },
  {
    "season": 3,
    "episode": 14,
    "from_char": "AIRPORT PA",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 3,
    "episode": 14,
    "from_char": "ANNOUNCER",
    "to_char": "BILLY DEE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 14,
    "from_char": "ANNOUNCER",
    "to_char": "NIKKI",
    "val": 1
  },
  {
    "season": 3,
    "episode": 14,
    "from_char": "ANNOUNCER",
    "to_char": "ZUKERMAN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 14,
    "from_char": "ARZT",
    "to_char": "BOONE",
    "val": 2
  },
  {
    "season": 3,
    "episode": 14,
    "from_char": "ARZT",
    "to_char": "ETHAN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 14,
    "from_char": "ARZT",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 3,
    "episode": 14,
    "from_char": "ARZT",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 3,
    "episode": 14,
    "from_char": "ARZT",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 14,
    "from_char": "ARZT",
    "to_char": "NIKKI",
    "val": 4
  },
  {
    "season": 3,
    "episode": 14,
    "from_char": "ARZT",
    "to_char": "PAULO",
    "val": 2
  },
  {
    "season": 3,
    "episode": 14,
    "from_char": "ARZT",
    "to_char": "SHANNON",
    "val": 2
  },
  {
    "season": 3,
    "episode": 14,
    "from_char": "BEN",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 3,
    "episode": 14,
    "from_char": "BILLY DEE",
    "to_char": "NIKKI",
    "val": 1
  },
  {
    "season": 3,
    "episode": 14,
    "from_char": "BILLY DEE",
    "to_char": "ZUKERMAN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 14,
    "from_char": "BOONE",
    "to_char": "ETHAN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 14,
    "from_char": "BOONE",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 3,
    "episode": 14,
    "from_char": "BOONE",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 14,
    "from_char": "BOONE",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 14,
    "from_char": "BOONE",
    "to_char": "NIKKI",
    "val": 3
  },
  {
    "season": 3,
    "episode": 14,
    "from_char": "BOONE",
    "to_char": "PAULO",
    "val": 3
  },
  {
    "season": 3,
    "episode": 14,
    "from_char": "BOONE",
    "to_char": "SHANNON",
    "val": 2
  },
  {
    "season": 3,
    "episode": 14,
    "from_char": "CHARLIE",
    "to_char": "HURLEY",
    "val": 4
  },
  {
    "season": 3,
    "episode": 14,
    "from_char": "CHARLIE",
    "to_char": "SAWYER",
    "val": 3
  },
  {
    "season": 3,
    "episode": 14,
    "from_char": "CHARLIE",
    "to_char": "SUN",
    "val": 3
  },
  {
    "season": 3,
    "episode": 14,
    "from_char": "DESMOND",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 3,
    "episode": 14,
    "from_char": "ETHAN",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 3,
    "episode": 14,
    "from_char": "ETHAN",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 14,
    "from_char": "ETHAN",
    "to_char": "NIKKI",
    "val": 1
  },
  {
    "season": 3,
    "episode": 14,
    "from_char": "ETHAN",
    "to_char": "PAULO",
    "val": 1
  },
  {
    "season": 3,
    "episode": 14,
    "from_char": "HURLEY",
    "to_char": "JIN",
    "val": 3
  },
  {
    "season": 3,
    "episode": 14,
    "from_char": "HURLEY",
    "to_char": "NIKKI",
    "val": 2
  },
  {
    "season": 3,
    "episode": 14,
    "from_char": "HURLEY",
    "to_char": "PAULO",
    "val": 1
  },
  {
    "season": 3,
    "episode": 14,
    "from_char": "HURLEY",
    "to_char": "SAWYER",
    "val": 9
  },
  {
    "season": 3,
    "episode": 14,
    "from_char": "HURLEY",
    "to_char": "SUN",
    "val": 4
  },
  {
    "season": 3,
    "episode": 14,
    "from_char": "JACK",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 14,
    "from_char": "JACK",
    "to_char": "NIKKI",
    "val": 1
  },
  {
    "season": 3,
    "episode": 14,
    "from_char": "JACK",
    "to_char": "PAULO",
    "val": 1
  },
  {
    "season": 3,
    "episode": 14,
    "from_char": "JIN",
    "to_char": "SAWYER",
    "val": 3
  },
  {
    "season": 3,
    "episode": 14,
    "from_char": "KATE",
    "to_char": "NIKKI",
    "val": 2
  },
  {
    "season": 3,
    "episode": 14,
    "from_char": "KATE",
    "to_char": "PAULO",
    "val": 1
  },
  {
    "season": 3,
    "episode": 14,
    "from_char": "KATE",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 3,
    "episode": 14,
    "from_char": "LOCKE",
    "to_char": "NIKKI",
    "val": 3
  },
  {
    "season": 3,
    "episode": 14,
    "from_char": "LOCKE",
    "to_char": "PAULO",
    "val": 4
  },
  {
    "season": 3,
    "episode": 14,
    "from_char": "LOCKE",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 3,
    "episode": 14,
    "from_char": "NIKKI",
    "to_char": "PAULO",
    "val": 11
  },
  {
    "season": 3,
    "episode": 14,
    "from_char": "NIKKI",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 3,
    "episode": 14,
    "from_char": "NIKKI",
    "to_char": "SHANNON",
    "val": 3
  },
  {
    "season": 3,
    "episode": 14,
    "from_char": "NIKKI",
    "to_char": "ZUKERMAN",
    "val": 2
  },
  {
    "season": 3,
    "episode": 14,
    "from_char": "PAULO",
    "to_char": "SHANNON",
    "val": 2
  },
  {
    "season": 3,
    "episode": 14,
    "from_char": "PAULO",
    "to_char": "ZUKERMAN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 14,
    "from_char": "SAWYER",
    "to_char": "SUN",
    "val": 4
  },
  {
    "season": 3,
    "episode": 15,
    "from_char": "CASSIDY",
    "to_char": "DIANE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 15,
    "from_char": "CASSIDY",
    "to_char": "EDWARD MARS",
    "val": 1
  },
  {
    "season": 3,
    "episode": 15,
    "from_char": "CASSIDY",
    "to_char": "FEDERAL AGENT",
    "val": 1
  },
  {
    "season": 3,
    "episode": 15,
    "from_char": "CASSIDY",
    "to_char": "JOHNNY",
    "val": 1
  },
  {
    "season": 3,
    "episode": 15,
    "from_char": "CASSIDY",
    "to_char": "KATE",
    "val": 4
  },
  {
    "season": 3,
    "episode": 15,
    "from_char": "CASSIDY",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 15,
    "from_char": "CASSIDY",
    "to_char": "MARS",
    "val": 1
  },
  {
    "season": 3,
    "episode": 15,
    "from_char": "CHARLIE",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 3,
    "episode": 15,
    "from_char": "CHARLIE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 15,
    "from_char": "CLAIRE",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 3,
    "episode": 15,
    "from_char": "CLAIRE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 15,
    "from_char": "DESMOND",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 15,
    "from_char": "DIANE",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 15,
    "from_char": "EDWARD MARS",
    "to_char": "FEDERAL AGENT",
    "val": 1
  },
  {
    "season": 3,
    "episode": 15,
    "from_char": "EDWARD MARS",
    "to_char": "MARS",
    "val": 1
  },
  {
    "season": 3,
    "episode": 15,
    "from_char": "FEDERAL AGENT",
    "to_char": "MARS",
    "val": 1
  },
  {
    "season": 3,
    "episode": 15,
    "from_char": "HURLEY",
    "to_char": "SAWYER",
    "val": 4
  },
  {
    "season": 3,
    "episode": 15,
    "from_char": "JACK",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 3,
    "episode": 15,
    "from_char": "JACK",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 3,
    "episode": 15,
    "from_char": "JACK",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 3,
    "episode": 15,
    "from_char": "JOHNNY",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 15,
    "from_char": "JOHNNY",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 15,
    "from_char": "JULIET",
    "to_char": "KATE",
    "val": 8
  },
  {
    "season": 3,
    "episode": 15,
    "from_char": "JULIET",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 3,
    "episode": 15,
    "from_char": "KATE",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 15,
    "from_char": "KATE",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 15,
    "from_char": "KATE",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 3,
    "episode": 15,
    "from_char": "KATE",
    "to_char": "TRUCK DRIVER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 16,
    "from_char": "BEN",
    "to_char": "ETHAN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 16,
    "from_char": "BEN",
    "to_char": "JULIET",
    "val": 6
  },
  {
    "season": 3,
    "episode": 16,
    "from_char": "BEN",
    "to_char": "MIKHAIL",
    "val": 1
  },
  {
    "season": 3,
    "episode": 16,
    "from_char": "BEN",
    "to_char": "UNNAMED OTHER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 16,
    "from_char": "CHARLIE",
    "to_char": "CLAIRE",
    "val": 2
  },
  {
    "season": 3,
    "episode": 16,
    "from_char": "CHARLIE",
    "to_char": "DESMOND",
    "val": 2
  },
  {
    "season": 3,
    "episode": 16,
    "from_char": "CHARLIE",
    "to_char": "HURLEY",
    "val": 2
  },
  {
    "season": 3,
    "episode": 16,
    "from_char": "CHARLIE",
    "to_char": "JACK",
    "val": 2
  },
  {
    "season": 3,
    "episode": 16,
    "from_char": "CHARLIE",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 16,
    "from_char": "CHARLIE",
    "to_char": "JULIET",
    "val": 2
  },
  {
    "season": 3,
    "episode": 16,
    "from_char": "CHARLIE",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 16,
    "from_char": "CHARLIE",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 3,
    "episode": 16,
    "from_char": "CHARLIE",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 3,
    "episode": 16,
    "from_char": "CHARLIE",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 3,
    "episode": 16,
    "from_char": "CLAIRE",
    "to_char": "DESMOND",
    "val": 1
  },
  {
    "season": 3,
    "episode": 16,
    "from_char": "CLAIRE",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 3,
    "episode": 16,
    "from_char": "CLAIRE",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 3,
    "episode": 16,
    "from_char": "CLAIRE",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 3,
    "episode": 16,
    "from_char": "CLAIRE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 16,
    "from_char": "CLAIRE",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 16,
    "from_char": "DESMOND",
    "to_char": "HURLEY",
    "val": 2
  },
  {
    "season": 3,
    "episode": 16,
    "from_char": "DESMOND",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 3,
    "episode": 16,
    "from_char": "DESMOND",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 16,
    "from_char": "DESMOND",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 3,
    "episode": 16,
    "from_char": "DESMOND",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 16,
    "from_char": "DESMOND",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 3,
    "episode": 16,
    "from_char": "DESMOND",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 3,
    "episode": 16,
    "from_char": "DESMOND",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 3,
    "episode": 16,
    "from_char": "ETHAN",
    "to_char": "GOODWIN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 16,
    "from_char": "ETHAN",
    "to_char": "GUARD",
    "val": 1
  },
  {
    "season": 3,
    "episode": 16,
    "from_char": "ETHAN",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 3,
    "episode": 16,
    "from_char": "ETHAN",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 3,
    "episode": 16,
    "from_char": "ETHAN",
    "to_char": "JULIET",
    "val": 4
  },
  {
    "season": 3,
    "episode": 16,
    "from_char": "ETHAN",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 16,
    "from_char": "ETHAN",
    "to_char": "RACHEL",
    "val": 1
  },
  {
    "season": 3,
    "episode": 16,
    "from_char": "ETHAN",
    "to_char": "RICHARD",
    "val": 2
  },
  {
    "season": 3,
    "episode": 16,
    "from_char": "ETHAN",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 16,
    "from_char": "GOODWIN",
    "to_char": "JULIET",
    "val": 2
  },
  {
    "season": 3,
    "episode": 16,
    "from_char": "GUARD",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 3,
    "episode": 16,
    "from_char": "GUARD",
    "to_char": "RACHEL",
    "val": 1
  },
  {
    "season": 3,
    "episode": 16,
    "from_char": "GUARD",
    "to_char": "RICHARD",
    "val": 1
  },
  {
    "season": 3,
    "episode": 16,
    "from_char": "HURLEY",
    "to_char": "JACK",
    "val": 2
  },
  {
    "season": 3,
    "episode": 16,
    "from_char": "HURLEY",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 16,
    "from_char": "HURLEY",
    "to_char": "JULIET",
    "val": 3
  },
  {
    "season": 3,
    "episode": 16,
    "from_char": "HURLEY",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 3,
    "episode": 16,
    "from_char": "HURLEY",
    "to_char": "SAWYER",
    "val": 3
  },
  {
    "season": 3,
    "episode": 16,
    "from_char": "HURLEY",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 3,
    "episode": 16,
    "from_char": "HURLEY",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 3,
    "episode": 16,
    "from_char": "JACK",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 16,
    "from_char": "JACK",
    "to_char": "JULIET",
    "val": 6
  },
  {
    "season": 3,
    "episode": 16,
    "from_char": "JACK",
    "to_char": "KATE",
    "val": 4
  },
  {
    "season": 3,
    "episode": 16,
    "from_char": "JACK",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 3,
    "episode": 16,
    "from_char": "JACK",
    "to_char": "SAYID",
    "val": 3
  },
  {
    "season": 3,
    "episode": 16,
    "from_char": "JACK",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 16,
    "from_char": "JIN",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 3,
    "episode": 16,
    "from_char": "JIN",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 16,
    "from_char": "JIN",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 16,
    "from_char": "JIN",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 3,
    "episode": 16,
    "from_char": "JIN",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 16,
    "from_char": "JULIET",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 3,
    "episode": 16,
    "from_char": "JULIET",
    "to_char": "MIKHAIL",
    "val": 1
  },
  {
    "season": 3,
    "episode": 16,
    "from_char": "JULIET",
    "to_char": "RACHEL",
    "val": 1
  },
  {
    "season": 3,
    "episode": 16,
    "from_char": "JULIET",
    "to_char": "RICHARD",
    "val": 2
  },
  {
    "season": 3,
    "episode": 16,
    "from_char": "JULIET",
    "to_char": "SAWYER",
    "val": 3
  },
  {
    "season": 3,
    "episode": 16,
    "from_char": "JULIET",
    "to_char": "SAYID",
    "val": 4
  },
  {
    "season": 3,
    "episode": 16,
    "from_char": "JULIET",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 16,
    "from_char": "JULIET",
    "to_char": "UNNAMED OTHER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 16,
    "from_char": "KATE",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 3,
    "episode": 16,
    "from_char": "KATE",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 3,
    "episode": 16,
    "from_char": "KATE",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 16,
    "from_char": "RACHEL",
    "to_char": "RICHARD",
    "val": 1
  },
  {
    "season": 3,
    "episode": 16,
    "from_char": "SAWYER",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 3,
    "episode": 16,
    "from_char": "SAWYER",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 3,
    "episode": 16,
    "from_char": "SAYID",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 17,
    "from_char": "CHARLIE",
    "to_char": "DESMOND",
    "val": 12
  },
  {
    "season": 3,
    "episode": 17,
    "from_char": "CHARLIE",
    "to_char": "HURLEY",
    "val": 11
  },
  {
    "season": 3,
    "episode": 17,
    "from_char": "CHARLIE",
    "to_char": "JIN",
    "val": 8
  },
  {
    "season": 3,
    "episode": 17,
    "from_char": "CHARLIE",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 17,
    "from_char": "DESMOND",
    "to_char": "HURLEY",
    "val": 13
  },
  {
    "season": 3,
    "episode": 17,
    "from_char": "DESMOND",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 3,
    "episode": 17,
    "from_char": "DESMOND",
    "to_char": "JIN",
    "val": 9
  },
  {
    "season": 3,
    "episode": 17,
    "from_char": "DESMOND",
    "to_char": "MAN",
    "val": 2
  },
  {
    "season": 3,
    "episode": 17,
    "from_char": "DESMOND",
    "to_char": "MONK",
    "val": 5
  },
  {
    "season": 3,
    "episode": 17,
    "from_char": "DESMOND",
    "to_char": "MONK 2",
    "val": 1
  },
  {
    "season": 3,
    "episode": 17,
    "from_char": "DESMOND",
    "to_char": "PENNY",
    "val": 1
  },
  {
    "season": 3,
    "episode": 17,
    "from_char": "DESMOND",
    "to_char": "RUTH",
    "val": 1
  },
  {
    "season": 3,
    "episode": 17,
    "from_char": "DESMOND",
    "to_char": "WOMAN",
    "val": 2
  },
  {
    "season": 3,
    "episode": 17,
    "from_char": "HURLEY",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 3,
    "episode": 17,
    "from_char": "HURLEY",
    "to_char": "JIN",
    "val": 9
  },
  {
    "season": 3,
    "episode": 17,
    "from_char": "HURLEY",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 17,
    "from_char": "JACK",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 3,
    "episode": 17,
    "from_char": "JACK",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 17,
    "from_char": "JACK",
    "to_char": "SAWYER",
    "val": 3
  },
  {
    "season": 3,
    "episode": 17,
    "from_char": "JULIET",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 17,
    "from_char": "KATE",
    "to_char": "SAWYER",
    "val": 3
  },
  {
    "season": 3,
    "episode": 17,
    "from_char": "MAN",
    "to_char": "MONK",
    "val": 1
  },
  {
    "season": 3,
    "episode": 17,
    "from_char": "MAN",
    "to_char": "MONK 2",
    "val": 1
  },
  {
    "season": 3,
    "episode": 17,
    "from_char": "MAN",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 17,
    "from_char": "MONK",
    "to_char": "MONK 2",
    "val": 1
  },
  {
    "season": 3,
    "episode": 17,
    "from_char": "MONK",
    "to_char": "PENNY",
    "val": 1
  },
  {
    "season": 3,
    "episode": 18,
    "from_char": "BUSINESSMAN",
    "to_char": "BUSINESSMAN 1",
    "val": 1
  },
  {
    "season": 3,
    "episode": 18,
    "from_char": "BUSINESSMAN",
    "to_char": "BUSINESSMAN 2",
    "val": 1
  },
  {
    "season": 3,
    "episode": 18,
    "from_char": "BUSINESSMAN",
    "to_char": "MR. PAIK",
    "val": 1
  },
  {
    "season": 3,
    "episode": 18,
    "from_char": "BUSINESSMAN",
    "to_char": "SECRETARY",
    "val": 1
  },
  {
    "season": 3,
    "episode": 18,
    "from_char": "BUSINESSMAN",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 18,
    "from_char": "BUSINESSMAN 1",
    "to_char": "BUSINESSMAN 2",
    "val": 1
  },
  {
    "season": 3,
    "episode": 18,
    "from_char": "BUSINESSMAN 1",
    "to_char": "MR. PAIK",
    "val": 1
  },
  {
    "season": 3,
    "episode": 18,
    "from_char": "BUSINESSMAN 1",
    "to_char": "SECRETARY",
    "val": 1
  },
  {
    "season": 3,
    "episode": 18,
    "from_char": "BUSINESSMAN 1",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 18,
    "from_char": "BUSINESSMAN 2",
    "to_char": "MR. PAIK",
    "val": 1
  },
  {
    "season": 3,
    "episode": 18,
    "from_char": "BUSINESSMAN 2",
    "to_char": "SECRETARY",
    "val": 1
  },
  {
    "season": 3,
    "episode": 18,
    "from_char": "BUSINESSMAN 2",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 18,
    "from_char": "CHARLIE",
    "to_char": "DESMOND",
    "val": 5
  },
  {
    "season": 3,
    "episode": 18,
    "from_char": "CHARLIE",
    "to_char": "HURLEY",
    "val": 4
  },
  {
    "season": 3,
    "episode": 18,
    "from_char": "CHARLIE",
    "to_char": "JIN",
    "val": 4
  },
  {
    "season": 3,
    "episode": 18,
    "from_char": "CHARLIE",
    "to_char": "MIKHAIL",
    "val": 2
  },
  {
    "season": 3,
    "episode": 18,
    "from_char": "CHARLIE",
    "to_char": "PARACHUTIST",
    "val": 4
  },
  {
    "season": 3,
    "episode": 18,
    "from_char": "DESMOND",
    "to_char": "HURLEY",
    "val": 5
  },
  {
    "season": 3,
    "episode": 18,
    "from_char": "DESMOND",
    "to_char": "JIN",
    "val": 4
  },
  {
    "season": 3,
    "episode": 18,
    "from_char": "DESMOND",
    "to_char": "MIKHAIL",
    "val": 3
  },
  {
    "season": 3,
    "episode": 18,
    "from_char": "DESMOND",
    "to_char": "PARACHUTIST",
    "val": 5
  },
  {
    "season": 3,
    "episode": 18,
    "from_char": "HURLEY",
    "to_char": "JIN",
    "val": 3
  },
  {
    "season": 3,
    "episode": 18,
    "from_char": "HURLEY",
    "to_char": "MIKHAIL",
    "val": 2
  },
  {
    "season": 3,
    "episode": 18,
    "from_char": "HURLEY",
    "to_char": "PARACHUTIST",
    "val": 5
  },
  {
    "season": 3,
    "episode": 18,
    "from_char": "JACK",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 18,
    "from_char": "JIN",
    "to_char": "MIKHAIL",
    "val": 1
  },
  {
    "season": 3,
    "episode": 18,
    "from_char": "JIN",
    "to_char": "PARACHUTIST",
    "val": 3
  },
  {
    "season": 3,
    "episode": 18,
    "from_char": "JIN",
    "to_char": "SUN",
    "val": 3
  },
  {
    "season": 3,
    "episode": 18,
    "from_char": "JIN",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 18,
    "from_char": "JULIET",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 18,
    "from_char": "JULIET",
    "to_char": "SUN",
    "val": 7
  },
  {
    "season": 3,
    "episode": 18,
    "from_char": "KATE",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 18,
    "from_char": "MIKHAIL",
    "to_char": "PARACHUTIST",
    "val": 2
  },
  {
    "season": 3,
    "episode": 18,
    "from_char": "MR. KWON",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 3,
    "episode": 18,
    "from_char": "MR. PAIK",
    "to_char": "SECRETARY",
    "val": 1
  },
  {
    "season": 3,
    "episode": 18,
    "from_char": "MR. PAIK",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 18,
    "from_char": "SECRETARY",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 18,
    "from_char": "SUN",
    "to_char": "WOMAN",
    "val": 2
  },
  {
    "season": 3,
    "episode": 19,
    "from_char": "BEN",
    "to_char": "CINDY",
    "val": 1
  },
  {
    "season": 3,
    "episode": 19,
    "from_char": "BEN",
    "to_char": "COOPER",
    "val": 2
  },
  {
    "season": 3,
    "episode": 19,
    "from_char": "BEN",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 3,
    "episode": 19,
    "from_char": "BEN",
    "to_char": "LOCKE",
    "val": 4
  },
  {
    "season": 3,
    "episode": 19,
    "from_char": "BEN",
    "to_char": "TOM",
    "val": 1
  },
  {
    "season": 3,
    "episode": 19,
    "from_char": "CHARLIE",
    "to_char": "DESMOND",
    "val": 2
  },
  {
    "season": 3,
    "episode": 19,
    "from_char": "CHARLIE",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 3,
    "episode": 19,
    "from_char": "CHARLIE",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 3,
    "episode": 19,
    "from_char": "CHARLIE",
    "to_char": "NAOMI",
    "val": 1
  },
  {
    "season": 3,
    "episode": 19,
    "from_char": "CHARLIE",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 3,
    "episode": 19,
    "from_char": "CINDY",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 3,
    "episode": 19,
    "from_char": "CINDY",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 19,
    "from_char": "CINDY",
    "to_char": "TOM",
    "val": 1
  },
  {
    "season": 3,
    "episode": 19,
    "from_char": "COOPER",
    "to_char": "LOCKE",
    "val": 4
  },
  {
    "season": 3,
    "episode": 19,
    "from_char": "COOPER",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 3,
    "episode": 19,
    "from_char": "DESMOND",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 3,
    "episode": 19,
    "from_char": "DESMOND",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 3,
    "episode": 19,
    "from_char": "DESMOND",
    "to_char": "NAOMI",
    "val": 1
  },
  {
    "season": 3,
    "episode": 19,
    "from_char": "DESMOND",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 3,
    "episode": 19,
    "from_char": "HURLEY",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 3,
    "episode": 19,
    "from_char": "HURLEY",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 3,
    "episode": 19,
    "from_char": "HURLEY",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 19,
    "from_char": "HURLEY",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 19,
    "from_char": "HURLEY",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 3,
    "episode": 19,
    "from_char": "JACK",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 3,
    "episode": 19,
    "from_char": "JACK",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 19,
    "from_char": "JULIET",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 19,
    "from_char": "JULIET",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 19,
    "from_char": "JULIET",
    "to_char": "TOM",
    "val": 1
  },
  {
    "season": 3,
    "episode": 19,
    "from_char": "KATE",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 19,
    "from_char": "KATE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 19,
    "from_char": "KATE",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 3,
    "episode": 19,
    "from_char": "LOCKE",
    "to_char": "RICHARD",
    "val": 1
  },
  {
    "season": 3,
    "episode": 19,
    "from_char": "LOCKE",
    "to_char": "ROUSSEAU",
    "val": 1
  },
  {
    "season": 3,
    "episode": 19,
    "from_char": "LOCKE",
    "to_char": "SAWYER",
    "val": 9
  },
  {
    "season": 3,
    "episode": 19,
    "from_char": "LOCKE",
    "to_char": "TOM",
    "val": 1
  },
  {
    "season": 3,
    "episode": 19,
    "from_char": "NAOMI",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 3,
    "episode": 19,
    "from_char": "ROUSSEAU",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "ALEX",
    "to_char": "BEN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "ALEX",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "ANNIE",
    "to_char": "BEN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "ANNIE",
    "to_char": "GIRL",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "ANNIE",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "ANNIE",
    "to_char": "MARVIN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "ANNIE",
    "to_char": "OLIVIA",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "ANNIE",
    "to_char": "OPAL",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "ANNIE",
    "to_char": "ROGER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "BEN",
    "to_char": "CLAIRE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "BEN",
    "to_char": "EMILY",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "BEN",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "BEN",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "BEN",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "BEN",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "BEN",
    "to_char": "LOCKE",
    "val": 8
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "BEN",
    "to_char": "MIKHAIL",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "BEN",
    "to_char": "NAOMI",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "BEN",
    "to_char": "RICHARD",
    "val": 3
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "BEN",
    "to_char": "ROGER",
    "val": 3
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "BEN",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "BEN",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "BEN",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "BEN",
    "to_char": "VOICE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "CHARLIE",
    "to_char": "CLAIRE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "CHARLIE",
    "to_char": "DESMOND",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "CHARLIE",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "CHARLIE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "CHARLIE",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "CLAIRE",
    "to_char": "DESMOND",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "CLAIRE",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "CLAIRE",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "CLAIRE",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "CLAIRE",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "CLAIRE",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "CLAIRE",
    "to_char": "NAOMI",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "CLAIRE",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "CLAIRE",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "CLAIRE",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "DESMOND",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "DESMOND",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "DESMOND",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "EMILY",
    "to_char": "MALE DRIVER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "EMILY",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "EMILY",
    "to_char": "ROGER",
    "val": 2
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "EMILY",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "GIRL",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "GIRL",
    "to_char": "MARVIN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "GIRL",
    "to_char": "OPAL",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "GIRL",
    "to_char": "ROGER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "HORACE",
    "to_char": "MALE DRIVER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "HORACE",
    "to_char": "MR. GOODSPEED",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "HORACE",
    "to_char": "ROGER",
    "val": 2
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "HORACE",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "HURLEY",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "HURLEY",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "JACK",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "JACK",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "JACK",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "JACK",
    "to_char": "NAOMI",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "JACK",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "JACK",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "JACK",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "JIN",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "JIN",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "JIN",
    "to_char": "NAOMI",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "JIN",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "JIN",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "JIN",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "JULIET",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "JULIET",
    "to_char": "NAOMI",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "JULIET",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "JULIET",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "JULIET",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "KATE",
    "to_char": "NAOMI",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "KATE",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "KATE",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "KATE",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "LOCKE",
    "to_char": "MIKHAIL",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "LOCKE",
    "to_char": "RICHARD",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "LOCKE",
    "to_char": "VOICE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "MALE DRIVER",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "MALE DRIVER",
    "to_char": "MR. GOODSPEED",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "MALE DRIVER",
    "to_char": "ROGER",
    "val": 2
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "MALE DRIVER",
    "to_char": "WOMAN",
    "val": 2
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "MAN",
    "to_char": "MARVIN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "MAN",
    "to_char": "OPAL",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "MAN",
    "to_char": "ROGER",
    "val": 2
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "MAN",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "MARVIN",
    "to_char": "OPAL",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "MARVIN",
    "to_char": "ROGER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "MR. GOODSPEED",
    "to_char": "ROGER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "MR. GOODSPEED",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "NAOMI",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "NAOMI",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "NAOMI",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "OPAL",
    "to_char": "ROGER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "ROGER",
    "to_char": "WOMAN",
    "val": 2
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "SAWYER",
    "to_char": "SAYID",
    "val": 3
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "SAWYER",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 20,
    "from_char": "SAYID",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "ALEX",
    "to_char": "BEN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "ALEX",
    "to_char": "KARL",
    "val": 1
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "ALEX",
    "to_char": "RICHARD",
    "val": 1
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "ALEX",
    "to_char": "RYAN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "BEN",
    "to_char": "KARL",
    "val": 1
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "BEN",
    "to_char": "RICHARD",
    "val": 1
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "BEN",
    "to_char": "RYAN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "BERNARD",
    "to_char": "CHARLIE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "BERNARD",
    "to_char": "CLAIRE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "BERNARD",
    "to_char": "DESMOND",
    "val": 1
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "BERNARD",
    "to_char": "HURLEY",
    "val": 2
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "BERNARD",
    "to_char": "JACK",
    "val": 2
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "BERNARD",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "BERNARD",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "BERNARD",
    "to_char": "KARL",
    "val": 2
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "BERNARD",
    "to_char": "ROSE",
    "val": 2
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "BERNARD",
    "to_char": "ROUSSEAU",
    "val": 1
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "BERNARD",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "BERNARD",
    "to_char": "SAYID",
    "val": 3
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "BERNARD",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "CHARLIE",
    "to_char": "CLAIRE",
    "val": 5
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "CHARLIE",
    "to_char": "DESMOND",
    "val": 6
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "CHARLIE",
    "to_char": "DRIVER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "CHARLIE",
    "to_char": "HURLEY",
    "val": 3
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "CHARLIE",
    "to_char": "JACK",
    "val": 3
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "CHARLIE",
    "to_char": "JULIET",
    "val": 3
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "CHARLIE",
    "to_char": "KARL",
    "val": 1
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "CHARLIE",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "CHARLIE",
    "to_char": "LIAM",
    "val": 3
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "CHARLIE",
    "to_char": "MR. PACE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "CHARLIE",
    "to_char": "NADIA",
    "val": 1
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "CHARLIE",
    "to_char": "NAOMI",
    "val": 1
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "CHARLIE",
    "to_char": "ROUSSEAU",
    "val": 1
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "CHARLIE",
    "to_char": "SAYID",
    "val": 3
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "CHARLIE",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "CHARLIE",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "CLAIRE",
    "to_char": "DESMOND",
    "val": 3
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "CLAIRE",
    "to_char": "HURLEY",
    "val": 3
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "CLAIRE",
    "to_char": "JACK",
    "val": 2
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "CLAIRE",
    "to_char": "JULIET",
    "val": 2
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "CLAIRE",
    "to_char": "KARL",
    "val": 1
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "CLAIRE",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "CLAIRE",
    "to_char": "ROUSSEAU",
    "val": 1
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "CLAIRE",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "CLAIRE",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "DESMOND",
    "to_char": "HURLEY",
    "val": 2
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "DESMOND",
    "to_char": "JACK",
    "val": 2
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "DESMOND",
    "to_char": "JULIET",
    "val": 2
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "DESMOND",
    "to_char": "KARL",
    "val": 1
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "DESMOND",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "DESMOND",
    "to_char": "ROUSSEAU",
    "val": 1
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "DESMOND",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "DESMOND",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "DRIVER",
    "to_char": "LIAM",
    "val": 1
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "HURLEY",
    "to_char": "JACK",
    "val": 2
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "HURLEY",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "HURLEY",
    "to_char": "JULIET",
    "val": 2
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "HURLEY",
    "to_char": "KARL",
    "val": 2
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "HURLEY",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "HURLEY",
    "to_char": "ROSE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "HURLEY",
    "to_char": "ROUSSEAU",
    "val": 1
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "HURLEY",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "HURLEY",
    "to_char": "SAYID",
    "val": 3
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "HURLEY",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "JACK",
    "to_char": "JULIET",
    "val": 5
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "JACK",
    "to_char": "KARL",
    "val": 1
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "JACK",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "JACK",
    "to_char": "ROSE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "JACK",
    "to_char": "ROUSSEAU",
    "val": 2
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "JACK",
    "to_char": "SAYID",
    "val": 5
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "JACK",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "JIN",
    "to_char": "KARL",
    "val": 1
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "JIN",
    "to_char": "ROSE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "JIN",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "JIN",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "JIN",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "JULIET",
    "to_char": "KARL",
    "val": 1
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "JULIET",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "JULIET",
    "to_char": "ROUSSEAU",
    "val": 2
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "JULIET",
    "to_char": "SAYID",
    "val": 4
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "JULIET",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "KARL",
    "to_char": "RICHARD",
    "val": 1
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "KARL",
    "to_char": "ROSE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "KARL",
    "to_char": "ROUSSEAU",
    "val": 1
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "KARL",
    "to_char": "RYAN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "KARL",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "KARL",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "KARL",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "KATE",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "LIAM",
    "to_char": "MR. PACE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "NADIA",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "RICHARD",
    "to_char": "RYAN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "ROSE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "ROSE",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "ROSE",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "ROUSSEAU",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "ROUSSEAU",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "SAWYER",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "SAWYER",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 21,
    "from_char": "SAYID",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "ALEX",
    "to_char": "BEN",
    "val": 3
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "ALEX",
    "to_char": "BERNARD",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "ALEX",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "ALEX",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "ALEX",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "ALEX",
    "to_char": "RICHARD",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "ALEX",
    "to_char": "ROUSSEAU",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "ALEX",
    "to_char": "RYAN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "ALEX",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "ALEX",
    "to_char": "TOM",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "BEN",
    "to_char": "BERNARD",
    "val": 2
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "BEN",
    "to_char": "BLONDE WOMAN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "BEN",
    "to_char": "BONNIE",
    "val": 4
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "BEN",
    "to_char": "BRUNETTE WOMAN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "BEN",
    "to_char": "CHARLIE",
    "val": 4
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "BEN",
    "to_char": "CLAIRE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "BEN",
    "to_char": "DESMOND",
    "val": 2
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "BEN",
    "to_char": "FEMALE VOICE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "BEN",
    "to_char": "GRETA",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "BEN",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "BEN",
    "to_char": "JACK",
    "val": 5
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "BEN",
    "to_char": "JIN",
    "val": 2
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "BEN",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "BEN",
    "to_char": "KATE",
    "val": 3
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "BEN",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "BEN",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "BEN",
    "to_char": "MIKHAIL",
    "val": 3
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "BEN",
    "to_char": "MINKOWSKI",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "BEN",
    "to_char": "NAOMI",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "BEN",
    "to_char": "RICHARD",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "BEN",
    "to_char": "ROUSSEAU",
    "val": 3
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "BEN",
    "to_char": "RYAN",
    "val": 2
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "BEN",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "BEN",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "BEN",
    "to_char": "TOM",
    "val": 2
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "BEN",
    "to_char": "VOICE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "BERNARD",
    "to_char": "BONNIE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "BERNARD",
    "to_char": "CHARLIE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "BERNARD",
    "to_char": "CLAIRE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "BERNARD",
    "to_char": "DESMOND",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "BERNARD",
    "to_char": "FEMALE OTHER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "BERNARD",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "BERNARD",
    "to_char": "JACK",
    "val": 2
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "BERNARD",
    "to_char": "JIN",
    "val": 3
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "BERNARD",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "BERNARD",
    "to_char": "MALE OTHER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "BERNARD",
    "to_char": "NAOMI",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "BERNARD",
    "to_char": "RICHARD",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "BERNARD",
    "to_char": "ROSE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "BERNARD",
    "to_char": "RYAN",
    "val": 3
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "BERNARD",
    "to_char": "SAYID",
    "val": 3
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "BERNARD",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "BERNARD",
    "to_char": "TOM",
    "val": 3
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "BLONDE WOMAN",
    "to_char": "BONNIE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "BLONDE WOMAN",
    "to_char": "BRUNETTE WOMAN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "BLONDE WOMAN",
    "to_char": "CHARLIE",
    "val": 2
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "BLONDE WOMAN",
    "to_char": "DESMOND",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "BLONDE WOMAN",
    "to_char": "MIKHAIL",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "BONNIE",
    "to_char": "BRUNETTE WOMAN",
    "val": 2
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "BONNIE",
    "to_char": "CHARLIE",
    "val": 6
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "BONNIE",
    "to_char": "DESMOND",
    "val": 3
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "BONNIE",
    "to_char": "DR. HAMILL",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "BONNIE",
    "to_char": "GRETA",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "BONNIE",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "BONNIE",
    "to_char": "JACK",
    "val": 3
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "BONNIE",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "BONNIE",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "BONNIE",
    "to_char": "MALE DOCTOR",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "BONNIE",
    "to_char": "MIKHAIL",
    "val": 3
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "BONNIE",
    "to_char": "REPORTER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "BONNIE",
    "to_char": "ROUSSEAU",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "BONNIE",
    "to_char": "RYAN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "BONNIE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "BONNIE",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "BONNIE",
    "to_char": "TOM",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "BRUNETTE WOMAN",
    "to_char": "CHARLIE",
    "val": 3
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "BRUNETTE WOMAN",
    "to_char": "DESMOND",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "BRUNETTE WOMAN",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "BRUNETTE WOMAN",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "BRUNETTE WOMAN",
    "to_char": "MIKHAIL",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "BRUNETTE WOMAN",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "CAPTAIN",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "CAPTAIN",
    "to_char": "STEWARDESS",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "CAPTAIN",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "CHARLIE",
    "to_char": "DESMOND",
    "val": 5
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "CHARLIE",
    "to_char": "DR. HAMILL",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "CHARLIE",
    "to_char": "GRETA",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "CHARLIE",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "CHARLIE",
    "to_char": "JACK",
    "val": 3
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "CHARLIE",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "CHARLIE",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "CHARLIE",
    "to_char": "MALE DOCTOR",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "CHARLIE",
    "to_char": "MIKHAIL",
    "val": 3
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "CHARLIE",
    "to_char": "PENNY",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "CHARLIE",
    "to_char": "REPORTER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "CHARLIE",
    "to_char": "ROUSSEAU",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "CHARLIE",
    "to_char": "RYAN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "CHARLIE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "CHARLIE",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "CHARLIE",
    "to_char": "TOM",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "CLAIRE",
    "to_char": "FEMALE VOICE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "CLAIRE",
    "to_char": "HURLEY",
    "val": 2
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "CLAIRE",
    "to_char": "JACK",
    "val": 3
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "CLAIRE",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "CLAIRE",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "CLAIRE",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "CLAIRE",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "CLAIRE",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "CLAIRE",
    "to_char": "MINKOWSKI",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "CLAIRE",
    "to_char": "NAOMI",
    "val": 2
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "CLAIRE",
    "to_char": "ROSE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "CLAIRE",
    "to_char": "ROUSSEAU",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "CLAIRE",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "CLAIRE",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "CLAIRE",
    "to_char": "VOICE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "DESMOND",
    "to_char": "DR. HAMILL",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "DESMOND",
    "to_char": "GRETA",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "DESMOND",
    "to_char": "JACK",
    "val": 3
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "DESMOND",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "DESMOND",
    "to_char": "MALE DOCTOR",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "DESMOND",
    "to_char": "MIKHAIL",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "DESMOND",
    "to_char": "PENNY",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "DESMOND",
    "to_char": "REPORTER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "DESMOND",
    "to_char": "ROUSSEAU",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "DESMOND",
    "to_char": "RYAN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "DESMOND",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "DESMOND",
    "to_char": "TOM",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "DIRECTOR",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "DIRECTOR",
    "to_char": "VOICEMAIL",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "DOCTOR",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "DOCTOR",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "DOCTOR",
    "to_char": "ROSE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "DOCTOR",
    "to_char": "SARAH",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "DOCTOR",
    "to_char": "TANNOY",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "DR. HAMILL",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "DR. HAMILL",
    "to_char": "JACK",
    "val": 2
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "DR. HAMILL",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "DR. HAMILL",
    "to_char": "MALE DOCTOR",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "DR. HAMILL",
    "to_char": "MALE OTHER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "DR. HAMILL",
    "to_char": "REPORTER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "DR. HAMILL",
    "to_char": "RYAN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "DR. HAMILL",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "DR. HAMILL",
    "to_char": "TOM",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "FEMALE OTHER",
    "to_char": "MALE OTHER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "FEMALE OTHER",
    "to_char": "RYAN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "FEMALE OTHER",
    "to_char": "TOM",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "FEMALE VOICE",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "FEMALE VOICE",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "FEMALE VOICE",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "FEMALE VOICE",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "FEMALE VOICE",
    "to_char": "MINKOWSKI",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "FEMALE VOICE",
    "to_char": "NAOMI",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "FEMALE VOICE",
    "to_char": "ROUSSEAU",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "FEMALE VOICE",
    "to_char": "VOICE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "GRETA",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "GRETA",
    "to_char": "MIKHAIL",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "GRETA",
    "to_char": "ROUSSEAU",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "HURLEY",
    "to_char": "JACK",
    "val": 3
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "HURLEY",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "HURLEY",
    "to_char": "JULIET",
    "val": 3
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "HURLEY",
    "to_char": "MALE OTHER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "HURLEY",
    "to_char": "MIKHAIL",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "HURLEY",
    "to_char": "NAOMI",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "HURLEY",
    "to_char": "ROSE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "HURLEY",
    "to_char": "RYAN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "HURLEY",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "HURLEY",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "HURLEY",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "HURLEY",
    "to_char": "TOM",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "JACK",
    "to_char": "JIN",
    "val": 2
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "JACK",
    "to_char": "JULIET",
    "val": 3
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "JACK",
    "to_char": "KATE",
    "val": 8
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "JACK",
    "to_char": "KID",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "JACK",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "JACK",
    "to_char": "MALE DOCTOR",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "JACK",
    "to_char": "MALE OTHER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "JACK",
    "to_char": "MAN",
    "val": 2
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "JACK",
    "to_char": "MIKHAIL",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "JACK",
    "to_char": "MINKOWSKI",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "JACK",
    "to_char": "MOTHER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "JACK",
    "to_char": "NAOMI",
    "val": 2
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "JACK",
    "to_char": "PHARMACIST",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "JACK",
    "to_char": "REPORTER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "JACK",
    "to_char": "ROSE",
    "val": 3
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "JACK",
    "to_char": "ROUSSEAU",
    "val": 3
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "JACK",
    "to_char": "RYAN",
    "val": 2
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "JACK",
    "to_char": "SARAH",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "JACK",
    "to_char": "SAWYER",
    "val": 3
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "JACK",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "JACK",
    "to_char": "STEWARDESS",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "JACK",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "JACK",
    "to_char": "TANNOY",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "JACK",
    "to_char": "TOM",
    "val": 2
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "JACK",
    "to_char": "VOICE",
    "val": 2
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "JACK",
    "to_char": "VOICEMAIL",
    "val": 2
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "JACK",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "JIN",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "JIN",
    "to_char": "NAOMI",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "JIN",
    "to_char": "RICHARD",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "JIN",
    "to_char": "ROSE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "JIN",
    "to_char": "RYAN",
    "val": 2
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "JIN",
    "to_char": "SAYID",
    "val": 3
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "JIN",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "JIN",
    "to_char": "TOM",
    "val": 2
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "JULIET",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "JULIET",
    "to_char": "MALE OTHER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "JULIET",
    "to_char": "MIKHAIL",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "JULIET",
    "to_char": "NAOMI",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "JULIET",
    "to_char": "ROSE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "JULIET",
    "to_char": "RYAN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "JULIET",
    "to_char": "SAWYER",
    "val": 3
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "JULIET",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "JULIET",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "JULIET",
    "to_char": "TOM",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "KATE",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "KATE",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "KATE",
    "to_char": "MINKOWSKI",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "KATE",
    "to_char": "NAOMI",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "KATE",
    "to_char": "ROSE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "KATE",
    "to_char": "ROUSSEAU",
    "val": 2
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "KATE",
    "to_char": "SARAH",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "KATE",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "KATE",
    "to_char": "TANNOY",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "KATE",
    "to_char": "VOICE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "KID",
    "to_char": "MOTHER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "KID",
    "to_char": "VOICEMAIL",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "LOCKE",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "LOCKE",
    "to_char": "MINKOWSKI",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "LOCKE",
    "to_char": "NAOMI",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "LOCKE",
    "to_char": "ROUSSEAU",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "LOCKE",
    "to_char": "VOICE",
    "val": 2
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "LOCKE",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "MALE DOCTOR",
    "to_char": "REPORTER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "MALE OTHER",
    "to_char": "RYAN",
    "val": 2
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "MALE OTHER",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "MALE OTHER",
    "to_char": "TOM",
    "val": 2
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "MAN",
    "to_char": "MINKOWSKI",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "MAN",
    "to_char": "NAOMI",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "MAN",
    "to_char": "PHARMACIST",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "MAN",
    "to_char": "ROUSSEAU",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "MAN",
    "to_char": "VOICE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "MIKHAIL",
    "to_char": "ROUSSEAU",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "MIKHAIL",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "MINKOWSKI",
    "to_char": "NAOMI",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "MINKOWSKI",
    "to_char": "ROUSSEAU",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "MINKOWSKI",
    "to_char": "VOICE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "MOTHER",
    "to_char": "VOICEMAIL",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "NAOMI",
    "to_char": "ROSE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "NAOMI",
    "to_char": "ROUSSEAU",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "NAOMI",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "NAOMI",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "NAOMI",
    "to_char": "VOICE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "RICHARD",
    "to_char": "RYAN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "RICHARD",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "RICHARD",
    "to_char": "TOM",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "ROSE",
    "to_char": "SARAH",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "ROSE",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "ROSE",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "ROSE",
    "to_char": "TANNOY",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "ROUSSEAU",
    "to_char": "VOICE",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "RYAN",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "RYAN",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "RYAN",
    "to_char": "TOM",
    "val": 4
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "SARAH",
    "to_char": "TANNOY",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "SAWYER",
    "to_char": "TOM",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "SAYID",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "SAYID",
    "to_char": "TOM",
    "val": 2
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "STEWARDESS",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 3,
    "episode": 22,
    "from_char": "VOICE",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "BEN",
    "to_char": "BERNARD",
    "val": 1
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "BEN",
    "to_char": "CLAIRE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "BEN",
    "to_char": "HURLEY",
    "val": 2
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "BEN",
    "to_char": "JACK",
    "val": 4
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "BEN",
    "to_char": "KATE",
    "val": 3
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "BEN",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "BEN",
    "to_char": "MINKOWSKI",
    "val": 1
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "BEN",
    "to_char": "ROSE",
    "val": 2
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "BEN",
    "to_char": "ROUSSEAU",
    "val": 2
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "BEN",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "BEN",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "BEN",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "BERNARD",
    "to_char": "CLAIRE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "BERNARD",
    "to_char": "DESMOND",
    "val": 1
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "BERNARD",
    "to_char": "HURLEY",
    "val": 3
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "BERNARD",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "BERNARD",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "BERNARD",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "BERNARD",
    "to_char": "LOCKE",
    "val": 2
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "BERNARD",
    "to_char": "ROSE",
    "val": 2
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "BERNARD",
    "to_char": "SAWYER",
    "val": 3
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "BERNARD",
    "to_char": "SAYID",
    "val": 3
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "BERNARD",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "CHARLIE",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "CHARLIE",
    "to_char": "PATIENT",
    "val": 1
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "CLAIRE",
    "to_char": "HURLEY",
    "val": 3
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "CLAIRE",
    "to_char": "JACK",
    "val": 2
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "CLAIRE",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "CLAIRE",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "CLAIRE",
    "to_char": "LOCKE",
    "val": 2
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "CLAIRE",
    "to_char": "ROSE",
    "val": 2
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "CLAIRE",
    "to_char": "ROUSSEAU",
    "val": 2
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "CLAIRE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "CLAIRE",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "CLAIRE",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "DESMOND",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "DESMOND",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "DESMOND",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "DESMOND",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "DETECTIVE",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "HURLEY",
    "to_char": "JACK",
    "val": 4
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "HURLEY",
    "to_char": "JEFF",
    "val": 1
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "HURLEY",
    "to_char": "JULIET",
    "val": 3
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "HURLEY",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "HURLEY",
    "to_char": "LOCKE",
    "val": 5
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "HURLEY",
    "to_char": "MATTHEW",
    "val": 1
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "HURLEY",
    "to_char": "NEWSREADER",
    "val": 1
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "HURLEY",
    "to_char": "NURSE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "HURLEY",
    "to_char": "NURSES",
    "val": 1
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "HURLEY",
    "to_char": "PATIENT",
    "val": 1
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "HURLEY",
    "to_char": "POLICEMAN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "HURLEY",
    "to_char": "POLICEMAN 2",
    "val": 1
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "HURLEY",
    "to_char": "POLICEWOMAN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "HURLEY",
    "to_char": "ROSE",
    "val": 3
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "HURLEY",
    "to_char": "ROUSSEAU",
    "val": 1
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "HURLEY",
    "to_char": "SAWYER",
    "val": 6
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "HURLEY",
    "to_char": "SAYID",
    "val": 4
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "HURLEY",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "HURLEY",
    "to_char": "VISITOR",
    "val": 1
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "JACK",
    "to_char": "JEFF",
    "val": 1
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "JACK",
    "to_char": "KATE",
    "val": 5
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "JACK",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "JACK",
    "to_char": "MINKOWSKI",
    "val": 1
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "JACK",
    "to_char": "NEWSREADER",
    "val": 1
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "JACK",
    "to_char": "PARACHUTIST",
    "val": 1
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "JACK",
    "to_char": "POLICEMAN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "JACK",
    "to_char": "POLICEMAN 2",
    "val": 1
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "JACK",
    "to_char": "POLICEWOMAN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "JACK",
    "to_char": "ROSE",
    "val": 2
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "JACK",
    "to_char": "ROUSSEAU",
    "val": 3
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "JACK",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "JACK",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "JACK",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "JEFF",
    "to_char": "NEWSREADER",
    "val": 1
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "JEFF",
    "to_char": "POLICEMAN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "JEFF",
    "to_char": "POLICEMAN 2",
    "val": 1
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "JEFF",
    "to_char": "POLICEWOMAN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "JULIET",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "JULIET",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "JULIET",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "KATE",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "KATE",
    "to_char": "MINKOWSKI",
    "val": 2
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "KATE",
    "to_char": "NAOMI",
    "val": 1
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "KATE",
    "to_char": "PARACHUTIST",
    "val": 1
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "KATE",
    "to_char": "ROSE",
    "val": 2
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "KATE",
    "to_char": "ROUSSEAU",
    "val": 2
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "KATE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "KATE",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "KATE",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "LOCKE",
    "to_char": "ROSE",
    "val": 2
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "LOCKE",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "LOCKE",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "LOCKE",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "MATTHEW",
    "to_char": "NURSE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "MATTHEW",
    "to_char": "NURSES",
    "val": 1
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "MATTHEW",
    "to_char": "VISITOR",
    "val": 1
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "MINKOWSKI",
    "to_char": "NAOMI",
    "val": 1
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "NEWSREADER",
    "to_char": "POLICEMAN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "NEWSREADER",
    "to_char": "POLICEMAN 2",
    "val": 1
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "NEWSREADER",
    "to_char": "POLICEWOMAN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "NURSE",
    "to_char": "NURSES",
    "val": 1
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "NURSE",
    "to_char": "VISITOR",
    "val": 1
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "NURSES",
    "to_char": "VISITOR",
    "val": 1
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "POLICEMAN",
    "to_char": "POLICEMAN 2",
    "val": 1
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "POLICEMAN",
    "to_char": "POLICEWOMAN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "POLICEMAN 2",
    "to_char": "POLICEWOMAN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "ROSE",
    "to_char": "ROUSSEAU",
    "val": 1
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "ROSE",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "ROSE",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "ROSE",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "ROUSSEAU",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "SAWYER",
    "to_char": "SAYID",
    "val": 4
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "SAWYER",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 1,
    "from_char": "SAYID",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "ALEX",
    "to_char": "BEN",
    "val": 2
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "ALEX",
    "to_char": "CHARLOTTE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "ALEX",
    "to_char": "CLAIRE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "ALEX",
    "to_char": "DANIELLE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "ALEX",
    "to_char": "KARL",
    "val": 2
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "ALEX",
    "to_char": "LOCKE",
    "val": 2
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "ALEX",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "BEN",
    "to_char": "CHARLOTTE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "BEN",
    "to_char": "CLAIRE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "BEN",
    "to_char": "DANIELLE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "BEN",
    "to_char": "KARL",
    "val": 2
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "BEN",
    "to_char": "LOCKE",
    "val": 2
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "BEN",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "CAR RADIO",
    "to_char": "GARDNER",
    "val": 1
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "CAR RADIO",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "CHARLOTTE",
    "to_char": "CLAIRE",
    "val": 3
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "CHARLOTTE",
    "to_char": "DANIELLE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "CHARLOTTE",
    "to_char": "HURLEY",
    "val": 2
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "CHARLOTTE",
    "to_char": "KARL",
    "val": 1
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "CHARLOTTE",
    "to_char": "LOCKE",
    "val": 4
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "CHARLOTTE",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "CHARLOTTE",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "CLAIRE",
    "to_char": "DANIELLE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "CLAIRE",
    "to_char": "HURLEY",
    "val": 2
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "CLAIRE",
    "to_char": "KARL",
    "val": 1
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "CLAIRE",
    "to_char": "LOCKE",
    "val": 3
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "CLAIRE",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "DANIEL",
    "to_char": "FRANK",
    "val": 2
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "DANIEL",
    "to_char": "JACK",
    "val": 10
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "DANIEL",
    "to_char": "JULIET",
    "val": 2
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "DANIEL",
    "to_char": "KATE",
    "val": 8
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "DANIEL",
    "to_char": "MAN 2",
    "val": 1
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "DANIEL",
    "to_char": "MILES",
    "val": 7
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "DANIEL",
    "to_char": "MINKOWSKI",
    "val": 1
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "DANIEL",
    "to_char": "NEWSCASTER",
    "val": 1
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "DANIEL",
    "to_char": "PILOT",
    "val": 1
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "DANIEL",
    "to_char": "REGINA",
    "val": 1
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "DANIEL",
    "to_char": "SAYID",
    "val": 3
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "DANIEL",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "DANIEL",
    "to_char": "WOMAN 1",
    "val": 1
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "DANIEL",
    "to_char": "WOMAN 2",
    "val": 1
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "DANIELLE",
    "to_char": "KARL",
    "val": 1
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "DANIELLE",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "DANIELLE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "FEMALE OPERATOR",
    "to_char": "FRANK",
    "val": 1
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "FEMALE OPERATOR",
    "to_char": "MALE VOICE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "FEMALE OPERATOR",
    "to_char": "TV REPORTER",
    "val": 1
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "FRANK",
    "to_char": "JACK",
    "val": 2
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "FRANK",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "FRANK",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "FRANK",
    "to_char": "MALE VOICE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "FRANK",
    "to_char": "MILES",
    "val": 2
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "FRANK",
    "to_char": "REGINA",
    "val": 1
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "FRANK",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "FRANK",
    "to_char": "TV REPORTER",
    "val": 1
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "FRANK",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "GARDNER",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "HURLEY",
    "to_char": "LOCKE",
    "val": 3
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "HURLEY",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "JACK",
    "to_char": "JULIET",
    "val": 2
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "JACK",
    "to_char": "KATE",
    "val": 8
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "JACK",
    "to_char": "MAN 2",
    "val": 1
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "JACK",
    "to_char": "MILES",
    "val": 7
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "JACK",
    "to_char": "MINKOWSKI",
    "val": 1
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "JACK",
    "to_char": "PILOT",
    "val": 1
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "JACK",
    "to_char": "REGINA",
    "val": 1
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "JACK",
    "to_char": "SAYID",
    "val": 3
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "JACK",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "JACK",
    "to_char": "WOMAN 2",
    "val": 1
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "JULIET",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "JULIET",
    "to_char": "MILES",
    "val": 2
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "JULIET",
    "to_char": "REGINA",
    "val": 1
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "JULIET",
    "to_char": "SAYID",
    "val": 3
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "JULIET",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "KARL",
    "to_char": "LOCKE",
    "val": 2
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "KARL",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "KATE",
    "to_char": "MILES",
    "val": 6
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "KATE",
    "to_char": "MINKOWSKI",
    "val": 1
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "KATE",
    "to_char": "REGINA",
    "val": 1
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "KATE",
    "to_char": "SAYID",
    "val": 3
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "KATE",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "LOCKE",
    "to_char": "SAWYER",
    "val": 5
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "MALE VOICE",
    "to_char": "TV REPORTER",
    "val": 1
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "MAN 1",
    "to_char": "RON",
    "val": 1
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "MAN 2",
    "to_char": "PILOT",
    "val": 1
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "MAN 2",
    "to_char": "WOMAN 2",
    "val": 1
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "MATTHEW",
    "to_char": "NAOMI",
    "val": 1
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "MILES",
    "to_char": "REGINA",
    "val": 1
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "MILES",
    "to_char": "SAYID",
    "val": 3
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "MILES",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "NEWSCASTER",
    "to_char": "WOMAN 1",
    "val": 1
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "PILOT",
    "to_char": "WOMAN 2",
    "val": 1
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "REGINA",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "REGINA",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 2,
    "from_char": "SAYID",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 3,
    "from_char": "BEN",
    "to_char": "CHARLOTTE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 3,
    "from_char": "BEN",
    "to_char": "CLAIRE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 3,
    "from_char": "BEN",
    "to_char": "DANIELLE",
    "val": 2
  },
  {
    "season": 4,
    "episode": 3,
    "from_char": "BEN",
    "to_char": "HURLEY",
    "val": 2
  },
  {
    "season": 4,
    "episode": 3,
    "from_char": "BEN",
    "to_char": "LOCKE",
    "val": 2
  },
  {
    "season": 4,
    "episode": 3,
    "from_char": "BEN",
    "to_char": "MAN 2",
    "val": 1
  },
  {
    "season": 4,
    "episode": 3,
    "from_char": "BEN",
    "to_char": "MAN2",
    "val": 1
  },
  {
    "season": 4,
    "episode": 3,
    "from_char": "BEN",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 4,
    "episode": 3,
    "from_char": "BEN",
    "to_char": "SAYID",
    "val": 3
  },
  {
    "season": 4,
    "episode": 3,
    "from_char": "CHARLOTTE",
    "to_char": "CLAIRE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 3,
    "from_char": "CHARLOTTE",
    "to_char": "DANIEL",
    "val": 1
  },
  {
    "season": 4,
    "episode": 3,
    "from_char": "CHARLOTTE",
    "to_char": "DANIELLE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 3,
    "from_char": "CHARLOTTE",
    "to_char": "DESMOND",
    "val": 1
  },
  {
    "season": 4,
    "episode": 3,
    "from_char": "CHARLOTTE",
    "to_char": "FRANK",
    "val": 1
  },
  {
    "season": 4,
    "episode": 3,
    "from_char": "CHARLOTTE",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 4,
    "episode": 3,
    "from_char": "CHARLOTTE",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 4,
    "episode": 3,
    "from_char": "CHARLOTTE",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 4,
    "episode": 3,
    "from_char": "CHARLOTTE",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 3,
    "from_char": "CHARLOTTE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 4,
    "episode": 3,
    "from_char": "CHARLOTTE",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 4,
    "episode": 3,
    "from_char": "CLAIRE",
    "to_char": "DANIELLE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 3,
    "from_char": "CLAIRE",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 4,
    "episode": 3,
    "from_char": "CLAIRE",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 3,
    "from_char": "CLAIRE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 4,
    "episode": 3,
    "from_char": "DANIEL",
    "to_char": "DESMOND",
    "val": 2
  },
  {
    "season": 4,
    "episode": 3,
    "from_char": "DANIEL",
    "to_char": "FRANK",
    "val": 3
  },
  {
    "season": 4,
    "episode": 3,
    "from_char": "DANIEL",
    "to_char": "JACK",
    "val": 3
  },
  {
    "season": 4,
    "episode": 3,
    "from_char": "DANIEL",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 4,
    "episode": 3,
    "from_char": "DANIEL",
    "to_char": "REGINA",
    "val": 1
  },
  {
    "season": 4,
    "episode": 3,
    "from_char": "DANIEL",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 4,
    "episode": 3,
    "from_char": "DANIELLE",
    "to_char": "HURLEY",
    "val": 2
  },
  {
    "season": 4,
    "episode": 3,
    "from_char": "DANIELLE",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 3,
    "from_char": "DANIELLE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 4,
    "episode": 3,
    "from_char": "DANIELLE",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 4,
    "episode": 3,
    "from_char": "DESMOND",
    "to_char": "FRANK",
    "val": 2
  },
  {
    "season": 4,
    "episode": 3,
    "from_char": "DESMOND",
    "to_char": "JACK",
    "val": 2
  },
  {
    "season": 4,
    "episode": 3,
    "from_char": "DESMOND",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 4,
    "episode": 3,
    "from_char": "DESMOND",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 4,
    "episode": 3,
    "from_char": "ELSA",
    "to_char": "SAYID",
    "val": 3
  },
  {
    "season": 4,
    "episode": 3,
    "from_char": "ELSA",
    "to_char": "WAITER",
    "val": 1
  },
  {
    "season": 4,
    "episode": 3,
    "from_char": "ELSA",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 3,
    "from_char": "FRANK",
    "to_char": "JACK",
    "val": 5
  },
  {
    "season": 4,
    "episode": 3,
    "from_char": "FRANK",
    "to_char": "JULIET",
    "val": 2
  },
  {
    "season": 4,
    "episode": 3,
    "from_char": "FRANK",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 4,
    "episode": 3,
    "from_char": "FRANK",
    "to_char": "MILES",
    "val": 2
  },
  {
    "season": 4,
    "episode": 3,
    "from_char": "FRANK",
    "to_char": "REGINA",
    "val": 1
  },
  {
    "season": 4,
    "episode": 3,
    "from_char": "FRANK",
    "to_char": "SAYID",
    "val": 3
  },
  {
    "season": 4,
    "episode": 3,
    "from_char": "HURLEY",
    "to_char": "KATE",
    "val": 3
  },
  {
    "season": 4,
    "episode": 3,
    "from_char": "HURLEY",
    "to_char": "LOCKE",
    "val": 2
  },
  {
    "season": 4,
    "episode": 3,
    "from_char": "HURLEY",
    "to_char": "MILES",
    "val": 2
  },
  {
    "season": 4,
    "episode": 3,
    "from_char": "HURLEY",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 4,
    "episode": 3,
    "from_char": "HURLEY",
    "to_char": "SAYID",
    "val": 4
  },
  {
    "season": 4,
    "episode": 3,
    "from_char": "JACK",
    "to_char": "JULIET",
    "val": 3
  },
  {
    "season": 4,
    "episode": 3,
    "from_char": "JACK",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 4,
    "episode": 3,
    "from_char": "JACK",
    "to_char": "MILES",
    "val": 3
  },
  {
    "season": 4,
    "episode": 3,
    "from_char": "JACK",
    "to_char": "REGINA",
    "val": 1
  },
  {
    "season": 4,
    "episode": 3,
    "from_char": "JACK",
    "to_char": "SAYID",
    "val": 4
  },
  {
    "season": 4,
    "episode": 3,
    "from_char": "JULIET",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 3,
    "from_char": "JULIET",
    "to_char": "MILES",
    "val": 2
  },
  {
    "season": 4,
    "episode": 3,
    "from_char": "JULIET",
    "to_char": "SAYID",
    "val": 3
  },
  {
    "season": 4,
    "episode": 3,
    "from_char": "KATE",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 3,
    "from_char": "KATE",
    "to_char": "MILES",
    "val": 5
  },
  {
    "season": 4,
    "episode": 3,
    "from_char": "KATE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 4,
    "episode": 3,
    "from_char": "KATE",
    "to_char": "SAYID",
    "val": 6
  },
  {
    "season": 4,
    "episode": 3,
    "from_char": "LOCKE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 4,
    "episode": 3,
    "from_char": "LOCKE",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 4,
    "episode": 3,
    "from_char": "MAN",
    "to_char": "MAN 1",
    "val": 1
  },
  {
    "season": 4,
    "episode": 3,
    "from_char": "MAN",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 4,
    "episode": 3,
    "from_char": "MAN 1",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 4,
    "episode": 3,
    "from_char": "MAN 2",
    "to_char": "MAN2",
    "val": 1
  },
  {
    "season": 4,
    "episode": 3,
    "from_char": "MAN 2",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 4,
    "episode": 3,
    "from_char": "MAN2",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 4,
    "episode": 3,
    "from_char": "MILES",
    "to_char": "SAYID",
    "val": 6
  },
  {
    "season": 4,
    "episode": 3,
    "from_char": "SAYID",
    "to_char": "WAITER",
    "val": 1
  },
  {
    "season": 4,
    "episode": 3,
    "from_char": "SAYID",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 3,
    "from_char": "WAITER",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 4,
    "from_char": "AARON",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 4,
    "from_char": "AARON",
    "to_char": "NANNY",
    "val": 1
  },
  {
    "season": 4,
    "episode": 4,
    "from_char": "BALIFF",
    "to_char": "DUNCAN",
    "val": 2
  },
  {
    "season": 4,
    "episode": 4,
    "from_char": "BALIFF",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 4,
    "episode": 4,
    "from_char": "BALIFF",
    "to_char": "JUDGE",
    "val": 3
  },
  {
    "season": 4,
    "episode": 4,
    "from_char": "BALIFF",
    "to_char": "JUDGE GALZETHRON",
    "val": 1
  },
  {
    "season": 4,
    "episode": 4,
    "from_char": "BALIFF",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 4,
    "episode": 4,
    "from_char": "BALIFF",
    "to_char": "MELISSA",
    "val": 3
  },
  {
    "season": 4,
    "episode": 4,
    "from_char": "BEARDED MAN IN CROWD",
    "to_char": "DUNCAN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 4,
    "from_char": "BEARDED MAN IN CROWD",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 4,
    "from_char": "BEN",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 4,
    "from_char": "BEN",
    "to_char": "LOCKE",
    "val": 2
  },
  {
    "season": 4,
    "episode": 4,
    "from_char": "BEN",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 4,
    "episode": 4,
    "from_char": "CHARLOTTE",
    "to_char": "DANIEL",
    "val": 1
  },
  {
    "season": 4,
    "episode": 4,
    "from_char": "CHARLOTTE",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 4,
    "episode": 4,
    "from_char": "CHARLOTTE",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 4,
    "episode": 4,
    "from_char": "CHARLOTTE",
    "to_char": "REGINA",
    "val": 1
  },
  {
    "season": 4,
    "episode": 4,
    "from_char": "CLAIRE",
    "to_char": "KATE",
    "val": 3
  },
  {
    "season": 4,
    "episode": 4,
    "from_char": "CLAIRE",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 4,
    "from_char": "CLAIRE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 4,
    "episode": 4,
    "from_char": "DANIEL",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 4,
    "episode": 4,
    "from_char": "DANIEL",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 4,
    "episode": 4,
    "from_char": "DANIEL",
    "to_char": "REGINA",
    "val": 1
  },
  {
    "season": 4,
    "episode": 4,
    "from_char": "DIANE",
    "to_char": "DUNCAN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 4,
    "from_char": "DIANE",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 4,
    "from_char": "DUNCAN",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 4,
    "episode": 4,
    "from_char": "DUNCAN",
    "to_char": "JUDGE",
    "val": 2
  },
  {
    "season": 4,
    "episode": 4,
    "from_char": "DUNCAN",
    "to_char": "JUDGE GALZETHRON",
    "val": 1
  },
  {
    "season": 4,
    "episode": 4,
    "from_char": "DUNCAN",
    "to_char": "KATE",
    "val": 6
  },
  {
    "season": 4,
    "episode": 4,
    "from_char": "DUNCAN",
    "to_char": "MELISSA",
    "val": 3
  },
  {
    "season": 4,
    "episode": 4,
    "from_char": "HURLEY",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 4,
    "episode": 4,
    "from_char": "HURLEY",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 4,
    "from_char": "HURLEY",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 4,
    "episode": 4,
    "from_char": "HURLEY",
    "to_char": "TV",
    "val": 1
  },
  {
    "season": 4,
    "episode": 4,
    "from_char": "JACK",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 4,
    "from_char": "JACK",
    "to_char": "JUDGE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 4,
    "from_char": "JACK",
    "to_char": "JULIET",
    "val": 2
  },
  {
    "season": 4,
    "episode": 4,
    "from_char": "JACK",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 4,
    "episode": 4,
    "from_char": "JACK",
    "to_char": "MELISSA",
    "val": 1
  },
  {
    "season": 4,
    "episode": 4,
    "from_char": "JACK",
    "to_char": "REGINA",
    "val": 1
  },
  {
    "season": 4,
    "episode": 4,
    "from_char": "JACK",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 4,
    "episode": 4,
    "from_char": "JIN",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 4,
    "from_char": "JUDGE",
    "to_char": "JUDGE GALZETHRON",
    "val": 1
  },
  {
    "season": 4,
    "episode": 4,
    "from_char": "JUDGE",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 4,
    "episode": 4,
    "from_char": "JUDGE",
    "to_char": "MELISSA",
    "val": 3
  },
  {
    "season": 4,
    "episode": 4,
    "from_char": "JUDGE GALZETHRON",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 4,
    "from_char": "JUDGE GALZETHRON",
    "to_char": "MELISSA",
    "val": 1
  },
  {
    "season": 4,
    "episode": 4,
    "from_char": "JULIET",
    "to_char": "REGINA",
    "val": 1
  },
  {
    "season": 4,
    "episode": 4,
    "from_char": "JULIET",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 4,
    "from_char": "KATE",
    "to_char": "LOCKE",
    "val": 3
  },
  {
    "season": 4,
    "episode": 4,
    "from_char": "KATE",
    "to_char": "MELISSA",
    "val": 3
  },
  {
    "season": 4,
    "episode": 4,
    "from_char": "KATE",
    "to_char": "MILES",
    "val": 2
  },
  {
    "season": 4,
    "episode": 4,
    "from_char": "KATE",
    "to_char": "NANNY",
    "val": 1
  },
  {
    "season": 4,
    "episode": 4,
    "from_char": "KATE",
    "to_char": "SAWYER",
    "val": 4
  },
  {
    "season": 4,
    "episode": 4,
    "from_char": "KATE",
    "to_char": "TV",
    "val": 1
  },
  {
    "season": 4,
    "episode": 4,
    "from_char": "LOCKE",
    "to_char": "MILES",
    "val": 2
  },
  {
    "season": 4,
    "episode": 4,
    "from_char": "LOCKE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 4,
    "episode": 4,
    "from_char": "SAWYER",
    "to_char": "TV",
    "val": 1
  },
  {
    "season": 4,
    "episode": 5,
    "from_char": "AUCTIONEER",
    "to_char": "DESMOND",
    "val": 1
  },
  {
    "season": 4,
    "episode": 5,
    "from_char": "AUCTIONEER",
    "to_char": "SUITED GUARD",
    "val": 1
  },
  {
    "season": 4,
    "episode": 5,
    "from_char": "AUCTIONEER",
    "to_char": "WIDMORE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 5,
    "from_char": "BILLY",
    "to_char": "DESMOND",
    "val": 2
  },
  {
    "season": 4,
    "episode": 5,
    "from_char": "BILLY",
    "to_char": "SGT",
    "val": 1
  },
  {
    "season": 4,
    "episode": 5,
    "from_char": "BILLY",
    "to_char": "SOLDIER 1",
    "val": 1
  },
  {
    "season": 4,
    "episode": 5,
    "from_char": "BILLY",
    "to_char": "SOLDIER 3",
    "val": 1
  },
  {
    "season": 4,
    "episode": 5,
    "from_char": "BOTH",
    "to_char": "DESMOND",
    "val": 1
  },
  {
    "season": 4,
    "episode": 5,
    "from_char": "BOTH",
    "to_char": "PENNY",
    "val": 1
  },
  {
    "season": 4,
    "episode": 5,
    "from_char": "BOTH",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 4,
    "episode": 5,
    "from_char": "CHARLOTTE",
    "to_char": "DAN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 5,
    "from_char": "CHARLOTTE",
    "to_char": "DANIEL",
    "val": 1
  },
  {
    "season": 4,
    "episode": 5,
    "from_char": "CHARLOTTE",
    "to_char": "DESMOND",
    "val": 1
  },
  {
    "season": 4,
    "episode": 5,
    "from_char": "CHARLOTTE",
    "to_char": "JACK",
    "val": 2
  },
  {
    "season": 4,
    "episode": 5,
    "from_char": "CHARLOTTE",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 4,
    "episode": 5,
    "from_char": "CHARLOTTE",
    "to_char": "OMAR",
    "val": 1
  },
  {
    "season": 4,
    "episode": 5,
    "from_char": "CHARLOTTE",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 4,
    "episode": 5,
    "from_char": "DAN",
    "to_char": "DESMOND",
    "val": 5
  },
  {
    "season": 4,
    "episode": 5,
    "from_char": "DAN",
    "to_char": "FRANK",
    "val": 2
  },
  {
    "season": 4,
    "episode": 5,
    "from_char": "DAN",
    "to_char": "JACK",
    "val": 3
  },
  {
    "season": 4,
    "episode": 5,
    "from_char": "DAN",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 4,
    "episode": 5,
    "from_char": "DAN",
    "to_char": "OMAR",
    "val": 1
  },
  {
    "season": 4,
    "episode": 5,
    "from_char": "DAN",
    "to_char": "OPERATOR",
    "val": 1
  },
  {
    "season": 4,
    "episode": 5,
    "from_char": "DAN",
    "to_char": "RAY",
    "val": 1
  },
  {
    "season": 4,
    "episode": 5,
    "from_char": "DAN",
    "to_char": "SAYID",
    "val": 3
  },
  {
    "season": 4,
    "episode": 5,
    "from_char": "DANIEL",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 4,
    "episode": 5,
    "from_char": "DANIEL",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 4,
    "episode": 5,
    "from_char": "DESMOND",
    "to_char": "FRANK",
    "val": 5
  },
  {
    "season": 4,
    "episode": 5,
    "from_char": "DESMOND",
    "to_char": "JACK",
    "val": 2
  },
  {
    "season": 4,
    "episode": 5,
    "from_char": "DESMOND",
    "to_char": "KEAMY",
    "val": 3
  },
  {
    "season": 4,
    "episode": 5,
    "from_char": "DESMOND",
    "to_char": "MAN",
    "val": 3
  },
  {
    "season": 4,
    "episode": 5,
    "from_char": "DESMOND",
    "to_char": "MINKOWSKI",
    "val": 3
  },
  {
    "season": 4,
    "episode": 5,
    "from_char": "DESMOND",
    "to_char": "OMAR",
    "val": 4
  },
  {
    "season": 4,
    "episode": 5,
    "from_char": "DESMOND",
    "to_char": "OPERATOR",
    "val": 1
  },
  {
    "season": 4,
    "episode": 5,
    "from_char": "DESMOND",
    "to_char": "PENNY",
    "val": 3
  },
  {
    "season": 4,
    "episode": 5,
    "from_char": "DESMOND",
    "to_char": "RAY",
    "val": 3
  },
  {
    "season": 4,
    "episode": 5,
    "from_char": "DESMOND",
    "to_char": "REST",
    "val": 1
  },
  {
    "season": 4,
    "episode": 5,
    "from_char": "DESMOND",
    "to_char": "SAYID",
    "val": 9
  },
  {
    "season": 4,
    "episode": 5,
    "from_char": "DESMOND",
    "to_char": "SERGEANT",
    "val": 1
  },
  {
    "season": 4,
    "episode": 5,
    "from_char": "DESMOND",
    "to_char": "SGT",
    "val": 3
  },
  {
    "season": 4,
    "episode": 5,
    "from_char": "DESMOND",
    "to_char": "SOLDIER 1",
    "val": 2
  },
  {
    "season": 4,
    "episode": 5,
    "from_char": "DESMOND",
    "to_char": "SOLDIER 2",
    "val": 1
  },
  {
    "season": 4,
    "episode": 5,
    "from_char": "DESMOND",
    "to_char": "SOLDIER 3",
    "val": 1
  },
  {
    "season": 4,
    "episode": 5,
    "from_char": "DESMOND",
    "to_char": "SUITED GUARD",
    "val": 1
  },
  {
    "season": 4,
    "episode": 5,
    "from_char": "DESMOND",
    "to_char": "WIDMORE",
    "val": 2
  },
  {
    "season": 4,
    "episode": 5,
    "from_char": "FRANK",
    "to_char": "JACK",
    "val": 2
  },
  {
    "season": 4,
    "episode": 5,
    "from_char": "FRANK",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 4,
    "episode": 5,
    "from_char": "FRANK",
    "to_char": "KEAMY",
    "val": 2
  },
  {
    "season": 4,
    "episode": 5,
    "from_char": "FRANK",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 5,
    "from_char": "FRANK",
    "to_char": "MINKOWSKI",
    "val": 1
  },
  {
    "season": 4,
    "episode": 5,
    "from_char": "FRANK",
    "to_char": "OMAR",
    "val": 2
  },
  {
    "season": 4,
    "episode": 5,
    "from_char": "FRANK",
    "to_char": "RAY",
    "val": 2
  },
  {
    "season": 4,
    "episode": 5,
    "from_char": "FRANK",
    "to_char": "SAYID",
    "val": 6
  },
  {
    "season": 4,
    "episode": 5,
    "from_char": "JACK",
    "to_char": "JULIET",
    "val": 2
  },
  {
    "season": 4,
    "episode": 5,
    "from_char": "JACK",
    "to_char": "OMAR",
    "val": 1
  },
  {
    "season": 4,
    "episode": 5,
    "from_char": "JACK",
    "to_char": "RAY",
    "val": 1
  },
  {
    "season": 4,
    "episode": 5,
    "from_char": "JACK",
    "to_char": "SAYID",
    "val": 3
  },
  {
    "season": 4,
    "episode": 5,
    "from_char": "JULIET",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 4,
    "episode": 5,
    "from_char": "KEAMY",
    "to_char": "MAN",
    "val": 2
  },
  {
    "season": 4,
    "episode": 5,
    "from_char": "KEAMY",
    "to_char": "MINKOWSKI",
    "val": 1
  },
  {
    "season": 4,
    "episode": 5,
    "from_char": "KEAMY",
    "to_char": "OMAR",
    "val": 3
  },
  {
    "season": 4,
    "episode": 5,
    "from_char": "KEAMY",
    "to_char": "RAY",
    "val": 1
  },
  {
    "season": 4,
    "episode": 5,
    "from_char": "KEAMY",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 4,
    "episode": 5,
    "from_char": "MAN",
    "to_char": "MINKOWSKI",
    "val": 1
  },
  {
    "season": 4,
    "episode": 5,
    "from_char": "MAN",
    "to_char": "OMAR",
    "val": 2
  },
  {
    "season": 4,
    "episode": 5,
    "from_char": "MAN",
    "to_char": "RAY",
    "val": 2
  },
  {
    "season": 4,
    "episode": 5,
    "from_char": "MAN",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 4,
    "episode": 5,
    "from_char": "MINKOWSKI",
    "to_char": "OMAR",
    "val": 1
  },
  {
    "season": 4,
    "episode": 5,
    "from_char": "MINKOWSKI",
    "to_char": "RAY",
    "val": 1
  },
  {
    "season": 4,
    "episode": 5,
    "from_char": "MINKOWSKI",
    "to_char": "SAYID",
    "val": 3
  },
  {
    "season": 4,
    "episode": 5,
    "from_char": "OMAR",
    "to_char": "RAY",
    "val": 1
  },
  {
    "season": 4,
    "episode": 5,
    "from_char": "OMAR",
    "to_char": "SAYID",
    "val": 3
  },
  {
    "season": 4,
    "episode": 5,
    "from_char": "PENNY",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 4,
    "episode": 5,
    "from_char": "RAY",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 4,
    "episode": 5,
    "from_char": "REST",
    "to_char": "SGT",
    "val": 1
  },
  {
    "season": 4,
    "episode": 5,
    "from_char": "REST",
    "to_char": "SOLDIER 1",
    "val": 1
  },
  {
    "season": 4,
    "episode": 5,
    "from_char": "REST",
    "to_char": "SOLDIER 2",
    "val": 1
  },
  {
    "season": 4,
    "episode": 5,
    "from_char": "SERGEANT",
    "to_char": "SGT",
    "val": 1
  },
  {
    "season": 4,
    "episode": 5,
    "from_char": "SGT",
    "to_char": "SOLDIER 1",
    "val": 2
  },
  {
    "season": 4,
    "episode": 5,
    "from_char": "SGT",
    "to_char": "SOLDIER 2",
    "val": 1
  },
  {
    "season": 4,
    "episode": 5,
    "from_char": "SOLDIER 1",
    "to_char": "SOLDIER 2",
    "val": 1
  },
  {
    "season": 4,
    "episode": 5,
    "from_char": "SUITED GUARD",
    "to_char": "WIDMORE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 6,
    "from_char": "BEN",
    "to_char": "GOODWIN",
    "val": 2
  },
  {
    "season": 4,
    "episode": 6,
    "from_char": "BEN",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 4,
    "episode": 6,
    "from_char": "BEN",
    "to_char": "JULIET",
    "val": 6
  },
  {
    "season": 4,
    "episode": 6,
    "from_char": "BEN",
    "to_char": "LOCKE",
    "val": 3
  },
  {
    "season": 4,
    "episode": 6,
    "from_char": "BEN",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 4,
    "episode": 6,
    "from_char": "BEN",
    "to_char": "TOM",
    "val": 1
  },
  {
    "season": 4,
    "episode": 6,
    "from_char": "CHARLOTTE",
    "to_char": "DAN",
    "val": 3
  },
  {
    "season": 4,
    "episode": 6,
    "from_char": "CHARLOTTE",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 4,
    "episode": 6,
    "from_char": "CHARLOTTE",
    "to_char": "JULIET",
    "val": 2
  },
  {
    "season": 4,
    "episode": 6,
    "from_char": "CHARLOTTE",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 4,
    "episode": 6,
    "from_char": "CHARLOTTE",
    "to_char": "WOMAN'S AUTOMATED VOICE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 6,
    "from_char": "CLAIRE",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 6,
    "from_char": "DAN",
    "to_char": "JULIET",
    "val": 2
  },
  {
    "season": 4,
    "episode": 6,
    "from_char": "DAN",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 6,
    "from_char": "DAN",
    "to_char": "WOMAN'S AUTOMATED VOICE",
    "val": 2
  },
  {
    "season": 4,
    "episode": 6,
    "from_char": "GOODWIN",
    "to_char": "JULIET",
    "val": 3
  },
  {
    "season": 4,
    "episode": 6,
    "from_char": "HARPER",
    "to_char": "JACK",
    "val": 2
  },
  {
    "season": 4,
    "episode": 6,
    "from_char": "HARPER",
    "to_char": "JULIET",
    "val": 4
  },
  {
    "season": 4,
    "episode": 6,
    "from_char": "HARPER",
    "to_char": "TOM",
    "val": 1
  },
  {
    "season": 4,
    "episode": 6,
    "from_char": "HURLEY",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 4,
    "episode": 6,
    "from_char": "JACK",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 6,
    "from_char": "JACK",
    "to_char": "JULIET",
    "val": 7
  },
  {
    "season": 4,
    "episode": 6,
    "from_char": "JACK",
    "to_char": "KATE",
    "val": 3
  },
  {
    "season": 4,
    "episode": 6,
    "from_char": "JACK",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 6,
    "from_char": "JIN",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 4,
    "episode": 6,
    "from_char": "JIN",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 6,
    "from_char": "JULIET",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 4,
    "episode": 6,
    "from_char": "JULIET",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 6,
    "from_char": "JULIET",
    "to_char": "TOM",
    "val": 2
  },
  {
    "season": 4,
    "episode": 6,
    "from_char": "JULIET",
    "to_char": "WOMAN'S AUTOMATED VOICE",
    "val": 2
  },
  {
    "season": 4,
    "episode": 7,
    "from_char": "AMBASSADOR",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 7,
    "from_char": "AMBASSADOR",
    "to_char": "MAN IN SUIT",
    "val": 1
  },
  {
    "season": 4,
    "episode": 7,
    "from_char": "AMBASSADOR",
    "to_char": "NURSE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 7,
    "from_char": "BERNARD",
    "to_char": "JIN",
    "val": 2
  },
  {
    "season": 4,
    "episode": 7,
    "from_char": "BERNARD",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 7,
    "from_char": "DANIEL",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 7,
    "from_char": "DESMOND",
    "to_char": "DESMOND AND SAYID",
    "val": 1
  },
  {
    "season": 4,
    "episode": 7,
    "from_char": "DESMOND",
    "to_char": "GAULT",
    "val": 2
  },
  {
    "season": 4,
    "episode": 7,
    "from_char": "DESMOND",
    "to_char": "JOHNSON",
    "val": 1
  },
  {
    "season": 4,
    "episode": 7,
    "from_char": "DESMOND",
    "to_char": "LAPIDUS",
    "val": 1
  },
  {
    "season": 4,
    "episode": 7,
    "from_char": "DESMOND",
    "to_char": "RAY",
    "val": 3
  },
  {
    "season": 4,
    "episode": 7,
    "from_char": "DESMOND",
    "to_char": "REGINA",
    "val": 1
  },
  {
    "season": 4,
    "episode": 7,
    "from_char": "DESMOND",
    "to_char": "SAYID",
    "val": 6
  },
  {
    "season": 4,
    "episode": 7,
    "from_char": "DESMOND AND SAYID",
    "to_char": "GAULT",
    "val": 1
  },
  {
    "season": 4,
    "episode": 7,
    "from_char": "DESMOND AND SAYID",
    "to_char": "RAY",
    "val": 1
  },
  {
    "season": 4,
    "episode": 7,
    "from_char": "DESMOND AND SAYID",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 4,
    "episode": 7,
    "from_char": "DR. BAE",
    "to_char": "NURSE 1",
    "val": 2
  },
  {
    "season": 4,
    "episode": 7,
    "from_char": "DR. BAE",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 4,
    "episode": 7,
    "from_char": "GAULT",
    "to_char": "RAY",
    "val": 1
  },
  {
    "season": 4,
    "episode": 7,
    "from_char": "GAULT",
    "to_char": "SAYID",
    "val": 3
  },
  {
    "season": 4,
    "episode": 7,
    "from_char": "HURLEY",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 7,
    "from_char": "JACK",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 7,
    "from_char": "JACK",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 7,
    "from_char": "JIN",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 4,
    "episode": 7,
    "from_char": "JIN",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 4,
    "episode": 7,
    "from_char": "JIN",
    "to_char": "MAN IN SUIT",
    "val": 1
  },
  {
    "season": 4,
    "episode": 7,
    "from_char": "JIN",
    "to_char": "NURSE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 7,
    "from_char": "JIN",
    "to_char": "STORE OWNER",
    "val": 2
  },
  {
    "season": 4,
    "episode": 7,
    "from_char": "JIN",
    "to_char": "SUN",
    "val": 6
  },
  {
    "season": 4,
    "episode": 7,
    "from_char": "JOHNSON",
    "to_char": "RAY",
    "val": 1
  },
  {
    "season": 4,
    "episode": 7,
    "from_char": "JOHNSON",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 4,
    "episode": 7,
    "from_char": "JULIET",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 7,
    "from_char": "JULIET",
    "to_char": "SUN",
    "val": 3
  },
  {
    "season": 4,
    "episode": 7,
    "from_char": "KATE",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 4,
    "episode": 7,
    "from_char": "KEAMY",
    "to_char": "LAPIDUS",
    "val": 1
  },
  {
    "season": 4,
    "episode": 7,
    "from_char": "LAPIDUS",
    "to_char": "REGINA",
    "val": 1
  },
  {
    "season": 4,
    "episode": 7,
    "from_char": "LAPIDUS",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 4,
    "episode": 7,
    "from_char": "MAN IN SUIT",
    "to_char": "NURSE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 7,
    "from_char": "NURSE 1",
    "to_char": "NURSE 2",
    "val": 1
  },
  {
    "season": 4,
    "episode": 7,
    "from_char": "NURSE 1",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 4,
    "episode": 7,
    "from_char": "RAY",
    "to_char": "SAYID",
    "val": 3
  },
  {
    "season": 4,
    "episode": 7,
    "from_char": "REGINA",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 4,
    "episode": 7,
    "from_char": "SUN",
    "to_char": "WOMAN ON THE PHONE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 8,
    "from_char": "ALEX",
    "to_char": "BEN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 8,
    "from_char": "ALEX",
    "to_char": "CLAIRE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 8,
    "from_char": "ALEX",
    "to_char": "KARL",
    "val": 2
  },
  {
    "season": 4,
    "episode": 8,
    "from_char": "ALEX",
    "to_char": "ROUSSEAU",
    "val": 2
  },
  {
    "season": 4,
    "episode": 8,
    "from_char": "ARTURO",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 4,
    "episode": 8,
    "from_char": "ARTURO",
    "to_char": "TOM",
    "val": 1
  },
  {
    "season": 4,
    "episode": 8,
    "from_char": "BEN",
    "to_char": "CLAIRE",
    "val": 2
  },
  {
    "season": 4,
    "episode": 8,
    "from_char": "BEN",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 4,
    "episode": 8,
    "from_char": "BEN",
    "to_char": "KARL",
    "val": 1
  },
  {
    "season": 4,
    "episode": 8,
    "from_char": "BEN",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 8,
    "from_char": "BEN",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 4,
    "episode": 8,
    "from_char": "BEN",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 4,
    "episode": 8,
    "from_char": "BEN",
    "to_char": "MINKOWSKI",
    "val": 1
  },
  {
    "season": 4,
    "episode": 8,
    "from_char": "BEN",
    "to_char": "ROUSSEAU",
    "val": 1
  },
  {
    "season": 4,
    "episode": 8,
    "from_char": "BEN",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 4,
    "episode": 8,
    "from_char": "CASS ELLIOT",
    "to_char": "LIBBY",
    "val": 1
  },
  {
    "season": 4,
    "episode": 8,
    "from_char": "CASS ELLIOT",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 4,
    "episode": 8,
    "from_char": "CLAIRE",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 4,
    "episode": 8,
    "from_char": "CLAIRE",
    "to_char": "KARL",
    "val": 1
  },
  {
    "season": 4,
    "episode": 8,
    "from_char": "CLAIRE",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 8,
    "from_char": "CLAIRE",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 4,
    "episode": 8,
    "from_char": "CLAIRE",
    "to_char": "ROUSSEAU",
    "val": 1
  },
  {
    "season": 4,
    "episode": 8,
    "from_char": "CLAIRE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 4,
    "episode": 8,
    "from_char": "CREW-MEMBER",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 4,
    "episode": 8,
    "from_char": "CREWMAN",
    "to_char": "KEAMY",
    "val": 1
  },
  {
    "season": 4,
    "episode": 8,
    "from_char": "CREWMAN",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 4,
    "episode": 8,
    "from_char": "DESMOND",
    "to_char": "GAULT",
    "val": 1
  },
  {
    "season": 4,
    "episode": 8,
    "from_char": "DESMOND",
    "to_char": "JEFF",
    "val": 1
  },
  {
    "season": 4,
    "episode": 8,
    "from_char": "DESMOND",
    "to_char": "MICHAEL",
    "val": 2
  },
  {
    "season": 4,
    "episode": 8,
    "from_char": "DESMOND",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 4,
    "episode": 8,
    "from_char": "FEMALE ANCHOR",
    "to_char": "FEMALE CONTESTANT",
    "val": 1
  },
  {
    "season": 4,
    "episode": 8,
    "from_char": "FEMALE ANCHOR",
    "to_char": "GAME SHOW HOST",
    "val": 1
  },
  {
    "season": 4,
    "episode": 8,
    "from_char": "FEMALE ANCHOR",
    "to_char": "MALE ANNOUNCER",
    "val": 1
  },
  {
    "season": 4,
    "episode": 8,
    "from_char": "FEMALE ANCHOR",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 8,
    "from_char": "FEMALE ANCHOR",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 4,
    "episode": 8,
    "from_char": "FEMALE CONTESTANT",
    "to_char": "GAME SHOW HOST",
    "val": 1
  },
  {
    "season": 4,
    "episode": 8,
    "from_char": "FEMALE CONTESTANT",
    "to_char": "MALE ANNOUNCER",
    "val": 1
  },
  {
    "season": 4,
    "episode": 8,
    "from_char": "FEMALE CONTESTANT",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 8,
    "from_char": "FEMALE CONTESTANT",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 4,
    "episode": 8,
    "from_char": "FRANK",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 4,
    "episode": 8,
    "from_char": "FRANK",
    "to_char": "NAOMI",
    "val": 1
  },
  {
    "season": 4,
    "episode": 8,
    "from_char": "GAME SHOW HOST",
    "to_char": "MALE ANNOUNCER",
    "val": 1
  },
  {
    "season": 4,
    "episode": 8,
    "from_char": "GAME SHOW HOST",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 8,
    "from_char": "GAME SHOW HOST",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 4,
    "episode": 8,
    "from_char": "GAULT",
    "to_char": "MICHAEL",
    "val": 2
  },
  {
    "season": 4,
    "episode": 8,
    "from_char": "GAULT",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 4,
    "episode": 8,
    "from_char": "GUS",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 4,
    "episode": 8,
    "from_char": "HURLEY",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 8,
    "from_char": "HURLEY",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 4,
    "episode": 8,
    "from_char": "HURLEY",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 4,
    "episode": 8,
    "from_char": "JEFF",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 4,
    "episode": 8,
    "from_char": "JEFF",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 4,
    "episode": 8,
    "from_char": "JOHN",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 4,
    "episode": 8,
    "from_char": "JOHN",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 4,
    "episode": 8,
    "from_char": "KARL",
    "to_char": "ROUSSEAU",
    "val": 2
  },
  {
    "season": 4,
    "episode": 8,
    "from_char": "KEAMY",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 4,
    "episode": 8,
    "from_char": "LIBBY",
    "to_char": "MICHAEL",
    "val": 2
  },
  {
    "season": 4,
    "episode": 8,
    "from_char": "LOCKE",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 4,
    "episode": 8,
    "from_char": "LOCKE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 4,
    "episode": 8,
    "from_char": "MALE ANNOUNCER",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 8,
    "from_char": "MALE ANNOUNCER",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 4,
    "episode": 8,
    "from_char": "MAN",
    "to_char": "MICHAEL",
    "val": 2
  },
  {
    "season": 4,
    "episode": 8,
    "from_char": "MAN",
    "to_char": "TOM",
    "val": 1
  },
  {
    "season": 4,
    "episode": 8,
    "from_char": "MICHAEL",
    "to_char": "MICHAEL'S MOTHER",
    "val": 1
  },
  {
    "season": 4,
    "episode": 8,
    "from_char": "MICHAEL",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 4,
    "episode": 8,
    "from_char": "MICHAEL",
    "to_char": "MINKOWSKI",
    "val": 3
  },
  {
    "season": 4,
    "episode": 8,
    "from_char": "MICHAEL",
    "to_char": "NAOMI",
    "val": 2
  },
  {
    "season": 4,
    "episode": 8,
    "from_char": "MICHAEL",
    "to_char": "NURSE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 8,
    "from_char": "MICHAEL",
    "to_char": "SAYID",
    "val": 3
  },
  {
    "season": 4,
    "episode": 8,
    "from_char": "MICHAEL",
    "to_char": "TOM",
    "val": 4
  },
  {
    "season": 4,
    "episode": 8,
    "from_char": "MILES",
    "to_char": "MINKOWSKI",
    "val": 1
  },
  {
    "season": 4,
    "episode": 8,
    "from_char": "MILES",
    "to_char": "NAOMI",
    "val": 1
  },
  {
    "season": 4,
    "episode": 8,
    "from_char": "MILES",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 4,
    "episode": 8,
    "from_char": "MILES",
    "to_char": "TOM",
    "val": 1
  },
  {
    "season": 4,
    "episode": 8,
    "from_char": "MINKOWSKI",
    "to_char": "NAOMI",
    "val": 1
  },
  {
    "season": 4,
    "episode": 8,
    "from_char": "MINKOWSKI",
    "to_char": "TOM",
    "val": 1
  },
  {
    "season": 4,
    "episode": 8,
    "from_char": "NAOMI",
    "to_char": "TOM",
    "val": 1
  },
  {
    "season": 4,
    "episode": 9,
    "from_char": "ALEX",
    "to_char": "BEN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 9,
    "from_char": "ALEX",
    "to_char": "KEAMY",
    "val": 2
  },
  {
    "season": 4,
    "episode": 9,
    "from_char": "ALEX",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 9,
    "from_char": "ALEX",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 4,
    "episode": 9,
    "from_char": "ALEX",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 4,
    "episode": 9,
    "from_char": "AUTOMATED FEMALE VOICE",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 4,
    "episode": 9,
    "from_char": "AUTOMATED FEMALE VOICE",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 9,
    "from_char": "BAKIR",
    "to_char": "BEN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 9,
    "from_char": "BAKIR",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 4,
    "episode": 9,
    "from_char": "BEN",
    "to_char": "CLAIRE",
    "val": 2
  },
  {
    "season": 4,
    "episode": 9,
    "from_char": "BEN",
    "to_char": "DISTANT VOICE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 9,
    "from_char": "BEN",
    "to_char": "DOORMAN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 9,
    "from_char": "BEN",
    "to_char": "GRAY",
    "val": 1
  },
  {
    "season": 4,
    "episode": 9,
    "from_char": "BEN",
    "to_char": "HURLEY",
    "val": 4
  },
  {
    "season": 4,
    "episode": 9,
    "from_char": "BEN",
    "to_char": "KEAMY",
    "val": 1
  },
  {
    "season": 4,
    "episode": 9,
    "from_char": "BEN",
    "to_char": "LOCKE",
    "val": 9
  },
  {
    "season": 4,
    "episode": 9,
    "from_char": "BEN",
    "to_char": "MILES",
    "val": 4
  },
  {
    "season": 4,
    "episode": 9,
    "from_char": "BEN",
    "to_char": "NARJISS",
    "val": 1
  },
  {
    "season": 4,
    "episode": 9,
    "from_char": "BEN",
    "to_char": "RED",
    "val": 1
  },
  {
    "season": 4,
    "episode": 9,
    "from_char": "BEN",
    "to_char": "SAWYER",
    "val": 7
  },
  {
    "season": 4,
    "episode": 9,
    "from_char": "BEN",
    "to_char": "SAYID",
    "val": 3
  },
  {
    "season": 4,
    "episode": 9,
    "from_char": "BEN",
    "to_char": "SUBTITLE",
    "val": 3
  },
  {
    "season": 4,
    "episode": 9,
    "from_char": "BEN",
    "to_char": "WIDMORE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 9,
    "from_char": "BERNARD",
    "to_char": "CHARLOTTE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 9,
    "from_char": "BERNARD",
    "to_char": "DANIEL",
    "val": 3
  },
  {
    "season": 4,
    "episode": 9,
    "from_char": "BERNARD",
    "to_char": "JACK",
    "val": 3
  },
  {
    "season": 4,
    "episode": 9,
    "from_char": "BERNARD",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 4,
    "episode": 9,
    "from_char": "BERNARD",
    "to_char": "KATE",
    "val": 3
  },
  {
    "season": 4,
    "episode": 9,
    "from_char": "CHARLOTTE",
    "to_char": "DANIEL",
    "val": 1
  },
  {
    "season": 4,
    "episode": 9,
    "from_char": "CHARLOTTE",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 4,
    "episode": 9,
    "from_char": "CHARLOTTE",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 4,
    "episode": 9,
    "from_char": "CHARLOTTE",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 9,
    "from_char": "CLAIRE",
    "to_char": "DISTANT VOICE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 9,
    "from_char": "CLAIRE",
    "to_char": "HURLEY",
    "val": 2
  },
  {
    "season": 4,
    "episode": 9,
    "from_char": "CLAIRE",
    "to_char": "LOCKE",
    "val": 2
  },
  {
    "season": 4,
    "episode": 9,
    "from_char": "CLAIRE",
    "to_char": "MILES",
    "val": 2
  },
  {
    "season": 4,
    "episode": 9,
    "from_char": "CLAIRE",
    "to_char": "SAWYER",
    "val": 3
  },
  {
    "season": 4,
    "episode": 9,
    "from_char": "DANIEL",
    "to_char": "JACK",
    "val": 3
  },
  {
    "season": 4,
    "episode": 9,
    "from_char": "DANIEL",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 4,
    "episode": 9,
    "from_char": "DANIEL",
    "to_char": "KATE",
    "val": 3
  },
  {
    "season": 4,
    "episode": 9,
    "from_char": "DISTANT VOICE",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 4,
    "episode": 9,
    "from_char": "DISTANT VOICE",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 9,
    "from_char": "DISTANT VOICE",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 4,
    "episode": 9,
    "from_char": "DISTANT VOICE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 4,
    "episode": 9,
    "from_char": "DOORMAN",
    "to_char": "SUBTITLE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 9,
    "from_char": "DOORMAN",
    "to_char": "WIDMORE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 9,
    "from_char": "DOUG",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 4,
    "episode": 9,
    "from_char": "DOUG",
    "to_char": "SAYWER",
    "val": 1
  },
  {
    "season": 4,
    "episode": 9,
    "from_char": "GRAY",
    "to_char": "RED",
    "val": 1
  },
  {
    "season": 4,
    "episode": 9,
    "from_char": "GRAY",
    "to_char": "SUBTITLE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 9,
    "from_char": "HURLEY",
    "to_char": "LOCKE",
    "val": 6
  },
  {
    "season": 4,
    "episode": 9,
    "from_char": "HURLEY",
    "to_char": "MILES",
    "val": 2
  },
  {
    "season": 4,
    "episode": 9,
    "from_char": "HURLEY",
    "to_char": "SAWYER",
    "val": 3
  },
  {
    "season": 4,
    "episode": 9,
    "from_char": "JACK",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 4,
    "episode": 9,
    "from_char": "JACK",
    "to_char": "KATE",
    "val": 3
  },
  {
    "season": 4,
    "episode": 9,
    "from_char": "JULIET",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 9,
    "from_char": "KEAMY",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 9,
    "from_char": "KEAMY",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 4,
    "episode": 9,
    "from_char": "KEAMY",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 4,
    "episode": 9,
    "from_char": "LOCKE",
    "to_char": "MILES",
    "val": 4
  },
  {
    "season": 4,
    "episode": 9,
    "from_char": "LOCKE",
    "to_char": "SAWYER",
    "val": 7
  },
  {
    "season": 4,
    "episode": 9,
    "from_char": "MILES",
    "to_char": "SAWYER",
    "val": 4
  },
  {
    "season": 4,
    "episode": 9,
    "from_char": "NARJISS",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 4,
    "episode": 9,
    "from_char": "RED",
    "to_char": "SUBTITLE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 9,
    "from_char": "SAWYER",
    "to_char": "SAYWER",
    "val": 1
  },
  {
    "season": 4,
    "episode": 9,
    "from_char": "SAYID",
    "to_char": "SUBTITLE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 9,
    "from_char": "SUBTITLE",
    "to_char": "WIDMORE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 10,
    "from_char": "BERNARD",
    "to_char": "CHARLOTTE",
    "val": 2
  },
  {
    "season": 4,
    "episode": 10,
    "from_char": "BERNARD",
    "to_char": "DANIEL",
    "val": 2
  },
  {
    "season": 4,
    "episode": 10,
    "from_char": "BERNARD",
    "to_char": "JACK",
    "val": 2
  },
  {
    "season": 4,
    "episode": 10,
    "from_char": "BERNARD",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 10,
    "from_char": "BERNARD",
    "to_char": "JULIET",
    "val": 3
  },
  {
    "season": 4,
    "episode": 10,
    "from_char": "BERNARD",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 4,
    "episode": 10,
    "from_char": "BERNARD",
    "to_char": "ROSE",
    "val": 2
  },
  {
    "season": 4,
    "episode": 10,
    "from_char": "BERNARD",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 10,
    "from_char": "CHARLOTTE",
    "to_char": "DAN",
    "val": 2
  },
  {
    "season": 4,
    "episode": 10,
    "from_char": "CHARLOTTE",
    "to_char": "DANIEL",
    "val": 4
  },
  {
    "season": 4,
    "episode": 10,
    "from_char": "CHARLOTTE",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 4,
    "episode": 10,
    "from_char": "CHARLOTTE",
    "to_char": "JIN",
    "val": 4
  },
  {
    "season": 4,
    "episode": 10,
    "from_char": "CHARLOTTE",
    "to_char": "JULIET",
    "val": 3
  },
  {
    "season": 4,
    "episode": 10,
    "from_char": "CHARLOTTE",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 10,
    "from_char": "CHARLOTTE",
    "to_char": "ROSE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 10,
    "from_char": "CHARLOTTE",
    "to_char": "SUN",
    "val": 4
  },
  {
    "season": 4,
    "episode": 10,
    "from_char": "CHRISTIAN",
    "to_char": "ERIKA",
    "val": 1
  },
  {
    "season": 4,
    "episode": 10,
    "from_char": "CHRISTIAN",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 4,
    "episode": 10,
    "from_char": "CLAIRE",
    "to_char": "KEAMY",
    "val": 1
  },
  {
    "season": 4,
    "episode": 10,
    "from_char": "CLAIRE",
    "to_char": "LAPIDUS",
    "val": 1
  },
  {
    "season": 4,
    "episode": 10,
    "from_char": "CLAIRE",
    "to_char": "MAN 1",
    "val": 1
  },
  {
    "season": 4,
    "episode": 10,
    "from_char": "CLAIRE",
    "to_char": "MAN 2",
    "val": 1
  },
  {
    "season": 4,
    "episode": 10,
    "from_char": "CLAIRE",
    "to_char": "MAN 3",
    "val": 1
  },
  {
    "season": 4,
    "episode": 10,
    "from_char": "CLAIRE",
    "to_char": "MILES",
    "val": 2
  },
  {
    "season": 4,
    "episode": 10,
    "from_char": "CLAIRE",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 4,
    "episode": 10,
    "from_char": "DAN",
    "to_char": "DANIEL",
    "val": 1
  },
  {
    "season": 4,
    "episode": 10,
    "from_char": "DAN",
    "to_char": "JIN",
    "val": 2
  },
  {
    "season": 4,
    "episode": 10,
    "from_char": "DAN",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 4,
    "episode": 10,
    "from_char": "DAN",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 10,
    "from_char": "DAN",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 4,
    "episode": 10,
    "from_char": "DANIEL",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 4,
    "episode": 10,
    "from_char": "DANIEL",
    "to_char": "JIN",
    "val": 3
  },
  {
    "season": 4,
    "episode": 10,
    "from_char": "DANIEL",
    "to_char": "JULIET",
    "val": 2
  },
  {
    "season": 4,
    "episode": 10,
    "from_char": "DANIEL",
    "to_char": "ROSE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 10,
    "from_char": "DANIEL",
    "to_char": "SUN",
    "val": 3
  },
  {
    "season": 4,
    "episode": 10,
    "from_char": "DR. STILLMAN",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 4,
    "episode": 10,
    "from_char": "DR. STILLMAN",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 4,
    "episode": 10,
    "from_char": "ERIKA",
    "to_char": "JACK",
    "val": 2
  },
  {
    "season": 4,
    "episode": 10,
    "from_char": "ERIKA",
    "to_char": "MRS. BERENBERG",
    "val": 1
  },
  {
    "season": 4,
    "episode": 10,
    "from_char": "ERIKA",
    "to_char": "RECEPTIONIST",
    "val": 1
  },
  {
    "season": 4,
    "episode": 10,
    "from_char": "HURLEY",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 4,
    "episode": 10,
    "from_char": "JACK",
    "to_char": "JANE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 10,
    "from_char": "JACK",
    "to_char": "JULIET",
    "val": 6
  },
  {
    "season": 4,
    "episode": 10,
    "from_char": "JACK",
    "to_char": "KATE",
    "val": 7
  },
  {
    "season": 4,
    "episode": 10,
    "from_char": "JACK",
    "to_char": "MRS. BERENBERG",
    "val": 1
  },
  {
    "season": 4,
    "episode": 10,
    "from_char": "JACK",
    "to_char": "RECEPTIONIST",
    "val": 1
  },
  {
    "season": 4,
    "episode": 10,
    "from_char": "JACK",
    "to_char": "ROSE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 10,
    "from_char": "JACK",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 10,
    "from_char": "JACK",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 10,
    "from_char": "JANE",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 10,
    "from_char": "JIN",
    "to_char": "JULIET",
    "val": 2
  },
  {
    "season": 4,
    "episode": 10,
    "from_char": "JIN",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 10,
    "from_char": "JIN",
    "to_char": "SUN",
    "val": 3
  },
  {
    "season": 4,
    "episode": 10,
    "from_char": "JULIET",
    "to_char": "KATE",
    "val": 5
  },
  {
    "season": 4,
    "episode": 10,
    "from_char": "JULIET",
    "to_char": "ROSE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 10,
    "from_char": "JULIET",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 4,
    "episode": 10,
    "from_char": "KATE",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 10,
    "from_char": "KEAMY",
    "to_char": "LAPIDUS",
    "val": 1
  },
  {
    "season": 4,
    "episode": 10,
    "from_char": "KEAMY",
    "to_char": "MAN 1",
    "val": 1
  },
  {
    "season": 4,
    "episode": 10,
    "from_char": "KEAMY",
    "to_char": "MAN 2",
    "val": 1
  },
  {
    "season": 4,
    "episode": 10,
    "from_char": "KEAMY",
    "to_char": "MAN 3",
    "val": 1
  },
  {
    "season": 4,
    "episode": 10,
    "from_char": "KEAMY",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 4,
    "episode": 10,
    "from_char": "KEAMY",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 4,
    "episode": 10,
    "from_char": "LAPIDUS",
    "to_char": "MAN 1",
    "val": 1
  },
  {
    "season": 4,
    "episode": 10,
    "from_char": "LAPIDUS",
    "to_char": "MAN 2",
    "val": 1
  },
  {
    "season": 4,
    "episode": 10,
    "from_char": "LAPIDUS",
    "to_char": "MAN 3",
    "val": 1
  },
  {
    "season": 4,
    "episode": 10,
    "from_char": "LAPIDUS",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 4,
    "episode": 10,
    "from_char": "LAPIDUS",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 4,
    "episode": 10,
    "from_char": "MAN 1",
    "to_char": "MAN 2",
    "val": 1
  },
  {
    "season": 4,
    "episode": 10,
    "from_char": "MAN 1",
    "to_char": "MAN 3",
    "val": 1
  },
  {
    "season": 4,
    "episode": 10,
    "from_char": "MAN 1",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 4,
    "episode": 10,
    "from_char": "MAN 1",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 4,
    "episode": 10,
    "from_char": "MAN 2",
    "to_char": "MAN 3",
    "val": 1
  },
  {
    "season": 4,
    "episode": 10,
    "from_char": "MAN 2",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 4,
    "episode": 10,
    "from_char": "MAN 2",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 4,
    "episode": 10,
    "from_char": "MAN 3",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 4,
    "episode": 10,
    "from_char": "MAN 3",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 4,
    "episode": 10,
    "from_char": "MILES",
    "to_char": "SAWYER",
    "val": 4
  },
  {
    "season": 4,
    "episode": 10,
    "from_char": "MRS. BERENBERG",
    "to_char": "RECEPTIONIST",
    "val": 1
  },
  {
    "season": 4,
    "episode": 10,
    "from_char": "ROSE",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 11,
    "from_char": "ABADDON",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 11,
    "from_char": "ABADDON",
    "to_char": "ORDERLY",
    "val": 1
  },
  {
    "season": 4,
    "episode": 11,
    "from_char": "ABADDON",
    "to_char": "PHYSICAL THERAPIST",
    "val": 1
  },
  {
    "season": 4,
    "episode": 11,
    "from_char": "BEN",
    "to_char": "CHRISTIAN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 11,
    "from_char": "BEN",
    "to_char": "CLAIRE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 11,
    "from_char": "BEN",
    "to_char": "HURLEY",
    "val": 6
  },
  {
    "season": 4,
    "episode": 11,
    "from_char": "BEN",
    "to_char": "LOCKE",
    "val": 7
  },
  {
    "season": 4,
    "episode": 11,
    "from_char": "BEN",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 11,
    "from_char": "CHILD",
    "to_char": "JOHN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 11,
    "from_char": "CHILD",
    "to_char": "RICAHRD",
    "val": 1
  },
  {
    "season": 4,
    "episode": 11,
    "from_char": "CHILD",
    "to_char": "RICHARD",
    "val": 1
  },
  {
    "season": 4,
    "episode": 11,
    "from_char": "CHILD",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 11,
    "from_char": "CHRISTIAN",
    "to_char": "CLAIRE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 11,
    "from_char": "CHRISTIAN",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 4,
    "episode": 11,
    "from_char": "CHRISTIAN",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 11,
    "from_char": "CHRISTIAN",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 11,
    "from_char": "CLAIRE",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 4,
    "episode": 11,
    "from_char": "CLAIRE",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 11,
    "from_char": "CLAIRE",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 11,
    "from_char": "DESMOND",
    "to_char": "GAULT",
    "val": 2
  },
  {
    "season": 4,
    "episode": 11,
    "from_char": "DESMOND",
    "to_char": "OMAR",
    "val": 1
  },
  {
    "season": 4,
    "episode": 11,
    "from_char": "DESMOND",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 4,
    "episode": 11,
    "from_char": "DOCTOR",
    "to_char": "NURSE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 11,
    "from_char": "EMILY",
    "to_char": "MRS. LOCKE",
    "val": 2
  },
  {
    "season": 4,
    "episode": 11,
    "from_char": "EMILY",
    "to_char": "NURSE",
    "val": 3
  },
  {
    "season": 4,
    "episode": 11,
    "from_char": "EMILY",
    "to_char": "WOMAN OVER P.A.",
    "val": 1
  },
  {
    "season": 4,
    "episode": 11,
    "from_char": "GAULT",
    "to_char": "KEAMY",
    "val": 4
  },
  {
    "season": 4,
    "episode": 11,
    "from_char": "GAULT",
    "to_char": "LAPIDUS",
    "val": 2
  },
  {
    "season": 4,
    "episode": 11,
    "from_char": "GAULT",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 4,
    "episode": 11,
    "from_char": "GAULT",
    "to_char": "OMAR",
    "val": 2
  },
  {
    "season": 4,
    "episode": 11,
    "from_char": "GAULT",
    "to_char": "RAY",
    "val": 2
  },
  {
    "season": 4,
    "episode": 11,
    "from_char": "GAULT",
    "to_char": "SAYID",
    "val": 3
  },
  {
    "season": 4,
    "episode": 11,
    "from_char": "GELLERT",
    "to_char": "JOHN",
    "val": 2
  },
  {
    "season": 4,
    "episode": 11,
    "from_char": "HORACE",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 11,
    "from_char": "HURLEY",
    "to_char": "LOCKE",
    "val": 7
  },
  {
    "season": 4,
    "episode": 11,
    "from_char": "HURLEY",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 11,
    "from_char": "JACK",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 4,
    "episode": 11,
    "from_char": "JOHN",
    "to_char": "RICAHRD",
    "val": 1
  },
  {
    "season": 4,
    "episode": 11,
    "from_char": "JOHN",
    "to_char": "RICHARD",
    "val": 1
  },
  {
    "season": 4,
    "episode": 11,
    "from_char": "JOHN",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 11,
    "from_char": "KEAMY",
    "to_char": "LAPIDUS",
    "val": 2
  },
  {
    "season": 4,
    "episode": 11,
    "from_char": "KEAMY",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 4,
    "episode": 11,
    "from_char": "KEAMY",
    "to_char": "OMAR",
    "val": 1
  },
  {
    "season": 4,
    "episode": 11,
    "from_char": "KEAMY",
    "to_char": "RAY",
    "val": 2
  },
  {
    "season": 4,
    "episode": 11,
    "from_char": "KEAMY",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 4,
    "episode": 11,
    "from_char": "LAPIDUS",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 4,
    "episode": 11,
    "from_char": "LAPIDUS",
    "to_char": "OMAR",
    "val": 1
  },
  {
    "season": 4,
    "episode": 11,
    "from_char": "LAPIDUS",
    "to_char": "RAY",
    "val": 1
  },
  {
    "season": 4,
    "episode": 11,
    "from_char": "LOCKE",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 11,
    "from_char": "LOCKE",
    "to_char": "ORDERLY",
    "val": 1
  },
  {
    "season": 4,
    "episode": 11,
    "from_char": "LOCKE",
    "to_char": "PHYSICAL THERAPIST",
    "val": 1
  },
  {
    "season": 4,
    "episode": 11,
    "from_char": "MRS. LOCKE",
    "to_char": "NURSE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 11,
    "from_char": "MRS. LOCKE",
    "to_char": "WOMAN OVER P.A.",
    "val": 1
  },
  {
    "season": 4,
    "episode": 11,
    "from_char": "NURSE",
    "to_char": "WOMAN OVER P.A.",
    "val": 1
  },
  {
    "season": 4,
    "episode": 11,
    "from_char": "OMAR",
    "to_char": "RAY",
    "val": 1
  },
  {
    "season": 4,
    "episode": 11,
    "from_char": "OMAR",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 4,
    "episode": 11,
    "from_char": "ORDERLY",
    "to_char": "PHYSICAL THERAPIST",
    "val": 1
  },
  {
    "season": 4,
    "episode": 11,
    "from_char": "RAY",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 4,
    "episode": 11,
    "from_char": "RICAHRD",
    "to_char": "RICHARD",
    "val": 1
  },
  {
    "season": 4,
    "episode": 11,
    "from_char": "RICAHRD",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 11,
    "from_char": "RICHARD",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "ALL",
    "to_char": "CARMEN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "ALL",
    "to_char": "DAVID",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "ALL",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "ARABIC REPORTER",
    "to_char": "FEMALE KOREAN REPORTER",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "ARABIC REPORTER",
    "to_char": "FEMALE REPORTER #1",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "ARABIC REPORTER",
    "to_char": "FEMALE REPORTER #2",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "ARABIC REPORTER",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "ARABIC REPORTER",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "ARABIC REPORTER",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "ARABIC REPORTER",
    "to_char": "MALE REPORTER #1",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "ARABIC REPORTER",
    "to_char": "MALE REPORTER #3",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "ARABIC REPORTER",
    "to_char": "MALE REPORTER #4",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "ARABIC REPORTER",
    "to_char": "MS. DECKER",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "ARABIC REPORTER",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "ARABIC REPORTER",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "BEN",
    "to_char": "HURLEY",
    "val": 3
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "BEN",
    "to_char": "LOCKE",
    "val": 3
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "CARMEN",
    "to_char": "DAVID",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "CARMEN",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "CAROLE",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "CAROLE",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "CAROLE",
    "to_char": "MARGO",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "CHARLOTTE",
    "to_char": "FARADAY",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "COPILOT",
    "to_char": "MS. DECKER",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "COPILOT",
    "to_char": "PILOT",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "DAVID",
    "to_char": "HURLEY",
    "val": 3
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "DAVID",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "DAVID",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "DAVID",
    "to_char": "NADIA",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "DAVID",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "DESMOND",
    "to_char": "FARADAY",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "DESMOND",
    "to_char": "HENDRICKS",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "DESMOND",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "DESMOND",
    "to_char": "MICHAEL",
    "val": 2
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "DESMOND",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "FARADAY",
    "to_char": "FRANK",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "FARADAY",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "FARADAY",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "FARADAY",
    "to_char": "JULIET",
    "val": 2
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "FARADAY",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "FARADAY",
    "to_char": "KEAMY",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "FARADAY",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "FARADAY",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "FARADAY",
    "to_char": "ROSE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "FARADAY",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "FARADAY",
    "to_char": "SUN",
    "val": 3
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "FARADAY",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "FEMALE KOREAN REPORTER",
    "to_char": "FEMALE REPORTER #1",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "FEMALE KOREAN REPORTER",
    "to_char": "FEMALE REPORTER #2",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "FEMALE KOREAN REPORTER",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "FEMALE KOREAN REPORTER",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "FEMALE KOREAN REPORTER",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "FEMALE KOREAN REPORTER",
    "to_char": "MALE REPORTER #1",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "FEMALE KOREAN REPORTER",
    "to_char": "MALE REPORTER #3",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "FEMALE KOREAN REPORTER",
    "to_char": "MALE REPORTER #4",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "FEMALE KOREAN REPORTER",
    "to_char": "MS. DECKER",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "FEMALE KOREAN REPORTER",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "FEMALE KOREAN REPORTER",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "FEMALE REPORTER #1",
    "to_char": "FEMALE REPORTER #2",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "FEMALE REPORTER #1",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "FEMALE REPORTER #1",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "FEMALE REPORTER #1",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "FEMALE REPORTER #1",
    "to_char": "MALE REPORTER #1",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "FEMALE REPORTER #1",
    "to_char": "MALE REPORTER #3",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "FEMALE REPORTER #1",
    "to_char": "MALE REPORTER #4",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "FEMALE REPORTER #1",
    "to_char": "MS. DECKER",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "FEMALE REPORTER #1",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "FEMALE REPORTER #1",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "FEMALE REPORTER #2",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "FEMALE REPORTER #2",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "FEMALE REPORTER #2",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "FEMALE REPORTER #2",
    "to_char": "MALE REPORTER #1",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "FEMALE REPORTER #2",
    "to_char": "MALE REPORTER #3",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "FEMALE REPORTER #2",
    "to_char": "MALE REPORTER #4",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "FEMALE REPORTER #2",
    "to_char": "MS. DECKER",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "FEMALE REPORTER #2",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "FEMALE REPORTER #2",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "FRANK",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "FRANK",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "FRANK",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "FRANK",
    "to_char": "KEAMY",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "FRANK",
    "to_char": "ROSE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "FRANK",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "HURLEY",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "HURLEY",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "HURLEY",
    "to_char": "LOCKE",
    "val": 3
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "HURLEY",
    "to_char": "MALE REPORTER #1",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "HURLEY",
    "to_char": "MALE REPORTER #3",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "HURLEY",
    "to_char": "MALE REPORTER #4",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "HURLEY",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "HURLEY",
    "to_char": "MS. DECKER",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "HURLEY",
    "to_char": "NADIA",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "HURLEY",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "HURLEY",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "JACK",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "JACK",
    "to_char": "KATE",
    "val": 4
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "JACK",
    "to_char": "KEAMY",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "JACK",
    "to_char": "LAPIDUS",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "JACK",
    "to_char": "MALE REPORTER #1",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "JACK",
    "to_char": "MALE REPORTER #3",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "JACK",
    "to_char": "MALE REPORTER #4",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "JACK",
    "to_char": "MARGO",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "JACK",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "JACK",
    "to_char": "MS. DECKER",
    "val": 3
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "JACK",
    "to_char": "ROSE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "JACK",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "JACK",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "JACK",
    "to_char": "SUN",
    "val": 3
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "JIN",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "JIN",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "JIN",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "JIN",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "JIN",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "JIN",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "JIN",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "JULIET",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "JULIET",
    "to_char": "KEAMY",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "JULIET",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "JULIET",
    "to_char": "ROSE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "JULIET",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "JULIET",
    "to_char": "SUN",
    "val": 3
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "JULIET",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "KATE",
    "to_char": "KEAMY",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "KATE",
    "to_char": "MALE REPORTER #1",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "KATE",
    "to_char": "MALE REPORTER #3",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "KATE",
    "to_char": "MALE REPORTER #4",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "KATE",
    "to_char": "MAN",
    "val": 2
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "KATE",
    "to_char": "MARGO",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "KATE",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "KATE",
    "to_char": "MS. DECKER",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "KATE",
    "to_char": "NADIA",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "KATE",
    "to_char": "RICHARD",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "KATE",
    "to_char": "ROSE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "KATE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "KATE",
    "to_char": "SAYID",
    "val": 4
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "KATE",
    "to_char": "SUN",
    "val": 3
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "KATE",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "KEAMY",
    "to_char": "ROSE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "KEAMY",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "LAPIDUS",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "MALE REPORTER #1",
    "to_char": "MALE REPORTER #3",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "MALE REPORTER #1",
    "to_char": "MALE REPORTER #4",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "MALE REPORTER #1",
    "to_char": "MS. DECKER",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "MALE REPORTER #1",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "MALE REPORTER #1",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "MALE REPORTER #3",
    "to_char": "MALE REPORTER #4",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "MALE REPORTER #3",
    "to_char": "MS. DECKER",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "MALE REPORTER #3",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "MALE REPORTER #3",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "MALE REPORTER #4",
    "to_char": "MS. DECKER",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "MALE REPORTER #4",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "MALE REPORTER #4",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "MAN",
    "to_char": "NADIA",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "MAN",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "MAN",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "MAN",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "MICHAEL",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "MILES",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "MR. PAIK",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "MR. PAIK",
    "to_char": "UNDERLING",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "MS. DECKER",
    "to_char": "PILOT",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "MS. DECKER",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "MS. DECKER",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "NADIA",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "RICHARD",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "ROSE",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "SAYID",
    "to_char": "SUN",
    "val": 3
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "SAYID",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "SUN",
    "to_char": "UNDERLING",
    "val": 1
  },
  {
    "season": 4,
    "episode": 12,
    "from_char": "SUN",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "BEN",
    "to_char": "CHARLOTTE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "BEN",
    "to_char": "DESMOND",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "BEN",
    "to_char": "FARADAY",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "BEN",
    "to_char": "HURLEY",
    "val": 3
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "BEN",
    "to_char": "JACK",
    "val": 4
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "BEN",
    "to_char": "JULIET",
    "val": 2
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "BEN",
    "to_char": "KATE",
    "val": 3
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "BEN",
    "to_char": "KEAMY",
    "val": 3
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "BEN",
    "to_char": "LAPIDUS",
    "val": 3
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "BEN",
    "to_char": "LOCKE",
    "val": 6
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "BEN",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "BEN",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "BEN",
    "to_char": "MICHAEL'S MOTHER",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "BEN",
    "to_char": "NURSE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "BEN",
    "to_char": "RICHARD",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "BEN",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "BEN",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "BEN",
    "to_char": "SCIENTIST",
    "val": 2
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "BEN",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "BEN",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "CHARLOTTE",
    "to_char": "FARADAY",
    "val": 2
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "CHARLOTTE",
    "to_char": "JULIET",
    "val": 2
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "CHARLOTTE",
    "to_char": "KEAMY",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "CHARLOTTE",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "CHARLOTTE",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "CHARLOTTE",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "CHARLOTTE",
    "to_char": "ROSE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "CHARLOTTE",
    "to_char": "SCIENTIST",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "CHRISTIAN",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "CHRISTIAN",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "CHRISTIAN",
    "to_char": "LAPIDUS",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "CHRISTIAN",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "CHRISTIAN",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "CHRISTIAN",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "CLAIRE",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "DESMOND",
    "to_char": "HENRIK",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "DESMOND",
    "to_char": "HURLEY",
    "val": 3
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "DESMOND",
    "to_char": "HURLEY AND DESMOND",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "DESMOND",
    "to_char": "JACK",
    "val": 5
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "DESMOND",
    "to_char": "JIN",
    "val": 3
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "DESMOND",
    "to_char": "KATE",
    "val": 4
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "DESMOND",
    "to_char": "LAPIDUS",
    "val": 4
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "DESMOND",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "DESMOND",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "DESMOND",
    "to_char": "MICHAEL",
    "val": 3
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "DESMOND",
    "to_char": "PENNY",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "DESMOND",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "DESMOND",
    "to_char": "SUN",
    "val": 3
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "FARADAY",
    "to_char": "JULIET",
    "val": 2
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "FARADAY",
    "to_char": "KEAMY",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "FARADAY",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "FARADAY",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "FARADAY",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "FARADAY",
    "to_char": "ROSE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "FARADAY",
    "to_char": "SCIENTIST",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "GUY IN CAR",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "HENRIK",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "HENRIK",
    "to_char": "HURLEY AND DESMOND",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "HENRIK",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "HENRIK",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "HENRIK",
    "to_char": "LAPIDUS",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "HENRIK",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "HENRIK",
    "to_char": "PENNY",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "HENRIK",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "HURLEY",
    "to_char": "HURLEY AND DESMOND",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "HURLEY",
    "to_char": "JACK",
    "val": 6
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "HURLEY",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "HURLEY",
    "to_char": "KATE",
    "val": 4
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "HURLEY",
    "to_char": "KEAMY",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "HURLEY",
    "to_char": "LAPIDUS",
    "val": 5
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "HURLEY",
    "to_char": "LOCKE",
    "val": 2
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "HURLEY",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "HURLEY",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "HURLEY",
    "to_char": "MICHAEL'S MOTHER",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "HURLEY",
    "to_char": "NURSE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "HURLEY",
    "to_char": "PENNY",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "HURLEY",
    "to_char": "RICHARD",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "HURLEY",
    "to_char": "SAWYER",
    "val": 3
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "HURLEY",
    "to_char": "SAYID",
    "val": 5
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "HURLEY",
    "to_char": "SCIENTIST",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "HURLEY",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "HURLEY",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "HURLEY AND DESMOND",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "HURLEY AND DESMOND",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "HURLEY AND DESMOND",
    "to_char": "LAPIDUS",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "HURLEY AND DESMOND",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "HURLEY AND DESMOND",
    "to_char": "PENNY",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "HURLEY AND DESMOND",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "JACK",
    "to_char": "JIN",
    "val": 2
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "JACK",
    "to_char": "KATE",
    "val": 8
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "JACK",
    "to_char": "LAPIDUS",
    "val": 8
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "JACK",
    "to_char": "LOCKE",
    "val": 4
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "JACK",
    "to_char": "MAN",
    "val": 2
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "JACK",
    "to_char": "MICHAEL",
    "val": 3
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "JACK",
    "to_char": "PENNY",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "JACK",
    "to_char": "SAWYER",
    "val": 3
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "JACK",
    "to_char": "SAYID",
    "val": 6
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "JACK",
    "to_char": "SCIENTIST",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "JACK",
    "to_char": "SUN",
    "val": 5
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "JI YEON",
    "to_char": "MRS. PAIK",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "JI YEON",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "JI YEON",
    "to_char": "WIDMORE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "JIN",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "JIN",
    "to_char": "LAPIDUS",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "JIN",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "JIN",
    "to_char": "MICHAEL",
    "val": 4
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "JIN",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "JULIET",
    "to_char": "KEAMY",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "JULIET",
    "to_char": "LOCKE",
    "val": 2
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "JULIET",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "JULIET",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "JULIET",
    "to_char": "ROSE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "JULIET",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "JULIET",
    "to_char": "SCIENTIST",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "KATE",
    "to_char": "KEAMY",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "KATE",
    "to_char": "LAPIDUS",
    "val": 8
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "KATE",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "KATE",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "KATE",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "KATE",
    "to_char": "MICHAEL'S MOTHER",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "KATE",
    "to_char": "NURSE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "KATE",
    "to_char": "PENNY",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "KATE",
    "to_char": "RICHARD",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "KATE",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "KATE",
    "to_char": "SAYID",
    "val": 5
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "KATE",
    "to_char": "SCIENTIST",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "KATE",
    "to_char": "SUN",
    "val": 4
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "KATE",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "KEAMY",
    "to_char": "LAPIDUS",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "KEAMY",
    "to_char": "LOCKE",
    "val": 2
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "KEAMY",
    "to_char": "MICHAEL'S MOTHER",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "KEAMY",
    "to_char": "NURSE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "KEAMY",
    "to_char": "RICHARD",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "KEAMY",
    "to_char": "SCIENTIST",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "KEAMY",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "LAPIDUS",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "LAPIDUS",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "LAPIDUS",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "LAPIDUS",
    "to_char": "MICHAEL'S MOTHER",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "LAPIDUS",
    "to_char": "NURSE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "LAPIDUS",
    "to_char": "PENNY",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "LAPIDUS",
    "to_char": "RICHARD",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "LAPIDUS",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "LAPIDUS",
    "to_char": "SAYID",
    "val": 6
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "LAPIDUS",
    "to_char": "SCIENTIST",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "LAPIDUS",
    "to_char": "SUN",
    "val": 4
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "LAPIDUS",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "LOCKE",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "LOCKE",
    "to_char": "MICHAEL",
    "val": 2
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "LOCKE",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "LOCKE",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "LOCKE",
    "to_char": "SCIENTIST",
    "val": 2
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "LOCKE",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "MAN",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "MAN",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "MAN",
    "to_char": "PENNY",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "MAN",
    "to_char": "ROSE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "MAN",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "MAN",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "MICHAEL",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "MICHAEL",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "MICHAEL'S MOTHER",
    "to_char": "NURSE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "MICHAEL'S MOTHER",
    "to_char": "RICHARD",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "MICHAEL'S MOTHER",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "MILES",
    "to_char": "ROSE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "MRS. PAIK",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "MRS. PAIK",
    "to_char": "WIDMORE",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "NURSE",
    "to_char": "RICHARD",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "NURSE",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "PENNY",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "RICHARD",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "SAWYER",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "SAWYER",
    "to_char": "SCIENTIST",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "SAYID",
    "to_char": "SCIENTIST",
    "val": 1
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "SAYID",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 4,
    "episode": 13,
    "from_char": "SUN",
    "to_char": "WIDMORE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 1,
    "from_char": "AARON",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 5,
    "episode": 1,
    "from_char": "AARON",
    "to_char": "NORTON",
    "val": 1
  },
  {
    "season": 5,
    "episode": 1,
    "from_char": "BEN",
    "to_char": "FEMALE NEWS ANCHOR",
    "val": 1
  },
  {
    "season": 5,
    "episode": 1,
    "from_char": "BEN",
    "to_char": "JACK",
    "val": 3
  },
  {
    "season": 5,
    "episode": 1,
    "from_char": "BERNARD",
    "to_char": "CHARLOTTE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 1,
    "from_char": "BERNARD",
    "to_char": "FARADAY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 1,
    "from_char": "BERNARD",
    "to_char": "JULIET",
    "val": 2
  },
  {
    "season": 5,
    "episode": 1,
    "from_char": "BERNARD",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 5,
    "episode": 1,
    "from_char": "BERNARD",
    "to_char": "ROSE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 1,
    "from_char": "BERNARD",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 5,
    "episode": 1,
    "from_char": "CHANG",
    "to_char": "DIRECTOR",
    "val": 1
  },
  {
    "season": 5,
    "episode": 1,
    "from_char": "CHANG",
    "to_char": "FOREMAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 1,
    "from_char": "CHANG",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 1,
    "from_char": "CHANG",
    "to_char": "SOUND MAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 1,
    "from_char": "CHANG",
    "to_char": "TANK CARRYING WORKER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 1,
    "from_char": "CHANG",
    "to_char": "WORKER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 1,
    "from_char": "CHARLOTTE",
    "to_char": "FARADAY",
    "val": 4
  },
  {
    "season": 5,
    "episode": 1,
    "from_char": "CHARLOTTE",
    "to_char": "JULIET",
    "val": 4
  },
  {
    "season": 5,
    "episode": 1,
    "from_char": "CHARLOTTE",
    "to_char": "MILES",
    "val": 4
  },
  {
    "season": 5,
    "episode": 1,
    "from_char": "CHARLOTTE",
    "to_char": "SAWYER",
    "val": 4
  },
  {
    "season": 5,
    "episode": 1,
    "from_char": "DESMOND",
    "to_char": "FARADAY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 1,
    "from_char": "DESMOND",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 1,
    "from_char": "DESMOND",
    "to_char": "PENNY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 1,
    "from_char": "DIRECTOR",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 1,
    "from_char": "DIRECTOR",
    "to_char": "SOUND MAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 1,
    "from_char": "ETHAN",
    "to_char": "LOCKE",
    "val": 2
  },
  {
    "season": 5,
    "episode": 1,
    "from_char": "FARADAY",
    "to_char": "FROGURT",
    "val": 1
  },
  {
    "season": 5,
    "episode": 1,
    "from_char": "FARADAY",
    "to_char": "JULIET",
    "val": 4
  },
  {
    "season": 5,
    "episode": 1,
    "from_char": "FARADAY",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 1,
    "from_char": "FARADAY",
    "to_char": "MILES",
    "val": 4
  },
  {
    "season": 5,
    "episode": 1,
    "from_char": "FARADAY",
    "to_char": "SAWYER",
    "val": 5
  },
  {
    "season": 5,
    "episode": 1,
    "from_char": "FEMALE NEWS ANCHOR",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 5,
    "episode": 1,
    "from_char": "FIRST MAN",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 1,
    "from_char": "FIRST MAN",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 5,
    "episode": 1,
    "from_char": "FIRST MAN",
    "to_char": "SECOND MAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 1,
    "from_char": "FIRST MAN",
    "to_char": "THIRD MAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 1,
    "from_char": "FOREMAN",
    "to_char": "TANK CARRYING WORKER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 1,
    "from_char": "FOREMAN",
    "to_char": "WORKER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 1,
    "from_char": "HURLEY",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 5,
    "episode": 1,
    "from_char": "HURLEY",
    "to_char": "SECOND MAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 1,
    "from_char": "HURLEY",
    "to_char": "THIRD MAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 1,
    "from_char": "HURLEY",
    "to_char": "WAITRESS",
    "val": 1
  },
  {
    "season": 5,
    "episode": 1,
    "from_char": "JULIET",
    "to_char": "MILES",
    "val": 4
  },
  {
    "season": 5,
    "episode": 1,
    "from_char": "JULIET",
    "to_char": "ROSE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 1,
    "from_char": "JULIET",
    "to_char": "SAWYER",
    "val": 5
  },
  {
    "season": 5,
    "episode": 1,
    "from_char": "KATE",
    "to_char": "NORTON",
    "val": 1
  },
  {
    "season": 5,
    "episode": 1,
    "from_char": "LOCKE",
    "to_char": "RICHARD",
    "val": 1
  },
  {
    "season": 5,
    "episode": 1,
    "from_char": "MAN",
    "to_char": "SOUND MAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 1,
    "from_char": "MILES",
    "to_char": "SAWYER",
    "val": 4
  },
  {
    "season": 5,
    "episode": 1,
    "from_char": "RECORD",
    "to_char": "WIFE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 1,
    "from_char": "ROSE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 1,
    "from_char": "SAYID",
    "to_char": "SECOND MAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 1,
    "from_char": "SAYID",
    "to_char": "THIRD MAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 1,
    "from_char": "SAYID",
    "to_char": "WAITRESS",
    "val": 1
  },
  {
    "season": 5,
    "episode": 1,
    "from_char": "SECOND MAN",
    "to_char": "THIRD MAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 1,
    "from_char": "SUN",
    "to_char": "TICKETING AGENT",
    "val": 1
  },
  {
    "season": 5,
    "episode": 1,
    "from_char": "SUN",
    "to_char": "WIDMORE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 1,
    "from_char": "SUN",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 1,
    "from_char": "TANK CARRYING WORKER",
    "to_char": "WORKER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 1,
    "from_char": "TICKETING AGENT",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "AARON",
    "to_char": "CLERK",
    "val": 1
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "AARON",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "AARON",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "AARON",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "ANA LUCIA",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "ANNOUNCER",
    "to_char": "DAVID",
    "val": 1
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "ANNOUNCER",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "ANNOUNCER",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "ANNOUNCER",
    "to_char": "WOMAN 1",
    "val": 1
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "ANNOUNCER",
    "to_char": "WOMAN 2",
    "val": 1
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "ANOTHER MAN",
    "to_char": "CHARLOTTE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "ANOTHER MAN",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "ANOTHER MAN",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "ANOTHER MAN",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "ANOTHER MAN",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "BEN",
    "to_char": "DETECTIVE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "BEN",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "BEN",
    "to_char": "JACK",
    "val": 2
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "BEN",
    "to_char": "JILL",
    "val": 1
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "BEN",
    "to_char": "MS. HAWKING",
    "val": 1
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "BEN",
    "to_char": "SHROUDED WOMAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "BERNARD",
    "to_char": "CHARLOTTE",
    "val": 2
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "BERNARD",
    "to_char": "FARADAY",
    "val": 2
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "BERNARD",
    "to_char": "FROGURT",
    "val": 2
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "BERNARD",
    "to_char": "JULIET",
    "val": 2
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "BERNARD",
    "to_char": "MALE SURVIVOR",
    "val": 1
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "BERNARD",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "BERNARD",
    "to_char": "MILE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "BERNARD",
    "to_char": "MILES",
    "val": 2
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "BERNARD",
    "to_char": "ROSE",
    "val": 2
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "BERNARD",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "CARMEN",
    "to_char": "DAVID",
    "val": 1
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "CARMEN",
    "to_char": "HURLEY",
    "val": 2
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "CHARLOTTE",
    "to_char": "FARADAY",
    "val": 2
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "CHARLOTTE",
    "to_char": "FROGURT",
    "val": 2
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "CHARLOTTE",
    "to_char": "JULIET",
    "val": 3
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "CHARLOTTE",
    "to_char": "MALE SURVIVOR",
    "val": 1
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "CHARLOTTE",
    "to_char": "MAN",
    "val": 2
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "CHARLOTTE",
    "to_char": "MILE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "CHARLOTTE",
    "to_char": "MILES",
    "val": 2
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "CHARLOTTE",
    "to_char": "ROSE",
    "val": 2
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "CHARLOTTE",
    "to_char": "SAWYER",
    "val": 3
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "CHARLOTTE",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "CLERK",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "CLERK",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "DAVID",
    "to_char": "DETECTIVE",
    "val": 2
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "DAVID",
    "to_char": "HURLEY",
    "val": 4
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "DAVID",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "DAVID",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "DAVID",
    "to_char": "WOMAN 1",
    "val": 1
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "DAVID",
    "to_char": "WOMAN 2",
    "val": 1
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "DETECTIVE",
    "to_char": "HURLEY",
    "val": 3
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "FARADAY",
    "to_char": "FROGURT",
    "val": 2
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "FARADAY",
    "to_char": "JULIET",
    "val": 2
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "FARADAY",
    "to_char": "MALE SURVIVOR",
    "val": 1
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "FARADAY",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "FARADAY",
    "to_char": "MILE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "FARADAY",
    "to_char": "MILES",
    "val": 2
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "FARADAY",
    "to_char": "ROSE",
    "val": 2
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "FARADAY",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "FROGURT",
    "to_char": "JULIET",
    "val": 2
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "FROGURT",
    "to_char": "MALE SURVIVOR",
    "val": 1
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "FROGURT",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "FROGURT",
    "to_char": "MILE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "FROGURT",
    "to_char": "MILES",
    "val": 2
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "FROGURT",
    "to_char": "ROSE",
    "val": 2
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "FROGURT",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "HURLEY",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "HURLEY",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "HURLEY",
    "to_char": "LAPIDUS",
    "val": 1
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "HURLEY",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "HURLEY",
    "to_char": "PENNY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "HURLEY",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "HURLEY",
    "to_char": "WOMAN 1",
    "val": 1
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "HURLEY",
    "to_char": "WOMAN 2",
    "val": 1
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "JACK",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "JACK",
    "to_char": "LAPIDUS",
    "val": 1
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "JACK",
    "to_char": "PENNY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "JACK",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "JACK",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "JACK",
    "to_char": "VOICE OVER P.A.",
    "val": 1
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "JONES",
    "to_char": "JULIET",
    "val": 2
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "JONES",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "JONES",
    "to_char": "MATTINGLY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "JONES",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "JULIET",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "JULIET",
    "to_char": "MALE SURVIVOR",
    "val": 1
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "JULIET",
    "to_char": "MAN",
    "val": 2
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "JULIET",
    "to_char": "MATTINGLY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "JULIET",
    "to_char": "MILE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "JULIET",
    "to_char": "MILES",
    "val": 2
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "JULIET",
    "to_char": "ROSE",
    "val": 2
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "JULIET",
    "to_char": "SAWYER",
    "val": 5
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "JULIET",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "KATE",
    "to_char": "LAPIDUS",
    "val": 1
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "KATE",
    "to_char": "PENNY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "KATE",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "KATE",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "LAPIDUS",
    "to_char": "PENNY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "LAPIDUS",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "LOCKE",
    "to_char": "MATTINGLY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "LOCKE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "MALE SURVIVOR",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "MALE SURVIVOR",
    "to_char": "MILE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "MALE SURVIVOR",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "MALE SURVIVOR",
    "to_char": "ROSE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "MALE SURVIVOR",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "MAN",
    "to_char": "MILE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "MAN",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "MAN",
    "to_char": "ROSE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "MAN",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "MAN",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "MAN",
    "to_char": "WOMAN 1",
    "val": 1
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "MAN",
    "to_char": "WOMAN 2",
    "val": 1
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "MATTINGLY",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "MILE",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "MILE",
    "to_char": "ROSE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "MILE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "MILES",
    "to_char": "ROSE",
    "val": 2
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "MILES",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "MS. HAWKING",
    "to_char": "SHROUDED WOMAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "PENNY",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "ROSE",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "SAWYER",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "SAYID",
    "to_char": "VOICE OVER P.A.",
    "val": 1
  },
  {
    "season": 5,
    "episode": 2,
    "from_char": "WOMAN 1",
    "to_char": "WOMAN 2",
    "val": 1
  },
  {
    "season": 5,
    "episode": 3,
    "from_char": "ABIGAIL",
    "to_char": "DESMOND",
    "val": 1
  },
  {
    "season": 5,
    "episode": 3,
    "from_char": "ALPERT",
    "to_char": "CHARLOTTE",
    "val": 2
  },
  {
    "season": 5,
    "episode": 3,
    "from_char": "ALPERT",
    "to_char": "ELLIE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 3,
    "from_char": "ALPERT",
    "to_char": "FARADAY",
    "val": 2
  },
  {
    "season": 5,
    "episode": 3,
    "from_char": "ALPERT",
    "to_char": "JONES",
    "val": 1
  },
  {
    "season": 5,
    "episode": 3,
    "from_char": "ALPERT",
    "to_char": "MILES",
    "val": 2
  },
  {
    "season": 5,
    "episode": 3,
    "from_char": "ALPERT",
    "to_char": "RICHARD",
    "val": 2
  },
  {
    "season": 5,
    "episode": 3,
    "from_char": "ARCHIVIST",
    "to_char": "DESMOND",
    "val": 1
  },
  {
    "season": 5,
    "episode": 3,
    "from_char": "CHARLOTTE",
    "to_char": "ELLIE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 3,
    "from_char": "CHARLOTTE",
    "to_char": "FARADAY",
    "val": 4
  },
  {
    "season": 5,
    "episode": 3,
    "from_char": "CHARLOTTE",
    "to_char": "JONES",
    "val": 1
  },
  {
    "season": 5,
    "episode": 3,
    "from_char": "CHARLOTTE",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 5,
    "episode": 3,
    "from_char": "CHARLOTTE",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 3,
    "from_char": "CHARLOTTE",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 3,
    "from_char": "CHARLOTTE",
    "to_char": "MILES",
    "val": 4
  },
  {
    "season": 5,
    "episode": 3,
    "from_char": "CHARLOTTE",
    "to_char": "RICHARD",
    "val": 3
  },
  {
    "season": 5,
    "episode": 3,
    "from_char": "CHARLOTTE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 3,
    "from_char": "CHARLOTTE",
    "to_char": "YOUNG BLONDE HOSTILE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 3,
    "from_char": "CUNNINGHAM",
    "to_char": "JONES",
    "val": 1
  },
  {
    "season": 5,
    "episode": 3,
    "from_char": "CUNNINGHAM",
    "to_char": "JULIET",
    "val": 2
  },
  {
    "season": 5,
    "episode": 3,
    "from_char": "CUNNINGHAM",
    "to_char": "LOCKE",
    "val": 2
  },
  {
    "season": 5,
    "episode": 3,
    "from_char": "CUNNINGHAM",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 5,
    "episode": 3,
    "from_char": "CUSTODIAN",
    "to_char": "DESMOND",
    "val": 1
  },
  {
    "season": 5,
    "episode": 3,
    "from_char": "DESMOND",
    "to_char": "MELANIE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 3,
    "from_char": "DESMOND",
    "to_char": "PENNY",
    "val": 4
  },
  {
    "season": 5,
    "episode": 3,
    "from_char": "DESMOND",
    "to_char": "SALONGA",
    "val": 2
  },
  {
    "season": 5,
    "episode": 3,
    "from_char": "DESMOND",
    "to_char": "WIDMORE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 3,
    "from_char": "ELLIE",
    "to_char": "FARADAY",
    "val": 3
  },
  {
    "season": 5,
    "episode": 3,
    "from_char": "ELLIE",
    "to_char": "JONES",
    "val": 1
  },
  {
    "season": 5,
    "episode": 3,
    "from_char": "ELLIE",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 5,
    "episode": 3,
    "from_char": "ELLIE",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 5,
    "episode": 3,
    "from_char": "ELLIE",
    "to_char": "RICHARD",
    "val": 1
  },
  {
    "season": 5,
    "episode": 3,
    "from_char": "ELLIE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 3,
    "from_char": "FARADAY",
    "to_char": "JONES",
    "val": 1
  },
  {
    "season": 5,
    "episode": 3,
    "from_char": "FARADAY",
    "to_char": "JULIET",
    "val": 2
  },
  {
    "season": 5,
    "episode": 3,
    "from_char": "FARADAY",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 3,
    "from_char": "FARADAY",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 3,
    "from_char": "FARADAY",
    "to_char": "MILES",
    "val": 6
  },
  {
    "season": 5,
    "episode": 3,
    "from_char": "FARADAY",
    "to_char": "RICHARD",
    "val": 4
  },
  {
    "season": 5,
    "episode": 3,
    "from_char": "FARADAY",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 5,
    "episode": 3,
    "from_char": "FARADAY",
    "to_char": "YOUNG BLONDE HOSTILE",
    "val": 3
  },
  {
    "season": 5,
    "episode": 3,
    "from_char": "JONES",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 5,
    "episode": 3,
    "from_char": "JONES",
    "to_char": "LOCKE",
    "val": 2
  },
  {
    "season": 5,
    "episode": 3,
    "from_char": "JONES",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 5,
    "episode": 3,
    "from_char": "JONES",
    "to_char": "RICHARD",
    "val": 2
  },
  {
    "season": 5,
    "episode": 3,
    "from_char": "JONES",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 3,
    "from_char": "JONES",
    "to_char": "WIDMORE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 3,
    "from_char": "JULIET",
    "to_char": "LOCKE",
    "val": 4
  },
  {
    "season": 5,
    "episode": 3,
    "from_char": "JULIET",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 5,
    "episode": 3,
    "from_char": "JULIET",
    "to_char": "RICHARD",
    "val": 1
  },
  {
    "season": 5,
    "episode": 3,
    "from_char": "JULIET",
    "to_char": "SAWYER",
    "val": 5
  },
  {
    "season": 5,
    "episode": 3,
    "from_char": "LOCKE",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 5,
    "episode": 3,
    "from_char": "LOCKE",
    "to_char": "RICHARD",
    "val": 2
  },
  {
    "season": 5,
    "episode": 3,
    "from_char": "LOCKE",
    "to_char": "SAWYER",
    "val": 4
  },
  {
    "season": 5,
    "episode": 3,
    "from_char": "LOCKE",
    "to_char": "WIDMORE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 3,
    "from_char": "MAN",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 5,
    "episode": 3,
    "from_char": "MAN",
    "to_char": "YOUNG BLONDE HOSTILE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 3,
    "from_char": "MELANIE",
    "to_char": "WIDMORE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 3,
    "from_char": "MILES",
    "to_char": "RICHARD",
    "val": 4
  },
  {
    "season": 5,
    "episode": 3,
    "from_char": "MILES",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 3,
    "from_char": "MILES",
    "to_char": "YOUNG BLONDE HOSTILE",
    "val": 3
  },
  {
    "season": 5,
    "episode": 3,
    "from_char": "PENNY",
    "to_char": "SALONGA",
    "val": 1
  },
  {
    "season": 5,
    "episode": 3,
    "from_char": "RICHARD",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 3,
    "from_char": "RICHARD",
    "to_char": "WIDMORE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 3,
    "from_char": "RICHARD",
    "to_char": "YOUNG BLONDE HOSTILE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 4,
    "from_char": "AARON",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 4,
    "from_char": "AARON",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 4,
    "from_char": "AARON",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 4,
    "from_char": "AUTOMATED VOICE OVER RADIO",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 4,
    "from_char": "AUTOMATED VOICE OVER RADIO",
    "to_char": "MONTAND",
    "val": 1
  },
  {
    "season": 5,
    "episode": 4,
    "from_char": "AUTOMATED VOICE OVER RADIO",
    "to_char": "ROBERT",
    "val": 1
  },
  {
    "season": 5,
    "episode": 4,
    "from_char": "AUTOMATED VOICE OVER RADIO",
    "to_char": "YOUNG WOMAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 4,
    "from_char": "BEN",
    "to_char": "DR. ARIZA",
    "val": 1
  },
  {
    "season": 5,
    "episode": 4,
    "from_char": "BEN",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 4,
    "from_char": "BEN",
    "to_char": "JACK",
    "val": 4
  },
  {
    "season": 5,
    "episode": 4,
    "from_char": "BEN",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 5,
    "episode": 4,
    "from_char": "BEN",
    "to_char": "NORTON",
    "val": 1
  },
  {
    "season": 5,
    "episode": 4,
    "from_char": "BEN",
    "to_char": "NURSE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 4,
    "from_char": "BEN",
    "to_char": "SAYID",
    "val": 4
  },
  {
    "season": 5,
    "episode": 4,
    "from_char": "BRENNAN",
    "to_char": "MONTAND",
    "val": 1
  },
  {
    "season": 5,
    "episode": 4,
    "from_char": "BRENNAN",
    "to_char": "ROBERT",
    "val": 1
  },
  {
    "season": 5,
    "episode": 4,
    "from_char": "BRENNAN",
    "to_char": "UNKNOWN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 4,
    "from_char": "BRENNAN",
    "to_char": "YOUNG WOMAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 4,
    "from_char": "CAROLE",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 5,
    "episode": 4,
    "from_char": "CHARLOTTE",
    "to_char": "CLAIRE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 4,
    "from_char": "CHARLOTTE",
    "to_char": "FARADAY",
    "val": 4
  },
  {
    "season": 5,
    "episode": 4,
    "from_char": "CHARLOTTE",
    "to_char": "JULIET",
    "val": 3
  },
  {
    "season": 5,
    "episode": 4,
    "from_char": "CHARLOTTE",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 4,
    "from_char": "CHARLOTTE",
    "to_char": "LOCKE",
    "val": 4
  },
  {
    "season": 5,
    "episode": 4,
    "from_char": "CHARLOTTE",
    "to_char": "MILES",
    "val": 4
  },
  {
    "season": 5,
    "episode": 4,
    "from_char": "CHARLOTTE",
    "to_char": "SAWYER",
    "val": 4
  },
  {
    "season": 5,
    "episode": 4,
    "from_char": "CLAIRE",
    "to_char": "FARADAY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 4,
    "from_char": "CLAIRE",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 5,
    "episode": 4,
    "from_char": "CLAIRE",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 4,
    "from_char": "CLAIRE",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 4,
    "from_char": "CLAIRE",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 5,
    "episode": 4,
    "from_char": "CLAIRE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 4,
    "from_char": "DR. ARIZA",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 4,
    "from_char": "DR. ARIZA",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 5,
    "episode": 4,
    "from_char": "DR. ARIZA",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 5,
    "episode": 4,
    "from_char": "FARADAY",
    "to_char": "JULIET",
    "val": 4
  },
  {
    "season": 5,
    "episode": 4,
    "from_char": "FARADAY",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 4,
    "from_char": "FARADAY",
    "to_char": "LOCKE",
    "val": 5
  },
  {
    "season": 5,
    "episode": 4,
    "from_char": "FARADAY",
    "to_char": "MILES",
    "val": 6
  },
  {
    "season": 5,
    "episode": 4,
    "from_char": "FARADAY",
    "to_char": "SAWYER",
    "val": 6
  },
  {
    "season": 5,
    "episode": 4,
    "from_char": "HURLEY",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 5,
    "episode": 4,
    "from_char": "HURLEY",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 5,
    "episode": 4,
    "from_char": "JACK",
    "to_char": "KATE",
    "val": 7
  },
  {
    "season": 5,
    "episode": 4,
    "from_char": "JACK",
    "to_char": "NURSE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 4,
    "from_char": "JACK",
    "to_char": "SAYID",
    "val": 3
  },
  {
    "season": 5,
    "episode": 4,
    "from_char": "JIN",
    "to_char": "MONTAND",
    "val": 1
  },
  {
    "season": 5,
    "episode": 4,
    "from_char": "JIN",
    "to_char": "ROBERT",
    "val": 1
  },
  {
    "season": 5,
    "episode": 4,
    "from_char": "JIN",
    "to_char": "YOUNG WOMAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 4,
    "from_char": "JULIET",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 4,
    "from_char": "JULIET",
    "to_char": "LOCKE",
    "val": 4
  },
  {
    "season": 5,
    "episode": 4,
    "from_char": "JULIET",
    "to_char": "MILES",
    "val": 5
  },
  {
    "season": 5,
    "episode": 4,
    "from_char": "JULIET",
    "to_char": "SAWYER",
    "val": 5
  },
  {
    "season": 5,
    "episode": 4,
    "from_char": "KATE",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 4,
    "from_char": "KATE",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 4,
    "from_char": "KATE",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 5,
    "episode": 4,
    "from_char": "KATE",
    "to_char": "NORTON",
    "val": 1
  },
  {
    "season": 5,
    "episode": 4,
    "from_char": "KATE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 4,
    "from_char": "KATE",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 5,
    "episode": 4,
    "from_char": "KATE",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 4,
    "from_char": "LOCKE",
    "to_char": "MILES",
    "val": 6
  },
  {
    "season": 5,
    "episode": 4,
    "from_char": "LOCKE",
    "to_char": "SAWYER",
    "val": 6
  },
  {
    "season": 5,
    "episode": 4,
    "from_char": "MAN",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 4,
    "from_char": "MILES",
    "to_char": "SAWYER",
    "val": 7
  },
  {
    "season": 5,
    "episode": 4,
    "from_char": "MONTAND",
    "to_char": "ROBERT",
    "val": 2
  },
  {
    "season": 5,
    "episode": 4,
    "from_char": "MONTAND",
    "to_char": "UNKNOWN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 4,
    "from_char": "MONTAND",
    "to_char": "YOUNG WOMAN",
    "val": 2
  },
  {
    "season": 5,
    "episode": 4,
    "from_char": "NORTON",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 5,
    "episode": 4,
    "from_char": "NURSE",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 5,
    "episode": 4,
    "from_char": "ROBERT",
    "to_char": "UNKNOWN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 4,
    "from_char": "ROBERT",
    "to_char": "YOUNG WOMAN",
    "val": 2
  },
  {
    "season": 5,
    "episode": 4,
    "from_char": "UNKNOWN",
    "to_char": "YOUNG WOMAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "BEN",
    "to_char": "DESMOND",
    "val": 1
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "BEN",
    "to_char": "ELOISE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "BEN",
    "to_char": "JACK",
    "val": 4
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "BEN",
    "to_char": "JI YEON",
    "val": 1
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "BEN",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "BEN",
    "to_char": "MAN'S VOICE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "BEN",
    "to_char": "MRS. PAIK",
    "val": 1
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "BEN",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "BEN",
    "to_char": "SUN",
    "val": 4
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "BRENNAN",
    "to_char": "DANIELLE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "BRENNAN",
    "to_char": "JIN",
    "val": 2
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "BRENNAN",
    "to_char": "MAN ON RECORDING",
    "val": 1
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "BRENNAN",
    "to_char": "MAN'S VOICE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "BRENNAN",
    "to_char": "MONTAND",
    "val": 2
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "BRENNAN",
    "to_char": "ROBERT",
    "val": 2
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "BRENNAN",
    "to_char": "ROUSSEAU",
    "val": 1
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "BRENNAN",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "BRENNAN",
    "to_char": "VARIOUS",
    "val": 1
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "CHARLOTTE",
    "to_char": "DANIEL",
    "val": 5
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "CHARLOTTE",
    "to_char": "JIN",
    "val": 2
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "CHARLOTTE",
    "to_char": "JULIET",
    "val": 2
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "CHARLOTTE",
    "to_char": "LOCKE",
    "val": 3
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "CHARLOTTE",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "CHARLOTTE",
    "to_char": "SAWYER",
    "val": 3
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "CHRISTIAN",
    "to_char": "CHRISTIAN SHEPHARD",
    "val": 1
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "CHRISTIAN",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "CHRISTIAN SHEPHARD",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "DANIEL",
    "to_char": "JIN",
    "val": 2
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "DANIEL",
    "to_char": "JULIET",
    "val": 2
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "DANIEL",
    "to_char": "LOCKE",
    "val": 3
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "DANIEL",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "DANIEL",
    "to_char": "SAWYER",
    "val": 3
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "DANIELLE",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "DANIELLE",
    "to_char": "MAN'S VOICE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "DANIELLE",
    "to_char": "MONTAND",
    "val": 1
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "DANIELLE",
    "to_char": "ROBERT",
    "val": 1
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "DANIELLE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "DANIELLE",
    "to_char": "VARIOUS",
    "val": 1
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "DESMOND",
    "to_char": "ELOISE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "DESMOND",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "DESMOND",
    "to_char": "MAN'S VOICE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "DESMOND",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "ELOISE",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "ELOISE",
    "to_char": "MAN'S VOICE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "ELOISE",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "JACK",
    "to_char": "JI YEON",
    "val": 1
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "JACK",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "JACK",
    "to_char": "MAN'S VOICE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "JACK",
    "to_char": "MRS. PAIK",
    "val": 1
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "JACK",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "JACK",
    "to_char": "SUN",
    "val": 4
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "JI YEON",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "JI YEON",
    "to_char": "MRS. PAIK",
    "val": 1
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "JI YEON",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "JIN",
    "to_char": "JULIET",
    "val": 2
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "JIN",
    "to_char": "LOCKE",
    "val": 3
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "JIN",
    "to_char": "MAN ON RECORDING",
    "val": 2
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "JIN",
    "to_char": "MAN'S VOICE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "JIN",
    "to_char": "MILES",
    "val": 2
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "JIN",
    "to_char": "MONTAND",
    "val": 3
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "JIN",
    "to_char": "ROBERT",
    "val": 3
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "JIN",
    "to_char": "ROUSSEAU",
    "val": 2
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "JIN",
    "to_char": "SAWYER",
    "val": 4
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "JIN",
    "to_char": "VARIOUS",
    "val": 1
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "JULIET",
    "to_char": "LOCKE",
    "val": 4
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "JULIET",
    "to_char": "MILES",
    "val": 2
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "JULIET",
    "to_char": "SAWYER",
    "val": 4
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "KATE",
    "to_char": "MRS. PAIK",
    "val": 1
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "KATE",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "KATE",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "LOCKE",
    "to_char": "MILES",
    "val": 3
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "LOCKE",
    "to_char": "SAWYER",
    "val": 5
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "MAN ON RECORDING",
    "to_char": "MONTAND",
    "val": 2
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "MAN ON RECORDING",
    "to_char": "ROBERT",
    "val": 2
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "MAN ON RECORDING",
    "to_char": "ROUSSEAU",
    "val": 2
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "MAN'S VOICE",
    "to_char": "MONTAND",
    "val": 1
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "MAN'S VOICE",
    "to_char": "ROBERT",
    "val": 1
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "MAN'S VOICE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "MAN'S VOICE",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "MAN'S VOICE",
    "to_char": "VARIOUS",
    "val": 1
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "MILES",
    "to_char": "SAWYER",
    "val": 3
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "MONTAND",
    "to_char": "ROBERT",
    "val": 3
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "MONTAND",
    "to_char": "ROUSSEAU",
    "val": 2
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "MONTAND",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "MONTAND",
    "to_char": "VARIOUS",
    "val": 1
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "MRS. PAIK",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "ROBERT",
    "to_char": "ROUSSEAU",
    "val": 2
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "ROBERT",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "ROBERT",
    "to_char": "VARIOUS",
    "val": 1
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "SAWYER",
    "to_char": "VARIOUS",
    "val": 1
  },
  {
    "season": 5,
    "episode": 5,
    "from_char": "SAYID",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 6,
    "from_char": "BEN",
    "to_char": "DESMOND",
    "val": 1
  },
  {
    "season": 5,
    "episode": 6,
    "from_char": "BEN",
    "to_char": "ELOISE",
    "val": 2
  },
  {
    "season": 5,
    "episode": 6,
    "from_char": "BEN",
    "to_char": "FLIGHT ATTENDANT",
    "val": 2
  },
  {
    "season": 5,
    "episode": 6,
    "from_char": "BEN",
    "to_char": "HURLEY",
    "val": 2
  },
  {
    "season": 5,
    "episode": 6,
    "from_char": "BEN",
    "to_char": "JACK",
    "val": 6
  },
  {
    "season": 5,
    "episode": 6,
    "from_char": "BEN",
    "to_char": "KATE",
    "val": 3
  },
  {
    "season": 5,
    "episode": 6,
    "from_char": "BEN",
    "to_char": "RADIO LYRICS",
    "val": 1
  },
  {
    "season": 5,
    "episode": 6,
    "from_char": "BEN",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 6,
    "from_char": "BEN",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 6,
    "from_char": "CAESAR",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 5,
    "episode": 6,
    "from_char": "CAESAR",
    "to_char": "NABIL",
    "val": 1
  },
  {
    "season": 5,
    "episode": 6,
    "from_char": "CAESAR",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 6,
    "from_char": "CAESAR",
    "to_char": "VOICE ON INTERCOM",
    "val": 1
  },
  {
    "season": 5,
    "episode": 6,
    "from_char": "CAESAR",
    "to_char": "WOMAN ON PA",
    "val": 1
  },
  {
    "season": 5,
    "episode": 6,
    "from_char": "CAESAR",
    "to_char": "WOMAN OVER PA",
    "val": 1
  },
  {
    "season": 5,
    "episode": 6,
    "from_char": "DESMOND",
    "to_char": "ELOISE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 6,
    "from_char": "DESMOND",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 5,
    "episode": 6,
    "from_char": "DESMOND",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 6,
    "from_char": "ELOISE",
    "to_char": "JACK",
    "val": 3
  },
  {
    "season": 5,
    "episode": 6,
    "from_char": "ELOISE",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 6,
    "from_char": "FLIGHT ATTENDANT",
    "to_char": "HURLEY",
    "val": 2
  },
  {
    "season": 5,
    "episode": 6,
    "from_char": "FLIGHT ATTENDANT",
    "to_char": "JACK",
    "val": 3
  },
  {
    "season": 5,
    "episode": 6,
    "from_char": "FLIGHT ATTENDANT",
    "to_char": "KATE",
    "val": 3
  },
  {
    "season": 5,
    "episode": 6,
    "from_char": "FLIGHT ATTENDANT",
    "to_char": "LAPIDUS",
    "val": 1
  },
  {
    "season": 5,
    "episode": 6,
    "from_char": "FLIGHT ATTENDANT",
    "to_char": "MAN OVER P.A.",
    "val": 1
  },
  {
    "season": 5,
    "episode": 6,
    "from_char": "FLIGHT ATTENDANT",
    "to_char": "RADIO LYRICS",
    "val": 1
  },
  {
    "season": 5,
    "episode": 6,
    "from_char": "FLIGHT ATTENDANT",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 6,
    "from_char": "HURLEY",
    "to_char": "JACK",
    "val": 3
  },
  {
    "season": 5,
    "episode": 6,
    "from_char": "HURLEY",
    "to_char": "KATE",
    "val": 3
  },
  {
    "season": 5,
    "episode": 6,
    "from_char": "HURLEY",
    "to_char": "RADIO LYRICS",
    "val": 1
  },
  {
    "season": 5,
    "episode": 6,
    "from_char": "HURLEY",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 6,
    "from_char": "JACK",
    "to_char": "JILL",
    "val": 1
  },
  {
    "season": 5,
    "episode": 6,
    "from_char": "JACK",
    "to_char": "KATE",
    "val": 6
  },
  {
    "season": 5,
    "episode": 6,
    "from_char": "JACK",
    "to_char": "LAPIDUS",
    "val": 1
  },
  {
    "season": 5,
    "episode": 6,
    "from_char": "JACK",
    "to_char": "MAGICIAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 6,
    "from_char": "JACK",
    "to_char": "MAN OVER P.A.",
    "val": 1
  },
  {
    "season": 5,
    "episode": 6,
    "from_char": "JACK",
    "to_char": "NABIL",
    "val": 1
  },
  {
    "season": 5,
    "episode": 6,
    "from_char": "JACK",
    "to_char": "NURSE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 6,
    "from_char": "JACK",
    "to_char": "RADIO LYRICS",
    "val": 1
  },
  {
    "season": 5,
    "episode": 6,
    "from_char": "JACK",
    "to_char": "RAY",
    "val": 2
  },
  {
    "season": 5,
    "episode": 6,
    "from_char": "JACK",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 5,
    "episode": 6,
    "from_char": "JACK",
    "to_char": "VOICE ON INTERCOM",
    "val": 1
  },
  {
    "season": 5,
    "episode": 6,
    "from_char": "JACK",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 6,
    "from_char": "JACK",
    "to_char": "WOMAN ON PA",
    "val": 1
  },
  {
    "season": 5,
    "episode": 6,
    "from_char": "JACK",
    "to_char": "WOMAN OVER PA",
    "val": 1
  },
  {
    "season": 5,
    "episode": 6,
    "from_char": "KATE",
    "to_char": "LAPIDUS",
    "val": 1
  },
  {
    "season": 5,
    "episode": 6,
    "from_char": "KATE",
    "to_char": "MAN OVER P.A.",
    "val": 1
  },
  {
    "season": 5,
    "episode": 6,
    "from_char": "KATE",
    "to_char": "RADIO LYRICS",
    "val": 1
  },
  {
    "season": 5,
    "episode": 6,
    "from_char": "KATE",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 6,
    "from_char": "LAPIDUS",
    "to_char": "MAN OVER P.A.",
    "val": 1
  },
  {
    "season": 5,
    "episode": 6,
    "from_char": "MAGICIAN",
    "to_char": "NURSE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 6,
    "from_char": "MAGICIAN",
    "to_char": "RAY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 6,
    "from_char": "NABIL",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 6,
    "from_char": "NABIL",
    "to_char": "VOICE ON INTERCOM",
    "val": 1
  },
  {
    "season": 5,
    "episode": 6,
    "from_char": "NABIL",
    "to_char": "WOMAN ON PA",
    "val": 1
  },
  {
    "season": 5,
    "episode": 6,
    "from_char": "NABIL",
    "to_char": "WOMAN OVER PA",
    "val": 1
  },
  {
    "season": 5,
    "episode": 6,
    "from_char": "NURSE",
    "to_char": "RAY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 6,
    "from_char": "SUN",
    "to_char": "VOICE ON INTERCOM",
    "val": 1
  },
  {
    "season": 5,
    "episode": 6,
    "from_char": "SUN",
    "to_char": "WOMAN ON PA",
    "val": 1
  },
  {
    "season": 5,
    "episode": 6,
    "from_char": "SUN",
    "to_char": "WOMAN OVER PA",
    "val": 1
  },
  {
    "season": 5,
    "episode": 6,
    "from_char": "VOICE ON INTERCOM",
    "to_char": "WOMAN ON PA",
    "val": 1
  },
  {
    "season": 5,
    "episode": 6,
    "from_char": "VOICE ON INTERCOM",
    "to_char": "WOMAN OVER PA",
    "val": 1
  },
  {
    "season": 5,
    "episode": 6,
    "from_char": "WOMAN ON PA",
    "to_char": "WOMAN OVER PA",
    "val": 1
  },
  {
    "season": 5,
    "episode": 7,
    "from_char": "ABADDON",
    "to_char": "BOY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 7,
    "from_char": "ABADDON",
    "to_char": "LOCKE",
    "val": 6
  },
  {
    "season": 5,
    "episode": 7,
    "from_char": "ABADDON",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 5,
    "episode": 7,
    "from_char": "ABADDON",
    "to_char": "WIDMORE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 7,
    "from_char": "AYESHA",
    "to_char": "DOCTOR",
    "val": 1
  },
  {
    "season": 5,
    "episode": 7,
    "from_char": "AYESHA",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 7,
    "from_char": "AYESHA",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 7,
    "from_char": "AYESHA",
    "to_char": "NURSE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 7,
    "from_char": "BEN",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 7,
    "from_char": "BEN",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 7,
    "from_char": "BOY",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 7,
    "from_char": "BOY",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 5,
    "episode": 7,
    "from_char": "CAESAR",
    "to_char": "ILANA",
    "val": 2
  },
  {
    "season": 5,
    "episode": 7,
    "from_char": "CAESAR",
    "to_char": "LOCKE",
    "val": 3
  },
  {
    "season": 5,
    "episode": 7,
    "from_char": "CAESAR",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 7,
    "from_char": "CHRISTIAN",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 7,
    "from_char": "DOCTOR",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 7,
    "from_char": "DOCTOR",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 7,
    "from_char": "DOCTOR",
    "to_char": "NURSE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 7,
    "from_char": "HURLEY",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 7,
    "from_char": "HURLEY",
    "to_char": "MALE NURSE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 7,
    "from_char": "HURLEY",
    "to_char": "SUSIE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 7,
    "from_char": "ILANA",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 7,
    "from_char": "JACK",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 7,
    "from_char": "KATE",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 7,
    "from_char": "LOCKE",
    "to_char": "MALE NURSE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 7,
    "from_char": "LOCKE",
    "to_char": "MAN",
    "val": 4
  },
  {
    "season": 5,
    "episode": 7,
    "from_char": "LOCKE",
    "to_char": "MAN #1",
    "val": 1
  },
  {
    "season": 5,
    "episode": 7,
    "from_char": "LOCKE",
    "to_char": "MAN #2",
    "val": 1
  },
  {
    "season": 5,
    "episode": 7,
    "from_char": "LOCKE",
    "to_char": "MAN #3",
    "val": 1
  },
  {
    "season": 5,
    "episode": 7,
    "from_char": "LOCKE",
    "to_char": "NURSE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 7,
    "from_char": "LOCKE",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 5,
    "episode": 7,
    "from_char": "LOCKE",
    "to_char": "SUSIE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 7,
    "from_char": "LOCKE",
    "to_char": "WALT",
    "val": 1
  },
  {
    "season": 5,
    "episode": 7,
    "from_char": "LOCKE",
    "to_char": "WIDMORE",
    "val": 2
  },
  {
    "season": 5,
    "episode": 7,
    "from_char": "MALE NURSE",
    "to_char": "SUSIE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 7,
    "from_char": "MAN",
    "to_char": "NURSE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 7,
    "from_char": "MAN",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 5,
    "episode": 7,
    "from_char": "MAN",
    "to_char": "WIDMORE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 7,
    "from_char": "MAN",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 7,
    "from_char": "MAN #1",
    "to_char": "MAN #2",
    "val": 1
  },
  {
    "season": 5,
    "episode": 7,
    "from_char": "MAN #1",
    "to_char": "MAN #3",
    "val": 1
  },
  {
    "season": 5,
    "episode": 7,
    "from_char": "MAN #2",
    "to_char": "MAN #3",
    "val": 1
  },
  {
    "season": 5,
    "episode": 7,
    "from_char": "SAYID",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 8,
    "from_char": "AMY",
    "to_char": "BEARD",
    "val": 1
  },
  {
    "season": 5,
    "episode": 8,
    "from_char": "AMY",
    "to_char": "DOCTOR",
    "val": 2
  },
  {
    "season": 5,
    "episode": 8,
    "from_char": "AMY",
    "to_char": "FARADAY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 8,
    "from_char": "AMY",
    "to_char": "HORACE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 8,
    "from_char": "AMY",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 8,
    "from_char": "AMY",
    "to_char": "JULET",
    "val": 1
  },
  {
    "season": 5,
    "episode": 8,
    "from_char": "AMY",
    "to_char": "JULIET",
    "val": 4
  },
  {
    "season": 5,
    "episode": 8,
    "from_char": "AMY",
    "to_char": "MILES",
    "val": 2
  },
  {
    "season": 5,
    "episode": 8,
    "from_char": "AMY",
    "to_char": "SAWYER",
    "val": 7
  },
  {
    "season": 5,
    "episode": 8,
    "from_char": "AMY",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 8,
    "from_char": "BEARD",
    "to_char": "FARADAY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 8,
    "from_char": "BEARD",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 5,
    "episode": 8,
    "from_char": "BEARD",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 5,
    "episode": 8,
    "from_char": "BEARD",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 8,
    "from_char": "BEARD",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 8,
    "from_char": "DOCTOR",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 5,
    "episode": 8,
    "from_char": "DOCTOR",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 5,
    "episode": 8,
    "from_char": "FARADAY",
    "to_char": "HORACE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 8,
    "from_char": "FARADAY",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 8,
    "from_char": "FARADAY",
    "to_char": "JULIET",
    "val": 3
  },
  {
    "season": 5,
    "episode": 8,
    "from_char": "FARADAY",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 8,
    "from_char": "FARADAY",
    "to_char": "MILES",
    "val": 3
  },
  {
    "season": 5,
    "episode": 8,
    "from_char": "FARADAY",
    "to_char": "PHIL",
    "val": 1
  },
  {
    "season": 5,
    "episode": 8,
    "from_char": "FARADAY",
    "to_char": "RED-HEADED GIRL",
    "val": 1
  },
  {
    "season": 5,
    "episode": 8,
    "from_char": "FARADAY",
    "to_char": "SAWYER",
    "val": 3
  },
  {
    "season": 5,
    "episode": 8,
    "from_char": "FARADAY",
    "to_char": "WOMAN",
    "val": 2
  },
  {
    "season": 5,
    "episode": 8,
    "from_char": "HORACE",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 8,
    "from_char": "HORACE",
    "to_char": "JULIET",
    "val": 2
  },
  {
    "season": 5,
    "episode": 8,
    "from_char": "HORACE",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 8,
    "from_char": "HORACE",
    "to_char": "MILES",
    "val": 2
  },
  {
    "season": 5,
    "episode": 8,
    "from_char": "HORACE",
    "to_char": "PHIL",
    "val": 2
  },
  {
    "season": 5,
    "episode": 8,
    "from_char": "HORACE",
    "to_char": "RED-HEADED GIRL",
    "val": 1
  },
  {
    "season": 5,
    "episode": 8,
    "from_char": "HORACE",
    "to_char": "RICHARD",
    "val": 1
  },
  {
    "season": 5,
    "episode": 8,
    "from_char": "HORACE",
    "to_char": "SAWYER",
    "val": 5
  },
  {
    "season": 5,
    "episode": 8,
    "from_char": "HORACE",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 8,
    "from_char": "JERRY",
    "to_char": "LAFLEUR",
    "val": 1
  },
  {
    "season": 5,
    "episode": 8,
    "from_char": "JERRY",
    "to_char": "PHIL",
    "val": 2
  },
  {
    "season": 5,
    "episode": 8,
    "from_char": "JERRY",
    "to_char": "ROSIE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 8,
    "from_char": "JERRY",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 8,
    "from_char": "JIN",
    "to_char": "JULIET",
    "val": 5
  },
  {
    "season": 5,
    "episode": 8,
    "from_char": "JIN",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 8,
    "from_char": "JIN",
    "to_char": "MILES",
    "val": 3
  },
  {
    "season": 5,
    "episode": 8,
    "from_char": "JIN",
    "to_char": "PHIL",
    "val": 1
  },
  {
    "season": 5,
    "episode": 8,
    "from_char": "JIN",
    "to_char": "RED-HEADED GIRL",
    "val": 1
  },
  {
    "season": 5,
    "episode": 8,
    "from_char": "JIN",
    "to_char": "SAWYER",
    "val": 5
  },
  {
    "season": 5,
    "episode": 8,
    "from_char": "JIN",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 8,
    "from_char": "JULET",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 5,
    "episode": 8,
    "from_char": "JULET",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 5,
    "episode": 8,
    "from_char": "JULET",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 8,
    "from_char": "JULIET",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 8,
    "from_char": "JULIET",
    "to_char": "MILES",
    "val": 7
  },
  {
    "season": 5,
    "episode": 8,
    "from_char": "JULIET",
    "to_char": "PHIL",
    "val": 2
  },
  {
    "season": 5,
    "episode": 8,
    "from_char": "JULIET",
    "to_char": "RED-HEADED GIRL",
    "val": 1
  },
  {
    "season": 5,
    "episode": 8,
    "from_char": "JULIET",
    "to_char": "RICHARD",
    "val": 1
  },
  {
    "season": 5,
    "episode": 8,
    "from_char": "JULIET",
    "to_char": "SAWYER",
    "val": 14
  },
  {
    "season": 5,
    "episode": 8,
    "from_char": "JULIET",
    "to_char": "WOMAN",
    "val": 2
  },
  {
    "season": 5,
    "episode": 8,
    "from_char": "LAFLEUR",
    "to_char": "PHIL",
    "val": 1
  },
  {
    "season": 5,
    "episode": 8,
    "from_char": "LAFLEUR",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 8,
    "from_char": "MAN",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 5,
    "episode": 8,
    "from_char": "MAN",
    "to_char": "PHIL",
    "val": 1
  },
  {
    "season": 5,
    "episode": 8,
    "from_char": "MAN",
    "to_char": "RED-HEADED GIRL",
    "val": 1
  },
  {
    "season": 5,
    "episode": 8,
    "from_char": "MAN",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 8,
    "from_char": "MAN",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 8,
    "from_char": "MILES",
    "to_char": "PHIL",
    "val": 2
  },
  {
    "season": 5,
    "episode": 8,
    "from_char": "MILES",
    "to_char": "RED-HEADED GIRL",
    "val": 1
  },
  {
    "season": 5,
    "episode": 8,
    "from_char": "MILES",
    "to_char": "RICHARD",
    "val": 1
  },
  {
    "season": 5,
    "episode": 8,
    "from_char": "MILES",
    "to_char": "SAWYER",
    "val": 9
  },
  {
    "season": 5,
    "episode": 8,
    "from_char": "MILES",
    "to_char": "WOMAN",
    "val": 2
  },
  {
    "season": 5,
    "episode": 8,
    "from_char": "PHIL",
    "to_char": "RED-HEADED GIRL",
    "val": 1
  },
  {
    "season": 5,
    "episode": 8,
    "from_char": "PHIL",
    "to_char": "RICHARD",
    "val": 1
  },
  {
    "season": 5,
    "episode": 8,
    "from_char": "PHIL",
    "to_char": "ROSIE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 8,
    "from_char": "PHIL",
    "to_char": "SAWYER",
    "val": 3
  },
  {
    "season": 5,
    "episode": 8,
    "from_char": "PHIL",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 8,
    "from_char": "RED-HEADED GIRL",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 8,
    "from_char": "RED-HEADED GIRL",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 8,
    "from_char": "RICHARD",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 8,
    "from_char": "SAWYER",
    "to_char": "WOMAN",
    "val": 2
  },
  {
    "season": 5,
    "episode": 9,
    "from_char": "ALL",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 9,
    "from_char": "ALL",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 9,
    "from_char": "ALL",
    "to_char": "PHIL",
    "val": 1
  },
  {
    "season": 5,
    "episode": 9,
    "from_char": "ALL",
    "to_char": "RADZINSKY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 9,
    "from_char": "ALL",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 9,
    "from_char": "AMY",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 5,
    "episode": 9,
    "from_char": "AUTOMATED FEMALE VOICE",
    "to_char": "AUTOMATED MALE VOICE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 9,
    "from_char": "AUTOMATED FEMALE VOICE",
    "to_char": "CO-PILOT",
    "val": 1
  },
  {
    "season": 5,
    "episode": 9,
    "from_char": "AUTOMATED FEMALE VOICE",
    "to_char": "FEMALE FLIGHT ATTENDANT",
    "val": 1
  },
  {
    "season": 5,
    "episode": 9,
    "from_char": "AUTOMATED FEMALE VOICE",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 9,
    "from_char": "AUTOMATED FEMALE VOICE",
    "to_char": "LAPIDUS",
    "val": 1
  },
  {
    "season": 5,
    "episode": 9,
    "from_char": "AUTOMATED MALE VOICE",
    "to_char": "CO-PILOT",
    "val": 1
  },
  {
    "season": 5,
    "episode": 9,
    "from_char": "AUTOMATED MALE VOICE",
    "to_char": "FEMALE FLIGHT ATTENDANT",
    "val": 1
  },
  {
    "season": 5,
    "episode": 9,
    "from_char": "AUTOMATED MALE VOICE",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 9,
    "from_char": "AUTOMATED MALE VOICE",
    "to_char": "LAPIDUS",
    "val": 1
  },
  {
    "season": 5,
    "episode": 9,
    "from_char": "BEN",
    "to_char": "CAESAR",
    "val": 1
  },
  {
    "season": 5,
    "episode": 9,
    "from_char": "BEN",
    "to_char": "ILANA",
    "val": 1
  },
  {
    "season": 5,
    "episode": 9,
    "from_char": "BEN",
    "to_char": "LAPIDUS",
    "val": 2
  },
  {
    "season": 5,
    "episode": 9,
    "from_char": "BEN",
    "to_char": "SUN",
    "val": 3
  },
  {
    "season": 5,
    "episode": 9,
    "from_char": "BOY",
    "to_char": "PHIL",
    "val": 1
  },
  {
    "season": 5,
    "episode": 9,
    "from_char": "BOY",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 5,
    "episode": 9,
    "from_char": "CAESAR",
    "to_char": "ILANA",
    "val": 2
  },
  {
    "season": 5,
    "episode": 9,
    "from_char": "CAESAR",
    "to_char": "LAPIDUS",
    "val": 2
  },
  {
    "season": 5,
    "episode": 9,
    "from_char": "CAESAR",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 5,
    "episode": 9,
    "from_char": "CHRISTIAN",
    "to_char": "LAPIDUS",
    "val": 1
  },
  {
    "season": 5,
    "episode": 9,
    "from_char": "CHRISTIAN",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 9,
    "from_char": "CHRISTIAN",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 5,
    "episode": 9,
    "from_char": "CO-PILOT",
    "to_char": "FEMALE FLIGHT ATTENDANT",
    "val": 1
  },
  {
    "season": 5,
    "episode": 9,
    "from_char": "CO-PILOT",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 9,
    "from_char": "CO-PILOT",
    "to_char": "LAPIDUS",
    "val": 1
  },
  {
    "season": 5,
    "episode": 9,
    "from_char": "DR. CHANG",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 5,
    "episode": 9,
    "from_char": "DR. CHANG",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 5,
    "episode": 9,
    "from_char": "DR. CHANG",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 9,
    "from_char": "DR. CHANG",
    "to_char": "PHIL",
    "val": 1
  },
  {
    "season": 5,
    "episode": 9,
    "from_char": "FEMALE FLIGHT ATTENDANT",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 9,
    "from_char": "FEMALE FLIGHT ATTENDANT",
    "to_char": "LAPIDUS",
    "val": 1
  },
  {
    "season": 5,
    "episode": 9,
    "from_char": "HURLEY",
    "to_char": "JACK",
    "val": 5
  },
  {
    "season": 5,
    "episode": 9,
    "from_char": "HURLEY",
    "to_char": "JIN",
    "val": 3
  },
  {
    "season": 5,
    "episode": 9,
    "from_char": "HURLEY",
    "to_char": "KATE",
    "val": 3
  },
  {
    "season": 5,
    "episode": 9,
    "from_char": "HURLEY",
    "to_char": "LAPIDUS",
    "val": 1
  },
  {
    "season": 5,
    "episode": 9,
    "from_char": "HURLEY",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 9,
    "from_char": "HURLEY",
    "to_char": "MILES",
    "val": 2
  },
  {
    "season": 5,
    "episode": 9,
    "from_char": "HURLEY",
    "to_char": "PHIL",
    "val": 1
  },
  {
    "season": 5,
    "episode": 9,
    "from_char": "HURLEY",
    "to_char": "RADZINSKY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 9,
    "from_char": "HURLEY",
    "to_char": "SAWYER",
    "val": 6
  },
  {
    "season": 5,
    "episode": 9,
    "from_char": "HURLEY",
    "to_char": "WOMAN ON PA",
    "val": 1
  },
  {
    "season": 5,
    "episode": 9,
    "from_char": "ILANA",
    "to_char": "LAPIDUS",
    "val": 2
  },
  {
    "season": 5,
    "episode": 9,
    "from_char": "ILANA",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 5,
    "episode": 9,
    "from_char": "JACK",
    "to_char": "JIN",
    "val": 3
  },
  {
    "season": 5,
    "episode": 9,
    "from_char": "JACK",
    "to_char": "JULIET",
    "val": 2
  },
  {
    "season": 5,
    "episode": 9,
    "from_char": "JACK",
    "to_char": "KATE",
    "val": 4
  },
  {
    "season": 5,
    "episode": 9,
    "from_char": "JACK",
    "to_char": "MILES",
    "val": 2
  },
  {
    "season": 5,
    "episode": 9,
    "from_char": "JACK",
    "to_char": "PHIL",
    "val": 2
  },
  {
    "season": 5,
    "episode": 9,
    "from_char": "JACK",
    "to_char": "SAWYER",
    "val": 6
  },
  {
    "season": 5,
    "episode": 9,
    "from_char": "JACK",
    "to_char": "WOMAN ON PA",
    "val": 1
  },
  {
    "season": 5,
    "episode": 9,
    "from_char": "JIN",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 5,
    "episode": 9,
    "from_char": "JIN",
    "to_char": "MILES",
    "val": 2
  },
  {
    "season": 5,
    "episode": 9,
    "from_char": "JIN",
    "to_char": "RADZINSKY",
    "val": 3
  },
  {
    "season": 5,
    "episode": 9,
    "from_char": "JIN",
    "to_char": "SAWYER",
    "val": 4
  },
  {
    "season": 5,
    "episode": 9,
    "from_char": "JIN",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 5,
    "episode": 9,
    "from_char": "JIN",
    "to_char": "WOMAN ON PA",
    "val": 1
  },
  {
    "season": 5,
    "episode": 9,
    "from_char": "JULIET",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 9,
    "from_char": "JULIET",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 5,
    "episode": 9,
    "from_char": "JULIET",
    "to_char": "PHIL",
    "val": 2
  },
  {
    "season": 5,
    "episode": 9,
    "from_char": "JULIET",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 5,
    "episode": 9,
    "from_char": "KATE",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 5,
    "episode": 9,
    "from_char": "KATE",
    "to_char": "PHIL",
    "val": 1
  },
  {
    "season": 5,
    "episode": 9,
    "from_char": "KATE",
    "to_char": "SAWYER",
    "val": 3
  },
  {
    "season": 5,
    "episode": 9,
    "from_char": "LAPIDUS",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 9,
    "from_char": "LAPIDUS",
    "to_char": "SUN",
    "val": 4
  },
  {
    "season": 5,
    "episode": 9,
    "from_char": "MAN",
    "to_char": "PHIL",
    "val": 1
  },
  {
    "season": 5,
    "episode": 9,
    "from_char": "MAN",
    "to_char": "RADZINSKY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 9,
    "from_char": "MAN",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 9,
    "from_char": "MAN",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 9,
    "from_char": "MILES",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 5,
    "episode": 9,
    "from_char": "MILES",
    "to_char": "WOMAN ON PA",
    "val": 1
  },
  {
    "season": 5,
    "episode": 9,
    "from_char": "PHIL",
    "to_char": "RADZINSKY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 9,
    "from_char": "PHIL",
    "to_char": "SAWYER",
    "val": 3
  },
  {
    "season": 5,
    "episode": 9,
    "from_char": "PHIL",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 5,
    "episode": 9,
    "from_char": "RADZINSKY",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 5,
    "episode": 9,
    "from_char": "RADZINSKY",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 5,
    "episode": 9,
    "from_char": "SAWYER",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 5,
    "episode": 9,
    "from_char": "SAWYER",
    "to_char": "WOMAN ON PA",
    "val": 1
  },
  {
    "season": 5,
    "episode": 10,
    "from_char": "AMY",
    "to_char": "HOACE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 10,
    "from_char": "AMY",
    "to_char": "HORACE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 10,
    "from_char": "AMY",
    "to_char": "RADZINSKY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 10,
    "from_char": "AMY",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 10,
    "from_char": "BARTENDER",
    "to_char": "ILANA",
    "val": 1
  },
  {
    "season": 5,
    "episode": 10,
    "from_char": "BARTENDER",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 5,
    "episode": 10,
    "from_char": "BARTENDER",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 10,
    "from_char": "BEN",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 10,
    "from_char": "BEN",
    "to_char": "ILANA",
    "val": 1
  },
  {
    "season": 5,
    "episode": 10,
    "from_char": "BEN",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 5,
    "episode": 10,
    "from_char": "BEN",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 10,
    "from_char": "BEN",
    "to_char": "SAYID",
    "val": 4
  },
  {
    "season": 5,
    "episode": 10,
    "from_char": "BEN",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 10,
    "from_char": "BOY",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 10,
    "from_char": "HOACE",
    "to_char": "HORACE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 10,
    "from_char": "HOACE",
    "to_char": "RADZINSKY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 10,
    "from_char": "HOACE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 10,
    "from_char": "HORACE",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 5,
    "episode": 10,
    "from_char": "HORACE",
    "to_char": "OLDHAM",
    "val": 2
  },
  {
    "season": 5,
    "episode": 10,
    "from_char": "HORACE",
    "to_char": "PHIL",
    "val": 1
  },
  {
    "season": 5,
    "episode": 10,
    "from_char": "HORACE",
    "to_char": "RADZINSKY",
    "val": 3
  },
  {
    "season": 5,
    "episode": 10,
    "from_char": "HORACE",
    "to_char": "SAWYER",
    "val": 3
  },
  {
    "season": 5,
    "episode": 10,
    "from_char": "HORACE",
    "to_char": "SAYID",
    "val": 3
  },
  {
    "season": 5,
    "episode": 10,
    "from_char": "HURLEY",
    "to_char": "ILANA",
    "val": 1
  },
  {
    "season": 5,
    "episode": 10,
    "from_char": "HURLEY",
    "to_char": "JACK",
    "val": 2
  },
  {
    "season": 5,
    "episode": 10,
    "from_char": "HURLEY",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 10,
    "from_char": "HURLEY",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 5,
    "episode": 10,
    "from_char": "ILANA",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 5,
    "episode": 10,
    "from_char": "ILANA",
    "to_char": "SAYID",
    "val": 4
  },
  {
    "season": 5,
    "episode": 10,
    "from_char": "ILANA",
    "to_char": "TANNOY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 10,
    "from_char": "ILANA",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 10,
    "from_char": "JACK",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 5,
    "episode": 10,
    "from_char": "JACK",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 10,
    "from_char": "JACK",
    "to_char": "PHIL",
    "val": 1
  },
  {
    "season": 5,
    "episode": 10,
    "from_char": "JACK",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 10,
    "from_char": "JACK",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 5,
    "episode": 10,
    "from_char": "JACK",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 10,
    "from_char": "JACK",
    "to_char": "YOUNG BEN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 10,
    "from_char": "JIN",
    "to_char": "PHIL",
    "val": 1
  },
  {
    "season": 5,
    "episode": 10,
    "from_char": "JIN",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 5,
    "episode": 10,
    "from_char": "JIN",
    "to_char": "YOUNG BEN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 10,
    "from_char": "JULIET",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 10,
    "from_char": "JULIET",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 10,
    "from_char": "KATE",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 10,
    "from_char": "KATE",
    "to_char": "PHIL",
    "val": 1
  },
  {
    "season": 5,
    "episode": 10,
    "from_char": "KATE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 10,
    "from_char": "KATE",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 5,
    "episode": 10,
    "from_char": "KATE",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 10,
    "from_char": "KATE",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 10,
    "from_char": "KATE",
    "to_char": "YOUNG BEN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 10,
    "from_char": "MAN",
    "to_char": "PHIL",
    "val": 1
  },
  {
    "season": 5,
    "episode": 10,
    "from_char": "MAN",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 10,
    "from_char": "MAN",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 5,
    "episode": 10,
    "from_char": "MAN",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 10,
    "from_char": "MAN",
    "to_char": "YOUNG BEN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 10,
    "from_char": "OLDHAM",
    "to_char": "PHIL",
    "val": 1
  },
  {
    "season": 5,
    "episode": 10,
    "from_char": "OLDHAM",
    "to_char": "RADZINSKY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 10,
    "from_char": "OLDHAM",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 10,
    "from_char": "OLDHAM",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 5,
    "episode": 10,
    "from_char": "PHIL",
    "to_char": "SAWYER",
    "val": 3
  },
  {
    "season": 5,
    "episode": 10,
    "from_char": "PHIL",
    "to_char": "SAYID",
    "val": 5
  },
  {
    "season": 5,
    "episode": 10,
    "from_char": "PHIL",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 10,
    "from_char": "PHIL",
    "to_char": "YOUNG BEN",
    "val": 3
  },
  {
    "season": 5,
    "episode": 10,
    "from_char": "RADZINSKY",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 10,
    "from_char": "RADZINSKY",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 5,
    "episode": 10,
    "from_char": "ROGER",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 5,
    "episode": 10,
    "from_char": "ROGER",
    "to_char": "YOUNG BEN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 10,
    "from_char": "SAWYER",
    "to_char": "SAYID",
    "val": 4
  },
  {
    "season": 5,
    "episode": 10,
    "from_char": "SAWYER",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 10,
    "from_char": "SAWYER",
    "to_char": "YOUNG BEN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 10,
    "from_char": "SAYID",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 10,
    "from_char": "SAYID",
    "to_char": "TANNOY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 10,
    "from_char": "SAYID",
    "to_char": "WOMAN",
    "val": 2
  },
  {
    "season": 5,
    "episode": 10,
    "from_char": "SAYID",
    "to_char": "YOUNG BEN",
    "val": 4
  },
  {
    "season": 5,
    "episode": 10,
    "from_char": "WOMAN",
    "to_char": "YOUNG BEN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 11,
    "from_char": "AARON",
    "to_char": "EMPLOYEE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 11,
    "from_char": "AARON",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 11,
    "from_char": "AARON",
    "to_char": "MANAGER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 11,
    "from_char": "AARON",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 11,
    "from_char": "BAXTER",
    "to_char": "HORACE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 11,
    "from_char": "BAXTER",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 11,
    "from_char": "BAXTER",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 5,
    "episode": 11,
    "from_char": "BAXTER",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 11,
    "from_char": "BAXTER",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 11,
    "from_char": "BAXTER",
    "to_char": "ROGER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 11,
    "from_char": "BEN",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 5,
    "episode": 11,
    "from_char": "BEN",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 11,
    "from_char": "BEN",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 5,
    "episode": 11,
    "from_char": "BEN",
    "to_char": "PHIL",
    "val": 1
  },
  {
    "season": 5,
    "episode": 11,
    "from_char": "BEN",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 11,
    "from_char": "BEN",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 11,
    "from_char": "CAROLE",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 11,
    "from_char": "CASSIDY",
    "to_char": "KATE",
    "val": 3
  },
  {
    "season": 5,
    "episode": 11,
    "from_char": "CLEMENTINE",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 11,
    "from_char": "EMPLOYEE",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 11,
    "from_char": "EMPLOYEE",
    "to_char": "MANAGER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 11,
    "from_char": "EMPLOYEE",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 11,
    "from_char": "HORACE",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 11,
    "from_char": "HORACE",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 5,
    "episode": 11,
    "from_char": "HORACE",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 5,
    "episode": 11,
    "from_char": "HORACE",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 11,
    "from_char": "HORACE",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 5,
    "episode": 11,
    "from_char": "HORACE",
    "to_char": "ROGER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 11,
    "from_char": "HORACE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 11,
    "from_char": "HURLEY",
    "to_char": "JACK",
    "val": 3
  },
  {
    "season": 5,
    "episode": 11,
    "from_char": "HURLEY",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 5,
    "episode": 11,
    "from_char": "HURLEY",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 5,
    "episode": 11,
    "from_char": "HURLEY",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 11,
    "from_char": "HURLEY",
    "to_char": "MILES",
    "val": 3
  },
  {
    "season": 5,
    "episode": 11,
    "from_char": "HURLEY",
    "to_char": "ROGER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 11,
    "from_char": "HURLEY",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 11,
    "from_char": "JACK",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 5,
    "episode": 11,
    "from_char": "JACK",
    "to_char": "KATE",
    "val": 4
  },
  {
    "season": 5,
    "episode": 11,
    "from_char": "JACK",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 11,
    "from_char": "JACK",
    "to_char": "MILES",
    "val": 3
  },
  {
    "season": 5,
    "episode": 11,
    "from_char": "JACK",
    "to_char": "ROGER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 11,
    "from_char": "JACK",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 11,
    "from_char": "JACK",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 11,
    "from_char": "JIN",
    "to_char": "PHIL",
    "val": 1
  },
  {
    "season": 5,
    "episode": 11,
    "from_char": "JULIET",
    "to_char": "KATE",
    "val": 3
  },
  {
    "season": 5,
    "episode": 11,
    "from_char": "JULIET",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 5,
    "episode": 11,
    "from_char": "JULIET",
    "to_char": "NURSE",
    "val": 2
  },
  {
    "season": 5,
    "episode": 11,
    "from_char": "JULIET",
    "to_char": "ROGER",
    "val": 2
  },
  {
    "season": 5,
    "episode": 11,
    "from_char": "JULIET",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 11,
    "from_char": "KATE",
    "to_char": "MAN",
    "val": 3
  },
  {
    "season": 5,
    "episode": 11,
    "from_char": "KATE",
    "to_char": "MANAGER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 11,
    "from_char": "KATE",
    "to_char": "MILES",
    "val": 3
  },
  {
    "season": 5,
    "episode": 11,
    "from_char": "KATE",
    "to_char": "RICHARD",
    "val": 1
  },
  {
    "season": 5,
    "episode": 11,
    "from_char": "KATE",
    "to_char": "ROGER",
    "val": 3
  },
  {
    "season": 5,
    "episode": 11,
    "from_char": "KATE",
    "to_char": "SAWYER",
    "val": 6
  },
  {
    "season": 5,
    "episode": 11,
    "from_char": "KATE",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 11,
    "from_char": "KATE",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 11,
    "from_char": "MAN",
    "to_char": "RICHARD",
    "val": 1
  },
  {
    "season": 5,
    "episode": 11,
    "from_char": "MAN",
    "to_char": "ROGER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 11,
    "from_char": "MAN",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 5,
    "episode": 11,
    "from_char": "MANAGER",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 11,
    "from_char": "MILES",
    "to_char": "ROGER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 11,
    "from_char": "MILES",
    "to_char": "SAWYER",
    "val": 3
  },
  {
    "season": 5,
    "episode": 11,
    "from_char": "NURSE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 11,
    "from_char": "RICHARD",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 11,
    "from_char": "ROGER",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 12,
    "from_char": "ALEX",
    "to_char": "ALEX'S VOICE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 12,
    "from_char": "ALEX",
    "to_char": "BEN",
    "val": 2
  },
  {
    "season": 5,
    "episode": 12,
    "from_char": "ALEX",
    "to_char": "BEN'S VOICE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 12,
    "from_char": "ALEX",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 12,
    "from_char": "ALEX",
    "to_char": "RICHARD",
    "val": 1
  },
  {
    "season": 5,
    "episode": 12,
    "from_char": "ALEX",
    "to_char": "WIDMORE'S VOICE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 12,
    "from_char": "ALEX'S VOICE",
    "to_char": "BEN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 12,
    "from_char": "ALEX'S VOICE",
    "to_char": "BEN'S VOICE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 12,
    "from_char": "ALEX'S VOICE",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 12,
    "from_char": "ALEX'S VOICE",
    "to_char": "WIDMORE'S VOICE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 12,
    "from_char": "BEN",
    "to_char": "BEN'S VOICE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 12,
    "from_char": "BEN",
    "to_char": "BRAM",
    "val": 1
  },
  {
    "season": 5,
    "episode": 12,
    "from_char": "BEN",
    "to_char": "CAESAR",
    "val": 2
  },
  {
    "season": 5,
    "episode": 12,
    "from_char": "BEN",
    "to_char": "CEASAR",
    "val": 1
  },
  {
    "season": 5,
    "episode": 12,
    "from_char": "BEN",
    "to_char": "CHARLES",
    "val": 1
  },
  {
    "season": 5,
    "episode": 12,
    "from_char": "BEN",
    "to_char": "CHARLIE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 12,
    "from_char": "BEN",
    "to_char": "DESMOND",
    "val": 1
  },
  {
    "season": 5,
    "episode": 12,
    "from_char": "BEN",
    "to_char": "ILANA",
    "val": 1
  },
  {
    "season": 5,
    "episode": 12,
    "from_char": "BEN",
    "to_char": "LAPIDUS",
    "val": 2
  },
  {
    "season": 5,
    "episode": 12,
    "from_char": "BEN",
    "to_char": "LOCKE",
    "val": 10
  },
  {
    "season": 5,
    "episode": 12,
    "from_char": "BEN",
    "to_char": "PENNY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 12,
    "from_char": "BEN",
    "to_char": "RICHARD",
    "val": 1
  },
  {
    "season": 5,
    "episode": 12,
    "from_char": "BEN",
    "to_char": "ROUSSEAU",
    "val": 1
  },
  {
    "season": 5,
    "episode": 12,
    "from_char": "BEN",
    "to_char": "SUN",
    "val": 5
  },
  {
    "season": 5,
    "episode": 12,
    "from_char": "BEN",
    "to_char": "TEENAGER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 12,
    "from_char": "BEN",
    "to_char": "WIDMORE",
    "val": 3
  },
  {
    "season": 5,
    "episode": 12,
    "from_char": "BEN",
    "to_char": "WIDMORE'S VOICE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 12,
    "from_char": "BEN'S VOICE",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 12,
    "from_char": "BEN'S VOICE",
    "to_char": "WIDMORE'S VOICE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 12,
    "from_char": "BRAM",
    "to_char": "CAESAR",
    "val": 1
  },
  {
    "season": 5,
    "episode": 12,
    "from_char": "BRAM",
    "to_char": "CEASAR",
    "val": 1
  },
  {
    "season": 5,
    "episode": 12,
    "from_char": "BRAM",
    "to_char": "ILANA",
    "val": 2
  },
  {
    "season": 5,
    "episode": 12,
    "from_char": "BRAM",
    "to_char": "LAPIDUS",
    "val": 1
  },
  {
    "season": 5,
    "episode": 12,
    "from_char": "CAESAR",
    "to_char": "CEASAR",
    "val": 1
  },
  {
    "season": 5,
    "episode": 12,
    "from_char": "CAESAR",
    "to_char": "ILANA",
    "val": 1
  },
  {
    "season": 5,
    "episode": 12,
    "from_char": "CAESAR",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 12,
    "from_char": "CEASAR",
    "to_char": "ILANA",
    "val": 1
  },
  {
    "season": 5,
    "episode": 12,
    "from_char": "CHARLES",
    "to_char": "WIDMORE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 12,
    "from_char": "CHARLIE",
    "to_char": "DESMOND",
    "val": 1
  },
  {
    "season": 5,
    "episode": 12,
    "from_char": "CHARLIE",
    "to_char": "PENNY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 12,
    "from_char": "DESMOND",
    "to_char": "PENNY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 12,
    "from_char": "ILANA",
    "to_char": "LAPIDUS",
    "val": 1
  },
  {
    "season": 5,
    "episode": 12,
    "from_char": "LAPIDUS",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 12,
    "from_char": "LAPIDUS",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 12,
    "from_char": "LAPIDUS",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 5,
    "episode": 12,
    "from_char": "LOCKE",
    "to_char": "SUN",
    "val": 4
  },
  {
    "season": 5,
    "episode": 12,
    "from_char": "LOCKE",
    "to_char": "WIDMORE'S VOICE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 12,
    "from_char": "MAN",
    "to_char": "RICHARD",
    "val": 1
  },
  {
    "season": 5,
    "episode": 12,
    "from_char": "MAN",
    "to_char": "YOUNG BEN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 12,
    "from_char": "ROUSSEAU",
    "to_char": "TEENAGER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 13,
    "from_char": "BOY",
    "to_char": "LARA",
    "val": 1
  },
  {
    "season": 5,
    "episode": 13,
    "from_char": "BOY",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 5,
    "episode": 13,
    "from_char": "BOY",
    "to_char": "TREVOR",
    "val": 1
  },
  {
    "season": 5,
    "episode": 13,
    "from_char": "BOY",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 13,
    "from_char": "BRAM",
    "to_char": "MAN IN VAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 13,
    "from_char": "BRAM",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 5,
    "episode": 13,
    "from_char": "DR. CHANG",
    "to_char": "FIRST DHARMA INITIATIVE MAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 13,
    "from_char": "DR. CHANG",
    "to_char": "GLENN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 13,
    "from_char": "DR. CHANG",
    "to_char": "HURLEY",
    "val": 4
  },
  {
    "season": 5,
    "episode": 13,
    "from_char": "DR. CHANG",
    "to_char": "LARA",
    "val": 1
  },
  {
    "season": 5,
    "episode": 13,
    "from_char": "DR. CHANG",
    "to_char": "MILES",
    "val": 5
  },
  {
    "season": 5,
    "episode": 13,
    "from_char": "DR. CHANG",
    "to_char": "SECOND DHARMA INITIATIVE MAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 13,
    "from_char": "DR. CHANG",
    "to_char": "STEREO",
    "val": 1
  },
  {
    "season": 5,
    "episode": 13,
    "from_char": "DR. CHANG",
    "to_char": "WORKER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 13,
    "from_char": "FARADAY",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 13,
    "from_char": "FARADAY",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 5,
    "episode": 13,
    "from_char": "FIRST DHARMA INITIATIVE MAN",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 13,
    "from_char": "FIRST DHARMA INITIATIVE MAN",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 5,
    "episode": 13,
    "from_char": "FIRST DHARMA INITIATIVE MAN",
    "to_char": "SECOND DHARMA INITIATIVE MAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 13,
    "from_char": "FIRST DHARMA INITIATIVE MAN",
    "to_char": "STEREO",
    "val": 1
  },
  {
    "season": 5,
    "episode": 13,
    "from_char": "GLENN",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 13,
    "from_char": "GLENN",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 5,
    "episode": 13,
    "from_char": "GLENN",
    "to_char": "WORKER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 13,
    "from_char": "HORACE",
    "to_char": "MILES",
    "val": 2
  },
  {
    "season": 5,
    "episode": 13,
    "from_char": "HURLEY",
    "to_char": "MILES",
    "val": 8
  },
  {
    "season": 5,
    "episode": 13,
    "from_char": "HURLEY",
    "to_char": "SECOND DHARMA INITIATIVE MAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 13,
    "from_char": "HURLEY",
    "to_char": "STEREO",
    "val": 2
  },
  {
    "season": 5,
    "episode": 13,
    "from_char": "HURLEY",
    "to_char": "WORKER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 13,
    "from_char": "JACK",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 5,
    "episode": 13,
    "from_char": "JACK",
    "to_char": "PHIL",
    "val": 1
  },
  {
    "season": 5,
    "episode": 13,
    "from_char": "JACK",
    "to_char": "ROGER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 13,
    "from_char": "JACK",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 13,
    "from_char": "JULIET",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 13,
    "from_char": "JULIET",
    "to_char": "PHIL",
    "val": 1
  },
  {
    "season": 5,
    "episode": 13,
    "from_char": "JULIET",
    "to_char": "ROGER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 13,
    "from_char": "JULIET",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 13,
    "from_char": "KATE",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 5,
    "episode": 13,
    "from_char": "KATE",
    "to_char": "ROGER",
    "val": 2
  },
  {
    "season": 5,
    "episode": 13,
    "from_char": "KATE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 13,
    "from_char": "LARA",
    "to_char": "MILES",
    "val": 3
  },
  {
    "season": 5,
    "episode": 13,
    "from_char": "LARA",
    "to_char": "TREVOR",
    "val": 1
  },
  {
    "season": 5,
    "episode": 13,
    "from_char": "LARA",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 13,
    "from_char": "MAN",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 5,
    "episode": 13,
    "from_char": "MAN IN VAN",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 5,
    "episode": 13,
    "from_char": "MILES",
    "to_char": "MR. GRAY",
    "val": 2
  },
  {
    "season": 5,
    "episode": 13,
    "from_char": "MILES",
    "to_char": "NAOMI",
    "val": 2
  },
  {
    "season": 5,
    "episode": 13,
    "from_char": "MILES",
    "to_char": "RADZINSKY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 13,
    "from_char": "MILES",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 13,
    "from_char": "MILES",
    "to_char": "SECOND DHARMA INITIATIVE MAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 13,
    "from_char": "MILES",
    "to_char": "STEREO",
    "val": 2
  },
  {
    "season": 5,
    "episode": 13,
    "from_char": "MILES",
    "to_char": "TREVOR",
    "val": 1
  },
  {
    "season": 5,
    "episode": 13,
    "from_char": "MILES",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 13,
    "from_char": "MILES",
    "to_char": "WORKER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 13,
    "from_char": "MR. GRAY",
    "to_char": "NAOMI",
    "val": 1
  },
  {
    "season": 5,
    "episode": 13,
    "from_char": "PHIL",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 13,
    "from_char": "SECOND DHARMA INITIATIVE MAN",
    "to_char": "STEREO",
    "val": 1
  },
  {
    "season": 5,
    "episode": 13,
    "from_char": "TREVOR",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "BOY",
    "to_char": "DANIEL",
    "val": 1
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "BOY",
    "to_char": "ELOISE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "BOY",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "CAROLINE",
    "to_char": "FARADAY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "CAROLINE",
    "to_char": "NEWSCASTER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "CAROLINE",
    "to_char": "WIDMORE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "CHANG",
    "to_char": "DR. CHANG",
    "val": 1
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "CHANG",
    "to_char": "FARADAY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "CHANG",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "CHARLIE HUME",
    "to_char": "DOCTOR",
    "val": 1
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "CHARLIE HUME",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "CHARLIE HUME",
    "to_char": "PENNY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "CHARLOTTE",
    "to_char": "FARADAY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "CHARLOTTE",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "CHARLOTTE",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "DANIEL",
    "to_char": "ELOISE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "DANIEL",
    "to_char": "FARADAY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "DANIEL",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "DANIEL",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "DANIEL",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "DANIEL",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "DANIEL",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "DANIEL",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "DESMOND",
    "to_char": "PENNY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "DOCTOR",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "DOCTOR",
    "to_char": "PENNY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "DR. CHANG",
    "to_char": "FARADAY",
    "val": 3
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "DR. CHANG",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "DR. CHANG",
    "to_char": "MILES",
    "val": 2
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "DR. CHANG",
    "to_char": "SEALS",
    "val": 1
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "DR. CHANG",
    "to_char": "TONY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "ELOISE",
    "to_char": "FARADAY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "ELOISE",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "ELOISE",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "ELOISE",
    "to_char": "OTHER MAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "ELOISE",
    "to_char": "OTHER WOMAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "ELOISE",
    "to_char": "RICHARD",
    "val": 1
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "ELOISE",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "FARADAY",
    "to_char": "HURLEY",
    "val": 2
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "FARADAY",
    "to_char": "JACK",
    "val": 8
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "FARADAY",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "FARADAY",
    "to_char": "JULIET",
    "val": 2
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "FARADAY",
    "to_char": "KATE",
    "val": 7
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "FARADAY",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "FARADAY",
    "to_char": "MILES",
    "val": 7
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "FARADAY",
    "to_char": "MS. HAWKING",
    "val": 3
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "FARADAY",
    "to_char": "NEWSCASTER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "FARADAY",
    "to_char": "OTHER MAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "FARADAY",
    "to_char": "OTHER WOMAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "FARADAY",
    "to_char": "RADZINSKY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "FARADAY",
    "to_char": "RICHARD",
    "val": 1
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "FARADAY",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "FARADAY",
    "to_char": "SEALS",
    "val": 1
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "FARADAY",
    "to_char": "THERESA",
    "val": 1
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "FARADAY",
    "to_char": "TONY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "FARADAY",
    "to_char": "WIDMORE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "HURLEY",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "HURLEY",
    "to_char": "JIN",
    "val": 2
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "HURLEY",
    "to_char": "JULIET",
    "val": 3
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "HURLEY",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "HURLEY",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "HURLEY",
    "to_char": "RADZINSKY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "HURLEY",
    "to_char": "SAWYER",
    "val": 3
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "JACK",
    "to_char": "JULIET",
    "val": 2
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "JACK",
    "to_char": "KATE",
    "val": 6
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "JACK",
    "to_char": "MILES",
    "val": 2
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "JACK",
    "to_char": "OTHER MAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "JACK",
    "to_char": "OTHER WOMAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "JACK",
    "to_char": "RADZINSKY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "JACK",
    "to_char": "RICHARD",
    "val": 1
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "JACK",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "JIN",
    "to_char": "JULIET",
    "val": 2
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "JIN",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "JIN",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "JIN",
    "to_char": "RADZINSKY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "JIN",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "JULIET",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "JULIET",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "JULIET",
    "to_char": "RADZINSKY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "JULIET",
    "to_char": "SAWYER",
    "val": 4
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "KATE",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "KATE",
    "to_char": "OTHER MAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "KATE",
    "to_char": "OTHER WOMAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "KATE",
    "to_char": "RADZINSKY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "KATE",
    "to_char": "RICHARD",
    "val": 1
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "KATE",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "MAN",
    "to_char": "PENNY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "MAN",
    "to_char": "SEALS",
    "val": 1
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "MAN",
    "to_char": "TONY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "MILES",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "MS. HAWKING",
    "to_char": "NURSE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "MS. HAWKING",
    "to_char": "PENNY",
    "val": 2
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "MS. HAWKING",
    "to_char": "THERESA",
    "val": 1
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "MS. HAWKING",
    "to_char": "WIDMORE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "MS. HAWKING",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "NEWSCASTER",
    "to_char": "WIDMORE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "NURSE",
    "to_char": "PENNY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "NURSE",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "OTHER MAN",
    "to_char": "OTHER WOMAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "OTHER MAN",
    "to_char": "RICHARD",
    "val": 1
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "OTHER WOMAN",
    "to_char": "RICHARD",
    "val": 1
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "PENNY",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "RADZINSKY",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 14,
    "from_char": "SEALS",
    "to_char": "TONY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "2ND MAN",
    "to_char": "ELOISE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "2ND MAN",
    "to_char": "FARADAY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "2ND MAN",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "2ND MAN",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "2ND MAN",
    "to_char": "RICHARD",
    "val": 1
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "2ND MAN",
    "to_char": "WIDMORE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "BEN",
    "to_char": "LOCKE",
    "val": 6
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "BEN",
    "to_char": "RICHARD",
    "val": 5
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "BEN",
    "to_char": "SUN",
    "val": 3
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "BEN",
    "to_char": "VANESSA",
    "val": 1
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "CHARLOTTE",
    "to_char": "DR. CHANG",
    "val": 1
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "CHARLOTTE",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "CHARLOTTE",
    "to_char": "JEANNETTE LEWIS",
    "val": 1
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "CHARLOTTE",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "CHARLOTTE",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "CHARLOTTE",
    "to_char": "LARA",
    "val": 1
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "CHARLOTTE",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "CHARLOTTE",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "CHARLOTTE",
    "to_char": "MITCH",
    "val": 1
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "CHARLOTTE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "DR. CHANG",
    "to_char": "HURLEY",
    "val": 2
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "DR. CHANG",
    "to_char": "JEANNETTE LEWIS",
    "val": 1
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "DR. CHANG",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "DR. CHANG",
    "to_char": "JULIET",
    "val": 2
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "DR. CHANG",
    "to_char": "LARA",
    "val": 1
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "DR. CHANG",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "DR. CHANG",
    "to_char": "MILES",
    "val": 2
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "DR. CHANG",
    "to_char": "MITCH",
    "val": 1
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "DR. CHANG",
    "to_char": "RADZINSKY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "DR. CHANG",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "ELOISE",
    "to_char": "ERIK",
    "val": 2
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "ELOISE",
    "to_char": "FARADAY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "ELOISE",
    "to_char": "JACK",
    "val": 7
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "ELOISE",
    "to_char": "KATE",
    "val": 4
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "ELOISE",
    "to_char": "RICHARD",
    "val": 4
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "ELOISE",
    "to_char": "SAYID",
    "val": 3
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "ELOISE",
    "to_char": "WIDMORE",
    "val": 2
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "ENGINEER",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "ENGINEER",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "ENGINEER",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "ENGINEER",
    "to_char": "MITCH",
    "val": 1
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "ENGINEER",
    "to_char": "PHIL",
    "val": 1
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "ENGINEER",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "ERIK",
    "to_char": "JACK",
    "val": 2
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "ERIK",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "FARADAY",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "FARADAY",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "FARADAY",
    "to_char": "RICHARD",
    "val": 1
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "FARADAY",
    "to_char": "WIDMORE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "HORACE",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "HORACE",
    "to_char": "MITCH",
    "val": 1
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "HORACE",
    "to_char": "PHIL",
    "val": 1
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "HORACE",
    "to_char": "RADZINSKY",
    "val": 2
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "HORACE",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "HURLEY",
    "to_char": "JEANNETTE LEWIS",
    "val": 1
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "HURLEY",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "HURLEY",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "HURLEY",
    "to_char": "LARA",
    "val": 1
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "HURLEY",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "HURLEY",
    "to_char": "MILES",
    "val": 2
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "HURLEY",
    "to_char": "MITCH",
    "val": 1
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "HURLEY",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "JACK",
    "to_char": "KATE",
    "val": 4
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "JACK",
    "to_char": "RICHARD",
    "val": 4
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "JACK",
    "to_char": "SAYID",
    "val": 3
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "JACK",
    "to_char": "WIDMORE",
    "val": 2
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "JEANNETTE LEWIS",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "JEANNETTE LEWIS",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "JEANNETTE LEWIS",
    "to_char": "LARA",
    "val": 1
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "JEANNETTE LEWIS",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "JEANNETTE LEWIS",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "JEANNETTE LEWIS",
    "to_char": "MITCH",
    "val": 1
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "JEANNETTE LEWIS",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "JIN",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "JIN",
    "to_char": "LARA",
    "val": 1
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "JIN",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "JIN",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "JIN",
    "to_char": "MITCH",
    "val": 1
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "JIN",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "JULIET",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "JULIET",
    "to_char": "LARA",
    "val": 1
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "JULIET",
    "to_char": "MAN",
    "val": 2
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "JULIET",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "JULIET",
    "to_char": "MITCH",
    "val": 3
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "JULIET",
    "to_char": "PHIL",
    "val": 2
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "JULIET",
    "to_char": "RADZINSKY",
    "val": 2
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "JULIET",
    "to_char": "SAWYER",
    "val": 4
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "KATE",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "KATE",
    "to_char": "MITCH",
    "val": 1
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "KATE",
    "to_char": "PHIL",
    "val": 1
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "KATE",
    "to_char": "RICHARD",
    "val": 2
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "KATE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "KATE",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "KATE",
    "to_char": "WIDMORE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "LARA",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "LARA",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "LARA",
    "to_char": "MITCH",
    "val": 1
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "LARA",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "LOCKE",
    "to_char": "RICHARD",
    "val": 5
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "LOCKE",
    "to_char": "SUN",
    "val": 3
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "LOCKE",
    "to_char": "VANESSA",
    "val": 1
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "MAN",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "MAN",
    "to_char": "MITCH",
    "val": 2
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "MAN",
    "to_char": "PHIL",
    "val": 1
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "MAN",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "MILES",
    "to_char": "MITCH",
    "val": 1
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "MILES",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "MITCH",
    "to_char": "PHIL",
    "val": 2
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "MITCH",
    "to_char": "RADZINSKY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "MITCH",
    "to_char": "SAWYER",
    "val": 3
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "PHIL",
    "to_char": "RADZINSKY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "PHIL",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "RADZINSKY",
    "to_char": "SAWYER",
    "val": 3
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "RICHARD",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "RICHARD",
    "to_char": "SUN",
    "val": 3
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "RICHARD",
    "to_char": "VANESSA",
    "val": 1
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "RICHARD",
    "to_char": "WIDMORE",
    "val": 2
  },
  {
    "season": 5,
    "episode": 15,
    "from_char": "SUN",
    "to_char": "VANESSA",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "AUNTIE",
    "to_char": "JACOB",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "AUNTIE",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "AUNTIE",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "BEN",
    "to_char": "JACOB",
    "val": 2
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "BEN",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "BEN",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "BEN",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "BEN",
    "to_char": "LOCKE",
    "val": 5
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "BEN",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "BEN",
    "to_char": "NADIA",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "BEN",
    "to_char": "RICHARD",
    "val": 2
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "BEN",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "BEN",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "BEN",
    "to_char": "SUN",
    "val": 3
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "BERNARD",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "BERNARD",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "BERNARD",
    "to_char": "JULIET",
    "val": 2
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "BERNARD",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "BERNARD",
    "to_char": "PHIL",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "BERNARD",
    "to_char": "ROGER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "BERNARD",
    "to_char": "ROSE",
    "val": 3
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "BERNARD",
    "to_char": "SAWYER",
    "val": 3
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "BERNARD",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "BIRD",
    "to_char": "CAPTAIN BIRD",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "BIRD",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "BIRD",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "BIRD",
    "to_char": "MITCH",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "BIRD",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "BIRD",
    "to_char": "VOICE OVER SPEAKER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "BLONDE SISTER",
    "to_char": "BRUNETTE SISTER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "BLONDE SISTER",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "BLONDE SISTER",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "BLONDE SISTER",
    "to_char": "MOTHER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "BLONDE SISTER",
    "to_char": "RACHEL",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "BLONDE SISTER",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "BRAM",
    "to_char": "FRANK",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "BRAM",
    "to_char": "ILANA",
    "val": 3
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "BRAM",
    "to_char": "JACOB",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "BRAM",
    "to_char": "LAPIDUS",
    "val": 2
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "BRAM",
    "to_char": "LAPIUS",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "BRAM",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "BRUNETTE SISTER",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "BRUNETTE SISTER",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "BRUNETTE SISTER",
    "to_char": "MOTHER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "BRUNETTE SISTER",
    "to_char": "RACHEL",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "BRUNETTE SISTER",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "CAPTAIN BIRD",
    "to_char": "JULIET",
    "val": 2
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "CAPTAIN BIRD",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "CAPTAIN BIRD",
    "to_char": "MITCH",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "CAPTAIN BIRD",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "CAPTAIN BIRD",
    "to_char": "VOICE OVER SPEAKER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "CHANG",
    "to_char": "RADZINSKY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "CHRISTIAN",
    "to_char": "JACK",
    "val": 2
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "CHRISTIAN",
    "to_char": "JACOB",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "CHRISTIAN",
    "to_char": "NURSE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "CHRISTIAN",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "DOUG",
    "to_char": "JACOB",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "DOUG",
    "to_char": "JAMES",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "DOUG",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "DOUG",
    "to_char": "UNCLE DOUG",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "DR. CHANG",
    "to_char": "ILANA",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "DR. CHANG",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "DR. CHANG",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "DR. CHANG",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "DR. CHANG",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "DR. CHANG",
    "to_char": "PHIL",
    "val": 2
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "DR. CHANG",
    "to_char": "RADSINSKY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "DR. CHANG",
    "to_char": "RADZINSKY",
    "val": 2
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "DR. CHANG",
    "to_char": "RICHARD",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "DR. CHANG",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "DR. CHANG",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "DR. CHANG",
    "to_char": "WORKER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "ELOISE",
    "to_char": "JACK",
    "val": 2
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "ELOISE",
    "to_char": "RICHARD",
    "val": 2
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "ELOISE",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "ELOISE",
    "to_char": "VOICE OVER SPEAKER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "FRANK",
    "to_char": "ILANA",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "HURLEY",
    "to_char": "JACK",
    "val": 4
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "HURLEY",
    "to_char": "JACOB",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "HURLEY",
    "to_char": "JAIL CLERK",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "HURLEY",
    "to_char": "JIN",
    "val": 2
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "HURLEY",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "HURLEY",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "HURLEY",
    "to_char": "MILES",
    "val": 3
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "HURLEY",
    "to_char": "PHIL",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "HURLEY",
    "to_char": "RADZINSKY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "HURLEY",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "ILANA",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "ILANA",
    "to_char": "JACOB",
    "val": 2
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "ILANA",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "ILANA",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "ILANA",
    "to_char": "LAPIDUS",
    "val": 2
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "ILANA",
    "to_char": "LAPIUS",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "ILANA",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "ILANA",
    "to_char": "NURSE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "ILANA",
    "to_char": "PHIL",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "ILANA",
    "to_char": "RADSINSKY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "ILANA",
    "to_char": "RADZINSKY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "ILANA",
    "to_char": "RICHARD",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "ILANA",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "ILANA",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "ILANA",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "ILANA",
    "to_char": "WORKER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "JACK",
    "to_char": "JACOB",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "JACK",
    "to_char": "JAIL CLERK",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "JACK",
    "to_char": "JIN",
    "val": 3
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "JACK",
    "to_char": "JULIET",
    "val": 3
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "JACK",
    "to_char": "KATE",
    "val": 3
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "JACK",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "JACK",
    "to_char": "MILES",
    "val": 4
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "JACK",
    "to_char": "MOTHER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "JACK",
    "to_char": "NURSE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "JACK",
    "to_char": "PHIL",
    "val": 3
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "JACK",
    "to_char": "RACHEL",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "JACK",
    "to_char": "RADSINSKY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "JACK",
    "to_char": "RADZINSKY",
    "val": 2
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "JACK",
    "to_char": "RICHARD",
    "val": 4
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "JACK",
    "to_char": "ROGER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "JACK",
    "to_char": "ROSE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "JACK",
    "to_char": "SAWYER",
    "val": 4
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "JACK",
    "to_char": "SAYID",
    "val": 6
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "JACK",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "JACK",
    "to_char": "VOICE OVER SPEAKER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "JACK",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "JACK",
    "to_char": "WORKER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "JACOB",
    "to_char": "JAMES",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "JACOB",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "JACOB",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "JACOB",
    "to_char": "LAPIDUS",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "JACOB",
    "to_char": "LOCKE",
    "val": 2
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "JACOB",
    "to_char": "MAN",
    "val": 2
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "JACOB",
    "to_char": "MAN IN BLACK",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "JACOB",
    "to_char": "NADIA",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "JACOB",
    "to_char": "NURSE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "JACOB",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "JACOB",
    "to_char": "SHOPKEEPER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "JACOB",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "JACOB",
    "to_char": "TOM",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "JACOB",
    "to_char": "UNCLE DOUG",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "JACOB",
    "to_char": "WOMAN",
    "val": 2
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "JAIL CLERK",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "JAIL CLERK",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "JAIL CLERK",
    "to_char": "PHIL",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "JAIL CLERK",
    "to_char": "RADZINSKY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "JAMES",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "JAMES",
    "to_char": "UNCLE DOUG",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "JIN",
    "to_char": "JULIET",
    "val": 2
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "JIN",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "JIN",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "JIN",
    "to_char": "MILES",
    "val": 3
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "JIN",
    "to_char": "PHIL",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "JIN",
    "to_char": "RICHARD",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "JIN",
    "to_char": "ROGER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "JIN",
    "to_char": "ROSE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "JIN",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "JIN",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "JIN",
    "to_char": "SUN",
    "val": 3
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "JULIET",
    "to_char": "KATE",
    "val": 7
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "JULIET",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "JULIET",
    "to_char": "MILES",
    "val": 2
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "JULIET",
    "to_char": "MITCH",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "JULIET",
    "to_char": "MOTHER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "JULIET",
    "to_char": "PHIL",
    "val": 2
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "JULIET",
    "to_char": "RACHEL",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "JULIET",
    "to_char": "RADSINSKY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "JULIET",
    "to_char": "RADZINSKY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "JULIET",
    "to_char": "RICHARD",
    "val": 2
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "JULIET",
    "to_char": "ROGER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "JULIET",
    "to_char": "ROSE",
    "val": 2
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "JULIET",
    "to_char": "SAWYER",
    "val": 9
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "JULIET",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "JULIET",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "JULIET",
    "to_char": "VOICE OVER SPEAKER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "JULIET",
    "to_char": "WORKER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "KATE",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "KATE",
    "to_char": "MAN",
    "val": 2
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "KATE",
    "to_char": "MAN IN BLACK",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "KATE",
    "to_char": "MILES",
    "val": 2
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "KATE",
    "to_char": "MITCH",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "KATE",
    "to_char": "PHIL",
    "val": 3
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "KATE",
    "to_char": "RADSINSKY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "KATE",
    "to_char": "RADZINSKY",
    "val": 2
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "KATE",
    "to_char": "RICHARD",
    "val": 2
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "KATE",
    "to_char": "ROGER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "KATE",
    "to_char": "ROSE",
    "val": 2
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "KATE",
    "to_char": "SAWYER",
    "val": 7
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "KATE",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "KATE",
    "to_char": "SHOPKEEPER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "KATE",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "KATE",
    "to_char": "TOM",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "KATE",
    "to_char": "VOICE OVER SPEAKER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "KATE",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "KATE",
    "to_char": "WORKER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "LAPIDUS",
    "to_char": "LAPIUS",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "LAPIDUS",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "LOCKE",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "LOCKE",
    "to_char": "NADIA",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "LOCKE",
    "to_char": "RICHARD",
    "val": 3
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "LOCKE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "LOCKE",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "LOCKE",
    "to_char": "SUN",
    "val": 3
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "MAN",
    "to_char": "MAN IN BLACK",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "MAN",
    "to_char": "PHIL",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "MAN",
    "to_char": "RADZINSKY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "MAN",
    "to_char": "SHOPKEEPER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "MAN",
    "to_char": "TOM",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "MAN",
    "to_char": "UNCLE DOUG",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "MAN",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "MAN IN BLACK",
    "to_char": "SHOPKEEPER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "MAN IN BLACK",
    "to_char": "TOM",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "MAN IN BLACK",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "MILES",
    "to_char": "PHIL",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "MILES",
    "to_char": "RADSINSKY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "MILES",
    "to_char": "RADZINSKY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "MILES",
    "to_char": "RICHARD",
    "val": 2
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "MILES",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "MILES",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "MILES",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "MILES",
    "to_char": "WORKER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "MITCH",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "MITCH",
    "to_char": "VOICE OVER SPEAKER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "MOTHER",
    "to_char": "RACHEL",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "MOTHER",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "NADIA",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "NURSE",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "PHIL",
    "to_char": "RADSINSKY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "PHIL",
    "to_char": "RADZINSKY",
    "val": 3
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "PHIL",
    "to_char": "RICHARD",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "PHIL",
    "to_char": "ROGER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "PHIL",
    "to_char": "ROSE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "PHIL",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "PHIL",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "PHIL",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "PHIL",
    "to_char": "WORKER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "RACHEL",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "RADSINSKY",
    "to_char": "RADZINSKY",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "RADSINSKY",
    "to_char": "RICHARD",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "RADSINSKY",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "RADSINSKY",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "RADSINSKY",
    "to_char": "WORKER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "RADZINSKY",
    "to_char": "RICHARD",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "RADZINSKY",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "RADZINSKY",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "RADZINSKY",
    "to_char": "WORKER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "RICHARD",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "RICHARD",
    "to_char": "SAYID",
    "val": 3
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "RICHARD",
    "to_char": "SUN",
    "val": 3
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "RICHARD",
    "to_char": "VOICE OVER SPEAKER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "RICHARD",
    "to_char": "WORKER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "ROGER",
    "to_char": "ROSE",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "ROGER",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "ROGER",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "ROSE",
    "to_char": "SAWYER",
    "val": 3
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "ROSE",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "SAWYER",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "SAWYER",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "SAWYER",
    "to_char": "VOICE OVER SPEAKER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "SAWYER",
    "to_char": "WORKER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "SAYID",
    "to_char": "VOICE OVER SPEAKER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "SHOPKEEPER",
    "to_char": "TOM",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "SHOPKEEPER",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "SUN",
    "to_char": "WORKER",
    "val": 1
  },
  {
    "season": 5,
    "episode": 16,
    "from_char": "TOM",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "ARZT",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "ARZT",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "ARZT",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "ARZT",
    "to_char": "MARS",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "ARZT",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "BEN",
    "to_char": "BRAM",
    "val": 2
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "BEN",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "BEN",
    "to_char": "ILANA",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "BEN",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "BEN",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "BEN",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "BEN",
    "to_char": "LAPIDUS",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "BEN",
    "to_char": "LOCKE",
    "val": 3
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "BEN",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "BEN",
    "to_char": "RICHARD",
    "val": 2
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "BEN",
    "to_char": "SAWYER",
    "val": 3
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "BEN",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "BERNARD",
    "to_char": "CINDY",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "BERNARD",
    "to_char": "DESMOND",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "BERNARD",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "BERNARD",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "BERNARD",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "BERNARD",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "BERNARD",
    "to_char": "NORRIS",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "BERNARD",
    "to_char": "ROSE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "BERNARD",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "BLACK-TSA-AGENT",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "BLACK-TSA-AGENT",
    "to_char": "MARS",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "BLACK-TSA-AGENT",
    "to_char": "RANDOM-LADY",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "BLACK-TSA-AGENT",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "BLACK-TSA-AGENT",
    "to_char": "TSA-AGENT-ON-RADIO",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "BOONE",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "BOONE",
    "to_char": "JACOB",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "BOONE",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "BOONE",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "BOONE",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "BOONE",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "BRAM",
    "to_char": "ILANA",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "BRAM",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "BRAM",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "BRAM",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "BRAM",
    "to_char": "LAPIDUS",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "BRAM",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "BRAM",
    "to_char": "RICHARD",
    "val": 2
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "BRAM",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "BRAM",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "CAB-DRIVER",
    "to_char": "CLAIRE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "CAB-DRIVER",
    "to_char": "DOGEN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "CAB-DRIVER",
    "to_char": "FROGURT",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "CAB-DRIVER",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "CAB-DRIVER",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "CAB-DRIVER",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "CAB-DRIVER",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "CAB-DRIVER",
    "to_char": "LENNON",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "CAB-DRIVER",
    "to_char": "MARS",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "CHARLIE",
    "to_char": "CINDY",
    "val": 2
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "CHARLIE",
    "to_char": "EMPLOYEE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "CHARLIE",
    "to_char": "JACK",
    "val": 2
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "CHARLIE",
    "to_char": "NORRIS",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "CHARLIE",
    "to_char": "ROSE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "CHARLIE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "CHARLIE",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "CINDY",
    "to_char": "CUSTOMS-AGENT",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "CINDY",
    "to_char": "DESMOND",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "CINDY",
    "to_char": "DOGEN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "CINDY",
    "to_char": "EMPLOYEE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "CINDY",
    "to_char": "FEMALE-CUSTOMS-AGENT",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "CINDY",
    "to_char": "HURLEY",
    "val": 2
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "CINDY",
    "to_char": "JACK",
    "val": 4
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "CINDY",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "CINDY",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "CINDY",
    "to_char": "KATE",
    "val": 3
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "CINDY",
    "to_char": "LENNON",
    "val": 2
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "CINDY",
    "to_char": "MILES",
    "val": 2
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "CINDY",
    "to_char": "NORRIS",
    "val": 2
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "CINDY",
    "to_char": "RANDOM-OTHER",
    "val": 2
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "CINDY",
    "to_char": "ROSE",
    "val": 2
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "CINDY",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "CINDY",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "CINDY",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "CLAIRE",
    "to_char": "DOGEN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "CLAIRE",
    "to_char": "FROGURT",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "CLAIRE",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "CLAIRE",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "CLAIRE",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "CLAIRE",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "CLAIRE",
    "to_char": "LENNON",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "CLAIRE",
    "to_char": "MARS",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "CUSTOMS-AGENT",
    "to_char": "DOGEN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "CUSTOMS-AGENT",
    "to_char": "FEMALE-CUSTOMS-AGENT",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "CUSTOMS-AGENT",
    "to_char": "HURLEY",
    "val": 2
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "CUSTOMS-AGENT",
    "to_char": "JACK",
    "val": 2
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "CUSTOMS-AGENT",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "CUSTOMS-AGENT",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "CUSTOMS-AGENT",
    "to_char": "LENNON",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "CUSTOMS-AGENT",
    "to_char": "MARS",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "CUSTOMS-AGENT",
    "to_char": "RANDOM-OTHER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "CUSTOMS-AGENT",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "DESMOND",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "DESMOND",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "DESMOND",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "DESMOND",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "DESMOND",
    "to_char": "NORRIS",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "DESMOND",
    "to_char": "ROSE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "DESMOND",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "DOGEN",
    "to_char": "FEMALE-CUSTOMS-AGENT",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "DOGEN",
    "to_char": "FROGURT",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "DOGEN",
    "to_char": "HURLEY",
    "val": 4
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "DOGEN",
    "to_char": "JACK",
    "val": 2
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "DOGEN",
    "to_char": "JIN",
    "val": 2
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "DOGEN",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "DOGEN",
    "to_char": "LENNON",
    "val": 4
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "DOGEN",
    "to_char": "MARS",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "DOGEN",
    "to_char": "RANDOM-OTHER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "DOGEN",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "EMPLOYEE",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "EMPLOYEE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "EMPLOYEE",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "FEMALE-CUSTOMS-AGENT",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "FEMALE-CUSTOMS-AGENT",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "FEMALE-CUSTOMS-AGENT",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "FEMALE-CUSTOMS-AGENT",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "FEMALE-CUSTOMS-AGENT",
    "to_char": "LENNON",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "FEMALE-CUSTOMS-AGENT",
    "to_char": "RANDOM-OTHER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "FEMALE-CUSTOMS-AGENT",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "FROGURT",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "FROGURT",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "FROGURT",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "FROGURT",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "FROGURT",
    "to_char": "LENNON",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "FROGURT",
    "to_char": "MARS",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "HURLEY",
    "to_char": "JACK",
    "val": 10
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "HURLEY",
    "to_char": "JACOB",
    "val": 2
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "HURLEY",
    "to_char": "JIN",
    "val": 6
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "HURLEY",
    "to_char": "JULIET",
    "val": 2
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "HURLEY",
    "to_char": "KATE",
    "val": 11
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "HURLEY",
    "to_char": "LENNON",
    "val": 6
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "HURLEY",
    "to_char": "LOCKE",
    "val": 2
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "HURLEY",
    "to_char": "MARS",
    "val": 3
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "HURLEY",
    "to_char": "MILES",
    "val": 4
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "HURLEY",
    "to_char": "RANDOM-OTHER",
    "val": 2
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "HURLEY",
    "to_char": "SAWYER",
    "val": 6
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "HURLEY",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "HURLEY",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "ILANA",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "ILANA",
    "to_char": "LAPIDUS",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "ILANA",
    "to_char": "RICHARD",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "ILANA",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "ILANA",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "JACK",
    "to_char": "JACOB",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "JACK",
    "to_char": "JIN",
    "val": 5
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "JACK",
    "to_char": "JULIET",
    "val": 3
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "JACK",
    "to_char": "KATE",
    "val": 10
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "JACK",
    "to_char": "LAPIDUS",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "JACK",
    "to_char": "LENNON",
    "val": 3
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "JACK",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "JACK",
    "to_char": "MARS",
    "val": 3
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "JACK",
    "to_char": "MILES",
    "val": 3
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "JACK",
    "to_char": "NORRIS",
    "val": 2
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "JACK",
    "to_char": "OCEANIC-MALE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "JACK",
    "to_char": "RANDOM-OTHER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "JACK",
    "to_char": "RICHARD",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "JACK",
    "to_char": "ROSE",
    "val": 2
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "JACK",
    "to_char": "SAWYER",
    "val": 8
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "JACK",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "JACK",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "JACOB",
    "to_char": "JIN",
    "val": 2
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "JACOB",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "JACOB",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "JACOB",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "JACOB",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "JACOB",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "JIN",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "JIN",
    "to_char": "KATE",
    "val": 5
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "JIN",
    "to_char": "LENNON",
    "val": 2
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "JIN",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "JIN",
    "to_char": "MARS",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "JIN",
    "to_char": "RANDOM-OTHER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "JIN",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "JIN",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "JIN",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "JULIET",
    "to_char": "KATE",
    "val": 4
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "JULIET",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "JULIET",
    "to_char": "MILES",
    "val": 2
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "JULIET",
    "to_char": "NORRIS",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "JULIET",
    "to_char": "RICHARD",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "JULIET",
    "to_char": "ROSE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "JULIET",
    "to_char": "SAWYER",
    "val": 4
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "KATE",
    "to_char": "LENNON",
    "val": 3
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "KATE",
    "to_char": "LOCKE",
    "val": 2
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "KATE",
    "to_char": "MARS",
    "val": 4
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "KATE",
    "to_char": "MILES",
    "val": 5
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "KATE",
    "to_char": "NORRIS",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "KATE",
    "to_char": "RANDOM-LADY",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "KATE",
    "to_char": "RANDOM-OTHER",
    "val": 2
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "KATE",
    "to_char": "RICHARD",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "KATE",
    "to_char": "ROSE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "KATE",
    "to_char": "SAWYER",
    "val": 9
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "KATE",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "KATE",
    "to_char": "TSA-AGENT-ON-RADIO",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "LAPIDUS",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "LAPIDUS",
    "to_char": "RICHARD",
    "val": 2
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "LAPIDUS",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "LAPIDUS",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "LENNON",
    "to_char": "MARS",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "LENNON",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "LENNON",
    "to_char": "RANDOM-OTHER",
    "val": 2
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "LENNON",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "LENNON",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "LOCKE",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "LOCKE",
    "to_char": "RICHARD",
    "val": 2
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "LOCKE",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "LOCKE",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "LOCKE",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "MARS",
    "to_char": "RANDOM-LADY",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "MARS",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "MARS",
    "to_char": "TSA-AGENT-ON-RADIO",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "MILES",
    "to_char": "NORRIS",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "MILES",
    "to_char": "RANDOM-OTHER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "MILES",
    "to_char": "ROSE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "MILES",
    "to_char": "SAWYER",
    "val": 5
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "NORRIS",
    "to_char": "ROSE",
    "val": 2
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "NORRIS",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "RANDOM-LADY",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "RANDOM-LADY",
    "to_char": "TSA-AGENT-ON-RADIO",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "RANDOM-OTHER",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "RICHARD",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "RICHARD",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "ROSE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "SAWYER",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "SAWYER",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "SAWYER",
    "to_char": "TSA-AGENT-ON-RADIO",
    "val": 1
  },
  {
    "season": 6,
    "episode": 1,
    "from_char": "SAYID",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 2,
    "from_char": "ALDO",
    "to_char": "JACK",
    "val": 2
  },
  {
    "season": 6,
    "episode": 2,
    "from_char": "ALDO",
    "to_char": "JIN",
    "val": 3
  },
  {
    "season": 6,
    "episode": 2,
    "from_char": "ALDO",
    "to_char": "JUSTIN",
    "val": 2
  },
  {
    "season": 6,
    "episode": 2,
    "from_char": "ALDO",
    "to_char": "KATE",
    "val": 3
  },
  {
    "season": 6,
    "episode": 2,
    "from_char": "ALDO",
    "to_char": "LENNON",
    "val": 1
  },
  {
    "season": 6,
    "episode": 2,
    "from_char": "ALDO",
    "to_char": "TEMPLE LEADER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 2,
    "from_char": "CAB DRIVER",
    "to_char": "CLAIRE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 2,
    "from_char": "CAB DRIVER",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 2,
    "from_char": "CAB DRIVER",
    "to_char": "LESLIE ARTZ",
    "val": 1
  },
  {
    "season": 6,
    "episode": 2,
    "from_char": "CAB DRIVER",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 2,
    "from_char": "CAB DRIVER",
    "to_char": "MARSHAL",
    "val": 1
  },
  {
    "season": 6,
    "episode": 2,
    "from_char": "CLAIRE",
    "to_char": "DETECTIVE RASMUSSEN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 2,
    "from_char": "CLAIRE",
    "to_char": "DETECTIVE RASMUSSEN.",
    "val": 1
  },
  {
    "season": 6,
    "episode": 2,
    "from_char": "CLAIRE",
    "to_char": "DOCTOR GOODSPEED",
    "val": 1
  },
  {
    "season": 6,
    "episode": 2,
    "from_char": "CLAIRE",
    "to_char": "KATE",
    "val": 6
  },
  {
    "season": 6,
    "episode": 2,
    "from_char": "CLAIRE",
    "to_char": "LESLIE ARTZ",
    "val": 1
  },
  {
    "season": 6,
    "episode": 2,
    "from_char": "CLAIRE",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 2,
    "from_char": "CLAIRE",
    "to_char": "MARSHAL",
    "val": 1
  },
  {
    "season": 6,
    "episode": 2,
    "from_char": "CLAIRE",
    "to_char": "MRS. BASKUM",
    "val": 1
  },
  {
    "season": 6,
    "episode": 2,
    "from_char": "CLAIRE",
    "to_char": "NURSE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 2,
    "from_char": "CLAIRE",
    "to_char": "NURSE 2",
    "val": 1
  },
  {
    "season": 6,
    "episode": 2,
    "from_char": "CLAIRE",
    "to_char": "PA VOICE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 2,
    "from_char": "DETECTIVE RASMUSSEN",
    "to_char": "DETECTIVE RASMUSSEN.",
    "val": 1
  },
  {
    "season": 6,
    "episode": 2,
    "from_char": "DETECTIVE RASMUSSEN",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 2,
    "from_char": "DETECTIVE RASMUSSEN",
    "to_char": "PA VOICE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 2,
    "from_char": "DETECTIVE RASMUSSEN.",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 2,
    "from_char": "DETECTIVE RASMUSSEN.",
    "to_char": "PA VOICE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 2,
    "from_char": "DOCTOR GOODSPEED",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 2,
    "from_char": "DOCTOR GOODSPEED",
    "to_char": "NURSE 2",
    "val": 1
  },
  {
    "season": 6,
    "episode": 2,
    "from_char": "DOGEN",
    "to_char": "JACK",
    "val": 2
  },
  {
    "season": 6,
    "episode": 2,
    "from_char": "DOGEN",
    "to_char": "LENNON",
    "val": 1
  },
  {
    "season": 6,
    "episode": 2,
    "from_char": "DOGEN",
    "to_char": "TEMPLE LEADER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 2,
    "from_char": "HURLEY",
    "to_char": "JACK",
    "val": 4
  },
  {
    "season": 6,
    "episode": 2,
    "from_char": "HURLEY",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 6,
    "episode": 2,
    "from_char": "HURLEY",
    "to_char": "LENNON",
    "val": 1
  },
  {
    "season": 6,
    "episode": 2,
    "from_char": "HURLEY",
    "to_char": "MILES",
    "val": 3
  },
  {
    "season": 6,
    "episode": 2,
    "from_char": "HURLEY",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 6,
    "episode": 2,
    "from_char": "HURLEY",
    "to_char": "SAYID",
    "val": 4
  },
  {
    "season": 6,
    "episode": 2,
    "from_char": "HURLEY",
    "to_char": "TEMPLE LEADER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 2,
    "from_char": "JACK",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 2,
    "from_char": "JACK",
    "to_char": "KATE",
    "val": 4
  },
  {
    "season": 6,
    "episode": 2,
    "from_char": "JACK",
    "to_char": "LENNON",
    "val": 4
  },
  {
    "season": 6,
    "episode": 2,
    "from_char": "JACK",
    "to_char": "MILES",
    "val": 3
  },
  {
    "season": 6,
    "episode": 2,
    "from_char": "JACK",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 6,
    "episode": 2,
    "from_char": "JACK",
    "to_char": "SAYID",
    "val": 4
  },
  {
    "season": 6,
    "episode": 2,
    "from_char": "JACK",
    "to_char": "TEMPLE LEADER",
    "val": 4
  },
  {
    "season": 6,
    "episode": 2,
    "from_char": "JIN",
    "to_char": "JUSTIN",
    "val": 2
  },
  {
    "season": 6,
    "episode": 2,
    "from_char": "JIN",
    "to_char": "KATE",
    "val": 3
  },
  {
    "season": 6,
    "episode": 2,
    "from_char": "JIN",
    "to_char": "LENNON",
    "val": 1
  },
  {
    "season": 6,
    "episode": 2,
    "from_char": "JIN",
    "to_char": "TEMPLE LEADER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 2,
    "from_char": "JUSTIN",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 2,
    "from_char": "KATE",
    "to_char": "LENNON",
    "val": 2
  },
  {
    "season": 6,
    "episode": 2,
    "from_char": "KATE",
    "to_char": "LESLIE ARTZ",
    "val": 1
  },
  {
    "season": 6,
    "episode": 2,
    "from_char": "KATE",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 2,
    "from_char": "KATE",
    "to_char": "MARSHAL",
    "val": 1
  },
  {
    "season": 6,
    "episode": 2,
    "from_char": "KATE",
    "to_char": "MILES",
    "val": 2
  },
  {
    "season": 6,
    "episode": 2,
    "from_char": "KATE",
    "to_char": "MRS. BASKUM",
    "val": 1
  },
  {
    "season": 6,
    "episode": 2,
    "from_char": "KATE",
    "to_char": "NURSE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 2,
    "from_char": "KATE",
    "to_char": "NURSE 2",
    "val": 1
  },
  {
    "season": 6,
    "episode": 2,
    "from_char": "KATE",
    "to_char": "PA VOICE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 2,
    "from_char": "KATE",
    "to_char": "REPAIRMAN",
    "val": 2
  },
  {
    "season": 6,
    "episode": 2,
    "from_char": "KATE",
    "to_char": "SAWYER",
    "val": 4
  },
  {
    "season": 6,
    "episode": 2,
    "from_char": "KATE",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 6,
    "episode": 2,
    "from_char": "KATE",
    "to_char": "TEMPLE LEADER",
    "val": 2
  },
  {
    "season": 6,
    "episode": 2,
    "from_char": "LENNON",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 6,
    "episode": 2,
    "from_char": "LENNON",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 2,
    "from_char": "LENNON",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 6,
    "episode": 2,
    "from_char": "LENNON",
    "to_char": "TEMPLE LEADER",
    "val": 4
  },
  {
    "season": 6,
    "episode": 2,
    "from_char": "LESLIE ARTZ",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 2,
    "from_char": "LESLIE ARTZ",
    "to_char": "MARSHAL",
    "val": 1
  },
  {
    "season": 6,
    "episode": 2,
    "from_char": "MAN",
    "to_char": "MARSHAL",
    "val": 1
  },
  {
    "season": 6,
    "episode": 2,
    "from_char": "MILES",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 6,
    "episode": 2,
    "from_char": "MILES",
    "to_char": "SAYID",
    "val": 3
  },
  {
    "season": 6,
    "episode": 2,
    "from_char": "MILES",
    "to_char": "TEMPLE LEADER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 2,
    "from_char": "SAWYER",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 6,
    "episode": 2,
    "from_char": "SAWYER",
    "to_char": "TEMPLE LEADER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 2,
    "from_char": "SAYID",
    "to_char": "TEMPLE LEADER",
    "val": 2
  },
  {
    "season": 6,
    "episode": 3,
    "from_char": "BEN",
    "to_char": "ILANA",
    "val": 3
  },
  {
    "season": 6,
    "episode": 3,
    "from_char": "BEN",
    "to_char": "JOHN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 3,
    "from_char": "BEN",
    "to_char": "LAPIDUS",
    "val": 1
  },
  {
    "season": 6,
    "episode": 3,
    "from_char": "BEN",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 3,
    "from_char": "BOY",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 3,
    "from_char": "BOY",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 3,
    "from_char": "HELEN",
    "to_char": "JOHN",
    "val": 3
  },
  {
    "season": 6,
    "episode": 3,
    "from_char": "HELEN",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 3,
    "from_char": "HELEN",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 3,
    "from_char": "HELEN",
    "to_char": "WOMEN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 3,
    "from_char": "HURLEY",
    "to_char": "JOHN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 3,
    "from_char": "ILANA",
    "to_char": "LAPIDUS",
    "val": 2
  },
  {
    "season": 6,
    "episode": 3,
    "from_char": "ILANA",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 3,
    "from_char": "JOHN",
    "to_char": "KID",
    "val": 1
  },
  {
    "season": 6,
    "episode": 3,
    "from_char": "JOHN",
    "to_char": "MAN",
    "val": 2
  },
  {
    "season": 6,
    "episode": 3,
    "from_char": "JOHN",
    "to_char": "RANDY",
    "val": 1
  },
  {
    "season": 6,
    "episode": 3,
    "from_char": "JOHN",
    "to_char": "ROSE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 3,
    "from_char": "JOHN",
    "to_char": "WOMAN",
    "val": 2
  },
  {
    "season": 6,
    "episode": 3,
    "from_char": "JOHN",
    "to_char": "WOMEN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 3,
    "from_char": "LAPIDUS",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 3,
    "from_char": "LOCKE",
    "to_char": "RICHARD",
    "val": 2
  },
  {
    "season": 6,
    "episode": 3,
    "from_char": "LOCKE",
    "to_char": "SAWYER",
    "val": 7
  },
  {
    "season": 6,
    "episode": 3,
    "from_char": "MAN",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 3,
    "from_char": "MAN",
    "to_char": "WOMEN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 3,
    "from_char": "RICHARD",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 3,
    "from_char": "ROSE",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 3,
    "from_char": "WOMAN",
    "to_char": "WOMEN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 4,
    "from_char": "ANSWERING MACHINE MESSAGE",
    "to_char": "DAVID",
    "val": 1
  },
  {
    "season": 6,
    "episode": 4,
    "from_char": "ANSWERING MACHINE MESSAGE",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 6,
    "episode": 4,
    "from_char": "CLAIRE",
    "to_char": "JIN",
    "val": 5
  },
  {
    "season": 6,
    "episode": 4,
    "from_char": "CLAIRE",
    "to_char": "JUSTIN",
    "val": 3
  },
  {
    "season": 6,
    "episode": 4,
    "from_char": "CLAIRE",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 4,
    "from_char": "DAVID",
    "to_char": "JACK",
    "val": 4
  },
  {
    "season": 6,
    "episode": 4,
    "from_char": "DAVID",
    "to_char": "MARGO",
    "val": 1
  },
  {
    "season": 6,
    "episode": 4,
    "from_char": "DOGEN",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 6,
    "episode": 4,
    "from_char": "DOGEN",
    "to_char": "JACK",
    "val": 2
  },
  {
    "season": 6,
    "episode": 4,
    "from_char": "DOGEN",
    "to_char": "JACOB",
    "val": 1
  },
  {
    "season": 6,
    "episode": 4,
    "from_char": "DOGEN",
    "to_char": "UNKNOWN BOY",
    "val": 1
  },
  {
    "season": 6,
    "episode": 4,
    "from_char": "HURLEY",
    "to_char": "JACK",
    "val": 7
  },
  {
    "season": 6,
    "episode": 4,
    "from_char": "HURLEY",
    "to_char": "JACOB",
    "val": 3
  },
  {
    "season": 6,
    "episode": 4,
    "from_char": "HURLEY",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 4,
    "from_char": "HURLEY",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 4,
    "from_char": "HURLEY",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 6,
    "episode": 4,
    "from_char": "JACK",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 4,
    "from_char": "JACK",
    "to_char": "MARGO",
    "val": 2
  },
  {
    "season": 6,
    "episode": 4,
    "from_char": "JACK",
    "to_char": "MRS SHEPARD",
    "val": 1
  },
  {
    "season": 6,
    "episode": 4,
    "from_char": "JACK",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 6,
    "episode": 4,
    "from_char": "JACK",
    "to_char": "UNKNOWN BOY",
    "val": 1
  },
  {
    "season": 6,
    "episode": 4,
    "from_char": "JACOB",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 4,
    "from_char": "JACOB",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 6,
    "episode": 4,
    "from_char": "JIN",
    "to_char": "JUSTIN",
    "val": 3
  },
  {
    "season": 6,
    "episode": 4,
    "from_char": "JIN",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 4,
    "from_char": "MAN",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 6,
    "episode": 5,
    "from_char": "BEN",
    "to_char": "ILANA",
    "val": 1
  },
  {
    "season": 6,
    "episode": 5,
    "from_char": "BEN",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 5,
    "from_char": "BEN",
    "to_char": "LAPIDUS",
    "val": 1
  },
  {
    "season": 6,
    "episode": 5,
    "from_char": "BEN",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 6,
    "episode": 5,
    "from_char": "BEN",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 6,
    "episode": 5,
    "from_char": "CABBIE",
    "to_char": "EVA",
    "val": 1
  },
  {
    "season": 6,
    "episode": 5,
    "from_char": "CABBIE",
    "to_char": "NADIA",
    "val": 1
  },
  {
    "season": 6,
    "episode": 5,
    "from_char": "CABBIE",
    "to_char": "OMER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 5,
    "from_char": "CABBIE",
    "to_char": "SAM",
    "val": 1
  },
  {
    "season": 6,
    "episode": 5,
    "from_char": "CABBIE",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 6,
    "episode": 5,
    "from_char": "CINDY",
    "to_char": "DOGEN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 5,
    "from_char": "CINDY",
    "to_char": "LENNON",
    "val": 1
  },
  {
    "season": 6,
    "episode": 5,
    "from_char": "CINDY",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 6,
    "episode": 5,
    "from_char": "CINDY",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 6,
    "episode": 5,
    "from_char": "CLAIRE",
    "to_char": "DOGEN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 5,
    "from_char": "CLAIRE",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 6,
    "episode": 5,
    "from_char": "CLAIRE",
    "to_char": "LENNON",
    "val": 2
  },
  {
    "season": 6,
    "episode": 5,
    "from_char": "CLAIRE",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 5,
    "from_char": "CLAIRE",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 6,
    "episode": 5,
    "from_char": "CLAIRE",
    "to_char": "RANDOM-OTHER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 5,
    "from_char": "CLAIRE",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 6,
    "episode": 5,
    "from_char": "DOCTOR",
    "to_char": "NADIA",
    "val": 1
  },
  {
    "season": 6,
    "episode": 5,
    "from_char": "DOCTOR",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 6,
    "episode": 5,
    "from_char": "DOGEN",
    "to_char": "LENNON",
    "val": 2
  },
  {
    "season": 6,
    "episode": 5,
    "from_char": "DOGEN",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 6,
    "episode": 5,
    "from_char": "DOGEN",
    "to_char": "RANDOM-OTHER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 5,
    "from_char": "DOGEN",
    "to_char": "SAYID",
    "val": 5
  },
  {
    "season": 6,
    "episode": 5,
    "from_char": "EVA",
    "to_char": "NADIA",
    "val": 2
  },
  {
    "season": 6,
    "episode": 5,
    "from_char": "EVA",
    "to_char": "OMER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 5,
    "from_char": "EVA",
    "to_char": "SAM",
    "val": 2
  },
  {
    "season": 6,
    "episode": 5,
    "from_char": "EVA",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 6,
    "episode": 5,
    "from_char": "ILANA",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 5,
    "from_char": "ILANA",
    "to_char": "LAPIDUS",
    "val": 2
  },
  {
    "season": 6,
    "episode": 5,
    "from_char": "ILANA",
    "to_char": "MILES",
    "val": 2
  },
  {
    "season": 6,
    "episode": 5,
    "from_char": "ILANA",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 5,
    "from_char": "JIN",
    "to_char": "KEAMY",
    "val": 1
  },
  {
    "season": 6,
    "episode": 5,
    "from_char": "JIN",
    "to_char": "OMAR",
    "val": 1
  },
  {
    "season": 6,
    "episode": 5,
    "from_char": "JIN",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 6,
    "episode": 5,
    "from_char": "KATE",
    "to_char": "LAPIDUS",
    "val": 1
  },
  {
    "season": 6,
    "episode": 5,
    "from_char": "KATE",
    "to_char": "LENNON",
    "val": 2
  },
  {
    "season": 6,
    "episode": 5,
    "from_char": "KATE",
    "to_char": "MILES",
    "val": 2
  },
  {
    "season": 6,
    "episode": 5,
    "from_char": "KATE",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 6,
    "episode": 5,
    "from_char": "KEAMY",
    "to_char": "OMAR",
    "val": 1
  },
  {
    "season": 6,
    "episode": 5,
    "from_char": "KEAMY",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 6,
    "episode": 5,
    "from_char": "LAPIDUS",
    "to_char": "MILES",
    "val": 2
  },
  {
    "season": 6,
    "episode": 5,
    "from_char": "LAPIDUS",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 5,
    "from_char": "LENNON",
    "to_char": "MILES",
    "val": 2
  },
  {
    "season": 6,
    "episode": 5,
    "from_char": "LENNON",
    "to_char": "RANDOM-OTHER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 5,
    "from_char": "LENNON",
    "to_char": "SAYID",
    "val": 3
  },
  {
    "season": 6,
    "episode": 5,
    "from_char": "LOCKE",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 6,
    "episode": 5,
    "from_char": "MILES",
    "to_char": "RANDOM-OTHER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 5,
    "from_char": "MILES",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 6,
    "episode": 5,
    "from_char": "MILES",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 5,
    "from_char": "NADIA",
    "to_char": "OMER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 5,
    "from_char": "NADIA",
    "to_char": "SAM",
    "val": 2
  },
  {
    "season": 6,
    "episode": 5,
    "from_char": "NADIA",
    "to_char": "SAYID",
    "val": 4
  },
  {
    "season": 6,
    "episode": 5,
    "from_char": "OMAR",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 6,
    "episode": 5,
    "from_char": "OMER",
    "to_char": "SAM",
    "val": 1
  },
  {
    "season": 6,
    "episode": 5,
    "from_char": "OMER",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 6,
    "episode": 5,
    "from_char": "RANDOM-OTHER",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 6,
    "episode": 5,
    "from_char": "SAM",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 6,
    "episode": 6,
    "from_char": "ALEX",
    "to_char": "ARZT",
    "val": 1
  },
  {
    "season": 6,
    "episode": 6,
    "from_char": "ALEX",
    "to_char": "BEN",
    "val": 3
  },
  {
    "season": 6,
    "episode": 6,
    "from_char": "ALEX",
    "to_char": "REYNOLDS",
    "val": 1
  },
  {
    "season": 6,
    "episode": 6,
    "from_char": "ALEX",
    "to_char": "ROGER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 6,
    "from_char": "ARZT",
    "to_char": "BEN",
    "val": 3
  },
  {
    "season": 6,
    "episode": 6,
    "from_char": "ARZT",
    "to_char": "JOHN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 6,
    "from_char": "ARZT",
    "to_char": "REYNOLDS",
    "val": 1
  },
  {
    "season": 6,
    "episode": 6,
    "from_char": "BEN",
    "to_char": "CREWMAN AT PERISCOPE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 6,
    "from_char": "BEN",
    "to_char": "ILANA",
    "val": 7
  },
  {
    "season": 6,
    "episode": 6,
    "from_char": "BEN",
    "to_char": "JOHN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 6,
    "from_char": "BEN",
    "to_char": "LAPIDUS",
    "val": 2
  },
  {
    "season": 6,
    "episode": 6,
    "from_char": "BEN",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 6,
    "from_char": "BEN",
    "to_char": "MILES",
    "val": 4
  },
  {
    "season": 6,
    "episode": 6,
    "from_char": "BEN",
    "to_char": "REYNOLDS",
    "val": 3
  },
  {
    "season": 6,
    "episode": 6,
    "from_char": "BEN",
    "to_char": "ROGER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 6,
    "from_char": "BEN",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 6,
    "episode": 6,
    "from_char": "BEN",
    "to_char": "WIDMORE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 6,
    "from_char": "CREWMAN AT PERISCOPE",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 6,
    "from_char": "CREWMAN AT PERISCOPE",
    "to_char": "WIDMORE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 6,
    "from_char": "HURLEY",
    "to_char": "JACK",
    "val": 5
  },
  {
    "season": 6,
    "episode": 6,
    "from_char": "HURLEY",
    "to_char": "RICHARD",
    "val": 4
  },
  {
    "season": 6,
    "episode": 6,
    "from_char": "ILANA",
    "to_char": "LAPIDUS",
    "val": 2
  },
  {
    "season": 6,
    "episode": 6,
    "from_char": "ILANA",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 6,
    "from_char": "ILANA",
    "to_char": "MILES",
    "val": 4
  },
  {
    "season": 6,
    "episode": 6,
    "from_char": "ILANA",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 6,
    "episode": 6,
    "from_char": "JACK",
    "to_char": "RICHARD",
    "val": 4
  },
  {
    "season": 6,
    "episode": 6,
    "from_char": "LAPIDUS",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 6,
    "episode": 6,
    "from_char": "MILES",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 6,
    "from_char": "SUN",
    "to_char": "WIDMORE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 7,
    "from_char": "AVA",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 6,
    "episode": 7,
    "from_char": "AVA",
    "to_char": "POLICE OFFICER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 7,
    "from_char": "AVA",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 7,
    "from_char": "CHARLES",
    "to_char": "LAURA",
    "val": 1
  },
  {
    "season": 6,
    "episode": 7,
    "from_char": "CHARLOTTE",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 6,
    "episode": 7,
    "from_char": "CHARLOTTE",
    "to_char": "SAWYER",
    "val": 4
  },
  {
    "season": 6,
    "episode": 7,
    "from_char": "CINDY",
    "to_char": "CLAIRE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 7,
    "from_char": "CINDY",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 7,
    "from_char": "CINDY",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 7,
    "from_char": "CINDY",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 7,
    "from_char": "CLAIRE",
    "to_char": "KATE",
    "val": 3
  },
  {
    "season": 6,
    "episode": 7,
    "from_char": "CLAIRE",
    "to_char": "LOCKE",
    "val": 2
  },
  {
    "season": 6,
    "episode": 7,
    "from_char": "CLAIRE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 7,
    "from_char": "CLAIRE",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 6,
    "episode": 7,
    "from_char": "JIN",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 7,
    "from_char": "JIN",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 7,
    "from_char": "KATE",
    "to_char": "LOCKE",
    "val": 4
  },
  {
    "season": 6,
    "episode": 7,
    "from_char": "KATE",
    "to_char": "SAWYER",
    "val": 3
  },
  {
    "season": 6,
    "episode": 7,
    "from_char": "KATE",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 6,
    "episode": 7,
    "from_char": "LIAM",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 6,
    "episode": 7,
    "from_char": "LIAM",
    "to_char": "OFFICER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 7,
    "from_char": "LIAM",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 7,
    "from_char": "LOCKE",
    "to_char": "SAWYER",
    "val": 3
  },
  {
    "season": 6,
    "episode": 7,
    "from_char": "LOCKE",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 6,
    "episode": 7,
    "from_char": "MAN",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 7,
    "from_char": "MAN",
    "to_char": "ZOE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 7,
    "from_char": "MILES",
    "to_char": "OFFICER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 7,
    "from_char": "MILES",
    "to_char": "POLICE OFFICER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 7,
    "from_char": "MILES",
    "to_char": "SAWYER",
    "val": 5
  },
  {
    "season": 6,
    "episode": 7,
    "from_char": "OFFICER",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 7,
    "from_char": "POLICE OFFICER",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 7,
    "from_char": "SAWYER",
    "to_char": "WIDMORE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 7,
    "from_char": "SAWYER",
    "to_char": "ZOE",
    "val": 4
  },
  {
    "season": 6,
    "episode": 7,
    "from_char": "WIDMORE",
    "to_char": "ZOE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 8,
    "from_char": "BEN",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 6,
    "episode": 8,
    "from_char": "BEN",
    "to_char": "ILANA",
    "val": 1
  },
  {
    "season": 6,
    "episode": 8,
    "from_char": "BEN",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 6,
    "episode": 8,
    "from_char": "BEN",
    "to_char": "LAPIDUS",
    "val": 1
  },
  {
    "season": 6,
    "episode": 8,
    "from_char": "BEN",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 8,
    "from_char": "DOCTOR",
    "to_char": "RICHARD",
    "val": 1
  },
  {
    "season": 6,
    "episode": 8,
    "from_char": "DOCTOR",
    "to_char": "SERVANT",
    "val": 1
  },
  {
    "season": 6,
    "episode": 8,
    "from_char": "FATHER SUAREZ",
    "to_char": "JONAS",
    "val": 1
  },
  {
    "season": 6,
    "episode": 8,
    "from_char": "FATHER SUAREZ",
    "to_char": "PRIEST",
    "val": 1
  },
  {
    "season": 6,
    "episode": 8,
    "from_char": "FATHER SUAREZ",
    "to_char": "RICHARD",
    "val": 2
  },
  {
    "season": 6,
    "episode": 8,
    "from_char": "HURLEY",
    "to_char": "ILANA",
    "val": 2
  },
  {
    "season": 6,
    "episode": 8,
    "from_char": "HURLEY",
    "to_char": "ISABELLA",
    "val": 1
  },
  {
    "season": 6,
    "episode": 8,
    "from_char": "HURLEY",
    "to_char": "JACK",
    "val": 2
  },
  {
    "season": 6,
    "episode": 8,
    "from_char": "HURLEY",
    "to_char": "JACOB",
    "val": 1
  },
  {
    "season": 6,
    "episode": 8,
    "from_char": "HURLEY",
    "to_char": "LAPIDUS",
    "val": 2
  },
  {
    "season": 6,
    "episode": 8,
    "from_char": "HURLEY",
    "to_char": "RICHARD",
    "val": 2
  },
  {
    "season": 6,
    "episode": 8,
    "from_char": "HURLEY",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 6,
    "episode": 8,
    "from_char": "IGNACIO",
    "to_char": "JONAS",
    "val": 1
  },
  {
    "season": 6,
    "episode": 8,
    "from_char": "IGNACIO",
    "to_char": "OTHER PRISONER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 8,
    "from_char": "IGNACIO",
    "to_char": "OTHER VOICE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 8,
    "from_char": "IGNACIO",
    "to_char": "PIERCE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 8,
    "from_char": "IGNACIO",
    "to_char": "RICHARD",
    "val": 2
  },
  {
    "season": 6,
    "episode": 8,
    "from_char": "IGNACIO",
    "to_char": "VOICE FROM OUTSIDE THE SHIP",
    "val": 1
  },
  {
    "season": 6,
    "episode": 8,
    "from_char": "ILANA",
    "to_char": "JACK",
    "val": 2
  },
  {
    "season": 6,
    "episode": 8,
    "from_char": "ILANA",
    "to_char": "JACOB",
    "val": 2
  },
  {
    "season": 6,
    "episode": 8,
    "from_char": "ILANA",
    "to_char": "LAPIDUS",
    "val": 2
  },
  {
    "season": 6,
    "episode": 8,
    "from_char": "ILANA",
    "to_char": "RICHARD",
    "val": 1
  },
  {
    "season": 6,
    "episode": 8,
    "from_char": "ILANA",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 6,
    "episode": 8,
    "from_char": "ISABELA",
    "to_char": "ISABELLA",
    "val": 1
  },
  {
    "season": 6,
    "episode": 8,
    "from_char": "ISABELA",
    "to_char": "RICHARD",
    "val": 1
  },
  {
    "season": 6,
    "episode": 8,
    "from_char": "ISABELLA",
    "to_char": "RICARDO",
    "val": 1
  },
  {
    "season": 6,
    "episode": 8,
    "from_char": "ISABELLA",
    "to_char": "RICHARD",
    "val": 3
  },
  {
    "season": 6,
    "episode": 8,
    "from_char": "JACK",
    "to_char": "JACOB",
    "val": 1
  },
  {
    "season": 6,
    "episode": 8,
    "from_char": "JACK",
    "to_char": "LAPIDUS",
    "val": 2
  },
  {
    "season": 6,
    "episode": 8,
    "from_char": "JACK",
    "to_char": "RICHARD",
    "val": 1
  },
  {
    "season": 6,
    "episode": 8,
    "from_char": "JACK",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 6,
    "episode": 8,
    "from_char": "JACOB",
    "to_char": "LAPIDUS",
    "val": 1
  },
  {
    "season": 6,
    "episode": 8,
    "from_char": "JACOB",
    "to_char": "MAN IN BLACK",
    "val": 1
  },
  {
    "season": 6,
    "episode": 8,
    "from_char": "JACOB",
    "to_char": "RICHARD",
    "val": 3
  },
  {
    "season": 6,
    "episode": 8,
    "from_char": "JACOB",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 8,
    "from_char": "JONAS",
    "to_char": "OTHER PRISONER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 8,
    "from_char": "JONAS",
    "to_char": "OTHER VOICE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 8,
    "from_char": "JONAS",
    "to_char": "PIERCE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 8,
    "from_char": "JONAS",
    "to_char": "PRIEST",
    "val": 1
  },
  {
    "season": 6,
    "episode": 8,
    "from_char": "JONAS",
    "to_char": "RICHARD",
    "val": 2
  },
  {
    "season": 6,
    "episode": 8,
    "from_char": "JONAS",
    "to_char": "VOICE FROM OUTSIDE THE SHIP",
    "val": 1
  },
  {
    "season": 6,
    "episode": 8,
    "from_char": "LAPIDUS",
    "to_char": "RICHARD",
    "val": 1
  },
  {
    "season": 6,
    "episode": 8,
    "from_char": "LAPIDUS",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 6,
    "episode": 8,
    "from_char": "MAN IN BLACK",
    "to_char": "RICHARD",
    "val": 3
  },
  {
    "season": 6,
    "episode": 8,
    "from_char": "OTHER PRISONER",
    "to_char": "OTHER VOICE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 8,
    "from_char": "OTHER PRISONER",
    "to_char": "PIERCE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 8,
    "from_char": "OTHER PRISONER",
    "to_char": "RICHARD",
    "val": 1
  },
  {
    "season": 6,
    "episode": 8,
    "from_char": "OTHER PRISONER",
    "to_char": "VOICE FROM OUTSIDE THE SHIP",
    "val": 1
  },
  {
    "season": 6,
    "episode": 8,
    "from_char": "OTHER VOICE",
    "to_char": "PIERCE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 8,
    "from_char": "OTHER VOICE",
    "to_char": "RICHARD",
    "val": 1
  },
  {
    "season": 6,
    "episode": 8,
    "from_char": "OTHER VOICE",
    "to_char": "VOICE FROM OUTSIDE THE SHIP",
    "val": 1
  },
  {
    "season": 6,
    "episode": 8,
    "from_char": "PIERCE",
    "to_char": "RICHARD",
    "val": 1
  },
  {
    "season": 6,
    "episode": 8,
    "from_char": "PIERCE",
    "to_char": "VOICE FROM OUTSIDE THE SHIP",
    "val": 1
  },
  {
    "season": 6,
    "episode": 8,
    "from_char": "PRIEST",
    "to_char": "RICHARD",
    "val": 1
  },
  {
    "season": 6,
    "episode": 8,
    "from_char": "RICARDO",
    "to_char": "RICHARD",
    "val": 1
  },
  {
    "season": 6,
    "episode": 8,
    "from_char": "RICHARD",
    "to_char": "SERVANT",
    "val": 1
  },
  {
    "season": 6,
    "episode": 8,
    "from_char": "RICHARD",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 8,
    "from_char": "RICHARD",
    "to_char": "VOICE FROM OUTSIDE THE SHIP",
    "val": 1
  },
  {
    "season": 6,
    "episode": 9,
    "from_char": "BANK CLERK",
    "to_char": "MIKHAIL",
    "val": 1
  },
  {
    "season": 6,
    "episode": 9,
    "from_char": "BANK CLERK",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 9,
    "from_char": "BEN",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 6,
    "episode": 9,
    "from_char": "BEN",
    "to_char": "ILANA",
    "val": 3
  },
  {
    "season": 6,
    "episode": 9,
    "from_char": "BEN",
    "to_char": "JACK",
    "val": 2
  },
  {
    "season": 6,
    "episode": 9,
    "from_char": "BEN",
    "to_char": "LAPIDUS",
    "val": 3
  },
  {
    "season": 6,
    "episode": 9,
    "from_char": "BEN",
    "to_char": "MILES",
    "val": 3
  },
  {
    "season": 6,
    "episode": 9,
    "from_char": "BEN",
    "to_char": "RICHARD",
    "val": 2
  },
  {
    "season": 6,
    "episode": 9,
    "from_char": "BEN",
    "to_char": "SUN",
    "val": 3
  },
  {
    "season": 6,
    "episode": 9,
    "from_char": "CLAIRE",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 9,
    "from_char": "CLAIRE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 9,
    "from_char": "CLAIRE",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 6,
    "episode": 9,
    "from_char": "CLERK",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 9,
    "from_char": "CLERK",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 9,
    "from_char": "HURLEY",
    "to_char": "ILANA",
    "val": 1
  },
  {
    "season": 6,
    "episode": 9,
    "from_char": "HURLEY",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 6,
    "episode": 9,
    "from_char": "HURLEY",
    "to_char": "LAPIDUS",
    "val": 1
  },
  {
    "season": 6,
    "episode": 9,
    "from_char": "HURLEY",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 6,
    "episode": 9,
    "from_char": "HURLEY",
    "to_char": "RICHARD",
    "val": 1
  },
  {
    "season": 6,
    "episode": 9,
    "from_char": "HURLEY",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 9,
    "from_char": "ILANA",
    "to_char": "JACK",
    "val": 2
  },
  {
    "season": 6,
    "episode": 9,
    "from_char": "ILANA",
    "to_char": "LAPIDUS",
    "val": 3
  },
  {
    "season": 6,
    "episode": 9,
    "from_char": "ILANA",
    "to_char": "MILES",
    "val": 3
  },
  {
    "season": 6,
    "episode": 9,
    "from_char": "ILANA",
    "to_char": "RICHARD",
    "val": 2
  },
  {
    "season": 6,
    "episode": 9,
    "from_char": "ILANA",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 6,
    "episode": 9,
    "from_char": "JACK",
    "to_char": "LAPIDUS",
    "val": 2
  },
  {
    "season": 6,
    "episode": 9,
    "from_char": "JACK",
    "to_char": "MILES",
    "val": 2
  },
  {
    "season": 6,
    "episode": 9,
    "from_char": "JACK",
    "to_char": "RICHARD",
    "val": 2
  },
  {
    "season": 6,
    "episode": 9,
    "from_char": "JACK",
    "to_char": "SUN",
    "val": 3
  },
  {
    "season": 6,
    "episode": 9,
    "from_char": "JIN",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 9,
    "from_char": "JIN",
    "to_char": "KEAMY",
    "val": 5
  },
  {
    "season": 6,
    "episode": 9,
    "from_char": "JIN",
    "to_char": "LOCKE",
    "val": 2
  },
  {
    "season": 6,
    "episode": 9,
    "from_char": "JIN",
    "to_char": "MIKHAIL",
    "val": 2
  },
  {
    "season": 6,
    "episode": 9,
    "from_char": "JIN",
    "to_char": "OMAR",
    "val": 2
  },
  {
    "season": 6,
    "episode": 9,
    "from_char": "JIN",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 6,
    "episode": 9,
    "from_char": "JIN",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 6,
    "episode": 9,
    "from_char": "JIN",
    "to_char": "SEAMUS",
    "val": 1
  },
  {
    "season": 6,
    "episode": 9,
    "from_char": "JIN",
    "to_char": "SECURITY OFFICER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 9,
    "from_char": "JIN",
    "to_char": "SUN",
    "val": 7
  },
  {
    "season": 6,
    "episode": 9,
    "from_char": "JIN",
    "to_char": "WIDMORE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 9,
    "from_char": "JIN",
    "to_char": "ZOE",
    "val": 3
  },
  {
    "season": 6,
    "episode": 9,
    "from_char": "KATE",
    "to_char": "LOCKE",
    "val": 2
  },
  {
    "season": 6,
    "episode": 9,
    "from_char": "KATE",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 6,
    "episode": 9,
    "from_char": "KEAMY",
    "to_char": "MIKHAIL",
    "val": 2
  },
  {
    "season": 6,
    "episode": 9,
    "from_char": "KEAMY",
    "to_char": "OMAR",
    "val": 2
  },
  {
    "season": 6,
    "episode": 9,
    "from_char": "KEAMY",
    "to_char": "SUN",
    "val": 4
  },
  {
    "season": 6,
    "episode": 9,
    "from_char": "LAPIDUS",
    "to_char": "MILES",
    "val": 3
  },
  {
    "season": 6,
    "episode": 9,
    "from_char": "LAPIDUS",
    "to_char": "RICHARD",
    "val": 2
  },
  {
    "season": 6,
    "episode": 9,
    "from_char": "LAPIDUS",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 6,
    "episode": 9,
    "from_char": "LOCKE",
    "to_char": "MEN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 9,
    "from_char": "LOCKE",
    "to_char": "SAWYER",
    "val": 4
  },
  {
    "season": 6,
    "episode": 9,
    "from_char": "LOCKE",
    "to_char": "SAYID",
    "val": 3
  },
  {
    "season": 6,
    "episode": 9,
    "from_char": "LOCKE",
    "to_char": "SEAMUS",
    "val": 2
  },
  {
    "season": 6,
    "episode": 9,
    "from_char": "LOCKE",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 9,
    "from_char": "LOCKE",
    "to_char": "WIDMORE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 9,
    "from_char": "LOCKE",
    "to_char": "ZOE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 9,
    "from_char": "MEN",
    "to_char": "SEAMUS",
    "val": 1
  },
  {
    "season": 6,
    "episode": 9,
    "from_char": "MEN",
    "to_char": "WIDMORE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 9,
    "from_char": "MIKHAIL",
    "to_char": "SUN",
    "val": 3
  },
  {
    "season": 6,
    "episode": 9,
    "from_char": "MILES",
    "to_char": "RICHARD",
    "val": 2
  },
  {
    "season": 6,
    "episode": 9,
    "from_char": "MILES",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 6,
    "episode": 9,
    "from_char": "OMAR",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 9,
    "from_char": "RICHARD",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 6,
    "episode": 9,
    "from_char": "SAWYER",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 6,
    "episode": 9,
    "from_char": "SAWYER",
    "to_char": "SEAMUS",
    "val": 1
  },
  {
    "season": 6,
    "episode": 9,
    "from_char": "SAWYER",
    "to_char": "ZOE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 9,
    "from_char": "SAYID",
    "to_char": "SEAMUS",
    "val": 1
  },
  {
    "season": 6,
    "episode": 9,
    "from_char": "SAYID",
    "to_char": "ZOE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 9,
    "from_char": "SEAMUS",
    "to_char": "WIDMORE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 9,
    "from_char": "SEAMUS",
    "to_char": "ZOE",
    "val": 2
  },
  {
    "season": 6,
    "episode": 9,
    "from_char": "SECURITY OFFICER",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 9,
    "from_char": "WIDMORE",
    "to_char": "ZOE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 10,
    "from_char": "CHARLIE",
    "to_char": "DESMOND",
    "val": 3
  },
  {
    "season": 6,
    "episode": 10,
    "from_char": "CHARLIE",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 6,
    "episode": 10,
    "from_char": "CHARLIE",
    "to_char": "NURSE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 10,
    "from_char": "CHARLIE",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 10,
    "from_char": "CLAIRE",
    "to_char": "DESMOND",
    "val": 1
  },
  {
    "season": 6,
    "episode": 10,
    "from_char": "CLAIRE",
    "to_char": "GEORGE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 10,
    "from_char": "CLAIRE",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 6,
    "episode": 10,
    "from_char": "DANIEL",
    "to_char": "DESMOND",
    "val": 2
  },
  {
    "season": 6,
    "episode": 10,
    "from_char": "DANIEL",
    "to_char": "GEORGE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 10,
    "from_char": "DESMOND",
    "to_char": "DOCTOR",
    "val": 1
  },
  {
    "season": 6,
    "episode": 10,
    "from_char": "DESMOND",
    "to_char": "DRIVER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 10,
    "from_char": "DESMOND",
    "to_char": "ELOISE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 10,
    "from_char": "DESMOND",
    "to_char": "GEORGE",
    "val": 4
  },
  {
    "season": 6,
    "episode": 10,
    "from_char": "DESMOND",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 6,
    "episode": 10,
    "from_char": "DESMOND",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 6,
    "episode": 10,
    "from_char": "DESMOND",
    "to_char": "JIN",
    "val": 2
  },
  {
    "season": 6,
    "episode": 10,
    "from_char": "DESMOND",
    "to_char": "LAWYER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 10,
    "from_char": "DESMOND",
    "to_char": "MAN",
    "val": 3
  },
  {
    "season": 6,
    "episode": 10,
    "from_char": "DESMOND",
    "to_char": "NURSE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 10,
    "from_char": "DESMOND",
    "to_char": "PENNY",
    "val": 2
  },
  {
    "season": 6,
    "episode": 10,
    "from_char": "DESMOND",
    "to_char": "RECEPTIONIST",
    "val": 1
  },
  {
    "season": 6,
    "episode": 10,
    "from_char": "DESMOND",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 6,
    "episode": 10,
    "from_char": "DESMOND",
    "to_char": "SEAMUS",
    "val": 2
  },
  {
    "season": 6,
    "episode": 10,
    "from_char": "DESMOND",
    "to_char": "TECHNICIAN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 10,
    "from_char": "DESMOND",
    "to_char": "TEHCNICIAN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 10,
    "from_char": "DESMOND",
    "to_char": "WAITER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 10,
    "from_char": "DESMOND",
    "to_char": "WIDMORE",
    "val": 6
  },
  {
    "season": 6,
    "episode": 10,
    "from_char": "DESMOND",
    "to_char": "WIDMORE'S MAN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 10,
    "from_char": "DESMOND",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 10,
    "from_char": "DESMOND",
    "to_char": "ZOE",
    "val": 2
  },
  {
    "season": 6,
    "episode": 10,
    "from_char": "DRIVER",
    "to_char": "LAWYER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 10,
    "from_char": "ELOISE",
    "to_char": "GEORGE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 10,
    "from_char": "ELOISE",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 10,
    "from_char": "ELOISE",
    "to_char": "WAITER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 10,
    "from_char": "GEORGE",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 6,
    "episode": 10,
    "from_char": "GEORGE",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 10,
    "from_char": "GEORGE",
    "to_char": "WAITER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 10,
    "from_char": "JACK",
    "to_char": "NURSE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 10,
    "from_char": "JACK",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 10,
    "from_char": "JIN",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 10,
    "from_char": "JIN",
    "to_char": "SEAMUS",
    "val": 2
  },
  {
    "season": 6,
    "episode": 10,
    "from_char": "JIN",
    "to_char": "SIMMONS",
    "val": 1
  },
  {
    "season": 6,
    "episode": 10,
    "from_char": "JIN",
    "to_char": "UNKNOWN TECHNICIAN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 10,
    "from_char": "JIN",
    "to_char": "UNKNOWN VOICE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 10,
    "from_char": "JIN",
    "to_char": "WIDMORE",
    "val": 3
  },
  {
    "season": 6,
    "episode": 10,
    "from_char": "JIN",
    "to_char": "WIDMORE'S MAN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 10,
    "from_char": "JIN",
    "to_char": "ZOE",
    "val": 2
  },
  {
    "season": 6,
    "episode": 10,
    "from_char": "MAN",
    "to_char": "SEAMUS",
    "val": 2
  },
  {
    "season": 6,
    "episode": 10,
    "from_char": "MAN",
    "to_char": "WAITER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 10,
    "from_char": "MAN",
    "to_char": "WIDMORE",
    "val": 2
  },
  {
    "season": 6,
    "episode": 10,
    "from_char": "MAN",
    "to_char": "WIDMORE'S MAN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 10,
    "from_char": "NURSE",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 10,
    "from_char": "RECEPTIONIST",
    "to_char": "WIDMORE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 10,
    "from_char": "SAYID",
    "to_char": "ZOE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 10,
    "from_char": "SEAMUS",
    "to_char": "SIMMONS",
    "val": 1
  },
  {
    "season": 6,
    "episode": 10,
    "from_char": "SEAMUS",
    "to_char": "UNKNOWN TECHNICIAN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 10,
    "from_char": "SEAMUS",
    "to_char": "UNKNOWN VOICE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 10,
    "from_char": "SEAMUS",
    "to_char": "WIDMORE",
    "val": 3
  },
  {
    "season": 6,
    "episode": 10,
    "from_char": "SEAMUS",
    "to_char": "WIDMORE'S MAN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 10,
    "from_char": "SEAMUS",
    "to_char": "ZOE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 10,
    "from_char": "SIMMONS",
    "to_char": "UNKNOWN TECHNICIAN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 10,
    "from_char": "SIMMONS",
    "to_char": "UNKNOWN VOICE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 10,
    "from_char": "SIMMONS",
    "to_char": "WIDMORE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 10,
    "from_char": "SIMMONS",
    "to_char": "ZOE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 10,
    "from_char": "TECHNICIAN",
    "to_char": "TEHCNICIAN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 10,
    "from_char": "UNKNOWN TECHNICIAN",
    "to_char": "UNKNOWN VOICE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 10,
    "from_char": "UNKNOWN TECHNICIAN",
    "to_char": "WIDMORE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 10,
    "from_char": "UNKNOWN TECHNICIAN",
    "to_char": "ZOE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 10,
    "from_char": "UNKNOWN VOICE",
    "to_char": "WIDMORE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 10,
    "from_char": "UNKNOWN VOICE",
    "to_char": "ZOE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 10,
    "from_char": "WIDMORE",
    "to_char": "WIDMORE'S MAN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 10,
    "from_char": "WIDMORE",
    "to_char": "ZOE",
    "val": 2
  },
  {
    "season": 6,
    "episode": 11,
    "from_char": "BEN",
    "to_char": "DESMOND",
    "val": 1
  },
  {
    "season": 6,
    "episode": 11,
    "from_char": "BEN",
    "to_char": "HURLEY",
    "val": 3
  },
  {
    "season": 6,
    "episode": 11,
    "from_char": "BEN",
    "to_char": "JACK",
    "val": 3
  },
  {
    "season": 6,
    "episode": 11,
    "from_char": "BEN",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 6,
    "episode": 11,
    "from_char": "BEN",
    "to_char": "RICHARD",
    "val": 3
  },
  {
    "season": 6,
    "episode": 11,
    "from_char": "CARMEN",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 6,
    "episode": 11,
    "from_char": "CASHIER",
    "to_char": "DESMOND",
    "val": 1
  },
  {
    "season": 6,
    "episode": 11,
    "from_char": "CASHIER",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 6,
    "episode": 11,
    "from_char": "CASHIER",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 11,
    "from_char": "DESMOND",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 6,
    "episode": 11,
    "from_char": "DESMOND",
    "to_char": "LOCKE",
    "val": 3
  },
  {
    "season": 6,
    "episode": 11,
    "from_char": "DESMOND",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 6,
    "episode": 11,
    "from_char": "DESMOND",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 11,
    "from_char": "DR. BROOKS",
    "to_char": "HURLEY",
    "val": 2
  },
  {
    "season": 6,
    "episode": 11,
    "from_char": "DR. BROOKS",
    "to_char": "LIBBY",
    "val": 1
  },
  {
    "season": 6,
    "episode": 11,
    "from_char": "DR. BROOKS",
    "to_char": "WAITER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 11,
    "from_char": "HURLEY",
    "to_char": "ILANA",
    "val": 2
  },
  {
    "season": 6,
    "episode": 11,
    "from_char": "HURLEY",
    "to_char": "JACK",
    "val": 6
  },
  {
    "season": 6,
    "episode": 11,
    "from_char": "HURLEY",
    "to_char": "LAPIDUS",
    "val": 1
  },
  {
    "season": 6,
    "episode": 11,
    "from_char": "HURLEY",
    "to_char": "LIBBY",
    "val": 3
  },
  {
    "season": 6,
    "episode": 11,
    "from_char": "HURLEY",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 11,
    "from_char": "HURLEY",
    "to_char": "MICHAEL",
    "val": 3
  },
  {
    "season": 6,
    "episode": 11,
    "from_char": "HURLEY",
    "to_char": "MILES",
    "val": 2
  },
  {
    "season": 6,
    "episode": 11,
    "from_char": "HURLEY",
    "to_char": "RICHARD",
    "val": 5
  },
  {
    "season": 6,
    "episode": 11,
    "from_char": "HURLEY",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 11,
    "from_char": "HURLEY",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 6,
    "episode": 11,
    "from_char": "HURLEY",
    "to_char": "WAITER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 11,
    "from_char": "HURLEY",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 11,
    "from_char": "ILANA",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 6,
    "episode": 11,
    "from_char": "ILANA",
    "to_char": "RICHARD",
    "val": 1
  },
  {
    "season": 6,
    "episode": 11,
    "from_char": "JACK",
    "to_char": "LAPIDUS",
    "val": 1
  },
  {
    "season": 6,
    "episode": 11,
    "from_char": "JACK",
    "to_char": "MICHAEL",
    "val": 2
  },
  {
    "season": 6,
    "episode": 11,
    "from_char": "JACK",
    "to_char": "MILES",
    "val": 2
  },
  {
    "season": 6,
    "episode": 11,
    "from_char": "JACK",
    "to_char": "RICHARD",
    "val": 4
  },
  {
    "season": 6,
    "episode": 11,
    "from_char": "KATE",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 11,
    "from_char": "KATE",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 11,
    "from_char": "KATE",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 11,
    "from_char": "KATE",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 6,
    "episode": 11,
    "from_char": "LAPIDUS",
    "to_char": "MICHAEL",
    "val": 1
  },
  {
    "season": 6,
    "episode": 11,
    "from_char": "LIBBY",
    "to_char": "WAITER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 11,
    "from_char": "LOCKE",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 11,
    "from_char": "LOCKE",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 6,
    "episode": 11,
    "from_char": "LOCKE",
    "to_char": "SAYID",
    "val": 3
  },
  {
    "season": 6,
    "episode": 11,
    "from_char": "MAN",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 11,
    "from_char": "MAN",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 6,
    "episode": 11,
    "from_char": "MILES",
    "to_char": "RICHARD",
    "val": 2
  },
  {
    "season": 6,
    "episode": 11,
    "from_char": "SAWYER",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "BEN",
    "to_char": "EMT #1",
    "val": 1
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "BEN",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "BEN",
    "to_char": "MAN ON RADIO",
    "val": 1
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "CINDY",
    "to_char": "CLAIRE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "CINDY",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "CINDY",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "CINDY",
    "to_char": "JACKS",
    "val": 1
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "CINDY",
    "to_char": "LAPIDUS",
    "val": 1
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "CINDY",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "CLAIRE",
    "to_char": "DAVID",
    "val": 1
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "CLAIRE",
    "to_char": "DESMOND",
    "val": 1
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "CLAIRE",
    "to_char": "HURLEY",
    "val": 4
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "CLAIRE",
    "to_char": "ILANA",
    "val": 2
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "CLAIRE",
    "to_char": "JACK",
    "val": 5
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "CLAIRE",
    "to_char": "JACKS",
    "val": 1
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "CLAIRE",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "CLAIRE",
    "to_char": "LAPIDUS",
    "val": 2
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "CLAIRE",
    "to_char": "LOCKE",
    "val": 4
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "CLAIRE",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "CLAIRE",
    "to_char": "RECEPTIONIST",
    "val": 1
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "CLAIRE",
    "to_char": "SAWYER",
    "val": 3
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "DAVID",
    "to_char": "ILANA",
    "val": 1
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "DAVID",
    "to_char": "JACK",
    "val": 3
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "DAVID",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "DAVID",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "DESMOND",
    "to_char": "ILANA",
    "val": 1
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "DESMOND",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "DESMOND",
    "to_char": "RECEPTIONIST",
    "val": 1
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "DESMOND",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "EMT #1",
    "to_char": "EMT #2",
    "val": 1
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "EMT #1",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "EMT #1",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "EMT #1",
    "to_char": "MAN ON RADIO",
    "val": 1
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "EMT #1",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "EMT #2",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "EMT #2",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "FEMALE SURGEON",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "HURLEY",
    "to_char": "JACK",
    "val": 5
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "HURLEY",
    "to_char": "JACKS",
    "val": 1
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "HURLEY",
    "to_char": "KATE",
    "val": 3
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "HURLEY",
    "to_char": "LAPIDUS",
    "val": 2
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "HURLEY",
    "to_char": "LOCKE",
    "val": 5
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "HURLEY",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "HURLEY",
    "to_char": "SAWYER",
    "val": 4
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "HURLEY",
    "to_char": "ZOE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "ILANA",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "ILANA",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "ILANA",
    "to_char": "RECEPTIONIST",
    "val": 1
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "JACK",
    "to_char": "JACKS",
    "val": 1
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "JACK",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "JACK",
    "to_char": "KATE",
    "val": 4
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "JACK",
    "to_char": "LAPIDUS",
    "val": 3
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "JACK",
    "to_char": "LOCKE",
    "val": 7
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "JACK",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "JACK",
    "to_char": "SAWYER",
    "val": 4
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "JACK",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "JACK",
    "to_char": "ZOE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "JACKS",
    "to_char": "LAPIDUS",
    "val": 1
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "JACKS",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "JIN",
    "to_char": "LAPIDUS",
    "val": 1
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "JIN",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "JIN",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "JIN",
    "to_char": "SUN",
    "val": 3
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "JIN",
    "to_char": "ZOE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "KATE",
    "to_char": "LAPIDUS",
    "val": 2
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "KATE",
    "to_char": "LOCKE",
    "val": 2
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "KATE",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "KATE",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "KATE",
    "to_char": "SAWYER",
    "val": 6
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "KATE",
    "to_char": "ZOE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "LAPIDUS",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "LAPIDUS",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "LAPIDUS",
    "to_char": "SAWYER",
    "val": 3
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "LAPIDUS",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "LAPIDUS",
    "to_char": "ZOE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "LOCKE",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "LOCKE",
    "to_char": "MAN ON RADIO",
    "val": 1
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "LOCKE",
    "to_char": "SAWYER",
    "val": 3
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "LOCKE",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "LOCKE",
    "to_char": "ZOE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "MAN",
    "to_char": "RECEPTIONIST",
    "val": 1
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "MAN",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "MAN",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "MAN",
    "to_char": "ZOE",
    "val": 2
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "MILES",
    "to_char": "NADIA",
    "val": 1
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "MILES",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "MILES",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "NADIA",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "NADIA",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "SAWYER",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "SAWYER",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "SAWYER",
    "to_char": "ZOE",
    "val": 2
  },
  {
    "season": 6,
    "episode": 12,
    "from_char": "SUN",
    "to_char": "ZOE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "ALL",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "ALL",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "ALL",
    "to_char": "JIN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "ALL",
    "to_char": "LAPIDUS",
    "val": 1
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "ALL",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "ALL",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "ALL",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "BERNARD",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "CLAIRE",
    "to_char": "HURLEY",
    "val": 2
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "CLAIRE",
    "to_char": "JACK",
    "val": 4
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "CLAIRE",
    "to_char": "JIN",
    "val": 2
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "CLAIRE",
    "to_char": "JOHN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "CLAIRE",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "CLAIRE",
    "to_char": "LAPIDUS",
    "val": 2
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "CLAIRE",
    "to_char": "LOCKE",
    "val": 3
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "CLAIRE",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "CLAIRE",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "CLAIRE",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "CLAIRE",
    "to_char": "WHEELER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "CLAIRE",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "HELEN",
    "to_char": "JACK",
    "val": 2
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "HELEN",
    "to_char": "JOHN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "HELEN",
    "to_char": "NURSE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "HURLEY",
    "to_char": "JACK",
    "val": 5
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "HURLEY",
    "to_char": "JIN",
    "val": 4
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "HURLEY",
    "to_char": "KATE",
    "val": 3
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "HURLEY",
    "to_char": "LAPIDUS",
    "val": 4
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "HURLEY",
    "to_char": "LOCKE",
    "val": 2
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "HURLEY",
    "to_char": "MAN",
    "val": 2
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "HURLEY",
    "to_char": "PAUL",
    "val": 1
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "HURLEY",
    "to_char": "SAWYER",
    "val": 4
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "HURLEY",
    "to_char": "SAYID",
    "val": 3
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "HURLEY",
    "to_char": "SEAMUS",
    "val": 1
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "HURLEY",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "HURLEY",
    "to_char": "WHEELER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "JACK",
    "to_char": "JIN",
    "val": 4
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "JACK",
    "to_char": "JOHN",
    "val": 3
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "JACK",
    "to_char": "KATE",
    "val": 4
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "JACK",
    "to_char": "LAPIDUS",
    "val": 5
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "JACK",
    "to_char": "LOCKE",
    "val": 3
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "JACK",
    "to_char": "MAN",
    "val": 2
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "JACK",
    "to_char": "NURSE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "JACK",
    "to_char": "ORDERLY",
    "val": 1
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "JACK",
    "to_char": "PAUL",
    "val": 1
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "JACK",
    "to_char": "SAWYER",
    "val": 5
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "JACK",
    "to_char": "SAYID",
    "val": 5
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "JACK",
    "to_char": "SEAMUS",
    "val": 1
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "JACK",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "JACK",
    "to_char": "WHEELER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "JACK",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "JIN",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "JIN",
    "to_char": "LAPIDUS",
    "val": 4
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "JIN",
    "to_char": "LOCKE",
    "val": 2
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "JIN",
    "to_char": "MAN",
    "val": 2
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "JIN",
    "to_char": "PAUL",
    "val": 1
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "JIN",
    "to_char": "SAWYER",
    "val": 4
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "JIN",
    "to_char": "SAYID",
    "val": 3
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "JIN",
    "to_char": "SEAMUS",
    "val": 1
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "JIN",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "JIN",
    "to_char": "WHEELER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "JOHN",
    "to_char": "ORDERLY",
    "val": 1
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "JOHN",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "KATE",
    "to_char": "LAPIDUS",
    "val": 3
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "KATE",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "KATE",
    "to_char": "MAN",
    "val": 2
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "KATE",
    "to_char": "PAUL",
    "val": 2
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "KATE",
    "to_char": "SAWYER",
    "val": 4
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "KATE",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "KATE",
    "to_char": "SEAMUS",
    "val": 2
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "KATE",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "KATE",
    "to_char": "WIDMORE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "LAPIDUS",
    "to_char": "LOCKE",
    "val": 2
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "LAPIDUS",
    "to_char": "MAN",
    "val": 2
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "LAPIDUS",
    "to_char": "PAUL",
    "val": 1
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "LAPIDUS",
    "to_char": "SAWYER",
    "val": 5
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "LAPIDUS",
    "to_char": "SAYID",
    "val": 4
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "LAPIDUS",
    "to_char": "SEAMUS",
    "val": 1
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "LAPIDUS",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "LAPIDUS",
    "to_char": "WHEELER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "LOCKE",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "LOCKE",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "LOCKE",
    "to_char": "SAYID",
    "val": 3
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "LOCKE",
    "to_char": "WHEELER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "MAN",
    "to_char": "PAUL",
    "val": 1
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "MAN",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "MAN",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "MAN",
    "to_char": "SEAMUS",
    "val": 1
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "MAN",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "PAUL",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "PAUL",
    "to_char": "SEAMUS",
    "val": 2
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "PAUL",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "PAUL",
    "to_char": "WIDMORE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "SAWYER",
    "to_char": "SAYID",
    "val": 4
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "SAWYER",
    "to_char": "SEAMUS",
    "val": 2
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "SAWYER",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "SAWYER",
    "to_char": "WHEELER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "SAWYER",
    "to_char": "WIDMORE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "SAYID",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "SAYID",
    "to_char": "WHEELER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "SEAMUS",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 13,
    "from_char": "SEAMUS",
    "to_char": "WIDMORE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 14,
    "from_char": "BOY IN BLACK",
    "to_char": "CLAUDIA",
    "val": 1
  },
  {
    "season": 6,
    "episode": 14,
    "from_char": "BOY IN BLACK",
    "to_char": "JACOB",
    "val": 6
  },
  {
    "season": 6,
    "episode": 14,
    "from_char": "BOY IN BLACK",
    "to_char": "MOTHER",
    "val": 4
  },
  {
    "season": 6,
    "episode": 14,
    "from_char": "CLAUDIA",
    "to_char": "JACOB",
    "val": 1
  },
  {
    "season": 6,
    "episode": 14,
    "from_char": "CLAUDIA",
    "to_char": "MOTHER",
    "val": 3
  },
  {
    "season": 6,
    "episode": 14,
    "from_char": "JACK",
    "to_char": "JACOB",
    "val": 1
  },
  {
    "season": 6,
    "episode": 14,
    "from_char": "JACK",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 14,
    "from_char": "JACK",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 14,
    "from_char": "JACOB",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 14,
    "from_char": "JACOB",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 14,
    "from_char": "JACOB",
    "to_char": "MAN IN BLACK",
    "val": 3
  },
  {
    "season": 6,
    "episode": 14,
    "from_char": "JACOB",
    "to_char": "MOTHER",
    "val": 10
  },
  {
    "season": 6,
    "episode": 14,
    "from_char": "KATE",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 14,
    "from_char": "MAN IN BLACK",
    "to_char": "MOTHER",
    "val": 2
  },
  {
    "season": 6,
    "episode": 15,
    "from_char": "ALEX",
    "to_char": "BEN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 15,
    "from_char": "ALEX",
    "to_char": "ROUSSEAU",
    "val": 1
  },
  {
    "season": 6,
    "episode": 15,
    "from_char": "ANA LUCIA",
    "to_char": "DESMOND",
    "val": 1
  },
  {
    "season": 6,
    "episode": 15,
    "from_char": "ANA LUCIA",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 6,
    "episode": 15,
    "from_char": "ANA LUCIA",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 15,
    "from_char": "ANA LUCIA",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 15,
    "from_char": "ANA LUCIA",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 6,
    "episode": 15,
    "from_char": "AUSTEN",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 15,
    "from_char": "BEN",
    "to_char": "DESMOND",
    "val": 1
  },
  {
    "season": 6,
    "episode": 15,
    "from_char": "BEN",
    "to_char": "JOHN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 15,
    "from_char": "BEN",
    "to_char": "LOCKE",
    "val": 4
  },
  {
    "season": 6,
    "episode": 15,
    "from_char": "BEN",
    "to_char": "MILES",
    "val": 2
  },
  {
    "season": 6,
    "episode": 15,
    "from_char": "BEN",
    "to_char": "NURSE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 15,
    "from_char": "BEN",
    "to_char": "OFFICER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 15,
    "from_char": "BEN",
    "to_char": "RICHARD",
    "val": 3
  },
  {
    "season": 6,
    "episode": 15,
    "from_char": "BEN",
    "to_char": "ROUSSEAU",
    "val": 2
  },
  {
    "season": 6,
    "episode": 15,
    "from_char": "BEN",
    "to_char": "TEENAGE GIRL",
    "val": 1
  },
  {
    "season": 6,
    "episode": 15,
    "from_char": "BEN",
    "to_char": "WIDMORE",
    "val": 4
  },
  {
    "season": 6,
    "episode": 15,
    "from_char": "BEN",
    "to_char": "ZOE",
    "val": 4
  },
  {
    "season": 6,
    "episode": 15,
    "from_char": "CLAIRE",
    "to_char": "DAVID",
    "val": 1
  },
  {
    "season": 6,
    "episode": 15,
    "from_char": "CLAIRE",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 6,
    "episode": 15,
    "from_char": "CLAIRE",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 15,
    "from_char": "DAVID",
    "to_char": "JACK",
    "val": 2
  },
  {
    "season": 6,
    "episode": 15,
    "from_char": "DAVID",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 15,
    "from_char": "DESMOND",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 6,
    "episode": 15,
    "from_char": "DESMOND",
    "to_char": "KATE",
    "val": 2
  },
  {
    "season": 6,
    "episode": 15,
    "from_char": "DESMOND",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 15,
    "from_char": "DESMOND",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 15,
    "from_char": "DESMOND",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 6,
    "episode": 15,
    "from_char": "DESMOND",
    "to_char": "OFFICER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 15,
    "from_char": "DESMOND",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 6,
    "episode": 15,
    "from_char": "DESMOND",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 6,
    "episode": 15,
    "from_char": "DESMOND",
    "to_char": "TEENAGE GIRL",
    "val": 1
  },
  {
    "season": 6,
    "episode": 15,
    "from_char": "HURLEY",
    "to_char": "JACK",
    "val": 5
  },
  {
    "season": 6,
    "episode": 15,
    "from_char": "HURLEY",
    "to_char": "JACOB",
    "val": 4
  },
  {
    "season": 6,
    "episode": 15,
    "from_char": "HURLEY",
    "to_char": "KATE",
    "val": 5
  },
  {
    "season": 6,
    "episode": 15,
    "from_char": "HURLEY",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 15,
    "from_char": "HURLEY",
    "to_char": "SAWYER",
    "val": 3
  },
  {
    "season": 6,
    "episode": 15,
    "from_char": "HURLEY",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 6,
    "episode": 15,
    "from_char": "HURLEY",
    "to_char": "YOUNG JACOB",
    "val": 1
  },
  {
    "season": 6,
    "episode": 15,
    "from_char": "JACK",
    "to_char": "JACOB",
    "val": 4
  },
  {
    "season": 6,
    "episode": 15,
    "from_char": "JACK",
    "to_char": "JOHN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 15,
    "from_char": "JACK",
    "to_char": "KATE",
    "val": 5
  },
  {
    "season": 6,
    "episode": 15,
    "from_char": "JACK",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 15,
    "from_char": "JACK",
    "to_char": "SAWYER",
    "val": 3
  },
  {
    "season": 6,
    "episode": 15,
    "from_char": "JACK",
    "to_char": "WOMAN P.A. VOICE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 15,
    "from_char": "JACK",
    "to_char": "YOUNG JACOB",
    "val": 1
  },
  {
    "season": 6,
    "episode": 15,
    "from_char": "JACOB",
    "to_char": "KATE",
    "val": 4
  },
  {
    "season": 6,
    "episode": 15,
    "from_char": "JACOB",
    "to_char": "SAWYER",
    "val": 3
  },
  {
    "season": 6,
    "episode": 15,
    "from_char": "JACOB",
    "to_char": "YOUNG JACOB",
    "val": 1
  },
  {
    "season": 6,
    "episode": 15,
    "from_char": "JOHN",
    "to_char": "NURSE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 15,
    "from_char": "JOHN",
    "to_char": "OFFICER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 15,
    "from_char": "JOHN",
    "to_char": "WOMAN P.A. VOICE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 15,
    "from_char": "KATE",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 15,
    "from_char": "KATE",
    "to_char": "SAWYER",
    "val": 4
  },
  {
    "season": 6,
    "episode": 15,
    "from_char": "KATE",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 6,
    "episode": 15,
    "from_char": "KATE",
    "to_char": "YOUNG JACOB",
    "val": 1
  },
  {
    "season": 6,
    "episode": 15,
    "from_char": "LOCKE",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 6,
    "episode": 15,
    "from_char": "LOCKE",
    "to_char": "RICHARD",
    "val": 1
  },
  {
    "season": 6,
    "episode": 15,
    "from_char": "LOCKE",
    "to_char": "TEENAGE GIRL",
    "val": 1
  },
  {
    "season": 6,
    "episode": 15,
    "from_char": "LOCKE",
    "to_char": "WIDMORE",
    "val": 2
  },
  {
    "season": 6,
    "episode": 15,
    "from_char": "LOCKE",
    "to_char": "ZOE",
    "val": 2
  },
  {
    "season": 6,
    "episode": 15,
    "from_char": "MAN",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 6,
    "episode": 15,
    "from_char": "MILES",
    "to_char": "OFFICER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 15,
    "from_char": "MILES",
    "to_char": "RICHARD",
    "val": 2
  },
  {
    "season": 6,
    "episode": 15,
    "from_char": "MILES",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 15,
    "from_char": "MILES",
    "to_char": "WIDMORE",
    "val": 2
  },
  {
    "season": 6,
    "episode": 15,
    "from_char": "MILES",
    "to_char": "ZOE",
    "val": 2
  },
  {
    "season": 6,
    "episode": 15,
    "from_char": "NURSE",
    "to_char": "OFFICER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 15,
    "from_char": "OFFICER",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 15,
    "from_char": "RICHARD",
    "to_char": "WIDMORE",
    "val": 3
  },
  {
    "season": 6,
    "episode": 15,
    "from_char": "RICHARD",
    "to_char": "ZOE",
    "val": 3
  },
  {
    "season": 6,
    "episode": 15,
    "from_char": "SAWYER",
    "to_char": "YOUNG JACOB",
    "val": 1
  },
  {
    "season": 6,
    "episode": 15,
    "from_char": "WIDMORE",
    "to_char": "ZOE",
    "val": 4
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "BEN",
    "to_char": "CLAIRE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "BEN",
    "to_char": "DESMOND",
    "val": 1
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "BEN",
    "to_char": "FRANK",
    "val": 2
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "BEN",
    "to_char": "HURLEY",
    "val": 6
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "BEN",
    "to_char": "JACK",
    "val": 3
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "BEN",
    "to_char": "KATE",
    "val": 4
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "BEN",
    "to_char": "LAPIDUS",
    "val": 1
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "BEN",
    "to_char": "LOCKE",
    "val": 3
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "BEN",
    "to_char": "MILES",
    "val": 4
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "BEN",
    "to_char": "RICHARD",
    "val": 3
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "BEN",
    "to_char": "SAWYER",
    "val": 4
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "BERNARD",
    "to_char": "DESMOND",
    "val": 1
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "BERNARD",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "BERNARD",
    "to_char": "ROSE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "BOONE",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "BOONE",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "BOONE",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "CHARLIE",
    "to_char": "CHARLOTTE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "CHARLIE",
    "to_char": "CLAIRE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "CHARLIE",
    "to_char": "DANIEL",
    "val": 1
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "CHARLIE",
    "to_char": "DESMOND",
    "val": 1
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "CHARLIE",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "CHARLIE",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "CHARLIE",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "CHARLIE",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "CHARLOTTE",
    "to_char": "DANIEL",
    "val": 1
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "CHRISTIAN",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "CHRISTIAN",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "CHRISTIAN",
    "to_char": "VOICE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "CLAIRE",
    "to_char": "DAVID",
    "val": 2
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "CLAIRE",
    "to_char": "DESMOND",
    "val": 2
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "CLAIRE",
    "to_char": "FRANK",
    "val": 2
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "CLAIRE",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "CLAIRE",
    "to_char": "KATE",
    "val": 5
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "CLAIRE",
    "to_char": "MAN ON MICROPHONE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "CLAIRE",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "CLAIRE",
    "to_char": "RICHARD",
    "val": 1
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "CLAIRE",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "DAVID",
    "to_char": "DESMOND",
    "val": 1
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "DAVID",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "DAVID",
    "to_char": "JULIET",
    "val": 2
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "DAVID",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "DAVID",
    "to_char": "MAN ON MICROPHONE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "DAVID",
    "to_char": "RECEPTIONIST",
    "val": 1
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "DAVID",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "DELIVERY TRUCK DRIVER",
    "to_char": "DESMOND",
    "val": 1
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "DELIVERY TRUCK DRIVER",
    "to_char": "DRIVER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "DELIVERY TRUCK DRIVER",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "DESMOND",
    "to_char": "DRIVER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "DESMOND",
    "to_char": "ELOISE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "DESMOND",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "DESMOND",
    "to_char": "JACK",
    "val": 4
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "DESMOND",
    "to_char": "KATE",
    "val": 3
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "DESMOND",
    "to_char": "LOCKE",
    "val": 5
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "DESMOND",
    "to_char": "MAN ON MICROPHONE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "DESMOND",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "DESMOND",
    "to_char": "RICHARD",
    "val": 1
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "DESMOND",
    "to_char": "ROSE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "DRIVER",
    "to_char": "KATE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "FRANK",
    "to_char": "HURLEY",
    "val": 1
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "FRANK",
    "to_char": "JACK",
    "val": 1
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "FRANK",
    "to_char": "KATE",
    "val": 4
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "FRANK",
    "to_char": "MILES",
    "val": 4
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "FRANK",
    "to_char": "RICHARD",
    "val": 4
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "FRANK",
    "to_char": "SAWYER",
    "val": 4
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "HURLEY",
    "to_char": "JACK",
    "val": 8
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "HURLEY",
    "to_char": "KATE",
    "val": 5
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "HURLEY",
    "to_char": "LAPIDUS",
    "val": 1
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "HURLEY",
    "to_char": "LOCKE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "HURLEY",
    "to_char": "MAN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "HURLEY",
    "to_char": "MILES",
    "val": 2
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "HURLEY",
    "to_char": "RICHARD",
    "val": 1
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "HURLEY",
    "to_char": "SAWYER",
    "val": 5
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "HURLEY",
    "to_char": "SAYID",
    "val": 2
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "HURLEY",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "JACK",
    "to_char": "JULIET",
    "val": 2
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "JACK",
    "to_char": "KATE",
    "val": 7
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "JACK",
    "to_char": "LOCKE",
    "val": 8
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "JACK",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "JACK",
    "to_char": "NURSE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "JACK",
    "to_char": "RECEPTIONIST",
    "val": 1
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "JACK",
    "to_char": "SAWYER",
    "val": 9
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "JACK",
    "to_char": "VOICE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "JIN",
    "to_char": "JULIET",
    "val": 1
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "JIN",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "JIN",
    "to_char": "SUN",
    "val": 2
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "JIN",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "JULIET",
    "to_char": "RECEPTIONIST",
    "val": 1
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "JULIET",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "JULIET",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "JULIET",
    "to_char": "WOMAN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "KATE",
    "to_char": "LAPIDUS",
    "val": 2
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "KATE",
    "to_char": "LOCKE",
    "val": 2
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "KATE",
    "to_char": "MAN ON MICROPHONE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "KATE",
    "to_char": "MILES",
    "val": 4
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "KATE",
    "to_char": "RICHARD",
    "val": 4
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "KATE",
    "to_char": "SAWYER",
    "val": 9
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "LAPIDUS",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "LAPIDUS",
    "to_char": "RICHARD",
    "val": 2
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "LAPIDUS",
    "to_char": "SAWYER",
    "val": 2
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "LOCKE",
    "to_char": "MILES",
    "val": 1
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "LOCKE",
    "to_char": "NURSE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "LOCKE",
    "to_char": "RICHARD",
    "val": 1
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "LOCKE",
    "to_char": "ROSE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "LOCKE",
    "to_char": "SAWYER",
    "val": 3
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "LOCKE",
    "to_char": "VOICE",
    "val": 1
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "MAN",
    "to_char": "SAYID",
    "val": 1
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "MILES",
    "to_char": "RICHARD",
    "val": 7
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "MILES",
    "to_char": "SAWYER",
    "val": 5
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "RECEPTIONIST",
    "to_char": "SAWYER",
    "val": 1
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "RICHARD",
    "to_char": "SAWYER",
    "val": 4
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "SAWYER",
    "to_char": "SUN",
    "val": 1
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "SAYID",
    "to_char": "SHANNON",
    "val": 1
  },
  {
    "season": 6,
    "episode": 16,
    "from_char": "SUN",
    "to_char": "WOMAN",
    "val": 1
  }
]
