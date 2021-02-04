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
                            style={{resize: 'none', height: '100px', width: '50%', borderRadius: '5px'}}
                            onChange={this.update('content')}
                            value={this.state.content}
                            placeholder="leave comment">
                        </textarea>
                        <br/>
                    <button>comment</button>
                </form>
            </div>
        )
    }
}

export default Comment;
