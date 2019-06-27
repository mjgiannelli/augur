---
id: api-modules-packages-augur-sdk-src-state-getter-trading-module
title: packages/augur-sdk/src/state/getter/Trading Module
sidebar_label: packages/augur-sdk/src/state/getter/Trading
---

[@augurproject/sdk](api-readme.md) > [[packages/augur-sdk/src/state/getter/Trading Module]](api-modules-packages-augur-sdk-src-state-getter-trading-module.md)

## Module

### Enumerations

* [OrderState](api-enums-packages-augur-sdk-src-state-getter-trading-orderstate.md)

### Classes

* [Trading](api-classes-packages-augur-sdk-src-state-getter-trading-trading.md)

### Interfaces

* [AllOrders](api-interfaces-packages-augur-sdk-src-state-getter-trading-allorders.md)
* [BetterWorseResult](api-interfaces-packages-augur-sdk-src-state-getter-trading-betterworseresult.md)
* [MarketTrade](api-interfaces-packages-augur-sdk-src-state-getter-trading-markettrade.md)
* [MarketTradingHistory](api-interfaces-packages-augur-sdk-src-state-getter-trading-markettradinghistory.md)
* [Order](api-interfaces-packages-augur-sdk-src-state-getter-trading-order.md)
* [Orders](api-interfaces-packages-augur-sdk-src-state-getter-trading-orders.md)

### Variables

* [AllOrdersParams](api-modules-packages-augur-sdk-src-state-getter-trading-module.md#allordersparams)
* [BetterWorseOrdersParams](api-modules-packages-augur-sdk-src-state-getter-trading-module.md#betterworseordersparams)
* [MakerTaker](api-modules-packages-augur-sdk-src-state-getter-trading-module.md#makertaker)
* [OrderType](api-modules-packages-augur-sdk-src-state-getter-trading-module.md#ordertype)
* [OrdersParams](api-modules-packages-augur-sdk-src-state-getter-trading-module.md#ordersparams)
* [OutcomeParam](api-modules-packages-augur-sdk-src-state-getter-trading-module.md#outcomeparam)
* [TradingHistoryParams](api-modules-packages-augur-sdk-src-state-getter-trading-module.md#tradinghistoryparams)
* [ZERO](api-modules-packages-augur-sdk-src-state-getter-trading-module.md#zero)

### Functions

* [filterMarketsByReportingState](api-modules-packages-augur-sdk-src-state-getter-trading-module.md#filtermarketsbyreportingstate)

### Object literals

* [MakerTakerValues](api-modules-packages-augur-sdk-src-state-getter-trading-module.md#makertakervalues)

---

## Variables

<a id="allordersparams"></a>

### `<Const>` AllOrdersParams

**● AllOrdersParams**: *`PartialType`<`object`, `object`, `object`, `unknown`>* =  t.partial({
  account: t.string,
  ignoreReportingStates: t.array(t.string),
  makerTaker: MakerTaker,
})

*Defined in [packages/augur-sdk/src/state/getter/Trading.ts:49](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/getter/Trading.ts#L49)*

___
<a id="betterworseordersparams"></a>

### `<Const>` BetterWorseOrdersParams

**● BetterWorseOrdersParams**: *`InterfaceType`<`object`, `object`, `object`, `unknown`>* =  t.type({
  marketId: t.string,
  outcome: t.number,
  orderType: OrderType,
  price: t.number,
})

*Defined in [packages/augur-sdk/src/state/getter/Trading.ts:140](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/getter/Trading.ts#L140)*

___
<a id="makertaker"></a>

### `<Const>` MakerTaker

**● MakerTaker**: *`KeyofType`<`object`>* =  t.keyof(MakerTakerValues)

*Defined in [packages/augur-sdk/src/state/getter/Trading.ts:47](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/getter/Trading.ts#L47)*

___
<a id="ordertype"></a>

### `<Const>` OrderType

**● OrderType**: *`KeyofType`<`object`>* =  t.keyof({
  buy: null,
  sell: null,
})

*Defined in [packages/augur-sdk/src/state/getter/Trading.ts:135](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/getter/Trading.ts#L135)*

___
<a id="ordersparams"></a>

### `<Const>` OrdersParams

**● OrdersParams**: *`PartialType`<`object`, `object`, `object`, `unknown`>* =  t.partial({
  universe: t.string,
  marketId: t.string,
  outcome: OutcomeParam,
  orderType: t.string,
  account: t.string,
  orderState: t.string,
  ignoreReportingStates: t.array(t.string),
  makerTaker: MakerTaker,
  earliestCreationTime: t.number,
  latestCreationTime: t.number,
})

*Defined in [packages/augur-sdk/src/state/getter/Trading.ts:55](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/getter/Trading.ts#L55)*

___
<a id="outcomeparam"></a>

### `<Const>` OutcomeParam

**● OutcomeParam**: *`KeyofType`<`object`>* =  t.keyof({
  0: null,
  1: null,
  2: null,
  3: null,
  4: null,
  5: null,
  6: null,
  7: null,
})

*Defined in [packages/augur-sdk/src/state/getter/Trading.ts:30](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/getter/Trading.ts#L30)*

___
<a id="tradinghistoryparams"></a>

### `<Const>` TradingHistoryParams

**● TradingHistoryParams**: *`PartialType`<`object`, `object`, `object`, `unknown`>* =  t.partial({
  universe: t.string,
  account: t.string,
  marketIds: t.array(t.string),
  outcome: t.number,
  ignoreReportingStates: t.array(t.string),
  earliestCreationTime: t.number,
  latestCreationTime: t.number,
})

*Defined in [packages/augur-sdk/src/state/getter/Trading.ts:20](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/getter/Trading.ts#L20)*

___
<a id="zero"></a>

### `<Const>` ZERO

**● ZERO**: *`BigNumber`* =  new BigNumber(0)

*Defined in [packages/augur-sdk/src/state/getter/Trading.ts:18](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/getter/Trading.ts#L18)*

___

## Functions

<a id="filtermarketsbyreportingstate"></a>

###  filterMarketsByReportingState

▸ **filterMarketsByReportingState**(marketIds: *`string`[]*, db: *[DB](api-classes-packages-augur-sdk-src-state-db-db-db.md)*, ignoreReportingStates: *`string`[]*): `Promise`<`Dictionary`<[MarketCreatedLog](api-interfaces-packages-augur-sdk-src-state-logs-types-marketcreatedlog.md)>>

*Defined in [packages/augur-sdk/src/state/getter/Trading.ts:567](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/getter/Trading.ts#L567)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| marketIds | `string`[] |
| db | [DB](api-classes-packages-augur-sdk-src-state-db-db-db.md) |
| ignoreReportingStates | `string`[] |

**Returns:** `Promise`<`Dictionary`<[MarketCreatedLog](api-interfaces-packages-augur-sdk-src-state-logs-types-marketcreatedlog.md)>>

___

## Object literals

<a id="makertakervalues"></a>

### `<Const>` MakerTakerValues

**MakerTakerValues**: *`object`*

*Defined in [packages/augur-sdk/src/state/getter/Trading.ts:41](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/getter/Trading.ts#L41)*

<a id="makertakervalues.either"></a>

####  either

**● either**: *`string`* = "either"

*Defined in [packages/augur-sdk/src/state/getter/Trading.ts:42](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/getter/Trading.ts#L42)*

___
<a id="makertakervalues.maker"></a>

####  maker

**● maker**: *`string`* = "maker"

*Defined in [packages/augur-sdk/src/state/getter/Trading.ts:43](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/getter/Trading.ts#L43)*

___
<a id="makertakervalues.taker"></a>

####  taker

**● taker**: *`string`* = "taker"

*Defined in [packages/augur-sdk/src/state/getter/Trading.ts:44](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/getter/Trading.ts#L44)*

___

___

