export class User{
    id:number=0;
    email:string="";
    pwd:string="";
    confirmPwd:string="";
    gender:string="";
    terms:boolean=false;

    /**
     *
     */
    constructor(values: object={}) {
        Object.assign(this, values);
    }

}