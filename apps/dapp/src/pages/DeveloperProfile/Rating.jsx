/* --- Styles --- */
const styles = {
  star: {
    maxWidth: 25,
  },
  total: {
    m: 0,
    ml: 3,
  },
};

/* --- Component --- */
const Rating = props => (
  <Atom.Flex alignCenter>
    <Atom.Flex>
      <Atom.Span>
        {' '}
        <Atom.Image
          sx={styles.star}
          src={'https://image.flaticon.com/icons/svg/185/185009.svg'}
        />{' '}
      </Atom.Span>
      <Atom.Span>
        {' '}
        <Atom.Image
          sx={styles.star}
          src={'https://image.flaticon.com/icons/svg/185/185009.svg'}
        />{' '}
      </Atom.Span>
      <Atom.Span>
        {' '}
        <Atom.Image
          sx={styles.star}
          src={'https://image.flaticon.com/icons/svg/185/185009.svg'}
        />{' '}
      </Atom.Span>
      <Atom.Span>
        {' '}
        <Atom.Image
          sx={{opacity: 0.8, ...styles.star}}
          src={'https://image.flaticon.com/icons/svg/185/185009.svg'}
        />{' '}
      </Atom.Span>
      <Atom.Span>
        {' '}
        <Atom.Image
          sx={{opacity: 0.6, ...styles.star}}
          src={'https://image.flaticon.com/icons/svg/185/185009.svg'}
        />{' '}
      </Atom.Span>
    </Atom.Flex>
    <Atom.Heading sx={styles.total}>Total: {props.total}</Atom.Heading>
  </Atom.Flex>
);

Rating.defaultProps = {
  total: 10,
};

export default Rating;
