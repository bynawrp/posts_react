import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setTitle, resetError } from "../store/slice/postSlice"
import { selectError } from "../store/selector/post-selector"
import { useSelector } from "react-redux"
import ErrorMessage from "./ErrorMessage"

function PostForm({ title, onSubmit }) {
    const dispatch = useDispatch()

    const error = useSelector(selectError)

    useEffect(() => {
        dispatch(resetError())
    }, []);

    const handleChange = (e) => {
        dispatch(setTitle(e.target.value))
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="title">Titre</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={handleChange}
                    placeholder="Entrez le titre"
                />
            </div>
            <ErrorMessage error={error} />
            <button type="submit">Ajouter le post</button>
        </form>
    )
}

export default PostForm 
