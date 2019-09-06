import React from 'react';
import { inject, observer } from 'mobx-react';
import { css, cx } from 'emotion';
import { IEmployeeService } from '@default/services/IEmployeeService';

import Employee from '@default/models/Employee';
import theme from '@extensions/services/Theme';


type MyProps = { 
  selectedEmployee: string | null,
  employeeService: IEmployeeService
};
type MyState = { };

@observer
@inject('employeeService')
export default class EmployeeCard extends React.Component<MyProps, MyState> {
    // We have to set a default props value for all props injected by mobx or else component will show a missing prop error when rendered
    static defaultProps = {
        employeeService: null
    }

    renderEmployee(employeeId: string) {
        const employee: Employee | undefined = this.props.employeeService.getEmployee(employeeId);

        if (employee) {
            return (
                <div>
                    {employee.getName()}
                </div>
            );
    
        }
        return <div/>
    }

    render() {
        const style = css`
            color: ${theme.colors.text};
            border: 1px solid ${theme.colors.textSecondary};
            padding: 20px;
            flex: 1;
            height: 100%;
        `;
        let content = <div/>;

        if (this.props.selectedEmployee) {
            content = this.renderEmployee(this.props.selectedEmployee);
        }

        return (
            <div className={cx('employee-card', style)}>
                {content}
            </div>
        );
    }
}