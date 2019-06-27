---
id: api-classes-packages-augur-sdk-src-state-db-syncabledb-syncabledb
title: SyncableDB
sidebar_label: SyncableDB
---

[@augurproject/sdk](api-readme.md) > [[packages/augur-sdk/src/state/db/SyncableDB Module]](api-modules-packages-augur-sdk-src-state-db-syncabledb-module.md) > [SyncableDB](api-classes-packages-augur-sdk-src-state-db-syncabledb-syncabledb.md)

## Class

Stores event logs for non-user-specific events.

## Hierarchy

 [AbstractDB](api-classes-packages-augur-sdk-src-state-db-abstractdb-abstractdb.md)

**↳ SyncableDB**

↳  [UserSyncableDB](api-classes-packages-augur-sdk-src-state-db-usersyncabledb-usersyncabledb.md)

### Constructors

* [constructor](api-classes-packages-augur-sdk-src-state-db-syncabledb-syncabledb.md#constructor)

### Properties

* [augur](api-classes-packages-augur-sdk-src-state-db-syncabledb-syncabledb.md#augur)
* [contractName](api-classes-packages-augur-sdk-src-state-db-syncabledb-syncabledb.md#contractname)
* [db](api-classes-packages-augur-sdk-src-state-db-syncabledb-syncabledb.md#db)
* [dbName](api-classes-packages-augur-sdk-src-state-db-syncabledb-syncabledb.md#dbname)
* [eventName](api-classes-packages-augur-sdk-src-state-db-syncabledb-syncabledb.md#eventname)
* [flexSearch](api-classes-packages-augur-sdk-src-state-db-syncabledb-syncabledb.md#flexsearch)
* [idFields](api-classes-packages-augur-sdk-src-state-db-syncabledb-syncabledb.md#idfields)
* [networkId](api-classes-packages-augur-sdk-src-state-db-syncabledb-syncabledb.md#networkid)
* [syncStatus](api-classes-packages-augur-sdk-src-state-db-syncabledb-syncabledb.md#syncstatus)

### Methods

* [addNewBlock](api-classes-packages-augur-sdk-src-state-db-syncabledb-syncabledb.md#addnewblock)
* [allDocs](api-classes-packages-augur-sdk-src-state-db-syncabledb-syncabledb.md#alldocs)
* [bulkUpsertDocuments](api-classes-packages-augur-sdk-src-state-db-syncabledb-syncabledb.md#bulkupsertdocuments)
* [createIndex](api-classes-packages-augur-sdk-src-state-db-syncabledb-syncabledb.md#createindex)
* [documentRollback](api-classes-packages-augur-sdk-src-state-db-syncabledb-syncabledb.md#documentrollback)
* [find](api-classes-packages-augur-sdk-src-state-db-syncabledb-syncabledb.md#find)
* [fullTextSearch](api-classes-packages-augur-sdk-src-state-db-syncabledb-syncabledb.md#fulltextsearch)
* [getDocument](api-classes-packages-augur-sdk-src-state-db-syncabledb-syncabledb.md#getdocument)
* [getFullEventName](api-classes-packages-augur-sdk-src-state-db-syncabledb-syncabledb.md#getfulleventname)
* [getIndexes](api-classes-packages-augur-sdk-src-state-db-syncabledb-syncabledb.md#getindexes)
* [getInfo](api-classes-packages-augur-sdk-src-state-db-syncabledb-syncabledb.md#getinfo)
* [getLogs](api-classes-packages-augur-sdk-src-state-db-syncabledb-syncabledb.md#getlogs)
* [notifyNewBlockEvent](api-classes-packages-augur-sdk-src-state-db-syncabledb-syncabledb.md#notifynewblockevent)
* [parseLogArrays](api-classes-packages-augur-sdk-src-state-db-syncabledb-syncabledb.md#parselogarrays)
* [processLog](api-classes-packages-augur-sdk-src-state-db-syncabledb-syncabledb.md#processlog)
* [revisionRollback](api-classes-packages-augur-sdk-src-state-db-syncabledb-syncabledb.md#revisionrollback)
* [rollback](api-classes-packages-augur-sdk-src-state-db-syncabledb-syncabledb.md#rollback)
* [sync](api-classes-packages-augur-sdk-src-state-db-syncabledb-syncabledb.md#sync)
* [syncFullTextSearch](api-classes-packages-augur-sdk-src-state-db-syncabledb-syncabledb.md#syncfulltextsearch)
* [upsertDocument](api-classes-packages-augur-sdk-src-state-db-syncabledb-syncabledb.md#upsertdocument)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new SyncableDB**(augur: *[Augur](api-classes-packages-augur-sdk-src-augur-augur.md)*, db: *[DB](api-classes-packages-augur-sdk-src-state-db-db-db.md)*, networkId: *`number`*, eventName: *`string`*, dbName?: *`string`*, idFields?: *`Array`<`string`>*, fullTextSearchOptions?: *`object`*): [SyncableDB](api-classes-packages-augur-sdk-src-state-db-syncabledb-syncabledb.md)

*Overrides [AbstractDB](api-classes-packages-augur-sdk-src-state-db-abstractdb-abstractdb.md).[constructor](api-classes-packages-augur-sdk-src-state-db-abstractdb-abstractdb.md#constructor)*

*Defined in [packages/augur-sdk/src/state/db/SyncableDB.ts:34](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/SyncableDB.ts#L34)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| augur | [Augur](api-classes-packages-augur-sdk-src-augur-augur.md) | - |
| db | [DB](api-classes-packages-augur-sdk-src-state-db-db-db.md) | - |
| networkId | `number` | - |
| eventName | `string` | - |
| `Default value` dbName | `string` |  db.getDatabaseName(eventName) |
| `Default value` idFields | `Array`<`string`> |  [] |
| `Optional` fullTextSearchOptions | `object` | - |

**Returns:** [SyncableDB](api-classes-packages-augur-sdk-src-state-db-syncabledb-syncabledb.md)

___

## Properties

<a id="augur"></a>

### `<Protected>` augur

**● augur**: *[Augur](api-classes-packages-augur-sdk-src-augur-augur.md)*

*Defined in [packages/augur-sdk/src/state/db/SyncableDB.ts:29](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/SyncableDB.ts#L29)*

___
<a id="contractname"></a>

### `<Protected>` contractName

**● contractName**: *`string`*

*Defined in [packages/augur-sdk/src/state/db/SyncableDB.ts:31](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/SyncableDB.ts#L31)*

___
<a id="db"></a>

### `<Protected>` db

**● db**: *`Database`*

*Inherited from [AbstractDB](api-classes-packages-augur-sdk-src-state-db-abstractdb-abstractdb.md).[db](api-classes-packages-augur-sdk-src-state-db-abstractdb-abstractdb.md#db)*

*Defined in [packages/augur-sdk/src/state/db/AbstractDB.ts:21](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/AbstractDB.ts#L21)*

___
<a id="dbname"></a>

###  dbName

**● dbName**: *`string`*

*Inherited from [AbstractDB](api-classes-packages-augur-sdk-src-state-db-abstractdb-abstractdb.md).[dbName](api-classes-packages-augur-sdk-src-state-db-abstractdb-abstractdb.md#dbname)*

*Defined in [packages/augur-sdk/src/state/db/AbstractDB.ts:23](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/AbstractDB.ts#L23)*

___
<a id="eventname"></a>

### `<Protected>` eventName

**● eventName**: *`string`*

*Defined in [packages/augur-sdk/src/state/db/SyncableDB.ts:30](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/SyncableDB.ts#L30)*

___
<a id="flexsearch"></a>

### `<Private>``<Optional>` flexSearch

**● flexSearch**: *`FlexSearch`*

*Defined in [packages/augur-sdk/src/state/db/SyncableDB.ts:34](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/SyncableDB.ts#L34)*

___
<a id="idfields"></a>

### `<Private>` idFields

**● idFields**: *`Array`<`string`>*

*Defined in [packages/augur-sdk/src/state/db/SyncableDB.ts:33](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/SyncableDB.ts#L33)*

___
<a id="networkid"></a>

### `<Protected>` networkId

**● networkId**: *`number`*

*Inherited from [AbstractDB](api-classes-packages-augur-sdk-src-state-db-abstractdb-abstractdb.md).[networkId](api-classes-packages-augur-sdk-src-state-db-abstractdb-abstractdb.md#networkid)*

*Defined in [packages/augur-sdk/src/state/db/AbstractDB.ts:22](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/AbstractDB.ts#L22)*

___
<a id="syncstatus"></a>

### `<Private>` syncStatus

**● syncStatus**: *[SyncStatus](api-classes-packages-augur-sdk-src-state-db-syncstatus-syncstatus.md)*

*Defined in [packages/augur-sdk/src/state/db/SyncableDB.ts:32](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/SyncableDB.ts#L32)*

___

## Methods

<a id="addnewblock"></a>

###  addNewBlock

▸ **addNewBlock**(blocknumber: *`number`*, logs: *`Array`<[ParsedLog](api-interfaces-node-modules--augurproject-types-types-logs-parsedlog.md)>*): `Promise`<`number`>

*Defined in [packages/augur-sdk/src/state/db/SyncableDB.ts:164](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/SyncableDB.ts#L164)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| blocknumber | `number` |
| logs | `Array`<[ParsedLog](api-interfaces-node-modules--augurproject-types-types-logs-parsedlog.md)> |

**Returns:** `Promise`<`number`>

___
<a id="alldocs"></a>

###  allDocs

▸ **allDocs**(): `Promise`<`AllDocsResponse`<`__type`>>

*Inherited from [AbstractDB](api-classes-packages-augur-sdk-src-state-db-abstractdb-abstractdb.md).[allDocs](api-classes-packages-augur-sdk-src-state-db-abstractdb-abstractdb.md#alldocs)*

*Defined in [packages/augur-sdk/src/state/db/AbstractDB.ts:31](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/AbstractDB.ts#L31)*

**Returns:** `Promise`<`AllDocsResponse`<`__type`>>

___
<a id="bulkupsertdocuments"></a>

### `<Protected>` bulkUpsertDocuments

▸ **bulkUpsertDocuments**(startkey: *`string`*, documents: *`Array`<`PouchDB.Core.PutDocument`<`__type`>>*): `Promise`<`boolean`>

*Inherited from [AbstractDB](api-classes-packages-augur-sdk-src-state-db-abstractdb-abstractdb.md).[bulkUpsertDocuments](api-classes-packages-augur-sdk-src-state-db-abstractdb-abstractdb.md#bulkupsertdocuments)*

*Defined in [packages/augur-sdk/src/state/db/AbstractDB.ts:55](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/AbstractDB.ts#L55)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| startkey | `string` |
| documents | `Array`<`PouchDB.Core.PutDocument`<`__type`>> |

**Returns:** `Promise`<`boolean`>

___
<a id="createindex"></a>

###  createIndex

▸ **createIndex**(indexOptions: *`CreateIndexOptions`*): `Promise`<`CreateIndexResponse`<`__type`>>

*Defined in [packages/augur-sdk/src/state/db/SyncableDB.ts:64](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/SyncableDB.ts#L64)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| indexOptions | `CreateIndexOptions` |

**Returns:** `Promise`<`CreateIndexResponse`<`__type`>>

___
<a id="documentrollback"></a>

### `<Private>` documentRollback

▸ **documentRollback**(blockNumber: *`number`*): `Promise`<`void`>

*Defined in [packages/augur-sdk/src/state/db/SyncableDB.ts:231](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/SyncableDB.ts#L231)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| blockNumber | `number` |

**Returns:** `Promise`<`void`>

___
<a id="find"></a>

###  find

▸ **find**(request: *`FindRequest`<`__type`>*): `Promise`<`FindResponse`<`__type`>>

*Inherited from [AbstractDB](api-classes-packages-augur-sdk-src-state-db-abstractdb-abstractdb.md).[find](api-classes-packages-augur-sdk-src-state-db-abstractdb-abstractdb.md#find)*

*Defined in [packages/augur-sdk/src/state/db/AbstractDB.ts:84](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/AbstractDB.ts#L84)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| request | `FindRequest`<`__type`> |

**Returns:** `Promise`<`FindResponse`<`__type`>>

___
<a id="fulltextsearch"></a>

###  fullTextSearch

▸ **fullTextSearch**(query: *`string`*): `Array`<`object`>

*Defined in [packages/augur-sdk/src/state/db/SyncableDB.ts:294](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/SyncableDB.ts#L294)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| query | `string` |

**Returns:** `Array`<`object`>

___
<a id="getdocument"></a>

### `<Protected>` getDocument

▸ **getDocument**<`Document`>(id: *`string`*): `Promise`<`Document` \| `undefined`>

*Inherited from [AbstractDB](api-classes-packages-augur-sdk-src-state-db-abstractdb-abstractdb.md).[getDocument](api-classes-packages-augur-sdk-src-state-db-abstractdb-abstractdb.md#getdocument)*

*Defined in [packages/augur-sdk/src/state/db/AbstractDB.ts:35](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/AbstractDB.ts#L35)*

**Type parameters:**

#### Document 
**Parameters:**

| Name | Type |
| ------ | ------ |
| id | `string` |

**Returns:** `Promise`<`Document` \| `undefined`>

___
<a id="getfulleventname"></a>

###  getFullEventName

▸ **getFullEventName**(): `string`

*Defined in [packages/augur-sdk/src/state/db/SyncableDB.ts:301](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/SyncableDB.ts#L301)*

**Returns:** `string`

___
<a id="getindexes"></a>

###  getIndexes

▸ **getIndexes**(): `Promise`<`GetIndexesResponse`<`__type`>>

*Defined in [packages/augur-sdk/src/state/db/SyncableDB.ts:68](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/SyncableDB.ts#L68)*

**Returns:** `Promise`<`GetIndexesResponse`<`__type`>>

___
<a id="getinfo"></a>

###  getInfo

▸ **getInfo**(): `Promise`<`DatabaseInfo`>

*Inherited from [AbstractDB](api-classes-packages-augur-sdk-src-state-db-abstractdb-abstractdb.md).[getInfo](api-classes-packages-augur-sdk-src-state-db-abstractdb-abstractdb.md#getinfo)*

*Defined in [packages/augur-sdk/src/state/db/AbstractDB.ts:80](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/AbstractDB.ts#L80)*

**Returns:** `Promise`<`DatabaseInfo`>

___
<a id="getlogs"></a>

### `<Protected>` getLogs

▸ **getLogs**(augur: *[Augur](api-classes-packages-augur-sdk-src-augur-augur.md)*, startBlock: *`number`*, endBlock: *`number`*): `Promise`<`Array`<[ParsedLog](api-interfaces-node-modules--augurproject-types-types-logs-parsedlog.md)>>

*Defined in [packages/augur-sdk/src/state/db/SyncableDB.ts:272](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/SyncableDB.ts#L272)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| augur | [Augur](api-classes-packages-augur-sdk-src-augur-augur.md) |
| startBlock | `number` |
| endBlock | `number` |

**Returns:** `Promise`<`Array`<[ParsedLog](api-interfaces-node-modules--augurproject-types-types-logs-parsedlog.md)>>

___
<a id="notifynewblockevent"></a>

###  notifyNewBlockEvent

▸ **notifyNewBlockEvent**(blockNumber: *`number`*): `Promise`<`void`>

*Defined in [packages/augur-sdk/src/state/db/SyncableDB.ts:208](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/SyncableDB.ts#L208)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| blockNumber | `number` |

**Returns:** `Promise`<`void`>

___
<a id="parselogarrays"></a>

### `<Private>` parseLogArrays

▸ **parseLogArrays**(logs: *`Array`<[ParsedLog](api-interfaces-node-modules--augurproject-types-types-logs-parsedlog.md)>*): `void`

*Defined in [packages/augur-sdk/src/state/db/SyncableDB.ts:142](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/SyncableDB.ts#L142)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| logs | `Array`<[ParsedLog](api-interfaces-node-modules--augurproject-types-types-logs-parsedlog.md)> |

**Returns:** `void`

___
<a id="processlog"></a>

### `<Protected>` processLog

▸ **processLog**(log: *[Log](api-interfaces-node-modules--augurproject-types-types-logs-log.md)*): [BaseDocument](api-interfaces-packages-augur-sdk-src-state-db-abstractdb-basedocument.md)

*Defined in [packages/augur-sdk/src/state/db/SyncableDB.ts:276](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/SyncableDB.ts#L276)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| log | [Log](api-interfaces-node-modules--augurproject-types-types-logs-log.md) |

**Returns:** [BaseDocument](api-interfaces-packages-augur-sdk-src-state-db-abstractdb-basedocument.md)

___
<a id="revisionrollback"></a>

### `<Private>` revisionRollback

▸ **revisionRollback**(blockNumber: *`number`*): `Promise`<`void`>

*Defined in [packages/augur-sdk/src/state/db/SyncableDB.ts:247](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/SyncableDB.ts#L247)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| blockNumber | `number` |

**Returns:** `Promise`<`void`>

___
<a id="rollback"></a>

###  rollback

▸ **rollback**(blockNumber: *`number`*): `Promise`<`void`>

*Defined in [packages/augur-sdk/src/state/db/SyncableDB.ts:223](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/SyncableDB.ts#L223)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| blockNumber | `number` |

**Returns:** `Promise`<`void`>

___
<a id="sync"></a>

###  sync

▸ **sync**(augur: *[Augur](api-classes-packages-augur-sdk-src-augur-augur.md)*, chunkSize: *`number`*, blockStreamDelay: *`number`*, highestAvailableBlockNumber: *`number`*): `Promise`<`void`>

*Defined in [packages/augur-sdk/src/state/db/SyncableDB.ts:72](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/SyncableDB.ts#L72)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| augur | [Augur](api-classes-packages-augur-sdk-src-augur-augur.md) |
| chunkSize | `number` |
| blockStreamDelay | `number` |
| highestAvailableBlockNumber | `number` |

**Returns:** `Promise`<`void`>

___
<a id="syncfulltextsearch"></a>

### `<Private>` syncFullTextSearch

▸ **syncFullTextSearch**(): `Promise`<`void`>

*Defined in [packages/augur-sdk/src/state/db/SyncableDB.ts:86](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/SyncableDB.ts#L86)*

**Returns:** `Promise`<`void`>

___
<a id="upsertdocument"></a>

### `<Protected>` upsertDocument

▸ **upsertDocument**(id: *`string`*, document: *`object`*): `Promise`<`Response`>

*Inherited from [AbstractDB](api-classes-packages-augur-sdk-src-state-db-abstractdb-abstractdb.md).[upsertDocument](api-classes-packages-augur-sdk-src-state-db-abstractdb-abstractdb.md#upsertdocument)*

*Defined in [packages/augur-sdk/src/state/db/AbstractDB.ts:46](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/AbstractDB.ts#L46)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| id | `string` |
| document | `object` |

**Returns:** `Promise`<`Response`>

___

