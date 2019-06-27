---
id: api-classes-packages-augur-sdk-src-state-db-usersyncabledb-usersyncabledb
title: UserSyncableDB
sidebar_label: UserSyncableDB
---

[@augurproject/sdk](api-readme.md) > [[packages/augur-sdk/src/state/db/UserSyncableDB Module]](api-modules-packages-augur-sdk-src-state-db-usersyncabledb-module.md) > [UserSyncableDB](api-classes-packages-augur-sdk-src-state-db-usersyncabledb-usersyncabledb.md)

## Class

Stores event logs for user-specific events.

## Hierarchy

↳  [SyncableDB](api-classes-packages-augur-sdk-src-state-db-syncabledb-syncabledb.md)

**↳ UserSyncableDB**

### Constructors

* [constructor](api-classes-packages-augur-sdk-src-state-db-usersyncabledb-usersyncabledb.md#constructor)

### Properties

* [additionalTopics](api-classes-packages-augur-sdk-src-state-db-usersyncabledb-usersyncabledb.md#additionaltopics)
* [augur](api-classes-packages-augur-sdk-src-state-db-usersyncabledb-usersyncabledb.md#augur)
* [contractName](api-classes-packages-augur-sdk-src-state-db-usersyncabledb-usersyncabledb.md#contractname)
* [db](api-classes-packages-augur-sdk-src-state-db-usersyncabledb-usersyncabledb.md#db)
* [dbName](api-classes-packages-augur-sdk-src-state-db-usersyncabledb-usersyncabledb.md#dbname)
* [eventName](api-classes-packages-augur-sdk-src-state-db-usersyncabledb-usersyncabledb.md#eventname)
* [networkId](api-classes-packages-augur-sdk-src-state-db-usersyncabledb-usersyncabledb.md#networkid)
* [user](api-classes-packages-augur-sdk-src-state-db-usersyncabledb-usersyncabledb.md#user)

### Methods

* [addNewBlock](api-classes-packages-augur-sdk-src-state-db-usersyncabledb-usersyncabledb.md#addnewblock)
* [allDocs](api-classes-packages-augur-sdk-src-state-db-usersyncabledb-usersyncabledb.md#alldocs)
* [bulkUpsertDocuments](api-classes-packages-augur-sdk-src-state-db-usersyncabledb-usersyncabledb.md#bulkupsertdocuments)
* [createIndex](api-classes-packages-augur-sdk-src-state-db-usersyncabledb-usersyncabledb.md#createindex)
* [find](api-classes-packages-augur-sdk-src-state-db-usersyncabledb-usersyncabledb.md#find)
* [fullTextSearch](api-classes-packages-augur-sdk-src-state-db-usersyncabledb-usersyncabledb.md#fulltextsearch)
* [getDocument](api-classes-packages-augur-sdk-src-state-db-usersyncabledb-usersyncabledb.md#getdocument)
* [getFullEventName](api-classes-packages-augur-sdk-src-state-db-usersyncabledb-usersyncabledb.md#getfulleventname)
* [getIndexes](api-classes-packages-augur-sdk-src-state-db-usersyncabledb-usersyncabledb.md#getindexes)
* [getInfo](api-classes-packages-augur-sdk-src-state-db-usersyncabledb-usersyncabledb.md#getinfo)
* [getLogs](api-classes-packages-augur-sdk-src-state-db-usersyncabledb-usersyncabledb.md#getlogs)
* [notifyNewBlockEvent](api-classes-packages-augur-sdk-src-state-db-usersyncabledb-usersyncabledb.md#notifynewblockevent)
* [processLog](api-classes-packages-augur-sdk-src-state-db-usersyncabledb-usersyncabledb.md#processlog)
* [rollback](api-classes-packages-augur-sdk-src-state-db-usersyncabledb-usersyncabledb.md#rollback)
* [sync](api-classes-packages-augur-sdk-src-state-db-usersyncabledb-usersyncabledb.md#sync)
* [upsertDocument](api-classes-packages-augur-sdk-src-state-db-usersyncabledb-usersyncabledb.md#upsertdocument)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new UserSyncableDB**(augur: *[Augur](api-classes-packages-augur-sdk-src-augur-augur.md)*, dbController: *[DB](api-classes-packages-augur-sdk-src-state-db-db-db.md)*, networkId: *`number`*, eventName: *`string`*, user: *`string`*, numAdditionalTopics: *`number`*, userTopicIndicies: *`Array`<`number`>*, idFields?: *`Array`<`string`>*): [UserSyncableDB](api-classes-packages-augur-sdk-src-state-db-usersyncabledb-usersyncabledb.md)

*Overrides [SyncableDB](api-classes-packages-augur-sdk-src-state-db-syncabledb-syncabledb.md).[constructor](api-classes-packages-augur-sdk-src-state-db-syncabledb-syncabledb.md#constructor)*

*Defined in [packages/augur-sdk/src/state/db/UserSyncableDB.ts:11](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/UserSyncableDB.ts#L11)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| augur | [Augur](api-classes-packages-augur-sdk-src-augur-augur.md) | - |
| dbController | [DB](api-classes-packages-augur-sdk-src-state-db-db-db.md) | - |
| networkId | `number` | - |
| eventName | `string` | - |
| user | `string` | - |
| numAdditionalTopics | `number` | - |
| userTopicIndicies | `Array`<`number`> | - |
| `Default value` idFields | `Array`<`string`> |  [] |

**Returns:** [UserSyncableDB](api-classes-packages-augur-sdk-src-state-db-usersyncabledb-usersyncabledb.md)

___

## Properties

<a id="additionaltopics"></a>

### `<Private>` additionalTopics

**● additionalTopics**: *`Array`<`Array`<`string` \| `Array`<`string`>>>*

*Defined in [packages/augur-sdk/src/state/db/UserSyncableDB.ts:11](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/UserSyncableDB.ts#L11)*

___
<a id="augur"></a>

### `<Protected>` augur

**● augur**: *[Augur](api-classes-packages-augur-sdk-src-augur-augur.md)*

*Inherited from [SyncableDB](api-classes-packages-augur-sdk-src-state-db-syncabledb-syncabledb.md).[augur](api-classes-packages-augur-sdk-src-state-db-syncabledb-syncabledb.md#augur)*

*Defined in [packages/augur-sdk/src/state/db/SyncableDB.ts:29](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/SyncableDB.ts#L29)*

___
<a id="contractname"></a>

### `<Protected>` contractName

**● contractName**: *`string`*

*Inherited from [SyncableDB](api-classes-packages-augur-sdk-src-state-db-syncabledb-syncabledb.md).[contractName](api-classes-packages-augur-sdk-src-state-db-syncabledb-syncabledb.md#contractname)*

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

*Inherited from [SyncableDB](api-classes-packages-augur-sdk-src-state-db-syncabledb-syncabledb.md).[eventName](api-classes-packages-augur-sdk-src-state-db-syncabledb-syncabledb.md#eventname)*

*Defined in [packages/augur-sdk/src/state/db/SyncableDB.ts:30](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/SyncableDB.ts#L30)*

___
<a id="networkid"></a>

### `<Protected>` networkId

**● networkId**: *`number`*

*Inherited from [AbstractDB](api-classes-packages-augur-sdk-src-state-db-abstractdb-abstractdb.md).[networkId](api-classes-packages-augur-sdk-src-state-db-abstractdb-abstractdb.md#networkid)*

*Defined in [packages/augur-sdk/src/state/db/AbstractDB.ts:22](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/AbstractDB.ts#L22)*

___
<a id="user"></a>

###  user

**● user**: *`string`*

*Defined in [packages/augur-sdk/src/state/db/UserSyncableDB.ts:10](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/UserSyncableDB.ts#L10)*

___

## Methods

<a id="addnewblock"></a>

###  addNewBlock

▸ **addNewBlock**(blocknumber: *`number`*, logs: *`Array`<[ParsedLog](api-interfaces-node-modules--augurproject-types-types-logs-parsedlog.md)>*): `Promise`<`number`>

*Inherited from [SyncableDB](api-classes-packages-augur-sdk-src-state-db-syncabledb-syncabledb.md).[addNewBlock](api-classes-packages-augur-sdk-src-state-db-syncabledb-syncabledb.md#addnewblock)*

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

*Inherited from [SyncableDB](api-classes-packages-augur-sdk-src-state-db-syncabledb-syncabledb.md).[createIndex](api-classes-packages-augur-sdk-src-state-db-syncabledb-syncabledb.md#createindex)*

*Defined in [packages/augur-sdk/src/state/db/SyncableDB.ts:64](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/SyncableDB.ts#L64)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| indexOptions | `CreateIndexOptions` |

**Returns:** `Promise`<`CreateIndexResponse`<`__type`>>

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

*Inherited from [SyncableDB](api-classes-packages-augur-sdk-src-state-db-syncabledb-syncabledb.md).[fullTextSearch](api-classes-packages-augur-sdk-src-state-db-syncabledb-syncabledb.md#fulltextsearch)*

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

*Overrides [SyncableDB](api-classes-packages-augur-sdk-src-state-db-syncabledb-syncabledb.md).[getFullEventName](api-classes-packages-augur-sdk-src-state-db-syncabledb-syncabledb.md#getfulleventname)*

*Defined in [packages/augur-sdk/src/state/db/UserSyncableDB.ts:34](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/UserSyncableDB.ts#L34)*

**Returns:** `string`

___
<a id="getindexes"></a>

###  getIndexes

▸ **getIndexes**(): `Promise`<`GetIndexesResponse`<`__type`>>

*Inherited from [SyncableDB](api-classes-packages-augur-sdk-src-state-db-syncabledb-syncabledb.md).[getIndexes](api-classes-packages-augur-sdk-src-state-db-syncabledb-syncabledb.md#getindexes)*

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

*Overrides [SyncableDB](api-classes-packages-augur-sdk-src-state-db-syncabledb-syncabledb.md).[getLogs](api-classes-packages-augur-sdk-src-state-db-syncabledb-syncabledb.md#getlogs)*

*Defined in [packages/augur-sdk/src/state/db/UserSyncableDB.ts:26](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/UserSyncableDB.ts#L26)*

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

*Inherited from [SyncableDB](api-classes-packages-augur-sdk-src-state-db-syncabledb-syncabledb.md).[notifyNewBlockEvent](api-classes-packages-augur-sdk-src-state-db-syncabledb-syncabledb.md#notifynewblockevent)*

*Defined in [packages/augur-sdk/src/state/db/SyncableDB.ts:208](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/SyncableDB.ts#L208)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| blockNumber | `number` |

**Returns:** `Promise`<`void`>

___
<a id="processlog"></a>

### `<Protected>` processLog

▸ **processLog**(log: *[Log](api-interfaces-node-modules--augurproject-types-types-logs-log.md)*): [BaseDocument](api-interfaces-packages-augur-sdk-src-state-db-abstractdb-basedocument.md)

*Inherited from [SyncableDB](api-classes-packages-augur-sdk-src-state-db-syncabledb-syncabledb.md).[processLog](api-classes-packages-augur-sdk-src-state-db-syncabledb-syncabledb.md#processlog)*

*Defined in [packages/augur-sdk/src/state/db/SyncableDB.ts:276](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/SyncableDB.ts#L276)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| log | [Log](api-interfaces-node-modules--augurproject-types-types-logs-log.md) |

**Returns:** [BaseDocument](api-interfaces-packages-augur-sdk-src-state-db-abstractdb-basedocument.md)

___
<a id="rollback"></a>

###  rollback

▸ **rollback**(blockNumber: *`number`*): `Promise`<`void`>

*Inherited from [SyncableDB](api-classes-packages-augur-sdk-src-state-db-syncabledb-syncabledb.md).[rollback](api-classes-packages-augur-sdk-src-state-db-syncabledb-syncabledb.md#rollback)*

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

*Inherited from [SyncableDB](api-classes-packages-augur-sdk-src-state-db-syncabledb-syncabledb.md).[sync](api-classes-packages-augur-sdk-src-state-db-syncabledb-syncabledb.md#sync)*

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

