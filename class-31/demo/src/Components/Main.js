import React from "react";
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

import { ThemeContext } from '../Context/Theme'; // make sure dont change the name of ThemeContext cus it is imprted

export default class Main extends React.Component {
    static contextType = ThemeContext; // // contextType naming convention is mandotory,we put contextType if we only importing data from only one context
    render() {
        return (
            <div className={this.context.mode}>
                <Header />
                <Content />
                <Footer />
            </div>
        )
    }
}

