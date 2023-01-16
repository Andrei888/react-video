import React from "react";
import Grid from "@mui/material/Grid";
import Box from "./Box";

function Boxlist({ items, category, allCategories }) {
  const newTitle = allCategories.find((item) => item.value === category);
  const pageTitle = newTitle.name;

  return (
    <div>
      <h2>{pageTitle}</h2>
      <Grid
        container
        spacing={4}
        align="center"
        direction="row"
        justify="center"
      >
        {items.map((item, index) => {
          return (
            <Grid item xs={4} key={index}>
              <Box
                title={item.title}
                url={item.url}
                description={item.description}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default Boxlist;
