import {Component, OnInit} from '@angular/core';
import {FileService} from "./services/file.service";

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
    const json = await this.fileService.decompressData();//
    console.log('JSON Unzipped: ', json);
  }
}
