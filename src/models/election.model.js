export class Election{
  constructor({id, name, start_date, end_date, status}) {
    this.id = id;
    this.name = name;
    this.start_date = start_date;
    this.end_date = end_date;
    this.status = status;
  }
}