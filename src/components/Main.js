import React from 'react';
import styled from 'styled-components';

class Main extends React.Component {

  getTable(){
    return fetch('/.netlify/functions/airtableFunction/airtableFunction.js', {
      method: 'GET'
    }).then(response => {
      return response
    })
  };


  render(){
    console.log(this.getTable());
    return (
      <Wrapper>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  padding: 20px 20px 20px 40px;
`




export default Main;
