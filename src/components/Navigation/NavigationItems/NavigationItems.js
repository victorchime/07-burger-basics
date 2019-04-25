import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from '../../Navigation/NavigationItems/NavigationItem/NavigationItem'

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active>Burger Builder</NavigationItem>
        <NavigationItem link="/" active>Checkout</NavigationItem>
    </ul>
);

export default navigationItems;