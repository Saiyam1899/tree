import { Component,Input,Output,EventEmitter} from '@angular/core';
import { model } from '../model';

@Component({
  selector: 'app-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.css']
})
export class TreeNodeComponent {

  active: boolean = false

  nodes : model = {}

  // @Output() InputFeild = new EventEmitter<object>()

  // @Input() node : model = {}
  // @Input() item : model = {}
  
  // addFolder(){
  //   this.nodes.permit == true
  // }

	onInputEvent(event: any) {
    console.log("ekbj");
		if (event.value == 'save') {
			this.save(event.data)
		} else if (event.value = 'delete') {
			this.active = !this.active
		}
	}

  save(data:model){
		console.log("datnjj",data);
		this.nodes.children?.push(data)
		// this.active = !this.active
	}

	delete() {
	}
  
  constructor() {
    console.log("tree",this.nodes)
   }
}