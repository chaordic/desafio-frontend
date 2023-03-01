import FilterBreweries from "../../components/FilterBreweries";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ListBreweries from "../../components/ListBreweries";
import PageBreweries from "../../components/PageBreweries";

const BreweryHome = () => {
  return (
    <>
      <Header />
      <main>
        <FilterBreweries />
        <ListBreweries />
        <PageBreweries />
      </main>
      <Footer />
    </>
  );
};

export default BreweryHome;
