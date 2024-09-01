import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { Router } from './Router'
import { theme } from './theme';
import { HeaderMegaMenu } from './components/MaidaanLogo/HeaderMegaMenu';
import { FooterLinks } from './components/LpFooter/FooterLinks';
import { useState } from 'react';
import Tournaments from './components/Tournaments/Tournaments';
import GovtSchemes from './pages/GovtSchemes';
import Academies from './pages/Academies';
import PageProvider from './Context';
import EventPage from './pages/EventPage';
export default function App() {
  // type NL = 'Tournaments' | 'Events' | 'Academies' | 'GovtSheme'| 'Home';
  const [NavLinks,SetNavLinks]=useState<string>('')
  // const [Page,SetPage] =useState<string>('')
  return (
    <MantineProvider theme={theme}>
    <PageProvider>
    <HeaderMegaMenu SetNavLinks={SetNavLinks} NavLinks={NavLinks} />
     {NavLinks==='Tournaments'?<Tournaments/>:NavLinks==='Events'?<EventPage/>:NavLinks==='GovernmentSchemes'?<GovtSchemes/>:NavLinks==='Academies'?<Academies/>:<Router />
}
      <FooterLinks/>
    </PageProvider>
    </MantineProvider>

  );
} 