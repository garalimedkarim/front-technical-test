export class Item {
    private id: string;
    private name: string;
    private folder: boolean;
    private creation: string;
    private modification: string;
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
        this.creation = creation;
        this.modification = modification;
        this.icon = "";
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

    public getCreation(): string {
        return this.creation;
    }

    public setCreation(creation: string): void {
        this.creation = creation;
    }

    public getModification(): string {
        return this.modification;
    }

    public setModification(modification: string): void {
        this.modification = modification;
    }

    public getIcon(): string {
        return this.icon;
    }

    public setIcon(icon: string): void {
        this.icon = icon;
    }    

}

