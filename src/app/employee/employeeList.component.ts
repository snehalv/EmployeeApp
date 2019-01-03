import { Component } from '@angular/core';


@Component({
    // tslint:disable-next-line:component-selector
    selector: 'list-emp',
    templateUrl: '../employee/employeeList.component.html'
})
export class EmployeeListComponent {

    employees: any[];
    selectedEmployeeCountRadioButton = 'All';

    constructor() {

        this.employees = [
            {id: 101, name: 'Snehal', gender: 'Female', salary: 20000},
            {id: 202, name: 'Swapnil', gender: 'Male', salary: 25000},
            {id: 303, name: 'Sangita', gender: 'Female', salary: 40000},
        ];
    }

    getEmployee(): void {

        this.employees = [
            {id: 101, name: 'Snehal', gender: 'Female', salary: 20000},
            {id: 202, name: 'Swapnil', gender: 'Male', salary: 25000},
            {id: 303, name: 'Sangita', gender: 'Female', salary: 40000},
            {id: 404, name: 'Prashant', gender: 'Male', salary: 50000}
        ];

    }

    trackByEmp(index: number, employee: any): string {

        return employee.id;

    }

    getAllEmployees() {

        return this.employees.length;
    }

    getMaleEmplyees() {

        return this.employees.filter(e => {
            return e.gender === 'Male';
        }).length;
    }

    getFemaleEmployees() {
        return this.employees.filter(e => {
            return e.gender === 'Female';
         } ).length;
    }

    onEmployeeCountRadioButtonChange(selectedRadioBtnValue: string): void {
        this.selectedEmployeeCountRadioButton = selectedRadioBtnValue;
    }

}
