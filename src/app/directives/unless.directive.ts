import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { Condition } from 'selenium-webdriver';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  @Input('appUnless') set value(condition : boolean) {
    if(condition){
      this.viewContainer.clear();
    }else{
      this.viewContainer.createEmbeddedView(this.template);
    }
  }

  constructor(private template:TemplateRef<any>,private viewContainer:ViewContainerRef) { }

}
