import React from 'react';
import { Container, Grid, Card, Text, Button, Badge,SimpleGrid } from '@mantine/core';
// import { IconLocation, IconCalendar } from 'iconsax-react';
import classes from './Tournaments.module.css';
import Tcard from './Tcard';
import { NavLink } from 'react-router-dom';
import NextUpTcard from './NextUpTcard';
 


function Tournaments() {
   
  return (
    <Container size="lg" className={classes.container}>
      <Text className={classes.heading} >Ongoing</Text>
       <a href="/Tournament/Details" style={{textDecoration:'none'}}><Tcard/></a>

    <Text className={classes.heading}  mt={20}>Next Up</Text>
    <NextUpTcard/>
    </Container>

  );
};

export default Tournaments;
