export class Item {
    private id: string;
    private name: string;
    private folder: boolean;
    private creation: Date;
    private modification: Date;
    private icon: string;
    public links:any;
    // private items: Item[];
    
    constructor(
        id: string,
        name: string,
        folder: boolean,
        creation: string,
        modification: string,
        links:any
        // items: Item[]
    ) {
        this.id = id;
        this.name = name;
        this.folder = folder;
        this.creation = new Date(creation);
        this.modification = new Date(modification);
        this.icon = (folder? "fa-folder": "fa-file-o");
        this.links = links;
        // this.items = items;
    }

    public getId(): string {
        return this.id;
    }

    public setId(id: string): void {
        this.id = id;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public isFolder(): boolean {
        return this.folder;
    }

    public setFolder(folder: boolean): void {
        this.folder = folder;
    }

    public getCreation(): Date {
        return this.creation;
    }

    public setCreation(creation: Date): void {
        this.creation = creation;
    }

    public getModification(): Date {
        return this.modification;
    }

    public setModification(modification: Date): void {
        this.modification = modification;
    }

    public getIcon(): string {
        return this.icon;
    }

    public setIcon(icon: string): void {
        this.icon = icon;
    }    

}

