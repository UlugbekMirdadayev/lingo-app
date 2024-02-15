import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { useUser } from "./redux/selectors";
import { Header } from "./components/header";
import { Container } from "@mantine/core";

function App() {
  const user = useUser();
  return (
    <Container size={"lg"} className="app">
      <Header />
      <Routes>
        {routes[user?.authState].map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Container>
  );
}

export default App;
