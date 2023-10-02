import { useState } from "react";
import PropTypes from "prop-types";
import { SearchOutlined } from "@ant-design/icons";
import { Select } from "antd";
import jsonp from "fetch-jsonp";
import qs from "qs";

export const Home = () => {
  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };

  // Filter `option.label` match the user type `input`
  const filterOption = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  // Search for countries by name

  let timeout;
  let currentValue;
  const fetch = (value, callback) => {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
    currentValue = value;
    const fake = () => {
      const str = qs.stringify({
        code: "utf-8",
        q: value,
      });
      jsonp(`https://suggest.taobao.com/sug?${str}`)
        .then((response) => response.json())
        .then((d) => {
          if (currentValue === value) {
            const { result } = d;
            const data = result.map((item) => ({
              value: item[0],
              text: item[0],
            }));
            callback(data);
          }
        });
    };
    if (value) {
      timeout = setTimeout(fake, 300);
    } else {
      callback([]);
    }
  };
  const SearchInput = (props) => {
    const [data, setData] = useState([]);
    const [value, setValue] = useState();
    const handleSearch = (newValue) => {
      fetch(newValue, setData);
    };
    const handleChange = (newValue) => {
      setValue(newValue);
    };
    return (
      <Select
        showSearch
        value={value}
        placeholder={props.placeholder}
        style={props.style}
        defaultActiveFirstOption={false}
        suffixIcon={<SearchOutlined />}
        filterOption={false}
        onSearch={handleSearch}
        onChange={handleChange}
        notFoundContent={null}
        options={(data || []).map((d) => ({
          value: d.value,
          label: d.text,
        }))}
      />
    );
  };

  return (
    <>
      <header>
        <h1>Where in the world?</h1>
        <p>Dark Mode</p>
      </header>
      <main>
        <form>
          <SearchInput
            placeholder="Search for a country..."
            style={{
              width: 200,
            }}
          />
          <Select
            showSearch
            placeholder="Filter by Region"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={filterOption}
            options={[
              {
                value: "Africa",
                label: "Africa",
              },
              {
                value: "America",
                label: "America",
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
      </main>
    </>
  );
};

Home.propTypes = {
  placeholder: PropTypes.string,
  style: PropTypes.object,
};

Home.defaultProps = {
  placeholder: "Search...",
  style: {},
};
