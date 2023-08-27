import React from 'react';
import { Card, Elevation } from "@blueprintjs/core";
import { ThemeContext } from '../Context/Theme';
import { SettingsContext } from '../Context/Site';
import { useContext } from 'react';

// the differnce between function based components and class based components (like Footer and Content) in getting the data from more than context component


export default function Footer() {
    const site = useContext(SettingsContext);
    const theme = useContext(ThemeContext);

    return (
        <>
            <footer>
                <h3>the mode is {theme.mode}</h3>
                <Card elevation={Elevation.TWO}>
                    <h5>CopyRight 2023 {site.title}</h5>
                    <p>Card content</p>
                    <div>
                        <a href={`http://www.twitter.com/${site.twitter}`}> @{site.twitter}</a>
                    </div>
                </Card>
            </footer>
        </>
    )
}

