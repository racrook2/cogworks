import React from 'react';
import SideNav from 'components/layout/SideNav';
import StyleToggle from 'components/layout/StyleToggle';
import { Link } from 'react-router-dom';

const headerStyle = {
  height: '10rem',
  display: 'grid',

  a: {
    justifySelf: 'center'
  }
};

const PageLayout = ({ children }) => {
  return (
    <>
      <div css={headerStyle}>
        <StyleToggle />
        <Link to='/'>
          <img alt='Logo'/>
        </Link>
      </div>
      <div css={{display: 'flex'}}>
        <aside css={{ width: '22.5%', display: 'flex', justifyContent: 'right' }}>
          <SideNav />
        </aside>
        <main css={{ width: '55%', padding: '0 2rem' }}>
          {children}
        </main>
        <aside css={{ width: '22.5%' }}></aside>
      </div>
    </>
  );
};

export default PageLayout;
