import React from 'react';
import theme from '@extensions/services/Theme';

type MyProps = {};
type MyState = {};

export default class Browse extends React.Component<MyProps, MyState> {

    render() {
        return (
            <div className={theme.getPageTitleStyle()}>Browse Page</div>
        );
    }
}
