import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import { fetchComments } from "../../store/slice/postSlice"
import { selectPosts } from "../../store/selector/post-selector"
import PostDetails from "../../components/PostDetails"
import CommentList from "../../components/CommentList"
import CommentForm from "../../components/CommentForm"

function DetailPage() {
    const { id } = useParams()

    const dispatch = useDispatch()

    const posts = useSelector(selectPosts)
    const post = posts.find(post => post.id == id)

    useEffect(() => {
        if (post && post.comments.length === 0) {
            dispatch(fetchComments(id))
        }
    }, [id])


    if (!post) return <p>Post introuvable</p>

    return (
        <div className="detail-page">
            <PostDetails post={post} />
            <CommentList comments={post.comments} />
            <CommentForm />
        </div>
    )
}

export default DetailPage 
