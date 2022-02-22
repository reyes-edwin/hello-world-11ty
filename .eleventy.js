const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
// let Nunjucks = require("nunjucks");

module.exports = function (eleventyConfig) {
  // establish environment nunjuck things for templating
//   let nunjucksEnvironment = new Nunjucks.Environment(
//     new Nunjucks.FileSystemLoader("_includes")
//   );
//   eleventyConfig.setLibrary("njk", nunjucksEnvironment);
//   eleventyConfig.setTemplateFormats(["html", "md", "njk"]);
  eleventyConfig.addPlugin(syntaxHighlight);
};
