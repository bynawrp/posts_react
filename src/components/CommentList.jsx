function CommentList({ comments }) {
    return (
        <div className="comment-list">
            <h3>Commentaires :</h3>
            <ul>
                {comments && comments.length > 0 ? (
                    comments.map(comment => (
                        <li key={comment.id}>
                            <strong>{comment.email} :</strong> {comment.body}
                        </li>
                    ))
                ) : (
                    <p>Aucun commentaire.</p>
                )}
            </ul>
        </div>
    )
}

export default CommentList 
