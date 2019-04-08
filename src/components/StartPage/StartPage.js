import React, {Component} from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import './StartPage.sass'

class StartPage extends Component {

    render() {
        return (
            <div className="main-page-container">
                <div className="flex-wrapper">
                    <header className="StartPageHeader">
                        <h1>AWESOME BATTLESHIPS</h1>
                    </header>
                    <div className="welcomeForm">
                        <form className="myForm">
                            <TextField className="nameLabel"
                                       autoComplete="false"
                                       id="name"
                                       label="Name"/>
                            <Button variant="contained" color="secondary" size="medium" className="jumpInButton">
                                Jump IN
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default StartPage