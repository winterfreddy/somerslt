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

    renderMediaLinks() {
        return(
            <div className="media-block">
                <h1 className="avatar"></h1>
                <ul className="media-links">
                    <li>
                        {this.renderText()}
                    </li>
                </ul>
            </div>
        )
    }

    renderText() {
        return(
            <div className="media-text">
                <button onClick={ () => this.props.openModal('text')}>Text</button>
            </div>
        )
    }

    render() {
        return(
            <div className="main-section">
                {this.renderMediaLinks()}
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