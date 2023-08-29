O_DIR = docs
O = $(O_DIR)/index.html
I = index.src.html

dev:
	mongoose -v 0 -d $(O_DIR)
build:
	podman run -it --rm -v$(PWD):/src -w/src node:alpine \
		npx html-minifier \
		--minify-css true \
		--minify-js true \
		--collapse-whitespace \
		-o $(O) \
		$(I)
