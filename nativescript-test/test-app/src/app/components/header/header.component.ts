import { Component} from '@angular/core'

@Component ({
    selector: 'ns-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    moduleId: module.id,
})

export class Header {
    name = "";
    enteredText = '';

    confirmName() {
        if(!this.enteredText) return;
        this.name = this.enteredText;
    }

    resetName() {
        this.enteredText='';
    }

    deleteName() {
        this.name = '';
        this.enteredText = '';
    }
}
