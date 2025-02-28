import axios from "axios"

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/"
})

const useApi = () => {

    const fetchPosts = async () => {
        return await api.get("/posts")
    }

    const fetchComments = async (id) => {
        return await api.get(`/posts/${id}/comments`)
    }

    const fetchUsers = async () => {
        return await api.get("/users")
    }

    const addPost = async (post) => {
        return await api.post("/posts", post)
    }

    const addComment = async (comment) => {
        return await api.post("/comments", comment)
    }



    return {
        fetchPosts,
        fetchComments,
        fetchUsers,
        addPost,
        addComment
    }
}

export default useApi 