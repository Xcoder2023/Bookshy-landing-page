import './App.css';
import Header from './components/header/Header';
import Part from './components/first-page/box1/Part';
import Novels from './components/second-page/box3/Novels';
import NovelMap from './components/third-page/NovelMap';
import NovelSpheres from './components/fourth-page/NovelSpheres';
import MarketPlace from './components/fifth-page/MarketPlace';
import Collections from './components/sixth-page/Collections';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Part />
      <Novels />
      <NovelMap />
      <NovelSpheres />
      <MarketPlace />
      <Collections />
      <Footer />
    </div>
  );
}

export default App;
