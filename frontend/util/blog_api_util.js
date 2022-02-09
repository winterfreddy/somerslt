
export const fetchBlogs = () => (
    $.ajax({
        method: "GET",
        url: `/api/blogs`
    })
)

export const fetchBlog = (blogId) => (
    $.ajax({
        method: "GET",
        url: `/api/blogs/${blogId}`
    })
)

export const createBlog = (blog) => {
    return $.ajax({
        method: "POST",
        url: `/api/blogs`,
        data: { blog }
    })
}

export const updateBlog = (blog) => (
    $.ajax({
        method: "PATCH",
        url: `/api/blogs/${blog.id}`,
        data: { blog }
    })
)

export const deleteBlog = (blog) => (
    $.ajax({
        method: "DELETE",
        url: `/api/blogs/${blog.id}`
    })
)

export const createPhoto = (formData) => (
    $.ajax({
        url: '/api/blogs',
        method: 'POST',
        data: formData,
        contentType: false,
        processData: false,
        success: () => {
            window.location.reload();
        }
    })
)

export const updatePhoto = (data, blogId) => {
    return $.ajax({
        url: `/api/blogs/${blogId}`,
        method: 'PATCH',
        data: data,
        contentType: false,
        processData: false
    })
}