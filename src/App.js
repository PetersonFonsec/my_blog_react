import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { darkTheme, defaultTheme } from "./styles/theme";
import GlobalStyle from "./styles/global";
import Routes from "./Routes/index";
import Header from "./components/Layouts/Header/index";
import Footer from "./components/Layouts/Footer/index";

function App() {
  const [theme, setTheme] = useState(false);

  return (
    <>
      <ThemeProvider theme={theme ? darkTheme : defaultTheme}>
        <GlobalStyle />
        <Header />
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
