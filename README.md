# GzipJsonData

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.12.

## Install Prerequisite

```shell
npm install
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. 

## File Service
Performs decompress and JSON parse. Please note you can use compressed data either of two ways (see `file.service.ts`)

1. Local json gz file lives on angular project (in asset directory) change `const uri = '/assets/json.gz';`
2. json gz file is hosted on a server e.g. change `const uri = 'https://reg01.vn.com/...';`

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
