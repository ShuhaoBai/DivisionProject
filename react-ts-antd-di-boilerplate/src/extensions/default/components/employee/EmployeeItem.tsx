import React from 'react';
import { observer } from 'mobx-react';
import { css, cx } from 'emotion';
import Employee from '@default/models/Employee';
import theme from '@extensions/services/Theme';


type MyProps = { 
  employee: Employee,
  selected: boolean,
  onSelectedEmployeeChanged: (employeeId: string) => void
};
type MyState = { };

@observer
export default class EmployeeCard extends React.Component<MyProps, MyState> {

    onSelectedEmployeeChanged = (event: React.MouseEvent<HTMLElement>) => {
        this.props.onSelectedEmployeeChanged(this.props.employee.id);
    }

    render() {
        let itemStyle = css`
            padding: 10px;
            width: 100%;
        `;

        if (this.props.selected) {
            itemStyle = cx(itemStyle, css`
                color: ${theme.colors.textSecondary};
                background-color: ${theme.colors.primary};
            `);

        } else {
            itemStyle = cx(itemStyle, css`
                color: ${theme.colors.text};
            `);
        }

        const employee = this.props.employee;
        return (
            <div className={itemStyle} onClick={this.onSelectedEmployeeChanged}>
                {employee.name}
            </div>
        );
    }
}