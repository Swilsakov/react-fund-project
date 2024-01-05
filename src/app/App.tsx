import RootLayout from "@/layouts/RootLayout/RootLayout";
import { AppRoutes } from "../routes/AppRoutes";
import { ThemeProvider } from "@mui/material/styles";
import themeApp from "./theme/Theme";

export const App = () => {
  return (
    <ThemeProvider theme={themeApp}>
      <RootLayout>
        <AppRoutes />
      </RootLayout>
    </ThemeProvider>
  );
};
