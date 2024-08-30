import React, { useState } from 'react';
import { Burger, Drawer, Group, Button } from '@mantine/core';
import classes from './HpFormNavbar.module.css';

const HpFormNavbar: React.FC = () => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <div className={classes.navbar}>
        <div className={classes.links}>
          <Button className={classes.Btn} variant="subtle">Details</Button>
          <Button className={classes.Btn} variant="subtle">Links</Button>
          <Button className={classes.Btn} variant="subtle">Prizes</Button>
          <Button className={classes.Btn} variant="subtle">Schedule</Button>
          <Button className={classes.Btn} variant="subtle">Submit</Button>
        </div>
        <Burger opened={opened} onClick={() => setOpened((o) => !o)} className={classes.burger} />
      </div>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title="Menu"
        padding="md"
        size="sm"
      >
        <Button variant="subtle" fullWidth>Details</Button>
        <Button variant="subtle" fullWidth>Links</Button>
        <Button variant="subtle" fullWidth>Prizes</Button>
        <Button variant="subtle" fullWidth>Schedule</Button>
        <Button variant="subtle" fullWidth>Submit</Button>
      </Drawer>
    </>
  );
};

export default HpFormNavbar;
