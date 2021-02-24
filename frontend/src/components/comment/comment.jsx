import React from 'react'
import '../../stylesheets/product-show.css';

class Comment extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            comment: [], 
            product_id:this.props.product._id
        
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        
        // if (!Array.isArray(this.props.product)){
        //     
        this.props.fetchProductComments(this.props.productId)
        // }
    }
    

    componentDidUpdate(prevProps, prevState){
        // this.props.fetchComments()
        
        if ( JSON.stringify(this.props.comments) !== JSON.stringify(prevProps.comments)){
            
        this.props.fetchProductComments(this.props.productId)
        }
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    handleSubmit(e) {
         e.preventDefault();
         let {loggedIn, content} = this.props 
         
         if (!this.state.content){
             
            return;
   
         }
         if (loggedIn){
            let comment = {
                product_id: this.props.product._id,
                content: this.state.content
             }
         this.props.createComment(comment)
         this.setState({ content: "" })
    } else {
        window.location = '#/login';
    }
    }

    render () {
        
        const { comment } = this.props;
        
        if (!this.props.comments) return null;
         if (!Array.isArray(this.props.comments)) return null;

        let comments = this.props.comments.map((comment, i) => {
            let firstName = comment.user.firstName
            let lastName = comment.user.lastName
            
           
            const dateObj = new Date(comment.date)
            let date = new Intl.DateTimeFormat('en-US').format(dateObj);

            return (
                    <ul className='user-comments' key={comment._id}>
                    
                        <li>"{comment.content}"</li>
                        <li>Posted by: {firstName} {lastName}</li>
                        <li>Review left: {date}</li>
                    </ul>
            )
        })
        return (
            <div className='comment-container'>
                <div className='comment' > 

                    <h1>Leave a Comment</h1>
                        <form onSubmit={this.handleSubmit}>
                                <textarea 
                                    style={{resize: 'none', height: '100px', width: '50%', borderRadius: '5px'}}
                                    onChange={this.update('content')}
                                    value={this.state.content}
                                    placeholder="Comment here">
                                </textarea>
                                <br/>
                            <button>Submit</button>
                        </form>

                        <h1 className='comment-title'>Top Customer Reviews</h1>
                        {comments}
                </div>
            </div>
        )
    }
}

export default Comment;
