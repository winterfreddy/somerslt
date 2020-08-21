import React from 'react';
import BlogIndexItem from './blog_index_item';

// blog index presentational component

class BlogIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchBlogs();
    }

    render() {
        return(
            <div className="feed-section">
                <ul>
                    {
                        this.props.allBlogs.map( (blog) => (
                            <BlogIndexItem key={blog.id} blog={blog} />
                        ))
                    }
                </ul>
            </div>
        )
    }

}

export default BlogIndex;