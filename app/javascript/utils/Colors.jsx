let BODY;
let BACKGROUND;
let SHADOW;
let PRIMARY_TEXT;
let SECONDARY_TEXT;
let SIDE_NAV_BACKGROUND;
let SIDE_NAV_ACTIVE_BACKGROUND;
let PAPER_VERTICAL;
let PAPER_HORIZONTAL;

if (localStorage.getItem('cogworksDarkMode')) {
  BODY = '#282828';
  BACKGROUND = '#383838';
  SHADOW = '#181818';
  PRIMARY_TEXT = 'white';
  SECONDARY_TEXT = 'gray';
  PAPER_VERTICAL = 'steelblue';
  PAPER_HORIZONTAL = 'indianred';
} else {
  BODY = 'whitesmoke';
  BACKGROUND = 'white';
  SHADOW = 'lightgray';
  PRIMARY_TEXT = 'black';
  SECONDARY_TEXT = 'darkgray';
  PAPER_VERTICAL = 'lightblue';
  PAPER_HORIZONTAL = 'pink';
}

SIDE_NAV_BACKGROUND = BACKGROUND;
SIDE_NAV_ACTIVE_BACKGROUND = BODY;

export {
  BODY,
  BACKGROUND,
  SHADOW,
  PRIMARY_TEXT,
  SECONDARY_TEXT,
  SIDE_NAV_BACKGROUND,
  SIDE_NAV_ACTIVE_BACKGROUND,
  PAPER_VERTICAL,
  PAPER_HORIZONTAL
};
