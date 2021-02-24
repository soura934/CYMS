import React from 'react';

class CommentItem extends React.Component {
    constructor(props) {
        super(props)
    

 
        this.deleteComment = this.deleteComment.bind(this)
    }

    deleteComment(){
        debugger
        let commentId = this.props.comment._id
        this.props.deleteComment(commentId)
    }

    render() {
        
        let {comment} = this.props
            let firstName = comment.user.firstName
            firstName = firstName[0].toUpperCase() + firstName.slice(1)
            let lastName = comment.user.lastName
            lastName = lastName[0].toUpperCase() + lastName.slice(1)
            const dateObj = new Date(comment.date)
            let date = new Intl.DateTimeFormat('en-US').format(dateObj);
            debugger
            return (
                  <div>
                      
                        <li>"{comment.content}"</li>
                        <li>Posted by: {firstName} {lastName}</li>
                        <li>Review left: {date}</li>
                        <li><button onClick={this.deleteComment}>Delete Comment</button></li>

                    </div>
            )
        }
    //     debugger
    //     if (!this.props.comments) {
    //         return null
    //     } else {
    //         return (
    //             <div>
    //                 <li>{this.props.comments.title}</li>
    //             </div>
    //         )
    //     }
    // }
}


export default CommentItem;