import { Title, Text, Button, Container } from '@mantine/core';
import classes from './HpBanner.module.css';

export function HpBanner() {
  return (
    <Container className={classes.wrapper} size={1400}>
      <div className={classes.inner}>
        <Title className={classes.title}>Host a Tournament! for any stack</Title>

        <Container p={0} size={600}>
          <Text size="lg" c="dimmed" className={classes.description}>
            Nothing beats the excitement of participating in a tournament, except for the thrill of
            organizing one yourself! Join the community of tournament organizers on Maidaan and
            manage your registrations, match schedules, communications, and scoring, all from one
            platform.
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button className={classes.control} size="lg" color='#058A4A'>
          Oraganize Your Tournament
          </Button>
        </div>
      </div>
    </Container>
  );
}
