import Component from "@ember/component";
import { run } from "@ember/runloop";
import { select } from "d3-selection";
import { scaleLinear } from "d3-scale";
import { max, extent, histogram } from "d3-array";
import { axisLeft, axisBottom } from "d3-axis";

export default class TextPlacesComponent extends Component {
  constructor(...args) {
    super(...args);
    run.schedule("render", this, this.buildSvg);
    run.schedule("render", this, this.histogram);
  }

  didUpdate() {
    run.schedule("render", this, this.histogram);
  }

  buildSvg() {
    const width = document.querySelector("#text-places").clientWidth;
    const height = 0.4 * window.innerHeight;
    const svg = select("#text-places-svg")
      .attr("width", width)
      .attr("height", height);
    svg
      .append("g")
      .attr("id", "svg-x-axis")
      .append("text")
      .attr(
        "x",
        this.margin.left + 0.5 * (width - this.margin.left - this.margin.right)
      )
      .attr("y", 30)
      .attr("fill", "#000")
      .attr("text-anchor", "center")
      .text(this.entrySort);
    svg.append("g").attr("id", "svg-y-axis");
    svg.append("g").attr("id", "svg-bars");
  }

  histogram() {
    const id = "#text-places";
    return this.makeHistogram({
      id,
      // Data: this.args.entries
      data: this.entries
        // .filter(entry => entry.place === this.args.place.id)
        .filter((entry) => entry.place === this.place.id)
        // .map(entry => entry[this.args.entrySort]),
        .map((entry) => entry[this.entrySort]),
      width: document.querySelector(id).clientWidth,
      height: 0.4 * window.innerHeight,
      // EntrySort: this.args.entrySort
      entrySort: this.entrySort,
      xExtent: extent(this.entries.map((entry) => entry[this.entrySort]))
    });
  }

  margin = { top: 5, right: 10, bottom: 30, left: 40 };

  makeHistogram({ data, width, height, xExtent }) {
    const x = scaleLinear()
      .domain(xExtent)
      .nice()
      .range([this.margin.left, width - this.margin.right]);
    const bins = histogram().domain(x.domain()).thresholds(x.ticks(20))(data);
    const y = scaleLinear()
      .domain([0, max(bins, (d) => d.length)])
      .nice()
      .range([height - this.margin.bottom, this.margin.top]);

    const xAxis = (g) =>
      g
        .attr("transform", `translate(0, ${height - this.margin.bottom})`)
        .call(axisBottom(x).tickSizeOuter(0))
        .call((g) => g);

    const yAxis = (g) =>
      g.attr("transform", `translate(${this.margin.left},0)`).call(axisLeft(y));

    select("#svg-bars")
      .selectAll("rect")
      .data(bins)
      .join("rect")
      .attr("x", (d) => x(d.x0) + 1)
      .attr("width", (d) => Math.max(0, x(d.x1) - x(d.x0) - 1))
      .attr("y", (d) => y(d.length))
      .attr("height", (d) => y(0) - y(d.length))
      .classed("bar-chart", true);

    select("#svg-x-axis").call(xAxis);

    select("#svg-y-axis").call(yAxis);

    // Return svg.node();
  }
}
