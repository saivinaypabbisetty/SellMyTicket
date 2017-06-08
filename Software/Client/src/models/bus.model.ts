export class Bus{
    from:string;
    to:string;
    date:string;
    DepTime:string;
    ReachBy:string;
    tickets:number;
    cost:number;
    PostedBy:string;
    phone:string;
constructor(from:string,to:string,date:string,Dephours:number,Depminutes:number,ReachByhours:number,ReachByminutes:number,tickets:number,cost:number,PostedBy:string,phone:string)
{
this.from=from;
this.to=to;
this.date=date;
this.DepTime=Dephours+":"+Depminutes;
this.ReachBy=ReachByhours+":"+ReachByminutes;
this.tickets=tickets;
this.cost=cost;
this.PostedBy=PostedBy;
this.phone=phone;
}
}
interface time
{
        hours:number,
        minutes:number
} 
interface contact
{
        contact:string,
        email:string
}