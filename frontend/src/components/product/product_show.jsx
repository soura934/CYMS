import React from 'react';
import { Redirect } from 'react-router-dom';
<<<<<<< HEAD
import '../../stylesheets/product-show.css';
=======
import CommentContainer from '../comment/comment_container';
>>>>>>> main

class ProductShow extends React.Component{

    componentDidMount(){
        this.props.fetchProduct(this.props.match.params._id)
    }

    render() {
        if (!this.props.product){
            return null;
        } 
    
        return (
<<<<<<< HEAD
                <div className='product-show'>
                    <div className='image-container'>
                        <img src={this.props.product.image} />
                    </div>
                    <div className='product-text-container'>
                        <h1>{this.props.product.title}</h1>
                        <h2>About this item:</h2>
                        <p>{this.props.product.description}</p>
                    </div>
                    <div className='price-container'>
                        <div className='inner'>
                            <h1>${this.props.product.price}</h1>
                            <div className='p-container'>
                                <p className='a'>+ $9.99 shipping</p>
                                <p className='ab'>Arrives: Feb 18 - 22</p>
                                <p className='c'>In stock.</p>
                                <p className='d'>Usually ships within 2 to 3 days.</p>
                            </div>
                            <div className='button-container'>
                                <button>Add to Cart</button>
                                <button>Buy Now</button>
                            </div>
                        </div>
                    </div>
=======
                <div>
                    <h1>product show</h1>
                    <h1>{this.props.product.title}</h1>
                    <img src={this.props.product.image} alt=""/>
                    <p>{this.props.product.description}</p>
                    <CommentContainer />
>>>>>>> main
                </div>
            )

    }
}

export default ProductShow;