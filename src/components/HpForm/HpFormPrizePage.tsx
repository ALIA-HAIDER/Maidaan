import React from 'react';
import { TextInput, Textarea, Container, Grid,Button } from '@mantine/core';
import styles from './HpDetailsPage.module.css';

const HpFormPrizePage: React.FC = () => {
  return (
    <Container mt={30} className={styles.formContainer}>
      <Grid>
        <Grid.Col span={6} >
          <TextInput label="Prize Name" placeholder="Enter tournament Name" required />
        </Grid.Col>
        <Grid.Col span={6} >
          <TextInput label="Amount" placeholder="DD/MM/YYYY" required />
        </Grid.Col>
        <Grid.Col span={7} >
          <TextInput label="Trophy" placeholder="Describe the Trophy" required />
        </Grid.Col>
        <Grid.Col span={7} >
          <TextInput label="Medal" placeholder="Describe the Medal" required />
        </Grid.Col>
      
        <Grid.Col span={8}>
        <Button variant='outline' color='red'>Delete Prize</Button>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default HpFormPrizePage;
