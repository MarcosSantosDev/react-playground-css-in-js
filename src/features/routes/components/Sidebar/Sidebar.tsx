import Footer from './Footer/Footer';
import Header from './Header/Header';
import Nav from './Nav/Nav';
import * as S from './Sidebar.styles';

function Sidebar() {
  return (
    <S.SidebarContainer>
      <Header />
      <Nav />
      <Footer />
    </S.SidebarContainer>
  );
}

export default Sidebar;
