---
id: api-interfaces-packages-augur-sdk-src-state-getter-users-usertradingpositions
title: UserTradingPositions
sidebar_label: UserTradingPositions
---

[@augurproject/sdk](api-readme.md) > [[packages/augur-sdk/src/state/getter/Users Module]](api-modules-packages-augur-sdk-src-state-getter-users-module.md) > [UserTradingPositions](api-interfaces-packages-augur-sdk-src-state-getter-users-usertradingpositions.md)

## Interface

## Hierarchy

**UserTradingPositions**

### Properties

* [frozenFundsTotal](api-interfaces-packages-augur-sdk-src-state-getter-users-usertradingpositions.md#frozenfundstotal)
* [tradingPositions](api-interfaces-packages-augur-sdk-src-state-getter-users-usertradingpositions.md#tradingpositions)
* [tradingPositionsPerMarket](api-interfaces-packages-augur-sdk-src-state-getter-users-usertradingpositions.md#tradingpositionspermarket)
* [unrealizedRevenue24hChangePercent](api-interfaces-packages-augur-sdk-src-state-getter-users-usertradingpositions.md#unrealizedrevenue24hchangepercent)

---

## Properties

<a id="frozenfundstotal"></a>

###  frozenFundsTotal

**● frozenFundsTotal**: *`string`*

*Defined in [packages/augur-sdk/src/state/getter/Users.ts:93](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/getter/Users.ts#L93)*

___
<a id="tradingpositions"></a>

###  tradingPositions

**● tradingPositions**: *[TradingPosition](api-interfaces-packages-augur-sdk-src-state-getter-users-tradingposition.md)[]*

*Defined in [packages/augur-sdk/src/state/getter/Users.ts:88](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/getter/Users.ts#L88)*

___
<a id="tradingpositionspermarket"></a>

###  tradingPositionsPerMarket

**● tradingPositionsPerMarket**: *`object`*

*Defined in [packages/augur-sdk/src/state/getter/Users.ts:89](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/getter/Users.ts#L89)*

#### Type declaration

[marketId: `string`]: [MarketTradingPosition](api-interfaces-packages-augur-sdk-src-state-getter-users-markettradingposition.md)

___
<a id="unrealizedrevenue24hchangepercent"></a>

###  unrealizedRevenue24hChangePercent

**● unrealizedRevenue24hChangePercent**: *`string`*

*Defined in [packages/augur-sdk/src/state/getter/Users.ts:94](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/getter/Users.ts#L94)*

___

