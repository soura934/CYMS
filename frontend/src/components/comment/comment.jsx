import React from 'react'

class Comment extends React.Component {
    constructor(props){
        super(props);
        
        this.state = this.props.comment;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    handleSubmit(e) {
         e.preventDefault();
        this.props.createComment(this.state)
    }

    render () {
        // const { comment } = this.props;

        // if (!comment) return null;

        return (
            <div> Comment
                <form onSubmit={this.handleSubmit}>
                        <textarea 
                            onChange
                            value
                            placeholder="leave comment">
                        </textarea>
                    <button>comment</button>
                </form>
            </div>
        )
    }
}

export default Comment;
