import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ICardBrewery } from "../../components/CardBrewery/interface";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SearchBrewery from "../../components/SearchBrewery";
import { useProvider } from "../../contexts/UserContext";
import api from "../../servers/Api";
import { LinkDetailS, MainS } from "./styled";

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
        <LinkDetailS to={"/"}>
          &lsaquo;<span>Back</span>
        </LinkDetailS>
        <SearchBrewery />
      </MainS>
      <Footer />
    </>
  );
};

export default BreweryDetail;
