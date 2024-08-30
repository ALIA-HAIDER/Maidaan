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
  import classes from './HeaderMegaMenu.module.css';
  
  
  export function HeaderMegaMenu() {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
    const theme = useMantineTheme();

  
    return (
      <Box pb={0}>
        <header className={classes.header}>
          <Group justify="space-between" h="100%">
            <MantineLogo size={30} />
  
            <Group h="100%" gap={0} visibleFrom="sm">
              <a href="/Tournament" className={classes.link}>
              Tournaments
              </a>
              <a href="#" className={classes.link}>
              Events
              </a>
              <a href="/Aca" className={classes.link}>
              Academies
              </a>
              <a href="/GvtSch" className={classes.link}>
              Government Schemes
              </a> 
            </Group>
  
            <Group visibleFrom="sm">
            {/* <a href="" className={classes.linkbtn}>
                Theme
              </a> */}
              <a href="/HostingPage" className={classes.linkbtn}>
                 Host an Event
              </a>
              <Button color='#F1A02F'className={classes.Signbtn}><a href="/SignUp" className={classes.Signbtn}>Sign up</a></Button>
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
  
            <a href="/Tournament" className={classes.link}>
              Tournaments
              </a>
              <a href="#" className={classes.link}>
              Events
              </a>
              <a href="/Aca" className={classes.link}>
              Academies
              </a>
              <a href="/GvtSch" className={classes.link}>
              Government Schemes
              </a> 
  
            <Divider my="sm" />
  
            <Group justify="center" grow pb="xl" px="md">
                 <a href="/HostingPage" className={classes.linkbtn}>
                 Host an Event
              </a>
              <Button color='#F1A02F' className={classes.Signbtn} ><a href="/SignUp" className={classes.Signbtn}>Sign up</a></Button>
            </Group>
          </ScrollArea>
        </Drawer>
      </Box>
    );
  }