import { Box, IconButton, Typography } from "";
import AddIcon from "direccion icono";
import RemoveIcon from "direccion icono";
import { useState } from "react";

export default function ItemCount() {
  const [count, setCount] = useState(0);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        border: 1,
        width: "26%",
        mb: 3,
      }}
    >
      <Box sx={{ border: 1, backgroundColor: "#040b16" }}>
        <IconButton color="base" onClick={() => setCount(count + 1)}>
          <AddIcon />
        </IconButton>
      </Box>
      <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>{count}</Typography>
      <Box sx={{ border: 1, backgroundColor: "#040b16" }}>
        <IconButton color="base" onClick={() => setCount(count - 1)}>
          <RemoveIcon />
        </IconButton>
      </Box>
    </Box>
  );
}