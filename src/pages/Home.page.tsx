// import { Welcome } from '../components/Welcome/Welcome';
// import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle';
import { FooterLinks } from '@/components/LpFooter/FooterLinks';
import { HeroImageBackground } from '@/components/LpHeader/HeroImageBackground';
import { HeroText } from '@/components/LpHeadertwo/HeroText';
import { EmailBanner } from '@/components/LpProfileBanner/EmailBanner';
import { EmpowerInspire } from '@/components/LpProfileBanner/EmpowerInspire';
import { LearnFromBest } from '@/components/LpProfileBanner/LearnFromBest';
import { TournamentBanner } from '@/components/LpProfileBanner/TournamentBanner';
import { UnitrorPlay } from '@/components/LpProfileBanner/UniteorPlay';
import { Arena } from '@/components/LpStepintoArena/Arena';
import { VoiceFromFiled } from '@/components/LpText/Voice';
import { HeaderMegaMenu } from '@/components/MaidaanLogo/HeaderMegaMenu';
import TestimonialSlider from '@/components/TestimonialSlider/TestimonialSlider';



export function HomePage() {
  return (
    <>
    {/* <ColorSchemeToggle/> */}
      {/* <Welcome />
      <ColorSchemeToggle /> */}
      <HeaderMegaMenu/>
      <HeroImageBackground/>
      <HeroText/>
      <EmailBanner/>
      <TournamentBanner/>
      <UnitrorPlay/>
      <LearnFromBest/>
      <EmpowerInspire/>
      <VoiceFromFiled/>
      {/* <TestimonialSlider/> */}
      <Arena/>
      <FooterLinks/>
    </>
  );
}
