import React from "react";

class SeacrhBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: "",
      inStockOnly: false,
    };
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(e) {
    this.setState({ filterText: e.target.value });
    this.props.onFilterTextChange(e.target.value);
  }

  handleInStockChange(e) {
    this.setState({ inStockOnly: e.target.checked });
    console.log(e.target.checked);
    this.props.onInStockChange(e.target.checked);
  }
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.state.filterText}
          onChange={this.handleFilterTextChange}
        />
        <p>
          <input
            type="checkbox"
            checked={this.state.inStockOnly}
            onChange={this.handleInStockChange}
          />{" "}
          Only show products in stock
        </p>
      </form>
    );
  }
}

export default SeacrhBar;
