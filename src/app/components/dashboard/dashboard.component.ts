import { Component, OnInit, OnDestroy } from '@angular/core';
import * as Obs from "../../services/rxjs.index";
// import {Observable, Subscription} from 'rxjs';
// import 'rxjs/Rx';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit,OnDestroy {
  
  numSubscription:Obs.Subscription ;
  custSubs:Obs.Subscription; 
  constructor() { }

  ngOnInit() {
    // const numObservSubs= Obs.Observable.interval(1000).map((num)=>{return num*2;});

    // this.numSubscription = numObservSubs.subscribe((num)=>{
    //   console.log(num);
    // });

    // const custObser= Obs.Observable.create((observer:Obs.Observer<string>)=>{
    //   setTimeout(() => {
    //     observer.next("First Instance Emitted");
    //   }, 2000);

    //   setTimeout(() => {
    //     observer.next("Second Instance Emitted");
    //   }, 5000);

    //   // setTimeout(() => {
    //   //   observer.error({errorCode:1,errorMessage:"Some Error Occurred during execution"});
    //   // }, 6000);

    //   // setTimeout(() => {
    //   //   observer.complete();
    //   // }, 6000);

    //   setTimeout(() => {
    //     observer.next("Third Instance Emitted");
    //   }, 7000);

    // });


    // this.custSubs =custObser.subscribe(
    //   (val)=>{console.log(val);},
    //   (error)=>{console.error(error.errorMessage)},
    //   ()=>{console.warn("Process Complete")}
    // );
     
  }

  ngOnDestroy(): void {
    // this.numSubscription.unsubscribe();
    // this.custSubs.unsubscribe();
  }

}
