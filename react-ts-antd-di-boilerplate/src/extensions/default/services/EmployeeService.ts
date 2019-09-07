import * as superagent from 'superagent';
import { observable, transaction, action } from 'mobx';
import Employee from '@default/models/Employee';
import { IEmployeeService, Status } from '@default/services/IEmployeeService';

const urlBase = process.env.REACT_APP_SERVER_BASE_URL;

export class EmployeeService implements IEmployeeService {
	@observable employees: Map<string, Employee> = observable.map<string, Employee>();
  @observable status: Status = Status.Uninitialized;

  @action	async loadEmployees() {
    const url = `${urlBase}/employees`;
    this.setStatus(Status.Loading);
    try {
      const response = await superagent.get(url).set('Accept', 'application/json');
      const data = JSON.parse(response.text);
      console.log(response.text);

      // Wrap in a mobx transaction to not update observers until the whole block is complete
      transaction(() => {
        data.forEach(e => {
          // Skip a bunch of garbage ones
          if (e.employee_name.startsWith('test')) {
            const employee: Employee = new Employee(e.id, e.employee_name, e.employee_age, '');
            this.addEmployee(employee);
  
          }
        });

        this.setStatus(Status.Success);
      });

    } catch (error) {
      console.error('Failed to load employees!', error);
      this.setStatus(Status.Error);
    }
  }

  @action addEmployee(employee: Employee) {
    this.employees.set(employee.id, employee);
  }

  @action deleteEmployee(employeeId: string): void {
    this.employees.delete(employeeId);
  }

  @action setStatus(status: Status): void {
    this.status = status;
  }

}

export default new EmployeeService();
