---
id: api-modules-packages-augur-sdk-src-state-index-module
title: packages/augur-sdk/src/state/index Module
sidebar_label: packages/augur-sdk/src/state/index
---

[@augurproject/sdk](api-readme.md) > [[packages/augur-sdk/src/state/index Module]](api-modules-packages-augur-sdk-src-state-index-module.md)

## Module

### Variables

* [settings](api-modules-packages-augur-sdk-src-state-index-module.md#settings)

### Functions

* [buildAPI](api-modules-packages-augur-sdk-src-state-index-module.md#buildapi)
* [buildDeps](api-modules-packages-augur-sdk-src-state-index-module.md#builddeps)
* [create](api-modules-packages-augur-sdk-src-state-index-module.md#create)

---

## Variables

<a id="settings"></a>

### `<Const>` settings

**● settings**: *`any`* =  require("./settings.json")

*Defined in [packages/augur-sdk/src/state/index.ts:14](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/index.ts#L14)*

___

## Functions

<a id="buildapi"></a>

###  buildAPI

▸ **buildAPI**(ethNodeUrl: *`string`*, account?: *`string`*, dbArgs?: *`DatabaseConfiguration`*): `Promise`<[API](api-classes-packages-augur-sdk-src-state-getter-api-api.md)>

*Defined in [packages/augur-sdk/src/state/index.ts:47](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/index.ts#L47)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| ethNodeUrl | `string` | - |
| `Optional` account | `string` | - |
| `Default value` dbArgs | `DatabaseConfiguration` |  {} |

**Returns:** `Promise`<[API](api-classes-packages-augur-sdk-src-state-getter-api-api.md)>

___
<a id="builddeps"></a>

###  buildDeps

▸ **buildDeps**(ethNodeUrl: *`string`*, account?: *`string`*, dbArgs?: *`PouchDB.Configuration.DatabaseConfiguration`*): `Promise`<`object`>

*Defined in [packages/augur-sdk/src/state/index.ts:17](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/index.ts#L17)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| ethNodeUrl | `string` | - |
| `Optional` account | `string` | - |
| `Default value` dbArgs | `PouchDB.Configuration.DatabaseConfiguration` |  {} |

**Returns:** `Promise`<`object`>

___
<a id="create"></a>

###  create

▸ **create**(ethNodeUrl: *`string`*, account?: *`string`*, dbArgs?: *`DatabaseConfiguration`*): `Promise`<`object`>

*Defined in [packages/augur-sdk/src/state/index.ts:38](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/index.ts#L38)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| ethNodeUrl | `string` | - |
| `Optional` account | `string` | - |
| `Default value` dbArgs | `DatabaseConfiguration` |  {} |

**Returns:** `Promise`<`object`>

___

