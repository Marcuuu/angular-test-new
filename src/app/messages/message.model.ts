export class Message {
  public name: string;
  public date: string;
  public message: string;

  constructor(name: string, date: string, message: string) {
    this.name = name;
    this.date = date;
    this.message = message;
  }
}
