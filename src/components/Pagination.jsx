import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function Paging({ totalChars, handlePageClick }) {
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "3rem" }}>
      <Stack spacing={2}>
        <Pagination
          count={totalChars}
          onChange={(e, page) => handlePageClick(page)}
          siblingCount={0}
          showFirstButton
          showLastButton
          size="large"
        />
      </Stack>
    </div>
  );
}
