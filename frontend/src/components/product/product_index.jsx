import React from 'react';
import ProductIndexItem from './product_index_item'

class ProductIndex extends React.Component {

    componentDidMount() {
        this.props.fetchProducts();
    }

    render() {

        let products = this.props.products.map(product => {
            return <ProductIndexItem product={product}/>
        })
        
        return (
                <ul>{products}</ul>  
        );
    }
}

export default ProductIndex;