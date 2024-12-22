import Header from "@/components/Header";
import HeaderContainer from "@/components/HeaderContainer";

export default function Home() {
  return (
    <div className="h-screen w-full">
      <div className="flex flex-col w-full h-screen max-h-[90%]">
        <Header />
        <HeaderContainer />
      </div>
    </div>
  );
}
