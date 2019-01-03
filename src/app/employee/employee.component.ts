import { Component, Input, EventEmitter, Output } from '@angular/core';


@Component({
    // tslint:disable-next-line:component-selector
    selector: 'my-employee',
    templateUrl: '../employee/employee.component.html'
})
export class EmployeeComponent {

    // pageHeader = 'Employee Details';
    // firstName = 'Snehal';
    // lastName = 'Vyawahare';
    // gender = 'Female';
    // age = 25;
    // isShow = false;

    // onClick(): void {

    //     this.isShow = !this.isShow;

    // }

    @Input()
    all: number;
    @Input()
    male: number;
    @Input()
    female: number;

    selectedRadioBtnValue: string;
    @Output()
    radioBtnSelectionChangeEvent: EventEmitter<string> = new EventEmitter<string>();

    onRadioBtnSelectionChange() {
        this.radioBtnSelectionChangeEvent.emit(this.selectedRadioBtnValue);

    }

}
