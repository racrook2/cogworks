import React from 'react';
import {
  BODY,
  BACKGROUND,
  SHADOW,
  PRIMARY_TEXT,
  PAPER_VERTICAL,
  PAPER_HORIZONTAL
} from 'utils/Colors';
import { BOX_SHADOW } from 'utils/BoxShadow';

const marginStyle = {
  margin: '0 6rem',
  borderLeft: `1px solid ${PAPER_VERTICAL}`
};

const holePunchStyle = {
  backgroundImage: `radial-gradient(circle at 1.5rem, ${BODY} 0.25rem, ${SHADOW} 0.5rem, transparent 1px)`,
  backgroundSize: '100% 3rem'
};

const sectionStyle = {
  marginBottom: '2rem',
  color: PRIMARY_TEXT,
  boxShadow: BOX_SHADOW,

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

const Section = ({ header, children }) => {
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

export default Section;
