import cx from 'clsx';
import { Title, Text,  Button, Overlay } from '@mantine/core';
import classes from './HeroImageBackground.module.css';

export function HeroImageBackground() {
  return (
    <div className={classes.wrapper} >
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>
        Elevate Your Game and Unlock Your {' '}
          <Text component="span" inherit className={classes.highlight}>
          Full Potential
          </Text>
        </Title>


        <div className={classes.controls}>
          <Button className={classes.control} variant="white" size="lg">
            <a href="/Tournament" className={classes.a}>Explore Tournaments</a>
          </Button>
          <Button className={cx(classes.control, classes.secondaryControl)} size="lg">
          <a href="/EventPage"  style={{textDecoration:'none'  ,color: 'white'}}>Find a Sports Event</a>
          </Button>
        </div>
      </div>
    </div>
  );
}