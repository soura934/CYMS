import React, { Component } from 'react';

class CommentItem extends React.Component {
    constructor(props) {
        super(props)
    

 
        this.deleteComment = this.deleteComment.bind(this)
        this.editComment = this.editComment.bind(this)
    }

    componentDidMount(){
        debugger
    }

    componentDidUpdate(){
        debugger
    }
    deleteComment(){
        
        let commentId = this.props.comment._id
        this.props.deleteComment(commentId).then(() => this.props.fetchProductComments(this.props.productId))
    }
    editComment(){
        
        let comment = this.props.comment
        this.props.editComment(comment).then(() => this.props.fetchProductComments(this.props.productId))
    }

    deleteEditButtons(){
        return (
            <ul className='comment-button-containers'>
            <li><button onClick={this.deleteComment}>Delete Comment</button></li>
            <li><button onClick={this.editComment}>Edit Comment</button></li>
            </ul>
        )
    }

    render() {
        
        let {comment} = this.props
        let names;
        let commentCreater;
        if (comment.user){
            debugger
            let firstName = comment.user.firstName
            let lastName = comment.user.lastName
            names = <li>Posted by: {firstName} {lastName}</li>
            commentCreater = (this.props.comment.user._id === this.props.user.id)
            // firstName = firstName[0].toUpperCase() + firstName.slice(1)
            // lastName = lastName[0].toUpperCase() + lastName.slice(1)
        }
            const dateObj = new Date(comment.date)
            let date = new Intl.DateTimeFormat('en-US').format(dateObj);
           
             const deleteEditButtons = commentCreater ? this.deleteEditButtons() : null
            
            return (
                <div>

                      
                        <li>"{comment.content}"</li>
                                {names}
                        <li>Review left on: {date}</li>
                            {deleteEditButtons}
                       
                        
                    </div>
            )
        }
   
}


export default CommentItem;