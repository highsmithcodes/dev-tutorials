import NavBar from "./NavBar";
import Footer from "./Footer";
import { Outlet } from 'react-router-dom';



const Layout = () => {
    const style = ({ isActive }) => ({
      fontWeight: isActive ? 'bold' : 'normal',
    });
  
    return (
      <>
        <NavBar />
            <main style={{ padding: '1rem 0' }}>
            <Outlet />
            </main>
        <Footer />
      </>
    );
  };
 export default Layout;