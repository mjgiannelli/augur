---
id: api-classes-packages-augur-sdk-src-augur-augur
title: Augur
sidebar_label: Augur
---

[@augurproject/sdk](api-readme.md) > [[packages/augur-sdk/src/Augur Module]](api-modules-packages-augur-sdk-src-augur-module.md) > [Augur](api-classes-packages-augur-sdk-src-augur-augur.md)

## Class

## Type parameters
#### TProvider :  [Provider](api-interfaces-packages-augur-sdk-src-ethereum-provider-provider.md)
## Hierarchy

**Augur**

### Constructors

* [constructor](api-classes-packages-augur-sdk-src-augur-augur.md#constructor)

### Properties

* [addresses](api-classes-packages-augur-sdk-src-augur-augur.md#addresses)
* [contracts](api-classes-packages-augur-sdk-src-augur-augur.md#contracts)
* [customEvents](api-classes-packages-augur-sdk-src-augur-augur.md#customevents)
* [dependencies](api-classes-packages-augur-sdk-src-augur-augur.md#dependencies)
* [events](api-classes-packages-augur-sdk-src-augur-augur.md#events)
* [genericEventNames](api-classes-packages-augur-sdk-src-augur-augur.md#genericeventnames)
* [getAllOrders](api-classes-packages-augur-sdk-src-augur-augur.md#getallorders)
* [getMarketOrderBook](api-classes-packages-augur-sdk-src-augur-augur.md#getmarketorderbook)
* [getMarketsInfo](api-classes-packages-augur-sdk-src-augur-augur.md#getmarketsinfo)
* [getTradingHistory](api-classes-packages-augur-sdk-src-augur-augur.md#gettradinghistory)
* [getTradingOrders](api-classes-packages-augur-sdk-src-augur-augur.md#gettradingorders)
* [market](api-classes-packages-augur-sdk-src-augur-augur.md#market)
* [networkId](api-classes-packages-augur-sdk-src-augur-augur.md#networkid)
* [provider](api-classes-packages-augur-sdk-src-augur-augur.md#provider)
* [trade](api-classes-packages-augur-sdk-src-augur-augur.md#trade)
* [userSpecificEvents](api-classes-packages-augur-sdk-src-augur-augur.md#userspecificevents)
* [connector](api-classes-packages-augur-sdk-src-augur-augur.md#connector)

### Methods

* [bindTo](api-classes-packages-augur-sdk-src-augur-augur.md#bindto)
* [connect](api-classes-packages-augur-sdk-src-augur-augur.md#connect)
* [createCategoricalMarket](api-classes-packages-augur-sdk-src-augur-augur.md#createcategoricalmarket)
* [createScalarMarket](api-classes-packages-augur-sdk-src-augur-augur.md#createscalarmarket)
* [createYesNoMarket](api-classes-packages-augur-sdk-src-augur-augur.md#createyesnomarket)
* [deRegisterAllTransactionStatusCallbacks](api-classes-packages-augur-sdk-src-augur-augur.md#deregisteralltransactionstatuscallbacks)
* [deRegisterTransactionStatusCallback](api-classes-packages-augur-sdk-src-augur-augur.md#deregistertransactionstatuscallback)
* [disconnect](api-classes-packages-augur-sdk-src-augur-augur.md#disconnect)
* [getAccount](api-classes-packages-augur-sdk-src-augur-augur.md#getaccount)
* [getEthBalance](api-classes-packages-augur-sdk-src-augur-augur.md#getethbalance)
* [getGasPrice](api-classes-packages-augur-sdk-src-augur-augur.md#getgasprice)
* [getMarket](api-classes-packages-augur-sdk-src-augur-augur.md#getmarket)
* [getMarkets](api-classes-packages-augur-sdk-src-augur-augur.md#getmarkets)
* [getOrders](api-classes-packages-augur-sdk-src-augur-augur.md#getorders)
* [getSyncData](api-classes-packages-augur-sdk-src-augur-augur.md#getsyncdata)
* [getTimestamp](api-classes-packages-augur-sdk-src-augur-augur.md#gettimestamp)
* [getTransaction](api-classes-packages-augur-sdk-src-augur-augur.md#gettransaction)
* [getUniverse](api-classes-packages-augur-sdk-src-augur-augur.md#getuniverse)
* [listAccounts](api-classes-packages-augur-sdk-src-augur-augur.md#listaccounts)
* [off](api-classes-packages-augur-sdk-src-augur-augur.md#off)
* [on](api-classes-packages-augur-sdk-src-augur-augur.md#on)
* [placeTrade](api-classes-packages-augur-sdk-src-augur-augur.md#placetrade)
* [registerTransactionStatusCallback](api-classes-packages-augur-sdk-src-augur-augur.md#registertransactionstatuscallback)
* [simulateTrade](api-classes-packages-augur-sdk-src-augur-augur.md#simulatetrade)
* [simulateTradeGasLimit](api-classes-packages-augur-sdk-src-augur-augur.md#simulatetradegaslimit)
* [create](api-classes-packages-augur-sdk-src-augur-augur.md#create)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Augur**(provider: *`TProvider`*, dependencies: *`ContractDependenciesEthers`*, networkId: *`NetworkId`*, addresses: *`ContractAddresses`*, connector?: *[Connector](api-classes-packages-augur-sdk-src-connector-connector-connector.md)*): [Augur](api-classes-packages-augur-sdk-src-augur-augur.md)

*Defined in [packages/augur-sdk/src/Augur.ts:94](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/Augur.ts#L94)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| provider | `TProvider` | - |
| dependencies | `ContractDependenciesEthers` | - |
| networkId | `NetworkId` | - |
| addresses | `ContractAddresses` | - |
| `Default value` connector | [Connector](api-classes-packages-augur-sdk-src-connector-connector-connector.md) |  new EmptyConnector() |

**Returns:** [Augur](api-classes-packages-augur-sdk-src-augur-augur.md)

___

## Properties

<a id="addresses"></a>

###  addresses

**● addresses**: *`ContractAddresses`*

*Defined in [packages/augur-sdk/src/Augur.ts:34](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/Augur.ts#L34)*

___
<a id="contracts"></a>

###  contracts

**● contracts**: *[Contracts](api-classes-packages-augur-sdk-src-api-contracts-contracts.md)*

*Defined in [packages/augur-sdk/src/Augur.ts:35](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/Augur.ts#L35)*

___
<a id="customevents"></a>

###  customEvents

**● customEvents**: *`Array`<[CustomEvent](api-interfaces-packages-augur-sdk-src-augur-customevent.md)>* =  [
    {
      "name": "CurrentOrders",
      "eventName": "OrderEvent",
      "idFields": ["orderId"]
    },
  ]

*Defined in [packages/augur-sdk/src/Augur.ts:68](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/Augur.ts#L68)*

___
<a id="dependencies"></a>

### `<Private>` dependencies

**● dependencies**: *`ContractDependenciesEthers`*

*Defined in [packages/augur-sdk/src/Augur.ts:30](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/Augur.ts#L30)*

___
<a id="events"></a>

###  events

**● events**: *[Events](api-classes-packages-augur-sdk-src-api-events-events.md)*

*Defined in [packages/augur-sdk/src/Augur.ts:33](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/Augur.ts#L33)*

___
<a id="genericeventnames"></a>

###  genericEventNames

**● genericEventNames**: *`Array`<`string`>* =  [
    "CompleteSetsPurchased",
    "CompleteSetsSold",
    "DisputeCrowdsourcerCompleted",
    "DisputeCrowdsourcerContribution",
    "DisputeCrowdsourcerCreated",
    "DisputeCrowdsourcerRedeemed",
    "DisputeWindowCreated",
    "InitialReporterRedeemed",
    "InitialReportSubmitted",
    "InitialReporterTransferred",
    "MarketCreated",
    "MarketFinalized",
    "MarketMigrated",
    "MarketParticipantsDisavowed",
    "MarketTransferred",
    "MarketVolumeChanged",
    "OrderEvent",
    "ParticipationTokensRedeemed",
    "ReportingParticipantDisavowed",
    "TimestampSet",
    "TradingProceedsClaimed",
    "UniverseCreated",
    "UniverseForked",
  ]

*Defined in [packages/augur-sdk/src/Augur.ts:42](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/Augur.ts#L42)*

___
<a id="getallorders"></a>

###  getAllOrders

**● getAllOrders**: *`function`* =  this.bindTo(Trading.getAllOrders)

*Defined in [packages/augur-sdk/src/Augur.ts:211](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/Augur.ts#L211)*

#### Type declaration
▸(params: *`P`*): `Promise`<`R`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| params | `P` |

**Returns:** `Promise`<`R`>

___
<a id="getmarketorderbook"></a>

###  getMarketOrderBook

**● getMarketOrderBook**: *`function`* =  this.bindTo(Markets.getMarketOrderBook)

*Defined in [packages/augur-sdk/src/Augur.ts:213](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/Augur.ts#L213)*

#### Type declaration
▸(params: *`P`*): `Promise`<`R`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| params | `P` |

**Returns:** `Promise`<`R`>

___
<a id="getmarketsinfo"></a>

###  getMarketsInfo

**● getMarketsInfo**: *`function`* =  this.bindTo(Markets.getMarketsInfo)

*Defined in [packages/augur-sdk/src/Augur.ts:205](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/Augur.ts#L205)*

#### Type declaration
▸(params: *`P`*): `Promise`<`R`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| params | `P` |

**Returns:** `Promise`<`R`>

___
<a id="gettradinghistory"></a>

###  getTradingHistory

**● getTradingHistory**: *`function`* =  this.bindTo(Trading.getTradingHistory)

*Defined in [packages/augur-sdk/src/Augur.ts:210](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/Augur.ts#L210)*

#### Type declaration
▸(params: *`P`*): `Promise`<`R`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| params | `P` |

**Returns:** `Promise`<`R`>

___
<a id="gettradingorders"></a>

###  getTradingOrders

**● getTradingOrders**: *`function`* =  this.bindTo(Trading.getOrders)

*Defined in [packages/augur-sdk/src/Augur.ts:212](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/Augur.ts#L212)*

#### Type declaration
▸(params: *`P`*): `Promise`<`R`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| params | `P` |

**Returns:** `Promise`<`R`>

___
<a id="market"></a>

###  market

**● market**: *[Market](api-classes-packages-augur-sdk-src-api-market-market.md)*

*Defined in [packages/augur-sdk/src/Augur.ts:37](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/Augur.ts#L37)*

___
<a id="networkid"></a>

###  networkId

**● networkId**: *`NetworkId`*

*Defined in [packages/augur-sdk/src/Augur.ts:32](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/Augur.ts#L32)*

___
<a id="provider"></a>

###  provider

**● provider**: *`TProvider`*

*Defined in [packages/augur-sdk/src/Augur.ts:29](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/Augur.ts#L29)*

___
<a id="trade"></a>

###  trade

**● trade**: *[Trade](api-classes-packages-augur-sdk-src-api-trade-trade.md)*

*Defined in [packages/augur-sdk/src/Augur.ts:36](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/Augur.ts#L36)*

___
<a id="userspecificevents"></a>

###  userSpecificEvents

**● userSpecificEvents**: *`Array`<[UserSpecificEvent](api-interfaces-packages-augur-sdk-src-augur-userspecificevent.md)>* =  [
    {
      "name": "TokensTransferred",
      "numAdditionalTopics": 3,
      "userTopicIndicies": [1, 2],
    },
    {
      "name": "ProfitLossChanged",
      "numAdditionalTopics": 3,
      "userTopicIndicies": [2],
    },
    {
      "name": "TokenBalanceChanged",
      "numAdditionalTopics": 2,
      "userTopicIndicies": [1],
      "idFields": ["token"]
    },
  ]

*Defined in [packages/augur-sdk/src/Augur.ts:77](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/Augur.ts#L77)*

___
<a id="connector"></a>

### `<Static>` connector

**● connector**: *[Connector](api-classes-packages-augur-sdk-src-connector-connector-connector.md)*

*Defined in [packages/augur-sdk/src/Augur.ts:38](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/Augur.ts#L38)*

___

## Methods

<a id="bindto"></a>

###  bindTo

▸ **bindTo**<`R`,`P`>(f: *`function`*): `function`

*Defined in [packages/augur-sdk/src/Augur.ts:183](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/Augur.ts#L183)*

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

*Defined in [packages/augur-sdk/src/Augur.ts:175](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/Augur.ts#L175)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| ethNodeUrl | `string` |
| `Optional` account | `string` |

**Returns:** `Promise`<`any`>

___
<a id="createcategoricalmarket"></a>

###  createCategoricalMarket

▸ **createCategoricalMarket**(params: *[CreateCategoricalMarketParams](api-interfaces-packages-augur-sdk-src-api-market-createcategoricalmarketparams.md)*): `Promise`<`Market`>

*Defined in [packages/augur-sdk/src/Augur.ts:227](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/Augur.ts#L227)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| params | [CreateCategoricalMarketParams](api-interfaces-packages-augur-sdk-src-api-market-createcategoricalmarketparams.md) |

**Returns:** `Promise`<`Market`>

___
<a id="createscalarmarket"></a>

###  createScalarMarket

▸ **createScalarMarket**(params: *[CreateScalarMarketParams](api-interfaces-packages-augur-sdk-src-api-market-createscalarmarketparams.md)*): `Promise`<`Market`>

*Defined in [packages/augur-sdk/src/Augur.ts:231](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/Augur.ts#L231)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| params | [CreateScalarMarketParams](api-interfaces-packages-augur-sdk-src-api-market-createscalarmarketparams.md) |

**Returns:** `Promise`<`Market`>

___
<a id="createyesnomarket"></a>

###  createYesNoMarket

▸ **createYesNoMarket**(params: *[CreateYesNoMarketParams](api-interfaces-packages-augur-sdk-src-api-market-createyesnomarketparams.md)*): `Promise`<`Market`>

*Defined in [packages/augur-sdk/src/Augur.ts:223](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/Augur.ts#L223)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| params | [CreateYesNoMarketParams](api-interfaces-packages-augur-sdk-src-api-market-createyesnomarketparams.md) |

**Returns:** `Promise`<`Market`>

___
<a id="deregisteralltransactionstatuscallbacks"></a>

###  deRegisterAllTransactionStatusCallbacks

▸ **deRegisterAllTransactionStatusCallbacks**(): `void`

*Defined in [packages/augur-sdk/src/Augur.ts:171](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/Augur.ts#L171)*

**Returns:** `void`

___
<a id="deregistertransactionstatuscallback"></a>

###  deRegisterTransactionStatusCallback

▸ **deRegisterTransactionStatusCallback**(key: *`string`*): `void`

*Defined in [packages/augur-sdk/src/Augur.ts:167](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/Augur.ts#L167)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` |

**Returns:** `void`

___
<a id="disconnect"></a>

###  disconnect

▸ **disconnect**(): `Promise`<`any`>

*Defined in [packages/augur-sdk/src/Augur.ts:179](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/Augur.ts#L179)*

**Returns:** `Promise`<`any`>

___
<a id="getaccount"></a>

###  getAccount

▸ **getAccount**(): `Promise`<`string`>

*Defined in [packages/augur-sdk/src/Augur.ts:147](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/Augur.ts#L147)*

**Returns:** `Promise`<`string`>

___
<a id="getethbalance"></a>

###  getEthBalance

▸ **getEthBalance**(address: *`string`*): `Promise`<`string`>

*Defined in [packages/augur-sdk/src/Augur.ts:137](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/Augur.ts#L137)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| address | `string` |

**Returns:** `Promise`<`string`>

___
<a id="getgasprice"></a>

###  getGasPrice

▸ **getGasPrice**(): `Promise`<`BigNumber`>

*Defined in [packages/augur-sdk/src/Augur.ts:142](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/Augur.ts#L142)*

**Returns:** `Promise`<`BigNumber`>

___
<a id="getmarket"></a>

###  getMarket

▸ **getMarket**(address: *`string`*): `Market`

*Defined in [packages/augur-sdk/src/Augur.ts:155](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/Augur.ts#L155)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| address | `string` |

**Returns:** `Market`

___
<a id="getmarkets"></a>

###  getMarkets

▸ **getMarkets**(params: *`object`*): `Promise`<`string`[]>

*Defined in [packages/augur-sdk/src/Augur.ts:199](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/Augur.ts#L199)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| params | `object` |

**Returns:** `Promise`<`string`[]>

___
<a id="getorders"></a>

###  getOrders

▸ **getOrders**(): `Orders`

*Defined in [packages/augur-sdk/src/Augur.ts:159](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/Augur.ts#L159)*

**Returns:** `Orders`

___
<a id="getsyncdata"></a>

###  getSyncData

▸ **getSyncData**(): `Promise`<[SyncData](api-classes-packages-augur-sdk-src-state-getter-sync-data-syncdata.md)>

*Defined in [packages/augur-sdk/src/Augur.ts:206](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/Augur.ts#L206)*

**Returns:** `Promise`<[SyncData](api-classes-packages-augur-sdk-src-state-getter-sync-data-syncdata.md)>

___
<a id="gettimestamp"></a>

###  getTimestamp

▸ **getTimestamp**(): `Promise`<`BigNumber`>

*Defined in [packages/augur-sdk/src/Augur.ts:133](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/Augur.ts#L133)*

**Returns:** `Promise`<`BigNumber`>

___
<a id="gettransaction"></a>

###  getTransaction

▸ **getTransaction**(hash: *`string`*): `Promise`<`string`>

*Defined in [packages/augur-sdk/src/Augur.ts:124](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/Augur.ts#L124)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| hash | `string` |

**Returns:** `Promise`<`string`>

___
<a id="getuniverse"></a>

###  getUniverse

▸ **getUniverse**(address: *`string`*): `Universe`

*Defined in [packages/augur-sdk/src/Augur.ts:151](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/Augur.ts#L151)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| address | `string` |

**Returns:** `Universe`

___
<a id="listaccounts"></a>

###  listAccounts

▸ **listAccounts**(): `Promise`<`string`[]>

*Defined in [packages/augur-sdk/src/Augur.ts:129](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/Augur.ts#L129)*

**Returns:** `Promise`<`string`[]>

___
<a id="off"></a>

###  off

▸ **off**(eventName: *[SubscriptionEventNames](api-enums-packages-augur-sdk-src-constants-subscriptioneventnames.md) \| `string`*): `Promise`<`void`>

*Defined in [packages/augur-sdk/src/Augur.ts:193](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/Augur.ts#L193)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| eventName | [SubscriptionEventNames](api-enums-packages-augur-sdk-src-constants-subscriptioneventnames.md) \| `string` |

**Returns:** `Promise`<`void`>

___
<a id="on"></a>

###  on

▸ **on**(eventName: *[SubscriptionEventNames](api-enums-packages-augur-sdk-src-constants-subscriptioneventnames.md) \| `string`*, callback: *[Callback](api-modules-packages-augur-sdk-src-connector-connector-module.md#callback)*): `Promise`<`void`>

*Defined in [packages/augur-sdk/src/Augur.ts:187](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/Augur.ts#L187)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| eventName | [SubscriptionEventNames](api-enums-packages-augur-sdk-src-constants-subscriptioneventnames.md) \| `string` |
| callback | [Callback](api-modules-packages-augur-sdk-src-connector-connector-module.md#callback) |

**Returns:** `Promise`<`void`>

___
<a id="placetrade"></a>

###  placeTrade

▸ **placeTrade**(params: *[PlaceTradeDisplayParams](api-interfaces-packages-augur-sdk-src-api-trade-placetradedisplayparams.md)*): `Promise`<`void`>

*Defined in [packages/augur-sdk/src/Augur.ts:219](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/Augur.ts#L219)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| params | [PlaceTradeDisplayParams](api-interfaces-packages-augur-sdk-src-api-trade-placetradedisplayparams.md) |

**Returns:** `Promise`<`void`>

___
<a id="registertransactionstatuscallback"></a>

###  registerTransactionStatusCallback

▸ **registerTransactionStatusCallback**(key: *`string`*, callback: *`TransactionStatusCallback`*): `void`

*Defined in [packages/augur-sdk/src/Augur.ts:163](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/Augur.ts#L163)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` |
| callback | `TransactionStatusCallback` |

**Returns:** `void`

___
<a id="simulatetrade"></a>

###  simulateTrade

▸ **simulateTrade**(params: *[PlaceTradeDisplayParams](api-interfaces-packages-augur-sdk-src-api-trade-placetradedisplayparams.md)*): `Promise`<[SimulateTradeData](api-interfaces-packages-augur-sdk-src-api-trade-simulatetradedata.md)>

*Defined in [packages/augur-sdk/src/Augur.ts:215](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/Augur.ts#L215)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| params | [PlaceTradeDisplayParams](api-interfaces-packages-augur-sdk-src-api-trade-placetradedisplayparams.md) |

**Returns:** `Promise`<[SimulateTradeData](api-interfaces-packages-augur-sdk-src-api-trade-simulatetradedata.md)>

___
<a id="simulatetradegaslimit"></a>

###  simulateTradeGasLimit

▸ **simulateTradeGasLimit**(params: *[PlaceTradeDisplayParams](api-interfaces-packages-augur-sdk-src-api-trade-placetradedisplayparams.md)*): `Promise`<`BigNumber`>

*Defined in [packages/augur-sdk/src/Augur.ts:235](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/Augur.ts#L235)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| params | [PlaceTradeDisplayParams](api-interfaces-packages-augur-sdk-src-api-trade-placetradedisplayparams.md) |

**Returns:** `Promise`<`BigNumber`>

___
<a id="create"></a>

### `<Static>` create

▸ **create**<`TProvider`>(provider: *`TProvider`*, dependencies: *`ContractDependenciesEthers`*, addresses: *`ContractAddresses`*, connector?: *[Connector](api-classes-packages-augur-sdk-src-connector-connector-connector.md)*): `Promise`<[Augur](api-classes-packages-augur-sdk-src-augur-augur.md)>

*Defined in [packages/augur-sdk/src/Augur.ts:111](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/Augur.ts#L111)*

**Type parameters:**

#### TProvider :  [Provider](api-interfaces-packages-augur-sdk-src-ethereum-provider-provider.md)
**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| provider | `TProvider` | - |
| dependencies | `ContractDependenciesEthers` | - |
| addresses | `ContractAddresses` | - |
| `Default value` connector | [Connector](api-classes-packages-augur-sdk-src-connector-connector-connector.md) |  new EmptyConnector() |

**Returns:** `Promise`<[Augur](api-classes-packages-augur-sdk-src-augur-augur.md)>

___

