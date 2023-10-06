import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import Data from "../assets/data.json";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [region, setRegion] = useState("");

  useEffect(() => {
    setData(Data);
  }, []);

  const searchName = (searchTerm) => {
    const filteredData = Data.filter((country) =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setData(filteredData);
  };

  const filterRegion = (selectedRegion) => {
    if (selectedRegion === "All countries") {
      setData(Data);
    } else {
      const filteredData = Data.filter(
        (country) =>
          country.region.toLowerCase() === selectedRegion.toLowerCase()
      );
      setData(filteredData);
    }
  };

  const resetData = () => {
    setData(Data);
  };

  const value = {
    data,
    name: [name, setName],
    region: [region, setRegion],
    searchName,
    filterRegion,
    resetData,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
