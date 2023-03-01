import { Routes, Route } from "react-router-dom";
import ProtectRoutes from "../components/SearchBrewery";
import { UserContextProvider } from "../contexts/UserContext";
import BreweryDetail from "../pages/BreweryDetail";
import BreweryHome from "../pages/BreweryHome";

const RoutesMain = () => {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<BreweryHome />} />
        <Route path="/:obdbId" element={<BreweryDetail />} />
      </Routes>
    </UserContextProvider>
  );
};

export default RoutesMain;
