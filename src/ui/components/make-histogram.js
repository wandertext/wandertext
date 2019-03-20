import { select } from "d3-selection";
import { scaleLinear } from "d3-scale";
import { max, extent, histogram } from "d3-array";
import { axisLeft, axisBottom } from "d3-axis";

export default function makeHistogram({ id, data, width, height, entrySort }) {
  const margin = { top: 5, right: 10, bottom: 30, left: 40 };

  const x = scaleLinear()
    .domain(extent(data))
    .nice()
    .range([margin.left, width - margin.right]);

  const bins = histogram()
    .domain(x.domain())
    .thresholds(x.ticks(20))(data);

  const y = scaleLinear()
    .domain([0, max(bins, d => d.length)])
    .nice()
    .range([height - margin.bottom, margin.top]);

  const xAxis = g =>
    g
      .attr("transform", `translate(0, ${height - margin.bottom})`)
      .call(axisBottom(x).tickSizeOuter(0))
      .call(g =>
        g
          .append("text")
          .attr("x", margin.left + 0.5 * (width - margin.left - margin.right))
          .attr("y", 30)
          .attr("fill", "#000")
          .attr("text-anchor", "center")
          .text(entrySort)
      );

  const yAxis = g =>
    g.attr("transform", `translate(${margin.left},0)`).call(axisLeft(y));

  const svg = select(id)
    .append("svg")
    .attr("width", width)
    .attr("height", height);
  svg
    .append("g")
    .selectAll("rect")
    .data(bins)
    .join("rect")
    .attr("x", d => x(d.x0) + 1)
    .attr("width", d => Math.max(0, x(d.x1) - x(d.x0) - 1))
    .attr("y", d => y(d.length))
    .attr("height", d => y(0) - y(d.length))
    .on("mouseover", function() {
      select(this).classed("hover", true);
    })
    .on("mouseout", function() {
      select(this).classed("hover", false);
    });

  svg.append("g").call(xAxis);

  svg.append("g").call(yAxis);

  return svg.node();
}
