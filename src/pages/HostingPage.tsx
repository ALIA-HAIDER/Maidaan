import { HpBanner } from '@/components/HpBanner/HpBanner';
import HpDetailsPage from '@/components/HpForm/HpDetailsPage';
import HpFormNavbar from '@/components/HpFormNavbar/HpFormNavbar';
import { HpNav } from '@/components/HpNav/HpNav';
import { StatsCard } from '@/components/HpStatsCard/StatsCard';
import React from 'react';


const HostingPage: React.FC = () => {
  return (
    <>
    <HpNav/>
    <HpFormNavbar/>
    <HpDetailsPage/>
    {/* <HpBanner/>
    <StatsCard/> */}
    </>
  );
};

export default HostingPage;
