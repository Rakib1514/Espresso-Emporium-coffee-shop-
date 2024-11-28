import { FaMugHot } from "react-icons/fa6";
import BrandState from "../components/BrandState";
import Hero from "../components/Hero";
import SectionHeader from "../components/SectionHeader";
import TopBar from "../components/TopBar";
import { Link, useLoaderData } from "react-router-dom";
import CoffeeCard from "../components/CoffeeCard";

const HomeLayout = () => {
  const coffees = useLoaderData();

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
        <section className="mt-24 bg-card-container-l bg-no-repeat bg-left-top">
          <div className="bg-card-container-r bg-no-repeat bg-right-bottom">
            <SectionHeader
              title={"Our Popular Products"}
              subTitle={"--- Sip & Savor ---"}
              button={
                <Link to={"/add-new-coffee"} className="add_coffee_btn">
                  Add Coffee <FaMugHot className="text-xl text-primary" />
                </Link>}/>
            <div className="coffee_card_container">
              {
                coffees.map((coffee) => (<CoffeeCard key={coffee._id} coffee={coffee} />))
              }
            </div>
          </div>
        </section>
      </main>

      <footer></footer>
    </div>
  );
};

export default HomeLayout;
