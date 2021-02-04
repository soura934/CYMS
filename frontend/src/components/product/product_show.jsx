import React from 'react';

class ProductShow extends React.Component{

componentDidMount(){
    debugger
    // this.props.fetchProduct(this.props.match.params._id)
}

    render() {
         return (
            //  <h1>{this.props.product.title}</h1>
            <h1>product show</h1>
         )
    }
}

export default ProductShow;