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
        debugger
        // if (!Array.isArray(this.props.product)){
        //     debugger
        this.props.fetchProductComments(this.props.productId)
        // }
    }
    

    // componentDidUpdate(prevProps, prevState){
    //     // this.props.fetchComments()
    //     debugger
    //     if(!this.props.comments || JSON.stringify(this.props.comments) !== JSON.stringify(prevProps.comments)){
    //         debugger
    //     this.props.fetchProductComments(this.props.product._id)
    //     }
    // }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    handleSubmit(e) {
         e.preventDefault();
         let {loggedIn} = this.props 
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
            return (
                    <ul className='user-comments' key={comment._id}>
                    
                        <h2>Posted by: {comment.user.firstName} {comment.user.lastName}</h2>
                        <li>"{comment.content}"</li>
                        <li>Comment created on: {comment.date}</li>
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
