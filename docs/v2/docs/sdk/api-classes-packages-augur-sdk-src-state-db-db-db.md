---
id: api-classes-packages-augur-sdk-src-state-db-db-db
title: DB
sidebar_label: DB
---

[@augurproject/sdk](api-readme.md) > [[packages/augur-sdk/src/state/db/DB Module]](api-modules-packages-augur-sdk-src-state-db-db-module.md) > [DB](api-classes-packages-augur-sdk-src-state-db-db-db.md)

## Class

## Hierarchy

**DB**

### Constructors

* [constructor](api-classes-packages-augur-sdk-src-state-db-db-db.md#constructor)

### Properties

* [augur](api-classes-packages-augur-sdk-src-state-db-db-db.md#augur)
* [blockAndLogStreamerListener](api-classes-packages-augur-sdk-src-state-db-db-db.md#blockandlogstreamerlistener)
* [blockstreamDelay](api-classes-packages-augur-sdk-src-state-db-db-db.md#blockstreamdelay)
* [customEvents](api-classes-packages-augur-sdk-src-state-db-db-db.md#customevents)
* [genericEventNames](api-classes-packages-augur-sdk-src-state-db-db-db.md#genericeventnames)
* [metaDatabase](api-classes-packages-augur-sdk-src-state-db-db-db.md#metadatabase)
* [networkId](api-classes-packages-augur-sdk-src-state-db-db-db.md#networkid)
* [pouchDBFactory](api-classes-packages-augur-sdk-src-state-db-db-db.md#pouchdbfactory)
* [syncStatus](api-classes-packages-augur-sdk-src-state-db-db-db.md#syncstatus)
* [syncableDatabases](api-classes-packages-augur-sdk-src-state-db-db-db.md#syncabledatabases)
* [trackedUsers](api-classes-packages-augur-sdk-src-state-db-db-db.md#trackedusers)
* [userSpecificEvents](api-classes-packages-augur-sdk-src-state-db-db-db.md#userspecificevents)

### Methods

* [addNewBlock](api-classes-packages-augur-sdk-src-state-db-db-db.md#addnewblock)
* [findCompleteSetsPurchasedLogs](api-classes-packages-augur-sdk-src-state-db-db-db.md#findcompletesetspurchasedlogs)
* [findCompleteSetsSoldLogs](api-classes-packages-augur-sdk-src-state-db-db-db.md#findcompletesetssoldlogs)
* [findCurrentOrderLogs](api-classes-packages-augur-sdk-src-state-db-db-db.md#findcurrentorderlogs)
* [findDisputeCrowdsourcerCompletedLogs](api-classes-packages-augur-sdk-src-state-db-db-db.md#finddisputecrowdsourcercompletedlogs)
* [findDisputeCrowdsourcerContributionLogs](api-classes-packages-augur-sdk-src-state-db-db-db.md#finddisputecrowdsourcercontributionlogs)
* [findDisputeCrowdsourcerRedeemedLogs](api-classes-packages-augur-sdk-src-state-db-db-db.md#finddisputecrowdsourcerredeemedlogs)
* [findDisputeWindowCreatedLogs](api-classes-packages-augur-sdk-src-state-db-db-db.md#finddisputewindowcreatedlogs)
* [findInMetaDB](api-classes-packages-augur-sdk-src-state-db-db-db.md#findinmetadb)
* [findInSyncableDB](api-classes-packages-augur-sdk-src-state-db-db-db.md#findinsyncabledb)
* [findInitialReportSubmittedLogs](api-classes-packages-augur-sdk-src-state-db-db-db.md#findinitialreportsubmittedlogs)
* [findInitialReporterRedeemedLogs](api-classes-packages-augur-sdk-src-state-db-db-db.md#findinitialreporterredeemedlogs)
* [findMarketCreatedLogs](api-classes-packages-augur-sdk-src-state-db-db-db.md#findmarketcreatedlogs)
* [findMarketFinalizedLogs](api-classes-packages-augur-sdk-src-state-db-db-db.md#findmarketfinalizedlogs)
* [findMarketMigratedLogs](api-classes-packages-augur-sdk-src-state-db-db-db.md#findmarketmigratedlogs)
* [findMarketVolumeChangedLogs](api-classes-packages-augur-sdk-src-state-db-db-db.md#findmarketvolumechangedlogs)
* [findOrderCanceledLogs](api-classes-packages-augur-sdk-src-state-db-db-db.md#findordercanceledlogs)
* [findOrderCreatedLogs](api-classes-packages-augur-sdk-src-state-db-db-db.md#findordercreatedlogs)
* [findOrderFilledLogs](api-classes-packages-augur-sdk-src-state-db-db-db.md#findorderfilledlogs)
* [findOrderPriceChangedLogs](api-classes-packages-augur-sdk-src-state-db-db-db.md#findorderpricechangedlogs)
* [findParticipationTokensRedeemedLogs](api-classes-packages-augur-sdk-src-state-db-db-db.md#findparticipationtokensredeemedlogs)
* [findProfitLossChangedLogs](api-classes-packages-augur-sdk-src-state-db-db-db.md#findprofitlosschangedlogs)
* [findTimestampSetLogs](api-classes-packages-augur-sdk-src-state-db-db-db.md#findtimestampsetlogs)
* [findTokenBalanceChangedLogs](api-classes-packages-augur-sdk-src-state-db-db-db.md#findtokenbalancechangedlogs)
* [findTradingProceedsClaimedLogs](api-classes-packages-augur-sdk-src-state-db-db-db.md#findtradingproceedsclaimedlogs)
* [findUniverseForkedLogs](api-classes-packages-augur-sdk-src-state-db-db-db.md#finduniverseforkedlogs)
* [fullTextSearch](api-classes-packages-augur-sdk-src-state-db-db-db.md#fulltextsearch)
* [getAllSequenceIds](api-classes-packages-augur-sdk-src-state-db-db-db.md#getallsequenceids)
* [getDatabaseName](api-classes-packages-augur-sdk-src-state-db-db-db.md#getdatabasename)
* [getSyncStartingBlock](api-classes-packages-augur-sdk-src-state-db-db-db.md#getsyncstartingblock)
* [getSyncableDatabase](api-classes-packages-augur-sdk-src-state-db-db-db.md#getsyncabledatabase)
* [initializeDB](api-classes-packages-augur-sdk-src-state-db-db-db.md#initializedb)
* [notifySyncableDBAdded](api-classes-packages-augur-sdk-src-state-db-db-db.md#notifysyncabledbadded)
* [registerEventListener](api-classes-packages-augur-sdk-src-state-db-db-db.md#registereventlistener)
* [rollback](api-classes-packages-augur-sdk-src-state-db-db-db.md#rollback)
* [sync](api-classes-packages-augur-sdk-src-state-db-db-db.md#sync)
* [createAndInitializeDB](api-classes-packages-augur-sdk-src-state-db-db-db.md#createandinitializedb)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new DB**(pouchDBFactory: *[PouchDBFactoryType](api-modules-packages-augur-sdk-src-state-db-abstractdb-module.md#pouchdbfactorytype)*): [DB](api-classes-packages-augur-sdk-src-state-db-db-db.md)

*Defined in [packages/augur-sdk/src/state/db/DB.ts:44](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/DB.ts#L44)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| pouchDBFactory | [PouchDBFactoryType](api-modules-packages-augur-sdk-src-state-db-abstractdb-module.md#pouchdbfactorytype) |

**Returns:** [DB](api-classes-packages-augur-sdk-src-state-db-db-db.md)

___

## Properties

<a id="augur"></a>

### `<Private>` augur

**● augur**: *[Augur](api-classes-packages-augur-sdk-src-augur-augur.md)*

*Defined in [packages/augur-sdk/src/state/db/DB.ts:42](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/DB.ts#L42)*

___
<a id="blockandlogstreamerlistener"></a>

### `<Private>` blockAndLogStreamerListener

**● blockAndLogStreamerListener**: *[IBlockAndLogStreamerListener](api-interfaces-packages-augur-sdk-src-state-db-blockandlogstreamerlistener-iblockandlogstreamerlistener.md)*

*Defined in [packages/augur-sdk/src/state/db/DB.ts:41](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/DB.ts#L41)*

___
<a id="blockstreamdelay"></a>

### `<Private>` blockstreamDelay

**● blockstreamDelay**: *`number`*

*Defined in [packages/augur-sdk/src/state/db/DB.ts:34](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/DB.ts#L34)*

___
<a id="customevents"></a>

### `<Private>` customEvents

**● customEvents**: *`Array`<[CustomEvent](api-interfaces-packages-augur-sdk-src-augur-customevent.md)>*

*Defined in [packages/augur-sdk/src/state/db/DB.ts:37](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/DB.ts#L37)*

___
<a id="genericeventnames"></a>

### `<Private>` genericEventNames

**● genericEventNames**: *`Array`<`string`>*

*Defined in [packages/augur-sdk/src/state/db/DB.ts:36](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/DB.ts#L36)*

___
<a id="metadatabase"></a>

### `<Private>` metaDatabase

**● metaDatabase**: *[MetaDB](api-classes-packages-augur-sdk-src-state-db-metadb-metadb.md)*

*Defined in [packages/augur-sdk/src/state/db/DB.ts:40](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/DB.ts#L40)*

___
<a id="networkid"></a>

### `<Private>` networkId

**● networkId**: *`number`*

*Defined in [packages/augur-sdk/src/state/db/DB.ts:33](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/DB.ts#L33)*

___
<a id="pouchdbfactory"></a>

###  pouchDBFactory

**● pouchDBFactory**: *[PouchDBFactoryType](api-modules-packages-augur-sdk-src-state-db-abstractdb-module.md#pouchdbfactorytype)*

*Defined in [packages/augur-sdk/src/state/db/DB.ts:43](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/DB.ts#L43)*

___
<a id="syncstatus"></a>

###  syncStatus

**● syncStatus**: *[SyncStatus](api-classes-packages-augur-sdk-src-state-db-syncstatus-syncstatus.md)*

*Defined in [packages/augur-sdk/src/state/db/DB.ts:44](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/DB.ts#L44)*

___
<a id="syncabledatabases"></a>

### `<Private>` syncableDatabases

**● syncableDatabases**: *`object`*

*Defined in [packages/augur-sdk/src/state/db/DB.ts:39](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/DB.ts#L39)*

#### Type declaration

[dbName: `string`]: [SyncableDB](api-classes-packages-augur-sdk-src-state-db-syncabledb-syncabledb.md)

___
<a id="trackedusers"></a>

### `<Private>` trackedUsers

**● trackedUsers**: *[TrackedUsers](api-classes-packages-augur-sdk-src-state-db-trackedusers-trackedusers.md)*

*Defined in [packages/augur-sdk/src/state/db/DB.ts:35](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/DB.ts#L35)*

___
<a id="userspecificevents"></a>

### `<Private>` userSpecificEvents

**● userSpecificEvents**: *`Array`<[UserSpecificEvent](api-interfaces-packages-augur-sdk-src-augur-userspecificevent.md)>*

*Defined in [packages/augur-sdk/src/state/db/DB.ts:38](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/DB.ts#L38)*

___

## Methods

<a id="addnewblock"></a>

###  addNewBlock

▸ **addNewBlock**(dbName: *`string`*, blockLogs: *`any`*): `Promise`<`void`>

*Defined in [packages/augur-sdk/src/state/db/DB.ts:324](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/DB.ts#L324)*

Adds a new block to a SyncableDB/UserSyncableDB and updates MetaDB.

TODO Define blockLogs interface

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| dbName | `string` |  Name of the database to which the block should be added |
| blockLogs | `any` |  Logs from a new block |

**Returns:** `Promise`<`void`>

___
<a id="findcompletesetspurchasedlogs"></a>

###  findCompleteSetsPurchasedLogs

▸ **findCompleteSetsPurchasedLogs**(request: *`FindRequest`<`__type`>*): `Promise`<`Array`<[CompleteSetsPurchasedLog](api-interfaces-packages-augur-sdk-src-state-logs-types-completesetspurchasedlog.md)>>

*Defined in [packages/augur-sdk/src/state/db/DB.ts:373](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/DB.ts#L373)*

Queries the CompleteSetsPurchased DB

**Parameters:**

| Name | Type |
| ------ | ------ |
| request | `FindRequest`<`__type`> |

**Returns:** `Promise`<`Array`<[CompleteSetsPurchasedLog](api-interfaces-packages-augur-sdk-src-state-logs-types-completesetspurchasedlog.md)>>

___
<a id="findcompletesetssoldlogs"></a>

###  findCompleteSetsSoldLogs

▸ **findCompleteSetsSoldLogs**(request: *`FindRequest`<`__type`>*): `Promise`<`Array`<[CompleteSetsSoldLog](api-interfaces-packages-augur-sdk-src-state-logs-types-completesetssoldlog.md)>>

*Defined in [packages/augur-sdk/src/state/db/DB.ts:384](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/DB.ts#L384)*

Queries the CompleteSetsSold DB

**Parameters:**

| Name | Type |
| ------ | ------ |
| request | `FindRequest`<`__type`> |

**Returns:** `Promise`<`Array`<[CompleteSetsSoldLog](api-interfaces-packages-augur-sdk-src-state-logs-types-completesetssoldlog.md)>>

___
<a id="findcurrentorderlogs"></a>

###  findCurrentOrderLogs

▸ **findCurrentOrderLogs**(request: *`FindRequest`<`__type`>*): `Promise`<`Array`<[ParsedOrderEventLog](api-interfaces-packages-augur-sdk-src-state-logs-types-parsedordereventlog.md)>>

*Defined in [packages/augur-sdk/src/state/db/DB.ts:630](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/DB.ts#L630)*

Queries the CurrentOrders DB

**Parameters:**

| Name | Type |
| ------ | ------ |
| request | `FindRequest`<`__type`> |

**Returns:** `Promise`<`Array`<[ParsedOrderEventLog](api-interfaces-packages-augur-sdk-src-state-logs-types-parsedordereventlog.md)>>

___
<a id="finddisputecrowdsourcercompletedlogs"></a>

###  findDisputeCrowdsourcerCompletedLogs

▸ **findDisputeCrowdsourcerCompletedLogs**(request: *`FindRequest`<`__type`>*): `Promise`<`Array`<[DisputeCrowdsourcerCompletedLog](api-interfaces-packages-augur-sdk-src-state-logs-types-disputecrowdsourcercompletedlog.md)>>

*Defined in [packages/augur-sdk/src/state/db/DB.ts:395](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/DB.ts#L395)*

Queries the DisputeCrowdsourcerCompleted DB

**Parameters:**

| Name | Type |
| ------ | ------ |
| request | `FindRequest`<`__type`> |

**Returns:** `Promise`<`Array`<[DisputeCrowdsourcerCompletedLog](api-interfaces-packages-augur-sdk-src-state-logs-types-disputecrowdsourcercompletedlog.md)>>

___
<a id="finddisputecrowdsourcercontributionlogs"></a>

###  findDisputeCrowdsourcerContributionLogs

▸ **findDisputeCrowdsourcerContributionLogs**(request: *`FindRequest`<`__type`>*): `Promise`<`Array`<[DisputeCrowdsourcerContributionLog](api-interfaces-packages-augur-sdk-src-state-logs-types-disputecrowdsourcercontributionlog.md)>>

*Defined in [packages/augur-sdk/src/state/db/DB.ts:406](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/DB.ts#L406)*

Queries the DisputeCrowdsourcerContribution DB

**Parameters:**

| Name | Type |
| ------ | ------ |
| request | `FindRequest`<`__type`> |

**Returns:** `Promise`<`Array`<[DisputeCrowdsourcerContributionLog](api-interfaces-packages-augur-sdk-src-state-logs-types-disputecrowdsourcercontributionlog.md)>>

___
<a id="finddisputecrowdsourcerredeemedlogs"></a>

###  findDisputeCrowdsourcerRedeemedLogs

▸ **findDisputeCrowdsourcerRedeemedLogs**(request: *`FindRequest`<`__type`>*): `Promise`<`Array`<[DisputeCrowdsourcerRedeemedLog](api-interfaces-packages-augur-sdk-src-state-logs-types-disputecrowdsourcerredeemedlog.md)>>

*Defined in [packages/augur-sdk/src/state/db/DB.ts:417](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/DB.ts#L417)*

Queries the DisputeCrowdsourcerRedeemed DB

**Parameters:**

| Name | Type |
| ------ | ------ |
| request | `FindRequest`<`__type`> |

**Returns:** `Promise`<`Array`<[DisputeCrowdsourcerRedeemedLog](api-interfaces-packages-augur-sdk-src-state-logs-types-disputecrowdsourcerredeemedlog.md)>>

___
<a id="finddisputewindowcreatedlogs"></a>

###  findDisputeWindowCreatedLogs

▸ **findDisputeWindowCreatedLogs**(request: *`FindRequest`<`__type`>*): `Promise`<`Array`<[DisputeWindowCreatedLog](api-interfaces-packages-augur-sdk-src-state-logs-types-disputewindowcreatedlog.md)>>

*Defined in [packages/augur-sdk/src/state/db/DB.ts:428](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/DB.ts#L428)*

Queries the DisputeWindowCreated DB

**Parameters:**

| Name | Type |
| ------ | ------ |
| request | `FindRequest`<`__type`> |

**Returns:** `Promise`<`Array`<[DisputeWindowCreatedLog](api-interfaces-packages-augur-sdk-src-state-logs-types-disputewindowcreatedlog.md)>>

___
<a id="findinmetadb"></a>

###  findInMetaDB

▸ **findInMetaDB**(request: *`FindRequest`<`__type`>*): `Promise`<`FindResponse`<`__type`>>

*Defined in [packages/augur-sdk/src/state/db/DB.ts:363](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/DB.ts#L363)*

Queries the MetaDB.

**Parameters:**

| Name | Type |
| ------ | ------ |
| request | `FindRequest`<`__type`> |

**Returns:** `Promise`<`FindResponse`<`__type`>>
> > } Promise to a FindResponse

___
<a id="findinsyncabledb"></a>

###  findInSyncableDB

▸ **findInSyncableDB**(dbName: *`string`*, request: *`FindRequest`<`__type`>*): `Promise`<`FindResponse`<`__type`>>

*Defined in [packages/augur-sdk/src/state/db/DB.ts:353](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/DB.ts#L353)*

Queries a SyncableDB.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| dbName | `string` |  Name of the SyncableDB to query |
| request | `FindRequest`<`__type`> |

**Returns:** `Promise`<`FindResponse`<`__type`>>
> > } Promise to a FindResponse

___
<a id="findinitialreportsubmittedlogs"></a>

###  findInitialReportSubmittedLogs

▸ **findInitialReportSubmittedLogs**(request: *`FindRequest`<`__type`>*): `Promise`<`Array`<[InitialReportSubmittedLog](api-interfaces-packages-augur-sdk-src-state-logs-types-initialreportsubmittedlog.md)>>

*Defined in [packages/augur-sdk/src/state/db/DB.ts:450](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/DB.ts#L450)*

Queries the InitialReportSubmitted DB

**Parameters:**

| Name | Type |
| ------ | ------ |
| request | `FindRequest`<`__type`> |

**Returns:** `Promise`<`Array`<[InitialReportSubmittedLog](api-interfaces-packages-augur-sdk-src-state-logs-types-initialreportsubmittedlog.md)>>

___
<a id="findinitialreporterredeemedlogs"></a>

###  findInitialReporterRedeemedLogs

▸ **findInitialReporterRedeemedLogs**(request: *`FindRequest`<`__type`>*): `Promise`<`Array`<[InitialReporterRedeemedLog](api-interfaces-packages-augur-sdk-src-state-logs-types-initialreporterredeemedlog.md)>>

*Defined in [packages/augur-sdk/src/state/db/DB.ts:439](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/DB.ts#L439)*

Queries the InitialReporterRedeemed DB

**Parameters:**

| Name | Type |
| ------ | ------ |
| request | `FindRequest`<`__type`> |

**Returns:** `Promise`<`Array`<[InitialReporterRedeemedLog](api-interfaces-packages-augur-sdk-src-state-logs-types-initialreporterredeemedlog.md)>>

___
<a id="findmarketcreatedlogs"></a>

###  findMarketCreatedLogs

▸ **findMarketCreatedLogs**(request: *`FindRequest`<`__type`>*): `Promise`<`Array`<[MarketCreatedLog](api-interfaces-packages-augur-sdk-src-state-logs-types-marketcreatedlog.md)>>

*Defined in [packages/augur-sdk/src/state/db/DB.ts:461](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/DB.ts#L461)*

Queries the MarketCreated DB

**Parameters:**

| Name | Type |
| ------ | ------ |
| request | `FindRequest`<`__type`> |

**Returns:** `Promise`<`Array`<[MarketCreatedLog](api-interfaces-packages-augur-sdk-src-state-logs-types-marketcreatedlog.md)>>

___
<a id="findmarketfinalizedlogs"></a>

###  findMarketFinalizedLogs

▸ **findMarketFinalizedLogs**(request: *`FindRequest`<`__type`>*): `Promise`<`Array`<[MarketFinalizedLog](api-interfaces-packages-augur-sdk-src-state-logs-types-marketfinalizedlog.md)>>

*Defined in [packages/augur-sdk/src/state/db/DB.ts:472](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/DB.ts#L472)*

Queries the MarketFinalized DB

**Parameters:**

| Name | Type |
| ------ | ------ |
| request | `FindRequest`<`__type`> |

**Returns:** `Promise`<`Array`<[MarketFinalizedLog](api-interfaces-packages-augur-sdk-src-state-logs-types-marketfinalizedlog.md)>>

___
<a id="findmarketmigratedlogs"></a>

###  findMarketMigratedLogs

▸ **findMarketMigratedLogs**(request: *`FindRequest`<`__type`>*): `Promise`<`Array`<[MarketMigratedLog](api-interfaces-packages-augur-sdk-src-state-logs-types-marketmigratedlog.md)>>

*Defined in [packages/augur-sdk/src/state/db/DB.ts:483](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/DB.ts#L483)*

Queries the MarketMigrated DB

**Parameters:**

| Name | Type |
| ------ | ------ |
| request | `FindRequest`<`__type`> |

**Returns:** `Promise`<`Array`<[MarketMigratedLog](api-interfaces-packages-augur-sdk-src-state-logs-types-marketmigratedlog.md)>>

___
<a id="findmarketvolumechangedlogs"></a>

###  findMarketVolumeChangedLogs

▸ **findMarketVolumeChangedLogs**(request: *`FindRequest`<`__type`>*): `Promise`<`Array`<[MarketVolumeChangedLog](api-interfaces-packages-augur-sdk-src-state-logs-types-marketvolumechangedlog.md)>>

*Defined in [packages/augur-sdk/src/state/db/DB.ts:494](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/DB.ts#L494)*

Queries the MarketVolumeChanged DB

**Parameters:**

| Name | Type |
| ------ | ------ |
| request | `FindRequest`<`__type`> |

**Returns:** `Promise`<`Array`<[MarketVolumeChangedLog](api-interfaces-packages-augur-sdk-src-state-logs-types-marketvolumechangedlog.md)>>

___
<a id="findordercanceledlogs"></a>

###  findOrderCanceledLogs

▸ **findOrderCanceledLogs**(request: *`FindRequest`<`__type`>*): `Promise`<`Array`<[ParsedOrderEventLog](api-interfaces-packages-augur-sdk-src-state-logs-types-parsedordereventlog.md)>>

*Defined in [packages/augur-sdk/src/state/db/DB.ts:505](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/DB.ts#L505)*

Queries the OrderEvent DB for Cancel events

**Parameters:**

| Name | Type |
| ------ | ------ |
| request | `FindRequest`<`__type`> |

**Returns:** `Promise`<`Array`<[ParsedOrderEventLog](api-interfaces-packages-augur-sdk-src-state-logs-types-parsedordereventlog.md)>>

___
<a id="findordercreatedlogs"></a>

###  findOrderCreatedLogs

▸ **findOrderCreatedLogs**(request: *`FindRequest`<`__type`>*): `Promise`<`Array`<[ParsedOrderEventLog](api-interfaces-packages-augur-sdk-src-state-logs-types-parsedordereventlog.md)>>

*Defined in [packages/augur-sdk/src/state/db/DB.ts:519](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/DB.ts#L519)*

Queries the OrderEvent DB for Create events

**Parameters:**

| Name | Type |
| ------ | ------ |
| request | `FindRequest`<`__type`> |

**Returns:** `Promise`<`Array`<[ParsedOrderEventLog](api-interfaces-packages-augur-sdk-src-state-logs-types-parsedordereventlog.md)>>

___
<a id="findorderfilledlogs"></a>

###  findOrderFilledLogs

▸ **findOrderFilledLogs**(request: *`FindRequest`<`__type`>*): `Promise`<`Array`<[ParsedOrderEventLog](api-interfaces-packages-augur-sdk-src-state-logs-types-parsedordereventlog.md)>>

*Defined in [packages/augur-sdk/src/state/db/DB.ts:533](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/DB.ts#L533)*

Queries the OrderEvent DB for Fill events

**Parameters:**

| Name | Type |
| ------ | ------ |
| request | `FindRequest`<`__type`> |

**Returns:** `Promise`<`Array`<[ParsedOrderEventLog](api-interfaces-packages-augur-sdk-src-state-logs-types-parsedordereventlog.md)>>

___
<a id="findorderpricechangedlogs"></a>

###  findOrderPriceChangedLogs

▸ **findOrderPriceChangedLogs**(request: *`FindRequest`<`__type`>*): `Promise`<`Array`<[ParsedOrderEventLog](api-interfaces-packages-augur-sdk-src-state-logs-types-parsedordereventlog.md)>>

*Defined in [packages/augur-sdk/src/state/db/DB.ts:547](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/DB.ts#L547)*

Queries the OrderEvent DB for PriceChanged events

**Parameters:**

| Name | Type |
| ------ | ------ |
| request | `FindRequest`<`__type`> |

**Returns:** `Promise`<`Array`<[ParsedOrderEventLog](api-interfaces-packages-augur-sdk-src-state-logs-types-parsedordereventlog.md)>>

___
<a id="findparticipationtokensredeemedlogs"></a>

###  findParticipationTokensRedeemedLogs

▸ **findParticipationTokensRedeemedLogs**(request: *`FindRequest`<`__type`>*): `Promise`<`Array`<[ParticipationTokensRedeemedLog](api-interfaces-packages-augur-sdk-src-state-logs-types-participationtokensredeemedlog.md)>>

*Defined in [packages/augur-sdk/src/state/db/DB.ts:561](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/DB.ts#L561)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| request | `FindRequest`<`__type`> |

**Returns:** `Promise`<`Array`<[ParticipationTokensRedeemedLog](api-interfaces-packages-augur-sdk-src-state-logs-types-participationtokensredeemedlog.md)>>

___
<a id="findprofitlosschangedlogs"></a>

###  findProfitLossChangedLogs

▸ **findProfitLossChangedLogs**(user: *`string`*, request: *`FindRequest`<`__type`>*): `Promise`<`Array`<[ProfitLossChangedLog](api-interfaces-packages-augur-sdk-src-state-logs-types-profitlosschangedlog.md)>>

*Defined in [packages/augur-sdk/src/state/db/DB.ts:573](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/DB.ts#L573)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| user | `string` |
| request | `FindRequest`<`__type`> |

**Returns:** `Promise`<`Array`<[ProfitLossChangedLog](api-interfaces-packages-augur-sdk-src-state-logs-types-profitlosschangedlog.md)>>

___
<a id="findtimestampsetlogs"></a>

###  findTimestampSetLogs

▸ **findTimestampSetLogs**(request: *`FindRequest`<`__type`>*): `Promise`<`Array`<[TimestampSetLog](api-interfaces-packages-augur-sdk-src-state-logs-types-timestampsetlog.md)>>

*Defined in [packages/augur-sdk/src/state/db/DB.ts:584](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/DB.ts#L584)*

Queries the TimestampSet DB

**Parameters:**

| Name | Type |
| ------ | ------ |
| request | `FindRequest`<`__type`> |

**Returns:** `Promise`<`Array`<[TimestampSetLog](api-interfaces-packages-augur-sdk-src-state-logs-types-timestampsetlog.md)>>

___
<a id="findtokenbalancechangedlogs"></a>

###  findTokenBalanceChangedLogs

▸ **findTokenBalanceChangedLogs**(user: *`string`*, request: *`FindRequest`<`__type`>*): `Promise`<`Array`<[TokenBalanceChangedLog](api-interfaces-packages-augur-sdk-src-state-logs-types-tokenbalancechangedlog.md)>>

*Defined in [packages/augur-sdk/src/state/db/DB.ts:596](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/DB.ts#L596)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| user | `string` |
| request | `FindRequest`<`__type`> |

**Returns:** `Promise`<`Array`<[TokenBalanceChangedLog](api-interfaces-packages-augur-sdk-src-state-logs-types-tokenbalancechangedlog.md)>>

___
<a id="findtradingproceedsclaimedlogs"></a>

###  findTradingProceedsClaimedLogs

▸ **findTradingProceedsClaimedLogs**(request: *`FindRequest`<`__type`>*): `Promise`<`Array`<[TradingProceedsClaimedLog](api-interfaces-packages-augur-sdk-src-state-logs-types-tradingproceedsclaimedlog.md)>>

*Defined in [packages/augur-sdk/src/state/db/DB.ts:608](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/DB.ts#L608)*

Queries the TradingProceedsClaimed DB

**Parameters:**

| Name | Type |
| ------ | ------ |
| request | `FindRequest`<`__type`> |

**Returns:** `Promise`<`Array`<[TradingProceedsClaimedLog](api-interfaces-packages-augur-sdk-src-state-logs-types-tradingproceedsclaimedlog.md)>>

___
<a id="finduniverseforkedlogs"></a>

###  findUniverseForkedLogs

▸ **findUniverseForkedLogs**(request: *`FindRequest`<`__type`>*): `Promise`<`Array`<[UniverseForkedLog](api-interfaces-packages-augur-sdk-src-state-logs-types-universeforkedlog.md)>>

*Defined in [packages/augur-sdk/src/state/db/DB.ts:619](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/DB.ts#L619)*

Queries the UniverseForked DB

**Parameters:**

| Name | Type |
| ------ | ------ |
| request | `FindRequest`<`__type`> |

**Returns:** `Promise`<`Array`<[UniverseForkedLog](api-interfaces-packages-augur-sdk-src-state-logs-types-universeforkedlog.md)>>

___
<a id="fulltextsearch"></a>

###  fullTextSearch

▸ **fullTextSearch**(eventName: *`string`*, query: *`string`*): `Array`<`object`>

*Defined in [packages/augur-sdk/src/state/db/DB.ts:207](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/DB.ts#L207)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| eventName | `string` |
| query | `string` |

**Returns:** `Array`<`object`>

___
<a id="getallsequenceids"></a>

###  getAllSequenceIds

▸ **getAllSequenceIds**(): `Promise`<[SequenceIds](api-interfaces-packages-augur-sdk-src-state-db-metadb-sequenceids.md)>

*Defined in [packages/augur-sdk/src/state/db/DB.ts:263](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/DB.ts#L263)*

Returns the current update\_seqs from all SyncableDBs/UserSyncableDBs.

TODO Remove this function if derived DBs are not used.

**Returns:** `Promise`<[SequenceIds](api-interfaces-packages-augur-sdk-src-state-db-metadb-sequenceids.md)>
Promise to a SequenceIds object

___
<a id="getdatabasename"></a>

###  getDatabaseName

▸ **getDatabaseName**(eventName: *`string`*, trackableUserAddress?: *`string`*): `string`

*Defined in [packages/augur-sdk/src/state/db/DB.ts:240](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/DB.ts#L240)*

Creates a name for a SyncableDB/UserSyncableDB based on `eventName` & `trackableUserAddress`.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| eventName | `string` |  Event log name |
| `Optional` trackableUserAddress | `string` |  User address to append to DB name |

**Returns:** `string`

___
<a id="getsyncstartingblock"></a>

###  getSyncStartingBlock

▸ **getSyncStartingBlock**(): `Promise`<`number`>

*Defined in [packages/augur-sdk/src/state/db/DB.ts:220](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/DB.ts#L220)*

Gets the block number at which to begin syncing. (That is, the lowest last-synced block across all event log databases or the upload block number for this network.)

TODO If derived DBs are used, the last-synced block in `this.metaDatabase` should also be taken into account here.

**Returns:** `Promise`<`number`>
Promise to the block number at which to begin syncing.

___
<a id="getsyncabledatabase"></a>

###  getSyncableDatabase

▸ **getSyncableDatabase**(dbName: *`string`*): [SyncableDB](api-classes-packages-augur-sdk-src-state-db-syncabledb-syncabledb.md)

*Defined in [packages/augur-sdk/src/state/db/DB.ts:252](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/DB.ts#L252)*

Gets a syncable database based upon the name

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| dbName | `string` |  The name of the database |

**Returns:** [SyncableDB](api-classes-packages-augur-sdk-src-state-db-syncabledb-syncabledb.md)

___
<a id="initializedb"></a>

###  initializeDB

▸ **initializeDB**(networkId: *`number`*, blockstreamDelay: *`number`*, defaultStartSyncBlockNumber: *`number`*, trackedUsers: *`Array`<`string`>*, blockAndLogStreamerListener: *[IBlockAndLogStreamerListener](api-interfaces-packages-augur-sdk-src-state-db-blockandlogstreamerlistener-iblockandlogstreamerlistener.md)*): `Promise`<[DB](api-classes-packages-augur-sdk-src-state-db-db-db.md)>

*Defined in [packages/augur-sdk/src/state/db/DB.ts:87](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/DB.ts#L87)*

Creates databases to be used for syncing.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| networkId | `number` |  Network on which to sync events |
| blockstreamDelay | `number` |  Number of blocks by which to delay blockstream |
| defaultStartSyncBlockNumber | `number` |  Block number at which to start sycing (if no higher block number has been synced) |
| trackedUsers | `Array`<`string`> |  Array of user addresses for which to sync user-specific events |
| blockAndLogStreamerListener | [IBlockAndLogStreamerListener](api-interfaces-packages-augur-sdk-src-state-db-blockandlogstreamerlistener-iblockandlogstreamerlistener.md) |  \- |

**Returns:** `Promise`<[DB](api-classes-packages-augur-sdk-src-state-db-db-db.md)>

___
<a id="notifysyncabledbadded"></a>

###  notifySyncableDBAdded

▸ **notifySyncableDBAdded**(db: *[SyncableDB](api-classes-packages-augur-sdk-src-state-db-syncabledb-syncabledb.md)*): `void`

*Defined in [packages/augur-sdk/src/state/db/DB.ts:148](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/DB.ts#L148)*

Called from SyncableDB constructor once SyncableDB is successfully created.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| db | [SyncableDB](api-classes-packages-augur-sdk-src-state-db-syncabledb-syncabledb.md) |  dbController that utilizes the SyncableDB |

**Returns:** `void`

___
<a id="registereventlistener"></a>

###  registerEventListener

▸ **registerEventListener**(eventName: *`string`*, callback: *[LogCallbackType](api-modules-packages-augur-sdk-src-state-db-blockandlogstreamerlistener-module.md#logcallbacktype)*): `void`

*Defined in [packages/augur-sdk/src/state/db/DB.ts:152](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/DB.ts#L152)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| eventName | `string` |
| callback | [LogCallbackType](api-modules-packages-augur-sdk-src-state-db-blockandlogstreamerlistener-module.md#logcallbacktype) |

**Returns:** `void`

___
<a id="rollback"></a>

###  rollback

▸ **rollback**(blockNumber: *`number`*): `Promise`<`void`>

*Defined in [packages/augur-sdk/src/state/db/DB.ts:285](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/DB.ts#L285)*

Rolls back all blocks from blockNumber onward.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| blockNumber | `number` |  Oldest block number to delete |

**Returns:** `Promise`<`void`>

___
<a id="sync"></a>

###  sync

▸ **sync**(augur: *[Augur](api-classes-packages-augur-sdk-src-augur-augur.md)*, chunkSize: *`number`*, blockstreamDelay: *`number`*): `Promise`<`void`>

*Defined in [packages/augur-sdk/src/state/db/DB.ts:163](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/DB.ts#L163)*

Syncs generic events and user-specific events with blockchain and updates MetaDB info.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| augur | [Augur](api-classes-packages-augur-sdk-src-augur-augur.md) |  Augur object with which to sync |
| chunkSize | `number` |  Number of blocks to retrieve at a time when syncing logs |
| blockstreamDelay | `number` |  Number of blocks by which blockstream is behind the blockchain |

**Returns:** `Promise`<`void`>

___
<a id="createandinitializedb"></a>

### `<Static>` createAndInitializeDB

▸ **createAndInitializeDB**<`TBigNumber`>(networkId: *`number`*, blockstreamDelay: *`number`*, defaultStartSyncBlockNumber: *`number`*, trackedUsers: *`Array`<`string`>*, augur: *[Augur](api-classes-packages-augur-sdk-src-augur-augur.md)*, pouchDBFactory: *[PouchDBFactoryType](api-modules-packages-augur-sdk-src-state-db-abstractdb-module.md#pouchdbfactorytype)*, blockAndLogStreamerListener: *[IBlockAndLogStreamerListener](api-interfaces-packages-augur-sdk-src-state-db-blockandlogstreamerlistener-iblockandlogstreamerlistener.md)*): `Promise`<[DB](api-classes-packages-augur-sdk-src-state-db-db-db.md)>

*Defined in [packages/augur-sdk/src/state/db/DB.ts:64](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/db/DB.ts#L64)*

Creates and returns a new dbController.

**Type parameters:**

#### TBigNumber 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| networkId | `number` |  Network on which to sync events |
| blockstreamDelay | `number` |  Number of blocks by which to delay blockstream |
| defaultStartSyncBlockNumber | `number` |  Block number at which to start sycing (if no higher block number has been synced) |
| trackedUsers | `Array`<`string`> |  Array of user addresses for which to sync user-specific events |
| augur | [Augur](api-classes-packages-augur-sdk-src-augur-augur.md) |
| pouchDBFactory | [PouchDBFactoryType](api-modules-packages-augur-sdk-src-state-db-abstractdb-module.md#pouchdbfactorytype) |  Factory function generatin PouchDB instance |
| blockAndLogStreamerListener | [IBlockAndLogStreamerListener](api-interfaces-packages-augur-sdk-src-state-db-blockandlogstreamerlistener-iblockandlogstreamerlistener.md) |  Stream listener for blocks and logs |

**Returns:** `Promise`<[DB](api-classes-packages-augur-sdk-src-state-db-db-db.md)>
Promise to a DB controller object

___

