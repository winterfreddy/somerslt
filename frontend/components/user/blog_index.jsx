import React from 'react';
import BlogIndexItem from './blog_index_item';
import SidebarItem from './sidebar_item';

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
                <button className="media-url" onClick={() => this.props.openModal('url')}>URL</button>
            </div>
        )
    }

    userFollow() {
        let followed;
        if(this.props.currentUser.followIds !== undefined) {
            followed = this.props.currentUser.followIds.map((entry) => entry.followee_id);
        }
        return followed;
    }

    renderMainContent() {
        let followed = this.userFollow();
        if(this.props.allBlogs !== undefined && followed !== undefined) {
            let mainContent = [];
            this.props.allBlogs.forEach((blog) => {
                if (blog.author_id === this.props.currentUser.id || followed.includes(blog.author_id)) {
                    mainContent.push(blog);
                }
            })
            return(
                <ul className="blog-section">
                    {
                        mainContent.slice(0).reverse().map((blog) => (
                            <BlogIndexItem
                                key={blog.id}
                                allUsers={this.props.allUsers}
                                blog={blog}
                                fetchBlogs={this.props.fetchBlogs}
                                currentUser={this.props.currentUser}
                                deleteBlog={this.props.deleteBlog}
                                createLike={this.props.createLike}
                                deleteLike={this.props.deleteLike}
                            />
                        ))
                    }
                </ul>
            )
        }
    }

    renderSubscriptions() {
        let followed = this.userFollow();
        if(this.props.allUsers !== undefined && followed !== undefined) {
            let sidebar = [];
            this.props.allUsers.forEach((user) => {
                if(user.id !== this.props.currentUser.id && !followed.includes(user.id)) {
                    sidebar.push(user);
                }
            })
            return (
                <ul className="sidebar-section">
                    {
                        sidebar.map((user) => (
                            <SidebarItem
                                key={user.id}
                                user={user}
                                follow={this.props.follow}
                                allUsers={this.props.allUsers}
                                currentUser={this.props.currentUser}
                                fetchUsers={this.props.fetchUsers}
                                fetchBlogs={this.props.fetchBlogs}
                            />
                        ))
                    }
                </ul>
            )
        }
    }

    render() {
        return(
            <div>
                <div className="main-section">
                    {this.renderMediaLinks()}
                    {this.renderMainContent()}
                </div>
                <div className="sidebar-container">
                    <label>Recommended Users</label>
                    {this.renderSubscriptions()}
                </div>
            </div>
        )
    }

}

export default BlogIndex;