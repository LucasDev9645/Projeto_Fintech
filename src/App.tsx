import Header from "./Components/Header";
import Sidenav from "./Components/Sidenav";
import { DataContextProvider } from "./Context/DataContext";
import Resumo from "./Pages/Resumo";

import "./style.css";

const App = () => {
  return (
    <DataContextProvider>
      <>
        <Sidenav />
        <main>
          <Header />
          <Resumo />
        </main>
      </>
    </DataContextProvider>
  );
};

export default App;
