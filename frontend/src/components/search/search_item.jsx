import React from 'react';
import { Link } from 'react-router-dom'
import '../../stylesheets/product-index.css';

class SearchItem extends React.Component {
    constructor(props) {
        super(props)
         this.state = { 
            keyword: "",
        };
    }

    componentDidMount(){
        debugger
        this.props.fetchSearchProducts(this.props.match.params.query)
    }
    render() {
        if (!this.props.products){
            debugger
             return null;
        }
        if (!Array.isArray(this.props.products)){
            
            debugger
        return null;
        }
         let products = this.props.products.map((product) => {
         debugger
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
                <div className='product-index'>
                {products}
                </div>
            )
        } else {
            debugger
            return (
                <div>No results found</div>
            )
        }
        
    }
}

export default SearchItem;