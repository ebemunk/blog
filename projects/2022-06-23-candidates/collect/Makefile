all:
	echo 'no'

pgnstats:
	~/proj/pgnstats/bin/pgnstats -f tourney.pgn -o ../viz/src/data/pgnstats.json -i
	mv ../viz/src/data/pgnstats.json-allgames.json ../viz/src/data/pgnstats.json

do:
	./downloadTournament.ts
	./standings.ts
	./mistakes.ts