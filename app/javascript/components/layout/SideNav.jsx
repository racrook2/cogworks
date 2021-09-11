import React, { useState } from 'react';
import sections from 'utils/Sections';
import { Link } from 'react-router-dom';
import {
  PRIMARY_TEXT,
  SECONDARY_TEXT,
  SIDE_NAV_BACKGROUND,
  SIDE_NAV_ACTIVE_BACKGROUND
} from 'utils/Colors';
import { BOX_SHADOW } from 'utils/BoxShadow';

const headerStyle = {
  cursor: 'pointer',
  background: 'none',
  border: 'none',
  fontWeight: 'bolder',
  fontSize: '1.25rem',
  width: '100%',
  color: PRIMARY_TEXT
};

const chevronStyle = {
  float: 'right',
  transform: 'scale(2, 1)',
  marginRight: '0.75rem',
  color: SECONDARY_TEXT,
  fontSize: '1rem'
};

const Section = ({ header, children }) => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <h2>
        <button
          css={headerStyle}
          onClick={() => { setOpen(!open) }}
        >
          {header}
          <span css={chevronStyle}>
            {open ? '˄' : '˅'}
          </span>
        </button>
      </h2>
      {open && children}
    </>
  )
};

const itemStyle = {
  textDecoration: 'none',
  color: 'inherit',

  li: {
    display: 'flex',
    padding: '0.25rem 0',

    '&:hover': {
      background: SIDE_NAV_ACTIVE_BACKGROUND
    },

    span: {
      paddingRight: '0.5rem',
      display: 'flex',
      alignItems: 'center'
    }
  }
};

const rulingStyle = {
  minWidth: '3.5rem',
  color: SECONDARY_TEXT,

  hr: {
    display: 'inline-block',
    width: '1.5rem',
    margin: '0.25rem 0.5rem 0.25rem 0'
  }
};

const Item = ({ index, link, children }) => {
  return (
    <Link to={link} css={itemStyle} >
      <li>
        <span css={rulingStyle}>
          <hr/>{index}
        </span>
        <span>{children}</span>
      </li>
    </Link>
  );
};

const renderSideNav = () => {
  let i = 0;

  return (
    sections.map(section =>
      <Section key={section.header} header={section.header}>
        <hr css={{ margin: 0, width: '0.5rem' }}/>
        {
          section.items.map((item) => {
            i++;

            return (
              <span key={item.text}>
                <Item
                  index={i}
                  link={item.link}
                >
                  {item.text}
                </Item>
                <hr css={{ margin: 0, width: '0.5rem' }}/>
              </span>
            );
          })
        }
      </Section>
    )
  )
};

const sideNavStyle = {
  background: SIDE_NAV_BACKGROUND,
  borderRadius: '0.5rem',
  width: '15rem',
  height: 'min-content',
  color: PRIMARY_TEXT,
  boxShadow: BOX_SHADOW,

  ul: {
    listStyleType: 'none',
    padding: 0,

    h2: {
      fontSize: '1.25rem',
      margin: '0.5rem 0 0.5rem',
      background: SIDE_NAV_ACTIVE_BACKGROUND,
      width: '100%',
      padding: '0.5rem 0',
      textAlign: 'center',
      fontWeight: 'normal'
    },

    hr: {
      border: `1px solid ${SECONDARY_TEXT}`
    }
  }
};

const SideNav = () => {
  return (
    <nav css={sideNavStyle}>
      <ul>
        {
          renderSideNav()
        }
      </ul>
    </nav>
  );
};

export default SideNav;
