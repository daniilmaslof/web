export class Upload {
  $key: string;
  file: File;
  name: string;
  progress: number;
  constructor(file: File) {
    this.file = file;
  }
}
