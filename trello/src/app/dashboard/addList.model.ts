export class AddListModel {
    data: string;
    title: string;
} 

export class CardModel {
    title: string;
    description: string;
    createDate: string; 
    timestamp: number
}

export class ListModel {
    title: any;
    data: CardModel[];
}