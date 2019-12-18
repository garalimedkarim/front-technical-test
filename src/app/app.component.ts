import { Component, OnInit } from '@angular/core';
import { ItemService } from './services/item.service';
import { Item } from './models/item';

@Component({
	selector: 'oo-app',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	items: Item[];
	selectedFile: File;

	parentId: string = "";
	navigationPipe: string[] = [];

	constructor(
		private itemService: ItemService,
	) {

	}

	ngOnInit() {
		this.loadItems();
	}

	loadItems() {
		this.itemService.getItems(this.parentId)
			.subscribe((items: Item[]) => {
				console.log("items OK", items);
				this.items = items;
			});
	}

	onNavigate(itemId: string) {
		console.log("Navigate to Item", itemId);
		this.navigationPipe.push(this.parentId);
		this.parentId = itemId;
		this.loadItems();
	}

	onGoBack() {
		console.log("Nav Back");
		if (this.navigationPipe.length) {
			let previousParentId = this.navigationPipe.pop();
			this.parentId = (previousParentId ? previousParentId : "");
			this.loadItems();
		}
	}

	onFileSelect(event: any) {
		if (event && event.target && event.target.files) {
			console.log("upload FILE***", event.target.files[0]);
			this.selectedFile = event.target.files[0];
		}
	}

	onUploadFile() {
		this.itemService.uploadFile(this.parentId, this.selectedFile)
			.subscribe(res => {
				console.log('Uploaded 1212 12121 2121 21', res);
				this.loadItems();
			},
			(error: any) => console.log("Upload File Error! " + error));
	}

	onDeleteItem(fileId: string) {
		this.itemService.deleteItem(fileId)
			.subscribe(
				() => {
					console.log("Item deleted");
					this.loadItems();
				},
				(error: any) => console.log("Item Delete ERROR! " + error)
			)
	}

	onNewDirectory(folderName: string) {
		console.log("new folder name", folderName);
		this.itemService.newDirectory(this.parentId, folderName)
			.subscribe(
				() => { 
					console.log("Directory created");
					this.loadItems();
				},
				(error: any) => console.log("Directory creation ERROR! " + error)
			);
	}

}

