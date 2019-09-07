import React from 'react';
import { inject, observer } from 'mobx-react';
import { css } from 'emotion';
import { IEmployeeService } from '@default/services/IEmployeeService';
import Employee from '@default/models/Employee';
import Flexbox from '@default/components/core/Flexbox';
import { Input } from 'antd';
import theme from '@extensions/services/Theme';

type MyProps = {
    employee: Employee,
    employeeService: IEmployeeService
};
type MyState = {};

@inject('employeeService')
@observer
export default class EmployeeCard extends React.Component<MyProps, MyState> {
    // We have to set a default props value for all props injected by mobx or else component will show a missing prop error when rendered
    static defaultProps = {
        employeeService: null
    }
    
    onNameChanged = (e: React.FormEvent<HTMLInputElement>) => {
        const newValue = e.currentTarget.value;
        this.props.employee.setName(newValue);
    }

    onDescriptionChanged = (e: React.FormEvent<HTMLInputElement>) => {
        const newValue = e.currentTarget.value;
        this.props.employee.setDescription(newValue);
    }

    onAgeChanged = (e: React.FormEvent<HTMLInputElement>) => {
        const newValue = e.currentTarget.value;
        this.props.employee.setAge(newValue);
    }

    renderLabel(label: string) {
        const style = css`
            width: 100px;
        `;
        return <theme.Label className={style}>{label}</theme.Label>;
    }

    renderRow(label: string, value: any, callback: any) {
        const style = css`
            padding: 5px 0;
       `;
        let component;
        if (callback) {
            component = <Input onChange={callback} value={value} />

        } else {
            component = value;
        }
        return (
            <Flexbox className={style} flexDirection="row">
                {this.renderLabel(label)}
                {component}
            </Flexbox>
        )
    }

    renderEmployee() {
        const employee = this.props.employee;

        return (
            <Flexbox flexDirection="column" >
                {this.renderRow('ID', employee.id, null)}
                {this.renderRow('Name', employee.name, this.onNameChanged)}
                {this.renderRow('Description', employee.description, this.onDescriptionChanged)}
                {this.renderRow('Age', employee.age, this.onAgeChanged)}
            </Flexbox>
        );
    }

    render() {
        const employeeCard = css`
            padding: 20px;
            flex: 1;
        `;

        return (
            <div className={employeeCard}>
                { this.renderEmployee() }
            </div>
        );
    }
}