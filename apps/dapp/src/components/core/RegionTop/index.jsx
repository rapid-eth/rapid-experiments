/* --- Global --- */
import {Link} from '@reach/router';
import {ColorMode} from 'core';

export default props => (
  <Atom.Flex alignCenter between sx={{variant: 'regions.header'}}>
    {/* Left */}
    <Atom.Flex alignCenter>
      <Link to="/">
        <Atom.Flex alignCenter>
          <Atom.Image
            sx={{
              borderRadius: 8,
              mr: 3,
              maxWidth: 22,
            }}
            src="https://imgur.com/P2GyVjv.png"
          />
          <Atom.Heading sm heavy mb={0}>
            {GLOBAL.siteName}
          </Atom.Heading>
        </Atom.Flex>
      </Link>

      {/* Menu */}
      <Atom.Flex alignCenter ml={4}>
        <Molecule.Menu
          sx={{
            m: 2,
            mx: 3,
          }}
          items={[
            {
              label: 'Tokens',
              to: '/tokens',
            },
            {
              label: 'Identity',
              to: '/identity',
            },
            {
              label: 'Misc',
              to: '/misc',
            },
            {
              label: 'Rimble',
              to: '/rimble',
            },
          ]}
        />
      </Atom.Flex>
      {/* Right */}
    </Atom.Flex>
    <Atom.Flex alignCenter>
      <ColorMode />
    </Atom.Flex>
  </Atom.Flex>
);
