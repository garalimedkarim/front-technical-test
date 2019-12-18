import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ItemService } from './services/item.service';
import { Item } from './models/item';
import { EventTargetLike } from 'rxjs/internal/observable/fromEvent';
// import {FormGroup, FormBuilder } from '@angular/forms';

@Component({
	selector: 'oo-app',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	menuItems: MenuItem[];
	items: Item[];
	selectedFile: File;

	parentId: string = "";
	navigationPipe: string[] = [];
	// uploadForm: FormGroup;  

	constructor(
		private itemService: ItemService,
		// private formBuilder: FormBuilder
	) {

	}

	ngOnInit() {
		// this.updateItems();

		// this.uploadForm = this.formBuilder.group({
		// 	profile: ['']
		// });

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
		this.itemService.uploadFile(this.selectedFile)
			.subscribe(res => {
				console.log('Uploaded 1212 12121 2121 21', res);
			});
	}

	onDeleteItem(fileId: string) {
		this.itemService.deleteItem(fileId)
			.subscribe(
				() => console.log("Item deleted"),
				(error: any) => console.log("Item Delete ERROR! " + error)
			)
	}

	onNewDirectory(folderName: string) {
		console.log("new folder name", folderName);
		this.itemService.newDirectory(this.parentId, folderName)
			.subscribe(
				() => console.log("Directory created"),
				(error: any) => console.log("Directory creation ERROR! " + error)
			)
	}

	// updateItems() {
	// 	this.menuItems = [
	// 		{ label: 'Open', icon: 'pi pi-fw pi-external-link' },
	// 		{
	// 			label: 'File',
	// 			icon: 'pi pi-pw pi-file',
	// 			items: [{
	// 				label: 'New',
	// 				icon: 'pi pi-fw pi-plus',
	// 				items: [
	// 					{ label: 'User', icon: 'pi pi-fw pi-user-plus' },
	// 					{ label: 'Filter', icon: 'pi pi-fw pi-filter' }
	// 				]
	// 			},
	// 			{ label: 'Open', icon: 'pi pi-fw pi-external-link' },
	// 			{ separator: true },
	// 			{ label: 'Quit', icon: 'pi pi-fw pi-times' }
	// 			]
	// 		},
	// 		{
	// 			label: 'Edit',
	// 			icon: 'pi pi-fw pi-pencil',
	// 			items: [
	// 				{ label: 'Delete', icon: 'pi pi-fw pi-trash' },
	// 				{ label: 'Refresh', icon: 'pi pi-fw pi-refresh' }
	// 			]
	// 		},
	// 		{
	// 			label: 'Help',
	// 			icon: 'pi pi-fw pi-question',
	// 			items: [
	// 				{
	// 					label: 'Contents',
	// 					icon: 'pi pi-pi pi-bars'
	// 				},
	// 				{
	// 					label: 'Search',
	// 					icon: 'pi pi-pi pi-search',
	// 					items: [
	// 						{
	// 							label: 'Text',
	// 							items: [
	// 								{
	// 									label: 'Workspace'
	// 								}
	// 							]
	// 						},
	// 						{
	// 							label: 'User',
	// 							icon: 'pi pi-fw pi-file',
	// 						}
	// 					]
	// 				}
	// 			]
	// 		},
	// 		{
	// 			label: 'Actions',
	// 			icon: 'pi pi-fw pi-cog',
	// 			items: [
	// 				{
	// 					label: 'Edit',
	// 					icon: 'pi pi-fw pi-pencil',
	// 					items: [
	// 						{ label: 'Save', icon: 'pi pi-fw pi-save' },
	// 						{ label: 'Update', icon: 'pi pi-fw pi-save' },
	// 					]
	// 				},
	// 				{
	// 					label: 'Other',
	// 					icon: 'pi pi-fw pi-tags',
	// 					items: [
	// 						{ label: 'Delete', icon: 'pi pi-fw pi-minus' }
	// 					]
	// 				}
	// 			]
	// 		}
	// 	];
	// }

}

