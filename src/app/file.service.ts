import {Injectable} from '@angular/core';

window.Buffer = window.Buffer || require("buffer").Buffer;
const zlib = require('./node-zlib.js');
import {lastValueFrom} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient) {
  }

  async decompressFromFile(): Promise<any> {
    // const uri = 'https://reg01.vn.co.th/regapiweb/api/th/Classinfo/Classinfogzip'; //works
    const uri = '/assets/json.gz'; // works
    try {
      const content: any = await lastValueFrom(this.http.get(uri, {responseType: 'text'}));
      const res = zlib.gunzipSync(Buffer.from(content, 'base64'));
      return JSON.parse(res.toString());
    } catch (error) {
      console.error('Could not get data: ', error);
    }
  }
}
