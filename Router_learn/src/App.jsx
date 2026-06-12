import { Outlet } from 'react-router-dom';
import Header from './Components/haeder/haeder';
import Footer from './Components/footer/footer';

function App() {
  return (
    <>
      <Header />
      {/* The Outlet renders the current route's element (like Home) */}
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
