import './App.css';
// import Page from '../pokemon/pokemon'

import Routes from './routes'
import Footer from '../page/footer'
import Header from '../page/header'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />  
      <Footer />    
    </div>
  );
}

export default App;
