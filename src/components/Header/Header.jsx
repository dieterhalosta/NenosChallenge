import React from 'react';
import PropTypes from 'prop-types';
import logo from './../../logo.png';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const variants = {
  load: {
    scale: 2,
    transition: {
      type: 'spring',
    },
  },
  unload: {
    scale: 0.75,
  },
};

export const Header = () => {
  return (
    <StyledHeader id="header">
      <Logo
        src={logo}
        alt="logo"
        variants={variants}
        initial="unload"
        animate="load"
        exit="unload"
      />
    </StyledHeader>
  );
};

Header.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string,
};

Header.defaultProps = {
  heading: null,
  description: null,
};

export default Header;

const StyledHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 100vw;
  min-height: 20vh;
  font-size: calc(10px + 4vmin);
  background-color: var(--secondarybg);
  color: var(--darktext);
  padding-top: 25px;
  @media (min-width: 600px) {
    font-weight: bold;
    font-size: calc(10px + 2vmin);
  }
`;

const Logo = styled(motion.img)`
  height: 15vmin;
  pointer-events: none;
  @media (min-width: 600px) {
    height: 6vmin;
  }
`;