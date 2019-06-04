import React, {Component} from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import './StartPage.sass'

const MAX_LENGTH = 10;
const regex = '^[a-zA-Z0-9]*$';

class StartPage extends Component {

    constructor() {
        super();

        this.state = {
            enabledButton: false,
            errorValidation: false
        };

        this.regexExpression = new RegExp(regex);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const eventTargetValue = event.target.value;
        if (this.regexCheck(eventTargetValue)) {
            this.validationChecker(eventTargetValue.length);
            this.userName = eventTargetValue;
        }
    }

    handleSubmit(event) {
        this.props.onViewChange({changeView: true, userName: this.userName});
        event.preventDefault();
    }

    regexCheck(event) {
        if (event.match(this.regexExpression)) {
            if (!this.state.enabledButton) {
                this.changeValidation(true);
                return true
            }
            else return true
        }
        else {
            this.changeValidation(false, true);
        }
    }

    validationChecker(labelLength) {
        if (labelLength <= MAX_LENGTH)
            this.changeValidation(true);

        if (labelLength > MAX_LENGTH)
            this.changeValidation(false,true);

        if (labelLength <= MAX_LENGTH && labelLength > 0 && this.state.errorValidation === true)
            this.changeValidation(true, false);

        if (labelLength === 0 && this.state.errorValidation === true)
            this.changeValidation(false, true);

        if (labelLength === 0 && this.state.enabledButton === true)
            this.changeValidation(false, null);
    }

    changeValidation = (enabledButton, errorValidation) => {
        this.setState({
            enabledButton: enabledButton,
            errorValidation: errorValidation
        })
    };

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