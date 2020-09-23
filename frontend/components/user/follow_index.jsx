import React from 'react';

class FollowIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUsers();
    }

    render() {
        return(
            <h1>Youre on the Follows page!</h1>
        )
    }

}

export default FollowIndex;