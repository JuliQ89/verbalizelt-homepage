import DownloadAppCTA from "@/components/DownloadAppCTA";
import FeaturesHighlight from "@/components/FeaturesHighlight";
import Footer from "@/components/Footer";
import GlobalStats from "@/components/GlobalStats";
import Header from "@/components/Header";
import HeaderContainer from "@/components/HeaderContainer";

export default function Home() {
  return (
    <div className="h-screen w-full">
      <div className="flex flex-col w-full h-screen max-h-[90%] min-h-fit">
        <Header />
        <HeaderContainer />
      </div>
      <FeaturesHighlight />
      <GlobalStats />
      <DownloadAppCTA />
      <Footer />
    </div>
  );
}
