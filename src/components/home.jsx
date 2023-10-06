import { useContext, useState } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { Input, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { DataContext } from "../context/dataProvider";

export const Home = () => {
  const location = useLocation();
  const { region, searchName, filterRegion, resetData } =
    useContext(DataContext);

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (value) => {
    setSearchTerm(value); // Actualiza el estado con el nuevo valor
    // Realiza la búsqueda a medida que escribes
    searchName(value);
  };

  const filterOption = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  return (
    <>
      <header>
        <h1>Where in the world?</h1>
        <p>Dark Mode</p>
      </header>
      <main>
        {location.pathname === "/" && (
          <form>
            <Input.Search
              placeholder="Search for a country..."
              style={{
                width: 300,
              }}
              onChange={(e) => handleSearchChange(e.target.value)}
              value={searchTerm}
              enterButton={<SearchOutlined />}
            />
            <Select
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
