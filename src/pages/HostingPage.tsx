import { HpBanner } from '@/components/HpBanner/HpBanner';
import HpDetailsPageLinks from '@/components/HpForm/HpDetailPageLinks';
import HpDetailsPage from '@/components/HpForm/HpDetailsPage';
import { HpDetailsubmit } from '@/components/HpForm/HpDetailsubmit';
import HpFormPrizePage from '@/components/HpForm/HpFormPrizePage';
import HpSchdulePage from '@/components/HpForm/HpSchedulePage';
import HpFormNavbar from '@/components/HpFormNavbar/HpFormNavbar';
import { HpNav } from '@/components/HpNav/HpNav';
import { StatsCard } from '@/components/HpStatsCard/StatsCard';
import { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Box,Stack,Group,Button,Burger,Drawer,ScrollArea,rem,Container} from '@mantine/core';
import classes from '@/components/HpNav/HpNav.module.css';
import MaidaanLogo from '@/assets/Maidaan.png'
import { MantineLogo } from '@mantinex/mantine-logo';
import classes2 from '@/components/HpFormNavbar/HpFormNavbar.module.css'
  const HostingPage: React.FC = () => {
    const [opened, setOpened] = useState(false);
    const [page,setPage]=useState<string>('')
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  return (
    <>
       
  
   <Box pb={0} className={classes.navbar}>
        <header className={classes.header}>
          <Group justify="space-between" h="100%">
            <MantineLogo size={30} />
  
            <Group visibleFrom="sm">

              <Button color='#058A4A'className={classes.Signbtn}><a href="/SignUp" className={classes.Signbtn}>Sign up</a></Button>
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
  
            <Stack justify="center"  pb="xl" px="md">
            <Button color='#058A4A' className={classes.Signbtn} ><a href="/" className={classes.Signbtn}>Home</a></Button>
              <Button color='#058A4A' className={classes.Signbtn} ><a href="/SignUp" className={classes.Signbtn}>Sign up</a></Button>
            </Stack>
          </ScrollArea>
        </Drawer>
      </Box>

      <div className={classes2.HpFormNavbar}>
        <div className={classes2.links}>
          <Button onClick={()=>setPage('DetailsPage')} className={`${classes2.Btn} ${page==='DetailsPage'?classes2.active:null}`} variant="subtle" color= '#058A4A'>Details</Button>
          <Button onClick={()=>setPage('LinksPage')} className={`${classes2.Btn} ${page==='LinksPage'?classes2.active:null}`} variant="subtle" color= '#058A4A'>Links</Button>
          <Button onClick={()=>setPage('PrizesPage')} className={`${classes2.Btn} ${page==='PrizesPage'?classes2.active:null}`} variant="subtle"color= '#058A4A'>Prizes</Button>
          <Button onClick={()=>setPage('SchedulePage')} className={`${classes2.Btn} ${page==='SchedulePage'?classes2.active:null}`} variant="subtle"color= '#058A4A'>Schedule</Button>
          <Button onClick={()=>setPage('SubmitPage')} className={`${classes2.Btn} ${page==='SubmitPage'?classes2.active:null}`} variant="subtle"color= '#058A4A'>Submit</Button>
        </div>
        <Burger opened={opened} onClick={() => setOpened((o) => !o)} className={classes2.burger} />
      </div>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title="Menu"
        padding="md"
        size="sm"
      >
        <Button onClick={()=>setPage('DetailsPage')} variant="subtle" fullWidth>Details</Button>
        <Button onClick={()=>setPage('LinksPage')} variant="subtle" fullWidth>Links</Button>
        <Button onClick={()=>setPage('PrizesPage')} variant="subtle" fullWidth>Prizes</Button>
        <Button onClick={()=>setPage('SchedulePage')} variant="subtle" fullWidth>Schedule</Button>
        <Button onClick={()=>setPage('SubmitPage')} variant="subtle" fullWidth>Submit</Button>
      </Drawer>


      <Container className={classes.container}>

   {  page==='DetailsPage'?(
      <HpDetailsPage setPage={setPage} page={page}/>
        
    ):
    page==='LinksPage'?(
    <HpDetailsPageLinks setPage={setPage} page={page}/>
    ):
    page==='PrizesPage'?(
<HpFormPrizePage setPage={setPage} page={page}/>
    ):
    page==='SchedulePage'?(
    <HpSchdulePage setPage={setPage} page={page}/>
    ):
    page==='SubmitPage'?(
    <HpDetailsubmit setPage={setPage} page={page}/>
    ):
      <HpBanner setPage={setPage} page={page}/> }
   </Container>
    
    </>
  );
};

export default HostingPage