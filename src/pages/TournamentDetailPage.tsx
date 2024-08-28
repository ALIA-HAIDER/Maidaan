import { FooterLinks } from "@/components/LpFooter/FooterLinks";
import { HeaderMegaMenu } from "@/components/MaidaanLogo/HeaderMegaMenu";
import CompetitionDetails from "@/components/TdpCompetitionDetails/CompetitionDetails";
import EventCard from "@/components/TdpEventCard/EventCard";
import { Tdpnav } from "@/components/TDPnavbar/Tdpnav";






export function TournamentDetailPage() {
  return (
    <>
      <HeaderMegaMenu/>
      <Tdpnav/>
      <CompetitionDetails/>
      <EventCard/>

      <FooterLinks/>
   
    </>
  );
}
