---
id: api-classes-packages-augur-sdk-src-connector-connector-connector
title: Connector
sidebar_label: Connector
---

[@augurproject/sdk](api-readme.md) > [[packages/augur-sdk/src/connector/connector Module]](api-modules-packages-augur-sdk-src-connector-connector-module.md) > [Connector](api-classes-packages-augur-sdk-src-connector-connector-connector.md)

## Class

## Hierarchy

**Connector**

↳  [EmptyConnector](api-classes-packages-augur-sdk-src-connector-empty-connector-emptyconnector.md)

↳  [HTTPConnector](api-classes-packages-augur-sdk-src-connector-http-connector-httpconnector.md)

↳  [SEOConnector](api-classes-packages-augur-sdk-src-connector-seo-connector-seoconnector.md)

↳  [WebsocketConnector](api-classes-packages-augur-sdk-src-connector-ws-connector-websocketconnector.md)

### Properties

* [subscriptions](api-classes-packages-augur-sdk-src-connector-connector-connector.md#subscriptions)

### Methods

* [bindTo](api-classes-packages-augur-sdk-src-connector-connector-connector.md#bindto)
* [connect](api-classes-packages-augur-sdk-src-connector-connector-connector.md#connect)
* [disconnect](api-classes-packages-augur-sdk-src-connector-connector-connector.md#disconnect)
* [off](api-classes-packages-augur-sdk-src-connector-connector-connector.md#off)
* [on](api-classes-packages-augur-sdk-src-connector-connector-connector.md#on)

---

## Properties

<a id="subscriptions"></a>

###  subscriptions

**● subscriptions**: *`object`*

*Defined in [packages/augur-sdk/src/connector/connector.ts:6](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/connector/connector.ts#L6)*

#### Type declaration

[event: `string`]: `object`

 callback: [Callback](api-modules-packages-augur-sdk-src-connector-connector-module.md#callback)

 id: `string`

___

## Methods

<a id="bindto"></a>

### `<Abstract>` bindTo

▸ **bindTo**<`R`,`P`>(f: *`function`*): `function`

*Defined in [packages/augur-sdk/src/connector/connector.ts:13](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/connector/connector.ts#L13)*

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

### `<Abstract>` connect

▸ **connect**(ethNodeUrl: *`string`*, account?: *`string`*): `Promise`<`any`>

*Defined in [packages/augur-sdk/src/connector/connector.ts:9](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/connector/connector.ts#L9)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| ethNodeUrl | `string` |
| `Optional` account | `string` |

**Returns:** `Promise`<`any`>

___
<a id="disconnect"></a>

### `<Abstract>` disconnect

▸ **disconnect**(): `Promise`<`any`>

*Defined in [packages/augur-sdk/src/connector/connector.ts:10](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/connector/connector.ts#L10)*

**Returns:** `Promise`<`any`>

___
<a id="off"></a>

### `<Abstract>` off

▸ **off**(eventName: *[SubscriptionEventNames](api-enums-packages-augur-sdk-src-constants-subscriptioneventnames.md) \| `string`*): `Promise`<`void`>

*Defined in [packages/augur-sdk/src/connector/connector.ts:16](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/connector/connector.ts#L16)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| eventName | [SubscriptionEventNames](api-enums-packages-augur-sdk-src-constants-subscriptioneventnames.md) \| `string` |

**Returns:** `Promise`<`void`>

___
<a id="on"></a>

### `<Abstract>` on

▸ **on**(eventName: *[SubscriptionEventNames](api-enums-packages-augur-sdk-src-constants-subscriptioneventnames.md) \| `string`*, callback: *[Callback](api-modules-packages-augur-sdk-src-connector-connector-module.md#callback)*): `Promise`<`void`>

*Defined in [packages/augur-sdk/src/connector/connector.ts:15](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/connector/connector.ts#L15)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| eventName | [SubscriptionEventNames](api-enums-packages-augur-sdk-src-constants-subscriptioneventnames.md) \| `string` |
| callback | [Callback](api-modules-packages-augur-sdk-src-connector-connector-module.md#callback) |

**Returns:** `Promise`<`void`>

___

