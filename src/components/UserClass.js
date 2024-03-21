import React from "react"

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);

        this.state = {
            userInfo: {}
        }
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/Priyank-Singhal");
        const json = await data.json();
        console.log("json", json);
        this.setState({
        userInfo: json 
        })
    }

    render() {
        // const { name } = this.props;
        const { name, avatar_url } = this.state.userInfo;
        // debugger;
        return (
            <div className="user-card">
                <img src={avatar_url} alt="" />
                <h2>Name: {name}</h2>
                <h3>Location</h3>
            </div>
        )
    }
}

export default UserClass