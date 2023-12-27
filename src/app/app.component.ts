import {Component, OnInit} from '@angular/core';
import {FileService} from "./file.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'gzip-json-data';

  constructor(private fileService: FileService) {
  }

  async ngOnInit(): Promise<void> {
    // const res = this.fileService.decompress('H4sIAAAAAAAAA6vm...');
    const res = await this.fileService.decompressFromFile();//
    console.log('JSON Unzipped: ', res);
  }
}
