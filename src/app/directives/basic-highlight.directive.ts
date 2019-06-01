import { Directive, OnInit, ElementRef } from "@angular/core";

@Directive({
    selector: "[basic-highlight]"
})
export class BasicHighlightDirective implements OnInit {
    constructor(private el: ElementRef) {

    }
    ngOnInit(): void {
        this.el.nativeElement.style.backgroundColor = "yellow";
    }    
}