I = src/tt.md
J = src/tt.js
OUT_DIR = docs

$(OUT_DIR):
	@mkdir -p $(OUT_DIR)

output: $(OUT_DIR)
	pandoc -fmarkdown -thtml --standalone -o $(OUT_DIR)/index.html $(I)
	cp $(J) $(OUT_DIR)/
