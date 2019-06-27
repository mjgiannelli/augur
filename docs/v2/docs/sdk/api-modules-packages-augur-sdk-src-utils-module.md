---
id: api-modules-packages-augur-sdk-src-utils-module
title: packages/augur-sdk/src/utils Module
sidebar_label: packages/augur-sdk/src/utils
---

[@augurproject/sdk](api-readme.md) > [[packages/augur-sdk/src/utils Module]](api-modules-packages-augur-sdk-src-utils-module.md)

## Module

### Variables

* [QUINTILLION](api-modules-packages-augur-sdk-src-utils-module.md#quintillion)

### Functions

* [compareObjects](api-modules-packages-augur-sdk-src-utils-module.md#compareobjects)
* [convertDisplayAmountToOnChainAmount](api-modules-packages-augur-sdk-src-utils-module.md#convertdisplayamounttoonchainamount)
* [convertDisplayPriceToOnChainPrice](api-modules-packages-augur-sdk-src-utils-module.md#convertdisplaypricetoonchainprice)
* [convertOnChainAmountToDisplayAmount](api-modules-packages-augur-sdk-src-utils-module.md#convertonchainamounttodisplayamount)
* [convertOnChainPriceToDisplayPrice](api-modules-packages-augur-sdk-src-utils-module.md#convertonchainpricetodisplayprice)
* [numTicksToTickSize](api-modules-packages-augur-sdk-src-utils-module.md#numtickstoticksize)
* [numTicksToTickSizeWithDisplayPrices](api-modules-packages-augur-sdk-src-utils-module.md#numtickstoticksizewithdisplayprices)

---

## Variables

<a id="quintillion"></a>

### `<Const>` QUINTILLION

**● QUINTILLION**: *`BigNumber`* =  new BigNumber(10).pow(18)

*Defined in [packages/augur-sdk/src/utils.ts:3](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/utils.ts#L3)*

___

## Functions

<a id="compareobjects"></a>

###  compareObjects

▸ **compareObjects**(key: *`string`*, order: *`string`*): `(Anonymous function)`

*Defined in [packages/augur-sdk/src/utils.ts:29](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/utils.ts#L29)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` |
| order | `string` |

**Returns:** `(Anonymous function)`

___
<a id="convertdisplayamounttoonchainamount"></a>

###  convertDisplayAmountToOnChainAmount

▸ **convertDisplayAmountToOnChainAmount**(displayAmount: *`BigNumber`*, tickSize: *`BigNumber`*): `BigNumber`

*Defined in [packages/augur-sdk/src/utils.ts:17](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/utils.ts#L17)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| displayAmount | `BigNumber` |
| tickSize | `BigNumber` |

**Returns:** `BigNumber`

___
<a id="convertdisplaypricetoonchainprice"></a>

###  convertDisplayPriceToOnChainPrice

▸ **convertDisplayPriceToOnChainPrice**(displayPrice: *`BigNumber`*, minPrice: *`BigNumber`*, tickSize: *`BigNumber`*): `BigNumber`

*Defined in [packages/augur-sdk/src/utils.ts:25](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/utils.ts#L25)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| displayPrice | `BigNumber` |
| minPrice | `BigNumber` |
| tickSize | `BigNumber` |

**Returns:** `BigNumber`

___
<a id="convertonchainamounttodisplayamount"></a>

###  convertOnChainAmountToDisplayAmount

▸ **convertOnChainAmountToDisplayAmount**(onChainAmount: *`BigNumber`*, tickSize: *`BigNumber`*): `BigNumber`

*Defined in [packages/augur-sdk/src/utils.ts:13](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/utils.ts#L13)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| onChainAmount | `BigNumber` |
| tickSize | `BigNumber` |

**Returns:** `BigNumber`

___
<a id="convertonchainpricetodisplayprice"></a>

###  convertOnChainPriceToDisplayPrice

▸ **convertOnChainPriceToDisplayPrice**(onChainPrice: *`BigNumber`*, minPrice: *`BigNumber`*, tickSize: *`BigNumber`*): `BigNumber`

*Defined in [packages/augur-sdk/src/utils.ts:21](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/utils.ts#L21)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| onChainPrice | `BigNumber` |
| minPrice | `BigNumber` |
| tickSize | `BigNumber` |

**Returns:** `BigNumber`

___
<a id="numtickstoticksize"></a>

###  numTicksToTickSize

▸ **numTicksToTickSize**(numTicks: *`BigNumber`*, minPrice: *`BigNumber`*, maxPrice: *`BigNumber`*): `BigNumber`

*Defined in [packages/augur-sdk/src/utils.ts:5](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/utils.ts#L5)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| numTicks | `BigNumber` |
| minPrice | `BigNumber` |
| maxPrice | `BigNumber` |

**Returns:** `BigNumber`

___
<a id="numtickstoticksizewithdisplayprices"></a>

###  numTicksToTickSizeWithDisplayPrices

▸ **numTicksToTickSizeWithDisplayPrices**(numTicks: *`BigNumber`*, minPrice: *`BigNumber`*, maxPrice: *`BigNumber`*): `BigNumber`

*Defined in [packages/augur-sdk/src/utils.ts:9](https://github.com/AugurProject/augur/blob/27cf7214d2/packages/augur-sdk/src/utils.ts#L9)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| numTicks | `BigNumber` |
| minPrice | `BigNumber` |
| maxPrice | `BigNumber` |

**Returns:** `BigNumber`

___

