// ----------------------------------------------------
// Abid Rahman
// JS file for the NBA Height Weight Link Background
// Filename: nbahwplot_bg.js
// ----------------------------------------------------

//Setup SVG size vars
var width = "100%",
    height = 200;

var color = d3.scale.category10();

//Initialize the svg
var nbahwbgSVG = d3.select("#nbahwbg-SVG").append("svg")
    .attr("width", width)
    .attr("height", height)
    .on("mouseover", fillDots)
    .on("mouseout", unfillDots)
  .append("g");

d3.select("#nbahwbg-SVG").style("background", "#000");

for (var i = 0; i < 100; i++) {
    nbahwbgSVG.append("circle")
        .attr("class", "dot")
        .attr("r", 6)
        .attr("cx", getRndInteger(10,990) )
        .attr("cy", getRndInteger(5,195) )
        .attr("fill", "#000")
        .attr("opacity", 0.6)
        .attr("stroke", color(getRndInteger(0, 9)));
}

nbahwbgSVG.append("text")
    .attr("class", "link-title-nbahw")
    .attr("x", "50%")
    .attr("y", 80)
    .attr("dy", ".71em")
    .attr("text-anchor", "middle")
    .style("fill", "#fff")
    .text("Height vs Weight");

nbahwbgSVG.append("text")
    .attr("class", "link-desc-nbahw")
    .attr("x", "50%")
    .attr("y", 120)
    .attr("dy", ".5em")
    .attr("text-anchor", "middle")
    .style("fill", "#fff")
    .text("Interactive Plot Of All 4550 Players to Have Ever Played in the NBA");

animate();
d3.interval(animate, 3000);

function animate() {
    nbahwbgSVG.selectAll(".dot").transition()
        .duration(function(_) { return getRndInteger(1000, 3000); })
        .attr("cx", function(_) { return getRndInteger(10,990); })
        .attr("cy", function(_) { return getRndInteger(5,195); });
}

function fillDots() {
    d3.select("#nbahwbg-SVG").style("background", "#fff");
    d3.select(".link-title-nbahw").style("fill", "#000");
    d3.select(".link-desc-nbahw").style("fill", "#000");
    nbahwbgSVG.selectAll(".dot")
        .attr("stroke", "#777")
        .attr("fill", function(_) { return color(getRndInteger(0, 9)); });
}

function unfillDots() {
    d3.select("#nbahwbg-SVG").style("background", "#000");
    d3.select(".link-title-nbahw").style("fill", "#fff");
    d3.select(".link-desc-nbahw").style("fill", "#fff");
    nbahwbgSVG.selectAll(".dot")
        .attr("fill", "#000")
        .attr("stroke", function(_) { return color(getRndInteger(0, 9)); });
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}