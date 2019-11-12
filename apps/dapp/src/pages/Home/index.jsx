import React, {useState, useEffect} from 'react';
import {ProfileCardVanity, ProfileCardShowcase} from '3box-ui-profiles';
// import SEO from "../components/seo"
import {Site} from 'templates';
import {Card} from '@horizin/design-system-atoms';
import Waves from 'assets/images/waveDark.svg';
import {Slides} from '@horizin/design-system-molecules';

const IndexPage = () => (
  <Site>
    {/* <SEO title="Home" /> */}
    <Showcase />
    <ProjectExamples />
    {/* <ApplicationPreview />
    <Preview />
    <Features /> */}
  </Site>
);

export default IndexPage;

const styles = {
  showcase: {
    bg: 'blue',
    gradient: 'blue',
    color: 'white',
    p: 0,
    py: 6,
  },
  projectSlides: {
    bg: 'paper',
    color: 'text',
    py: 4,
  },
  desktopPreview: {
    p: 4,
    ml: [1, 1, '-100%'],
  },
};

const Showcase = props => {
  return (
    <Atom.Flex sx={styles.showcase}>
      <Atom.BackgroundGradient gradient="blue" ratio={1} opacity={1} />
      <Atom.BackgroundImage
        opacity={0.1}
        src="https://images.unsplash.com/photo-1517778991803-3fa8c9341083?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=652&q=80"
        ratio={0.1}
      />
      <Atom.Container>
        <Atom.Flex>
          <Atom.Flex center column sx={{flex: 4, order: 2}}>
            <Atom.Box>
              <Atom.Heading giga>Monthly Experiments</Atom.Heading>
              <Atom.Heading md thin>
                Pushing the Limits of Ethereum.
              </Atom.Heading>
              <Atom.Paragraph>
                Quisque velit elit, mollis vitae risus at, fermentum cursus
                erat. Integer pulvinar lobortis diam eget feugiat. Vestibulum
                ante ipsum primis in faucibus orci luctus et ultrices posuere
                cubilia Curae; Integer porta a urna eget rutrum.
              </Atom.Paragraph>
              <Atom.Flex>
                <Atom.Button white curved>
                  Latest Experiments
                </Atom.Button>
              </Atom.Flex>
            </Atom.Box>
          </Atom.Flex>

          <Atom.Flex center column sx={{flex: 4, order: 1}}>
            <Atom.Box sx={styles.desktopPreview}>
              <Atom.Image
                maxWidth={1040}
                sx={{mt: 0}}
                src="https://imgur.com/F9HfY1I.png"
              />
            </Atom.Box>
            {/* <Atom.Image
              maxWidth={350}
              sx={{mt: 5}}
              src="https://imgur.com/bn8Tezt.png"
            /> */}
          </Atom.Flex>
        </Atom.Flex>
      </Atom.Container>
    </Atom.Flex>
  );
};

const Features = props => {
  return (
    <Atom.Box sx={{bg: 'paper', color: 'text', py: 4}}>
      <Atom.Flex center column py={[2, 2, 4]}>
        <Atom.Heading xxl heavy center>
          Connecting Developers w/ Jobs
        </Atom.Heading>
        <Atom.Heading md thin>
          RapidExperiments Facilitates a 2-Sided Market between Talented
          Developers and Businesses{' '}
        </Atom.Heading>
      </Atom.Flex>

      <Atom.Container>
        <Atom.Flex>
          <Atom.Box sx={{flex: 1, p: 4}}>
            <Atom.Image
              maxWidth={40}
              src="https://image.flaticon.com/icons/svg/1085/1085710.svg"
            />
            <Atom.Image
              maxWidth={40}
              src="https://image.flaticon.com/icons/svg/1085/1085710.svg"
            />
            <Atom.Heading xl>Feature Focused</Atom.Heading>
            <Atom.Paragraph>
              Quisque velit elit, mollis vitae risus at, fermentum cursus erat.
              Integer pulvinar lobortis diam eget feugiat. Vestibulum ante ipsum
              primis in faucibus orci luctus et ultrices posuere cubilia Curae;
              Integer porta a urna eget rutrum.
            </Atom.Paragraph>
          </Atom.Box>

          <Atom.Box sx={{flex: 1, p: 4}}>
            <Atom.Image
              maxWidth={40}
              src="https://image.flaticon.com/icons/svg/1029/1029183.svg"
            />
            <Atom.Heading xl>Open Source</Atom.Heading>
            <Atom.Paragraph>
              Quisque velit elit, mollis vitae risus at, fermentum cursus erat.
              Integer pulvinar lobortis diam eget feugiat. Vestibulum ante ipsum
              primis in faucibus orci luctus et ultrices posuere cubilia Curae;
              Integer porta a urna eget rutrum.
            </Atom.Paragraph>
          </Atom.Box>

          <Atom.Box sx={{flex: 1, p: 4}}>
            <Atom.Image
              maxWidth={40}
              src="https://image.flaticon.com/icons/svg/138/138681.svg"
            />
            <Atom.Heading xl>Developer Profiles</Atom.Heading>
            <Atom.Paragraph>
              Quisque velit elit, mollis vitae risus at, fermentum cursus erat.
              Integer pulvinar lobortis diam eget feugiat. Vestibulum ante ipsum
              primis in faucibus orci luctus et ultrices posuere cubilia Curae;
              Integer porta a urna eget rutrum.
            </Atom.Paragraph>
          </Atom.Box>
        </Atom.Flex>
      </Atom.Container>
    </Atom.Box>
  );
};

const ApplicationPreview = props => {
  return (
    <Atom.Flex sx={{bg: 'paper', color: 'text', py: 3}}>
      <Atom.Container>
        <Atom.Flex center column sx={{my: 2}}>
          <Atom.Image
            maxWidth={90}
            src="https://image.flaticon.com/icons/svg/616/616494.svg"
            sx={{
              my: 4,
            }}
          />
          <Atom.Heading xxl heavy>
            Monthly Experiments You can play with today.
          </Atom.Heading>
          <Atom.Heading md thin>
            Rapid helps developers experiment with the latest tools and ideas.We
            stay up-to-date, so you don't have to.
          </Atom.Heading>
        </Atom.Flex>
        <Atom.Flex alignCenter>
          <Atom.Flex center column sx={{flex: 6}}>
            <Atom.Box sx={styles.desktopPreview}>
              <Atom.Image
                maxWidth={1040}
                sx={{mt: 0}}
                src="https://imgur.com/at7A9cr.png"
              />
            </Atom.Box>
          </Atom.Flex>

          <Atom.Flex column sx={{flex: 4}}>
            <Atom.Box sx={{mt: 4}}>
              <Atom.Image
                maxWidth={120}
                src="https://image.flaticon.com/icons/svg/2173/2173022.svg"
              />
              <Atom.Heading xxl heavy>
                Get Started
              </Atom.Heading>
              <Atom.Paragraph>
                Quisque velit elit, mollis vitae risus at, fermentum cursus
                erat. Integer pulvinar lobortis diam eget feugiat.
              </Atom.Paragraph>
              <ul>
                <li>
                  <Molecule.Link to="/tokens">Tokens</Molecule.Link>
                </li>
                <li>
                  <Molecule.Link to="/identity">Identity</Molecule.Link>
                </li>
                <li>
                  <Molecule.Link to="/misx">Misc</Molecule.Link>
                </li>
              </ul>
              <Atom.Paragraph sx={{fontSize: 0}}>
                Quisque velit elit, mollis vitae risus at, fermentum cursus
                erat. Integer pulvinar lobortis diam eget feugiat. Vestibulum
                ante ipsum primis.
              </Atom.Paragraph>
            </Atom.Box>

            <Atom.Flex>
              <Atom.Button>Developers</Atom.Button>
              <Atom.Button sx={{ml: 3}}>Businesses</Atom.Button>
            </Atom.Flex>
          </Atom.Flex>
        </Atom.Flex>
      </Atom.Container>
    </Atom.Flex>
  );
};

const Preview = props => {
  return (
    <Atom.Flex sx={{bg: 'paper', color: 'text', py: 3, pb: 6}}>
      <Atom.Container>
        <Atom.Box>
          <Atom.Container sx={{my: 5}}>
            <Atom.Flex center column sx={{my: 2}}>
              <Atom.Image
                maxWidth={90}
                src="https://image.flaticon.com/icons/svg/1161/1161388.svg"
                sx={{
                  my: 4,
                }}
              />
              <Atom.Heading xxl heavy>
                Select the Project Right for You
              </Atom.Heading>
              <Atom.Heading md thin>
                Ask for what you need and we'll use the latest in decentralized
                and machine learning to bring you the perfect match.
              </Atom.Heading>
            </Atom.Flex>
            <Slides
              naturalSlideWidth={100}
              naturalSlideHeight={85}
              items={items}
            />
          </Atom.Container>
        </Atom.Box>
      </Atom.Container>
    </Atom.Flex>
  );
};

const items = [
  <Atom.Flex center column sx={{p: 1, mx: 5}}>
    <Atom.Image
      maxWidth={350}
      sx={{mt: 0}}
      src="https://imgur.com/F9HfY1I.png"
    />
    yo
  </Atom.Flex>,
  <Atom.Flex center column sx={{p: 1, mx: 5}}>
    <Atom.Image
      maxWidth={350}
      sx={{mt: 0}}
      src="https://imgur.com/F9HfY1I.png"
    />
  </Atom.Flex>,
  <Atom.Flex center column sx={{p: 1, mx: 5}}>
    <Atom.Image
      maxWidth={350}
      sx={{mt: 0}}
      src="https://imgur.com/F9HfY1I.png"
    />
  </Atom.Flex>,
  <Atom.Flex center column sx={{p: 1, mx: 5}}>
    <Atom.Image
      maxWidth={350}
      sx={{mt: 0}}
      src="https://imgur.com/Jxi9dub.png"
    />
  </Atom.Flex>,
];

const ProjectExamples = props => (
  <Atom.Box sx={styles.projectSlides}>
    <Atom.Container sx={{maxWidth: [1, 1, 1, 1480]}}>
      <Atom.Box sx={{my: 3, ...props.sx}}>
        <Slides
          items={itemspeople}
          naturalSlideWidth={300}
          naturalSlideHeight={205}
          totalSlides={itemspeople.length}
          visibleSlides={2}
        />
      </Atom.Box>
    </Atom.Container>
  </Atom.Box>
);

const itemspeople = [
  <Atom.Flex center column sx={{m: 3}}>
    <Atom.Image
      maxWidth={1040}
      sx={{mt: 0}}
      src="https://imgur.com/F9HfY1I.png"
    />
    <Atom.Heading xxl>MeshHub</Atom.Heading>
    <Atom.Heading lg thin>
      A ConsenSys Token Experiment
    </Atom.Heading>
  </Atom.Flex>,
  <Atom.Flex center column sx={{m: 3}}>
    <Atom.Image
      maxWidth={1040}
      sx={{mt: 0}}
      src="https://imgur.com/NpLvC8F.png"
    />
    <Atom.Heading xxl>3Box Extensions</Atom.Heading>
    <Atom.Heading lg thin>
      A ConsenSys Token Experiment
    </Atom.Heading>
  </Atom.Flex>,
  <Atom.Flex center column sx={{m: 3}}>
    <Atom.Image
      maxWidth={1040}
      sx={{mt: 0}}
      src="https://imgur.com/F9HfY1I.png"
    />
    <Atom.Heading xxl>MeshHub</Atom.Heading>
    <Atom.Heading lg thin>
      A ConsenSys Token Experiment
    </Atom.Heading>
  </Atom.Flex>,
  <Atom.Flex center column sx={{m: 3}}>
    <Atom.Image
      maxWidth={1040}
      sx={{mt: 0}}
      src="https://imgur.com/F9HfY1I.png"
    />
    <Atom.Heading xxl>Utopia</Atom.Heading>
    <Atom.Heading lg thin>
      A ConsenSys Consitution Experiment
    </Atom.Heading>
  </Atom.Flex>,
];

const FeaturedProject = props => {
  return <Atom.Flex></Atom.Flex>;
};
