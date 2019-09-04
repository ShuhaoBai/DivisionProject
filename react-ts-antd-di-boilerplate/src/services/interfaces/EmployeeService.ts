import Employee from 'models/Employee';

export type Employees = Map<string, Employee>;

/**
 * react-injection requires us to separate state from service to ensure that
 * UI is updated correctly on state changes.
 */
export interface EmployeeServiceState {
    employees: Employees | null;
};

export interface EmployeeService {
    getEmployees(forceReload: boolean): Employees;
    getEmployee(id: string): Employee;
    updateEmployee(employee: Employee): void;
};

// We need a key in order to look it up from the container
export const EmployeeServiceKey = Symbol.for('EmployeeService');
