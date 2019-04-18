import * as React from "react";


class Dashboard extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      userName: this.props.userName
    }
  }

  render() {
    return (
      <div>
        <h1>Hello {this.state.userName} </h1>
      </div>

    )
  }
}

export default Dashboard