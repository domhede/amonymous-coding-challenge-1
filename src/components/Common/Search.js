import React, { Component } from 'react';
import styled from 'styled-components';
import { effects } from 'helpers/style-utils';

import Button from './Button';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  ${effects.boxShadow}
  padding: 0px 32px 0px;
`;
const Input = styled.input`
  margin: 32px 16px 32px 0px;
  padding: 8px;
  width: 80%;
  border-radius: 4px;
  font-size: 14px;
`;
Input.displayName = 'Input';
const Clear = styled.div`
  height: 20px;
  width: 20px;
  padding: 10px;
  border-radius: 50%;
  align-self: center;
  margin-right: 16px;
  color: #fff;
  background: #DDD;
  &:hover{
    cursor: pointer;
  }
`;
Clear.displayName = 'Clear';

const Cross = styled.path`
  stroke: black;
  fill: transparent;
  stroke-linecap: round;
  stroke-width: 5;
`;
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.clear = this.clear.bind(this);
  }
  handleChange(event){
    this.setState({
      searchTerm: event.target.value
    })
  }
  clear() {
    this.setState({
      searchTerm: ''
    }, () => this.props.clearFilter())
  }
  render() {
    const { filterImages } = this.props;
    const { searchTerm } = this.state;

    return (
      <Wrapper>
        <Input placeholder='Search by title' onChange={this.handleChange} value={searchTerm} />
        {searchTerm !== '' &&
          <Clear onClick={() => this.clear()}>
            <svg>
              <Cross d="M 5,5 L 15,15 M 15,5 L 5,15"></Cross>
            </svg>
          </Clear>
        }
        <Button onClick={() => filterImages(searchTerm)}>Filter</Button>
      </Wrapper>
    )
  }
}
export default Search;

