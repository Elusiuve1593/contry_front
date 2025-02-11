import "./App.css";
import { Img, PreloaderContainer, style } from "./common/styles/styles";
import { HomePage } from "./components/home-page/HomePage";
import pulse from "./common/preloader/Pulse.gif";
import { Route, Routes } from "react-router-dom";
import { NotFoundPage } from "./components/NotFoundPage";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { CountryInterface } from "./interfaces/countries.interface";
import { CountryInfoPage } from "./components/contry-info-page/CountryInfoPage";

function App() {
  const [countries, setCountries] = useState<CountryInterface[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get<CountryInterface[]>(
          import.meta.env.VITE_API_URL + "countries"
        );
        setCountries(response.data);
        setIsLoading(false);
      } catch (err) {
        toast("Fetching error", { style });
        setIsLoading(false);
      }
    };
    fetchCountries();
  }, []);
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
