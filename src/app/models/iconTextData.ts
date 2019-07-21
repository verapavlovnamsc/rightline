export class IconData {
    textHeader: string;
    textParagraph: string;
    iconurl: string; 
    id: number;
}

export class SliderIconData {
    textHeader: string;
    textParagraph: string;
    iconurl: string; 
    id: number;

    constructor(header: string, p:string, url:string, id: number){
        this.textHeader = header;
        this.textParagraph = p;
        this.iconurl = url;
        this.id = id;
    }
}