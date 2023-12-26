import RootLayout from "@/layouts/RootLayout/RootLayout";
import { AppRoutes } from "../routes/AppRoutes";

export const App = () => {
  return (
    <RootLayout>
      <AppRoutes />
    </RootLayout>
  );
};
