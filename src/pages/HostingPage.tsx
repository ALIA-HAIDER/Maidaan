import { HpBanner } from '@/components/HpBanner/HpBanner';
import HpDetailsPageLinks from '@/components/HpForm/HpDetailPageLinks';
import HpDetailsPage from '@/components/HpForm/HpDetailsPage';
import { HpDetailsubmit } from '@/components/HpForm/HpDetailsubmit';
import HpSchdulePage from '@/components/HpForm/HpSchedulePage';
import HpFormNavbar from '@/components/HpFormNavbar/HpFormNavbar';
import { HpNav } from '@/components/HpNav/HpNav';
import { StatsCard } from '@/components/HpStatsCard/StatsCard';
  const HostingPage: React.FC = () => {
  return (
    <>
    <HpNav/>
    <HpFormNavbar/>
    <HpDetailsPage/>
    {/* <HpFormNavbar/> */}
    {/* <HpDetailsPage/> */}
    {/* <HpBanner/>
    <StatsCard/> */}
    {/* <HpDetailsPageLinks/> */}
    {/* <HpSchdulePage/> */}
    <HpDetailsubmit/>
    </>
  );
};

export default HostingPage