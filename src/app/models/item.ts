export class Item {
    private label: string;
    private icon: string;
    private items: Item[];

    constructor(
        label: string,
        icon: string,
        items: Item[]
    ) {
        this.label = label;
        this.icon = icon;
        this.items = items;
    }
}
