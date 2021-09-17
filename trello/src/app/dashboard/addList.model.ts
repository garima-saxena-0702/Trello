export class AddListModel {
    data: string;
    title: string;
} 

export class CardModel {
    title: string;
    description: string;
    createDate: Date; 
}

export class ListModel {
    title: any;
    data: CardModel[];
}