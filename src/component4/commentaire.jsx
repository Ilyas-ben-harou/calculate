import React, { Component } from 'react';

class Commentaire extends Component {
    state = {
        newComment: '', 
        commentaires: []
    };

    handleInput = (event) => {
        this.setState({ newComment: event.target.value });
    };

    handleComment = () => {
        const { newComment, commentaires } = this.state;
        const newCommentObj = { id: commentaires.length + 1, comment: newComment };
        
        this.setState({
            commentaires: [...commentaires, newCommentObj],
            newComment: '' 
        });
    };

    render() {
        const { newComment, commentaires } = this.state;
        
        return (
            <div>
                <h1>Commentaire</h1>
                <input type="text" onChange={this.handleInput} value={newComment} />
                <button onClick={this.handleComment}>Envoyer</button>
                <div>
                    {commentaires.map((comment) => (
                        <p key={comment.id}>{comment.comment}</p>
                    ))}
                </div>
            </div>
        );
    }
}

export default Commentaire;
