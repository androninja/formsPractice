export class Product{

    id: string="";
    name:string="";
    manuDate:Date=new Date;
    expDate:Date =new Date;
    price:number=0;

    constructor(values: object={}) {
        Object.assign(this,values);
        
    }


}