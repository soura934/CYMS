import React from 'react';
import CommentContainer from '../comment/comment_container';
import MainPageContainer from '../main/main_page_container';
import  Footer from '../footer/footer';

import '../../stylesheets/product-show.css';
import '../../stylesheets/comment.css';
import '../../stylesheets/app.css';

class ProductShow extends React.Component{
    constructor(props){
        super(props)
        
    
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        this.props.fetchProduct(this.props.match.params._id)
    }

    handleSubmit(e){
        e.preventDefault()
        const cart = {
            user: this.props.userId,
            price: this.props.product.price,
            cartItem: this.props.product._id
        }
        debugger
        this.props.createCart(cart)
    }
    render() {
<<<<<<< HEAD
=======
        debugger
        // debugger
>>>>>>> main
        if (!this.props.product){
            return null;
        } 
        
        
        return (
            <div>
                <MainPageContainer /> 

                <div className='product-show'>
                        <div className='image-container'>
                            <img src={this.props.product.image} />
                        </div>
                        <div className='product-text-container'>
                            <div>
                                <h1>{this.props.product.title}</h1>
                                <h2>About this item:</h2>
                                <p>{this.props.product.description}</p>
                            </div>
                        </div>
                        <div className='price-container'>
                            <div className='inner'>
                                <h1>${this.props.product.price}</h1>
                                <div className='p-container'>
                                    <p className='a'>+ $9.99 shipping</p>
                                    <p className='b'>Arrives: Feb 18 - 22</p>
                                    <p className='c'>In stock.</p>
                                    <p className='d'>Usually ships within 2 to 3 days.</p>
                                </div>
                                <div className='button-container'>
<<<<<<< HEAD
                                    <button>Add to Cart</button>
                                    {/* <button>Buy Now</button> */}
=======
                                    <button onClick={this.handleSubmit}>Add to Cart</button>
                                    <button>Buy Now</button>
>>>>>>> main
                                </div>
                            </div>
                        </div>
                </div>
                    <CommentContainer/>    
                <footer id='footer'>
                    <Footer />
                </footer>
            </div>
            )


    }
}

export default ProductShow;