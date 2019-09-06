import React from 'react';
import { css } from 'emotion';
import { inject, observer } from 'mobx-react';
import { IEmployeeService, Status } from '@default/services/IEmployeeService';
import Flexbox from '@default/components/core/Flexbox';
import EmployeeCard from '@default/components/employee/EmployeeCard';
import EmployeeList from '@default/components/employee/EmployeeList';
import theme from '@extensions/services/Theme';

type MyProps = {
    employeeService: IEmployeeService
};
type MyState = { 
    selectedEmployee: string | null
};

@inject('employeeService')
@observer
export default class Home extends React.Component<MyProps, MyState> {

    constructor(props: MyProps) {
        super(props);
        this.state = {
            selectedEmployee: null
        };
    }

    onSelectedEmployeeChanged = (employeeId: string) => {
        this.setState({ selectedEmployee: employeeId });
    };

    renderError() {
        const style = css`
            color: ${theme.colors.error};
        `;
        return <div className={style}>Error loading employees.</div>
    }

    renderLoading() {
        return <div>Loading...</div>;
    }

    renderItems() {

        const employees = this.props.employeeService.getEmployees();
        return (
            <Flexbox flexDirection="row" flex={1}>
                <div>
                    <EmployeeList employees={employees}
                        selectedEmployee={this.state.selectedEmployee}
                        onSelectedEmployeeChanged={this.onSelectedEmployeeChanged} />
                </div>
                <div className={css`flex: 1;`}>
                    <EmployeeCard selectedEmployee={this.state.selectedEmployee} />
                </div>
            </Flexbox>
        ); 
    }

    render() {
        let content;
        const status = this.props.employeeService.getStatus();

        if (status === Status.Error) {
            content = this.renderError();

        } else if (status === Status.Loading) {
            content = this.renderLoading();

        } else {
           content = this.renderItems();
        }

        return (
            <Flexbox flexDirection="column">         
                <theme.PageTitle>Employees</theme.PageTitle>
                {content}
            </Flexbox>
        );
    }
}