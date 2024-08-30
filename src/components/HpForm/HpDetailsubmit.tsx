import { useState } from 'react';
import { Button, Container, Select, Text } from '@mantine/core';
import classes from './HpDetailsPage.module.css';

export function HpDetailsubmit() {
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<string>('');

  const handleStatusChange = (value: string | null) => {
    if (value !== null) {
      setStatus(value);
      setSubmitted(false); // Reset the submitted state when status changes
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <Container className={classes.formContainer}>
      <div className={classes.registrationStatusContainer}>
        <Select
          label="Registration Status"
          placeholder="Select status"
          required
          data={['Open', 'Upcoming', 'Closed']}
          value={status}
          onChange={handleStatusChange}
          className={classes.statusSelect}
          styles={(theme) => ({
            item: {
              '&[data-selected]': {
                backgroundColor: '#058A4A',
                color: 'white',
              },
              '&[data-hovered]': {
                backgroundColor: '#046C3A',
                color: 'white',
              },
            },
            dropdown: {
              backgroundColor: 'white',
            },
            input: {
              backgroundColor: '#058A4A',
              color: 'white',
            },
            label: {
              fontWeight: 'bold',
              color: '#333',
            },
          })}
        />

        <Button
          fullWidth
          mt="md"
          className={classes.submitButton}
          color="green"
          radius="md"
          size="md"
          styles={(theme) => ({
            root: {
              backgroundColor: '#058A4A',
              '&:hover': {
                backgroundColor: '#046C3A',
              },
            },
          })}
          onClick={handleSubmit}
        >
          Submit
        </Button>

        {submitted && (
          <Text size="sm" color="green" mt="xs" className={classes.submittedText}>
            Submitted
          </Text>
        )}
      </div>

      <Button
        fullWidth
        mt="md"
        className={classes.viewPlayersButton}
        color="green"
        variant="outline"
        radius="md"
        size="md"
      >
        View all the Registered Players
      </Button>
    </Container>
  );
}
