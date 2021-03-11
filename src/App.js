import './App.css';
import Header from './components/Header/index.js';
import Footer from './components/Footer/index.js';
import Layout from './components/Layout/index.js';

import bg1 from './assets/backgrounds/background.jpg';

console.log(bg1);

const App = () => {
  
  return (
    <>
      <Header />
      <Layout title={"Title 1"} descr={"Description 1"} urlBg={bg1} />
      <Layout title={"Title 2"} descr={"Description 2"} colorBg={"green"} />
      <Layout title={"Title 3"} descr={"Description 3"} urlBg={bg1} />
      <Footer />
    </>
  );
}

export default App;
