export class Bus{
    from:string;
    to:string;
    DepTime:time;
    ReachBy?:time;
    tickets:number;
    cost:number;
    PostedBy:string;
    contact:contact;
constructor(from:string,to:string,DepTime:time,ReachBy:time,tickets:number,cost:number,PostedBy:string,contact:contact)
{
this.from=from;
this.to=to;
this.DepTime=DepTime;
this.tickets=tickets;
this.cost=cost;
this.PostedBy=PostedBy;
this.contact=contact;
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