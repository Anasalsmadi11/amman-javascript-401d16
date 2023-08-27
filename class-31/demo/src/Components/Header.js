import React from "react";
import { Navbar, Alignment, Button } from '@blueprintjs/core';
// import { SettingsContext } from '../Context/Site';
import { ThemeContext } from '../Context/Theme';
export default class Header extends React.Component {
    // static contextType = SettingsContext; 
    static contextType = ThemeContext; // contextType naming convention is mandotory,we put contextType if we only importing data from only one context

    render() {
        return (
            <header>
                <Navbar>
                    <Navbar.Group align={Alignment.LEFT}>
                        {/* <Navbar.Heading>Title from Context {this.context.title}</Navbar.Heading> */}
                        <Navbar.Divider />
                        <Button icon="refresh" onClick={this.context.toggleMode} />
                    </Navbar.Group>
                </Navbar>
            </header>
        )
    }
}

