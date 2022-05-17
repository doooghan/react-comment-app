import React from "react";
import SeacrhBar from "./SearchBar";
import ProductTable from "./ProductTable";

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: this.props.products };
    this.handleProductsChange = this.handleProductsChange.bind(this);
  }

  handleProductsChange(filterText, inStockOnly) {
    const newProducts = this.props.products.filter((product) => {
      if (product.name.indexOf(filterText) === -1) {
        return false;
      }
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
        <SeacrhBar onProductsChange={this.handleProductsChange} />
        <ProductTable products={this.state.products} />
      </div>
    );
  }
}

export default FilterableProductTable;
