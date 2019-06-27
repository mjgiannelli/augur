---
id: api-classes-packages-augur-sdk-src-connector-empty-connector-emptyconnector
title: EmptyConnector
sidebar_label: EmptyConnector
---

[@augurproject/sdk](api-readme.md) > [[packages/augur-sdk/src/connector/empty-connector Module]](api-modules-packages-augur-sdk-src-connector-empty-connector-module.md) > [EmptyConnector](api-classes-packages-augur-sdk-src-connector-empty-connector-emptyconnector.md)

## Class

## Hierarchy

 [Connector](api-classes-packages-augur-sdk-src-connector-connector-connector.md)

**↳ EmptyConnector**

### Properties

* [subscriptions](api-classes-packages-augur-sdk-src-connector-empty-connector-emptyconnector.md#subscriptions)

### Methods

* [bindTo](api-classes-packages-augur-sdk-src-connector-empty-connector-emptyconnector.md#bindto)
* [connect](api-classes-packages-augur-sdk-src-connector-empty-connector-emptyconnector.md#connect)
* [disconnect](api-classes-packages-augur-sdk-src-connector-empty-connector-emptyconnector.md#disconnect)
* [off](api-classes-packages-augur-sdk-src-connector-empty-connector-emptyconnector.md#off)
* [on](api-classes-packages-augur-sdk-src-connector-empty-connector-emptyconnector.md#on)

---

## Properties

<a id="subscriptions"></a>

###  subscriptions

**● subscriptions**: *`object`*

*Inherited from [Connector](api-classes-packages-augur-sdk-src-connector-connector-connector.md).[subscriptions](api-classes-packages-augur-sdk-src-connector-connector-connector.md#subscriptions)*

*Defined in [packages/augur-sdk/src/connector/connector.ts:6](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/connector/connector.ts#L6)*

#### Type declaration

[event: `string`]: `object`

 callback: [Callback](api-modules-packages-augur-sdk-src-connector-connector-module.md#callback)

 id: `string`

___

## Methods

<a id="bindto"></a>

###  bindTo

▸ **bindTo**<`R`,`P`>(f: *`function`*): `function`

*Overrides [Connector](api-classes-packages-augur-sdk-src-connector-connector-connector.md).[bindTo](api-classes-packages-augur-sdk-src-connector-connector-connector.md#bindto)*

*Defined in [packages/augur-sdk/src/connector/empty-connector.ts:13](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/connector/empty-connector.ts#L13)*

**Type parameters:**

#### R 
#### P 
**Parameters:**

| Name | Type |
| ------ | ------ |
| f | `function` |

**Returns:** `function`

___
<a id="connect"></a>

###  connect

▸ **connect**(ethNodeUrl: *`string`*, account?: *`string`*): `Promise`<`any`>

*Overrides [Connector](api-classes-packages-augur-sdk-src-connector-connector-connector.md).[connect](api-classes-packages-augur-sdk-src-connector-connector-connector.md#connect)*

*Defined in [packages/augur-sdk/src/connector/empty-connector.ts:5](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/connector/empty-connector.ts#L5)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| ethNodeUrl | `string` |
| `Optional` account | `string` |

**Returns:** `Promise`<`any`>

___
<a id="disconnect"></a>

###  disconnect

▸ **disconnect**(): `Promise`<`any`>

*Overrides [Connector](api-classes-packages-augur-sdk-src-connector-connector-connector.md).[disconnect](api-classes-packages-augur-sdk-src-connector-connector-connector.md#disconnect)*

*Defined in [packages/augur-sdk/src/connector/empty-connector.ts:9](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/connector/empty-connector.ts#L9)*

**Returns:** `Promise`<`any`>

___
<a id="off"></a>

###  off

▸ **off**(eventName: *[SubscriptionEventNames](api-enums-packages-augur-sdk-src-constants-subscriptioneventnames.md)*): `Promise`<`void`>

*Overrides [Connector](api-classes-packages-augur-sdk-src-connector-connector-connector.md).[off](api-classes-packages-augur-sdk-src-connector-connector-connector.md#off)*

*Defined in [packages/augur-sdk/src/connector/empty-connector.ts:22](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/connector/empty-connector.ts#L22)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| eventName | [SubscriptionEventNames](api-enums-packages-augur-sdk-src-constants-subscriptioneventnames.md) |

**Returns:** `Promise`<`void`>

___
<a id="on"></a>

###  on

▸ **on**(eventName: *[SubscriptionEventNames](api-enums-packages-augur-sdk-src-constants-subscriptioneventnames.md)*, callback: *[Callback](api-modules-packages-augur-sdk-src-connector-connector-module.md#callback)*): `Promise`<`void`>

*Overrides [Connector](api-classes-packages-augur-sdk-src-connector-connector-connector.md).[on](api-classes-packages-augur-sdk-src-connector-connector-connector.md#on)*

*Defined in [packages/augur-sdk/src/connector/empty-connector.ts:19](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/connector/empty-connector.ts#L19)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| eventName | [SubscriptionEventNames](api-enums-packages-augur-sdk-src-constants-subscriptioneventnames.md) |
| callback | [Callback](api-modules-packages-augur-sdk-src-connector-connector-module.md#callback) |

**Returns:** `Promise`<`void`>

___

