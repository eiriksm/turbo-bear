test:
	./node_modules/mocha/bin/mocha

test-cov:
	./node_modules/istanbul/lib/cli.js cover ./node_modules/mocha/bin/_mocha

.PHONY: test
