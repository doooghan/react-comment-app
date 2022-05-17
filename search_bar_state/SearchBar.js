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
    this.props.onProductsChange(e.target.value, this.state.inStockOnly);
  }

  handleInStockChange(e) {
    this.setState({ inStockOnly: e.target.checked });
    console.log(e.target.checked);
    this.props.onProductsChange(this.state.filterText, e.target.checked);
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
