import { FaMugHot } from "react-icons/fa6";
import BrandState from "../components/BrandState";
import Hero from "../components/Hero";
import SectionHeader from "../components/SectionHeader";
import TopBar from "../components/TopBar";

const HomeLayout = () => {
  return (
    <div className="font-railway">
      <header>
        <TopBar />
      </header>

      <main>
        <section>
          <Hero />
        </section>
        <section>
          <BrandState />
        </section>
        <section className="pt-24 ">
          <SectionHeader
            title={"Our Popular Products"}
            subTitle={"--- Sip & Savor ---"}
            button={<button className="add_coffee_btn">Add Coffee <FaMugHot className="text-xl text-primary"/></button>}
          />
        </section>
      </main>

      <footer></footer>
    </div>
  );
};

export default HomeLayout;
