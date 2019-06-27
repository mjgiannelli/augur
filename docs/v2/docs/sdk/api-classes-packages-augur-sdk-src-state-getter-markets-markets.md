---
id: api-classes-packages-augur-sdk-src-state-getter-markets-markets
title: Markets
sidebar_label: Markets
---

[@augurproject/sdk](api-readme.md) > [[packages/augur-sdk/src/state/getter/Markets Module]](api-modules-packages-augur-sdk-src-state-getter-markets-module.md) > [Markets](api-classes-packages-augur-sdk-src-state-getter-markets-markets.md)

## Class

## Hierarchy

**Markets**

### Properties

* [getMarketOrderBookParams](api-classes-packages-augur-sdk-src-state-getter-markets-markets.md#getmarketorderbookparams)
* [getMarketPriceCandlestickParams](api-classes-packages-augur-sdk-src-state-getter-markets-markets.md#getmarketpricecandlestickparams)
* [getMarketPriceHistoryParams](api-classes-packages-augur-sdk-src-state-getter-markets-markets.md#getmarketpricehistoryparams)
* [getMarketsInfoParams](api-classes-packages-augur-sdk-src-state-getter-markets-markets.md#getmarketsinfoparams)
* [getMarketsParams](api-classes-packages-augur-sdk-src-state-getter-markets-markets.md#getmarketsparams)
* [getTopicsParams](api-classes-packages-augur-sdk-src-state-getter-markets-markets.md#gettopicsparams)

### Methods

* [getMarketOrderBook](api-classes-packages-augur-sdk-src-state-getter-markets-markets.md#getmarketorderbook)
* [getMarketPriceCandlesticks](api-classes-packages-augur-sdk-src-state-getter-markets-markets.md#getmarketpricecandlesticks)
* [getMarketPriceHistory](api-classes-packages-augur-sdk-src-state-getter-markets-markets.md#getmarketpricehistory)
* [getMarkets](api-classes-packages-augur-sdk-src-state-getter-markets-markets.md#getmarkets)
* [getMarketsInfo](api-classes-packages-augur-sdk-src-state-getter-markets-markets.md#getmarketsinfo)
* [getTopics](api-classes-packages-augur-sdk-src-state-getter-markets-markets.md#gettopics)

---

## Properties

<a id="getmarketorderbookparams"></a>

### `<Static>` getMarketOrderBookParams

**● getMarketOrderBookParams**: *`IntersectionType`<[`InterfaceType`<`object`, `object`, `object`, `unknown`>, `PartialType`<`object`, `object`, `object`, `unknown`>], `object`, `object`, `unknown`>* =  t.intersection([
    t.type({ marketId: t.string }),
    t.partial({
      outcomeId: t.union([outcomeIdType, t.array(outcomeIdType)]),
    }),
  ])

*Defined in [packages/augur-sdk/src/state/getter/Markets.ts:157](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/getter/Markets.ts#L157)*

___
<a id="getmarketpricecandlestickparams"></a>

### `<Static>` getMarketPriceCandlestickParams

**● getMarketPriceCandlestickParams**: *`InterfaceType`<`object`, `object`, `object`, `unknown`>* =  t.type({
    marketId: t.string,
    outcome: outcomeIdType,
    start: t.union([t.number, t.null, t.undefined]),
    end: t.union([t.number, t.null, t.undefined]),
    period: t.union([t.number, t.null, t.undefined]),
  })

*Defined in [packages/augur-sdk/src/state/getter/Markets.ts:144](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/getter/Markets.ts#L144)*

___
<a id="getmarketpricehistoryparams"></a>

### `<Static>` getMarketPriceHistoryParams

**● getMarketPriceHistoryParams**: *`InterfaceType`<`object`, `object`, `object`, `unknown`>* =  t.type({ marketId: t.string })

*Defined in [packages/augur-sdk/src/state/getter/Markets.ts:151](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/getter/Markets.ts#L151)*

___
<a id="getmarketsinfoparams"></a>

### `<Static>` getMarketsInfoParams

**● getMarketsInfoParams**: *`InterfaceType`<`object`, `object`, `object`, `unknown`>* =  t.type({ marketIds: t.array(t.string) })

*Defined in [packages/augur-sdk/src/state/getter/Markets.ts:156](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/getter/Markets.ts#L156)*

___
<a id="getmarketsparams"></a>

### `<Static>` getMarketsParams

**● getMarketsParams**: *`IntersectionType`<[`IntersectionType`<[`InterfaceType`<`object`, `object`, `object`, `unknown`>, `PartialType`<`object`, `object`, `object`, `unknown`>], `object`, `object`, `unknown`>, `PartialType`<`object`, `object`, `object`, `unknown`>], `object`, `object`, `unknown`>* =  t.intersection([
    getMarketsParamsSpecific,
    SortLimit,
  ])

*Defined in [packages/augur-sdk/src/state/getter/Markets.ts:152](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/getter/Markets.ts#L152)*

___
<a id="gettopicsparams"></a>

### `<Static>` getTopicsParams

**● getTopicsParams**: *`InterfaceType`<`object`, `object`, `object`, `unknown`>* =  t.type({ universe: t.string })

*Defined in [packages/augur-sdk/src/state/getter/Markets.ts:164](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/getter/Markets.ts#L164)*

___

## Methods

<a id="getmarketorderbook"></a>

### `<Static>` getMarketOrderBook

▸ **getMarketOrderBook**(augur: *[Augur](api-classes-packages-augur-sdk-src-augur-augur.md)*, db: *[DB](api-classes-packages-augur-sdk-src-state-db-db-db.md)*, params: *`t.TypeOf`<`IntersectionType`>*): `Promise`<[MarketOrderBook](api-interfaces-packages-augur-sdk-src-state-getter-markets-marketorderbook.md)>

*Defined in [packages/augur-sdk/src/state/getter/Markets.ts:454](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/getter/Markets.ts#L454)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| augur | [Augur](api-classes-packages-augur-sdk-src-augur-augur.md) |
| db | [DB](api-classes-packages-augur-sdk-src-state-db-db-db.md) |
| params | `t.TypeOf`<`IntersectionType`> |

**Returns:** `Promise`<[MarketOrderBook](api-interfaces-packages-augur-sdk-src-state-getter-markets-marketorderbook.md)>

___
<a id="getmarketpricecandlesticks"></a>

### `<Static>` getMarketPriceCandlesticks

▸ **getMarketPriceCandlesticks**(augur: *[Augur](api-classes-packages-augur-sdk-src-augur-augur.md)*, db: *[DB](api-classes-packages-augur-sdk-src-state-db-db-db.md)*, params: *`t.TypeOf`<`InterfaceType`>*): `Promise`<[MarketPriceCandlesticks](api-interfaces-packages-augur-sdk-src-state-getter-markets-marketpricecandlesticks.md)>

*Defined in [packages/augur-sdk/src/state/getter/Markets.ts:167](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/getter/Markets.ts#L167)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| augur | [Augur](api-classes-packages-augur-sdk-src-augur-augur.md) |
| db | [DB](api-classes-packages-augur-sdk-src-state-db-db-db.md) |
| params | `t.TypeOf`<`InterfaceType`> |

**Returns:** `Promise`<[MarketPriceCandlesticks](api-interfaces-packages-augur-sdk-src-state-getter-markets-marketpricecandlesticks.md)>

___
<a id="getmarketpricehistory"></a>

### `<Static>` getMarketPriceHistory

▸ **getMarketPriceHistory**(augur: *[Augur](api-classes-packages-augur-sdk-src-augur-augur.md)*, db: *[DB](api-classes-packages-augur-sdk-src-state-db-db-db.md)*, params: *`t.TypeOf`<`InterfaceType`>*): `Promise`<[MarketPriceHistory](api-interfaces-packages-augur-sdk-src-state-getter-markets-marketpricehistory.md)>

*Defined in [packages/augur-sdk/src/state/getter/Markets.ts:259](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/getter/Markets.ts#L259)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| augur | [Augur](api-classes-packages-augur-sdk-src-augur-augur.md) |
| db | [DB](api-classes-packages-augur-sdk-src-state-db-db-db.md) |
| params | `t.TypeOf`<`InterfaceType`> |

**Returns:** `Promise`<[MarketPriceHistory](api-interfaces-packages-augur-sdk-src-state-getter-markets-marketpricehistory.md)>

___
<a id="getmarkets"></a>

### `<Static>` getMarkets

▸ **getMarkets**(augur: *[Augur](api-classes-packages-augur-sdk-src-augur-augur.md)*, db: *[DB](api-classes-packages-augur-sdk-src-state-db-db-db.md)*, params: *`t.TypeOf`<`IntersectionType`>*): `Promise`<`string`[]>

*Defined in [packages/augur-sdk/src/state/getter/Markets.ts:292](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/getter/Markets.ts#L292)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| augur | [Augur](api-classes-packages-augur-sdk-src-augur-augur.md) |
| db | [DB](api-classes-packages-augur-sdk-src-state-db-db-db.md) |
| params | `t.TypeOf`<`IntersectionType`> |

**Returns:** `Promise`<`string`[]>

___
<a id="getmarketsinfo"></a>

### `<Static>` getMarketsInfo

▸ **getMarketsInfo**(augur: *[Augur](api-classes-packages-augur-sdk-src-augur-augur.md)*, db: *[DB](api-classes-packages-augur-sdk-src-state-db-db-db.md)*, params: *`t.TypeOf`<`InterfaceType`>*): `Promise`<[MarketInfo](api-interfaces-packages-augur-sdk-src-state-getter-markets-marketinfo.md)[]>

*Defined in [packages/augur-sdk/src/state/getter/Markets.ts:521](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/getter/Markets.ts#L521)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| augur | [Augur](api-classes-packages-augur-sdk-src-augur-augur.md) |
| db | [DB](api-classes-packages-augur-sdk-src-state-db-db-db.md) |
| params | `t.TypeOf`<`InterfaceType`> |

**Returns:** `Promise`<[MarketInfo](api-interfaces-packages-augur-sdk-src-state-getter-markets-marketinfo.md)[]>

___
<a id="gettopics"></a>

### `<Static>` getTopics

▸ **getTopics**(augur: *[Augur](api-classes-packages-augur-sdk-src-augur-augur.md)*, db: *[DB](api-classes-packages-augur-sdk-src-state-db-db-db.md)*, params: *`t.TypeOf`<`InterfaceType`>*): `Promise`<`string`[]>

*Defined in [packages/augur-sdk/src/state/getter/Markets.ts:668](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/getter/Markets.ts#L668)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| augur | [Augur](api-classes-packages-augur-sdk-src-augur-augur.md) |
| db | [DB](api-classes-packages-augur-sdk-src-state-db-db-db.md) |
| params | `t.TypeOf`<`InterfaceType`> |

**Returns:** `Promise`<`string`[]>

___

