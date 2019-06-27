---
id: api-classes-packages-augur-sdk-src-state-getter-sync-data-syncdata
title: SyncData
sidebar_label: SyncData
---

[@augurproject/sdk](api-readme.md) > [[packages/augur-sdk/src/state/getter/sync-data Module]](api-modules-packages-augur-sdk-src-state-getter-sync-data-module.md) > [SyncData](api-classes-packages-augur-sdk-src-state-getter-sync-data-syncdata.md)

## Class

## Hierarchy

**SyncData**

### Properties

* [blocksBehindCurrent](api-classes-packages-augur-sdk-src-state-getter-sync-data-syncdata.md#blocksbehindcurrent)
* [highestAvailableBlockNumber](api-classes-packages-augur-sdk-src-state-getter-sync-data-syncdata.md#highestavailableblocknumber)
* [lastSyncedBlockNumber](api-classes-packages-augur-sdk-src-state-getter-sync-data-syncdata.md#lastsyncedblocknumber)
* [percentBehindCurrent](api-classes-packages-augur-sdk-src-state-getter-sync-data-syncdata.md#percentbehindcurrent)
* [SyncDataParams](api-classes-packages-augur-sdk-src-state-getter-sync-data-syncdata.md#syncdataparams)

### Methods

* [getSyncData](api-classes-packages-augur-sdk-src-state-getter-sync-data-syncdata.md#getsyncdata)

---

## Properties

<a id="blocksbehindcurrent"></a>

###  blocksBehindCurrent

**● blocksBehindCurrent**: *`number`*

*Defined in [packages/augur-sdk/src/state/getter/sync-data.ts:9](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/getter/sync-data.ts#L9)*

___
<a id="highestavailableblocknumber"></a>

###  highestAvailableBlockNumber

**● highestAvailableBlockNumber**: *`number`*

*Defined in [packages/augur-sdk/src/state/getter/sync-data.ts:7](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/getter/sync-data.ts#L7)*

___
<a id="lastsyncedblocknumber"></a>

###  lastSyncedBlockNumber

**● lastSyncedBlockNumber**: *`number`*

*Defined in [packages/augur-sdk/src/state/getter/sync-data.ts:8](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/getter/sync-data.ts#L8)*

___
<a id="percentbehindcurrent"></a>

###  percentBehindCurrent

**● percentBehindCurrent**: *`string`*

*Defined in [packages/augur-sdk/src/state/getter/sync-data.ts:10](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/getter/sync-data.ts#L10)*

___
<a id="syncdataparams"></a>

### `<Static>` SyncDataParams

**● SyncDataParams**: *`InterfaceType`<`object`, `object`, `object`, `unknown`>* =  t.type({})

*Defined in [packages/augur-sdk/src/state/getter/sync-data.ts:14](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/getter/sync-data.ts#L14)*

___

## Methods

<a id="getsyncdata"></a>

### `<Static>` getSyncData

▸ **getSyncData**(augur: *[Augur](api-classes-packages-augur-sdk-src-augur-augur.md)*, db: *[DB](api-classes-packages-augur-sdk-src-state-db-db-db.md)*, params: *`t.TypeOf`<`InterfaceType`>*): `Promise`<[SyncData](api-classes-packages-augur-sdk-src-state-getter-sync-data-syncdata.md)>

*Defined in [packages/augur-sdk/src/state/getter/sync-data.ts:17](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/getter/sync-data.ts#L17)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| augur | [Augur](api-classes-packages-augur-sdk-src-augur-augur.md) |
| db | [DB](api-classes-packages-augur-sdk-src-state-db-db-db.md) |
| params | `t.TypeOf`<`InterfaceType`> |

**Returns:** `Promise`<[SyncData](api-classes-packages-augur-sdk-src-state-getter-sync-data-syncdata.md)>

___

