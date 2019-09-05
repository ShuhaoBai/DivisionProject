import {observable, computed, action} from 'mobx';

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

	@computed get toJSON(): object {
		return {
			id: this.id,
            name: this.name,
            age: this.age,
            description: this.description
		}
    }
    
    getId(): string {
        return this.id;
    }
    
    getName(): string {
        return this.name;
    }

	@action	setName(name: string): void {
		this.name = name;
    }
    
    getAge(): string {
        return this.age;
    }

	@action	setAge(age: string): void {
		this.age = age;
	}

    getDescription(): string | null {
        return this.description;
    }

	@action	setDescription(description: string): void {
		this.description = description;
	}
}
