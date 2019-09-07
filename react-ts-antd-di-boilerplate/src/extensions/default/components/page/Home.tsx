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
        let employeeCard = <div/>;

        if (this.state.selectedEmployee) {
            const employee = this.props.employeeService.employees.get(this.state.selectedEmployee);

            if (employee) {
                employeeCard = <EmployeeCard employee={employee} />
            }
        }
        
        const flex = css`
            flex: 1;
        `;
        const style = css`
            color: ${theme.colors.text};
            border: 1px solid ${theme.colors.textSecondary};
            flex: 1;
            height: 100%;
            min-height: 100%;
        `;

        return (
            <Flexbox flexDirection="row" className={style}>
                <div>
                    <EmployeeList employees={this.props.employeeService.employees}
                        selectedEmployee={this.state.selectedEmployee}
                        onSelectedEmployeeChanged={this.onSelectedEmployeeChanged} />
                </div>
                <div className={flex}>
                    {employeeCard}
                </div>
            </Flexbox>
        );
    }

    render() {
        let content;
        const status = this.props.employeeService.status;

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