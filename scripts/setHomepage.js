const fs = require("fs");
const path = require("path");

const isProduction = process.env.NODE_ENV === "production";

const packageJsonPath = path.resolve(__dirname, "../package.json");
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));

if (isProduction) {
  packageJson.homepage = "https://Elektr0n92.github.io/Portfolio";
} else {
  packageJson.homepage = ".";
}

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
