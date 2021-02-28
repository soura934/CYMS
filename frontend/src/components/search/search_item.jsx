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
        // 
        this.props.fetchSearchProducts(this.props.match.params.query)
    }
    render() {
        if (!this.props.products){
            // 
             return null;
        }
        if (!Array.isArray(this.props.products)){
            
            // 
        return null;
        }
         let products = this.props.products.map((product) => {
        //  
            return (
                    <Link className='product-item' key={product._id}  to={`/product/${product.id}/${product._id}`}>
                        <li><img src={product.image} alt=""/></li>
                        <li className='pro-title'>{product.title}</li>
                        <li className='pro-price'>${product.price}</li>
                     
                    </Link>
            )
        })
        if (this.props.products.length) {
            return(
            <div className="splash">
                    <MainPageContainer /> 
                        <h1 className='search-header'>Search Results</h1>
                        <div className='product-index product-search'>
                            {products}
                        </div>
                    {/* <footer id='footer'> */}
                        <Footer id='search-footer'/>
                    {/* </footer> */}
                </div>   
            )
        } else {
            // 
            return (
                <div className="splash">
                    <MainPageContainer /> 
                       <div className='no-result-container'>
                        <div className="no-result">
                            <h1>No results found</h1></div>
                    <br/>
                        <div className='browse'>
                        <Link className='link' to={'/products'}>Browse</Link>
                        </div>
                        </div>
                    <footer id='footer'>
                        <Footer />
                    </footer>
                </div>   
            )
        }
        
    }
}

export default SearchItem;