type RestData = { // data as provided by rest web service
    employee_name: string;
    employee_age: string;
};

export default class Employee {

    private name: string;
    private description: string;
    private age: string;

    constructor(data: RestData | Employee) {
        if (data instanceof Employee) {
            this.name = data.name;
            this.age = data.age;
            this.description = data.description;
    
        } else {
            this.name = data.employee_name;
            this.age = data.employee_age;
            this.description = '';
        }
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getDescription(): string {
        return this.description;
    }

    public setDescription(description: string): void {
        this.description = description;
    }

    public getAge(): string {
        return this.age;
    }

    public setAge(age: string): void {
        this.age = age;
    }

}