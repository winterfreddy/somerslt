import React from 'react';

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
            <div>
                You have something!
            </div>
        )
    }

}

export default BlogIndex;