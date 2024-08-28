import { FooterLinks } from "@/components/LpFooter/FooterLinks";
import { HeaderMegaMenu } from "@/components/MaidaanLogo/HeaderMegaMenu";

import { Tdpnav } from "@/components/TDPnavbar/Tdpnav";
import ChampionsTrophy from "@/components/TdpPrizeChampionsTrophy/ChampionsTrophy";






export function TournamentpagePrize() {
  return (
    <>
      <HeaderMegaMenu/>
      <Tdpnav/>
      <ChampionsTrophy/>  
      

      <FooterLinks/>
   
    </>
  );
}
