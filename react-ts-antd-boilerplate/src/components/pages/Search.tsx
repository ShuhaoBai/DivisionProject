import React, { Component } from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Menu, Dropdown } from 'antd';
import { css } from 'emotion';
import GraphQLError from 'components/core/GraphQLError';
import { flexRow } from 'styles/base';

// Component styles
const dropdownContainer = css`
  ${flexRow};
`;

type MyProps = {  };
type MyState = { queryBy: string };
export default class Search extends Component<MyProps, MyState> {

  constructor(props: any) {
    super(props);
    this.state = {
        queryBy: 'Gene'
    };
  }

  onClick = (info: any) => {
    this.setState({ queryBy: info.key });
  }
  
  renderSearch() {
    if (this.state.queryBy === 'Gene') {
      return this.renderGeneSearch();

    } else {
      return <div />
    }
  }
  renderGeneSearch(): any {
    return (
      <Query
        query={gql`
        {
          rates(currency: "USD") {
            currency
            rate
          }
        }
      `}
      >
        {({ loading, error, data }) => {
          if (loading) {
            return <p>Loading...</p>;

          } else if (error) {
            return <GraphQLError message="Failed to query server." error={error} />;

          } else {/* this is an example of adding type definitions to arrow function params */ }
            const items = data.rates.map(({ currency, rate }: { currency: string, rate: string }) => {
              return (
                <li key={currency}>{`${currency}: ${rate}`}
                </li>
              )
          });
          return (
            <ul>{items}</ul>
          )
        }
        }
      </Query>
    );
  }

  render() {
    const menu = (
      <Menu onClick={this.onClick}>
        <Menu.Item key="Gene">Gene</Menu.Item>
        <Menu.Item key="Metabolite">Metabolite</Menu.Item>
        <Menu.Item key="Functional Category">Functional Category</Menu.Item>
        <Menu.Item key="Metabolic Pathway">Metabolic Pathway</Menu.Item>
      </Menu>
    );
    return (
      <div className={css`display: flex; flex-direction: column;`}>
        <div className={dropdownContainer}>
          <div className={css`margin-right: 5px;`}>Search by: </div>
          <Dropdown overlay={menu} placement="topLeft">
            <a className="ant-dropdown-link" href="#">
              {this.state.queryBy}
            </a>
          </Dropdown>
        </div>
        {this.renderSearch()}
      </div>

    );
  }
}
