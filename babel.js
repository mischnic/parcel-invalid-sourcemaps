const fs = require("fs");
const parse = require("@babel/parser").parse;
const generate = require("@babel/generator").default;

let inputCode = fs.readFileSync("index.js", "utf8");

let ast = parse(inputCode, { sourceFilename: "index.js" });

let { code: outputCode, map: outputMap } = generate(
	ast,
	{ sourceMaps: true },
	{ "index.js": inputCode }
);

fs.writeFileSync(
	"babel/index.js",
	outputCode + "\n//# sourceMappingURL=index.js.map"
);
fs.writeFileSync("babel/index.js.map", JSON.stringify(outputMap));
