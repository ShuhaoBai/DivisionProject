import { observable, action, computed } from 'mobx';

export default class Employee {

    id: string;
	@observable name: string;
	@observable age: string;
    @observable description: string | null;

	constructor(id: string, name: string, age: string, description: string | null) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.description = description;
	}

	@computed get toJSON(): any {
		return {
			id: this.id,
            name: this.name,
            age: this.age,
            description: this.description
		}
    }

	@action	setName(name: string): void {
		this.name = name;
    }

	@action	setAge(age: string): void {
		this.age = age;
	}

	@action	setDescription(description: string): void {
		this.description = description;
	}
}
