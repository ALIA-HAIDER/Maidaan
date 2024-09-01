import { PpProfileBox } from '@/components/PpProfileBox/PpProfileBox';
import { PpProfileinfoBox } from '@/components/PpProfileinfoBox/PpProfileinfoBox';
import React from 'react';
import classes from './HostingPage.module.css';



function ProfilePage() {
  return (
    <div className={classes.Ppdiv}>
      
      <PpProfileBox/>
      <PpProfileinfoBox/>

    </div>
  );
}

export default ProfilePage;
