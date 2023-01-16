import React, { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TextField from "@mui/material/TextField";

function Header({ filterFunction, videos, allCategories, filterCat }) {
  const [tabValue, setTabValue] = useState(allCategories[0].value);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    filterByCategory("-1");
  }, []);

  const HandlerSearch = (e) => {
    setTabValue("-1");
    filterByCategory("-1");
    e.preventDefault();

    setSearchInput(e.target.value);
    console.log(searchInput);
    if (searchInput.length > 0) {
      const filtered = videos.filter((video) => {
        return video.title.toLowerCase().includes(searchInput.toLowerCase());
      });
      filterFunction(filtered);
    } else {
      filterFunction(videos);
    }
  };
  const filterByCategory = (category) => {
    if (category !== "-1") {
      const filtered = videos.filter((video) => {
        return video.category === category;
      });

      filterFunction(filtered);
    } else {
      filterFunction(videos);
    }

    filterCat(category);
  };

  const categoryChange = (e, value) => {
    e.preventDefault();
    setTabValue(value);
    filterByCategory(value);
  };

  return (
    <div>
      <Stack spacing={2} direction="row">
        <Tabs
          value={tabValue}
          onChange={categoryChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="Main Navigation"
        >
          {allCategories.map((category, index) => {
            return (
              <Tab key={index} label={category.name} value={category.value} />
            );
          })}
        </Tabs>
        <TextField
          id="outlined-search"
          label="Search field"
          type="search"
          value={searchInput}
          onChange={HandlerSearch}
        />
      </Stack>
    </div>
  );
}

export default Header;
