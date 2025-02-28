import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import useApi from "../../service/api.service"

const api = useApi()

export const fetchPosts = createAsyncThunk(
    "posts/fetchPosts",
    async () => {
        return (await api.fetchPosts()).data
    }
)

export const fetchComments = createAsyncThunk(
    "posts/fetchComments",
    async (postId) => {
        const comments = (await api.fetchComments(postId)).data
        return { postId, comments }
    }
)

export const fetchUsers = createAsyncThunk(
    "posts/fetchUsers",
    async () => {
        return (await api.fetchUsers()).data
    }
)

export const addPost = createAsyncThunk(
    "posts/addPost",
    async (post) => {
        return (await api.addPost(post)).data
    }
)

export const addComment = createAsyncThunk(
    "posts/addComment",
    async (comment) => {
        return (await api.addComment(comment)).data
    }
)

const initialState = {
    posts: [],
    users: [],
    form: {
        title: "",
        comment: "",
    },
    error: "",
}

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        setTitle: (state, action) => {
            state.form.title = action.payload
        },

        setComment: (state, action) => {
            state.form.comment = action.payload
        },

        setError: (state, action) => {
            state.error = action.payload
        },

        resetError: (state) => {
            state.error = initialState.error
        },

        resetForm: (state) => {
            state.form = initialState.form
            state.error = ""
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.users = action.payload
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.posts = action.payload.map(post => ({
                    ...post,
                    comments: [],
                }))
            })
            .addCase(fetchComments.fulfilled, (state, action) => {
                const { postId, comments } = action.payload
                const post = state.posts.find(post => post.id === parseInt(postId))
                if (post) {
                    post.comments = comments
                }
            })
            .addCase(addPost.fulfilled, (state, action) => {
                state.posts.push({
                    ...action.payload,
                    id: state.posts.length + 1,
                    comments: []
                })
            })
            .addCase(addComment.fulfilled, (state, action) => {
                const { postId, body, email } = action.payload
                console.log(action.payload)
                const post = state.posts.find(post => post.id === parseInt(postId))

                if (post) {
                    post.comments.push({
                        id: post.comments.length + 1,
                        postId: parseInt(postId),
                        email,
                        body
                    })
                }
            })
    }
})

export const { setTitle, setComment, setError, resetForm, resetError } = postSlice.actions
export default postSlice.reducer
