import Employee from '@default/models/Employee';

export enum Status {
    Uninitialized,
    Loading,
    Success,
    Error
}

export interface IEmployeeService {
    employees: Map<string, Employee>;
    status: Status;

    loadEmployees(): void;
    addEmployee(employee: Employee): void;
    deleteEmployee(employeeId: string): void;
    setStatus(status: Status): void;
}