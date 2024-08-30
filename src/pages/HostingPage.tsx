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
  const HostingPage: React.FC = () => {
    const [page,setPage]=useState<string>('DetailsPage')
  return (
    <>
    <HpNav setPage={setPage} page={page}/>
    <HpFormNavbar/>
    
    {page==='LinksPage'?<HpDetailsPageLinks setPage={setPage} page={page}/>:
    page==='PrizesPage'?<HpFormPrizePage setPage={setPage} page={page}/>:
    page==='SchedulePage'?<HpSchdulePage setPage={setPage} page={page}/>:
    page==='SubmitPage'?<HpDetailsubmit setPage={setPage} page={page}/>:
    <HpDetailsPage setPage={setPage} page={page}/>}
    
    </>
  );
};

export default HostingPage