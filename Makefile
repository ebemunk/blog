all:
	echo "nope"

deploy:
	rm -rf public
	hugo
	minify -aro public public
	echo 'blog.ebemunk.com' > public/CNAME
	git add -A
	git commit -m "hugo rebuild"
	git push
	git subtree push --prefix=public git@github.com:ebemunk/blog gh-pages
