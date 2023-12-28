import {Injectable} from '@angular/core';

window.Buffer = window.Buffer || require("buffer").Buffer;
const zlib = require('../utilities/node-zlib.js');
import {lastValueFrom} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Academic} from "../model/acad.model";

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient) {
  }

  async decompressData(): Promise<Academic[]> {
    const uri = '/assets/json.gz'; // OR 'https://reg01.vn.co.th/...'
    try {
      const content: any = await lastValueFrom(this.http.get(uri, {responseType: 'text'}));
      const res = zlib.gunzipSync(Buffer.from(content, 'base64'));
      return JSON.parse(res.toString()) as Academic[];
    } catch (error) {
      console.error('Could not get data: ', error);
      throw(error);
    }
  }
}
