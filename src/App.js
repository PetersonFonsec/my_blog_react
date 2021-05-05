import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import smoothscroll from "smoothscroll-polyfill";

import { darkTheme, defaultTheme } from "./styles/theme";
import GlobalStyle from "./styles/global";
import Routes from "./Routes/index";
import Header from "./components/Layouts/Header/index";
import Footer from "./components/Layouts/Footer/index";
import ButtonToggleTheme from "./components/Buttons/ToggleTheme/index";

smoothscroll.polyfill();

function App() {
  const [theme, setTheme] = useState(true);

  return (
    <>
      <ThemeProvider theme={theme ? darkTheme : defaultTheme}>
        <GlobalStyle />
        <Header />
        <ButtonToggleTheme
          darkTheme={theme}
          toggleTheme={() => setTheme(!theme)}
        />
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
