import React from 'react';
import { Container, Grid, Card, Text, Button, Badge } from '@mantine/core';
// import { IconLocation, IconCalendar } from 'iconsax-react';
import classes from './Tournaments.module.css';
import Tcard from './Tcard';
import { NavLink } from 'react-router-dom';


const Tournaments: React.FC = () => {
   
  return (
    <Container size="lg" className={classes.container}>
      <Text className={classes.heading}>Ongoing</Text>
      <Grid>
      <Grid.Col span={6} >
      <NavLink to={"/Tournament/Details"}className={classes.Link}><Tcard/></NavLink>
      </Grid.Col>
      <Grid.Col span={6}>
        <Tcard/>
      </Grid.Col>   
      </Grid>

      <Grid>
      <Grid.Col span={6}>
      <Tcard/>
      </Grid.Col>
      <Grid.Col span={6}>
        <Tcard/>
      </Grid.Col>
      </Grid>

      <Grid>
      <Grid.Col span={6}>
      <Tcard/>
      </Grid.Col>
      <Grid.Col span={6}>
        <Tcard/>
      </Grid.Col>
      </Grid>

    </Container>
  );
};

export default Tournaments;
