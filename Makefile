all:
	echo "nope"

deploy:
	rm -rf public
	hugo --gc --minify
	echo 'blog.ebemunk.com' > public/CNAME
	git add -A
	git commit -m "hugo rebuild"
	git push
	git subtree push --prefix=public origin gh-pages

forceGH:
	git subtree split --prefix=public origin -b gh-pages
	git push -f origin gh-pages:gh-pages
	git branch -D gh-pages
