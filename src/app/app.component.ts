import { Component, OnInit } from '@angular/core';
import { FileService } from './services/file.service';
import { Academic } from './model/acad.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'gzip-json-data';
  academicData: Academic[] | undefined;

  constructor(private fileService: FileService) {}

  async ngOnInit(): Promise<void> {
    await this.fetchData();
  }

  async fetchData() {
    this.academicData = await this.fileService.decompressData();
  }
}
