function PostDetails({ post }) {
    return (
        <div className="post-details">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    )
}

export default PostDetails 
