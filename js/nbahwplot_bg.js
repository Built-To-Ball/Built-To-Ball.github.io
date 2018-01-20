// ----------------------------------------------------
// Abid Rahman
// JS file for the NBA Height Weight Link Background
// Filename: nbahwplot_bg.js
// ----------------------------------------------------

//Setup SVG size vars
var width = 650,
    height = 100;

var color = d3.scale.category10();

//Initialize the svg
var nbahwbgSVG = d3.select("#nbahwbg-SVG").append("svg")
    .attr("width", width)
    .attr("height", height)
    .on("mouseover", fillDots)
    .on("mouseout", unfillDots)
  .append("g");

for (var i = 0; i < 70; i++) {
    nbahwbgSVG.append("circle")
        .attr("class", "dot")
        .attr("r", 6)
        .attr("cx", Math.floor((Math.random() * 640) + 10) - 5)
        .attr("cy", Math.floor((Math.random() * 90) + 10) - 5)
        .attr("fill", "#fff")
        .attr("opacity", 0.7)
        .attr("stroke", color(Math.floor((Math.random() * 10) + 1)));
}

nbahwbgSVG.append("text")
    .attr("class", "link-title-nbahw")
    .attr("x", 10)
    .attr("y", 10)
    .attr("dy", ".71em")
    .text("Height vs Weight");

nbahwbgSVG.append("text")
    .attr("class", "link-desc-nbahw")
    .attr("x", 10)
    .attr("y", 50)
    .attr("dy", ".71em")
    .text("Interactive Plot Of All 4550 Players to Have Ever Played in the NBA");

animate();

d3.interval(animate, 10000);

function animate() {
    nbahwbgSVG.selectAll(".dot").transition()
        .duration(function(_) { return Math.floor((Math.random() * 10000) + 5000); })
        .attr("cx", function(_) { return Math.floor((Math.random() * 640) + 10) - 5; })
        .attr("cy", function(_) { return Math.floor((Math.random() * 90) + 10) - 5; });
}

function fillDots() {
    d3.select("#nbahwbg-SVG").style("background", "#BB771F");
    d3.select(".link-title-nbahw").style("fill", "#fff");
    d3.select(".link-desc-nbahw").style("fill", "#fff");
    nbahwbgSVG.selectAll(".dot")
        .attr("stroke", "#fff")
        .attr("fill", "#BB771F");
}

function unfillDots() {
    d3.select("#nbahwbg-SVG").style("background", "#fff");
    d3.select(".link-title-nbahw").style("fill", "#000");
    d3.select(".link-desc-nbahw").style("fill", "#000");
    nbahwbgSVG.selectAll(".dot")
        .attr("fill", "#fff")
        .attr("stroke", function(_) { return color(Math.floor((Math.random() * 10) + 1)); });
}

