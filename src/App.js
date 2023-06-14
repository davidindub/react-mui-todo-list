import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import "./App.css";
import TodoList from "./TodoList";
import NavBar from "./Navbar";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <NavBar />
      <div className="App">
        <header className="App-header">
          <CssBaseline />
          <TodoList />
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
