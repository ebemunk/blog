all:
	echo "nope"

deploy:
	hugo -t lexo
	git add -A
	git commit -m "hugo rebuild"
	git push origin master
	git subtree push --prefix=public git@github.com:ebemunk/blog gh-pages
