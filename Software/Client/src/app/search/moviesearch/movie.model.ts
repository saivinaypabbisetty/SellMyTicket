export class Movie{
    name:string
    ShowTime:time;
    tickets:number;
    cost:number;
    PostedBy:string;
    contact:contact;
constructor(name:string,ShowTime:time,tickets:number,cost:number,PostedBy:string,contact:contact)
{
this.name=name;
this.ShowTime=ShowTime;
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
        phone:string,
        email:string
}