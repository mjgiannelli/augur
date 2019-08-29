import PouchDB from "pouchdb";
import * as t from 'io-ts';

export const NULL_ADDRESS = '0x0000000000000000000000000000000000000000';

export const sortOptions = t.partial({
  sortBy: t.string,
  isSortDescending: t.boolean,
  limit: t.number,
  offset: t.number,
});

export interface JsonRpcRequest {
  id: string | number | null;
  jsonrpc: string;
  method: string;
  params: any;
}

export interface JsonRpcResponse {
  id: string | number | null;
  jsonrpc: string;
  result?: any;
  error?: any;
}

export interface EndpointSettings {
  httpPort: number;
  httpsPort: number;
  startHTTPS: boolean;
  wsPort: number;
  wssPort: number;
  startWSS: boolean;
  certificateFile?: string;
  certificateKeyFile?: string;
}

export type AllDocsOptions = PouchDB.Core.AllDocsWithKeyOptions | PouchDB.Core.AllDocsWithKeysOptions | PouchDB.Core.AllDocsWithinRangeOptions | PouchDB.Core.AllDocsOptions;
