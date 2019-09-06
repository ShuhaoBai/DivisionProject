import React from 'react';
import theme from '@extensions/services/Theme';

type MyProps = { };
type MyState = { };

export default class Search extends React.Component<MyProps, MyState> {
 
  render() {
    return (
      <theme.PageTitle>Search Page</theme.PageTitle>
    );
  }
}
