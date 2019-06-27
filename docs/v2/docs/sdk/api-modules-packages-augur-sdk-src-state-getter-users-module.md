---
id: api-modules-packages-augur-sdk-src-state-getter-users-module
title: packages/augur-sdk/src/state/getter/Users Module
sidebar_label: packages/augur-sdk/src/state/getter/Users
---

[@augurproject/sdk](api-readme.md) > [[packages/augur-sdk/src/state/getter/Users Module]](api-modules-packages-augur-sdk-src-state-getter-users-module.md)

## Module

### Classes

* [Users](api-classes-packages-augur-sdk-src-state-getter-users-users.md)

### Interfaces

* [MarketTradingPosition](api-interfaces-packages-augur-sdk-src-state-getter-users-markettradingposition.md)
* [ProfitLossResult](api-interfaces-packages-augur-sdk-src-state-getter-users-profitlossresult.md)
* [TradingPosition](api-interfaces-packages-augur-sdk-src-state-getter-users-tradingposition.md)
* [UserTradingPositions](api-interfaces-packages-augur-sdk-src-state-getter-users-usertradingpositions.md)

### Variables

* [DEFAULT_NUMBER_OF_BUCKETS](api-modules-packages-augur-sdk-src-state-getter-users-module.md#default_number_of_buckets)
* [getProfitLossParams](api-modules-packages-augur-sdk-src-state-getter-users-module.md#getprofitlossparams)
* [getProfitLossSummaryParams](api-modules-packages-augur-sdk-src-state-getter-users-module.md#getprofitlosssummaryparams)
* [userTradingPositionsParams](api-modules-packages-augur-sdk-src-state-getter-users-module.md#usertradingpositionsparams)

### Functions

* [bucketRangeByInterval](api-modules-packages-augur-sdk-src-state-getter-users-module.md#bucketrangebyinterval)
* [getLastDocBeforeTimestamp](api-modules-packages-augur-sdk-src-state-getter-users-module.md#getlastdocbeforetimestamp)
* [getOrderFilledRecordsByMarketAndOutcome](api-modules-packages-augur-sdk-src-state-getter-users-module.md#getorderfilledrecordsbymarketandoutcome)
* [getProfitLossRecordsByMarketAndOutcome](api-modules-packages-augur-sdk-src-state-getter-users-module.md#getprofitlossrecordsbymarketandoutcome)
* [getTradingPositionFromProfitLossFrame](api-modules-packages-augur-sdk-src-state-getter-users-module.md#gettradingpositionfromprofitlossframe)
* [groupDocumentsByMarketAndOutcome](api-modules-packages-augur-sdk-src-state-getter-users-module.md#groupdocumentsbymarketandoutcome)
* [reduceMarketAndOutcomeDocsToOnlyLatest](api-modules-packages-augur-sdk-src-state-getter-users-module.md#reducemarketandoutcomedocstoonlylatest)
* [sumTradingPositions](api-modules-packages-augur-sdk-src-state-getter-users-module.md#sumtradingpositions)

---

## Variables

<a id="default_number_of_buckets"></a>

### `<Const>` DEFAULT_NUMBER_OF_BUCKETS

**● DEFAULT_NUMBER_OF_BUCKETS**: *`30`* = 30

*Defined in [packages/augur-sdk/src/state/getter/Users.ts:23](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/getter/Users.ts#L23)*

___
<a id="getprofitlossparams"></a>

### `<Const>` getProfitLossParams

**● getProfitLossParams**: *`IntersectionType`<[`PartialType`<`object`, `object`, `object`, `unknown`>, `PartialType`<`object`, `object`, `object`, `unknown`>], `object`, `object`, `unknown`>* =  t.intersection([
  getProfitLossSummaryParams,
  t.partial({
    startTime: t.number,
    periodInterval: t.number,
    outcome: t.number,
  }),
])

*Defined in [packages/augur-sdk/src/state/getter/Users.ts:42](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/getter/Users.ts#L42)*

___
<a id="getprofitlosssummaryparams"></a>

### `<Const>` getProfitLossSummaryParams

**● getProfitLossSummaryParams**: *`PartialType`<`object`, `object`, `object`, `unknown`>* =  t.partial({
  universe: t.string,
  account: t.string,
  endTime: t.number,
})

*Defined in [packages/augur-sdk/src/state/getter/Users.ts:36](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/getter/Users.ts#L36)*

___
<a id="usertradingpositionsparams"></a>

### `<Const>` userTradingPositionsParams

**● userTradingPositionsParams**: *`IntersectionType`<[`InterfaceType`<`object`, `object`, `object`, `unknown`>, `PartialType`<`object`, `object`, `object`, `unknown`>], `object`, `object`, `unknown`>* =  t.intersection([
  t.type({
    account: t.string,
  }),
  t.partial({
    universe: t.string,
    marketId: t.string,
    outcome: t.number,
  }),
])

*Defined in [packages/augur-sdk/src/state/getter/Users.ts:25](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/getter/Users.ts#L25)*

___

## Functions

<a id="bucketrangebyinterval"></a>

###  bucketRangeByInterval

▸ **bucketRangeByInterval**(startTime: *`number`*, endTime: *`number`*, periodInterval: *`number` \| `null`*): `BigNumber`[]

*Defined in [packages/augur-sdk/src/state/getter/Users.ts:551](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/getter/Users.ts#L551)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| startTime | `number` |
| endTime | `number` |
| periodInterval | `number` \| `null` |

**Returns:** `BigNumber`[]

___
<a id="getlastdocbeforetimestamp"></a>

###  getLastDocBeforeTimestamp

▸ **getLastDocBeforeTimestamp**<`TDoc`>(docs: *`TDoc`[]*, timestamp: *`BigNumber`*): `TDoc` \| `undefined`

*Defined in [packages/augur-sdk/src/state/getter/Users.ts:644](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/getter/Users.ts#L644)*

**Type parameters:**

#### TDoc :  [Timestamped](api-interfaces-packages-augur-sdk-src-state-logs-types-timestamped.md)
**Parameters:**

| Name | Type |
| ------ | ------ |
| docs | `TDoc`[] |
| timestamp | `BigNumber` |

**Returns:** `TDoc` \| `undefined`

___
<a id="getorderfilledrecordsbymarketandoutcome"></a>

###  getOrderFilledRecordsByMarketAndOutcome

▸ **getOrderFilledRecordsByMarketAndOutcome**(db: *[DB](api-classes-packages-augur-sdk-src-state-db-db-db.md)*, request: *`FindRequest`<`__type`>*): `Promise`<`_.Dictionary`<`_.Dictionary`<[ParsedOrderEventLog](api-interfaces-packages-augur-sdk-src-state-logs-types-parsedordereventlog.md)[]>>>

*Defined in [packages/augur-sdk/src/state/getter/Users.ts:598](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/getter/Users.ts#L598)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| db | [DB](api-classes-packages-augur-sdk-src-state-db-db-db.md) |
| request | `FindRequest`<`__type`> |

**Returns:** `Promise`<`_.Dictionary`<`_.Dictionary`<[ParsedOrderEventLog](api-interfaces-packages-augur-sdk-src-state-logs-types-parsedordereventlog.md)[]>>>

___
<a id="getprofitlossrecordsbymarketandoutcome"></a>

###  getProfitLossRecordsByMarketAndOutcome

▸ **getProfitLossRecordsByMarketAndOutcome**(db: *[DB](api-classes-packages-augur-sdk-src-state-db-db-db.md)*, account: *`string`*, request: *`FindRequest`<`__type`>*): `Promise`<`_.Dictionary`<`_.Dictionary`<[ProfitLossChangedLog](api-interfaces-packages-augur-sdk-src-state-logs-types-profitlosschangedlog.md)[]>>>

*Defined in [packages/augur-sdk/src/state/getter/Users.ts:587](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/getter/Users.ts#L587)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| db | [DB](api-classes-packages-augur-sdk-src-state-db-db-db.md) |
| account | `string` |
| request | `FindRequest`<`__type`> |

**Returns:** `Promise`<`_.Dictionary`<`_.Dictionary`<[ProfitLossChangedLog](api-interfaces-packages-augur-sdk-src-state-logs-types-profitlosschangedlog.md)[]>>>

___
<a id="gettradingpositionfromprofitlossframe"></a>

###  getTradingPositionFromProfitLossFrame

▸ **getTradingPositionFromProfitLossFrame**(profitLossFrame: *[ProfitLossChangedLog](api-interfaces-packages-augur-sdk-src-state-logs-types-profitlosschangedlog.md)*, marketDoc: *[MarketCreatedLog](api-interfaces-packages-augur-sdk-src-state-logs-types-marketcreatedlog.md)*, onChainOutcomeValue: *`BigNumber`*, timestamp: *`number`*): [TradingPosition](api-interfaces-packages-augur-sdk-src-state-getter-users-tradingposition.md)

*Defined in [packages/augur-sdk/src/state/getter/Users.ts:657](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/getter/Users.ts#L657)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| profitLossFrame | [ProfitLossChangedLog](api-interfaces-packages-augur-sdk-src-state-logs-types-profitlosschangedlog.md) |
| marketDoc | [MarketCreatedLog](api-interfaces-packages-augur-sdk-src-state-logs-types-marketcreatedlog.md) |
| onChainOutcomeValue | `BigNumber` |
| timestamp | `number` |

**Returns:** [TradingPosition](api-interfaces-packages-augur-sdk-src-state-getter-users-tradingposition.md)

___
<a id="groupdocumentsbymarketandoutcome"></a>

###  groupDocumentsByMarketAndOutcome

▸ **groupDocumentsByMarketAndOutcome**<`TDoc`>(docs: *`TDoc`[]*, outcomeField?: *`string`*): `_.Dictionary`<`_.Dictionary`<`TDoc`[]>>

*Defined in [packages/augur-sdk/src/state/getter/Users.ts:609](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/getter/Users.ts#L609)*

**Type parameters:**

#### TDoc :  [Doc](api-interfaces-packages-augur-sdk-src-state-logs-types-doc.md)
**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| docs | `TDoc`[] | - |
| `Default value` outcomeField | `string` | &quot;outcome&quot; |

**Returns:** `_.Dictionary`<`_.Dictionary`<`TDoc`[]>>

___
<a id="reducemarketandoutcomedocstoonlylatest"></a>

###  reduceMarketAndOutcomeDocsToOnlyLatest

▸ **reduceMarketAndOutcomeDocsToOnlyLatest**<`TDoc`>(docs: *`_.Dictionary`<`_.Dictionary`<`TDoc`[]>>*): `_.Dictionary`<`_.Dictionary`<`TDoc`>>

*Defined in [packages/augur-sdk/src/state/getter/Users.ts:622](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/getter/Users.ts#L622)*

**Type parameters:**

#### TDoc :  [Doc](api-interfaces-packages-augur-sdk-src-state-logs-types-doc.md)
**Parameters:**

| Name | Type |
| ------ | ------ |
| docs | `_.Dictionary`<`_.Dictionary`<`TDoc`[]>> |

**Returns:** `_.Dictionary`<`_.Dictionary`<`TDoc`>>

___
<a id="sumtradingpositions"></a>

###  sumTradingPositions

▸ **sumTradingPositions**(tradingPositions: *[MarketTradingPosition](api-interfaces-packages-augur-sdk-src-state-getter-users-markettradingposition.md)[]*): [MarketTradingPosition](api-interfaces-packages-augur-sdk-src-state-getter-users-markettradingposition.md)

*Defined in [packages/augur-sdk/src/state/getter/Users.ts:471](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/getter/Users.ts#L471)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| tradingPositions | [MarketTradingPosition](api-interfaces-packages-augur-sdk-src-state-getter-users-markettradingposition.md)[] |

**Returns:** [MarketTradingPosition](api-interfaces-packages-augur-sdk-src-state-getter-users-markettradingposition.md)

___

