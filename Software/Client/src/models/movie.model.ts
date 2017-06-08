export class Movie{
    name:string;
    PostedBy:string;
    date:string;
    venue:string;
    ShowTime:string;
    tickets:number;
    cost:number;
    phone:string;
constructor(name:string,PostedBy:string,date:string,venue:string,hours:number,minutes:number,tickets:number,cost:number,phonenumber:string)
{
/*(hours).toString;
(minutes).toString;*/
this.name=name;
this.PostedBy=PostedBy;
this.date=date;
this.venue=venue;
this.ShowTime=hours+":"+minutes;
this.tickets=tickets;
this.cost=cost;
this.phone=phonenumber;
}
}
interface time /*I tried to use these interfaces for ShowTime and contact
                  but these are making things compplex in getting data from posttickets form*/
{
        hours:number,
        minutes:number
} 
interface contact
{
        phone?:string,
        email?:string
}