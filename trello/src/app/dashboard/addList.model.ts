export class AddListModel {
    data: string;
    title: string;
} 

export class CardModel {
    title: string;
    describtion: string;
    createDate: Date; 
}

export class ListModel {
    title: string;
    data: CardModel[];
}