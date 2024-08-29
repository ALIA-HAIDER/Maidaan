import React, { useState } from 'react';
import { Burger, Drawer, Group, Button } from '@mantine/core';
import styles from './HpFormNavbar.module.css';

const HpFormNavbar: React.FC = () => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.logo}>Sports Event</div>
        <div className={styles.links}>
          <Button variant="subtle">Details</Button>
          <Button variant="subtle">Links</Button>
          <Button variant="subtle">Prizes</Button>
          <Button variant="subtle">Schedule</Button>
          <Button variant="subtle">Submit</Button>
        </div>
        <Burger opened={opened} onClick={() => setOpened((o) => !o)} className={styles.burger} />
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
