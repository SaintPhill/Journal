

export interface ItemType {
    title: string;
    text: string;
    name: string;
    id: number
}


export type ActicleState = ItemType[];

export type StoreState = {
    articles: ActicleState,
};