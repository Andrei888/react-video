import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";


function Header({ categories }) {
  return (
    <div>
      <Stack spacing={2} direction="row">
        {categories.map((category) => {
          return (
            <Button variant="outlined" type={category.category}>
              {category.name}
            </Button>
          );
        })}
        <TextField id="outlined-search" label="Search field" type="search" />
      </Stack>
    </div>
  );
}

export default Header;
