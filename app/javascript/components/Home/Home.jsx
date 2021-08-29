import React, { useState } from 'react';
import Tile from 'images/Tile.png'
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import $ from 'jquery';

window.$ = $;

const BACKGROUND = 'white';
const SHADOW = 'lightgray';
const PRIMARY_TEXT = 'black';
const SECONDARY_TEXT = 'gray';
const SIDE_NAV_BACKGROUND = 'white';
const SIDE_NAV_ACTIVE_BACKGROUND = 'whitesmoke';
const PAPER_VERTICAL = 'lightblue';
const PAPER_HORIZONTAL = 'pink';

const sideNavStyle = {
  background: SIDE_NAV_BACKGROUND,
  borderRadius: '0.5rem',
  width: '15rem',
  height: 'min-content',
  color: PRIMARY_TEXT,
  boxShadow: `0 0 0.5rem ${SHADOW}`,

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

const Section = ({ header, children }) => {
  const [open, setOpen] = useState(true);

  const headerStyle = {
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    fontWeight: 'bolder',
    fontSize: '1.25rem',
    width: '100%'
  };

  const chevronStyle = {
    float: 'right',
    transform: 'scale(2, 1)',
    marginRight: '0.75rem',
    color: SECONDARY_TEXT,
    fontSize: '1rem'
  };

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

const Item = ({ index, link, children }) => {
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
  const sections = [
    {
      header: 'Fan Works',
      items: [
        { link: '/', text: 'My Fakémon' },
        { link: '/', text: 'My Comics' },
        { link: '/voltorb_flip', text: 'Voltorb Flip' }
      ]
    },
    {
      header: 'Pokémon Design',
      items: [
        { link: '/', text: 'Analysis Column' },
        { link: '/', text: 'Design Trends Over the Generations' },
        { link: '/', text: 'Fakémon Primer' }
      ]
    },
    {
      header: 'Worldbuilding',
      items: [
        { link: '/', text: 'Are Humans Pokémon?' },
        { link: '/', text: 'What Are Pokémon Types?' },
        { link: '/', text: 'What Are Pokémon Moves?' }
      ]
    },
    {
      header: 'Game Design',
      items: [
        { link: '/', text: 'In Defense of Pokémon GSC\'s Level Curve' },
        { link: '/', text: 'Pokémon RBY\'s Story Structure' },
      ]
    },
    {
      header: 'Writing',
      items: [
        { link: '/', text: 'Pokémon Battles' },
        { link: '/', text: 'Choosing Your Team' },
      ]
    },
    {
      header: 'Resources',
      items: [
        { link: '/pokedex', text: 'Pokédex' },
        { link: '/type_chart', text: 'Type Chart' },
        { link: '/move_list', text: 'Move List' },
        { link: '/ability_list', text: 'Ability List' },
        { link: '/evolution_list', text: 'Evolution List' }
      ]
    }
  ];

  let i = 0;

  return (
    sections.map((section) => {
      return (
        <Section header={section.header}>
          <hr css={{ margin: 0, width: '0.5rem' }}/>
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
                  <hr css={{ margin: 0, width: '0.5rem' }}/>
                </>
              );
            })
          }
        </Section>
      )
    })
  )
};

const SiteSection = ({ header, children }) => {
  const marginStyle = {
    margin: '0 6rem',
    borderLeft: `1px solid ${PAPER_VERTICAL}`
  };

  const holePunchStyle = {
    backgroundImage: `radial-gradient(circle at 1.5rem, whitesmoke 0.25rem, ${SHADOW} 0.5rem, transparent 1px)`,
    backgroundSize: '100% 3rem'
  };

  const sectionStyle = {
    margin: '0 2rem 2rem',
    color: PRIMARY_TEXT,
    boxShadow: `0 0 0.5rem ${SHADOW}`,

    header: {
      background: BACKGROUND,
      ...holePunchStyle,

      h2: {
        height: '2rem',
        padding: '1rem 0.75rem 0',
        fontSize: '1.25rem',
        display: 'flex',
        alignItems: 'flex-end',
        ...marginStyle
      }
    },

    section: {
      background: `linear-gradient(to bottom, ${PAPER_HORIZONTAL} 1px, ${BACKGROUND} 1px)`,
      backgroundSize: '100% 1.5rem',

      '& > div': {
        ...holePunchStyle,

        div: {
          lineHeight: '1.5rem',
          padding: '0.375rem 0.75rem 1.125rem',
          ...marginStyle,

          p: {
            margin: 0,

            '& + p': {
              marginTop: '1.5rem'
            }
          }
        }
      }
    }
  };

  return (
    <div css={sectionStyle}>
      <header>
        <h2>{header}</h2>
      </header>
      <section>
        <div>
          <div>{children}</div>
        </div>
      </section>
    </div>
  );
};

const StyleToggle = () => {
  const cookie = 'cogworksDarkMode';
  const [cookies, setCookie, removeCookie] = useCookies([cookie]);
  const darkMode = cookies[cookie];

  const toggleStyle = {
    height: '2.5rem',
    width: '4.25rem',
    borderRadius: '1.25rem',
    background: SHADOW,

    button: {
      fontSize: '1.75rem',
      cursor: 'pointer',
      background: BACKGROUND,
      border: '2px solid black',
      borderRadius: '1.25rem',
      float: darkMode ? 'right' : 'left',
      height: '2.5rem',
      width: '2.5rem'
    }
  };

  const toggleCookie = () => {
    if (darkMode) {
      removeCookie(cookie);
    } else {
      setCookie(cookie, true);
    }

    window.location.reload();
  };

  return (
    <div css={toggleStyle}>
      <button onClick={toggleCookie}>
        {darkMode ? '🌝' : '🌞'}
      </button>
    </div>
  );
};

const StickyNote = ({ image, caption, color, right = false }) => {
  const marginLeft = right ? '1rem' : '-3rem';
  const marginRight = right ? '-9rem' : '1rem';

  const colors = {
    green: 'lightgreen',
    pink: 'pink',
    blue: 'lightblue',
    yellow: 'lemonchiffon'
  };

  const stickyNoteStyle = {
    float: right ? 'right' : 'left',
    padding: '1rem',
    background: `linear-gradient(135deg, white -100%, ${colors[color] || 'whitesmoke'})`,
    border: `1px solid ${SHADOW}`,
    boxShadow: `0 0.5rem 0.5rem ${SHADOW}`,
    margin: `0.25rem ${marginRight} 0.5rem ${marginLeft}`,
    width: '12.5rem',
    height: '12.5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };

  return (
    <figure css={stickyNoteStyle}>
      <img src={image} />
      <figcaption>{caption}</figcaption>
    </figure>
  )
};

const Home = () => {
  return (
    <>
      <div css={{ height: '10rem' }}>
        <StyleToggle />
      </div>
      <div css={{display: 'flex'}}>
        <aside css={{ width: '22.5%', display: 'flex', justifyContent: 'right' }}>
          <nav css={sideNavStyle}>
            <ul>
              {
                renderSideNav()
              }
            </ul>
          </nav>
        </aside>
        <main css={{ width: '55%' }}>
          <SiteSection header='Bacon Ipsum'>
            <p>
              <StickyNote image={Tile} caption='Caption' color='green' right />
              Bacon ipsum dolor amet landjaeger biltong beef, turducken ham pancetta pastrami venison short loin jowl short ribs ribeye chuck ham hock tail. Short loin pancetta leberkas pork loin tenderloin, andouille corned beef burgdoggen pork sirloin drumstick picanha. Prosciutto rump leberkas, chuck cupim buffalo filet mignon pork burgdoggen chicken andouille ham. Leberkas landjaeger alcatra, frankfurter tongue kevin spare ribs pastrami pork loin pork pig. Leberkas pork loin burgdoggen tri-tip, chislic tenderloin cow ground round venison filet mignon ham hock pork chop. Pig chislic pork belly pork loin, bacon capicola pork jerky pork chop tail.
            </p>
            <p>Spare ribs pork loin strip steak tri-tip ground round tenderloin turducken. Kielbasa sausage pork venison beef ribeye. Boudin picanha t-bone alcatra drumstick tenderloin. Alcatra kevin biltong ham andouille frankfurter ribeye pig shoulder doner flank. Chuck boudin ground round, alcatra jowl frankfurter pastrami ball tip ribeye hamburger shankle biltong beef pork burgdoggen.</p>
            <p>
              <StickyNote image={Tile} caption='Caption' color='pink' />
              Venison boudin strip steak prosciutto meatloaf turducken pork chop tenderloin. Picanha chislic boudin beef, pork belly flank alcatra hamburger buffalo doner. T-bone ham prosciutto leberkas, sausage pork loin spare ribs sirloin cupim flank biltong salami. Biltong beef kielbasa filet mignon shank.
            </p>
            <p>Tenderloin meatball cow biltong, shoulder tongue chislic jowl picanha beef ribs pork loin short loin ribeye doner. Pig sausage jowl, alcatra meatball turkey pork belly leberkas buffalo tail chuck porchetta. Landjaeger capicola ground round, shank spare ribs porchetta bresaola meatloaf chislic salami biltong chicken. Pork chop venison spare ribs pastrami burgdoggen frankfurter. Tenderloin short loin prosciutto, shank chislic turducken rump jerky pork loin jowl swine beef ribs pork chop kielbasa sausage.</p>
            <p>
              <StickyNote image={Tile} caption='Caption' color='blue' right />
              Pig pork loin buffalo venison pastrami. Chicken sirloin pork belly tail ground round, salami porchetta kielbasa bacon landjaeger biltong. Ham hock pig alcatra hamburger venison ham pastrami buffalo sirloin filet mignon chicken brisket swine boudin. Ham hock venison frankfurter tenderloin andouille, cow ground round ribeye. Short loin flank chuck ground round landjaeger drumstick. Andouille chuck meatball, ribeye filet mignon sirloin short ribs shoulder biltong.
            </p>
          </SiteSection>
          <SiteSection>
            <p>Strip steak frankfurter buffalo, venison landjaeger kevin cupim filet mignon chuck porchetta ball tip sirloin shank. Swine salami tail sirloin shoulder short loin burgdoggen tenderloin ham hock turkey shankle pig chuck. Landjaeger chicken rump salami swine. Prosciutto turducken shankle capicola ground round shank, pork chop pig short ribs beef landjaeger.</p>
            <p>
              <StickyNote image={Tile} caption='Caption' color='yellow' />
              Bacon filet mignon corned beef tongue drumstick pork belly t-bone jerky. Rump boudin corned beef, tongue porchetta brisket jerky flank landjaeger meatloaf hamburger bacon. Beef pig ground round cupim. Capicola kielbasa chicken pork filet mignon, shank rump tongue picanha. Fatback chuck flank pork belly pork.
            </p>
            <p>Fatback short ribs chuck, pork chop kielbasa ham capicola chislic ground round pastrami ham hock venison bacon frankfurter jerky. Ball tip turducken tenderloin alcatra frankfurter corned beef prosciutto burgdoggen doner t-bone pastrami spare ribs meatball short loin. Biltong prosciutto pork loin, ball tip beef ribs short loin ham tongue tri-tip leberkas. Pork loin short ribs ham hock turkey picanha pastrami t-bone ball tip biltong filet mignon alcatra swine landjaeger. Biltong ham shankle prosciutto drumstick spare ribs flank short loin picanha doner filet mignon.</p>
            <p>
              <StickyNote image={Tile} caption='Caption' right />
              Kevin venison andouille, alcatra turkey kielbasa short ribs ham hock tongue jerky leberkas pig sausage fatback. Meatball ribeye venison porchetta picanha. Picanha ham hock tri-tip fatback, rump meatloaf ground round cupim jerky prosciutto kielbasa. Chicken meatloaf biltong beef rump.
            </p>
            <p>Pork brisket chislic, swine cupim ham ham hock jowl frankfurter pancetta fatback shankle short ribs. Tongue pastrami flank ham hock cow. Ham hock cow tongue tri-tip t-bone. Tenderloin biltong short loin meatball. Tongue brisket pork belly tail ball tip doner burgdoggen tri-tip. Picanha flank frankfurter, hamburger chuck shoulder chicken cupim meatball t-bone burgdoggen jerky sirloin.</p>
          </SiteSection>
        </main>
        <aside css={{ width: '22.5%' }}></aside>
      </div>
    </>
  );
};

export default Home;
