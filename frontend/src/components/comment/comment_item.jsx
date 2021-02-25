import React, { Component } from 'react';

class CommentItem extends React.Component {
    constructor(props) {
        super(props)
    

 
        this.deleteComment = this.deleteComment.bind(this)
    }

    
    deleteComment(){
        
        let commentId = this.props.comment._id
        this.props.deleteComment(commentId).then(() => this.props.fetchProductComments(this.props.productId))
    }

    deleteEditButtons(){
        return (
            <li><button onClick={this.deleteComment}>Delete Comment</button></li>
        )
    }

    render() {
        
        let {comment} = this.props
            let firstName = comment.user.firstName
            firstName = firstName[0].toUpperCase() + firstName.slice(1)
            let lastName = comment.user.lastName
            lastName = lastName[0].toUpperCase() + lastName.slice(1)
            const dateObj = new Date(comment.date)
            let date = new Intl.DateTimeFormat('en-US').format(dateObj);
            const commentCreater = (this.props.comment.user._id === this.props.user.id)
             const deleteEditButtons = commentCreater ? this.deleteEditButtons() : null
            
            return (
                <div>

                      
                        <li>"{comment.content}"</li>
                        <li>Posted by: {firstName} {lastName}</li>
                        <li>Review left on: {date}</li>
                            {deleteEditButtons}
                       
                        
                    </div>
            )
        }
   
}


export default CommentItem;