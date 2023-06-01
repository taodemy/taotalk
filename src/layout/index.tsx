import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
