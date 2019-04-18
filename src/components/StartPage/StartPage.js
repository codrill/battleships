import React, {Component} from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import './StartPage.sass'

const MAX_LENGTH = 5;

class StartPage extends Component {

  constructor() {
    super();

    this.state = {
      enabledButton: false,
      errorValidation: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const eventTargetValue = event.target.value;

    this.validationChecker(eventTargetValue.length);

    this.userName = eventTargetValue;
  }

  handleSubmit(event) {
    this.props.onViewChange({changeView: true, userName: this.userName});
    event.preventDefault();
  }

  validationChecker(labelLength) {
    if (labelLength <= MAX_LENGTH) {
      this.setState({
        enabledButton: true
      });
    }

    if (labelLength > MAX_LENGTH) {
      this.setState({
        errorValidation: true,
        enabledButton: false
      });
    }
    if (labelLength <= MAX_LENGTH && labelLength > 0 && this.state.errorValidation === true) {
      this.setState({
        errorValidation: false,
      });
    }

    if (labelLength === 0 && this.state.errorValidation === true)
      this.setState({
        errorValidation: false,
        enabledButton: false
      });

    if (labelLength === 0 && this.state.enabledButton === true) {
      this.setState({
        enabledButton: false
      })
    }
  }

  render() {
    return (
      <div className="flex-wrapper">
        <header className="StartPageHeader">
          <h1>AWESOME BATTLESHIPS</h1>
        </header>
        <div className="welcomeForm">
          <TextField
            error={this.state.errorValidation}
            className="nameLabel"
            label="Your Name"
            onChange={this.handleChange}
            variant="outlined"/>
          <Button variant="contained" color="secondary" size="medium" className="jumpInButton"
                  onClick={this.handleSubmit} disabled={!this.state.enabledButton}>
            Jump IN
          </Button>
        </div>
      </div>
    )
  }
}

export default StartPage