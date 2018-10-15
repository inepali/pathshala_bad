import { Injectable } from '@angular/core';
import * as AWS from "aws-sdk";

@Injectable()
export class DatabaseServiceBase {

  db: any;
 
  constructor() {
    AWS.config.accessKeyId = 'AKIAJFCBMUQKVISUACIQ';
    AWS.config.secretAccessKey = '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';
    AWS.config.update({ region: 'ca-central-1' });
  
    this.db = new AWS.DynamoDB({ apiVersion: '2012-10-08' });

  }

}