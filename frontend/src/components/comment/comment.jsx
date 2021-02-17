import React from 'react'
import '../../stylesheets/product-show.css';

class Comment extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            comment: []
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchComments()
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    handleSubmit(e) {
         e.preventDefault();
        this.props.createComment(this.state)
    }

    render () {
        const { comment } = this.props;

        if (!this.props.comments) return null;

        let comments = this.props.comments.map((comment, i) => {
            return (
                    <ul className='user-comments' key={comment._id}>
                        <h2>Customer Review {i + 1}:</h2>
                        <li>{comment.content}</li>
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
