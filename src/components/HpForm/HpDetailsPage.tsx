import React from 'react';
import { TextInput, Textarea, Container, Grid } from '@mantine/core';
import styles from './HpDetailsPage.module.css';

const HpDetailsPage: React.FC = () => {
  return (
    <Container className={styles.formContainer}>
      <Grid>
        <Grid.Col span={12} >
          <TextInput label="Tournament Name" placeholder="Enter tournament Name" required />
        </Grid.Col>
        <Grid.Col span={6} >
          <TextInput label="Start Date" placeholder="DD/MM/YYYY" required />
        </Grid.Col>
        <Grid.Col span={6} >
          <TextInput label="End Date" placeholder="DD/MM/YYYY" required />
        </Grid.Col>
        <Grid.Col span={12} >
          <TextInput label="Venue Name" placeholder="Enter the venue name" required />
        </Grid.Col>
        <Grid.Col span={12} >
          <TextInput label="City" placeholder="Enter City" required />
        </Grid.Col>
        <Grid.Col span={12}>
          <Textarea label="Tournament Details" placeholder="Provide details of the tournament" required />
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default HpDetailsPage;
