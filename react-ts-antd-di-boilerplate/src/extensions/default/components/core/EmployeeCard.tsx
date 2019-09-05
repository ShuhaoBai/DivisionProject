import React from 'react';
import { observer } from 'mobx-react';
import { css } from 'emotion';
import Employee from '@default/models/Employee';
import theme from '@extensions/services/Theme';


type MyProps = { 
  employee: Employee
};
type MyState = { };

@observer
export default class EmployeeCard extends React.Component<MyProps, MyState> {

    render() {
        const employee = this.props.employee;
        console.log(employee);
        const style = css`
            color: ${theme.getColors().text};
        `;
        return (
            <div className={style}>
                {employee.getName()}
            </div>
        );
    }
}