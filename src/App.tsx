import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { Router } from './Router';
import { theme } from './theme';
import { HeaderMegaMenu } from './components/MaidaanLogo/HeaderMegaMenu';
import { FooterLinks } from './components/LpFooter/FooterLinks';


export default function App() {
  return (
    <MantineProvider theme={theme}>
      <HeaderMegaMenu/>
      <Router />
      <FooterLinks/>
    </MantineProvider>
  );
}
