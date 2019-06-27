---
id: api-classes-packages-augur-sdk-src-state-controller-controller
title: Controller
sidebar_label: Controller
---

[@augurproject/sdk](api-readme.md) > [[packages/augur-sdk/src/state/Controller Module]](api-modules-packages-augur-sdk-src-state-controller-module.md) > [Controller](api-classes-packages-augur-sdk-src-state-controller-controller.md)

## Class

## Hierarchy

**Controller**

### Constructors

* [constructor](api-classes-packages-augur-sdk-src-state-controller-controller.md#constructor)

### Properties

* [augur](api-classes-packages-augur-sdk-src-state-controller-controller.md#augur)
* [blockAndLogStreamerListener](api-classes-packages-augur-sdk-src-state-controller-controller.md#blockandlogstreamerlistener)
* [db](api-classes-packages-augur-sdk-src-state-controller-controller.md#db)

### Methods

* [fullTextSearch](api-classes-packages-augur-sdk-src-state-controller-controller.md#fulltextsearch)
* [run](api-classes-packages-augur-sdk-src-state-controller-controller.md#run)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Controller**(augur: *[Augur](api-classes-packages-augur-sdk-src-augur-augur.md)*, db: *`Promise`<[DB](api-classes-packages-augur-sdk-src-state-db-db-db.md)>*, blockAndLogStreamerListener: *[IBlockAndLogStreamerListener](api-interfaces-packages-augur-sdk-src-state-db-blockandlogstreamerlistener-iblockandlogstreamerlistener.md)*): [Controller](api-classes-packages-augur-sdk-src-state-controller-controller.md)

*Defined in [packages/augur-sdk/src/state/Controller.ts:7](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/Controller.ts#L7)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| augur | [Augur](api-classes-packages-augur-sdk-src-augur-augur.md) |
| db | `Promise`<[DB](api-classes-packages-augur-sdk-src-state-db-db-db.md)> |
| blockAndLogStreamerListener | [IBlockAndLogStreamerListener](api-interfaces-packages-augur-sdk-src-state-db-blockandlogstreamerlistener-iblockandlogstreamerlistener.md) |

**Returns:** [Controller](api-classes-packages-augur-sdk-src-state-controller-controller.md)

___

## Properties

<a id="augur"></a>

### `<Private>` augur

**● augur**: *[Augur](api-classes-packages-augur-sdk-src-augur-augur.md)*

*Defined in [packages/augur-sdk/src/state/Controller.ts:10](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/Controller.ts#L10)*

___
<a id="blockandlogstreamerlistener"></a>

### `<Private>` blockAndLogStreamerListener

**● blockAndLogStreamerListener**: *[IBlockAndLogStreamerListener](api-interfaces-packages-augur-sdk-src-state-db-blockandlogstreamerlistener-iblockandlogstreamerlistener.md)*

*Defined in [packages/augur-sdk/src/state/Controller.ts:12](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/Controller.ts#L12)*

___
<a id="db"></a>

### `<Private>` db

**● db**: *`Promise`<[DB](api-classes-packages-augur-sdk-src-state-db-db-db.md)>*

*Defined in [packages/augur-sdk/src/state/Controller.ts:11](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/Controller.ts#L11)*

___

## Methods

<a id="fulltextsearch"></a>

###  fullTextSearch

▸ **fullTextSearch**(eventName: *`string`*, query: *`string`*): `Promise`<`object`[]>

*Defined in [packages/augur-sdk/src/state/Controller.ts:16](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/Controller.ts#L16)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| eventName | `string` |
| query | `string` |

**Returns:** `Promise`<`object`[]>

___
<a id="run"></a>

###  run

▸ **run**(): `Promise`<`void`>

*Defined in [packages/augur-sdk/src/state/Controller.ts:21](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/Controller.ts#L21)*

**Returns:** `Promise`<`void`>

___

