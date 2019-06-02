import { Directive, OnInit, Input, ElementRef, HostListener, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  
  // @Input() defaultColor:string;

  @Input('appBetterHighlight') defaultColor:string;
  @Input() highlightColor:string;
  @HostBinding('style.backgroundColor') backgroundColor:string; 

  @HostListener('mouseenter') onmouseenter(){
    // this.el.nativeElement.style.backgroundColor = this.highlightColor;
    // this.renderer.setStyle(this.el.nativeElement,"background-color",this.highlightColor);
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') onmouseleave(){
    // this.renderer.setStyle(this.el.nativeElement,"background-color",this.defaultColor);
    this.backgroundColor = this.defaultColor;
  } 

  @HostListener('click') onHighlightClick(){
    alert("Hey There");
  }

  constructor(private el:ElementRef,private renderer:Renderer2) {
    
  }
  ngOnInit(): void {
    // this.el.nativeElement.style.backgroundColor = this.defaultColor;
    this.backgroundColor = this.defaultColor;
  }
}
