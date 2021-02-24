import React from 'react';
import { Link } from 'react-router-dom'
import '../../stylesheets/product-index.css';
import MainPageContainer from '../main/main_page_container';
import  Footer from '../footer/footer';

class SearchItem extends React.Component {
    constructor(props) {
        super(props)
         this.state = { 
            keyword: "",
        };
    }

    componentDidMount(){
        this.props.fetchSearchProducts(this.props.match.params.query)
    }
    render() {
        if (!this.props.products){
            return null;
        }
        if (!Array.isArray(this.props.products)){
            return null;
        }
         let products = this.props.products.map((product) => {
            return (
                    <Link className='product-item' key={product._id}  to={`/product/${product.id}/${product._id}`}>
                        <li>{product.title}</li>
                        <li><img src={product.image} alt=""/></li>
                        <li>${product.price}</li>
                    </Link>
            )
        })
        if (this.props.products.length) {
            return(
            <div className="splash">
                    <MainPageContainer /> 
                        <div className='product-index'>
                        {products}
                        </div>
                    <footer id='footer'>
                        <Footer />
                    </footer>
                </div>   
            )
        } else {
            // 
            return (
                <div className="splash">
                    <MainPageContainer /> 
                        <div>No results found</div>
                    <footer id='footer'>
                        <Footer />
                    </footer>
                </div>   
            )
        }
        
    }
}

export default SearchItem;