server-test:
	./node_modules/.bin/mocha

cov server-test-cov:
	./node_modules/.bin/istanbul cover _mocha

.PHONY: server-test cov server-test-cov