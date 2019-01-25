import PropTypes from 'prop-types';
import React from 'react';
import { Button } from 'antd';

/**
 * Testing utilizing older code in tsx boilerplate.
 */
export default class HelloWorld extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
           <div>
            <Button type="primary"><strong>Hello World!</strong></Button>
           </div>
        );
    }
}
