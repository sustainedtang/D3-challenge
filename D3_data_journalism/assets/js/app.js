// CODE OR SUFFER
var svgWidth = 960;
var svgHeight = 500;

var margin = {
    top: 20,
    right: 40,
    bottom: 80,
    left: 100
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

//Create SVG wrapper, append SVG group
//shift by left and top margins
var svg = d3
    .select(".chart")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

//Append an SVG group
var chartGroup = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

//Initial params
var chosenXAxis = "poverty";

//updating x-scale var upon click on axis label? maybe not necessary
//id, state, abbr, poverty, povertyMoe, age, agemoe, income, income moe
//healthcare, healthlow,healthhigh, obesity, obesitylow, obesityhigh, smokes smokes low smokes high, -0.385218228(?)
//Tool tip
function updateToolTip(chosenXAxis, circlesGroup) {

    var label;
  
    if (chosenXAxis === "poverty") {
      label = "Poverty:";
    }
    else {
      label = "# of Albums:";
    }

var toolTip = d3.tip()
    .attr("class", "tooltip")
    .offset([80, -60])
    .html(function(d) {
      return (`${d.state}<br>${label} ${d[chosenXAxis]}`);
    });

  circlesGroup.call(toolTip);

  circlesGroup.on("mouseover", function(data) {
    toolTip.show(data);
  })
    // onmouseout event
    .on("mouseout", function(data, index) {
      toolTip.hide(data);
    });

  return circlesGroup;
}
