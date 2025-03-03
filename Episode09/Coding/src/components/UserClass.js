import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        // console.log(props);
        this.state = {
            count: 0,
            count2: 2,
            userInfo: {
                name: "Dummy",
                location: "Dummy",
                contact: "Dummy"
            }
        }
        console.log("Child Constructor "+this.props.name);
    }
  
    async componentDidMount() {
        // console.log("Child Component Did Mount "+this.props.name);
        // const data = await fetch("https://api.github.com/users/iamaniket143");
        // const json = await data.json();
        
        // console.log(json);
        // this.setState({
        //     userInfo: json
        // })
        // this.timer = setInterval(() => {
        //     console.log("Hello world");
        // },1000);
    }

    componentDidUpdate() {
        console.log("Child Component Did Update "+this.props.name);
    }

    componentWillUnmount() {
        // clearInterval(this.timer);
        console.log("C hild Component Will Unmount "+this.props.name);
    }

    render() {
        console.log("Child Render "+this.props.name);
        const {name} = this.props;
        return (
            <div className="user-card">
                <h4>Class</h4>
                <h4>Count: {this.state.count} {this.state.count2}</h4>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count+1,
                        count2:this.state.count2+2,
                    });
                }}>Increment</button>
                <button onClick={() => {
                    this.setState({count: this.state.count-1});
                }}>Decrement</button>
                <h2>Name: {this.state.userInfo.name}</h2>
                <h3>Location: {this.state.userInfo.location}</h3>
                <h4>Contact: @{this.state.userInfo.login}</h4>
            </div>
          )
    }
}

class UserClass1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count:0,
        }
    }
    render() {
        const {name} = this.props;
        return (
            <div className="user-card">
                <h4>Class</h4>
                <h4>Count: {this.state.count}</h4>
                <button onClick={() => {
                    this.setState({count: this.state.count+1});
                }}>Increment</button>
                <h2>Name: {name}</h2>
                <h3>Location: {this.props.location}</h3>
                <h4>Contact: @{this.props.contact}</h4>
            </div>
          )
    }
}

export default UserClass;