# GzipJsonData

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.10.

## Install Prerequisite

```shell
npm install
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. 

## File Service
Performs decompress and JSON parse

## How to use

```ts
export class TestComponent{
  
  constructor(private fileService: FileService) {
  }

  async testMethod() {
    const json = await this.fileService.decompressData();
  }
}
```

## Reference
[GZip Online Tool](https://www.zickty.com/texttogzip)
