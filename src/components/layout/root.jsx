import { Outlet } from "react-router-dom";
import Header from "../header";
import GlobalThemeProvider from "../ThemeProvider/GlobalThemeProvider";
import { Box, CssBaseline } from "@mui/material";


export default function Root() {
  return (

      <GlobalThemeProvider>
      <CssBaseline />
      <Box>  
        <Header />
        <Box sx={{p:[1,2],pt:[3,2]}}>
            <Outlet />
        </Box>
      </Box>
    </GlobalThemeProvider>
  );
}