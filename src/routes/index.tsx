import { Routes, Route } from "react-router-dom";
import { UserContextProvider } from "../contexts/UserContext";
import BreweryDetail from "../pages/BreweryDetail";
import BreweryHome from "../pages/BreweryHome";

const RoutesMain = () => {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<BreweryHome />} />
        <Route path="/brewery" element={<BreweryDetail />} />
      </Routes>
    </UserContextProvider>
  );
};

export default RoutesMain;
