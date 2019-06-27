---
id: api-classes-packages-augur-sdk-src-connector-seo-connector-seoconnector
title: SEOConnector
sidebar_label: SEOConnector
---

[@augurproject/sdk](api-readme.md) > [[packages/augur-sdk/src/connector/seo-connector Module]](api-modules-packages-augur-sdk-src-connector-seo-connector-module.md) > [SEOConnector](api-classes-packages-augur-sdk-src-connector-seo-connector-seoconnector.md)

## Class

## Hierarchy

 [Connector](api-classes-packages-augur-sdk-src-connector-connector-connector.md)

**↳ SEOConnector**

### Properties

* [api](api-classes-packages-augur-sdk-src-connector-seo-connector-seoconnector.md#api)
* [events](api-classes-packages-augur-sdk-src-connector-seo-connector-seoconnector.md#events)
* [subscriptions](api-classes-packages-augur-sdk-src-connector-seo-connector-seoconnector.md#subscriptions)

### Methods

* [bindTo](api-classes-packages-augur-sdk-src-connector-seo-connector-seoconnector.md#bindto)
* [connect](api-classes-packages-augur-sdk-src-connector-seo-connector-seoconnector.md#connect)
* [disconnect](api-classes-packages-augur-sdk-src-connector-seo-connector-seoconnector.md#disconnect)
* [off](api-classes-packages-augur-sdk-src-connector-seo-connector-seoconnector.md#off)
* [on](api-classes-packages-augur-sdk-src-connector-seo-connector-seoconnector.md#on)

---

## Properties

<a id="api"></a>

### `<Private>` api

**● api**: *[API](api-classes-packages-augur-sdk-src-state-getter-api-api.md)*

*Defined in [packages/augur-sdk/src/connector/seo-connector.ts:9](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/connector/seo-connector.ts#L9)*

___
<a id="events"></a>

### `<Private>` events

**● events**: *[Subscriptions](api-classes-packages-augur-sdk-src-subscriptions-subscriptions.md)* =  new Subscriptions(augurEmitter)

*Defined in [packages/augur-sdk/src/connector/seo-connector.ts:10](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/connector/seo-connector.ts#L10)*

___
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

*Defined in [packages/augur-sdk/src/connector/seo-connector.ts:20](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/connector/seo-connector.ts#L20)*

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

*Defined in [packages/augur-sdk/src/connector/seo-connector.ts:12](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/connector/seo-connector.ts#L12)*

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

*Defined in [packages/augur-sdk/src/connector/seo-connector.ts:16](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/connector/seo-connector.ts#L16)*

**Returns:** `Promise`<`any`>

___
<a id="off"></a>

###  off

▸ **off**(eventName: *[SubscriptionEventNames](api-enums-packages-augur-sdk-src-constants-subscriptioneventnames.md) \| `string`*): `Promise`<`void`>

*Overrides [Connector](api-classes-packages-augur-sdk-src-connector-connector-connector.md).[off](api-classes-packages-augur-sdk-src-connector-connector-connector.md#off)*

*Defined in [packages/augur-sdk/src/connector/seo-connector.ts:31](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/connector/seo-connector.ts#L31)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| eventName | [SubscriptionEventNames](api-enums-packages-augur-sdk-src-constants-subscriptioneventnames.md) \| `string` |

**Returns:** `Promise`<`void`>

___
<a id="on"></a>

###  on

▸ **on**(eventName: *[SubscriptionEventNames](api-enums-packages-augur-sdk-src-constants-subscriptioneventnames.md) \| `string`*, callback: *[Callback](api-modules-packages-augur-sdk-src-connector-connector-module.md#callback)*): `Promise`<`void`>

*Overrides [Connector](api-classes-packages-augur-sdk-src-connector-connector-connector.md).[on](api-classes-packages-augur-sdk-src-connector-connector-connector.md#on)*

*Defined in [packages/augur-sdk/src/connector/seo-connector.ts:26](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/connector/seo-connector.ts#L26)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| eventName | [SubscriptionEventNames](api-enums-packages-augur-sdk-src-constants-subscriptioneventnames.md) \| `string` |
| callback | [Callback](api-modules-packages-augur-sdk-src-connector-connector-module.md#callback) |

**Returns:** `Promise`<`void`>

___

