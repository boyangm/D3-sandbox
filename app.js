// import * as d3 from "d3";


 var dataset = [80,100,56,120,180,30, 40,120,160];

 var svgWidth = 500, svgHeight = 300, barPadding =5;
 var barWidth = (svgWidth/dataset.length);

 var svg = d3.select('svg')
    .attr("width", svgWidth)
    .attr("height",svgHeight);

    var xScale = d3.scaleLinear()
      .domain([0,d3.max(dataset)])
      .range([0,svgWidth]);
      var yScale = d3.scaleLinear()
        .domain([0,d3.max(dataset)])
        .range([svgHeight,0]);

    var x_axis = d3.axisBottom().scale(xScale);
    var y_axis = d3.axisLeft().scale(yScale);
    svg.append("g")
        .attr("transform", "translate(50,10)")
        .call(y_axis);
        
        var xAxisTranslate = svgHeight -20;
        
        svg.append("g")
            .attr("transform", "translate(50,"+ xAxisTranslate +")")
            .call(x_axis);

    var barChart = svg.selectAll("rect")
        .data(dataset)
        .enter()
        .append("rect")
        .attr("y",function(d){
            return svgHeight-d
        })
        .attr("height", function(d){
            console.log(d);
            return d;
        })
        .attr("width", barWidth - barPadding)
        .attr("transform", function (d,i){
            var translate = [barWidth * i +50, -20];
            return "translate(" + translate + ")";
        })

        var text = svg.selectAll("text")
        .data(dataset)
        .enter()
        .append("text")
        .text(function(d){
            return d
        })
        .attr("y", function(d, i){
            return svgHeight - d -2;
        })
        .attr("x", function(d, i){
            return barWidth *i;
        })
        .attr("fill", "blue")



        // if you need to scale the data sub d out for the var yScale
        
        // var yScale = d3.scaleLinear()
        // .domain([0,d3.max(dataset)])
        // .range([0,svgHeight]);


        //  also these are the axis:

        //  d3.axisTop()
        //  d3.axisRight()
        //  d3.axisBottom()
        //  d3.axisLeft()

        // var svgWidth = 600 , svgHeight = 500;
        // var svg = d3.select('svg')
        // .attr('width', svgWidth)
        // .attr('Height', svgHeight)
        // .attr('class', 'svg-container')

        // var svg = d3.append('line')
        // .attr('x1', 100)
        // .attr('x2', 100)
        // .attr('y1', 100)
        // .attr('y2', 100)
        // .attr('stroke', 'red')
        // .attr('stroke-width', '10')
        
        // var svg = d3.append('rect')
        // .attr('x', 100)
        // .attr('y', 100)
        // .attr('width', 100)
        // .attr('height', 100)
        // .attr('fill', 'red')
        
        // var svg = d3.append('circle')
        // .attr('cx', 100)
        // .attr('cy', 100)
        // .attr('r', 80) // radius
        // .attr('fill', 'red')

      