import TopBar from "../components/TopBar";

const HomeLayout = () => {
  return (
    <>
      <header>
        <TopBar/>
      </header>

      <main>
        <button className="btn btn-info">Rakib</button>
      </main>

      <footer></footer>
    </>
  );
};

export default HomeLayout;
