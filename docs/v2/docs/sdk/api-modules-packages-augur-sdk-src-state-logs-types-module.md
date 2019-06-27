---
id: api-modules-packages-augur-sdk-src-state-logs-types-module
title: packages/augur-sdk/src/state/logs/types Module
sidebar_label: packages/augur-sdk/src/state/logs/types
---

[@augurproject/sdk](api-readme.md) > [[packages/augur-sdk/src/state/logs/types Module]](api-modules-packages-augur-sdk-src-state-logs-types-module.md)

## Module

### Enumerations

* [MarketType](api-enums-packages-augur-sdk-src-state-logs-types-markettype.md)
* [OrderEventAddressValue](api-enums-packages-augur-sdk-src-state-logs-types-ordereventaddressvalue.md)
* [OrderEventType](api-enums-packages-augur-sdk-src-state-logs-types-ordereventtype.md)
* [OrderEventUint256Value](api-enums-packages-augur-sdk-src-state-logs-types-ordereventuint256value.md)
* [OrderState](api-enums-packages-augur-sdk-src-state-logs-types-orderstate.md)
* [OrderType](api-enums-packages-augur-sdk-src-state-logs-types-ordertype.md)

### Interfaces

* [CompleteSetsPurchasedLog](api-interfaces-packages-augur-sdk-src-state-logs-types-completesetspurchasedlog.md)
* [CompleteSetsSoldLog](api-interfaces-packages-augur-sdk-src-state-logs-types-completesetssoldlog.md)
* [DisputeCrowdsourcerCompletedLog](api-interfaces-packages-augur-sdk-src-state-logs-types-disputecrowdsourcercompletedlog.md)
* [DisputeCrowdsourcerContributionLog](api-interfaces-packages-augur-sdk-src-state-logs-types-disputecrowdsourcercontributionlog.md)
* [DisputeCrowdsourcerRedeemedLog](api-interfaces-packages-augur-sdk-src-state-logs-types-disputecrowdsourcerredeemedlog.md)
* [DisputeWindowCreatedLog](api-interfaces-packages-augur-sdk-src-state-logs-types-disputewindowcreatedlog.md)
* [Doc](api-interfaces-packages-augur-sdk-src-state-logs-types-doc.md)
* [InitialReportSubmittedLog](api-interfaces-packages-augur-sdk-src-state-logs-types-initialreportsubmittedlog.md)
* [InitialReporterRedeemedLog](api-interfaces-packages-augur-sdk-src-state-logs-types-initialreporterredeemedlog.md)
* [Log](api-interfaces-packages-augur-sdk-src-state-logs-types-log.md)
* [MarketCreatedLog](api-interfaces-packages-augur-sdk-src-state-logs-types-marketcreatedlog.md)
* [MarketCreatedLogExtraInfo](api-interfaces-packages-augur-sdk-src-state-logs-types-marketcreatedlogextrainfo.md)
* [MarketFinalizedLog](api-interfaces-packages-augur-sdk-src-state-logs-types-marketfinalizedlog.md)
* [MarketMigratedLog](api-interfaces-packages-augur-sdk-src-state-logs-types-marketmigratedlog.md)
* [MarketVolumeChangedLog](api-interfaces-packages-augur-sdk-src-state-logs-types-marketvolumechangedlog.md)
* [OrderEventLog](api-interfaces-packages-augur-sdk-src-state-logs-types-ordereventlog.md)
* [ParsedOrderEventLog](api-interfaces-packages-augur-sdk-src-state-logs-types-parsedordereventlog.md)
* [ParticipationTokensRedeemedLog](api-interfaces-packages-augur-sdk-src-state-logs-types-participationtokensredeemedlog.md)
* [ProfitLossChangedLog](api-interfaces-packages-augur-sdk-src-state-logs-types-profitlosschangedlog.md)
* [TimestampSetLog](api-interfaces-packages-augur-sdk-src-state-logs-types-timestampsetlog.md)
* [Timestamped](api-interfaces-packages-augur-sdk-src-state-logs-types-timestamped.md)
* [TokenBalanceChangedLog](api-interfaces-packages-augur-sdk-src-state-logs-types-tokenbalancechangedlog.md)
* [TradingProceedsClaimedLog](api-interfaces-packages-augur-sdk-src-state-logs-types-tradingproceedsclaimedlog.md)
* [UniverseForkedLog](api-interfaces-packages-augur-sdk-src-state-logs-types-universeforkedlog.md)

### Type aliases

* [Address](api-modules-packages-augur-sdk-src-state-logs-types-module.md#address)
* [Bytes32](api-modules-packages-augur-sdk-src-state-logs-types-module.md#bytes32)
* [PayoutNumerators](api-modules-packages-augur-sdk-src-state-logs-types-module.md#payoutnumerators)
* [Timestamp](api-modules-packages-augur-sdk-src-state-logs-types-module.md#timestamp)

### Variables

* [ORDER_EVENT_AMOUNT](api-modules-packages-augur-sdk-src-state-logs-types-module.md#order_event_amount)
* [ORDER_EVENT_AMOUNT_FILLED](api-modules-packages-augur-sdk-src-state-logs-types-module.md#order_event_amount_filled)
* [ORDER_EVENT_CREATOR](api-modules-packages-augur-sdk-src-state-logs-types-module.md#order_event_creator)
* [ORDER_EVENT_FEES](api-modules-packages-augur-sdk-src-state-logs-types-module.md#order_event_fees)
* [ORDER_EVENT_FILLER](api-modules-packages-augur-sdk-src-state-logs-types-module.md#order_event_filler)
* [ORDER_EVENT_KYC_TOKEN](api-modules-packages-augur-sdk-src-state-logs-types-module.md#order_event_kyc_token)
* [ORDER_EVENT_OUTCOME](api-modules-packages-augur-sdk-src-state-logs-types-module.md#order_event_outcome)
* [ORDER_EVENT_PRICE](api-modules-packages-augur-sdk-src-state-logs-types-module.md#order_event_price)
* [ORDER_EVENT_SHARES_ESCROWED](api-modules-packages-augur-sdk-src-state-logs-types-module.md#order_event_shares_escrowed)
* [ORDER_EVENT_SHARES_REFUND](api-modules-packages-augur-sdk-src-state-logs-types-module.md#order_event_shares_refund)
* [ORDER_EVENT_TIMESTAMP](api-modules-packages-augur-sdk-src-state-logs-types-module.md#order_event_timestamp)
* [ORDER_EVENT_TOKENS_ESCROWED](api-modules-packages-augur-sdk-src-state-logs-types-module.md#order_event_tokens_escrowed)
* [ORDER_EVENT_TOKEN_REFUND](api-modules-packages-augur-sdk-src-state-logs-types-module.md#order_event_token_refund)

---

## Type aliases

<a id="address"></a>

###  Address

**Ƭ Address**: *`string`*

*Defined in [packages/augur-sdk/src/state/logs/types.ts:1](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/logs/types.ts#L1)*

___
<a id="bytes32"></a>

###  Bytes32

**Ƭ Bytes32**: *`string`*

*Defined in [packages/augur-sdk/src/state/logs/types.ts:2](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/logs/types.ts#L2)*

___
<a id="payoutnumerators"></a>

###  PayoutNumerators

**Ƭ PayoutNumerators**: *`Array`<`string`>*

*Defined in [packages/augur-sdk/src/state/logs/types.ts:3](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/logs/types.ts#L3)*

___
<a id="timestamp"></a>

###  Timestamp

**Ƭ Timestamp**: *`string`*

*Defined in [packages/augur-sdk/src/state/logs/types.ts:4](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/logs/types.ts#L4)*

___

## Variables

<a id="order_event_amount"></a>

### `<Const>` ORDER_EVENT_AMOUNT

**● ORDER_EVENT_AMOUNT**: *"uint256Data.1"* = "uint256Data.1"

*Defined in [packages/augur-sdk/src/state/logs/types.ts:234](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/logs/types.ts#L234)*

___
<a id="order_event_amount_filled"></a>

### `<Const>` ORDER_EVENT_AMOUNT_FILLED

**● ORDER_EVENT_AMOUNT_FILLED**: *"uint256Data.6"* = "uint256Data.6"

*Defined in [packages/augur-sdk/src/state/logs/types.ts:239](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/logs/types.ts#L239)*

___
<a id="order_event_creator"></a>

### `<Const>` ORDER_EVENT_CREATOR

**● ORDER_EVENT_CREATOR**: *"addressData.1"* = "addressData.1"

*Defined in [packages/augur-sdk/src/state/logs/types.ts:231](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/logs/types.ts#L231)*

___
<a id="order_event_fees"></a>

### `<Const>` ORDER_EVENT_FEES

**● ORDER_EVENT_FEES**: *"uint256Data.5"* = "uint256Data.5"

*Defined in [packages/augur-sdk/src/state/logs/types.ts:238](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/logs/types.ts#L238)*

___
<a id="order_event_filler"></a>

### `<Const>` ORDER_EVENT_FILLER

**● ORDER_EVENT_FILLER**: *"addressData.2"* = "addressData.2"

*Defined in [packages/augur-sdk/src/state/logs/types.ts:232](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/logs/types.ts#L232)*

___
<a id="order_event_kyc_token"></a>

### `<Const>` ORDER_EVENT_KYC_TOKEN

**● ORDER_EVENT_KYC_TOKEN**: *"addressData.0"* = "addressData.0"

*Defined in [packages/augur-sdk/src/state/logs/types.ts:230](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/logs/types.ts#L230)*

___
<a id="order_event_outcome"></a>

### `<Const>` ORDER_EVENT_OUTCOME

**● ORDER_EVENT_OUTCOME**: *"uint256Data.2"* = "uint256Data.2"

*Defined in [packages/augur-sdk/src/state/logs/types.ts:235](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/logs/types.ts#L235)*

___
<a id="order_event_price"></a>

### `<Const>` ORDER_EVENT_PRICE

**● ORDER_EVENT_PRICE**: *"uint256Data.0"* = "uint256Data.0"

*Defined in [packages/augur-sdk/src/state/logs/types.ts:233](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/logs/types.ts#L233)*

___
<a id="order_event_shares_escrowed"></a>

### `<Const>` ORDER_EVENT_SHARES_ESCROWED

**● ORDER_EVENT_SHARES_ESCROWED**: *"uint256Data.8"* = "uint256Data.8"

*Defined in [packages/augur-sdk/src/state/logs/types.ts:241](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/logs/types.ts#L241)*

___
<a id="order_event_shares_refund"></a>

### `<Const>` ORDER_EVENT_SHARES_REFUND

**● ORDER_EVENT_SHARES_REFUND**: *"uint256Data.4"* = "uint256Data.4"

*Defined in [packages/augur-sdk/src/state/logs/types.ts:237](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/logs/types.ts#L237)*

___
<a id="order_event_timestamp"></a>

### `<Const>` ORDER_EVENT_TIMESTAMP

**● ORDER_EVENT_TIMESTAMP**: *"uint256Data.7"* = "uint256Data.7"

*Defined in [packages/augur-sdk/src/state/logs/types.ts:240](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/logs/types.ts#L240)*

___
<a id="order_event_tokens_escrowed"></a>

### `<Const>` ORDER_EVENT_TOKENS_ESCROWED

**● ORDER_EVENT_TOKENS_ESCROWED**: *"uint256Data.9"* = "uint256Data.9"

*Defined in [packages/augur-sdk/src/state/logs/types.ts:242](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/logs/types.ts#L242)*

___
<a id="order_event_token_refund"></a>

### `<Const>` ORDER_EVENT_TOKEN_REFUND

**● ORDER_EVENT_TOKEN_REFUND**: *"uint256Data.3"* = "uint256Data.3"

*Defined in [packages/augur-sdk/src/state/logs/types.ts:236](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/state/logs/types.ts#L236)*

___

