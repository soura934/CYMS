import React from 'react';

const ProductIndexItem = (props) => {
    return (
        <div>
            <li>{this.props.product.name}</li>
            <li>{this.props.product.price}</li>
        </div>
    )
}

export default ProductIndexItem;