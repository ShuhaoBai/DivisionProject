import { injectable } from 'inversify';
import { ReactiveService } from 'react-injection';
import { EmployeeService, EmployeeServiceState, Employees } from 'services/interfaces/EmployeeService';
import Employee from 'models/Employee';

@injectable()
export default class EmployeeServiceImpl extends ReactiveService<EmployeeServiceState> implements EmployeeService {

  protected state: EmployeeServiceState = {
    employees: null
  }

  private promise: Promise<Employees> | null = null;

  getEmployees(forceReload: boolean = false): Employees {
    let promise = this.promise; 

    if (this.promise === null) {
      promise = this.fetchEmployees();
    }

    return null;
  }

  getEmployee(id: string): Employee {
    throw new Error('Method not implemented.');
  }

  updateEmployee(employee: Employee): void {
    throw new Error('Method not implemented.');
  }

  async fetchEmployees(): Promise<Employees> {
    const url = 'https://www.google.com';

    return new Promise(resolve => {
      fetch(url)
        .then(response => response.json())
        .then(body => {
          resolve(body);
        });
    });
  }

}