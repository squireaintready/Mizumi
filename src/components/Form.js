import React from "react";
import Inputs from "./Inputs";
import styled from "styled-components";

import Button from '@material-ui/core/Button';


let data = [
  {
    name:'Servers',
    value:0,
  },
  {
    name:'Bus boys',
    value:0,
  },
  {
    name:'Bus girls',
    value:0,
  },
  {
    name:'Total Tips',
    value:0
  }
]

function Form() {
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log('calculating')
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        {
          data.map(dat =>(
            <Inputs key={dat.name} title={dat.name} value={dat.value} />
          ))
        }
        <Button variant="contained" color='primary' type='submit'>Lets Go</Button>
      </form>
    </Container>
  );
}

export default Form;

const Container = styled.div`
  margin-top: 1.5rem;
`;
