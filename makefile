server-test:
	./node_modules/.bin/mocha --harmony-generators

cov server-test-cov:
	./node_modules/.bin/istanbul cover _mocha

fe-build:
	~/Documents/00-git/nvm/v0.11.14/bin/grunt build

.PHONY: server-test cov server-test-cov fe-build