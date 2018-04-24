export class Conference {
  public conference_id: number;
  public  name: string ;
  public topics: string;
  public begin_date: Date;
  public end_date: Date;
  public location: string;
  public sections: any;
  public lectures: any;
  public speakers: any;
  constructor(
    name = '',
    topics = '',
    begin_date = new Date(),
    end_date = new Date(),
    location = ''
  ) {
    this.name = name;
    this.sections = new Array<String>();
    this.sections.push('СЕКЦИЯ1', 'СЕКЦИЯ2');
    this.lectures = new Array<String>();
    this.lectures.push('лекция1', 'лекция2', 'лекция3');
    this.speakers = new Array<String>();
    this.speakers.push('cspeaker1', 'cspeaker2', 'cspeaker3', 'cspeaker4', 'cspeaker5');
  }
}
