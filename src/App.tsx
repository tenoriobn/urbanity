import { ThemeProvider } from "styled-components";
import Login from "./page/Login";
import Theme from "./common/GlobalStyles/Theme";
import GlobalStyles from "./common/GlobalStyles";
import 'bootstrap/dist/css/bootstrap.css';

function App() {

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Login />
    </ThemeProvider>
  )
}

export default App