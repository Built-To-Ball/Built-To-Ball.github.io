// ----------------------------------------------------
// Abid Rahman
// JS file for the NBA Height History Link Background
// Filename: heighthist_bg.js
// ----------------------------------------------------

$( document ).ready(function () {
    //Setup SVG size vars
    var w = "100%",
        h = 200;

    var color = d3.scale.category10();
    var bgColor = "rgb(14, 24, 29)";
    var fgColor = "#fff";

    //Initialize the svg
    var heighthistSVG = d3.select("#heighthist-SVG").append("svg")
        .attr("width", w)
        .attr("height", h)
        .on("mouseover", fillBars)
        .on("mouseout", unfillBars);

    d3.select("#heighthist-SVG").style("background", bgColor);

    for (var i = 0; i < 25; i++) {

        var bar_color = color(getRndInteger(0, 9));
        heighthistSVG.append("rect")
            .attr("class", "bar")
            .attr("x", i*60 + 5)
            .attr("y", -5)
            .attr("width", 30)
            .attr("height", getRndInteger(20, 120) )
            .attr("fill-opacity", 0.6)
            .style("fill", color(getRndInteger(0, 9)))
            .attr("stroke", "#fff");
    }

    var titles = heighthistSVG.append("g");

    titles.append("text")
        .attr("class", "link-title-hhist")
        .attr("x", "50%")
        .attr("y", 130)
        .attr("dy", ".71em")
        .attr("text-anchor", "middle")
        .style("fill", fgColor)
        .text("Height History");

    titles.append("text")
        .attr("class", "link-desc-hhist")
        .attr("x", "50%")
        .attr("y", 170)
        .attr("dy", ".5em")
        .attr("text-anchor", "middle")
        .style("fill", fgColor)
        .text("A Look Into the NBA's Height Trends Over The Past 70 Years");

    function unfillBars() {
        d3.select("#heighthist-SVG").transition().duration(200).style("background", bgColor);
        d3.select(".link-title-hhist").style("fill", fgColor);
        d3.select(".link-desc-hhist").style("fill", fgColor);
        heighthistSVG.selectAll(".bar")
            .attr("stroke", fgColor);
    }

    function fillBars() {
        d3.select("#heighthist-SVG").transition().duration(500).style("background", fgColor);
        d3.select(".link-title-hhist").style("fill", bgColor);
        d3.select(".link-desc-hhist").style("fill", bgColor);
        heighthistSVG.selectAll(".bar")
            .attr("stroke", bgColor);
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

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
});