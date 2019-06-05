import { Component, OnInit, Input } from '@angular/core';
import { LoggingService } from '../../services/logging.service';

@Component({
  selector: 'app-temp-thumbnail',
  templateUrl: './temp-thumbnail.component.html',
  styleUrls: ['./temp-thumbnail.component.css'],
  // providers:[LoggingService]
})
export class TempThumbnailComponent implements OnInit {
  ReceivedData:string;
  @Input("productDetails") product:any;
  constructor(private loggingService:LoggingService) { }

  ngOnInit() {
    this.loggingService.notifyParents.subscribe((data)=>{
      this.ReceivedData = data;
    });
  }

}
