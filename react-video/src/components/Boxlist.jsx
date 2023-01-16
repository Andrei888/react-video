import React from "react";
import Grid from "@mui/material/Grid";
import Box from "./Box";

function Boxlist({ items, title }) {
  return (
    <div>
      <h2>{title}</h2>
      <Grid
        container
        spacing={4}
        align="center"
        direction="row"
        justify="center"
      >
        {items.map((item) => {
          return (
            <Grid item xs={4}>
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
