import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { selectError, selectForm, selectUsers } from "../store/selector/post-selector"
import { addComment, setComment, resetForm, setError, resetError } from "../store/slice/postSlice"
import ErrorMessage from "./ErrorMessage"

function CommentForm() {
    const dispatch = useDispatch()
    const { id } = useParams()

    const error = useSelector(selectError)

    const { comment } = useSelector(selectForm)
    const user1 = useSelector(selectUsers).find(user => user.id === 1)

    const [isSubmitting, setIsSubmitting] = useState(false)

    useEffect(() => {
        dispatch(resetError())
    }, []);

    const handleCommentChange = (event) => {
        dispatch(setComment(event.target.value))
    }

    const handleCommentSubmit = (event) => {
        event.preventDefault()

        if (comment.trim() === "") {
            dispatch(setError("Veuillez remplir le champ commentaire"))
            return
        }

        setIsSubmitting(true)

        const commentData = {
            postId: id,
            body: comment,
            email: user1.email
        }

        dispatch(addComment(commentData)).then(() => {
            dispatch(resetForm())
            setIsSubmitting(false)
        })
    }

    return (
        <div className="comment-form">
            <h4>Ajouter un commentaire :</h4>
            <form onSubmit={handleCommentSubmit}>
                <textarea
                    value={comment}
                    onChange={handleCommentChange}
                    placeholder="Écrivez votre commentaire ici"
                    rows="4"
                    cols="50"
                />
                <br />
                <ErrorMessage error={error} />
                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Envoi..." : "Ajouter un commentaire"}
                </button>
            </form>
        </div>
    )
}

export default CommentForm 
