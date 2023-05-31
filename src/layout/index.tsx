import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="flex-page width-page">
      <Header />
      <main className="centre">{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
