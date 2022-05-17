import React from "react";
import SeacrhBar from "./SearchBar";
import ProductTable from "./ProductTable";

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: this.props.products };
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(filterText) {
    const newProducts = this.props.products.filter((product) => {
      if (product.name.indexOf(filterText) === -1) {
        return false;
      }

      return true;
    });
    this.setState({ products: newProducts });
  }
  handleInStockChange(inStockOnly) {
    const newProducts = this.props.products.filter((product) => {
      if (inStockOnly && !product.stocked) {
        return false;
      }
      return true;
    });
    this.setState({ products: newProducts });
  }
  render() {
    return (
      <div>
        <SeacrhBar
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChange}
        />
        <ProductTable products={this.state.products} />
      </div>
    );
  }
}

export default FilterableProductTable;
