import React from 'react';
import CommentContainer from '../comment/comment_container';

class ProductShow extends React.Component{

    // componentDidMount(){
    //     this.props.fetchProduct(this.props.match.params._id)
    // }

    render() {
         return (
            //  <h1>{this.props.product.title}</h1>
            <div>
                <h1>product show</h1>
                <CommentContainer />
            </div>
            
         )
    }
}

export default ProductShow;