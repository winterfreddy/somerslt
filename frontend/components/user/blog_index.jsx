import React from 'react';
import BlogIndexItem from './blog_index_item';

// blog index presentational component

class BlogIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchBlogs();
        this.props.fetchUsers();
    }

    renderMediaLinks() {
        return(
            <div className="media-block">
                <h1 className="avatar-fixed"></h1>
                <ul className="media-links">
                    <li>
                        {this.renderText()}
                    </li>
                    <li>
                        {this.renderPhoto()}
                    </li>
                    <li>
                        {this.renderQuote()}
                    </li>
                    <li>
                        {this.renderUrl()}
                    </li>
                </ul>
            </div>
        )
    }

    renderText() {
        return(
            <div className="media-button">
                <button className="media-icon" onClick={() => this.props.openModal('text')}><i className="fas fa-font"></i><i className="fas fa-bold"></i></button>
                <button className="media-text" onClick={ () => this.props.openModal('text')}>Text</button>
            </div>
        )
    }

    renderPhoto() {
        return (
            <div className="media-button">
                <button className="media-icon-photo" onClick={() => this.props.openModal('photo')}><i className="fas fa-camera"></i></button>
                <button className="media-photo" onClick={() => this.props.openModal('photo')}>Photo</button>
            </div>
        )
    }

    renderQuote() {
        return (
            <div className="media-button">
                <button className="media-icon-quote" onClick={() => this.props.openModal('quote')}><i className="fas fa-quote-left"></i>&nbsp;&nbsp;<i className="fas fa-quote-right"></i></button>
                <button className="media-quote" onClick={() => this.props.openModal('quote')}>Quote</button>
            </div>
        )
    }

    renderUrl() {
        return (
            <div className="media-button">
                <button className="media-icon-url" onClick={() => this.props.openModal('url')}><i className="fas fa-link"></i></button>
                <button className="media-url" onClick={() => this.props.openModal('url')}>Url</button>
            </div>
        )
    }

    render() {
        // console.log(this.props);
        return(
            <div className="main-section">
                {this.renderMediaLinks()}
                <ul className="blog-section">
                    {
                        this.props.allBlogs.map( (blog) => (
                            <BlogIndexItem
                                key={blog.id}
                                allUsers={this.props.allUsers}
                                blog={blog}
                                currentUser={this.props.currentUser}
                                deleteBlog={this.props.deleteBlog}
                            />
                        ))
                    }
                </ul>
            </div>
        )
    }

}

export default BlogIndex;