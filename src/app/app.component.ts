import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ItemService } from './services/item.service';
import { Item } from './models/item';

@Component({
	selector: 'oo-app',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	menuItems: MenuItem[];
	items: Item[];
	constructor(
		private itemService: ItemService
	){

	}

	ngOnInit() {
		// this.updateItems();

		this.itemService.getItems()
		.subscribe((items: Item[])=>{
			console.log("items OK",items);
			this.items = items;
		});

	}

	// download(url:string){
	// 	console.log("download===", url);
	// 	this.itemService.downloadItem(url)
	// 	.subscribe(res => console.log, error => console.log);
	// }

	updateItems() {
		this.menuItems = [
			{ label: 'Open', icon: 'pi pi-fw pi-external-link' },
			{
				label: 'File',
				icon: 'pi pi-pw pi-file',
				items: [{
					label: 'New',
					icon: 'pi pi-fw pi-plus',
					items: [
						{ label: 'User', icon: 'pi pi-fw pi-user-plus' },
						{ label: 'Filter', icon: 'pi pi-fw pi-filter' }
					]
				},
				{ label: 'Open', icon: 'pi pi-fw pi-external-link' },
				{ separator: true },
				{ label: 'Quit', icon: 'pi pi-fw pi-times' }
				]
			},
			{
				label: 'Edit',
				icon: 'pi pi-fw pi-pencil',
				items: [
					{ label: 'Delete', icon: 'pi pi-fw pi-trash' },
					{ label: 'Refresh', icon: 'pi pi-fw pi-refresh' }
				]
			},
			{
				label: 'Help',
				icon: 'pi pi-fw pi-question',
				items: [
					{
						label: 'Contents',
						icon: 'pi pi-pi pi-bars'
					},
					{
						label: 'Search',
						icon: 'pi pi-pi pi-search',
						items: [
							{
								label: 'Text',
								items: [
									{
										label: 'Workspace'
									}
								]
							},
							{
								label: 'User',
								icon: 'pi pi-fw pi-file',
							}
						]
					}
				]
			},
			{
				label: 'Actions',
				icon: 'pi pi-fw pi-cog',
				items: [
					{
						label: 'Edit',
						icon: 'pi pi-fw pi-pencil',
						items: [
							{ label: 'Save', icon: 'pi pi-fw pi-save' },
							{ label: 'Update', icon: 'pi pi-fw pi-save' },
						]
					},
					{
						label: 'Other',
						icon: 'pi pi-fw pi-tags',
						items: [
							{ label: 'Delete', icon: 'pi pi-fw pi-minus' }
						]
					}
				]
			}
		];
	}


}

