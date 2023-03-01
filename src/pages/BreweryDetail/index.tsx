import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ICardBrewery } from "../../components/CardBrewery/interface";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SearchBrewery from "../../components/SearchBrewery";
import { useProvider } from "../../contexts/UserContext";
import api from "../../servers/Api";
import { MainS } from "./styled";

const BreweryDetail = () => {
  const { setSearchBrewery } = useProvider();
  const { obdbId } = useParams();

  const requestSearchBrewery = async () => {
    try {
      const { data } = await api.get<ICardBrewery>(`/breweries/${obdbId}`);

      setSearchBrewery({ ...data });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    requestSearchBrewery();
  }, [obdbId]);

  return (
    <>
      <Header />
      <MainS>
        <Link to={"/"}>&lsaquo; Back</Link>
        <SearchBrewery />
      </MainS>
      <Footer />
    </>
  );
};

export default BreweryDetail;
