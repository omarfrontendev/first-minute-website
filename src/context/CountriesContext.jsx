import { createContext, useContext, useEffect, useState } from "react";

const CountryCodesContext = createContext();

export const CountryCodesProvider = ({ children }) => {
  const [countryCodes, setCountryCodes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCountryCodes = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();

      const formattedData = data
        .map((country) => {
          const name = country?.translations?.ara?.common || country?.name?.common;
          const root = country?.idd?.root;
          const suffix = country?.idd?.suffixes?.[0];
          const code = root && suffix ? `${root}${suffix}` : null;
          const flag = country?.flags?.svg || country?.flags?.png;

          if (!code) return null;

          return {
            label: name,
            value: code,
            img: flag,
          };
        })
        .filter(Boolean); // Remove null entries

      setCountryCodes(formattedData);
    } catch (err) {
      console.error("❌ Failed to load country codes:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCountryCodes();
  }, []);

  return (
    <CountryCodesContext.Provider value={{ countryCodes, isLoading }}>
      {children}
    </CountryCodesContext.Provider>
  );
};

export const useCountryCodes = () => useContext(CountryCodesContext);
