import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = ( ) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Check out</NavigationItem>
        <NavigationItem link="/device-list">Device List</NavigationItem>
    </ul>
);

export default NavigationItems;