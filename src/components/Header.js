import React from 'react';
import styled from 'styled-components';

class Header extends React.Component {
  render(){
    return (
      <Wrapper>
        <HeaderItem>
          Startup Bible
        </HeaderItem>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  padding: 20px 20px 20px 40px;
`


const HeaderItem = styled.header`
  font-size: 30px;
  font-weight: 700;
  display: flex;
`;

export default Header;
