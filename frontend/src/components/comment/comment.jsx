import React from 'react'

class Comment extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            comment: []
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        debugger
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
        // const { comment } = this.props;

        // if (!comment) return null;

        return (
            <div> Comment
                <form onSubmit={this.handleSubmit}>
                        <textarea 
                            style={{width: '50%', borderRadius: '5px'}}
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
