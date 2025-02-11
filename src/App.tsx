import { Route, Routes } from "react-router-dom";
import "./App.css";
import pulse from "./common/preloader/Pulse.gif";
import { Img, PreloaderContainer } from "./common/styles";
import { CountryInfoPage } from "./components/contry-info-page/CountryInfoPage";
import { HomePage } from "./components/home-page/HomePage";
import { NotFoundPage } from "./components/NotFoundPage";
import { useFetchCountries } from "./hooks/useFetchCountries";

function App() {
  const { countries, isLoading } = useFetchCountries();
  return (
    <>
      {isLoading && (
        <PreloaderContainer>
          <Img src={pulse} alt="Loading..." />
        </PreloaderContainer>
      )}
      <Routes>
        <Route path="/" element={<HomePage countries={countries} />} />
        <Route path="/country/:countryCode" element={<CountryInfoPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
