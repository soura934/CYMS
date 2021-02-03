import React from 'react';

const ProductIndexItem = (props) => {
    return (
        <div>
            <li>{props.product.title}</li>
            <li>{props.product.price}</li>
        </div>
    )
}

export default ProductIndexItem;