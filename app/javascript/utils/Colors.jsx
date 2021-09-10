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

const TYPE_COLORS = {
  Bug: '#91C12F',
  Dark: '#5A5465',
  Dragon: '#0B6DC3',
  Electric: '#F4D23C',
  Fairy: '#EC8FE6',
  Fighting: '#CE416B',
  Fire: '#FF9D55',
  Flying: '#8FA9DE',
  Ghost: '#5269AD',
  Grass: '#63BC5A',
  Ground: '#D97845',
  Ice: '#73CEC0',
  Normal: '#919AA2',
  Poison: '#AA6BC8',
  Psychic: '#FA7179',
  Rock: '#C5B78C',
  Steel: '#5A8EA2',
  Water: '#5090D6'
};

export {
  TYPE_COLORS,
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
