import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { ICardBrewery } from "../components/CardBrewery/interface";
import api from "../servers/Api";
import { iUserContext, iUserContextProvider } from "./interface";

const UserContext = createContext({} as iUserContext);

export const UserContextProvider = ({ children }: iUserContextProvider) => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = query.get("page");

  const [searchBrewery, setSearchBrewery] = useState({} as ICardBrewery);
  const [breweries, setBreweries] = useState([] as ICardBrewery[]);
  const [filterBreweries, setFilterBreweries] = useState("");

  const requestBreweries = async () => {
    try {
      const { data } = await api.get<ICardBrewery[]>(
        `/breweries/?page=${page}${filterBreweries}`
      );

      setBreweries([...data]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    requestBreweries();
  }, [filterBreweries, page]);

  return (
    <UserContext.Provider
      value={{
        breweries,
        setFilterBreweries,
        searchBrewery,
        setSearchBrewery,
        page,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useProvider = () => useContext(UserContext);
