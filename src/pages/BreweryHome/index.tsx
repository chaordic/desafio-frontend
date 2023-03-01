import FilterBreweries from "../../components/FilterBreweries";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ListBreweries from "../../components/ListBreweries";
import PageBreweries from "../../components/PageBreweries";
import { MainS } from "../BreweryDetail/styled";

const BreweryHome = () => {
  return (
    <>
      <Header />
      <MainS>
        <FilterBreweries />
        <ListBreweries />
        <PageBreweries />
      </MainS>
      <Footer />
    </>
  );
};

export default BreweryHome;
