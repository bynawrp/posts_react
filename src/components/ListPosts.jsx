import { useSelector } from "react-redux"
import { selectPosts } from "../store/selector/post-selector"

import Post from "./Post"

function ListPosts() {
    const posts = useSelector(selectPosts)

    return (
        <div className="list-posts">
            {
                posts.length ? posts.map((post, i) => (
                    <Post key={i} post={post} />
                ))
                    :
                    <span>Aucun post à afficher</span>
            }
        </div>
    )
}

export default ListPosts 
