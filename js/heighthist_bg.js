// ----------------------------------------------------
// Abid Rahman
// JS file for the NBA Height History Link Background
// Filename: heighthist_bg.js
// ----------------------------------------------------

//Setup SVG size vars
var w = 650,
    h = 200;

var color = d3.scale.category10();

//Initialize the svg
var heighthistSVG = d3.select("#heighthist-SVG").append("svg")
    .attr("width", w)
    .attr("height", h)
    .on("mouseover", fillBars)
    .on("mouseout", unfillBars)

d3.select("#heighthist-SVG").style("background", "#fff");

for (var i = 0; i < 12; i++) {

    var bar_color = color(getRndInteger(0, 9));
    heighthistSVG.append("rect")
        .attr("class", "bar")
        .attr("x", i*60 + 5)
        .attr("y", -5)
        .attr("width", 30)
        .attr("height", getRndInteger(20, 120) )
        .attr("fill-opacity", 0.6)
        .style("fill", color(getRndInteger(0, 9)))
        .attr("stroke", "#000");
}

var titles = heighthistSVG.append("g");

titles.append("text")
    .attr("class", "link-title-hhist")
    .attr("x", "50%")
    .attr("y", 130)
    .attr("dy", ".71em")
    .attr("text-anchor", "middle")
    .style("fill", "#000")
    .text("Height History");

titles.append("text")
    .attr("class", "link-desc-hhist")
    .attr("x", "50%")
    .attr("y", 170)
    .attr("dy", ".5em")
    .attr("text-anchor", "middle")
    .style("fill", "#000")
    .text("A Look Into the NBA's Height Trends Over The Past 70 Years");

function unfillBars() {
    d3.select("#heighthist-SVG").style("background", "#fff");
    d3.select(".link-title-hhist").style("fill", "#000");
    d3.select(".link-desc-hhist").style("fill", "#000");
    heighthistSVG.selectAll(".bar")
        .attr("stroke", "#000")
        .attr("fill-opacity", 0.6)
        .style("fill", function(d) { return color(getRndInteger(0, 9)); });
}

function fillBars() {
    d3.select("#heighthist-SVG").style("background", "#000");
    d3.select(".link-title-hhist").style("fill", "#fff");
    d3.select(".link-desc-hhist").style("fill", "#fff");
    heighthistSVG.selectAll(".bar")
        .style("fill", "#000")
        .attr("stroke", function(d) { return color(getRndInteger(0, 9)); })
        .attr("fill-opacity", 0);
}

animate_bars();
d3.interval(animate_bars, 2000);

function animate_bars() {
    
    heighthistSVG.selectAll(".bar").transition()
        .duration(function() { return getRndInteger(1000, 3000); })
        .delay(function() { return getRndInteger(0, 2000); })
        .attr("height", function() { return getRndInteger(20, 120); })
        .style("fill", function(d) { return color(getRndInteger(0, 9)); });
}