import { useNavigate } from "react-router"
import { useSelector } from "react-redux"
import Button from "./Button"
import { selectUsers } from "../store/selector/post-selector"

function Post({ post }) {
    const navigate = useNavigate()
    const users = useSelector(selectUsers)

    const author = users.find(user => user.id === post.userId)

    return (
        <div className="post">
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <p>Auteur : {author ? author.name : "Inconnu"}</p>
            <Button action={() => navigate(`/detail/${post.id}`)} label="Détail" />
        </div>
    )
}

export default Post 
