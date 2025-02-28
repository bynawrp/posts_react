import { useDispatch } from "react-redux"
import { addPost, resetForm, setError } from "../../store/slice/postSlice"
import { useNavigate } from "react-router"
import { useSelector } from "react-redux"
import { selectForm } from "../../store/selector/post-selector"
import PostForm from "../../components/PostForm"

function AddPage() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { title } = useSelector(selectForm)

    const handleSubmit = (e) => {
        e.preventDefault()

        if (title.trim() === "") {
            dispatch(setError("Veuillez remplir le champ titre"))
            return
        }

        dispatch(addPost({
            userId: 1,
            title,
        }))

        dispatch(resetForm())
        navigate("/")
    }

    return (
        <div className="add-page">
            <h2>Ajouter un nouveau post</h2>
            <PostForm title={title} onSubmit={handleSubmit} />
        </div>
    )
}

export default AddPage 
