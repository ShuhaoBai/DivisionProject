import React from 'react';
import { observer } from 'mobx-react';
import { css, cx } from 'emotion';
import { IEmployeeService } from '@default/services/IEmployeeService';
import Employee from '@default/models/Employee';
import EmployeeItem from '@default/components/employee/EmployeeItem';
import theme from '@extensions/services/Theme';


type MyProps = { 
  employees: Map<string, Employee>,
  employeeService: IEmployeeService,
  selectedEmployee: string | null,
  onSelectedEmployeeChanged: (employeeId: string) => void
};
type MyState = { };

@observer
export default class EmployeeCard extends React.Component<MyProps, MyState> {
    // We have to set a default props value for all props injected by mobx or else component will show a missing prop error when rendered
    static defaultProps = {
        employeeService: null
    }
    
    render() {
        const wrapperStyle = css`
            background-color: ${theme.colors.textSecondary};
        `;

        const list : any[] = [];
        this.props.employees.forEach((employee: Employee) => {
            const selected = employee.getId() === this.props.selectedEmployee;
            list.push( 
                <EmployeeItem key={employee.getId()} 
                    onSelectedEmployeeChanged={this.props.onSelectedEmployeeChanged}
                    employee={employee} 
                    selected={selected} />
            );
        });

        return (
            <div className={cx('employee-list', wrapperStyle)}>
                {list}
            </div>
        )
    }
}