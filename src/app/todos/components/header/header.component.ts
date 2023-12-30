import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    selector: 'app-todos-header',
    templateUrl: './header.component.html',
    standalone: true,
    imports: [
        CommonModule
    ],
})
export class HeaderComponent { 

    constructor(){}

    public text: string = '';

    changeText(event: Event): void {
        const target = event.target as HTMLInputElement;
        this.text = target.value;
        console.log('target.value', target.value);  // TODO: rename for console logs or remove
    }

    addTodo(): void {
        console.log('addTodo', this.text);
    }
}