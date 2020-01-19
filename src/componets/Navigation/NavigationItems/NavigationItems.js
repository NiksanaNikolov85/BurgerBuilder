import React from 'react';
import classes from './NavigationItems.module.css'
import NavigationItem from '../NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact > Burger Bulder</NavigationItem>
        <NavigationItem link="/Orders"> Orders</NavigationItem>

    </ul>
)

export default navigationItems;