import React from 'react';
import { css } from 'emotion';
import { inject, observer } from 'mobx-react';
import { IEmployeeService, Status } from '@default/services/IEmployeeService';
import Employee from '@default/models/Employee';
import EmployeeCard from '@default/components/core/EmployeeCard';
import theme from '@extensions/services/Theme';

type MyProps = {
    employeeService: IEmployeeService
};
type MyState = {};

@inject('employeeService')
@observer
export default class Home extends React.Component<MyProps, MyState> {
    
    render() {
        let content;
        const status = this.props.employeeService.getStatus();

        if (status === Status.Error) {
            const style = css`
        color: ${theme.getColors().error};
      `;
            content = <div className={style}>Error loading employees.</div>

        } else if (status === Status.Loading) {
            content = <div>Loading...</div>

        } else {
            const employees = this.props.employeeService.getEmployees();
            content = []
            employees.forEach((employee: Employee) => {
                content.push( <EmployeeCard key={employee.getId()} employee={employee} /> );
            });
        }

        return (
            <div>
                <div className={theme.getPageTitleStyle()}>Employees</div>
                {content}
            </div>
        );
    }
}