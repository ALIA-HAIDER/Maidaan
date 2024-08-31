import {
  Group,
  Button,
  Divider,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  rem,
  useMantineTheme,
} from '@mantine/core';
import { MantineLogo } from '@mantinex/mantine-logo';
import { useDisclosure } from '@mantine/hooks';
import { useState, useEffect } from 'react';
import classes from './HeaderMegaMenu.module.css';

interface NavProps {
  NavLinks: string;
  SetNavLinks: React.Dispatch<React.SetStateAction<string>>;
}

export function HeaderMegaMenu({ NavLinks, SetNavLinks }: NavProps) {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const [hideLinks, setHideLinks] = useState(false);
  const theme = useMantineTheme();

  useEffect(() => {
    // Retrieve hideLinks state from localStorage on component mount
    const savedHideLinks = localStorage.getItem('hideLinks');
    if (savedHideLinks) {
      setHideLinks(JSON.parse(savedHideLinks));
    }
  }, []);

  const handleHostEventClick = () => {
    setHideLinks(true);
    localStorage.setItem('hideLinks', JSON.stringify(true)); // Save hideLinks state to localStorage
  };

  return (
    <Box pb={0}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <a href="/" style={{ textDecoration: 'none', color: 'initial' }}>
            <MantineLogo size={30} />
          </a>

          {!hideLinks ? (
            <Group h="100%" gap={0} visibleFrom="sm">
              <a
                onClick={() => SetNavLinks('Tournaments')}
                className={`${classes.link}`}
              >
                <p
                  className={`${
                    NavLinks === 'Tournaments'
                      ? classes.active
                      : classes.inactive
                  }`}
                >
                  Tournaments
                </p>
              </a>
              <a
                onClick={() => SetNavLinks('Events')}
                className={classes.link}
              >
                <p
                  className={`${
                    NavLinks === 'Events' ? classes.active : classes.inactive
                  }`}
                >
                  Events
                </p>
              </a>
              <a
                onClick={() => SetNavLinks('Academies')}
                className={classes.link}
              >
                <p
                  className={`${
                    NavLinks === 'Academies'
                      ? classes.active
                      : classes.inactive
                  }`}
                >
                  Academies
                </p>
              </a>
              <a
                onClick={() => SetNavLinks('GovernmentSchemes')}
                className={classes.link}
              >
                <p
                  className={`${
                    NavLinks === 'GovernmentSchemes'
                      ? classes.active
                      : classes.inactive
                  }`}
                >
                  Government Schemes
                </p>
              </a>
            </Group>
          ) : null}

          <Group visibleFrom="sm">
           {!hideLinks?( <a
              href="/HostingPage"
              className={classes.linkbtn}
              onClick={handleHostEventClick} // Hide links when clicked
            >
              Host an Event
            </a>):null}

            <Button color="#F1A02F" className={classes.Signbtn}>
              <a href="/SignUp" className={classes.Signbtn}>
                Sign up
              </a>
            </Button>
          </Group>

          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          {!hideLinks && (
            <>
              <a onClick={() => SetNavLinks('Tournaments')} className={classes.link}>
                Tournaments
              </a>
              <a onClick={() => SetNavLinks('Events')} className={classes.link}>
                Events
              </a>
              <a onClick={() => SetNavLinks('Academies')} className={classes.link}>
                Academies
              </a>
              <a onClick={() => SetNavLinks('GovernmentSchemes')} className={classes.link}>
                Government Schemes
              </a>
            </>
          )}

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <a
              href="/HostingPage"
              className={classes.linkbtn}
              onClick={handleHostEventClick} // Hide links when clicked
            >
              Host an Event
            </a>
            <Button color="#F1A02F" className={classes.Signbtn}>
              <a href="/SignUp" className={classes.Signbtn}>
                Sign up
              </a>
            </Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
