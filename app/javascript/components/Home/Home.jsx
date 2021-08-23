import React, { useState } from 'react';
//import ChevronUp from 'images/ChevronUp.svg';
//import ChevronDown from 'images/ChevronDown.svg';
import { Link } from 'react-router-dom';

const BACKGROUND = '#FFC72C';
const ACTIVE_BACKGROUND = 'darkorange';
const PRIMARY_TEXT = 'black';
const SECONDARY_TEXT = 'brown';

const sideNavStyle = {
  background: BACKGROUND,
  border: `2px solid ${PRIMARY_TEXT}`,
  borderRadius: '0.5em',
  width: '12em',

  ul: {
    counterReset: 'item',
    listStyleType: 'none',
    padding: 0,

    h2: {
      fontSize: '1.25em',
      margin: '0.5em 0 0.5em',
      background: ACTIVE_BACKGROUND,
      width: '100%',
      padding: '0.5em 0',
      textAlign: 'center',
      fontWeight: 'normal'
    },

    a: {
      textDecoration: 'none',
      color: PRIMARY_TEXT,

      li: {
        display: 'block',
        padding: '0.25em 0',

        '&:hover': {
          background: ACTIVE_BACKGROUND
        }
      }
    },

    hr: {
      border: `1px solid ${SECONDARY_TEXT}`
    }
  }
};

const Section = ({ header, children }) => {
  const [open, setOpen] = useState(true);

  const chevronStyle = {
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    float: 'right',
    fontWeight: 'bolder',
    transform: 'scale(2, 1)',
    marginRight: '0.75em',
    color: SECONDARY_TEXT
  };

  return (
    <>
      <h2>
        {header}
        <button
          css={chevronStyle}
          onClick={() => { setOpen(!open) }}
        >{open ? '˄' : '˅'}</button>
      </h2>
      {open && children}
    </>
  )
};

const Item = ({ index, link, children }) => {
  const rulingStyle = {
    display: 'inline-block',
    width: '4.5em',
    color: SECONDARY_TEXT,

    hr: {
      display: 'inline-block',
      width: '1.5em',
      margin: '0.25em 0.5em 0.25em 0'
    }
  };

  return (
    <Link to={link}>
      <li>
        <span css={rulingStyle}>
          <hr/>{index}
        </span>
        {children}
      </li>
    </Link>
  );
};

const Home = () => {
  const sections = [
    {
      header: 'Heading 1',
      items: [
        { link: '/pokedex', text: 'Pokédex' },
        { link: '/type_chart', text: 'Type Chart' },
        { link: '/ability_list', text: 'Ability List' },
        { link: '/move_list', text: 'Move List' },
        { link: '/evolution_list', text: 'Evolution List' },
        { link: '/voltorb_flip', text: 'Voltorb Flip' }
      ]
    },
    {
      header: 'Heading 2',
      items: [
        { link: '/', text: 'a' },
        { link: '/', text: 'b' },
        { link: '/', text: 'c' }
      ]
    }
  ];

  let i = 0;

  return (
    <div css={{display: 'flex'}}>
      <aside css={sideNavStyle}>
        <ul>
          {
            sections.map((section) => {
              return (
                <Section header={section.header}>
                  <hr css={{ margin: 0, width: '0.5em' }}/>
                  {
                    section.items.map((item) => {
                      i++;

                      return (
                        <>
                          <Item
                            index={i}
                            link={item.link}
                          >
                            {item.text}
                          </Item>
                          <hr css={{ margin: 0, width: '0.5em' }}/>
                        </>
                      );
                    })
                  }
                </Section>
              )
            })
          }
        </ul>
      </aside>
      <main>
        hello
      </main>
    </div>
  );
};

export default Home;
