import React, { Component } from 'react';
import { withApollo, WithApolloClient } from 'react-apollo';
import gql from "graphql-tag";

class Browse extends Component<WithApolloClient<any>> {
render() {
    // Example of looking up a property directly from the cache, without using the Query
  // component
  let isConnected = false;
  try {
    isConnected = this.props.client.readQuery({
      query: gql`{
        isConnected {
          value
        }
      }
    `,
    })
  } catch (e) {
    console.trace();
  }

  return (
    <div>
      <div> TODO: browse the graph with popoto.js</div>
      <div>{isConnected}</div>
    </div>
  );
}
}

// Connect with the Apollo Client so I can directly read values from the store (InMemoryCache)
export default withApollo(Browse);