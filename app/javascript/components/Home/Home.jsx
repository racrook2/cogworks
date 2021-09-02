import PageLayout from 'components/layout/PageLayout';
import React from 'react';
import Section from 'components/layout/Section';
import StickyNote from 'components/layout/StickyNote';
import Tile from 'images/Tile.png';

const Home = () => {
  return (
    <PageLayout>
      <Section header='Bacon Ipsum'>
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
      </Section>
      <Section>
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
      </Section>
    </PageLayout>
  );
};

export default Home;
