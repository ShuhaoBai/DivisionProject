import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { css } from 'emotion';
import { inject } from 'mobx-react';
import '@default/components/App.less'; // you can set styles in less file if you prefer to use antd variables
import { IEmployeeService } from '@default/services/IEmployeeService';
import Home from '@default/components/page/Home';
import Search from '@default/components/page/Search';
import Browse from '@default/components/page/Browse'
import theme from '@extensions/services/Theme';
import Header from '@extensions/components/core/Header';

type MyProps = {
    employeeService: IEmployeeService
};
type MyState = {};

@inject('employeeService')
export default class App extends React.Component<MyProps, MyState> {

    // We have to set a default props value for all props injected by mobx or else component will show a missing prop error when rendered
    static defaultProps = {
        employeeService: null
    }

    componentDidMount() {
        this.props.employeeService.loadEmployees();
    }


    render() {
        const appStyle = css`
            font-family: ${theme.getFonts().base};
            font-size: ${theme.getFonts().sizeDefault};
            width: 100%;
            ${theme.getFlexboxStyle('column', 'flex-start')}
            flex: 1;
        `;

        const mainStyle = css`
            padding-left: 100px;
        `;

        return (
            <div className={appStyle}>
                <Router>
                    <Header />
                    <main className={mainStyle}>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/search" component={Search} />
                            <Route exact path="/browse" component={Browse} />
                        </Switch>

                        <div className="hello-box">EXAMPLE: styled with 'less' and antd 'less' variables</div>
                    </main>
                </Router>
            </div>
        );
    }
}

