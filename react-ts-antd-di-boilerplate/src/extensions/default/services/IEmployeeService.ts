import Employee from '@default/models/Employee';

export enum Status {
  Uninitialized,
  Loading,
  Success,
  Error
}

export interface IEmployeeService {
    loadEmployees(): void;
	getEmployees(): Map<string, Employee>;
    getEmployee(employeeId: string): Employee | undefined;
    addEmployee(employee: Employee): void;
    deleteEmployee(employeeId: string): void;
    getStatus(): Status;
    setStatus(status: Status): void;
}