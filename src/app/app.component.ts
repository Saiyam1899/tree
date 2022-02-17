import { Component, OnInit,Input } from "@angular/core";
import { model } from "./model";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
	@Input() node : model = {}
	
	active: boolean = false

	nodes: model[] = []

	onInputEvent(event: any) {
		if (event.action == 'save') {
			this.save(event.data)
		} else if (event.action = 'delete') {
			this.active = !this.active
		}
	}

	save(data:model){
		console.log("datnjj",data);
		this.nodes.push(data)
    console.log(this.nodes);
    
		this.active = !this.active
	}

	delete() {
	}

	ontoggle() {
		this.active = !this.active
	}

	ngOnInit(): void {
    console.log("nodes",this.nodes);
    
	}
}