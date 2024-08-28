import cx from 'clsx';
import { Title, Text, Container, Button, Overlay } from '@mantine/core';
import classes from './GpHeader.module.css';

export function GpHeader() {
  return (
    <div className={classes.wrapper} >
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>
        Government Schemes on Fitness and Sports {' '}
        </Title>
        <Container size={640}>
          <Text size="lg" className={classes.description}>
          "Empowering Fitness, Nurturing Sportsmanship"
          </Text>
        </Container>


        <div className={classes.controls}>
          <Button className={classes.control} variant="white" size="lg">
            <a href="/Tournament" className={classes.a}>Explore Scheme</a>
          </Button>
          {/* <Button className={cx(classes.control, classes.secondaryControl)} size="lg">
          Explore Scheme
          </Button> */}
        </div>
      </div>
    </div>
  );
}