import './App.css';
import { Header } from "./components/header/Header";
// import { Card } from './components/card/Card';
import { Footer } from './components/footer/Footer';
import { Grid } from './components/grid/Grid';


function App() {
  return (
    <div className="App">
    <Header />
    <Grid />
    <Footer />
    </div>
  );
}

export default App;
