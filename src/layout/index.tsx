import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="flex-page width-1920">
      <Header />
      <main className="centre">{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
