import { HpBanner } from '@/components/HpBanner/HpBanner';
import { HpNav } from '@/components/HpNav/HpNav';
import { StatsCard } from '@/components/HpStatsCard/StatsCard';
import React from 'react';


const HostingPage: React.FC = () => {
  return (
    <>
    <HpNav/>
    <HpBanner/>
    <StatsCard/>
    </>
  );
};

export default HostingPage;
