import { HpBanner } from '@/components/HpBanner/HpBanner';
import HpDetailsPage from '@/components/HpForm/HpDetailsPage';
import HpFormPrizePage from '@/components/HpForm/HpFormPrizePage';
import HpFormNavbar from '@/components/HpFormNavbar/HpFormNavbar';
import { HpNav } from '@/components/HpNav/HpNav';
import { StatsCard } from '@/components/HpStatsCard/StatsCard';
// import classes from './HostingPage.module.css'
const HostingPage: React.FC = () => {
  
  return (
    <>
    {/* <HpNav/> */}
    <HpFormNavbar/>
    <HpFormPrizePage/>
    {/* <HpDetailsPage/> */}
    {/* <HpBanner/>
    <StatsCard/> */}
    </>
  );
};

export default HostingPage;
