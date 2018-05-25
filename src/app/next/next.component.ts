import { Component, OnInit, Output,EventEmitter  } from '@angular/core';


@Component({
  selector: 'app-next',
  templateUrl: './next.component.html',
  styleUrls: ['./next.component.css']
})
export class NextComponent implements OnInit {
  public se:string="";
  constructor() { }

  ngOnInit() {
  }
  @Output('search') search  =new EventEmitter<string>();
 show(){
  this.search.emit(this.se);
 }
}
