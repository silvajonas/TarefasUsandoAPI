import React from "react";
import {createUseStyles} from 'react-jss';
import styled from 'styled-components';

const useClasses = createUseStyles({
  paragraph: {
    backgroundColor:"black",
    color: 'pink',
    position: 'relative',
    padding: '20px',
    '&:hover': {
      color: 'green',
      opacity: '0.2',
      backgroundColor: 'yellow'
    } 
  }
})

const Paragraph = styled.p`
  background-color: green;
  color: blue;
  position: absolute;
  padding: 20px;

  &:active {
    background-color: pink;
  }
`;

export const Dashborad = () => {

  const classes = useClasses()

  return (
    <>
      <p className={classes.paragraph}>Teste</p>
      <Paragraph>
        Jonas
      </Paragraph>
    </>
     
  )
};
