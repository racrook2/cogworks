import React from 'react';
import SideNav from 'components/layout/SideNav';
import StyleToggle from 'components/layout/StyleToggle';

const PageLayout = ({ children }) => {
  return (
    <>
      <div css={{ height: '10rem' }}>
        <StyleToggle />
      </div>
      <div css={{display: 'flex'}}>
        <aside css={{ width: '22.5%', display: 'flex', justifyContent: 'right' }}>
          <SideNav />
        </aside>
        <main css={{ width: '55%' }}>
          {children}
        </main>
        <aside css={{ width: '22.5%' }}></aside>
      </div>
    </>
  );
};

export default PageLayout;
