import { Component, EventEmitter,Input,OnInit, Output } from '@angular/core';
import { model } from '../model';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {


  active: boolean = false

  @Output() InputFeild = new EventEmitter<object>()

  nodes : model = {};

  constructor() { }

  ngOnInit(): void {
  }

  onInputsave(){
    this.nodes.id
    this.nodes.name    
    this.nodes.active = false
    this.nodes.children = [];
    this.InputFeild.emit({action:'save',data:this.nodes}) 
  }

  onInputdelete(){
    this.InputFeild.emit({action:'delete',data:this.nodes})
  }

}