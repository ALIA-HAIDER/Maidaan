import { GpBanner } from '@/components/GpBanner/GpBanner';
import { GpFaq } from '@/components/GpFaq/GpFaq';
import { GpHeader } from '@/components/GpHeader/GpHeader';
import { GpSchemes } from '@/components/GpSchemesection/Gpschemes';
import { Gpvoice } from '@/components/Gpvoice/Gpvoice';
import React from 'react';


const GovtSchemes: React.FC = () => {
  return (
    
    <>
    <GpHeader/>
    <GpBanner/>
    <Gpvoice/>
    <GpSchemes/>
    <GpFaq/>

    </>
  );
};

export default GovtSchemes;
