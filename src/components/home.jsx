import { useContext, useState } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { Input, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { DataContext } from "../context/dataProvider";
import { MdOutlineDarkMode, MdDarkMode } from "react-icons/md";

export const Home = () => {
  const location = useLocation();
  const { region, searchName, filterRegion, resetData } =
    useContext(DataContext);

  const [searchTerm, setSearchTerm] = useState("");
  const [darkMode, setDarkMode] = useState(false); // Estado para rastrear el modo actual

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    searchName(value);
  };

  const toggleDarkMode = () => {
    const body = document.body;
    const header = document.querySelector("header");

    body.classList.toggle("light-mode");
    header.classList.toggle("light-mode");

    // Cambia el estado de darkMode
    setDarkMode(!darkMode);

    // Cambia las clases en los elementos de búsqueda y filtro
    const searchInput = document.querySelector(".ant-input-search");
    const filterSelect = document.querySelector(".ant-select-selection");

    if (body.classList.contains("light-mode")) {
      searchInput.classList.add("light-mode");
      filterSelect.classList.add("light-mode");
    } else {
      searchInput.classList.remove("light-mode");
      filterSelect.classList.remove("light-mode");
    }
  };

  const filterOption = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  return (
    <>
      <header>
        <h1>Where in the world?</h1>
        {darkMode ? (
          // Si está en modo oscuro, muestra el botón "Light Mode"
          <button onClick={toggleDarkMode} className="btn__light">
            <MdDarkMode />
            <span>Dark Mode</span>
          </button>
        ) : (
          // Si no está en modo oscuro, muestra el botón "Dark Mode"
          <button onClick={toggleDarkMode} className="btn__dark">
            <MdOutlineDarkMode />
            <span>Light Mode</span>
          </button>
        )}
      </header>
      <main>
        {location.pathname === "/" && (
          <form>
            <Input.Search
              className="ant-input-search"
              placeholder="Search for a country..."
              style={{
                width: 300,
              }}
              onChange={(e) => handleSearchChange(e.target.value)}
              value={searchTerm}
              enterButton={<SearchOutlined />}
            />
            <Select
              className="ant-select-selection"
              showSearch
              placeholder="Filter by Region"
              optionFilterProp="children"
              onChange={filterRegion}
              onSearch={resetData}
              filterOption={filterOption}
              value={region}
              style={{
                width: 200,
              }}
              options={[
                {
                  value: "All countries",
                  label: "All countries",
                },
                {
                  value: "Africa",
                  label: "Africa",
                },
                {
                  value: "Americas",
                  label: "Americas",
                },
                {
                  value: "Asia",
                  label: "Asia",
                },
                {
                  value: "Europe",
                  label: "Europe",
                },
                {
                  value: "Oceania",
                  label: "Oceania",
                },
              ]}
            />
          </form>
        )}
      </main>
    </>
  );
};

Home.propTypes = {
  placeholder: PropTypes.string,
  style: PropTypes.object,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

Home.defaultProps = {
  placeholder: "Search...",
  style: {},
};
