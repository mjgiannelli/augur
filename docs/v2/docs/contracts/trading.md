---
title: Trading
---

<div class="contracts">

## Contracts

### `CancelOrder`



<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#CancelOrder.initialize(contract IAugur)"><code class="function-signature">initialize(contract IAugur _augur)</code></a></li><li><a href="#CancelOrder.cancelOrder(bytes32)"><code class="function-signature">cancelOrder(bytes32 _orderId)</code></a></li><li><a href="#CancelOrder.cancelOrders(bytes32[])"><code class="function-signature">cancelOrders(bytes32[] _orderIds)</code></a></li><li><a href="#CancelOrder.cancelOrderInternal(address,bytes32)"><code class="function-signature">cancelOrderInternal(address _sender, bytes32 _orderId)</code></a></li><li class="inherited"><a href="#Initializable.endInitialization()"><code class="function-signature">endInitialization()</code></a></li><li class="inherited"><a href="#Initializable.getInitialized()"><code class="function-signature">getInitialized()</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="CancelOrder.initialize(contract IAugur)"></a><code class="function-signature">initialize(contract IAugur _augur)</code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="CancelOrder.cancelOrder(bytes32)"></a><code class="function-signature">cancelOrder(bytes32 _orderId) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">external</span></h4>





<h4><a class="anchor" aria-hidden="true" id="CancelOrder.cancelOrders(bytes32[])"></a><code class="function-signature">cancelOrders(bytes32[] _orderIds) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">external</span></h4>





<h4><a class="anchor" aria-hidden="true" id="CancelOrder.cancelOrderInternal(address,bytes32)"></a><code class="function-signature">cancelOrderInternal(address _sender, bytes32 _orderId) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">internal</span></h4>







### `IAugur`



<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#IAugur.createChildUniverse(bytes32,uint256[])"><code class="function-signature">createChildUniverse(bytes32 _parentPayoutDistributionHash, uint256[] _parentPayoutNumerators)</code></a></li><li><a href="#IAugur.isKnownUniverse(contract IUniverse)"><code class="function-signature">isKnownUniverse(contract IUniverse _universe)</code></a></li><li><a href="#IAugur.trustedTransfer(contract IERC20,address,address,uint256)"><code class="function-signature">trustedTransfer(contract IERC20 _token, address _from, address _to, uint256 _amount)</code></a></li><li><a href="#IAugur.isTrustedSender(address)"><code class="function-signature">isTrustedSender(address _address)</code></a></li><li><a href="#IAugur.logCategoricalMarketCreated(uint256,string,contract IMarket,address,address,uint256,bytes32[])"><code class="function-signature">logCategoricalMarketCreated(uint256 _endTime, string _extraInfo, contract IMarket _market, address _marketCreator, address _designatedReporter, uint256 _feeDivisor, bytes32[] _outcomes)</code></a></li><li><a href="#IAugur.logYesNoMarketCreated(uint256,string,contract IMarket,address,address,uint256)"><code class="function-signature">logYesNoMarketCreated(uint256 _endTime, string _extraInfo, contract IMarket _market, address _marketCreator, address _designatedReporter, uint256 _feeDivisor)</code></a></li><li><a href="#IAugur.logScalarMarketCreated(uint256,string,contract IMarket,address,address,uint256,int256[],uint256)"><code class="function-signature">logScalarMarketCreated(uint256 _endTime, string _extraInfo, contract IMarket _market, address _marketCreator, address _designatedReporter, uint256 _feeDivisor, int256[] _prices, uint256 _numTicks)</code></a></li><li><a href="#IAugur.logInitialReportSubmitted(contract IUniverse,address,address,uint256,bool,uint256[],string)"><code class="function-signature">logInitialReportSubmitted(contract IUniverse _universe, address _reporter, address _market, uint256 _amountStaked, bool _isDesignatedReporter, uint256[] _payoutNumerators, string description)</code></a></li><li><a href="#IAugur.disputeCrowdsourcerCreated(contract IUniverse,address,address,uint256[],uint256)"><code class="function-signature">disputeCrowdsourcerCreated(contract IUniverse _universe, address _market, address _disputeCrowdsourcer, uint256[] _payoutNumerators, uint256 _size)</code></a></li><li><a href="#IAugur.logDisputeCrowdsourcerContribution(contract IUniverse,address,address,address,uint256,string)"><code class="function-signature">logDisputeCrowdsourcerContribution(contract IUniverse _universe, address _reporter, address _market, address _disputeCrowdsourcer, uint256 _amountStaked, string description)</code></a></li><li><a href="#IAugur.logDisputeCrowdsourcerCompleted(contract IUniverse,address,address,uint256,bool)"><code class="function-signature">logDisputeCrowdsourcerCompleted(contract IUniverse _universe, address _market, address _disputeCrowdsourcer, uint256 _nextWindowStartTime, bool _pacingOn)</code></a></li><li><a href="#IAugur.logInitialReporterRedeemed(contract IUniverse,address,address,uint256,uint256,uint256[])"><code class="function-signature">logInitialReporterRedeemed(contract IUniverse _universe, address _reporter, address _market, uint256 _amountRedeemed, uint256 _repReceived, uint256[] _payoutNumerators)</code></a></li><li><a href="#IAugur.logDisputeCrowdsourcerRedeemed(contract IUniverse,address,address,uint256,uint256,uint256[])"><code class="function-signature">logDisputeCrowdsourcerRedeemed(contract IUniverse _universe, address _reporter, address _market, uint256 _amountRedeemed, uint256 _repReceived, uint256[] _payoutNumerators)</code></a></li><li><a href="#IAugur.logMarketFinalized(contract IUniverse,uint256[])"><code class="function-signature">logMarketFinalized(contract IUniverse _universe, uint256[] _winningPayoutNumerators)</code></a></li><li><a href="#IAugur.logMarketMigrated(contract IMarket,contract IUniverse)"><code class="function-signature">logMarketMigrated(contract IMarket _market, contract IUniverse _originalUniverse)</code></a></li><li><a href="#IAugur.logReportingParticipantDisavowed(contract IUniverse,contract IMarket)"><code class="function-signature">logReportingParticipantDisavowed(contract IUniverse _universe, contract IMarket _market)</code></a></li><li><a href="#IAugur.logMarketParticipantsDisavowed(contract IUniverse)"><code class="function-signature">logMarketParticipantsDisavowed(contract IUniverse _universe)</code></a></li><li><a href="#IAugur.logOrderCanceled(contract IUniverse,contract IMarket,address,uint256,uint256,bytes32)"><code class="function-signature">logOrderCanceled(contract IUniverse _universe, contract IMarket _market, address _creator, uint256 _tokenRefund, uint256 _sharesRefund, bytes32 _orderId)</code></a></li><li><a href="#IAugur.logOrderCreated(contract IUniverse,bytes32,bytes32)"><code class="function-signature">logOrderCreated(contract IUniverse _universe, bytes32 _orderId, bytes32 _tradeGroupId)</code></a></li><li><a href="#IAugur.logOrderFilled(contract IUniverse,address,address,uint256,uint256,uint256,bytes32,bytes32)"><code class="function-signature">logOrderFilled(contract IUniverse _universe, address _creator, address _filler, uint256 _price, uint256 _fees, uint256 _amountFilled, bytes32 _orderId, bytes32 _tradeGroupId)</code></a></li><li><a href="#IAugur.logZeroXOrderFilled(contract IUniverse,contract IMarket,bytes32,enum Order.Types,address[],uint256[])"><code class="function-signature">logZeroXOrderFilled(contract IUniverse _universe, contract IMarket _market, bytes32 _tradeGroupId, enum Order.Types _orderType, address[] _addressData, uint256[] _uint256Data)</code></a></li><li><a href="#IAugur.logCompleteSetsPurchased(contract IUniverse,contract IMarket,address,uint256)"><code class="function-signature">logCompleteSetsPurchased(contract IUniverse _universe, contract IMarket _market, address _account, uint256 _numCompleteSets)</code></a></li><li><a href="#IAugur.logCompleteSetsSold(contract IUniverse,contract IMarket,address,uint256,uint256)"><code class="function-signature">logCompleteSetsSold(contract IUniverse _universe, contract IMarket _market, address _account, uint256 _numCompleteSets, uint256 _fees)</code></a></li><li><a href="#IAugur.logMarketOIChanged(contract IUniverse,contract IMarket)"><code class="function-signature">logMarketOIChanged(contract IUniverse _universe, contract IMarket _market)</code></a></li><li><a href="#IAugur.logTradingProceedsClaimed(contract IUniverse,address,address,address,uint256,uint256,uint256,uint256,uint256)"><code class="function-signature">logTradingProceedsClaimed(contract IUniverse _universe, address _shareToken, address _sender, address _market, uint256 _outcome, uint256 _numShares, uint256 _numPayoutTokens, uint256 _finalTokenBalance, uint256 _fees)</code></a></li><li><a href="#IAugur.logUniverseForked(contract IMarket)"><code class="function-signature">logUniverseForked(contract IMarket _forkingMarket)</code></a></li><li><a href="#IAugur.logShareTokensTransferred(contract IUniverse,address,address,uint256,uint256,uint256,uint256)"><code class="function-signature">logShareTokensTransferred(contract IUniverse _universe, address _from, address _to, uint256 _value, uint256 _fromBalance, uint256 _toBalance, uint256 _outcome)</code></a></li><li><a href="#IAugur.logReputationTokensTransferred(contract IUniverse,address,address,uint256,uint256,uint256)"><code class="function-signature">logReputationTokensTransferred(contract IUniverse _universe, address _from, address _to, uint256 _value, uint256 _fromBalance, uint256 _toBalance)</code></a></li><li><a href="#IAugur.logReputationTokensBurned(contract IUniverse,address,uint256,uint256,uint256)"><code class="function-signature">logReputationTokensBurned(contract IUniverse _universe, address _target, uint256 _amount, uint256 _totalSupply, uint256 _balance)</code></a></li><li><a href="#IAugur.logReputationTokensMinted(contract IUniverse,address,uint256,uint256,uint256)"><code class="function-signature">logReputationTokensMinted(contract IUniverse _universe, address _target, uint256 _amount, uint256 _totalSupply, uint256 _balance)</code></a></li><li><a href="#IAugur.logShareTokensBurned(contract IUniverse,address,uint256,uint256,uint256,uint256)"><code class="function-signature">logShareTokensBurned(contract IUniverse _universe, address _target, uint256 _amount, uint256 _totalSupply, uint256 _balance, uint256 _outcome)</code></a></li><li><a href="#IAugur.logShareTokensMinted(contract IUniverse,address,uint256,uint256,uint256,uint256)"><code class="function-signature">logShareTokensMinted(contract IUniverse _universe, address _target, uint256 _amount, uint256 _totalSupply, uint256 _balance, uint256 _outcome)</code></a></li><li><a href="#IAugur.logDisputeCrowdsourcerTokensTransferred(contract IUniverse,address,address,uint256,uint256,uint256)"><code class="function-signature">logDisputeCrowdsourcerTokensTransferred(contract IUniverse _universe, address _from, address _to, uint256 _value, uint256 _fromBalance, uint256 _toBalance)</code></a></li><li><a href="#IAugur.logDisputeCrowdsourcerTokensBurned(contract IUniverse,address,uint256,uint256,uint256)"><code class="function-signature">logDisputeCrowdsourcerTokensBurned(contract IUniverse _universe, address _target, uint256 _amount, uint256 _totalSupply, uint256 _balance)</code></a></li><li><a href="#IAugur.logDisputeCrowdsourcerTokensMinted(contract IUniverse,address,uint256,uint256,uint256)"><code class="function-signature">logDisputeCrowdsourcerTokensMinted(contract IUniverse _universe, address _target, uint256 _amount, uint256 _totalSupply, uint256 _balance)</code></a></li><li><a href="#IAugur.logDisputeWindowCreated(contract IDisputeWindow,uint256,bool)"><code class="function-signature">logDisputeWindowCreated(contract IDisputeWindow _disputeWindow, uint256 _id, bool _initial)</code></a></li><li><a href="#IAugur.logParticipationTokensRedeemed(contract IUniverse,address,uint256,uint256)"><code class="function-signature">logParticipationTokensRedeemed(contract IUniverse universe, address _sender, uint256 _attoParticipationTokens, uint256 _feePayoutShare)</code></a></li><li><a href="#IAugur.logTimestampSet(uint256)"><code class="function-signature">logTimestampSet(uint256 _newTimestamp)</code></a></li><li><a href="#IAugur.logInitialReporterTransferred(contract IUniverse,contract IMarket,address,address)"><code class="function-signature">logInitialReporterTransferred(contract IUniverse _universe, contract IMarket _market, address _from, address _to)</code></a></li><li><a href="#IAugur.logMarketTransferred(contract IUniverse,address,address)"><code class="function-signature">logMarketTransferred(contract IUniverse _universe, address _from, address _to)</code></a></li><li><a href="#IAugur.logParticipationTokensTransferred(contract IUniverse,address,address,uint256,uint256,uint256)"><code class="function-signature">logParticipationTokensTransferred(contract IUniverse _universe, address _from, address _to, uint256 _value, uint256 _fromBalance, uint256 _toBalance)</code></a></li><li><a href="#IAugur.logParticipationTokensBurned(contract IUniverse,address,uint256,uint256,uint256)"><code class="function-signature">logParticipationTokensBurned(contract IUniverse _universe, address _target, uint256 _amount, uint256 _totalSupply, uint256 _balance)</code></a></li><li><a href="#IAugur.logParticipationTokensMinted(contract IUniverse,address,uint256,uint256,uint256)"><code class="function-signature">logParticipationTokensMinted(contract IUniverse _universe, address _target, uint256 _amount, uint256 _totalSupply, uint256 _balance)</code></a></li><li><a href="#IAugur.logMarketVolumeChanged(contract IUniverse,address,uint256,uint256[])"><code class="function-signature">logMarketVolumeChanged(contract IUniverse _universe, address _market, uint256 _volume, uint256[] _outcomeVolumes)</code></a></li><li><a href="#IAugur.logProfitLossChanged(contract IMarket,address,uint256,int256,uint256,int256,int256,int256)"><code class="function-signature">logProfitLossChanged(contract IMarket _market, address _account, uint256 _outcome, int256 _netPosition, uint256 _avgPrice, int256 _realizedProfit, int256 _frozenFunds, int256 _realizedCost)</code></a></li><li><a href="#IAugur.isKnownFeeSender(address)"><code class="function-signature">isKnownFeeSender(address _feeSender)</code></a></li><li><a href="#IAugur.isKnownShareToken(contract IShareToken)"><code class="function-signature">isKnownShareToken(contract IShareToken _token)</code></a></li><li><a href="#IAugur.lookup(bytes32)"><code class="function-signature">lookup(bytes32 _key)</code></a></li><li><a href="#IAugur.getTimestamp()"><code class="function-signature">getTimestamp()</code></a></li><li><a href="#IAugur.getMaximumMarketEndDate()"><code class="function-signature">getMaximumMarketEndDate()</code></a></li><li><a href="#IAugur.isKnownMarket(contract IMarket)"><code class="function-signature">isKnownMarket(contract IMarket _market)</code></a></li><li><a href="#IAugur.derivePayoutDistributionHash(uint256[],uint256,uint256)"><code class="function-signature">derivePayoutDistributionHash(uint256[] _payoutNumerators, uint256 _numTicks, uint256 numOutcomes)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="IAugur.createChildUniverse(bytes32,uint256[])"></a><code class="function-signature">createChildUniverse(bytes32 _parentPayoutDistributionHash, uint256[] _parentPayoutNumerators) <span class="return-arrow">→</span> <span class="return-type">contract IUniverse</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IAugur.isKnownUniverse(contract IUniverse)"></a><code class="function-signature">isKnownUniverse(contract IUniverse _universe) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IAugur.trustedTransfer(contract IERC20,address,address,uint256)"></a><code class="function-signature">trustedTransfer(contract IERC20 _token, address _from, address _to, uint256 _amount) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IAugur.isTrustedSender(address)"></a><code class="function-signature">isTrustedSender(address _address) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IAugur.logCategoricalMarketCreated(uint256,string,contract IMarket,address,address,uint256,bytes32[])"></a><code class="function-signature">logCategoricalMarketCreated(uint256 _endTime, string _extraInfo, contract IMarket _market, address _marketCreator, address _designatedReporter, uint256 _feeDivisor, bytes32[] _outcomes) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IAugur.logYesNoMarketCreated(uint256,string,contract IMarket,address,address,uint256)"></a><code class="function-signature">logYesNoMarketCreated(uint256 _endTime, string _extraInfo, contract IMarket _market, address _marketCreator, address _designatedReporter, uint256 _feeDivisor) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IAugur.logScalarMarketCreated(uint256,string,contract IMarket,address,address,uint256,int256[],uint256)"></a><code class="function-signature">logScalarMarketCreated(uint256 _endTime, string _extraInfo, contract IMarket _market, address _marketCreator, address _designatedReporter, uint256 _feeDivisor, int256[] _prices, uint256 _numTicks) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IAugur.logInitialReportSubmitted(contract IUniverse,address,address,uint256,bool,uint256[],string)"></a><code class="function-signature">logInitialReportSubmitted(contract IUniverse _universe, address _reporter, address _market, uint256 _amountStaked, bool _isDesignatedReporter, uint256[] _payoutNumerators, string description) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IAugur.disputeCrowdsourcerCreated(contract IUniverse,address,address,uint256[],uint256)"></a><code class="function-signature">disputeCrowdsourcerCreated(contract IUniverse _universe, address _market, address _disputeCrowdsourcer, uint256[] _payoutNumerators, uint256 _size) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IAugur.logDisputeCrowdsourcerContribution(contract IUniverse,address,address,address,uint256,string)"></a><code class="function-signature">logDisputeCrowdsourcerContribution(contract IUniverse _universe, address _reporter, address _market, address _disputeCrowdsourcer, uint256 _amountStaked, string description) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IAugur.logDisputeCrowdsourcerCompleted(contract IUniverse,address,address,uint256,bool)"></a><code class="function-signature">logDisputeCrowdsourcerCompleted(contract IUniverse _universe, address _market, address _disputeCrowdsourcer, uint256 _nextWindowStartTime, bool _pacingOn) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IAugur.logInitialReporterRedeemed(contract IUniverse,address,address,uint256,uint256,uint256[])"></a><code class="function-signature">logInitialReporterRedeemed(contract IUniverse _universe, address _reporter, address _market, uint256 _amountRedeemed, uint256 _repReceived, uint256[] _payoutNumerators) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IAugur.logDisputeCrowdsourcerRedeemed(contract IUniverse,address,address,uint256,uint256,uint256[])"></a><code class="function-signature">logDisputeCrowdsourcerRedeemed(contract IUniverse _universe, address _reporter, address _market, uint256 _amountRedeemed, uint256 _repReceived, uint256[] _payoutNumerators) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IAugur.logMarketFinalized(contract IUniverse,uint256[])"></a><code class="function-signature">logMarketFinalized(contract IUniverse _universe, uint256[] _winningPayoutNumerators) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IAugur.logMarketMigrated(contract IMarket,contract IUniverse)"></a><code class="function-signature">logMarketMigrated(contract IMarket _market, contract IUniverse _originalUniverse) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IAugur.logReportingParticipantDisavowed(contract IUniverse,contract IMarket)"></a><code class="function-signature">logReportingParticipantDisavowed(contract IUniverse _universe, contract IMarket _market) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IAugur.logMarketParticipantsDisavowed(contract IUniverse)"></a><code class="function-signature">logMarketParticipantsDisavowed(contract IUniverse _universe) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IAugur.logOrderCanceled(contract IUniverse,contract IMarket,address,uint256,uint256,bytes32)"></a><code class="function-signature">logOrderCanceled(contract IUniverse _universe, contract IMarket _market, address _creator, uint256 _tokenRefund, uint256 _sharesRefund, bytes32 _orderId) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IAugur.logOrderCreated(contract IUniverse,bytes32,bytes32)"></a><code class="function-signature">logOrderCreated(contract IUniverse _universe, bytes32 _orderId, bytes32 _tradeGroupId) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IAugur.logOrderFilled(contract IUniverse,address,address,uint256,uint256,uint256,bytes32,bytes32)"></a><code class="function-signature">logOrderFilled(contract IUniverse _universe, address _creator, address _filler, uint256 _price, uint256 _fees, uint256 _amountFilled, bytes32 _orderId, bytes32 _tradeGroupId) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IAugur.logZeroXOrderFilled(contract IUniverse,contract IMarket,bytes32,enum Order.Types,address[],uint256[])"></a><code class="function-signature">logZeroXOrderFilled(contract IUniverse _universe, contract IMarket _market, bytes32 _tradeGroupId, enum Order.Types _orderType, address[] _addressData, uint256[] _uint256Data) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IAugur.logCompleteSetsPurchased(contract IUniverse,contract IMarket,address,uint256)"></a><code class="function-signature">logCompleteSetsPurchased(contract IUniverse _universe, contract IMarket _market, address _account, uint256 _numCompleteSets) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IAugur.logCompleteSetsSold(contract IUniverse,contract IMarket,address,uint256,uint256)"></a><code class="function-signature">logCompleteSetsSold(contract IUniverse _universe, contract IMarket _market, address _account, uint256 _numCompleteSets, uint256 _fees) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IAugur.logMarketOIChanged(contract IUniverse,contract IMarket)"></a><code class="function-signature">logMarketOIChanged(contract IUniverse _universe, contract IMarket _market) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IAugur.logTradingProceedsClaimed(contract IUniverse,address,address,address,uint256,uint256,uint256,uint256,uint256)"></a><code class="function-signature">logTradingProceedsClaimed(contract IUniverse _universe, address _shareToken, address _sender, address _market, uint256 _outcome, uint256 _numShares, uint256 _numPayoutTokens, uint256 _finalTokenBalance, uint256 _fees) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IAugur.logUniverseForked(contract IMarket)"></a><code class="function-signature">logUniverseForked(contract IMarket _forkingMarket) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IAugur.logShareTokensTransferred(contract IUniverse,address,address,uint256,uint256,uint256,uint256)"></a><code class="function-signature">logShareTokensTransferred(contract IUniverse _universe, address _from, address _to, uint256 _value, uint256 _fromBalance, uint256 _toBalance, uint256 _outcome) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IAugur.logReputationTokensTransferred(contract IUniverse,address,address,uint256,uint256,uint256)"></a><code class="function-signature">logReputationTokensTransferred(contract IUniverse _universe, address _from, address _to, uint256 _value, uint256 _fromBalance, uint256 _toBalance) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IAugur.logReputationTokensBurned(contract IUniverse,address,uint256,uint256,uint256)"></a><code class="function-signature">logReputationTokensBurned(contract IUniverse _universe, address _target, uint256 _amount, uint256 _totalSupply, uint256 _balance) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IAugur.logReputationTokensMinted(contract IUniverse,address,uint256,uint256,uint256)"></a><code class="function-signature">logReputationTokensMinted(contract IUniverse _universe, address _target, uint256 _amount, uint256 _totalSupply, uint256 _balance) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IAugur.logShareTokensBurned(contract IUniverse,address,uint256,uint256,uint256,uint256)"></a><code class="function-signature">logShareTokensBurned(contract IUniverse _universe, address _target, uint256 _amount, uint256 _totalSupply, uint256 _balance, uint256 _outcome) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IAugur.logShareTokensMinted(contract IUniverse,address,uint256,uint256,uint256,uint256)"></a><code class="function-signature">logShareTokensMinted(contract IUniverse _universe, address _target, uint256 _amount, uint256 _totalSupply, uint256 _balance, uint256 _outcome) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IAugur.logDisputeCrowdsourcerTokensTransferred(contract IUniverse,address,address,uint256,uint256,uint256)"></a><code class="function-signature">logDisputeCrowdsourcerTokensTransferred(contract IUniverse _universe, address _from, address _to, uint256 _value, uint256 _fromBalance, uint256 _toBalance) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IAugur.logDisputeCrowdsourcerTokensBurned(contract IUniverse,address,uint256,uint256,uint256)"></a><code class="function-signature">logDisputeCrowdsourcerTokensBurned(contract IUniverse _universe, address _target, uint256 _amount, uint256 _totalSupply, uint256 _balance) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IAugur.logDisputeCrowdsourcerTokensMinted(contract IUniverse,address,uint256,uint256,uint256)"></a><code class="function-signature">logDisputeCrowdsourcerTokensMinted(contract IUniverse _universe, address _target, uint256 _amount, uint256 _totalSupply, uint256 _balance) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IAugur.logDisputeWindowCreated(contract IDisputeWindow,uint256,bool)"></a><code class="function-signature">logDisputeWindowCreated(contract IDisputeWindow _disputeWindow, uint256 _id, bool _initial) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IAugur.logParticipationTokensRedeemed(contract IUniverse,address,uint256,uint256)"></a><code class="function-signature">logParticipationTokensRedeemed(contract IUniverse universe, address _sender, uint256 _attoParticipationTokens, uint256 _feePayoutShare) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IAugur.logTimestampSet(uint256)"></a><code class="function-signature">logTimestampSet(uint256 _newTimestamp) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IAugur.logInitialReporterTransferred(contract IUniverse,contract IMarket,address,address)"></a><code class="function-signature">logInitialReporterTransferred(contract IUniverse _universe, contract IMarket _market, address _from, address _to) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IAugur.logMarketTransferred(contract IUniverse,address,address)"></a><code class="function-signature">logMarketTransferred(contract IUniverse _universe, address _from, address _to) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IAugur.logParticipationTokensTransferred(contract IUniverse,address,address,uint256,uint256,uint256)"></a><code class="function-signature">logParticipationTokensTransferred(contract IUniverse _universe, address _from, address _to, uint256 _value, uint256 _fromBalance, uint256 _toBalance) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IAugur.logParticipationTokensBurned(contract IUniverse,address,uint256,uint256,uint256)"></a><code class="function-signature">logParticipationTokensBurned(contract IUniverse _universe, address _target, uint256 _amount, uint256 _totalSupply, uint256 _balance) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IAugur.logParticipationTokensMinted(contract IUniverse,address,uint256,uint256,uint256)"></a><code class="function-signature">logParticipationTokensMinted(contract IUniverse _universe, address _target, uint256 _amount, uint256 _totalSupply, uint256 _balance) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IAugur.logMarketVolumeChanged(contract IUniverse,address,uint256,uint256[])"></a><code class="function-signature">logMarketVolumeChanged(contract IUniverse _universe, address _market, uint256 _volume, uint256[] _outcomeVolumes) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IAugur.logProfitLossChanged(contract IMarket,address,uint256,int256,uint256,int256,int256,int256)"></a><code class="function-signature">logProfitLossChanged(contract IMarket _market, address _account, uint256 _outcome, int256 _netPosition, uint256 _avgPrice, int256 _realizedProfit, int256 _frozenFunds, int256 _realizedCost) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IAugur.isKnownFeeSender(address)"></a><code class="function-signature">isKnownFeeSender(address _feeSender) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IAugur.isKnownShareToken(contract IShareToken)"></a><code class="function-signature">isKnownShareToken(contract IShareToken _token) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IAugur.lookup(bytes32)"></a><code class="function-signature">lookup(bytes32 _key) <span class="return-arrow">→</span> <span class="return-type">address</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IAugur.getTimestamp()"></a><code class="function-signature">getTimestamp() <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IAugur.getMaximumMarketEndDate()"></a><code class="function-signature">getMaximumMarketEndDate() <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IAugur.isKnownMarket(contract IMarket)"></a><code class="function-signature">isKnownMarket(contract IMarket _market) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IAugur.derivePayoutDistributionHash(uint256[],uint256,uint256)"></a><code class="function-signature">derivePayoutDistributionHash(uint256[] _payoutNumerators, uint256 _numTicks, uint256 numOutcomes) <span class="return-arrow">→</span> <span class="return-type">bytes32</span></code><span class="function-visibility">public</span></h4>







### `ICancelOrder`



<div class="contract-index"></div>





### `ICash`



<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#ICash.joinMint(address,uint256)"><code class="function-signature">joinMint(address usr, uint256 wad)</code></a></li><li><a href="#ICash.joinBurn(address,uint256)"><code class="function-signature">joinBurn(address usr, uint256 wad)</code></a></li><li class="inherited"><a href="trading#IERC20.totalSupply()"><code class="function-signature">totalSupply()</code></a></li><li class="inherited"><a href="trading#IERC20.balanceOf(address)"><code class="function-signature">balanceOf(address owner)</code></a></li><li class="inherited"><a href="trading#IERC20.transfer(address,uint256)"><code class="function-signature">transfer(address to, uint256 amount)</code></a></li><li class="inherited"><a href="trading#IERC20.transferFrom(address,address,uint256)"><code class="function-signature">transferFrom(address from, address to, uint256 amount)</code></a></li><li class="inherited"><a href="trading#IERC20.approve(address,uint256)"><code class="function-signature">approve(address spender, uint256 amount)</code></a></li><li class="inherited"><a href="trading#IERC20.allowance(address,address)"><code class="function-signature">allowance(address owner, address spender)</code></a></li></ul><span class="contract-index-title">Events</span><ul><li class="inherited"><a href="trading#IERC20.Transfer(address,address,uint256)"><code class="function-signature">Transfer(address from, address to, uint256 value)</code></a></li><li class="inherited"><a href="trading#IERC20.Approval(address,address,uint256)"><code class="function-signature">Approval(address owner, address spender, uint256 value)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="ICash.joinMint(address,uint256)"></a><code class="function-signature">joinMint(address usr, uint256 wad) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="ICash.joinBurn(address,uint256)"></a><code class="function-signature">joinBurn(address usr, uint256 wad) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>







### `IDisputeWindow`



<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#IDisputeWindow.initialize(contract IAugur,contract IUniverse,uint256,uint256,uint256,address)"><code class="function-signature">initialize(contract IAugur _augur, contract IUniverse _universe, uint256 _disputeWindowId, uint256 _duration, uint256 _startTime, address _erc1820RegistryAddress)</code></a></li><li><a href="#IDisputeWindow.getUniverse()"><code class="function-signature">getUniverse()</code></a></li><li><a href="#IDisputeWindow.getReputationToken()"><code class="function-signature">getReputationToken()</code></a></li><li><a href="#IDisputeWindow.getStartTime()"><code class="function-signature">getStartTime()</code></a></li><li><a href="#IDisputeWindow.getEndTime()"><code class="function-signature">getEndTime()</code></a></li><li><a href="#IDisputeWindow.getWindowId()"><code class="function-signature">getWindowId()</code></a></li><li><a href="#IDisputeWindow.isActive()"><code class="function-signature">isActive()</code></a></li><li><a href="#IDisputeWindow.isOver()"><code class="function-signature">isOver()</code></a></li><li><a href="#IDisputeWindow.onMarketFinalized()"><code class="function-signature">onMarketFinalized()</code></a></li><li><a href="#IDisputeWindow.redeem(address)"><code class="function-signature">redeem(address _account)</code></a></li><li class="inherited"><a href="trading#IERC20.totalSupply()"><code class="function-signature">totalSupply()</code></a></li><li class="inherited"><a href="trading#IERC20.balanceOf(address)"><code class="function-signature">balanceOf(address owner)</code></a></li><li class="inherited"><a href="trading#IERC20.transfer(address,uint256)"><code class="function-signature">transfer(address to, uint256 amount)</code></a></li><li class="inherited"><a href="trading#IERC20.transferFrom(address,address,uint256)"><code class="function-signature">transferFrom(address from, address to, uint256 amount)</code></a></li><li class="inherited"><a href="trading#IERC20.approve(address,uint256)"><code class="function-signature">approve(address spender, uint256 amount)</code></a></li><li class="inherited"><a href="trading#IERC20.allowance(address,address)"><code class="function-signature">allowance(address owner, address spender)</code></a></li><li class="inherited"><a href="trading#ITyped.getTypeName()"><code class="function-signature">getTypeName()</code></a></li></ul><span class="contract-index-title">Events</span><ul><li class="inherited"><a href="trading#IERC20.Transfer(address,address,uint256)"><code class="function-signature">Transfer(address from, address to, uint256 value)</code></a></li><li class="inherited"><a href="trading#IERC20.Approval(address,address,uint256)"><code class="function-signature">Approval(address owner, address spender, uint256 value)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="IDisputeWindow.initialize(contract IAugur,contract IUniverse,uint256,uint256,uint256,address)"></a><code class="function-signature">initialize(contract IAugur _augur, contract IUniverse _universe, uint256 _disputeWindowId, uint256 _duration, uint256 _startTime, address _erc1820RegistryAddress)</code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IDisputeWindow.getUniverse()"></a><code class="function-signature">getUniverse() <span class="return-arrow">→</span> <span class="return-type">contract IUniverse</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IDisputeWindow.getReputationToken()"></a><code class="function-signature">getReputationToken() <span class="return-arrow">→</span> <span class="return-type">contract IReputationToken</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IDisputeWindow.getStartTime()"></a><code class="function-signature">getStartTime() <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IDisputeWindow.getEndTime()"></a><code class="function-signature">getEndTime() <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IDisputeWindow.getWindowId()"></a><code class="function-signature">getWindowId() <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IDisputeWindow.isActive()"></a><code class="function-signature">isActive() <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IDisputeWindow.isOver()"></a><code class="function-signature">isOver() <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IDisputeWindow.onMarketFinalized()"></a><code class="function-signature">onMarketFinalized()</code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IDisputeWindow.redeem(address)"></a><code class="function-signature">redeem(address _account) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>







### `IERC20`



<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#IERC20.totalSupply()"><code class="function-signature">totalSupply()</code></a></li><li><a href="#IERC20.balanceOf(address)"><code class="function-signature">balanceOf(address owner)</code></a></li><li><a href="#IERC20.transfer(address,uint256)"><code class="function-signature">transfer(address to, uint256 amount)</code></a></li><li><a href="#IERC20.transferFrom(address,address,uint256)"><code class="function-signature">transferFrom(address from, address to, uint256 amount)</code></a></li><li><a href="#IERC20.approve(address,uint256)"><code class="function-signature">approve(address spender, uint256 amount)</code></a></li><li><a href="#IERC20.allowance(address,address)"><code class="function-signature">allowance(address owner, address spender)</code></a></li></ul><span class="contract-index-title">Events</span><ul><li><a href="#IERC20.Transfer(address,address,uint256)"><code class="function-signature">Transfer(address from, address to, uint256 value)</code></a></li><li><a href="#IERC20.Approval(address,address,uint256)"><code class="function-signature">Approval(address owner, address spender, uint256 value)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="IERC20.totalSupply()"></a><code class="function-signature">totalSupply() <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IERC20.balanceOf(address)"></a><code class="function-signature">balanceOf(address owner) <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IERC20.transfer(address,uint256)"></a><code class="function-signature">transfer(address to, uint256 amount) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IERC20.transferFrom(address,address,uint256)"></a><code class="function-signature">transferFrom(address from, address to, uint256 amount) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IERC20.approve(address,uint256)"></a><code class="function-signature">approve(address spender, uint256 amount) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IERC20.allowance(address,address)"></a><code class="function-signature">allowance(address owner, address spender) <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">public</span></h4>







<h4><a class="anchor" aria-hidden="true" id="IERC20.Transfer(address,address,uint256)"></a><code class="function-signature">Transfer(address from, address to, uint256 value)</code><span class="function-visibility"></span></h4>





<h4><a class="anchor" aria-hidden="true" id="IERC20.Approval(address,address,uint256)"></a><code class="function-signature">Approval(address owner, address spender, uint256 value)</code><span class="function-visibility"></span></h4>





### `IInitialReporter`



<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#IInitialReporter.initialize(contract IAugur,contract IMarket,address)"><code class="function-signature">initialize(contract IAugur _augur, contract IMarket _market, address _designatedReporter)</code></a></li><li><a href="#IInitialReporter.report(address,bytes32,uint256[],uint256)"><code class="function-signature">report(address _reporter, bytes32 _payoutDistributionHash, uint256[] _payoutNumerators, uint256 _initialReportStake)</code></a></li><li><a href="#IInitialReporter.designatedReporterShowed()"><code class="function-signature">designatedReporterShowed()</code></a></li><li><a href="#IInitialReporter.designatedReporterWasCorrect()"><code class="function-signature">designatedReporterWasCorrect()</code></a></li><li><a href="#IInitialReporter.getDesignatedReporter()"><code class="function-signature">getDesignatedReporter()</code></a></li><li><a href="#IInitialReporter.getReportTimestamp()"><code class="function-signature">getReportTimestamp()</code></a></li><li><a href="#IInitialReporter.migrateToNewUniverse(address)"><code class="function-signature">migrateToNewUniverse(address _designatedReporter)</code></a></li><li><a href="#IInitialReporter.returnRepFromDisavow()"><code class="function-signature">returnRepFromDisavow()</code></a></li><li class="inherited"><a href="trading#IReportingParticipant.getStake()"><code class="function-signature">getStake()</code></a></li><li class="inherited"><a href="trading#IReportingParticipant.getPayoutDistributionHash()"><code class="function-signature">getPayoutDistributionHash()</code></a></li><li class="inherited"><a href="trading#IReportingParticipant.liquidateLosing()"><code class="function-signature">liquidateLosing()</code></a></li><li class="inherited"><a href="trading#IReportingParticipant.redeem(address)"><code class="function-signature">redeem(address _redeemer)</code></a></li><li class="inherited"><a href="trading#IReportingParticipant.isDisavowed()"><code class="function-signature">isDisavowed()</code></a></li><li class="inherited"><a href="trading#IReportingParticipant.getPayoutNumerator(uint256)"><code class="function-signature">getPayoutNumerator(uint256 _outcome)</code></a></li><li class="inherited"><a href="trading#IReportingParticipant.getPayoutNumerators()"><code class="function-signature">getPayoutNumerators()</code></a></li><li class="inherited"><a href="trading#IReportingParticipant.getMarket()"><code class="function-signature">getMarket()</code></a></li><li class="inherited"><a href="trading#IReportingParticipant.getSize()"><code class="function-signature">getSize()</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="IInitialReporter.initialize(contract IAugur,contract IMarket,address)"></a><code class="function-signature">initialize(contract IAugur _augur, contract IMarket _market, address _designatedReporter)</code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IInitialReporter.report(address,bytes32,uint256[],uint256)"></a><code class="function-signature">report(address _reporter, bytes32 _payoutDistributionHash, uint256[] _payoutNumerators, uint256 _initialReportStake)</code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IInitialReporter.designatedReporterShowed()"></a><code class="function-signature">designatedReporterShowed() <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IInitialReporter.designatedReporterWasCorrect()"></a><code class="function-signature">designatedReporterWasCorrect() <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IInitialReporter.getDesignatedReporter()"></a><code class="function-signature">getDesignatedReporter() <span class="return-arrow">→</span> <span class="return-type">address</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IInitialReporter.getReportTimestamp()"></a><code class="function-signature">getReportTimestamp() <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IInitialReporter.migrateToNewUniverse(address)"></a><code class="function-signature">migrateToNewUniverse(address _designatedReporter)</code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IInitialReporter.returnRepFromDisavow()"></a><code class="function-signature">returnRepFromDisavow()</code><span class="function-visibility">public</span></h4>







### `IMarket`



<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#IMarket.initialize(contract IAugur,contract IUniverse,uint256,uint256,uint256,address,address,uint256,uint256)"><code class="function-signature">initialize(contract IAugur _augur, contract IUniverse _universe, uint256 _endTime, uint256 _feePerCashInAttoCash, uint256 _affiliateFeeDivisor, address _designatedReporterAddress, address _creator, uint256 _numOutcomes, uint256 _numTicks)</code></a></li><li><a href="#IMarket.derivePayoutDistributionHash(uint256[])"><code class="function-signature">derivePayoutDistributionHash(uint256[] _payoutNumerators)</code></a></li><li><a href="#IMarket.getUniverse()"><code class="function-signature">getUniverse()</code></a></li><li><a href="#IMarket.getDisputeWindow()"><code class="function-signature">getDisputeWindow()</code></a></li><li><a href="#IMarket.getNumberOfOutcomes()"><code class="function-signature">getNumberOfOutcomes()</code></a></li><li><a href="#IMarket.getNumTicks()"><code class="function-signature">getNumTicks()</code></a></li><li><a href="#IMarket.getShareToken(uint256)"><code class="function-signature">getShareToken(uint256 _outcome)</code></a></li><li><a href="#IMarket.getMarketCreatorSettlementFeeDivisor()"><code class="function-signature">getMarketCreatorSettlementFeeDivisor()</code></a></li><li><a href="#IMarket.getForkingMarket()"><code class="function-signature">getForkingMarket()</code></a></li><li><a href="#IMarket.getEndTime()"><code class="function-signature">getEndTime()</code></a></li><li><a href="#IMarket.getWinningPayoutDistributionHash()"><code class="function-signature">getWinningPayoutDistributionHash()</code></a></li><li><a href="#IMarket.getWinningPayoutNumerator(uint256)"><code class="function-signature">getWinningPayoutNumerator(uint256 _outcome)</code></a></li><li><a href="#IMarket.getWinningReportingParticipant()"><code class="function-signature">getWinningReportingParticipant()</code></a></li><li><a href="#IMarket.getReputationToken()"><code class="function-signature">getReputationToken()</code></a></li><li><a href="#IMarket.getFinalizationTime()"><code class="function-signature">getFinalizationTime()</code></a></li><li><a href="#IMarket.getInitialReporter()"><code class="function-signature">getInitialReporter()</code></a></li><li><a href="#IMarket.getDesignatedReportingEndTime()"><code class="function-signature">getDesignatedReportingEndTime()</code></a></li><li><a href="#IMarket.getValidityBondAttoCash()"><code class="function-signature">getValidityBondAttoCash()</code></a></li><li><a href="#IMarket.deriveMarketCreatorFeeAmount(uint256)"><code class="function-signature">deriveMarketCreatorFeeAmount(uint256 _amount)</code></a></li><li><a href="#IMarket.recordMarketCreatorFees(uint256,address)"><code class="function-signature">recordMarketCreatorFees(uint256 _marketCreatorFees, address _affiliateAddress)</code></a></li><li><a href="#IMarket.isContainerForShareToken(contract IShareToken)"><code class="function-signature">isContainerForShareToken(contract IShareToken _shadyTarget)</code></a></li><li><a href="#IMarket.isContainerForReportingParticipant(contract IReportingParticipant)"><code class="function-signature">isContainerForReportingParticipant(contract IReportingParticipant _reportingParticipant)</code></a></li><li><a href="#IMarket.isInvalid()"><code class="function-signature">isInvalid()</code></a></li><li><a href="#IMarket.finalize()"><code class="function-signature">finalize()</code></a></li><li><a href="#IMarket.designatedReporterWasCorrect()"><code class="function-signature">designatedReporterWasCorrect()</code></a></li><li><a href="#IMarket.designatedReporterShowed()"><code class="function-signature">designatedReporterShowed()</code></a></li><li><a href="#IMarket.isFinalized()"><code class="function-signature">isFinalized()</code></a></li><li><a href="#IMarket.assertBalances()"><code class="function-signature">assertBalances()</code></a></li><li class="inherited"><a href="trading#IOwnable.getOwner()"><code class="function-signature">getOwner()</code></a></li><li class="inherited"><a href="trading#IOwnable.transferOwnership(address)"><code class="function-signature">transferOwnership(address _newOwner)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="IMarket.initialize(contract IAugur,contract IUniverse,uint256,uint256,uint256,address,address,uint256,uint256)"></a><code class="function-signature">initialize(contract IAugur _augur, contract IUniverse _universe, uint256 _endTime, uint256 _feePerCashInAttoCash, uint256 _affiliateFeeDivisor, address _designatedReporterAddress, address _creator, uint256 _numOutcomes, uint256 _numTicks)</code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IMarket.derivePayoutDistributionHash(uint256[])"></a><code class="function-signature">derivePayoutDistributionHash(uint256[] _payoutNumerators) <span class="return-arrow">→</span> <span class="return-type">bytes32</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IMarket.getUniverse()"></a><code class="function-signature">getUniverse() <span class="return-arrow">→</span> <span class="return-type">contract IUniverse</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IMarket.getDisputeWindow()"></a><code class="function-signature">getDisputeWindow() <span class="return-arrow">→</span> <span class="return-type">contract IDisputeWindow</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IMarket.getNumberOfOutcomes()"></a><code class="function-signature">getNumberOfOutcomes() <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IMarket.getNumTicks()"></a><code class="function-signature">getNumTicks() <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IMarket.getShareToken(uint256)"></a><code class="function-signature">getShareToken(uint256 _outcome) <span class="return-arrow">→</span> <span class="return-type">contract IShareToken</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IMarket.getMarketCreatorSettlementFeeDivisor()"></a><code class="function-signature">getMarketCreatorSettlementFeeDivisor() <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IMarket.getForkingMarket()"></a><code class="function-signature">getForkingMarket() <span class="return-arrow">→</span> <span class="return-type">contract IMarket</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IMarket.getEndTime()"></a><code class="function-signature">getEndTime() <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IMarket.getWinningPayoutDistributionHash()"></a><code class="function-signature">getWinningPayoutDistributionHash() <span class="return-arrow">→</span> <span class="return-type">bytes32</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IMarket.getWinningPayoutNumerator(uint256)"></a><code class="function-signature">getWinningPayoutNumerator(uint256 _outcome) <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IMarket.getWinningReportingParticipant()"></a><code class="function-signature">getWinningReportingParticipant() <span class="return-arrow">→</span> <span class="return-type">contract IReportingParticipant</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IMarket.getReputationToken()"></a><code class="function-signature">getReputationToken() <span class="return-arrow">→</span> <span class="return-type">contract IV2ReputationToken</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IMarket.getFinalizationTime()"></a><code class="function-signature">getFinalizationTime() <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IMarket.getInitialReporter()"></a><code class="function-signature">getInitialReporter() <span class="return-arrow">→</span> <span class="return-type">contract IInitialReporter</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IMarket.getDesignatedReportingEndTime()"></a><code class="function-signature">getDesignatedReportingEndTime() <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IMarket.getValidityBondAttoCash()"></a><code class="function-signature">getValidityBondAttoCash() <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IMarket.deriveMarketCreatorFeeAmount(uint256)"></a><code class="function-signature">deriveMarketCreatorFeeAmount(uint256 _amount) <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IMarket.recordMarketCreatorFees(uint256,address)"></a><code class="function-signature">recordMarketCreatorFees(uint256 _marketCreatorFees, address _affiliateAddress) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IMarket.isContainerForShareToken(contract IShareToken)"></a><code class="function-signature">isContainerForShareToken(contract IShareToken _shadyTarget) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IMarket.isContainerForReportingParticipant(contract IReportingParticipant)"></a><code class="function-signature">isContainerForReportingParticipant(contract IReportingParticipant _reportingParticipant) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IMarket.isInvalid()"></a><code class="function-signature">isInvalid() <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IMarket.finalize()"></a><code class="function-signature">finalize() <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IMarket.designatedReporterWasCorrect()"></a><code class="function-signature">designatedReporterWasCorrect() <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IMarket.designatedReporterShowed()"></a><code class="function-signature">designatedReporterShowed() <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IMarket.isFinalized()"></a><code class="function-signature">isFinalized() <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IMarket.assertBalances()"></a><code class="function-signature">assertBalances() <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>







### `IOrders`



<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#IOrders.saveOrder(enum Order.Types,contract IMarket,uint256,uint256,address,uint256,uint256,uint256,bytes32,bytes32,bytes32,contract IERC20)"><code class="function-signature">saveOrder(enum Order.Types _type, contract IMarket _market, uint256 _amount, uint256 _price, address _sender, uint256 _outcome, uint256 _moneyEscrowed, uint256 _sharesEscrowed, bytes32 _betterOrderId, bytes32 _worseOrderId, bytes32 _tradeGroupId, contract IERC20 _kycToken)</code></a></li><li><a href="#IOrders.removeOrder(bytes32)"><code class="function-signature">removeOrder(bytes32 _orderId)</code></a></li><li><a href="#IOrders.getMarket(bytes32)"><code class="function-signature">getMarket(bytes32 _orderId)</code></a></li><li><a href="#IOrders.getOrderType(bytes32)"><code class="function-signature">getOrderType(bytes32 _orderId)</code></a></li><li><a href="#IOrders.getOutcome(bytes32)"><code class="function-signature">getOutcome(bytes32 _orderId)</code></a></li><li><a href="#IOrders.getAmount(bytes32)"><code class="function-signature">getAmount(bytes32 _orderId)</code></a></li><li><a href="#IOrders.getPrice(bytes32)"><code class="function-signature">getPrice(bytes32 _orderId)</code></a></li><li><a href="#IOrders.getOrderCreator(bytes32)"><code class="function-signature">getOrderCreator(bytes32 _orderId)</code></a></li><li><a href="#IOrders.getOrderSharesEscrowed(bytes32)"><code class="function-signature">getOrderSharesEscrowed(bytes32 _orderId)</code></a></li><li><a href="#IOrders.getOrderMoneyEscrowed(bytes32)"><code class="function-signature">getOrderMoneyEscrowed(bytes32 _orderId)</code></a></li><li><a href="#IOrders.getOrderDataForLogs(bytes32)"><code class="function-signature">getOrderDataForLogs(bytes32 _orderId)</code></a></li><li><a href="#IOrders.getBetterOrderId(bytes32)"><code class="function-signature">getBetterOrderId(bytes32 _orderId)</code></a></li><li><a href="#IOrders.getWorseOrderId(bytes32)"><code class="function-signature">getWorseOrderId(bytes32 _orderId)</code></a></li><li><a href="#IOrders.getKYCToken(bytes32)"><code class="function-signature">getKYCToken(bytes32 _orderId)</code></a></li><li><a href="#IOrders.getBestOrderId(enum Order.Types,contract IMarket,uint256,contract IERC20)"><code class="function-signature">getBestOrderId(enum Order.Types _type, contract IMarket _market, uint256 _outcome, contract IERC20 _kycToken)</code></a></li><li><a href="#IOrders.getWorstOrderId(enum Order.Types,contract IMarket,uint256,contract IERC20)"><code class="function-signature">getWorstOrderId(enum Order.Types _type, contract IMarket _market, uint256 _outcome, contract IERC20 _kycToken)</code></a></li><li><a href="#IOrders.getLastOutcomePrice(contract IMarket,uint256)"><code class="function-signature">getLastOutcomePrice(contract IMarket _market, uint256 _outcome)</code></a></li><li><a href="#IOrders.getOrderId(enum Order.Types,contract IMarket,uint256,uint256,address,uint256,uint256,uint256,uint256,contract IERC20)"><code class="function-signature">getOrderId(enum Order.Types _type, contract IMarket _market, uint256 _amount, uint256 _price, address _sender, uint256 _blockNumber, uint256 _outcome, uint256 _moneyEscrowed, uint256 _sharesEscrowed, contract IERC20 _kycToken)</code></a></li><li><a href="#IOrders.getTotalEscrowed(contract IMarket)"><code class="function-signature">getTotalEscrowed(contract IMarket _market)</code></a></li><li><a href="#IOrders.isBetterPrice(enum Order.Types,uint256,bytes32)"><code class="function-signature">isBetterPrice(enum Order.Types _type, uint256 _price, bytes32 _orderId)</code></a></li><li><a href="#IOrders.isWorsePrice(enum Order.Types,uint256,bytes32)"><code class="function-signature">isWorsePrice(enum Order.Types _type, uint256 _price, bytes32 _orderId)</code></a></li><li><a href="#IOrders.assertIsNotBetterPrice(enum Order.Types,uint256,bytes32)"><code class="function-signature">assertIsNotBetterPrice(enum Order.Types _type, uint256 _price, bytes32 _betterOrderId)</code></a></li><li><a href="#IOrders.assertIsNotWorsePrice(enum Order.Types,uint256,bytes32)"><code class="function-signature">assertIsNotWorsePrice(enum Order.Types _type, uint256 _price, bytes32 _worseOrderId)</code></a></li><li><a href="#IOrders.recordFillOrder(bytes32,uint256,uint256,uint256)"><code class="function-signature">recordFillOrder(bytes32 _orderId, uint256 _sharesFilled, uint256 _tokensFilled, uint256 _fill)</code></a></li><li><a href="#IOrders.setPrice(contract IMarket,uint256,uint256)"><code class="function-signature">setPrice(contract IMarket _market, uint256 _outcome, uint256 _price)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="IOrders.saveOrder(enum Order.Types,contract IMarket,uint256,uint256,address,uint256,uint256,uint256,bytes32,bytes32,bytes32,contract IERC20)"></a><code class="function-signature">saveOrder(enum Order.Types _type, contract IMarket _market, uint256 _amount, uint256 _price, address _sender, uint256 _outcome, uint256 _moneyEscrowed, uint256 _sharesEscrowed, bytes32 _betterOrderId, bytes32 _worseOrderId, bytes32 _tradeGroupId, contract IERC20 _kycToken) <span class="return-arrow">→</span> <span class="return-type">bytes32</span></code><span class="function-visibility">external</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IOrders.removeOrder(bytes32)"></a><code class="function-signature">removeOrder(bytes32 _orderId) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">external</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IOrders.getMarket(bytes32)"></a><code class="function-signature">getMarket(bytes32 _orderId) <span class="return-arrow">→</span> <span class="return-type">contract IMarket</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IOrders.getOrderType(bytes32)"></a><code class="function-signature">getOrderType(bytes32 _orderId) <span class="return-arrow">→</span> <span class="return-type">enum Order.Types</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IOrders.getOutcome(bytes32)"></a><code class="function-signature">getOutcome(bytes32 _orderId) <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IOrders.getAmount(bytes32)"></a><code class="function-signature">getAmount(bytes32 _orderId) <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IOrders.getPrice(bytes32)"></a><code class="function-signature">getPrice(bytes32 _orderId) <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IOrders.getOrderCreator(bytes32)"></a><code class="function-signature">getOrderCreator(bytes32 _orderId) <span class="return-arrow">→</span> <span class="return-type">address</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IOrders.getOrderSharesEscrowed(bytes32)"></a><code class="function-signature">getOrderSharesEscrowed(bytes32 _orderId) <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IOrders.getOrderMoneyEscrowed(bytes32)"></a><code class="function-signature">getOrderMoneyEscrowed(bytes32 _orderId) <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IOrders.getOrderDataForLogs(bytes32)"></a><code class="function-signature">getOrderDataForLogs(bytes32 _orderId) <span class="return-arrow">→</span> <span class="return-type">enum Order.Types,address[],uint256[]</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IOrders.getBetterOrderId(bytes32)"></a><code class="function-signature">getBetterOrderId(bytes32 _orderId) <span class="return-arrow">→</span> <span class="return-type">bytes32</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IOrders.getWorseOrderId(bytes32)"></a><code class="function-signature">getWorseOrderId(bytes32 _orderId) <span class="return-arrow">→</span> <span class="return-type">bytes32</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IOrders.getKYCToken(bytes32)"></a><code class="function-signature">getKYCToken(bytes32 _orderId) <span class="return-arrow">→</span> <span class="return-type">contract IERC20</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IOrders.getBestOrderId(enum Order.Types,contract IMarket,uint256,contract IERC20)"></a><code class="function-signature">getBestOrderId(enum Order.Types _type, contract IMarket _market, uint256 _outcome, contract IERC20 _kycToken) <span class="return-arrow">→</span> <span class="return-type">bytes32</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IOrders.getWorstOrderId(enum Order.Types,contract IMarket,uint256,contract IERC20)"></a><code class="function-signature">getWorstOrderId(enum Order.Types _type, contract IMarket _market, uint256 _outcome, contract IERC20 _kycToken) <span class="return-arrow">→</span> <span class="return-type">bytes32</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IOrders.getLastOutcomePrice(contract IMarket,uint256)"></a><code class="function-signature">getLastOutcomePrice(contract IMarket _market, uint256 _outcome) <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IOrders.getOrderId(enum Order.Types,contract IMarket,uint256,uint256,address,uint256,uint256,uint256,uint256,contract IERC20)"></a><code class="function-signature">getOrderId(enum Order.Types _type, contract IMarket _market, uint256 _amount, uint256 _price, address _sender, uint256 _blockNumber, uint256 _outcome, uint256 _moneyEscrowed, uint256 _sharesEscrowed, contract IERC20 _kycToken) <span class="return-arrow">→</span> <span class="return-type">bytes32</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IOrders.getTotalEscrowed(contract IMarket)"></a><code class="function-signature">getTotalEscrowed(contract IMarket _market) <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IOrders.isBetterPrice(enum Order.Types,uint256,bytes32)"></a><code class="function-signature">isBetterPrice(enum Order.Types _type, uint256 _price, bytes32 _orderId) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IOrders.isWorsePrice(enum Order.Types,uint256,bytes32)"></a><code class="function-signature">isWorsePrice(enum Order.Types _type, uint256 _price, bytes32 _orderId) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IOrders.assertIsNotBetterPrice(enum Order.Types,uint256,bytes32)"></a><code class="function-signature">assertIsNotBetterPrice(enum Order.Types _type, uint256 _price, bytes32 _betterOrderId) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IOrders.assertIsNotWorsePrice(enum Order.Types,uint256,bytes32)"></a><code class="function-signature">assertIsNotWorsePrice(enum Order.Types _type, uint256 _price, bytes32 _worseOrderId) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IOrders.recordFillOrder(bytes32,uint256,uint256,uint256)"></a><code class="function-signature">recordFillOrder(bytes32 _orderId, uint256 _sharesFilled, uint256 _tokensFilled, uint256 _fill) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">external</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IOrders.setPrice(contract IMarket,uint256,uint256)"></a><code class="function-signature">setPrice(contract IMarket _market, uint256 _outcome, uint256 _price) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">external</span></h4>







### `IOwnable`



<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#IOwnable.getOwner()"><code class="function-signature">getOwner()</code></a></li><li><a href="#IOwnable.transferOwnership(address)"><code class="function-signature">transferOwnership(address _newOwner)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="IOwnable.getOwner()"></a><code class="function-signature">getOwner() <span class="return-arrow">→</span> <span class="return-type">address</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IOwnable.transferOwnership(address)"></a><code class="function-signature">transferOwnership(address _newOwner) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>







### `IProfitLoss`



<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#IProfitLoss.initialize(contract IAugur)"><code class="function-signature">initialize(contract IAugur _augur)</code></a></li><li><a href="#IProfitLoss.recordFrozenFundChange(contract IMarket,address,uint256,int256)"><code class="function-signature">recordFrozenFundChange(contract IMarket _market, address _account, uint256 _outcome, int256 _frozenFundDelta)</code></a></li><li><a href="#IProfitLoss.adjustTraderProfitForFees(contract IMarket,address,uint256,uint256)"><code class="function-signature">adjustTraderProfitForFees(contract IMarket _market, address _trader, uint256 _outcome, uint256 _fees)</code></a></li><li><a href="#IProfitLoss.recordTrade(contract IMarket,address,address,uint256,int256,int256,uint256,uint256,uint256,uint256)"><code class="function-signature">recordTrade(contract IMarket _market, address _longAddress, address _shortAddress, uint256 _outcome, int256 _amount, int256 _price, uint256 _numLongTokens, uint256 _numShortTokens, uint256 _numLongShares, uint256 _numShortShares)</code></a></li><li><a href="#IProfitLoss.recordClaim(contract IMarket,address,uint256[])"><code class="function-signature">recordClaim(contract IMarket _market, address _account, uint256[] _outcomeFees)</code></a></li><li><a href="#IProfitLoss.recordExternalTransfer(address,address,uint256)"><code class="function-signature">recordExternalTransfer(address _source, address _destination, uint256 _value)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="IProfitLoss.initialize(contract IAugur)"></a><code class="function-signature">initialize(contract IAugur _augur)</code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IProfitLoss.recordFrozenFundChange(contract IMarket,address,uint256,int256)"></a><code class="function-signature">recordFrozenFundChange(contract IMarket _market, address _account, uint256 _outcome, int256 _frozenFundDelta) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IProfitLoss.adjustTraderProfitForFees(contract IMarket,address,uint256,uint256)"></a><code class="function-signature">adjustTraderProfitForFees(contract IMarket _market, address _trader, uint256 _outcome, uint256 _fees) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IProfitLoss.recordTrade(contract IMarket,address,address,uint256,int256,int256,uint256,uint256,uint256,uint256)"></a><code class="function-signature">recordTrade(contract IMarket _market, address _longAddress, address _shortAddress, uint256 _outcome, int256 _amount, int256 _price, uint256 _numLongTokens, uint256 _numShortTokens, uint256 _numLongShares, uint256 _numShortShares) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IProfitLoss.recordClaim(contract IMarket,address,uint256[])"></a><code class="function-signature">recordClaim(contract IMarket _market, address _account, uint256[] _outcomeFees) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IProfitLoss.recordExternalTransfer(address,address,uint256)"></a><code class="function-signature">recordExternalTransfer(address _source, address _destination, uint256 _value) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>







### `IReportingParticipant`



<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#IReportingParticipant.getStake()"><code class="function-signature">getStake()</code></a></li><li><a href="#IReportingParticipant.getPayoutDistributionHash()"><code class="function-signature">getPayoutDistributionHash()</code></a></li><li><a href="#IReportingParticipant.liquidateLosing()"><code class="function-signature">liquidateLosing()</code></a></li><li><a href="#IReportingParticipant.redeem(address)"><code class="function-signature">redeem(address _redeemer)</code></a></li><li><a href="#IReportingParticipant.isDisavowed()"><code class="function-signature">isDisavowed()</code></a></li><li><a href="#IReportingParticipant.getPayoutNumerator(uint256)"><code class="function-signature">getPayoutNumerator(uint256 _outcome)</code></a></li><li><a href="#IReportingParticipant.getPayoutNumerators()"><code class="function-signature">getPayoutNumerators()</code></a></li><li><a href="#IReportingParticipant.getMarket()"><code class="function-signature">getMarket()</code></a></li><li><a href="#IReportingParticipant.getSize()"><code class="function-signature">getSize()</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="IReportingParticipant.getStake()"></a><code class="function-signature">getStake() <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IReportingParticipant.getPayoutDistributionHash()"></a><code class="function-signature">getPayoutDistributionHash() <span class="return-arrow">→</span> <span class="return-type">bytes32</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IReportingParticipant.liquidateLosing()"></a><code class="function-signature">liquidateLosing()</code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IReportingParticipant.redeem(address)"></a><code class="function-signature">redeem(address _redeemer) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IReportingParticipant.isDisavowed()"></a><code class="function-signature">isDisavowed() <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IReportingParticipant.getPayoutNumerator(uint256)"></a><code class="function-signature">getPayoutNumerator(uint256 _outcome) <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IReportingParticipant.getPayoutNumerators()"></a><code class="function-signature">getPayoutNumerators() <span class="return-arrow">→</span> <span class="return-type">uint256[]</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IReportingParticipant.getMarket()"></a><code class="function-signature">getMarket() <span class="return-arrow">→</span> <span class="return-type">contract IMarket</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IReportingParticipant.getSize()"></a><code class="function-signature">getSize() <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">public</span></h4>







### `IReputationToken`



<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#IReputationToken.migrateOutByPayout(uint256[],uint256)"><code class="function-signature">migrateOutByPayout(uint256[] _payoutNumerators, uint256 _attotokens)</code></a></li><li><a href="#IReputationToken.migrateIn(address,uint256)"><code class="function-signature">migrateIn(address _reporter, uint256 _attotokens)</code></a></li><li><a href="#IReputationToken.trustedReportingParticipantTransfer(address,address,uint256)"><code class="function-signature">trustedReportingParticipantTransfer(address _source, address _destination, uint256 _attotokens)</code></a></li><li><a href="#IReputationToken.trustedMarketTransfer(address,address,uint256)"><code class="function-signature">trustedMarketTransfer(address _source, address _destination, uint256 _attotokens)</code></a></li><li><a href="#IReputationToken.trustedUniverseTransfer(address,address,uint256)"><code class="function-signature">trustedUniverseTransfer(address _source, address _destination, uint256 _attotokens)</code></a></li><li><a href="#IReputationToken.trustedDisputeWindowTransfer(address,address,uint256)"><code class="function-signature">trustedDisputeWindowTransfer(address _source, address _destination, uint256 _attotokens)</code></a></li><li><a href="#IReputationToken.getUniverse()"><code class="function-signature">getUniverse()</code></a></li><li><a href="#IReputationToken.getTotalMigrated()"><code class="function-signature">getTotalMigrated()</code></a></li><li><a href="#IReputationToken.getTotalTheoreticalSupply()"><code class="function-signature">getTotalTheoreticalSupply()</code></a></li><li><a href="#IReputationToken.mintForReportingParticipant(uint256)"><code class="function-signature">mintForReportingParticipant(uint256 _amountMigrated)</code></a></li><li class="inherited"><a href="trading#IERC20.totalSupply()"><code class="function-signature">totalSupply()</code></a></li><li class="inherited"><a href="trading#IERC20.balanceOf(address)"><code class="function-signature">balanceOf(address owner)</code></a></li><li class="inherited"><a href="trading#IERC20.transfer(address,uint256)"><code class="function-signature">transfer(address to, uint256 amount)</code></a></li><li class="inherited"><a href="trading#IERC20.transferFrom(address,address,uint256)"><code class="function-signature">transferFrom(address from, address to, uint256 amount)</code></a></li><li class="inherited"><a href="trading#IERC20.approve(address,uint256)"><code class="function-signature">approve(address spender, uint256 amount)</code></a></li><li class="inherited"><a href="trading#IERC20.allowance(address,address)"><code class="function-signature">allowance(address owner, address spender)</code></a></li></ul><span class="contract-index-title">Events</span><ul><li class="inherited"><a href="trading#IERC20.Transfer(address,address,uint256)"><code class="function-signature">Transfer(address from, address to, uint256 value)</code></a></li><li class="inherited"><a href="trading#IERC20.Approval(address,address,uint256)"><code class="function-signature">Approval(address owner, address spender, uint256 value)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="IReputationToken.migrateOutByPayout(uint256[],uint256)"></a><code class="function-signature">migrateOutByPayout(uint256[] _payoutNumerators, uint256 _attotokens) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IReputationToken.migrateIn(address,uint256)"></a><code class="function-signature">migrateIn(address _reporter, uint256 _attotokens) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IReputationToken.trustedReportingParticipantTransfer(address,address,uint256)"></a><code class="function-signature">trustedReportingParticipantTransfer(address _source, address _destination, uint256 _attotokens) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IReputationToken.trustedMarketTransfer(address,address,uint256)"></a><code class="function-signature">trustedMarketTransfer(address _source, address _destination, uint256 _attotokens) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IReputationToken.trustedUniverseTransfer(address,address,uint256)"></a><code class="function-signature">trustedUniverseTransfer(address _source, address _destination, uint256 _attotokens) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IReputationToken.trustedDisputeWindowTransfer(address,address,uint256)"></a><code class="function-signature">trustedDisputeWindowTransfer(address _source, address _destination, uint256 _attotokens) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IReputationToken.getUniverse()"></a><code class="function-signature">getUniverse() <span class="return-arrow">→</span> <span class="return-type">contract IUniverse</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IReputationToken.getTotalMigrated()"></a><code class="function-signature">getTotalMigrated() <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IReputationToken.getTotalTheoreticalSupply()"></a><code class="function-signature">getTotalTheoreticalSupply() <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IReputationToken.mintForReportingParticipant(uint256)"></a><code class="function-signature">mintForReportingParticipant(uint256 _amountMigrated) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>







### `IShareToken`



<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#IShareToken.initialize(contract IAugur,contract IMarket,uint256,address)"><code class="function-signature">initialize(contract IAugur _augur, contract IMarket _market, uint256 _outcome, address _erc1820RegistryAddress)</code></a></li><li><a href="#IShareToken.createShares(address,uint256)"><code class="function-signature">createShares(address _owner, uint256 _amount)</code></a></li><li><a href="#IShareToken.destroyShares(address,uint256)"><code class="function-signature">destroyShares(address, uint256 balance)</code></a></li><li><a href="#IShareToken.getMarket()"><code class="function-signature">getMarket()</code></a></li><li><a href="#IShareToken.getOutcome()"><code class="function-signature">getOutcome()</code></a></li><li><a href="#IShareToken.trustedOrderTransfer(address,address,uint256)"><code class="function-signature">trustedOrderTransfer(address _source, address _destination, uint256 _attotokens)</code></a></li><li><a href="#IShareToken.trustedFillOrderTransfer(address,address,uint256)"><code class="function-signature">trustedFillOrderTransfer(address _source, address _destination, uint256 _attotokens)</code></a></li><li><a href="#IShareToken.trustedCancelOrderTransfer(address,address,uint256)"><code class="function-signature">trustedCancelOrderTransfer(address _source, address _destination, uint256 _attotokens)</code></a></li><li class="inherited"><a href="trading#IERC20.totalSupply()"><code class="function-signature">totalSupply()</code></a></li><li class="inherited"><a href="trading#IERC20.balanceOf(address)"><code class="function-signature">balanceOf(address owner)</code></a></li><li class="inherited"><a href="trading#IERC20.transfer(address,uint256)"><code class="function-signature">transfer(address to, uint256 amount)</code></a></li><li class="inherited"><a href="trading#IERC20.transferFrom(address,address,uint256)"><code class="function-signature">transferFrom(address from, address to, uint256 amount)</code></a></li><li class="inherited"><a href="trading#IERC20.approve(address,uint256)"><code class="function-signature">approve(address spender, uint256 amount)</code></a></li><li class="inherited"><a href="trading#IERC20.allowance(address,address)"><code class="function-signature">allowance(address owner, address spender)</code></a></li><li class="inherited"><a href="trading#ITyped.getTypeName()"><code class="function-signature">getTypeName()</code></a></li></ul><span class="contract-index-title">Events</span><ul><li class="inherited"><a href="trading#IERC20.Transfer(address,address,uint256)"><code class="function-signature">Transfer(address from, address to, uint256 value)</code></a></li><li class="inherited"><a href="trading#IERC20.Approval(address,address,uint256)"><code class="function-signature">Approval(address owner, address spender, uint256 value)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="IShareToken.initialize(contract IAugur,contract IMarket,uint256,address)"></a><code class="function-signature">initialize(contract IAugur _augur, contract IMarket _market, uint256 _outcome, address _erc1820RegistryAddress)</code><span class="function-visibility">external</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IShareToken.createShares(address,uint256)"></a><code class="function-signature">createShares(address _owner, uint256 _amount) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">external</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IShareToken.destroyShares(address,uint256)"></a><code class="function-signature">destroyShares(address, uint256 balance) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">external</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IShareToken.getMarket()"></a><code class="function-signature">getMarket() <span class="return-arrow">→</span> <span class="return-type">contract IMarket</span></code><span class="function-visibility">external</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IShareToken.getOutcome()"></a><code class="function-signature">getOutcome() <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">external</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IShareToken.trustedOrderTransfer(address,address,uint256)"></a><code class="function-signature">trustedOrderTransfer(address _source, address _destination, uint256 _attotokens) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IShareToken.trustedFillOrderTransfer(address,address,uint256)"></a><code class="function-signature">trustedFillOrderTransfer(address _source, address _destination, uint256 _attotokens) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IShareToken.trustedCancelOrderTransfer(address,address,uint256)"></a><code class="function-signature">trustedCancelOrderTransfer(address _source, address _destination, uint256 _attotokens) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>







### `IStandardToken`



<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#IStandardToken.noHooksTransfer(address,uint256)"><code class="function-signature">noHooksTransfer(address recipient, uint256 amount)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="IStandardToken.noHooksTransfer(address,uint256)"></a><code class="function-signature">noHooksTransfer(address recipient, uint256 amount) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">external</span></h4>







### `ITyped`



<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#ITyped.getTypeName()"><code class="function-signature">getTypeName()</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="ITyped.getTypeName()"></a><code class="function-signature">getTypeName() <span class="return-arrow">→</span> <span class="return-type">bytes32</span></code><span class="function-visibility">public</span></h4>







### `IUniverse`



<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#IUniverse.fork()"><code class="function-signature">fork()</code></a></li><li><a href="#IUniverse.updateForkValues()"><code class="function-signature">updateForkValues()</code></a></li><li><a href="#IUniverse.getParentUniverse()"><code class="function-signature">getParentUniverse()</code></a></li><li><a href="#IUniverse.createChildUniverse(uint256[])"><code class="function-signature">createChildUniverse(uint256[] _parentPayoutNumerators)</code></a></li><li><a href="#IUniverse.getChildUniverse(bytes32)"><code class="function-signature">getChildUniverse(bytes32 _parentPayoutDistributionHash)</code></a></li><li><a href="#IUniverse.getReputationToken()"><code class="function-signature">getReputationToken()</code></a></li><li><a href="#IUniverse.getForkingMarket()"><code class="function-signature">getForkingMarket()</code></a></li><li><a href="#IUniverse.getForkEndTime()"><code class="function-signature">getForkEndTime()</code></a></li><li><a href="#IUniverse.getForkReputationGoal()"><code class="function-signature">getForkReputationGoal()</code></a></li><li><a href="#IUniverse.getParentPayoutDistributionHash()"><code class="function-signature">getParentPayoutDistributionHash()</code></a></li><li><a href="#IUniverse.getDisputeRoundDurationInSeconds(bool)"><code class="function-signature">getDisputeRoundDurationInSeconds(bool _initial)</code></a></li><li><a href="#IUniverse.getOrCreateDisputeWindowByTimestamp(uint256,bool)"><code class="function-signature">getOrCreateDisputeWindowByTimestamp(uint256 _timestamp, bool _initial)</code></a></li><li><a href="#IUniverse.getOrCreateCurrentDisputeWindow(bool)"><code class="function-signature">getOrCreateCurrentDisputeWindow(bool _initial)</code></a></li><li><a href="#IUniverse.getOrCreateNextDisputeWindow(bool)"><code class="function-signature">getOrCreateNextDisputeWindow(bool _initial)</code></a></li><li><a href="#IUniverse.getOrCreatePreviousDisputeWindow(bool)"><code class="function-signature">getOrCreatePreviousDisputeWindow(bool _initial)</code></a></li><li><a href="#IUniverse.getOpenInterestInAttoCash()"><code class="function-signature">getOpenInterestInAttoCash()</code></a></li><li><a href="#IUniverse.getRepMarketCapInAttoCash()"><code class="function-signature">getRepMarketCapInAttoCash()</code></a></li><li><a href="#IUniverse.getTargetRepMarketCapInAttoCash()"><code class="function-signature">getTargetRepMarketCapInAttoCash()</code></a></li><li><a href="#IUniverse.getOrCacheValidityBond()"><code class="function-signature">getOrCacheValidityBond()</code></a></li><li><a href="#IUniverse.getOrCacheDesignatedReportStake()"><code class="function-signature">getOrCacheDesignatedReportStake()</code></a></li><li><a href="#IUniverse.getOrCacheDesignatedReportNoShowBond()"><code class="function-signature">getOrCacheDesignatedReportNoShowBond()</code></a></li><li><a href="#IUniverse.getOrCacheMarketRepBond()"><code class="function-signature">getOrCacheMarketRepBond()</code></a></li><li><a href="#IUniverse.getOrCacheReportingFeeDivisor()"><code class="function-signature">getOrCacheReportingFeeDivisor()</code></a></li><li><a href="#IUniverse.getDisputeThresholdForFork()"><code class="function-signature">getDisputeThresholdForFork()</code></a></li><li><a href="#IUniverse.getDisputeThresholdForDisputePacing()"><code class="function-signature">getDisputeThresholdForDisputePacing()</code></a></li><li><a href="#IUniverse.getInitialReportMinValue()"><code class="function-signature">getInitialReportMinValue()</code></a></li><li><a href="#IUniverse.getPayoutNumerators()"><code class="function-signature">getPayoutNumerators()</code></a></li><li><a href="#IUniverse.getReportingFeeDivisor()"><code class="function-signature">getReportingFeeDivisor()</code></a></li><li><a href="#IUniverse.getPayoutNumerator(uint256)"><code class="function-signature">getPayoutNumerator(uint256 _outcome)</code></a></li><li><a href="#IUniverse.getWinningChildPayoutNumerator(uint256)"><code class="function-signature">getWinningChildPayoutNumerator(uint256 _outcome)</code></a></li><li><a href="#IUniverse.isOpenInterestCash(address)"><code class="function-signature">isOpenInterestCash(address)</code></a></li><li><a href="#IUniverse.isForkingMarket()"><code class="function-signature">isForkingMarket()</code></a></li><li><a href="#IUniverse.getCurrentDisputeWindow(bool)"><code class="function-signature">getCurrentDisputeWindow(bool _initial)</code></a></li><li><a href="#IUniverse.isParentOf(contract IUniverse)"><code class="function-signature">isParentOf(contract IUniverse _shadyChild)</code></a></li><li><a href="#IUniverse.updateTentativeWinningChildUniverse(bytes32)"><code class="function-signature">updateTentativeWinningChildUniverse(bytes32 _parentPayoutDistributionHash)</code></a></li><li><a href="#IUniverse.isContainerForDisputeWindow(contract IDisputeWindow)"><code class="function-signature">isContainerForDisputeWindow(contract IDisputeWindow _shadyTarget)</code></a></li><li><a href="#IUniverse.isContainerForMarket(contract IMarket)"><code class="function-signature">isContainerForMarket(contract IMarket _shadyTarget)</code></a></li><li><a href="#IUniverse.isContainerForReportingParticipant(contract IReportingParticipant)"><code class="function-signature">isContainerForReportingParticipant(contract IReportingParticipant _reportingParticipant)</code></a></li><li><a href="#IUniverse.isContainerForShareToken(contract IShareToken)"><code class="function-signature">isContainerForShareToken(contract IShareToken _shadyTarget)</code></a></li><li><a href="#IUniverse.migrateMarketOut(contract IUniverse)"><code class="function-signature">migrateMarketOut(contract IUniverse _destinationUniverse)</code></a></li><li><a href="#IUniverse.migrateMarketIn(contract IMarket,uint256,uint256)"><code class="function-signature">migrateMarketIn(contract IMarket _market, uint256 _cashBalance, uint256 _marketOI)</code></a></li><li><a href="#IUniverse.decrementOpenInterest(uint256)"><code class="function-signature">decrementOpenInterest(uint256 _amount)</code></a></li><li><a href="#IUniverse.decrementOpenInterestFromMarket(contract IMarket)"><code class="function-signature">decrementOpenInterestFromMarket(contract IMarket _market)</code></a></li><li><a href="#IUniverse.incrementOpenInterest(uint256)"><code class="function-signature">incrementOpenInterest(uint256 _amount)</code></a></li><li><a href="#IUniverse.getWinningChildUniverse()"><code class="function-signature">getWinningChildUniverse()</code></a></li><li><a href="#IUniverse.isForking()"><code class="function-signature">isForking()</code></a></li><li><a href="#IUniverse.assertMarketBalance()"><code class="function-signature">assertMarketBalance()</code></a></li><li><a href="#IUniverse.deposit(address,uint256,address)"><code class="function-signature">deposit(address _sender, uint256 _amount, address _market)</code></a></li><li><a href="#IUniverse.withdraw(address,uint256,address)"><code class="function-signature">withdraw(address _recipient, uint256 _amount, address _market)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="IUniverse.fork()"></a><code class="function-signature">fork() <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IUniverse.updateForkValues()"></a><code class="function-signature">updateForkValues() <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IUniverse.getParentUniverse()"></a><code class="function-signature">getParentUniverse() <span class="return-arrow">→</span> <span class="return-type">contract IUniverse</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IUniverse.createChildUniverse(uint256[])"></a><code class="function-signature">createChildUniverse(uint256[] _parentPayoutNumerators) <span class="return-arrow">→</span> <span class="return-type">contract IUniverse</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IUniverse.getChildUniverse(bytes32)"></a><code class="function-signature">getChildUniverse(bytes32 _parentPayoutDistributionHash) <span class="return-arrow">→</span> <span class="return-type">contract IUniverse</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IUniverse.getReputationToken()"></a><code class="function-signature">getReputationToken() <span class="return-arrow">→</span> <span class="return-type">contract IV2ReputationToken</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IUniverse.getForkingMarket()"></a><code class="function-signature">getForkingMarket() <span class="return-arrow">→</span> <span class="return-type">contract IMarket</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IUniverse.getForkEndTime()"></a><code class="function-signature">getForkEndTime() <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IUniverse.getForkReputationGoal()"></a><code class="function-signature">getForkReputationGoal() <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IUniverse.getParentPayoutDistributionHash()"></a><code class="function-signature">getParentPayoutDistributionHash() <span class="return-arrow">→</span> <span class="return-type">bytes32</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IUniverse.getDisputeRoundDurationInSeconds(bool)"></a><code class="function-signature">getDisputeRoundDurationInSeconds(bool _initial) <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IUniverse.getOrCreateDisputeWindowByTimestamp(uint256,bool)"></a><code class="function-signature">getOrCreateDisputeWindowByTimestamp(uint256 _timestamp, bool _initial) <span class="return-arrow">→</span> <span class="return-type">contract IDisputeWindow</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IUniverse.getOrCreateCurrentDisputeWindow(bool)"></a><code class="function-signature">getOrCreateCurrentDisputeWindow(bool _initial) <span class="return-arrow">→</span> <span class="return-type">contract IDisputeWindow</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IUniverse.getOrCreateNextDisputeWindow(bool)"></a><code class="function-signature">getOrCreateNextDisputeWindow(bool _initial) <span class="return-arrow">→</span> <span class="return-type">contract IDisputeWindow</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IUniverse.getOrCreatePreviousDisputeWindow(bool)"></a><code class="function-signature">getOrCreatePreviousDisputeWindow(bool _initial) <span class="return-arrow">→</span> <span class="return-type">contract IDisputeWindow</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IUniverse.getOpenInterestInAttoCash()"></a><code class="function-signature">getOpenInterestInAttoCash() <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IUniverse.getRepMarketCapInAttoCash()"></a><code class="function-signature">getRepMarketCapInAttoCash() <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IUniverse.getTargetRepMarketCapInAttoCash()"></a><code class="function-signature">getTargetRepMarketCapInAttoCash() <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IUniverse.getOrCacheValidityBond()"></a><code class="function-signature">getOrCacheValidityBond() <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IUniverse.getOrCacheDesignatedReportStake()"></a><code class="function-signature">getOrCacheDesignatedReportStake() <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IUniverse.getOrCacheDesignatedReportNoShowBond()"></a><code class="function-signature">getOrCacheDesignatedReportNoShowBond() <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IUniverse.getOrCacheMarketRepBond()"></a><code class="function-signature">getOrCacheMarketRepBond() <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IUniverse.getOrCacheReportingFeeDivisor()"></a><code class="function-signature">getOrCacheReportingFeeDivisor() <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IUniverse.getDisputeThresholdForFork()"></a><code class="function-signature">getDisputeThresholdForFork() <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IUniverse.getDisputeThresholdForDisputePacing()"></a><code class="function-signature">getDisputeThresholdForDisputePacing() <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IUniverse.getInitialReportMinValue()"></a><code class="function-signature">getInitialReportMinValue() <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IUniverse.getPayoutNumerators()"></a><code class="function-signature">getPayoutNumerators() <span class="return-arrow">→</span> <span class="return-type">uint256[]</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IUniverse.getReportingFeeDivisor()"></a><code class="function-signature">getReportingFeeDivisor() <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IUniverse.getPayoutNumerator(uint256)"></a><code class="function-signature">getPayoutNumerator(uint256 _outcome) <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IUniverse.getWinningChildPayoutNumerator(uint256)"></a><code class="function-signature">getWinningChildPayoutNumerator(uint256 _outcome) <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IUniverse.isOpenInterestCash(address)"></a><code class="function-signature">isOpenInterestCash(address) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IUniverse.isForkingMarket()"></a><code class="function-signature">isForkingMarket() <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IUniverse.getCurrentDisputeWindow(bool)"></a><code class="function-signature">getCurrentDisputeWindow(bool _initial) <span class="return-arrow">→</span> <span class="return-type">contract IDisputeWindow</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IUniverse.isParentOf(contract IUniverse)"></a><code class="function-signature">isParentOf(contract IUniverse _shadyChild) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IUniverse.updateTentativeWinningChildUniverse(bytes32)"></a><code class="function-signature">updateTentativeWinningChildUniverse(bytes32 _parentPayoutDistributionHash) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IUniverse.isContainerForDisputeWindow(contract IDisputeWindow)"></a><code class="function-signature">isContainerForDisputeWindow(contract IDisputeWindow _shadyTarget) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IUniverse.isContainerForMarket(contract IMarket)"></a><code class="function-signature">isContainerForMarket(contract IMarket _shadyTarget) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IUniverse.isContainerForReportingParticipant(contract IReportingParticipant)"></a><code class="function-signature">isContainerForReportingParticipant(contract IReportingParticipant _reportingParticipant) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IUniverse.isContainerForShareToken(contract IShareToken)"></a><code class="function-signature">isContainerForShareToken(contract IShareToken _shadyTarget) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IUniverse.migrateMarketOut(contract IUniverse)"></a><code class="function-signature">migrateMarketOut(contract IUniverse _destinationUniverse) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IUniverse.migrateMarketIn(contract IMarket,uint256,uint256)"></a><code class="function-signature">migrateMarketIn(contract IMarket _market, uint256 _cashBalance, uint256 _marketOI) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IUniverse.decrementOpenInterest(uint256)"></a><code class="function-signature">decrementOpenInterest(uint256 _amount) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IUniverse.decrementOpenInterestFromMarket(contract IMarket)"></a><code class="function-signature">decrementOpenInterestFromMarket(contract IMarket _market) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IUniverse.incrementOpenInterest(uint256)"></a><code class="function-signature">incrementOpenInterest(uint256 _amount) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IUniverse.getWinningChildUniverse()"></a><code class="function-signature">getWinningChildUniverse() <span class="return-arrow">→</span> <span class="return-type">contract IUniverse</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IUniverse.isForking()"></a><code class="function-signature">isForking() <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IUniverse.assertMarketBalance()"></a><code class="function-signature">assertMarketBalance() <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IUniverse.deposit(address,uint256,address)"></a><code class="function-signature">deposit(address _sender, uint256 _amount, address _market) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IUniverse.withdraw(address,uint256,address)"></a><code class="function-signature">withdraw(address _recipient, uint256 _amount, address _market) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>







### `IV2ReputationToken`



<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#IV2ReputationToken.burnForMarket(uint256)"><code class="function-signature">burnForMarket(uint256 _amountToBurn)</code></a></li><li><a href="#IV2ReputationToken.mintForUniverse(uint256,address)"><code class="function-signature">mintForUniverse(uint256 _amountToMint, address _target)</code></a></li><li class="inherited"><a href="trading#IStandardToken.noHooksTransfer(address,uint256)"><code class="function-signature">noHooksTransfer(address recipient, uint256 amount)</code></a></li><li class="inherited"><a href="trading#IReputationToken.migrateOutByPayout(uint256[],uint256)"><code class="function-signature">migrateOutByPayout(uint256[] _payoutNumerators, uint256 _attotokens)</code></a></li><li class="inherited"><a href="trading#IReputationToken.migrateIn(address,uint256)"><code class="function-signature">migrateIn(address _reporter, uint256 _attotokens)</code></a></li><li class="inherited"><a href="trading#IReputationToken.trustedReportingParticipantTransfer(address,address,uint256)"><code class="function-signature">trustedReportingParticipantTransfer(address _source, address _destination, uint256 _attotokens)</code></a></li><li class="inherited"><a href="trading#IReputationToken.trustedMarketTransfer(address,address,uint256)"><code class="function-signature">trustedMarketTransfer(address _source, address _destination, uint256 _attotokens)</code></a></li><li class="inherited"><a href="trading#IReputationToken.trustedUniverseTransfer(address,address,uint256)"><code class="function-signature">trustedUniverseTransfer(address _source, address _destination, uint256 _attotokens)</code></a></li><li class="inherited"><a href="trading#IReputationToken.trustedDisputeWindowTransfer(address,address,uint256)"><code class="function-signature">trustedDisputeWindowTransfer(address _source, address _destination, uint256 _attotokens)</code></a></li><li class="inherited"><a href="trading#IReputationToken.getUniverse()"><code class="function-signature">getUniverse()</code></a></li><li class="inherited"><a href="trading#IReputationToken.getTotalMigrated()"><code class="function-signature">getTotalMigrated()</code></a></li><li class="inherited"><a href="trading#IReputationToken.getTotalTheoreticalSupply()"><code class="function-signature">getTotalTheoreticalSupply()</code></a></li><li class="inherited"><a href="trading#IReputationToken.mintForReportingParticipant(uint256)"><code class="function-signature">mintForReportingParticipant(uint256 _amountMigrated)</code></a></li><li class="inherited"><a href="trading#IERC20.totalSupply()"><code class="function-signature">totalSupply()</code></a></li><li class="inherited"><a href="trading#IERC20.balanceOf(address)"><code class="function-signature">balanceOf(address owner)</code></a></li><li class="inherited"><a href="trading#IERC20.transfer(address,uint256)"><code class="function-signature">transfer(address to, uint256 amount)</code></a></li><li class="inherited"><a href="trading#IERC20.transferFrom(address,address,uint256)"><code class="function-signature">transferFrom(address from, address to, uint256 amount)</code></a></li><li class="inherited"><a href="trading#IERC20.approve(address,uint256)"><code class="function-signature">approve(address spender, uint256 amount)</code></a></li><li class="inherited"><a href="trading#IERC20.allowance(address,address)"><code class="function-signature">allowance(address owner, address spender)</code></a></li></ul><span class="contract-index-title">Events</span><ul><li class="inherited"><a href="trading#IERC20.Transfer(address,address,uint256)"><code class="function-signature">Transfer(address from, address to, uint256 value)</code></a></li><li class="inherited"><a href="trading#IERC20.Approval(address,address,uint256)"><code class="function-signature">Approval(address owner, address spender, uint256 value)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="IV2ReputationToken.burnForMarket(uint256)"></a><code class="function-signature">burnForMarket(uint256 _amountToBurn) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IV2ReputationToken.mintForUniverse(uint256,address)"></a><code class="function-signature">mintForUniverse(uint256 _amountToMint, address _target) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>







### `Initializable`



<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#Initializable.endInitialization()"><code class="function-signature">endInitialization()</code></a></li><li><a href="#Initializable.getInitialized()"><code class="function-signature">getInitialized()</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="Initializable.endInitialization()"></a><code class="function-signature">endInitialization()</code><span class="function-visibility">internal</span></h4>





<h4><a class="anchor" aria-hidden="true" id="Initializable.getInitialized()"></a><code class="function-signature">getInitialized() <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>







### `Order`



<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#Order.create(contract IAugur,address,uint256,enum Order.Types,uint256,uint256,contract IMarket,bytes32,bytes32,contract IERC20)"><code class="function-signature">create(contract IAugur _augur, address _creator, uint256 _outcome, enum Order.Types _type, uint256 _attoshares, uint256 _price, contract IMarket _market, bytes32 _betterOrderId, bytes32 _worseOrderId, contract IERC20 _kycToken)</code></a></li><li><a href="#Order.getOrderId(struct Order.Data)"><code class="function-signature">getOrderId(struct Order.Data _orderData)</code></a></li><li><a href="#Order.getOrderTradingTypeFromMakerDirection(enum Order.TradeDirections)"><code class="function-signature">getOrderTradingTypeFromMakerDirection(enum Order.TradeDirections _creatorDirection)</code></a></li><li><a href="#Order.getOrderTradingTypeFromFillerDirection(enum Order.TradeDirections)"><code class="function-signature">getOrderTradingTypeFromFillerDirection(enum Order.TradeDirections _fillerDirection)</code></a></li><li><a href="#Order.escrowFunds(struct Order.Data)"><code class="function-signature">escrowFunds(struct Order.Data _orderData)</code></a></li><li><a href="#Order.saveOrder(struct Order.Data,bytes32)"><code class="function-signature">saveOrder(struct Order.Data _orderData, bytes32 _tradeGroupId)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="Order.create(contract IAugur,address,uint256,enum Order.Types,uint256,uint256,contract IMarket,bytes32,bytes32,contract IERC20)"></a><code class="function-signature">create(contract IAugur _augur, address _creator, uint256 _outcome, enum Order.Types _type, uint256 _attoshares, uint256 _price, contract IMarket _market, bytes32 _betterOrderId, bytes32 _worseOrderId, contract IERC20 _kycToken) <span class="return-arrow">→</span> <span class="return-type">struct Order.Data</span></code><span class="function-visibility">internal</span></h4>





<h4><a class="anchor" aria-hidden="true" id="Order.getOrderId(struct Order.Data)"></a><code class="function-signature">getOrderId(struct Order.Data _orderData) <span class="return-arrow">→</span> <span class="return-type">bytes32</span></code><span class="function-visibility">internal</span></h4>





<h4><a class="anchor" aria-hidden="true" id="Order.getOrderTradingTypeFromMakerDirection(enum Order.TradeDirections)"></a><code class="function-signature">getOrderTradingTypeFromMakerDirection(enum Order.TradeDirections _creatorDirection) <span class="return-arrow">→</span> <span class="return-type">enum Order.Types</span></code><span class="function-visibility">internal</span></h4>





<h4><a class="anchor" aria-hidden="true" id="Order.getOrderTradingTypeFromFillerDirection(enum Order.TradeDirections)"></a><code class="function-signature">getOrderTradingTypeFromFillerDirection(enum Order.TradeDirections _fillerDirection) <span class="return-arrow">→</span> <span class="return-type">enum Order.Types</span></code><span class="function-visibility">internal</span></h4>





<h4><a class="anchor" aria-hidden="true" id="Order.escrowFunds(struct Order.Data)"></a><code class="function-signature">escrowFunds(struct Order.Data _orderData) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">internal</span></h4>





<h4><a class="anchor" aria-hidden="true" id="Order.saveOrder(struct Order.Data,bytes32)"></a><code class="function-signature">saveOrder(struct Order.Data _orderData, bytes32 _tradeGroupId) <span class="return-arrow">→</span> <span class="return-type">bytes32</span></code><span class="function-visibility">internal</span></h4>







### `ReentrancyGuard`



<div class="contract-index"></div>





### `SafeMathUint256`



<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#SafeMathUint256.mul(uint256,uint256)"><code class="function-signature">mul(uint256 a, uint256 b)</code></a></li><li><a href="#SafeMathUint256.div(uint256,uint256)"><code class="function-signature">div(uint256 a, uint256 b)</code></a></li><li><a href="#SafeMathUint256.sub(uint256,uint256)"><code class="function-signature">sub(uint256 a, uint256 b)</code></a></li><li><a href="#SafeMathUint256.add(uint256,uint256)"><code class="function-signature">add(uint256 a, uint256 b)</code></a></li><li><a href="#SafeMathUint256.min(uint256,uint256)"><code class="function-signature">min(uint256 a, uint256 b)</code></a></li><li><a href="#SafeMathUint256.max(uint256,uint256)"><code class="function-signature">max(uint256 a, uint256 b)</code></a></li><li><a href="#SafeMathUint256.getUint256Min()"><code class="function-signature">getUint256Min()</code></a></li><li><a href="#SafeMathUint256.getUint256Max()"><code class="function-signature">getUint256Max()</code></a></li><li><a href="#SafeMathUint256.isMultipleOf(uint256,uint256)"><code class="function-signature">isMultipleOf(uint256 a, uint256 b)</code></a></li><li><a href="#SafeMathUint256.fxpMul(uint256,uint256,uint256)"><code class="function-signature">fxpMul(uint256 a, uint256 b, uint256 base)</code></a></li><li><a href="#SafeMathUint256.fxpDiv(uint256,uint256,uint256)"><code class="function-signature">fxpDiv(uint256 a, uint256 b, uint256 base)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="SafeMathUint256.mul(uint256,uint256)"></a><code class="function-signature">mul(uint256 a, uint256 b) <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">internal</span></h4>





<h4><a class="anchor" aria-hidden="true" id="SafeMathUint256.div(uint256,uint256)"></a><code class="function-signature">div(uint256 a, uint256 b) <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">internal</span></h4>





<h4><a class="anchor" aria-hidden="true" id="SafeMathUint256.sub(uint256,uint256)"></a><code class="function-signature">sub(uint256 a, uint256 b) <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">internal</span></h4>





<h4><a class="anchor" aria-hidden="true" id="SafeMathUint256.add(uint256,uint256)"></a><code class="function-signature">add(uint256 a, uint256 b) <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">internal</span></h4>





<h4><a class="anchor" aria-hidden="true" id="SafeMathUint256.min(uint256,uint256)"></a><code class="function-signature">min(uint256 a, uint256 b) <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">internal</span></h4>





<h4><a class="anchor" aria-hidden="true" id="SafeMathUint256.max(uint256,uint256)"></a><code class="function-signature">max(uint256 a, uint256 b) <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">internal</span></h4>





<h4><a class="anchor" aria-hidden="true" id="SafeMathUint256.getUint256Min()"></a><code class="function-signature">getUint256Min() <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">internal</span></h4>





<h4><a class="anchor" aria-hidden="true" id="SafeMathUint256.getUint256Max()"></a><code class="function-signature">getUint256Max() <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">internal</span></h4>





<h4><a class="anchor" aria-hidden="true" id="SafeMathUint256.isMultipleOf(uint256,uint256)"></a><code class="function-signature">isMultipleOf(uint256 a, uint256 b) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">internal</span></h4>





<h4><a class="anchor" aria-hidden="true" id="SafeMathUint256.fxpMul(uint256,uint256,uint256)"></a><code class="function-signature">fxpMul(uint256 a, uint256 b, uint256 base) <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">internal</span></h4>





<h4><a class="anchor" aria-hidden="true" id="SafeMathUint256.fxpDiv(uint256,uint256,uint256)"></a><code class="function-signature">fxpDiv(uint256 a, uint256 b, uint256 base) <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">internal</span></h4>







### `ClaimTradingProceeds`



<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#ClaimTradingProceeds.initialize(contract IAugur)"><code class="function-signature">initialize(contract IAugur _augur)</code></a></li><li><a href="#ClaimTradingProceeds.claimMarketsProceeds(contract IMarket[],address,address)"><code class="function-signature">claimMarketsProceeds(contract IMarket[] _markets, address _shareHolder, address _affiliateAddress)</code></a></li><li><a href="#ClaimTradingProceeds.claimTradingProceeds(contract IMarket,address,address)"><code class="function-signature">claimTradingProceeds(contract IMarket _market, address _shareHolder, address _affiliateAddress)</code></a></li><li><a href="#ClaimTradingProceeds.divideUpWinnings(contract IMarket,uint256,uint256)"><code class="function-signature">divideUpWinnings(contract IMarket _market, uint256 _outcome, uint256 _numberOfShares)</code></a></li><li><a href="#ClaimTradingProceeds.calculateProceeds(contract IMarket,uint256,uint256)"><code class="function-signature">calculateProceeds(contract IMarket _market, uint256 _outcome, uint256 _numberOfShares)</code></a></li><li><a href="#ClaimTradingProceeds.calculateReportingFee(contract IMarket,uint256)"><code class="function-signature">calculateReportingFee(contract IMarket _market, uint256 _amount)</code></a></li><li><a href="#ClaimTradingProceeds.calculateCreatorFee(contract IMarket,uint256)"><code class="function-signature">calculateCreatorFee(contract IMarket _market, uint256 _amount)</code></a></li><li class="inherited"><a href="#Initializable.endInitialization()"><code class="function-signature">endInitialization()</code></a></li><li class="inherited"><a href="#Initializable.getInitialized()"><code class="function-signature">getInitialized()</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="ClaimTradingProceeds.initialize(contract IAugur)"></a><code class="function-signature">initialize(contract IAugur _augur)</code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="ClaimTradingProceeds.claimMarketsProceeds(contract IMarket[],address,address)"></a><code class="function-signature">claimMarketsProceeds(contract IMarket[] _markets, address _shareHolder, address _affiliateAddress) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">external</span></h4>





<h4><a class="anchor" aria-hidden="true" id="ClaimTradingProceeds.claimTradingProceeds(contract IMarket,address,address)"></a><code class="function-signature">claimTradingProceeds(contract IMarket _market, address _shareHolder, address _affiliateAddress) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">external</span></h4>





<h4><a class="anchor" aria-hidden="true" id="ClaimTradingProceeds.divideUpWinnings(contract IMarket,uint256,uint256)"></a><code class="function-signature">divideUpWinnings(contract IMarket _market, uint256 _outcome, uint256 _numberOfShares) <span class="return-arrow">→</span> <span class="return-type">uint256,uint256,uint256,uint256</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="ClaimTradingProceeds.calculateProceeds(contract IMarket,uint256,uint256)"></a><code class="function-signature">calculateProceeds(contract IMarket _market, uint256 _outcome, uint256 _numberOfShares) <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="ClaimTradingProceeds.calculateReportingFee(contract IMarket,uint256)"></a><code class="function-signature">calculateReportingFee(contract IMarket _market, uint256 _amount) <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="ClaimTradingProceeds.calculateCreatorFee(contract IMarket,uint256)"></a><code class="function-signature">calculateCreatorFee(contract IMarket _market, uint256 _amount) <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">public</span></h4>







### `IClaimTradingProceeds`



<div class="contract-index"></div>





### `Reporting`



<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#Reporting.getDesignatedReportingDurationSeconds()"><code class="function-signature">getDesignatedReportingDurationSeconds()</code></a></li><li><a href="#Reporting.getInitialDisputeRoundDurationSeconds()"><code class="function-signature">getInitialDisputeRoundDurationSeconds()</code></a></li><li><a href="#Reporting.getDisputeWindowBufferSeconds()"><code class="function-signature">getDisputeWindowBufferSeconds()</code></a></li><li><a href="#Reporting.getDisputeRoundDurationSeconds()"><code class="function-signature">getDisputeRoundDurationSeconds()</code></a></li><li><a href="#Reporting.getForkDurationSeconds()"><code class="function-signature">getForkDurationSeconds()</code></a></li><li><a href="#Reporting.getBaseMarketDurationMaximum()"><code class="function-signature">getBaseMarketDurationMaximum()</code></a></li><li><a href="#Reporting.getUpgradeCadence()"><code class="function-signature">getUpgradeCadence()</code></a></li><li><a href="#Reporting.getInitialUpgradeTimestamp()"><code class="function-signature">getInitialUpgradeTimestamp()</code></a></li><li><a href="#Reporting.getDefaultValidityBond()"><code class="function-signature">getDefaultValidityBond()</code></a></li><li><a href="#Reporting.getValidityBondFloor()"><code class="function-signature">getValidityBondFloor()</code></a></li><li><a href="#Reporting.getTargetInvalidMarketsDivisor()"><code class="function-signature">getTargetInvalidMarketsDivisor()</code></a></li><li><a href="#Reporting.getTargetIncorrectDesignatedReportMarketsDivisor()"><code class="function-signature">getTargetIncorrectDesignatedReportMarketsDivisor()</code></a></li><li><a href="#Reporting.getTargetDesignatedReportNoShowsDivisor()"><code class="function-signature">getTargetDesignatedReportNoShowsDivisor()</code></a></li><li><a href="#Reporting.getTargetRepMarketCapMultiplier()"><code class="function-signature">getTargetRepMarketCapMultiplier()</code></a></li><li><a href="#Reporting.getMaximumReportingFeeDivisor()"><code class="function-signature">getMaximumReportingFeeDivisor()</code></a></li><li><a href="#Reporting.getMinimumReportingFeeDivisor()"><code class="function-signature">getMinimumReportingFeeDivisor()</code></a></li><li><a href="#Reporting.getDefaultReportingFeeDivisor()"><code class="function-signature">getDefaultReportingFeeDivisor()</code></a></li><li><a href="#Reporting.getInitialREPSupply()"><code class="function-signature">getInitialREPSupply()</code></a></li><li><a href="#Reporting.getForkThresholdDivisor()"><code class="function-signature">getForkThresholdDivisor()</code></a></li><li><a href="#Reporting.getMaximumDisputeRounds()"><code class="function-signature">getMaximumDisputeRounds()</code></a></li><li><a href="#Reporting.getMinimumSlowRounds()"><code class="function-signature">getMinimumSlowRounds()</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="Reporting.getDesignatedReportingDurationSeconds()"></a><code class="function-signature">getDesignatedReportingDurationSeconds() <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">internal</span></h4>





<h4><a class="anchor" aria-hidden="true" id="Reporting.getInitialDisputeRoundDurationSeconds()"></a><code class="function-signature">getInitialDisputeRoundDurationSeconds() <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">internal</span></h4>





<h4><a class="anchor" aria-hidden="true" id="Reporting.getDisputeWindowBufferSeconds()"></a><code class="function-signature">getDisputeWindowBufferSeconds() <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">internal</span></h4>





<h4><a class="anchor" aria-hidden="true" id="Reporting.getDisputeRoundDurationSeconds()"></a><code class="function-signature">getDisputeRoundDurationSeconds() <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">internal</span></h4>





<h4><a class="anchor" aria-hidden="true" id="Reporting.getForkDurationSeconds()"></a><code class="function-signature">getForkDurationSeconds() <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">internal</span></h4>





<h4><a class="anchor" aria-hidden="true" id="Reporting.getBaseMarketDurationMaximum()"></a><code class="function-signature">getBaseMarketDurationMaximum() <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">internal</span></h4>





<h4><a class="anchor" aria-hidden="true" id="Reporting.getUpgradeCadence()"></a><code class="function-signature">getUpgradeCadence() <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">internal</span></h4>





<h4><a class="anchor" aria-hidden="true" id="Reporting.getInitialUpgradeTimestamp()"></a><code class="function-signature">getInitialUpgradeTimestamp() <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">internal</span></h4>





<h4><a class="anchor" aria-hidden="true" id="Reporting.getDefaultValidityBond()"></a><code class="function-signature">getDefaultValidityBond() <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">internal</span></h4>





<h4><a class="anchor" aria-hidden="true" id="Reporting.getValidityBondFloor()"></a><code class="function-signature">getValidityBondFloor() <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">internal</span></h4>





<h4><a class="anchor" aria-hidden="true" id="Reporting.getTargetInvalidMarketsDivisor()"></a><code class="function-signature">getTargetInvalidMarketsDivisor() <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">internal</span></h4>





<h4><a class="anchor" aria-hidden="true" id="Reporting.getTargetIncorrectDesignatedReportMarketsDivisor()"></a><code class="function-signature">getTargetIncorrectDesignatedReportMarketsDivisor() <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">internal</span></h4>





<h4><a class="anchor" aria-hidden="true" id="Reporting.getTargetDesignatedReportNoShowsDivisor()"></a><code class="function-signature">getTargetDesignatedReportNoShowsDivisor() <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">internal</span></h4>





<h4><a class="anchor" aria-hidden="true" id="Reporting.getTargetRepMarketCapMultiplier()"></a><code class="function-signature">getTargetRepMarketCapMultiplier() <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">internal</span></h4>





<h4><a class="anchor" aria-hidden="true" id="Reporting.getMaximumReportingFeeDivisor()"></a><code class="function-signature">getMaximumReportingFeeDivisor() <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">internal</span></h4>





<h4><a class="anchor" aria-hidden="true" id="Reporting.getMinimumReportingFeeDivisor()"></a><code class="function-signature">getMinimumReportingFeeDivisor() <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">internal</span></h4>





<h4><a class="anchor" aria-hidden="true" id="Reporting.getDefaultReportingFeeDivisor()"></a><code class="function-signature">getDefaultReportingFeeDivisor() <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">internal</span></h4>





<h4><a class="anchor" aria-hidden="true" id="Reporting.getInitialREPSupply()"></a><code class="function-signature">getInitialREPSupply() <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">internal</span></h4>





<h4><a class="anchor" aria-hidden="true" id="Reporting.getForkThresholdDivisor()"></a><code class="function-signature">getForkThresholdDivisor() <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">internal</span></h4>





<h4><a class="anchor" aria-hidden="true" id="Reporting.getMaximumDisputeRounds()"></a><code class="function-signature">getMaximumDisputeRounds() <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">internal</span></h4>





<h4><a class="anchor" aria-hidden="true" id="Reporting.getMinimumSlowRounds()"></a><code class="function-signature">getMinimumSlowRounds() <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">internal</span></h4>







### `CompleteSets`



<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#CompleteSets.initialize(contract IAugur)"><code class="function-signature">initialize(contract IAugur _augur)</code></a></li><li><a href="#CompleteSets.publicBuyCompleteSets(contract IMarket,uint256)"><code class="function-signature">publicBuyCompleteSets(contract IMarket _market, uint256 _amount)</code></a></li><li><a href="#CompleteSets.buyCompleteSets(address,contract IMarket,uint256)"><code class="function-signature">buyCompleteSets(address _sender, contract IMarket _market, uint256 _amount)</code></a></li><li><a href="#CompleteSets.jointBuyCompleteSets(contract IMarket,uint256,address,address,uint256,address,address,uint256)"><code class="function-signature">jointBuyCompleteSets(contract IMarket _market, uint256 _amount, address _longParticipant, address _shortParticipant, uint256 _longOutcome, address _longRecipient, address _shortRecipient, uint256 _price)</code></a></li><li><a href="#CompleteSets.publicSellCompleteSets(contract IMarket,uint256)"><code class="function-signature">publicSellCompleteSets(contract IMarket _market, uint256 _amount)</code></a></li><li><a href="#CompleteSets.sellCompleteSets(address,contract IMarket,uint256,address)"><code class="function-signature">sellCompleteSets(address _sender, contract IMarket _market, uint256 _amount, address _affiliateAddress)</code></a></li><li><a href="#CompleteSets.jointSellCompleteSets(contract IMarket,uint256,address,address,uint256,address,address,uint256,address)"><code class="function-signature">jointSellCompleteSets(contract IMarket _market, uint256 _amount, address _shortParticipant, address _longParticipant, uint256 _shortOutcome, address _shortRecipient, address _longRecipient, uint256 _price, address _affiliateAddress)</code></a></li><li class="inherited"><a href="#Initializable.endInitialization()"><code class="function-signature">endInitialization()</code></a></li><li class="inherited"><a href="#Initializable.getInitialized()"><code class="function-signature">getInitialized()</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="CompleteSets.initialize(contract IAugur)"></a><code class="function-signature">initialize(contract IAugur _augur)</code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="CompleteSets.publicBuyCompleteSets(contract IMarket,uint256)"></a><code class="function-signature">publicBuyCompleteSets(contract IMarket _market, uint256 _amount) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">external</span></h4>





<h4><a class="anchor" aria-hidden="true" id="CompleteSets.buyCompleteSets(address,contract IMarket,uint256)"></a><code class="function-signature">buyCompleteSets(address _sender, contract IMarket _market, uint256 _amount) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">external</span></h4>





<h4><a class="anchor" aria-hidden="true" id="CompleteSets.jointBuyCompleteSets(contract IMarket,uint256,address,address,uint256,address,address,uint256)"></a><code class="function-signature">jointBuyCompleteSets(contract IMarket _market, uint256 _amount, address _longParticipant, address _shortParticipant, uint256 _longOutcome, address _longRecipient, address _shortRecipient, uint256 _price)</code><span class="function-visibility">external</span></h4>





<h4><a class="anchor" aria-hidden="true" id="CompleteSets.publicSellCompleteSets(contract IMarket,uint256)"></a><code class="function-signature">publicSellCompleteSets(contract IMarket _market, uint256 _amount) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">external</span></h4>





<h4><a class="anchor" aria-hidden="true" id="CompleteSets.sellCompleteSets(address,contract IMarket,uint256,address)"></a><code class="function-signature">sellCompleteSets(address _sender, contract IMarket _market, uint256 _amount, address _affiliateAddress) <span class="return-arrow">→</span> <span class="return-type">uint256,uint256</span></code><span class="function-visibility">external</span></h4>





<h4><a class="anchor" aria-hidden="true" id="CompleteSets.jointSellCompleteSets(contract IMarket,uint256,address,address,uint256,address,address,uint256,address)"></a><code class="function-signature">jointSellCompleteSets(contract IMarket _market, uint256 _amount, address _shortParticipant, address _longParticipant, uint256 _shortOutcome, address _shortRecipient, address _longRecipient, uint256 _price, address _affiliateAddress) <span class="return-arrow">→</span> <span class="return-type">uint256,uint256</span></code><span class="function-visibility">external</span></h4>







### `ICompleteSets`



<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#ICompleteSets.publicBuyCompleteSets(contract IMarket,uint256)"><code class="function-signature">publicBuyCompleteSets(contract IMarket _market, uint256 _amount)</code></a></li><li><a href="#ICompleteSets.buyCompleteSets(address,contract IMarket,uint256)"><code class="function-signature">buyCompleteSets(address _sender, contract IMarket _market, uint256 _amount)</code></a></li><li><a href="#ICompleteSets.sellCompleteSets(address,contract IMarket,uint256,address)"><code class="function-signature">sellCompleteSets(address _sender, contract IMarket _market, uint256 _amount, address _affiliateAddress)</code></a></li><li><a href="#ICompleteSets.jointBuyCompleteSets(contract IMarket,uint256,address,address,uint256,address,address,uint256)"><code class="function-signature">jointBuyCompleteSets(contract IMarket _market, uint256 _amount, address _longParticipant, address _shortParticipant, uint256 _longOutcome, address _longRecipient, address _shortRecipient, uint256 _price)</code></a></li><li><a href="#ICompleteSets.jointSellCompleteSets(contract IMarket,uint256,address,address,uint256,address,address,uint256,address)"><code class="function-signature">jointSellCompleteSets(contract IMarket _market, uint256 _amount, address _shortParticipant, address _longParticipant, uint256 _shortOutcome, address _shortRecipient, address _longRecipient, uint256 _price, address _affiliateAddress)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="ICompleteSets.publicBuyCompleteSets(contract IMarket,uint256)"></a><code class="function-signature">publicBuyCompleteSets(contract IMarket _market, uint256 _amount) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">external</span></h4>





<h4><a class="anchor" aria-hidden="true" id="ICompleteSets.buyCompleteSets(address,contract IMarket,uint256)"></a><code class="function-signature">buyCompleteSets(address _sender, contract IMarket _market, uint256 _amount) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">external</span></h4>





<h4><a class="anchor" aria-hidden="true" id="ICompleteSets.sellCompleteSets(address,contract IMarket,uint256,address)"></a><code class="function-signature">sellCompleteSets(address _sender, contract IMarket _market, uint256 _amount, address _affiliateAddress) <span class="return-arrow">→</span> <span class="return-type">uint256,uint256</span></code><span class="function-visibility">external</span></h4>





<h4><a class="anchor" aria-hidden="true" id="ICompleteSets.jointBuyCompleteSets(contract IMarket,uint256,address,address,uint256,address,address,uint256)"></a><code class="function-signature">jointBuyCompleteSets(contract IMarket _market, uint256 _amount, address _longParticipant, address _shortParticipant, uint256 _longOutcome, address _longRecipient, address _shortRecipient, uint256 _price)</code><span class="function-visibility">external</span></h4>





<h4><a class="anchor" aria-hidden="true" id="ICompleteSets.jointSellCompleteSets(contract IMarket,uint256,address,address,uint256,address,address,uint256,address)"></a><code class="function-signature">jointSellCompleteSets(contract IMarket _market, uint256 _amount, address _shortParticipant, address _longParticipant, uint256 _shortOutcome, address _shortRecipient, address _longRecipient, uint256 _price, address _affiliateAddress) <span class="return-arrow">→</span> <span class="return-type">uint256,uint256</span></code><span class="function-visibility">external</span></h4>







### `CreateOrder`



<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#CreateOrder.initialize(contract IAugur)"><code class="function-signature">initialize(contract IAugur _augur)</code></a></li><li><a href="#CreateOrder.publicCreateOrder(enum Order.Types,uint256,uint256,contract IMarket,uint256,bytes32,bytes32,bytes32,contract IERC20)"><code class="function-signature">publicCreateOrder(enum Order.Types _type, uint256 _attoshares, uint256 _price, contract IMarket _market, uint256 _outcome, bytes32 _betterOrderId, bytes32 _worseOrderId, bytes32 _tradeGroupId, contract IERC20 _kycToken)</code></a></li><li><a href="#CreateOrder.createOrder(address,enum Order.Types,uint256,uint256,contract IMarket,uint256,bytes32,bytes32,bytes32,contract IERC20)"><code class="function-signature">createOrder(address _creator, enum Order.Types _type, uint256 _attoshares, uint256 _price, contract IMarket _market, uint256 _outcome, bytes32 _betterOrderId, bytes32 _worseOrderId, bytes32 _tradeGroupId, contract IERC20 _kycToken)</code></a></li><li><a href="#CreateOrder.publicCreateOrders(uint256[],enum Order.Types[],uint256[],uint256[],contract IMarket,bytes32,contract IERC20)"><code class="function-signature">publicCreateOrders(uint256[] _outcomes, enum Order.Types[] _types, uint256[] _attoshareAmounts, uint256[] _prices, contract IMarket _market, bytes32 _tradeGroupId, contract IERC20 _kycToken)</code></a></li><li class="inherited"><a href="#Initializable.endInitialization()"><code class="function-signature">endInitialization()</code></a></li><li class="inherited"><a href="#Initializable.getInitialized()"><code class="function-signature">getInitialized()</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="CreateOrder.initialize(contract IAugur)"></a><code class="function-signature">initialize(contract IAugur _augur)</code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="CreateOrder.publicCreateOrder(enum Order.Types,uint256,uint256,contract IMarket,uint256,bytes32,bytes32,bytes32,contract IERC20)"></a><code class="function-signature">publicCreateOrder(enum Order.Types _type, uint256 _attoshares, uint256 _price, contract IMarket _market, uint256 _outcome, bytes32 _betterOrderId, bytes32 _worseOrderId, bytes32 _tradeGroupId, contract IERC20 _kycToken) <span class="return-arrow">→</span> <span class="return-type">bytes32</span></code><span class="function-visibility">external</span></h4>





<h4><a class="anchor" aria-hidden="true" id="CreateOrder.createOrder(address,enum Order.Types,uint256,uint256,contract IMarket,uint256,bytes32,bytes32,bytes32,contract IERC20)"></a><code class="function-signature">createOrder(address _creator, enum Order.Types _type, uint256 _attoshares, uint256 _price, contract IMarket _market, uint256 _outcome, bytes32 _betterOrderId, bytes32 _worseOrderId, bytes32 _tradeGroupId, contract IERC20 _kycToken) <span class="return-arrow">→</span> <span class="return-type">bytes32</span></code><span class="function-visibility">external</span></h4>





<h4><a class="anchor" aria-hidden="true" id="CreateOrder.publicCreateOrders(uint256[],enum Order.Types[],uint256[],uint256[],contract IMarket,bytes32,contract IERC20)"></a><code class="function-signature">publicCreateOrders(uint256[] _outcomes, enum Order.Types[] _types, uint256[] _attoshareAmounts, uint256[] _prices, contract IMarket _market, bytes32 _tradeGroupId, contract IERC20 _kycToken) <span class="return-arrow">→</span> <span class="return-type">bytes32[]</span></code><span class="function-visibility">public</span></h4>







### `ICreateOrder`



<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#ICreateOrder.publicCreateOrder(enum Order.Types,uint256,uint256,contract IMarket,uint256,bytes32,bytes32,bytes32,contract IERC20)"><code class="function-signature">publicCreateOrder(enum Order.Types, uint256, uint256, contract IMarket, uint256, bytes32, bytes32, bytes32, contract IERC20)</code></a></li><li><a href="#ICreateOrder.createOrder(address,enum Order.Types,uint256,uint256,contract IMarket,uint256,bytes32,bytes32,bytes32,contract IERC20)"><code class="function-signature">createOrder(address, enum Order.Types, uint256, uint256, contract IMarket, uint256, bytes32, bytes32, bytes32, contract IERC20)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="ICreateOrder.publicCreateOrder(enum Order.Types,uint256,uint256,contract IMarket,uint256,bytes32,bytes32,bytes32,contract IERC20)"></a><code class="function-signature">publicCreateOrder(enum Order.Types, uint256, uint256, contract IMarket, uint256, bytes32, bytes32, bytes32, contract IERC20) <span class="return-arrow">→</span> <span class="return-type">bytes32</span></code><span class="function-visibility">external</span></h4>





<h4><a class="anchor" aria-hidden="true" id="ICreateOrder.createOrder(address,enum Order.Types,uint256,uint256,contract IMarket,uint256,bytes32,bytes32,bytes32,contract IERC20)"></a><code class="function-signature">createOrder(address, enum Order.Types, uint256, uint256, contract IMarket, uint256, bytes32, bytes32, bytes32, contract IERC20) <span class="return-arrow">→</span> <span class="return-type">bytes32</span></code><span class="function-visibility">external</span></h4>







### `FillOrder`



<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#FillOrder.initialize(contract IAugur)"><code class="function-signature">initialize(contract IAugur _augur)</code></a></li><li><a href="#FillOrder.publicFillOrder(bytes32,uint256,bytes32,address)"><code class="function-signature">publicFillOrder(bytes32 _orderId, uint256 _amountFillerWants, bytes32 _tradeGroupId, address _affiliateAddress)</code></a></li><li><a href="#FillOrder.fillOrder(address,bytes32,uint256,bytes32,address)"><code class="function-signature">fillOrder(address _filler, bytes32 _orderId, uint256 _amountFillerWants, bytes32 _tradeGroupId, address _affiliateAddress)</code></a></li><li><a href="#FillOrder.fillZeroXOrder(contract IMarket,uint256,contract IERC20,uint256,enum Order.Types,uint256,address,bytes32,address,address)"><code class="function-signature">fillZeroXOrder(contract IMarket _market, uint256 _outcome, contract IERC20 _kycToken, uint256 _price, enum Order.Types _orderType, uint256 _amount, address _creator, bytes32 _tradeGroupId, address _affiliateAddress, address _filler)</code></a></li><li><a href="#FillOrder.fillOrderInternal(address,struct Trade.Data,uint256,bytes32)"><code class="function-signature">fillOrderInternal(address _filler, struct Trade.Data _tradeData, uint256 _amountFillerWants, bytes32 _tradeGroupId)</code></a></li><li><a href="#FillOrder.sellCompleteSets(struct Trade.Data)"><code class="function-signature">sellCompleteSets(struct Trade.Data _tradeData)</code></a></li><li class="inherited"><a href="#Initializable.endInitialization()"><code class="function-signature">endInitialization()</code></a></li><li class="inherited"><a href="#Initializable.getInitialized()"><code class="function-signature">getInitialized()</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="FillOrder.initialize(contract IAugur)"></a><code class="function-signature">initialize(contract IAugur _augur)</code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="FillOrder.publicFillOrder(bytes32,uint256,bytes32,address)"></a><code class="function-signature">publicFillOrder(bytes32 _orderId, uint256 _amountFillerWants, bytes32 _tradeGroupId, address _affiliateAddress) <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">external</span></h4>





<h4><a class="anchor" aria-hidden="true" id="FillOrder.fillOrder(address,bytes32,uint256,bytes32,address)"></a><code class="function-signature">fillOrder(address _filler, bytes32 _orderId, uint256 _amountFillerWants, bytes32 _tradeGroupId, address _affiliateAddress) <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">external</span></h4>





<h4><a class="anchor" aria-hidden="true" id="FillOrder.fillZeroXOrder(contract IMarket,uint256,contract IERC20,uint256,enum Order.Types,uint256,address,bytes32,address,address)"></a><code class="function-signature">fillZeroXOrder(contract IMarket _market, uint256 _outcome, contract IERC20 _kycToken, uint256 _price, enum Order.Types _orderType, uint256 _amount, address _creator, bytes32 _tradeGroupId, address _affiliateAddress, address _filler) <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">external</span></h4>





<h4><a class="anchor" aria-hidden="true" id="FillOrder.fillOrderInternal(address,struct Trade.Data,uint256,bytes32)"></a><code class="function-signature">fillOrderInternal(address _filler, struct Trade.Data _tradeData, uint256 _amountFillerWants, bytes32 _tradeGroupId) <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">internal</span></h4>





<h4><a class="anchor" aria-hidden="true" id="FillOrder.sellCompleteSets(struct Trade.Data)"></a><code class="function-signature">sellCompleteSets(struct Trade.Data _tradeData) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">internal</span></h4>







### `IFillOrder`



<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#IFillOrder.publicFillOrder(bytes32,uint256,bytes32,address)"><code class="function-signature">publicFillOrder(bytes32 _orderId, uint256 _amountFillerWants, bytes32 _tradeGroupId, address _affiliateAddress)</code></a></li><li><a href="#IFillOrder.fillOrder(address,bytes32,uint256,bytes32,address)"><code class="function-signature">fillOrder(address _filler, bytes32 _orderId, uint256 _amountFillerWants, bytes32 tradeGroupId, address _affiliateAddress)</code></a></li><li><a href="#IFillOrder.fillZeroXOrder(contract IMarket,uint256,contract IERC20,uint256,enum Order.Types,uint256,address,bytes32,address,address)"><code class="function-signature">fillZeroXOrder(contract IMarket _market, uint256 _outcome, contract IERC20 _kycToken, uint256 _price, enum Order.Types _orderType, uint256 _amount, address _creator, bytes32 _tradeGroupId, address _affiliateAddress, address _filler)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="IFillOrder.publicFillOrder(bytes32,uint256,bytes32,address)"></a><code class="function-signature">publicFillOrder(bytes32 _orderId, uint256 _amountFillerWants, bytes32 _tradeGroupId, address _affiliateAddress) <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">external</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IFillOrder.fillOrder(address,bytes32,uint256,bytes32,address)"></a><code class="function-signature">fillOrder(address _filler, bytes32 _orderId, uint256 _amountFillerWants, bytes32 tradeGroupId, address _affiliateAddress) <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">external</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IFillOrder.fillZeroXOrder(contract IMarket,uint256,contract IERC20,uint256,enum Order.Types,uint256,address,bytes32,address,address)"></a><code class="function-signature">fillZeroXOrder(contract IMarket _market, uint256 _outcome, contract IERC20 _kycToken, uint256 _price, enum Order.Types _orderType, uint256 _amount, address _creator, bytes32 _tradeGroupId, address _affiliateAddress, address _filler) <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">external</span></h4>







### `Trade`



<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#Trade.initialize(contract IAugur)"><code class="function-signature">initialize(contract IAugur _augur)</code></a></li><li><a href="#Trade.create(enum Order.TradeDirections,contract IMarket,uint256,uint256,uint256,bytes32,bytes32,bytes32,uint256,address,address,contract IERC20)"><code class="function-signature">create(enum Order.TradeDirections _direction, contract IMarket _market, uint256 _outcome, uint256 _amount, uint256 _price, bytes32 _betterOrderId, bytes32 _worseOrderId, bytes32 _tradeGroupId, uint256 _loopLimit, address _affiliateAddress, address _sender, contract IERC20 _kycToken)</code></a></li><li><a href="#Trade.publicTrade(enum Order.TradeDirections,contract IMarket,uint256,uint256,uint256,bytes32,bytes32,bytes32,uint256,address,contract IERC20)"><code class="function-signature">publicTrade(enum Order.TradeDirections _direction, contract IMarket _market, uint256 _outcome, uint256 _amount, uint256 _price, bytes32 _betterOrderId, bytes32 _worseOrderId, bytes32 _tradeGroupId, uint256 _loopLimit, address _affiliateAddress, contract IERC20 _kycToken)</code></a></li><li><a href="#Trade.publicFillBestOrder(enum Order.TradeDirections,contract IMarket,uint256,uint256,uint256,bytes32,uint256,address,contract IERC20)"><code class="function-signature">publicFillBestOrder(enum Order.TradeDirections _direction, contract IMarket _market, uint256 _outcome, uint256 _amount, uint256 _price, bytes32 _tradeGroupId, uint256 _loopLimit, address _affiliateAddress, contract IERC20 _kycToken)</code></a></li><li><a href="#Trade.internalTrade(enum Order.TradeDirections,contract IMarket,uint256,uint256,uint256,bytes32,bytes32,bytes32,uint256,address,address,contract IERC20)"><code class="function-signature">internalTrade(enum Order.TradeDirections _direction, contract IMarket _market, uint256 _outcome, uint256 _amount, uint256 _price, bytes32 _betterOrderId, bytes32 _worseOrderId, bytes32 _tradeGroupId, uint256 _loopLimit, address _affiliateAddress, address _sender, contract IERC20 _kycToken)</code></a></li><li><a href="#Trade.internalFillBestOrder(enum Order.TradeDirections,contract IMarket,uint256,uint256,uint256,bytes32,uint256,address,address,contract IERC20)"><code class="function-signature">internalFillBestOrder(enum Order.TradeDirections _direction, contract IMarket _market, uint256 _outcome, uint256 _amount, uint256 _price, bytes32 _tradeGroupId, uint256 _loopLimit, address _affiliateAddress, address _sender, contract IERC20 _kycToken)</code></a></li><li><a href="#Trade.trade(struct Trade.Data)"><code class="function-signature">trade(struct Trade.Data _tradeData)</code></a></li><li><a href="#Trade.fillBestOrder(struct Trade.Data)"><code class="function-signature">fillBestOrder(struct Trade.Data _tradeData)</code></a></li><li class="inherited"><a href="#Initializable.endInitialization()"><code class="function-signature">endInitialization()</code></a></li><li class="inherited"><a href="#Initializable.getInitialized()"><code class="function-signature">getInitialized()</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="Trade.initialize(contract IAugur)"></a><code class="function-signature">initialize(contract IAugur _augur)</code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="Trade.create(enum Order.TradeDirections,contract IMarket,uint256,uint256,uint256,bytes32,bytes32,bytes32,uint256,address,address,contract IERC20)"></a><code class="function-signature">create(enum Order.TradeDirections _direction, contract IMarket _market, uint256 _outcome, uint256 _amount, uint256 _price, bytes32 _betterOrderId, bytes32 _worseOrderId, bytes32 _tradeGroupId, uint256 _loopLimit, address _affiliateAddress, address _sender, contract IERC20 _kycToken) <span class="return-arrow">→</span> <span class="return-type">struct Trade.Data</span></code><span class="function-visibility">internal</span></h4>





<h4><a class="anchor" aria-hidden="true" id="Trade.publicTrade(enum Order.TradeDirections,contract IMarket,uint256,uint256,uint256,bytes32,bytes32,bytes32,uint256,address,contract IERC20)"></a><code class="function-signature">publicTrade(enum Order.TradeDirections _direction, contract IMarket _market, uint256 _outcome, uint256 _amount, uint256 _price, bytes32 _betterOrderId, bytes32 _worseOrderId, bytes32 _tradeGroupId, uint256 _loopLimit, address _affiliateAddress, contract IERC20 _kycToken) <span class="return-arrow">→</span> <span class="return-type">bytes32</span></code><span class="function-visibility">external</span></h4>





<h4><a class="anchor" aria-hidden="true" id="Trade.publicFillBestOrder(enum Order.TradeDirections,contract IMarket,uint256,uint256,uint256,bytes32,uint256,address,contract IERC20)"></a><code class="function-signature">publicFillBestOrder(enum Order.TradeDirections _direction, contract IMarket _market, uint256 _outcome, uint256 _amount, uint256 _price, bytes32 _tradeGroupId, uint256 _loopLimit, address _affiliateAddress, contract IERC20 _kycToken) <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">external</span></h4>





<h4><a class="anchor" aria-hidden="true" id="Trade.internalTrade(enum Order.TradeDirections,contract IMarket,uint256,uint256,uint256,bytes32,bytes32,bytes32,uint256,address,address,contract IERC20)"></a><code class="function-signature">internalTrade(enum Order.TradeDirections _direction, contract IMarket _market, uint256 _outcome, uint256 _amount, uint256 _price, bytes32 _betterOrderId, bytes32 _worseOrderId, bytes32 _tradeGroupId, uint256 _loopLimit, address _affiliateAddress, address _sender, contract IERC20 _kycToken) <span class="return-arrow">→</span> <span class="return-type">bytes32</span></code><span class="function-visibility">internal</span></h4>





<h4><a class="anchor" aria-hidden="true" id="Trade.internalFillBestOrder(enum Order.TradeDirections,contract IMarket,uint256,uint256,uint256,bytes32,uint256,address,address,contract IERC20)"></a><code class="function-signature">internalFillBestOrder(enum Order.TradeDirections _direction, contract IMarket _market, uint256 _outcome, uint256 _amount, uint256 _price, bytes32 _tradeGroupId, uint256 _loopLimit, address _affiliateAddress, address _sender, contract IERC20 _kycToken) <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">internal</span></h4>





<h4><a class="anchor" aria-hidden="true" id="Trade.trade(struct Trade.Data)"></a><code class="function-signature">trade(struct Trade.Data _tradeData) <span class="return-arrow">→</span> <span class="return-type">bytes32</span></code><span class="function-visibility">internal</span></h4>





<h4><a class="anchor" aria-hidden="true" id="Trade.fillBestOrder(struct Trade.Data)"></a><code class="function-signature">fillBestOrder(struct Trade.Data _tradeData) <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">internal</span></h4>







### `IOICash`



<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#IOICash.initialize(contract IAugur,contract IUniverse,address)"><code class="function-signature">initialize(contract IAugur _augur, contract IUniverse _universe, address _erc1820RegistryAddress)</code></a></li><li class="inherited"><a href="#IERC20.totalSupply()"><code class="function-signature">totalSupply()</code></a></li><li class="inherited"><a href="#IERC20.balanceOf(address)"><code class="function-signature">balanceOf(address owner)</code></a></li><li class="inherited"><a href="#IERC20.transfer(address,uint256)"><code class="function-signature">transfer(address to, uint256 amount)</code></a></li><li class="inherited"><a href="#IERC20.transferFrom(address,address,uint256)"><code class="function-signature">transferFrom(address from, address to, uint256 amount)</code></a></li><li class="inherited"><a href="#IERC20.approve(address,uint256)"><code class="function-signature">approve(address spender, uint256 amount)</code></a></li><li class="inherited"><a href="#IERC20.allowance(address,address)"><code class="function-signature">allowance(address owner, address spender)</code></a></li></ul><span class="contract-index-title">Events</span><ul><li class="inherited"><a href="#IERC20.Transfer(address,address,uint256)"><code class="function-signature">Transfer(address from, address to, uint256 value)</code></a></li><li class="inherited"><a href="#IERC20.Approval(address,address,uint256)"><code class="function-signature">Approval(address owner, address spender, uint256 value)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="IOICash.initialize(contract IAugur,contract IUniverse,address)"></a><code class="function-signature">initialize(contract IAugur _augur, contract IUniverse _universe, address _erc1820RegistryAddress)</code><span class="function-visibility">external</span></h4>







### `ITrade`



<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#ITrade.publicTrade(enum Order.TradeDirections,contract IMarket,uint256,uint256,uint256,bytes32,bytes32,uint256)"><code class="function-signature">publicTrade(enum Order.TradeDirections _direction, contract IMarket _market, uint256 _outcome, uint256 _amount, uint256 _price, bytes32 _betterOrderId, bytes32 _worseOrderId, uint256 _tradeGroupID)</code></a></li><li><a href="#ITrade.publicFillBestOrder(enum Order.TradeDirections,contract IMarket,uint256,uint256,uint256,uint256)"><code class="function-signature">publicFillBestOrder(enum Order.TradeDirections _direction, contract IMarket _market, uint256 _outcome, uint256 _amount, uint256 _price, uint256 _tradeGroupID)</code></a></li><li><a href="#ITrade.trade(address,enum Order.TradeDirections,contract IMarket,uint256,uint256,uint256,bytes32,bytes32,uint256)"><code class="function-signature">trade(address _sender, enum Order.TradeDirections _direction, contract IMarket _market, uint256 _outcome, uint256 _amount, uint256 _price, bytes32 _betterOrderId, bytes32 _worseOrderId, uint256 _tradeGroupID)</code></a></li><li><a href="#ITrade.fillBestOrder(address,enum Order.TradeDirections,contract IMarket,uint256,uint256,uint256,uint256)"><code class="function-signature">fillBestOrder(address _sender, enum Order.TradeDirections _direction, contract IMarket _market, uint256 _outcome, uint256 _amount, uint256 _price, uint256 _tradeGroupID)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="ITrade.publicTrade(enum Order.TradeDirections,contract IMarket,uint256,uint256,uint256,bytes32,bytes32,uint256)"></a><code class="function-signature">publicTrade(enum Order.TradeDirections _direction, contract IMarket _market, uint256 _outcome, uint256 _amount, uint256 _price, bytes32 _betterOrderId, bytes32 _worseOrderId, uint256 _tradeGroupID) <span class="return-arrow">→</span> <span class="return-type">bytes32</span></code><span class="function-visibility">external</span></h4>





<h4><a class="anchor" aria-hidden="true" id="ITrade.publicFillBestOrder(enum Order.TradeDirections,contract IMarket,uint256,uint256,uint256,uint256)"></a><code class="function-signature">publicFillBestOrder(enum Order.TradeDirections _direction, contract IMarket _market, uint256 _outcome, uint256 _amount, uint256 _price, uint256 _tradeGroupID) <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">external</span></h4>





<h4><a class="anchor" aria-hidden="true" id="ITrade.trade(address,enum Order.TradeDirections,contract IMarket,uint256,uint256,uint256,bytes32,bytes32,uint256)"></a><code class="function-signature">trade(address _sender, enum Order.TradeDirections _direction, contract IMarket _market, uint256 _outcome, uint256 _amount, uint256 _price, bytes32 _betterOrderId, bytes32 _worseOrderId, uint256 _tradeGroupID) <span class="return-arrow">→</span> <span class="return-type">bytes32</span></code><span class="function-visibility">internal</span></h4>





<h4><a class="anchor" aria-hidden="true" id="ITrade.fillBestOrder(address,enum Order.TradeDirections,contract IMarket,uint256,uint256,uint256,uint256)"></a><code class="function-signature">fillBestOrder(address _sender, enum Order.TradeDirections _direction, contract IMarket _market, uint256 _outcome, uint256 _amount, uint256 _price, uint256 _tradeGroupID) <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">internal</span></h4>







### `IZeroXTradeToken`



<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#IZeroXTradeToken.parseAssetData(bytes)"><code class="function-signature">parseAssetData(bytes _assetData)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="IZeroXTradeToken.parseAssetData(bytes)"></a><code class="function-signature">parseAssetData(bytes _assetData) <span class="return-arrow">→</span> <span class="return-type">struct IZeroXTradeToken.AugurOrderData</span></code><span class="function-visibility">public</span></h4>







### `ContractExists`



<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#ContractExists.exists(address)"><code class="function-signature">exists(address _address)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="ContractExists.exists(address)"></a><code class="function-signature">exists(address _address) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">internal</span></h4>







### `ERC777`



<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#ERC777.initialize1820InterfaceImplementations()"><code class="function-signature">initialize1820InterfaceImplementations()</code></a></li><li><a href="#ERC777.granularity()"><code class="function-signature">granularity()</code></a></li><li><a href="#ERC777.totalSupply()"><code class="function-signature">totalSupply()</code></a></li><li><a href="#ERC777.balanceOf(address)"><code class="function-signature">balanceOf(address tokenHolder)</code></a></li><li><a href="#ERC777.send(address,uint256,bytes)"><code class="function-signature">send(address recipient, uint256 amount, bytes data)</code></a></li><li><a href="#ERC777.transfer(address,uint256)"><code class="function-signature">transfer(address recipient, uint256 amount)</code></a></li><li><a href="#ERC777._transfer(address,address,uint256,bool)"><code class="function-signature">_transfer(address from, address recipient, uint256 amount, bool callHooks)</code></a></li><li><a href="#ERC777.isOperatorFor(address,address)"><code class="function-signature">isOperatorFor(address operator, address tokenHolder)</code></a></li><li><a href="#ERC777.authorizeOperator(address)"><code class="function-signature">authorizeOperator(address operator)</code></a></li><li><a href="#ERC777.revokeOperator(address)"><code class="function-signature">revokeOperator(address operator)</code></a></li><li><a href="#ERC777.defaultOperators()"><code class="function-signature">defaultOperators()</code></a></li><li><a href="#ERC777.operatorSend(address,address,uint256,bytes,bytes)"><code class="function-signature">operatorSend(address sender, address recipient, uint256 amount, bytes data, bytes operatorData)</code></a></li><li><a href="#ERC777.allowance(address,address)"><code class="function-signature">allowance(address holder, address spender)</code></a></li><li><a href="#ERC777.approve(address,uint256)"><code class="function-signature">approve(address spender, uint256 value)</code></a></li><li><a href="#ERC777.transferFrom(address,address,uint256)"><code class="function-signature">transferFrom(address holder, address recipient, uint256 amount)</code></a></li><li><a href="#ERC777._mint(address,address,uint256,bytes,bytes,bool)"><code class="function-signature">_mint(address operator, address account, uint256 amount, bytes userData, bytes operatorData, bool requireReceptionAck)</code></a></li><li><a href="#ERC777._burn(address,address,uint256,bytes,bytes,bool)"><code class="function-signature">_burn(address operator, address from, uint256 amount, bytes data, bytes operatorData, bool callHooks)</code></a></li><li><a href="#ERC777._approve(address,address,uint256)"><code class="function-signature">_approve(address holder, address spender, uint256 value)</code></a></li><li><a href="#ERC777.onTokenTransfer(address,address,uint256)"><code class="function-signature">onTokenTransfer(address _from, address _to, uint256 _value)</code></a></li></ul><span class="contract-index-title">Events</span><ul><li class="inherited"><a href="#IERC20.Transfer(address,address,uint256)"><code class="function-signature">Transfer(address from, address to, uint256 value)</code></a></li><li class="inherited"><a href="#IERC20.Approval(address,address,uint256)"><code class="function-signature">Approval(address owner, address spender, uint256 value)</code></a></li><li class="inherited"><a href="trading#IERC777.Sent(address,address,address,uint256,bytes,bytes)"><code class="function-signature">Sent(address operator, address from, address to, uint256 amount, bytes data, bytes operatorData)</code></a></li><li class="inherited"><a href="trading#IERC777.Minted(address,address,uint256,bytes,bytes)"><code class="function-signature">Minted(address operator, address to, uint256 amount, bytes data, bytes operatorData)</code></a></li><li class="inherited"><a href="trading#IERC777.Burned(address,address,uint256,bytes,bytes)"><code class="function-signature">Burned(address operator, address from, uint256 amount, bytes data, bytes operatorData)</code></a></li><li class="inherited"><a href="trading#IERC777.AuthorizedOperator(address,address)"><code class="function-signature">AuthorizedOperator(address operator, address tokenHolder)</code></a></li><li class="inherited"><a href="trading#IERC777.RevokedOperator(address,address)"><code class="function-signature">RevokedOperator(address operator, address tokenHolder)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="ERC777.initialize1820InterfaceImplementations()"></a><code class="function-signature">initialize1820InterfaceImplementations() <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">internal</span></h4>





<h4><a class="anchor" aria-hidden="true" id="ERC777.granularity()"></a><code class="function-signature">granularity() <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">public</span></h4>

See [`IERC777.granularity`](#IERC777.granularity()).

This implementation always returns `1`.



<h4><a class="anchor" aria-hidden="true" id="ERC777.totalSupply()"></a><code class="function-signature">totalSupply() <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">public</span></h4>

See [`IERC777.totalSupply`](#IERC777.totalSupply()).



<h4><a class="anchor" aria-hidden="true" id="ERC777.balanceOf(address)"></a><code class="function-signature">balanceOf(address tokenHolder) <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">public</span></h4>

Returns the amount of tokens owned by an account (`tokenHolder`).



<h4><a class="anchor" aria-hidden="true" id="ERC777.send(address,uint256,bytes)"></a><code class="function-signature">send(address recipient, uint256 amount, bytes data)</code><span class="function-visibility">external</span></h4>

See [`IERC777.send`](#IERC777.send(address,uint256,bytes)).

Also emits a [`Transfer`](#ERC777.Transfer(address,address,uint256)) event for ERC20 compatibility.



<h4><a class="anchor" aria-hidden="true" id="ERC777.transfer(address,uint256)"></a><code class="function-signature">transfer(address recipient, uint256 amount) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>

See [`IERC20.transfer`](utility#IERC20.transfer(address,uint256)).

Unlike [`send`](#ERC777.send(address,uint256,bytes)), `recipient` is _not_ required to implement the `tokensReceived`
interface if it is a contract.

Also emits a [`Sent`](#ERC777.Sent(address,address,address,uint256,bytes,bytes)) event.



<h4><a class="anchor" aria-hidden="true" id="ERC777._transfer(address,address,uint256,bool)"></a><code class="function-signature">_transfer(address from, address recipient, uint256 amount, bool callHooks) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">internal</span></h4>





<h4><a class="anchor" aria-hidden="true" id="ERC777.isOperatorFor(address,address)"></a><code class="function-signature">isOperatorFor(address operator, address tokenHolder) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>

See [`IERC777.isOperatorFor`](#IERC777.isOperatorFor(address,address)).



<h4><a class="anchor" aria-hidden="true" id="ERC777.authorizeOperator(address)"></a><code class="function-signature">authorizeOperator(address operator)</code><span class="function-visibility">external</span></h4>

See [`IERC777.authorizeOperator`](#IERC777.authorizeOperator(address)).



<h4><a class="anchor" aria-hidden="true" id="ERC777.revokeOperator(address)"></a><code class="function-signature">revokeOperator(address operator)</code><span class="function-visibility">external</span></h4>

See [`IERC777.revokeOperator`](#IERC777.revokeOperator(address)).



<h4><a class="anchor" aria-hidden="true" id="ERC777.defaultOperators()"></a><code class="function-signature">defaultOperators() <span class="return-arrow">→</span> <span class="return-type">address[]</span></code><span class="function-visibility">public</span></h4>

See [`IERC777.defaultOperators`](#IERC777.defaultOperators()).



<h4><a class="anchor" aria-hidden="true" id="ERC777.operatorSend(address,address,uint256,bytes,bytes)"></a><code class="function-signature">operatorSend(address sender, address recipient, uint256 amount, bytes data, bytes operatorData)</code><span class="function-visibility">external</span></h4>

See [`IERC777.operatorSend`](#IERC777.operatorSend(address,address,uint256,bytes,bytes)).

Emits [`Sent`](#ERC777.Sent(address,address,address,uint256,bytes,bytes)) and [`Transfer`](#ERC777.Transfer(address,address,uint256)) events.



<h4><a class="anchor" aria-hidden="true" id="ERC777.allowance(address,address)"></a><code class="function-signature">allowance(address holder, address spender) <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">public</span></h4>

See [`IERC20.allowance`](utility#IERC20.allowance(address,address)).

Note that operator and allowance concepts are orthogonal: operators may
not have allowance, and accounts with allowance may not be operators
themselves.



<h4><a class="anchor" aria-hidden="true" id="ERC777.approve(address,uint256)"></a><code class="function-signature">approve(address spender, uint256 value) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>

See [`IERC20.approve`](utility#IERC20.approve(address,uint256)).

Note that accounts cannot have allowance issued by their operators.



<h4><a class="anchor" aria-hidden="true" id="ERC777.transferFrom(address,address,uint256)"></a><code class="function-signature">transferFrom(address holder, address recipient, uint256 amount) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>

See [`IERC20.transferFrom`](utility#IERC20.transferFrom(address,address,uint256)).

Note that operator and allowance concepts are orthogonal: operators cannot
call [`transferFrom`](#ERC777.transferFrom(address,address,uint256)) (unless they have allowance), and accounts with
allowance cannot call [`operatorSend`](#ERC777.operatorSend(address,address,uint256,bytes,bytes)) (unless they are operators).

Emits [`Sent`](#ERC777.Sent(address,address,address,uint256,bytes,bytes)) and [`Transfer`](#ERC777.Transfer(address,address,uint256)) events.



<h4><a class="anchor" aria-hidden="true" id="ERC777._mint(address,address,uint256,bytes,bytes,bool)"></a><code class="function-signature">_mint(address operator, address account, uint256 amount, bytes userData, bytes operatorData, bool requireReceptionAck)</code><span class="function-visibility">internal</span></h4>

Creates `amount` tokens and assigns them to `account`, increasing
the total supply.

If a send hook is registered for `raccount`, the corresponding function
will be called with `operator`, `data` and `operatorData`.

See [`IERC777Sender`](#ierc777sender) and [`IERC777Recipient`](#ierc777recipient).

Emits [`Sent`](#ERC777.Sent(address,address,address,uint256,bytes,bytes)) and [`Transfer`](#ERC777.Transfer(address,address,uint256)) events.

Requirements

- `account` cannot be the zero address.
- if `account` is a contract, it must implement the `tokensReceived`
interface.



<h4><a class="anchor" aria-hidden="true" id="ERC777._burn(address,address,uint256,bytes,bytes,bool)"></a><code class="function-signature">_burn(address operator, address from, uint256 amount, bytes data, bytes operatorData, bool callHooks)</code><span class="function-visibility">internal</span></h4>

Burn tokens




<h4><a class="anchor" aria-hidden="true" id="ERC777._approve(address,address,uint256)"></a><code class="function-signature">_approve(address holder, address spender, uint256 value)</code><span class="function-visibility">internal</span></h4>





<h4><a class="anchor" aria-hidden="true" id="ERC777.onTokenTransfer(address,address,uint256)"></a><code class="function-signature">onTokenTransfer(address _from, address _to, uint256 _value)</code><span class="function-visibility">internal</span></h4>







### `IERC1820Registry`



<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#IERC1820Registry.setManager(address,address)"><code class="function-signature">setManager(address account, address newManager)</code></a></li><li><a href="#IERC1820Registry.getManager(address)"><code class="function-signature">getManager(address account)</code></a></li><li><a href="#IERC1820Registry.setInterfaceImplementer(address,bytes32,address)"><code class="function-signature">setInterfaceImplementer(address account, bytes32 interfaceHash, address implementer)</code></a></li><li><a href="#IERC1820Registry.getInterfaceImplementer(address,bytes32)"><code class="function-signature">getInterfaceImplementer(address account, bytes32 interfaceHash)</code></a></li><li><a href="#IERC1820Registry.interfaceHash(string)"><code class="function-signature">interfaceHash(string interfaceName)</code></a></li><li><a href="#IERC1820Registry.updateERC165Cache(address,bytes4)"><code class="function-signature">updateERC165Cache(address account, bytes4 interfaceId)</code></a></li><li><a href="#IERC1820Registry.implementsERC165Interface(address,bytes4)"><code class="function-signature">implementsERC165Interface(address account, bytes4 interfaceId)</code></a></li><li><a href="#IERC1820Registry.implementsERC165InterfaceNoCache(address,bytes4)"><code class="function-signature">implementsERC165InterfaceNoCache(address account, bytes4 interfaceId)</code></a></li></ul><span class="contract-index-title">Events</span><ul><li><a href="#IERC1820Registry.InterfaceImplementerSet(address,bytes32,address)"><code class="function-signature">InterfaceImplementerSet(address account, bytes32 interfaceHash, address implementer)</code></a></li><li><a href="#IERC1820Registry.ManagerChanged(address,address)"><code class="function-signature">ManagerChanged(address account, address newManager)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="IERC1820Registry.setManager(address,address)"></a><code class="function-signature">setManager(address account, address newManager)</code><span class="function-visibility">external</span></h4>

Sets `newManager` as the manager for `account`. A manager of an
account is able to set interface implementers for it.

By default, each account is its own manager. Passing a value of `0x0` in
`newManager` will reset the manager to this initial state.

Emits a [`ManagerChanged`](#IERC1820Registry.ManagerChanged(address,address)) event.

Requirements:

- the caller must be the current manager for `account`.



<h4><a class="anchor" aria-hidden="true" id="IERC1820Registry.getManager(address)"></a><code class="function-signature">getManager(address account) <span class="return-arrow">→</span> <span class="return-type">address</span></code><span class="function-visibility">external</span></h4>

Returns the manager for `account`.

See [`setManager`](#IERC1820Registry.setManager(address,address)).



<h4><a class="anchor" aria-hidden="true" id="IERC1820Registry.setInterfaceImplementer(address,bytes32,address)"></a><code class="function-signature">setInterfaceImplementer(address account, bytes32 interfaceHash, address implementer)</code><span class="function-visibility">external</span></h4>

Sets the `implementer` contract as `account`&#x27;s implementer for
[`interfaceHash`](#IERC1820Registry.interfaceHash(string)).

`account` being the zero address is an alias for the caller&#x27;s address.
The zero address can also be used in `implementer` to remove an old one.

See [`interfaceHash`](#IERC1820Registry.interfaceHash(string)) to learn how these are created.

Emits an [`InterfaceImplementerSet`](#IERC1820Registry.InterfaceImplementerSet(address,bytes32,address)) event.

Requirements:

- the caller must be the current manager for `account`.
- [`interfaceHash`](#IERC1820Registry.interfaceHash(string)) must not be an `IERC165` interface id (i.e. it must not
end in 28 zeroes).
- `implementer` must implement [`IERC1820Implementer`](libraries#ierc1820implementer) and return true when
queried for support, unless `implementer` is the caller. See
[`IERC1820Implementer.canImplementInterfaceForAddress`](libraries#IERC1820Implementer.canImplementInterfaceForAddress(bytes32,address)).



<h4><a class="anchor" aria-hidden="true" id="IERC1820Registry.getInterfaceImplementer(address,bytes32)"></a><code class="function-signature">getInterfaceImplementer(address account, bytes32 interfaceHash) <span class="return-arrow">→</span> <span class="return-type">address</span></code><span class="function-visibility">external</span></h4>

Returns the implementer of [`interfaceHash`](#IERC1820Registry.interfaceHash(string)) for `account`. If no such
implementer is registered, returns the zero address.

If [`interfaceHash`](#IERC1820Registry.interfaceHash(string)) is an `IERC165` interface id (i.e. it ends with 28
zeroes), `account` will be queried for support of it.

`account` being the zero address is an alias for the caller&#x27;s address.



<h4><a class="anchor" aria-hidden="true" id="IERC1820Registry.interfaceHash(string)"></a><code class="function-signature">interfaceHash(string interfaceName) <span class="return-arrow">→</span> <span class="return-type">bytes32</span></code><span class="function-visibility">external</span></h4>

Returns the interface hash for an `interfaceName`, as defined in the
corresponding
[section of the EIP](https://eips.ethereum.org/EIPS/eip-1820#interface-name).



<h4><a class="anchor" aria-hidden="true" id="IERC1820Registry.updateERC165Cache(address,bytes4)"></a><code class="function-signature">updateERC165Cache(address account, bytes4 interfaceId)</code><span class="function-visibility">external</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IERC1820Registry.implementsERC165Interface(address,bytes4)"></a><code class="function-signature">implementsERC165Interface(address account, bytes4 interfaceId) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">external</span></h4>





<h4><a class="anchor" aria-hidden="true" id="IERC1820Registry.implementsERC165InterfaceNoCache(address,bytes4)"></a><code class="function-signature">implementsERC165InterfaceNoCache(address account, bytes4 interfaceId) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">external</span></h4>







<h4><a class="anchor" aria-hidden="true" id="IERC1820Registry.InterfaceImplementerSet(address,bytes32,address)"></a><code class="function-signature">InterfaceImplementerSet(address account, bytes32 interfaceHash, address implementer)</code><span class="function-visibility"></span></h4>





<h4><a class="anchor" aria-hidden="true" id="IERC1820Registry.ManagerChanged(address,address)"></a><code class="function-signature">ManagerChanged(address account, address newManager)</code><span class="function-visibility"></span></h4>





### `IERC777`



<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#IERC777.granularity()"><code class="function-signature">granularity()</code></a></li><li><a href="#IERC777.totalSupply()"><code class="function-signature">totalSupply()</code></a></li><li><a href="#IERC777.balanceOf(address)"><code class="function-signature">balanceOf(address owner)</code></a></li><li><a href="#IERC777.send(address,uint256,bytes)"><code class="function-signature">send(address recipient, uint256 amount, bytes data)</code></a></li><li><a href="#IERC777.isOperatorFor(address,address)"><code class="function-signature">isOperatorFor(address operator, address tokenHolder)</code></a></li><li><a href="#IERC777.authorizeOperator(address)"><code class="function-signature">authorizeOperator(address operator)</code></a></li><li><a href="#IERC777.revokeOperator(address)"><code class="function-signature">revokeOperator(address operator)</code></a></li><li><a href="#IERC777.defaultOperators()"><code class="function-signature">defaultOperators()</code></a></li><li><a href="#IERC777.operatorSend(address,address,uint256,bytes,bytes)"><code class="function-signature">operatorSend(address sender, address recipient, uint256 amount, bytes data, bytes operatorData)</code></a></li></ul><span class="contract-index-title">Events</span><ul><li><a href="#IERC777.Sent(address,address,address,uint256,bytes,bytes)"><code class="function-signature">Sent(address operator, address from, address to, uint256 amount, bytes data, bytes operatorData)</code></a></li><li><a href="#IERC777.Minted(address,address,uint256,bytes,bytes)"><code class="function-signature">Minted(address operator, address to, uint256 amount, bytes data, bytes operatorData)</code></a></li><li><a href="#IERC777.Burned(address,address,uint256,bytes,bytes)"><code class="function-signature">Burned(address operator, address from, uint256 amount, bytes data, bytes operatorData)</code></a></li><li><a href="#IERC777.AuthorizedOperator(address,address)"><code class="function-signature">AuthorizedOperator(address operator, address tokenHolder)</code></a></li><li><a href="#IERC777.RevokedOperator(address,address)"><code class="function-signature">RevokedOperator(address operator, address tokenHolder)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="IERC777.granularity()"></a><code class="function-signature">granularity() <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">external</span></h4>

Returns the smallest part of the token that is not divisible. This
means all token operations (creation, movement and destruction) must have
amounts that are a multiple of this number.

For most token contracts, this value will equal 1.



<h4><a class="anchor" aria-hidden="true" id="IERC777.totalSupply()"></a><code class="function-signature">totalSupply() <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">external</span></h4>

Returns the amount of tokens in existence.



<h4><a class="anchor" aria-hidden="true" id="IERC777.balanceOf(address)"></a><code class="function-signature">balanceOf(address owner) <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">external</span></h4>

Returns the amount of tokens owned by an account (`owner`).



<h4><a class="anchor" aria-hidden="true" id="IERC777.send(address,uint256,bytes)"></a><code class="function-signature">send(address recipient, uint256 amount, bytes data)</code><span class="function-visibility">external</span></h4>

Moves `amount` tokens from the caller&#x27;s account to `recipient`.

If send or receive hooks are registered for the caller and `recipient`,
the corresponding functions will be called with `data` and empty
`operatorData`. See [`IERC777Sender`](#ierc777sender) and [`IERC777Recipient`](#ierc777recipient).

Emits a [`Sent`](#IERC777.Sent(address,address,address,uint256,bytes,bytes)) event.

Requirements

- the caller must have at least `amount` tokens.
- `recipient` cannot be the zero address.
- if `recipient` is a contract, it must implement the `tokensReceived`
interface.



<h4><a class="anchor" aria-hidden="true" id="IERC777.isOperatorFor(address,address)"></a><code class="function-signature">isOperatorFor(address operator, address tokenHolder) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">external</span></h4>

Returns true if an account is an operator of `tokenHolder`.
Operators can send and burn tokens on behalf of their owners. All
accounts are their own operator.

See [`operatorSend`](#IERC777.operatorSend(address,address,uint256,bytes,bytes)) and `operatorBurn`.



<h4><a class="anchor" aria-hidden="true" id="IERC777.authorizeOperator(address)"></a><code class="function-signature">authorizeOperator(address operator)</code><span class="function-visibility">external</span></h4>

Make an account an operator of the caller.

See [`isOperatorFor`](#IERC777.isOperatorFor(address,address)).

Emits an [`AuthorizedOperator`](#IERC777.AuthorizedOperator(address,address)) event.

Requirements

- `operator` cannot be calling address.



<h4><a class="anchor" aria-hidden="true" id="IERC777.revokeOperator(address)"></a><code class="function-signature">revokeOperator(address operator)</code><span class="function-visibility">external</span></h4>

Make an account an operator of the caller.

See [`isOperatorFor`](#IERC777.isOperatorFor(address,address)) and [`defaultOperators`](#IERC777.defaultOperators()).

Emits a [`RevokedOperator`](#IERC777.RevokedOperator(address,address)) event.

Requirements

- `operator` cannot be calling address.



<h4><a class="anchor" aria-hidden="true" id="IERC777.defaultOperators()"></a><code class="function-signature">defaultOperators() <span class="return-arrow">→</span> <span class="return-type">address[]</span></code><span class="function-visibility">external</span></h4>

Returns the list of default operators. These accounts are operators
for all token holders, even if [`authorizeOperator`](#IERC777.authorizeOperator(address)) was never called on
them.

This list is immutable, but individual holders may revoke these via
[`revokeOperator`](#IERC777.revokeOperator(address)), in which case [`isOperatorFor`](#IERC777.isOperatorFor(address,address)) will return false.



<h4><a class="anchor" aria-hidden="true" id="IERC777.operatorSend(address,address,uint256,bytes,bytes)"></a><code class="function-signature">operatorSend(address sender, address recipient, uint256 amount, bytes data, bytes operatorData)</code><span class="function-visibility">external</span></h4>

Moves `amount` tokens from `sender` to `recipient`. The caller must
be an operator of `sender`.

If send or receive hooks are registered for `sender` and `recipient`,
the corresponding functions will be called with `data` and
`operatorData`. See [`IERC777Sender`](#ierc777sender) and [`IERC777Recipient`](#ierc777recipient).

Emits a [`Sent`](#IERC777.Sent(address,address,address,uint256,bytes,bytes)) event.

Requirements

- `sender` cannot be the zero address.
- `sender` must have at least `amount` tokens.
- the caller must be an operator for `sender`.
- `recipient` cannot be the zero address.
- if `recipient` is a contract, it must implement the `tokensReceived`
interface.





<h4><a class="anchor" aria-hidden="true" id="IERC777.Sent(address,address,address,uint256,bytes,bytes)"></a><code class="function-signature">Sent(address operator, address from, address to, uint256 amount, bytes data, bytes operatorData)</code><span class="function-visibility"></span></h4>





<h4><a class="anchor" aria-hidden="true" id="IERC777.Minted(address,address,uint256,bytes,bytes)"></a><code class="function-signature">Minted(address operator, address to, uint256 amount, bytes data, bytes operatorData)</code><span class="function-visibility"></span></h4>





<h4><a class="anchor" aria-hidden="true" id="IERC777.Burned(address,address,uint256,bytes,bytes)"></a><code class="function-signature">Burned(address operator, address from, uint256 amount, bytes data, bytes operatorData)</code><span class="function-visibility"></span></h4>





<h4><a class="anchor" aria-hidden="true" id="IERC777.AuthorizedOperator(address,address)"></a><code class="function-signature">AuthorizedOperator(address operator, address tokenHolder)</code><span class="function-visibility"></span></h4>





<h4><a class="anchor" aria-hidden="true" id="IERC777.RevokedOperator(address,address)"></a><code class="function-signature">RevokedOperator(address operator, address tokenHolder)</code><span class="function-visibility"></span></h4>





### `IERC777Recipient`



<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#IERC777Recipient.tokensReceived(address,address,address,uint256,bytes,bytes)"><code class="function-signature">tokensReceived(address operator, address from, address to, uint256 amount, bytes userData, bytes operatorData)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="IERC777Recipient.tokensReceived(address,address,address,uint256,bytes,bytes)"></a><code class="function-signature">tokensReceived(address operator, address from, address to, uint256 amount, bytes userData, bytes operatorData)</code><span class="function-visibility">external</span></h4>

Called by an [`IERC777`](#ierc777) token contract whenever tokens are being
moved or created into a registered account (`to`). The type of operation
is conveyed by `from` being the zero address or not.

This call occurs _after_ the token contract&#x27;s state is updated, so
[`IERC777.balanceOf`](#IERC777.balanceOf(address)), etc., can be used to query the post-operation state.

This function may revert to prevent the operation from being executed.





### `IERC777Sender`



<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#IERC777Sender.tokensToSend(address,address,address,uint256,bytes,bytes)"><code class="function-signature">tokensToSend(address operator, address from, address to, uint256 amount, bytes userData, bytes operatorData)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="IERC777Sender.tokensToSend(address,address,address,uint256,bytes,bytes)"></a><code class="function-signature">tokensToSend(address operator, address from, address to, uint256 amount, bytes userData, bytes operatorData)</code><span class="function-visibility">external</span></h4>

Called by an [`IERC777`](#ierc777) token contract whenever a registered holder&#x27;s
(`from`) tokens are about to be moved or destroyed. The type of operation
is conveyed by `to` being the zero address or not.

This call occurs _before_ the token contract&#x27;s state is updated, so
[`IERC777.balanceOf`](#IERC777.balanceOf(address)), etc., can be used to query the pre-operation state.

This function may revert to prevent the operation from being executed.





### `OICash`



<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#OICash.initialize(contract IAugur,contract IUniverse,address)"><code class="function-signature">initialize(contract IAugur _augur, contract IUniverse _universe, address _erc1820RegistryAddress)</code></a></li><li><a href="#OICash.deposit(uint256)"><code class="function-signature">deposit(uint256 _amount)</code></a></li><li><a href="#OICash.withdraw(uint256)"><code class="function-signature">withdraw(uint256 _amount)</code></a></li><li><a href="#OICash.payFees(uint256)"><code class="function-signature">payFees(uint256 _feeAmount)</code></a></li><li><a href="#OICash.buyCompleteSets(contract IMarket,uint256)"><code class="function-signature">buyCompleteSets(contract IMarket _market, uint256 _amount)</code></a></li><li><a href="#OICash.onTokenTransfer(address,address,uint256)"><code class="function-signature">onTokenTransfer(address _from, address _to, uint256 _value)</code></a></li><li><a href="#OICash.onMint(address,uint256)"><code class="function-signature">onMint(address _target, uint256 _amount)</code></a></li><li><a href="#OICash.onBurn(address,uint256)"><code class="function-signature">onBurn(address _target, uint256 _amount)</code></a></li><li class="inherited"><a href="#Initializable.endInitialization()"><code class="function-signature">endInitialization()</code></a></li><li class="inherited"><a href="#Initializable.getInitialized()"><code class="function-signature">getInitialized()</code></a></li><li class="inherited"><a href="#VariableSupplyToken.mint(address,uint256)"><code class="function-signature">mint(address _target, uint256 _amount)</code></a></li><li class="inherited"><a href="#VariableSupplyToken.burn(address,uint256)"><code class="function-signature">burn(address _target, uint256 _amount)</code></a></li><li class="inherited"><a href="#StandardToken.initialize1820InterfaceImplementations()"><code class="function-signature">initialize1820InterfaceImplementations()</code></a></li><li class="inherited"><a href="#StandardToken.noHooksTransfer(address,uint256)"><code class="function-signature">noHooksTransfer(address _recipient, uint256 _amount)</code></a></li><li class="inherited"><a href="#StandardToken.internalNoHooksTransfer(address,address,uint256)"><code class="function-signature">internalNoHooksTransfer(address _from, address _recipient, uint256 _amount)</code></a></li><li class="inherited"><a href="#StandardToken.increaseApproval(address,uint256)"><code class="function-signature">increaseApproval(address _spender, uint256 _addedValue)</code></a></li><li class="inherited"><a href="#StandardToken.decreaseApproval(address,uint256)"><code class="function-signature">decreaseApproval(address _spender, uint256 _subtractedValue)</code></a></li><li class="inherited"><a href="#ERC777.granularity()"><code class="function-signature">granularity()</code></a></li><li class="inherited"><a href="#ERC777.totalSupply()"><code class="function-signature">totalSupply()</code></a></li><li class="inherited"><a href="#ERC777.balanceOf(address)"><code class="function-signature">balanceOf(address tokenHolder)</code></a></li><li class="inherited"><a href="#ERC777.send(address,uint256,bytes)"><code class="function-signature">send(address recipient, uint256 amount, bytes data)</code></a></li><li class="inherited"><a href="#ERC777.transfer(address,uint256)"><code class="function-signature">transfer(address recipient, uint256 amount)</code></a></li><li class="inherited"><a href="#ERC777._transfer(address,address,uint256,bool)"><code class="function-signature">_transfer(address from, address recipient, uint256 amount, bool callHooks)</code></a></li><li class="inherited"><a href="#ERC777.isOperatorFor(address,address)"><code class="function-signature">isOperatorFor(address operator, address tokenHolder)</code></a></li><li class="inherited"><a href="#ERC777.authorizeOperator(address)"><code class="function-signature">authorizeOperator(address operator)</code></a></li><li class="inherited"><a href="#ERC777.revokeOperator(address)"><code class="function-signature">revokeOperator(address operator)</code></a></li><li class="inherited"><a href="#ERC777.defaultOperators()"><code class="function-signature">defaultOperators()</code></a></li><li class="inherited"><a href="#ERC777.operatorSend(address,address,uint256,bytes,bytes)"><code class="function-signature">operatorSend(address sender, address recipient, uint256 amount, bytes data, bytes operatorData)</code></a></li><li class="inherited"><a href="#ERC777.allowance(address,address)"><code class="function-signature">allowance(address holder, address spender)</code></a></li><li class="inherited"><a href="#ERC777.approve(address,uint256)"><code class="function-signature">approve(address spender, uint256 value)</code></a></li><li class="inherited"><a href="#ERC777.transferFrom(address,address,uint256)"><code class="function-signature">transferFrom(address holder, address recipient, uint256 amount)</code></a></li><li class="inherited"><a href="#ERC777._mint(address,address,uint256,bytes,bytes,bool)"><code class="function-signature">_mint(address operator, address account, uint256 amount, bytes userData, bytes operatorData, bool requireReceptionAck)</code></a></li><li class="inherited"><a href="#ERC777._burn(address,address,uint256,bytes,bytes,bool)"><code class="function-signature">_burn(address operator, address from, uint256 amount, bytes data, bytes operatorData, bool callHooks)</code></a></li><li class="inherited"><a href="#ERC777._approve(address,address,uint256)"><code class="function-signature">_approve(address holder, address spender, uint256 value)</code></a></li></ul><span class="contract-index-title">Events</span><ul><li class="inherited"><a href="#IERC20.Transfer(address,address,uint256)"><code class="function-signature">Transfer(address from, address to, uint256 value)</code></a></li><li class="inherited"><a href="#IERC20.Approval(address,address,uint256)"><code class="function-signature">Approval(address owner, address spender, uint256 value)</code></a></li><li class="inherited"><a href="#IERC777.Sent(address,address,address,uint256,bytes,bytes)"><code class="function-signature">Sent(address operator, address from, address to, uint256 amount, bytes data, bytes operatorData)</code></a></li><li class="inherited"><a href="#IERC777.Minted(address,address,uint256,bytes,bytes)"><code class="function-signature">Minted(address operator, address to, uint256 amount, bytes data, bytes operatorData)</code></a></li><li class="inherited"><a href="#IERC777.Burned(address,address,uint256,bytes,bytes)"><code class="function-signature">Burned(address operator, address from, uint256 amount, bytes data, bytes operatorData)</code></a></li><li class="inherited"><a href="#IERC777.AuthorizedOperator(address,address)"><code class="function-signature">AuthorizedOperator(address operator, address tokenHolder)</code></a></li><li class="inherited"><a href="#IERC777.RevokedOperator(address,address)"><code class="function-signature">RevokedOperator(address operator, address tokenHolder)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="OICash.initialize(contract IAugur,contract IUniverse,address)"></a><code class="function-signature">initialize(contract IAugur _augur, contract IUniverse _universe, address _erc1820RegistryAddress)</code><span class="function-visibility">external</span></h4>





<h4><a class="anchor" aria-hidden="true" id="OICash.deposit(uint256)"></a><code class="function-signature">deposit(uint256 _amount) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">external</span></h4>





<h4><a class="anchor" aria-hidden="true" id="OICash.withdraw(uint256)"></a><code class="function-signature">withdraw(uint256 _amount) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">external</span></h4>





<h4><a class="anchor" aria-hidden="true" id="OICash.payFees(uint256)"></a><code class="function-signature">payFees(uint256 _feeAmount) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">external</span></h4>





<h4><a class="anchor" aria-hidden="true" id="OICash.buyCompleteSets(contract IMarket,uint256)"></a><code class="function-signature">buyCompleteSets(contract IMarket _market, uint256 _amount) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">external</span></h4>





<h4><a class="anchor" aria-hidden="true" id="OICash.onTokenTransfer(address,address,uint256)"></a><code class="function-signature">onTokenTransfer(address _from, address _to, uint256 _value)</code><span class="function-visibility">internal</span></h4>





<h4><a class="anchor" aria-hidden="true" id="OICash.onMint(address,uint256)"></a><code class="function-signature">onMint(address _target, uint256 _amount)</code><span class="function-visibility">internal</span></h4>





<h4><a class="anchor" aria-hidden="true" id="OICash.onBurn(address,uint256)"></a><code class="function-signature">onBurn(address _target, uint256 _amount)</code><span class="function-visibility">internal</span></h4>







### `StandardToken`



<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#StandardToken.initialize1820InterfaceImplementations()"><code class="function-signature">initialize1820InterfaceImplementations()</code></a></li><li><a href="#StandardToken.noHooksTransfer(address,uint256)"><code class="function-signature">noHooksTransfer(address _recipient, uint256 _amount)</code></a></li><li><a href="#StandardToken.internalNoHooksTransfer(address,address,uint256)"><code class="function-signature">internalNoHooksTransfer(address _from, address _recipient, uint256 _amount)</code></a></li><li><a href="#StandardToken.increaseApproval(address,uint256)"><code class="function-signature">increaseApproval(address _spender, uint256 _addedValue)</code></a></li><li><a href="#StandardToken.decreaseApproval(address,uint256)"><code class="function-signature">decreaseApproval(address _spender, uint256 _subtractedValue)</code></a></li><li class="inherited"><a href="trading#ERC777.granularity()"><code class="function-signature">granularity()</code></a></li><li class="inherited"><a href="trading#ERC777.totalSupply()"><code class="function-signature">totalSupply()</code></a></li><li class="inherited"><a href="trading#ERC777.balanceOf(address)"><code class="function-signature">balanceOf(address tokenHolder)</code></a></li><li class="inherited"><a href="trading#ERC777.send(address,uint256,bytes)"><code class="function-signature">send(address recipient, uint256 amount, bytes data)</code></a></li><li class="inherited"><a href="trading#ERC777.transfer(address,uint256)"><code class="function-signature">transfer(address recipient, uint256 amount)</code></a></li><li class="inherited"><a href="trading#ERC777._transfer(address,address,uint256,bool)"><code class="function-signature">_transfer(address from, address recipient, uint256 amount, bool callHooks)</code></a></li><li class="inherited"><a href="trading#ERC777.isOperatorFor(address,address)"><code class="function-signature">isOperatorFor(address operator, address tokenHolder)</code></a></li><li class="inherited"><a href="trading#ERC777.authorizeOperator(address)"><code class="function-signature">authorizeOperator(address operator)</code></a></li><li class="inherited"><a href="trading#ERC777.revokeOperator(address)"><code class="function-signature">revokeOperator(address operator)</code></a></li><li class="inherited"><a href="trading#ERC777.defaultOperators()"><code class="function-signature">defaultOperators()</code></a></li><li class="inherited"><a href="trading#ERC777.operatorSend(address,address,uint256,bytes,bytes)"><code class="function-signature">operatorSend(address sender, address recipient, uint256 amount, bytes data, bytes operatorData)</code></a></li><li class="inherited"><a href="trading#ERC777.allowance(address,address)"><code class="function-signature">allowance(address holder, address spender)</code></a></li><li class="inherited"><a href="trading#ERC777.approve(address,uint256)"><code class="function-signature">approve(address spender, uint256 value)</code></a></li><li class="inherited"><a href="trading#ERC777.transferFrom(address,address,uint256)"><code class="function-signature">transferFrom(address holder, address recipient, uint256 amount)</code></a></li><li class="inherited"><a href="trading#ERC777._mint(address,address,uint256,bytes,bytes,bool)"><code class="function-signature">_mint(address operator, address account, uint256 amount, bytes userData, bytes operatorData, bool requireReceptionAck)</code></a></li><li class="inherited"><a href="trading#ERC777._burn(address,address,uint256,bytes,bytes,bool)"><code class="function-signature">_burn(address operator, address from, uint256 amount, bytes data, bytes operatorData, bool callHooks)</code></a></li><li class="inherited"><a href="trading#ERC777._approve(address,address,uint256)"><code class="function-signature">_approve(address holder, address spender, uint256 value)</code></a></li><li class="inherited"><a href="trading#ERC777.onTokenTransfer(address,address,uint256)"><code class="function-signature">onTokenTransfer(address _from, address _to, uint256 _value)</code></a></li></ul><span class="contract-index-title">Events</span><ul><li class="inherited"><a href="#IERC20.Transfer(address,address,uint256)"><code class="function-signature">Transfer(address from, address to, uint256 value)</code></a></li><li class="inherited"><a href="#IERC20.Approval(address,address,uint256)"><code class="function-signature">Approval(address owner, address spender, uint256 value)</code></a></li><li class="inherited"><a href="trading#IERC777.Sent(address,address,address,uint256,bytes,bytes)"><code class="function-signature">Sent(address operator, address from, address to, uint256 amount, bytes data, bytes operatorData)</code></a></li><li class="inherited"><a href="trading#IERC777.Minted(address,address,uint256,bytes,bytes)"><code class="function-signature">Minted(address operator, address to, uint256 amount, bytes data, bytes operatorData)</code></a></li><li class="inherited"><a href="trading#IERC777.Burned(address,address,uint256,bytes,bytes)"><code class="function-signature">Burned(address operator, address from, uint256 amount, bytes data, bytes operatorData)</code></a></li><li class="inherited"><a href="trading#IERC777.AuthorizedOperator(address,address)"><code class="function-signature">AuthorizedOperator(address operator, address tokenHolder)</code></a></li><li class="inherited"><a href="trading#IERC777.RevokedOperator(address,address)"><code class="function-signature">RevokedOperator(address operator, address tokenHolder)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="StandardToken.initialize1820InterfaceImplementations()"></a><code class="function-signature">initialize1820InterfaceImplementations() <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">internal</span></h4>





<h4><a class="anchor" aria-hidden="true" id="StandardToken.noHooksTransfer(address,uint256)"></a><code class="function-signature">noHooksTransfer(address _recipient, uint256 _amount) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">external</span></h4>





<h4><a class="anchor" aria-hidden="true" id="StandardToken.internalNoHooksTransfer(address,address,uint256)"></a><code class="function-signature">internalNoHooksTransfer(address _from, address _recipient, uint256 _amount) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">internal</span></h4>





<h4><a class="anchor" aria-hidden="true" id="StandardToken.increaseApproval(address,uint256)"></a><code class="function-signature">increaseApproval(address _spender, uint256 _addedValue) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="StandardToken.decreaseApproval(address,uint256)"></a><code class="function-signature">decreaseApproval(address _spender, uint256 _subtractedValue) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>







### `VariableSupplyToken`



<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#VariableSupplyToken.mint(address,uint256)"><code class="function-signature">mint(address _target, uint256 _amount)</code></a></li><li><a href="#VariableSupplyToken.burn(address,uint256)"><code class="function-signature">burn(address _target, uint256 _amount)</code></a></li><li><a href="#VariableSupplyToken.onMint(address,uint256)"><code class="function-signature">onMint(address, uint256)</code></a></li><li><a href="#VariableSupplyToken.onBurn(address,uint256)"><code class="function-signature">onBurn(address, uint256)</code></a></li><li class="inherited"><a href="trading#StandardToken.initialize1820InterfaceImplementations()"><code class="function-signature">initialize1820InterfaceImplementations()</code></a></li><li class="inherited"><a href="trading#StandardToken.noHooksTransfer(address,uint256)"><code class="function-signature">noHooksTransfer(address _recipient, uint256 _amount)</code></a></li><li class="inherited"><a href="trading#StandardToken.internalNoHooksTransfer(address,address,uint256)"><code class="function-signature">internalNoHooksTransfer(address _from, address _recipient, uint256 _amount)</code></a></li><li class="inherited"><a href="trading#StandardToken.increaseApproval(address,uint256)"><code class="function-signature">increaseApproval(address _spender, uint256 _addedValue)</code></a></li><li class="inherited"><a href="trading#StandardToken.decreaseApproval(address,uint256)"><code class="function-signature">decreaseApproval(address _spender, uint256 _subtractedValue)</code></a></li><li class="inherited"><a href="trading#ERC777.granularity()"><code class="function-signature">granularity()</code></a></li><li class="inherited"><a href="trading#ERC777.totalSupply()"><code class="function-signature">totalSupply()</code></a></li><li class="inherited"><a href="trading#ERC777.balanceOf(address)"><code class="function-signature">balanceOf(address tokenHolder)</code></a></li><li class="inherited"><a href="trading#ERC777.send(address,uint256,bytes)"><code class="function-signature">send(address recipient, uint256 amount, bytes data)</code></a></li><li class="inherited"><a href="trading#ERC777.transfer(address,uint256)"><code class="function-signature">transfer(address recipient, uint256 amount)</code></a></li><li class="inherited"><a href="trading#ERC777._transfer(address,address,uint256,bool)"><code class="function-signature">_transfer(address from, address recipient, uint256 amount, bool callHooks)</code></a></li><li class="inherited"><a href="trading#ERC777.isOperatorFor(address,address)"><code class="function-signature">isOperatorFor(address operator, address tokenHolder)</code></a></li><li class="inherited"><a href="trading#ERC777.authorizeOperator(address)"><code class="function-signature">authorizeOperator(address operator)</code></a></li><li class="inherited"><a href="trading#ERC777.revokeOperator(address)"><code class="function-signature">revokeOperator(address operator)</code></a></li><li class="inherited"><a href="trading#ERC777.defaultOperators()"><code class="function-signature">defaultOperators()</code></a></li><li class="inherited"><a href="trading#ERC777.operatorSend(address,address,uint256,bytes,bytes)"><code class="function-signature">operatorSend(address sender, address recipient, uint256 amount, bytes data, bytes operatorData)</code></a></li><li class="inherited"><a href="trading#ERC777.allowance(address,address)"><code class="function-signature">allowance(address holder, address spender)</code></a></li><li class="inherited"><a href="trading#ERC777.approve(address,uint256)"><code class="function-signature">approve(address spender, uint256 value)</code></a></li><li class="inherited"><a href="trading#ERC777.transferFrom(address,address,uint256)"><code class="function-signature">transferFrom(address holder, address recipient, uint256 amount)</code></a></li><li class="inherited"><a href="trading#ERC777._mint(address,address,uint256,bytes,bytes,bool)"><code class="function-signature">_mint(address operator, address account, uint256 amount, bytes userData, bytes operatorData, bool requireReceptionAck)</code></a></li><li class="inherited"><a href="trading#ERC777._burn(address,address,uint256,bytes,bytes,bool)"><code class="function-signature">_burn(address operator, address from, uint256 amount, bytes data, bytes operatorData, bool callHooks)</code></a></li><li class="inherited"><a href="trading#ERC777._approve(address,address,uint256)"><code class="function-signature">_approve(address holder, address spender, uint256 value)</code></a></li><li class="inherited"><a href="trading#ERC777.onTokenTransfer(address,address,uint256)"><code class="function-signature">onTokenTransfer(address _from, address _to, uint256 _value)</code></a></li></ul><span class="contract-index-title">Events</span><ul><li class="inherited"><a href="#IERC20.Transfer(address,address,uint256)"><code class="function-signature">Transfer(address from, address to, uint256 value)</code></a></li><li class="inherited"><a href="#IERC20.Approval(address,address,uint256)"><code class="function-signature">Approval(address owner, address spender, uint256 value)</code></a></li><li class="inherited"><a href="trading#IERC777.Sent(address,address,address,uint256,bytes,bytes)"><code class="function-signature">Sent(address operator, address from, address to, uint256 amount, bytes data, bytes operatorData)</code></a></li><li class="inherited"><a href="trading#IERC777.Minted(address,address,uint256,bytes,bytes)"><code class="function-signature">Minted(address operator, address to, uint256 amount, bytes data, bytes operatorData)</code></a></li><li class="inherited"><a href="trading#IERC777.Burned(address,address,uint256,bytes,bytes)"><code class="function-signature">Burned(address operator, address from, uint256 amount, bytes data, bytes operatorData)</code></a></li><li class="inherited"><a href="trading#IERC777.AuthorizedOperator(address,address)"><code class="function-signature">AuthorizedOperator(address operator, address tokenHolder)</code></a></li><li class="inherited"><a href="trading#IERC777.RevokedOperator(address,address)"><code class="function-signature">RevokedOperator(address operator, address tokenHolder)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="VariableSupplyToken.mint(address,uint256)"></a><code class="function-signature">mint(address _target, uint256 _amount) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">internal</span></h4>





<h4><a class="anchor" aria-hidden="true" id="VariableSupplyToken.burn(address,uint256)"></a><code class="function-signature">burn(address _target, uint256 _amount) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">internal</span></h4>





<h4><a class="anchor" aria-hidden="true" id="VariableSupplyToken.onMint(address,uint256)"></a><code class="function-signature">onMint(address, uint256)</code><span class="function-visibility">internal</span></h4>





<h4><a class="anchor" aria-hidden="true" id="VariableSupplyToken.onBurn(address,uint256)"></a><code class="function-signature">onBurn(address, uint256)</code><span class="function-visibility">internal</span></h4>







### `Orders`



<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#Orders.initialize(contract IAugur)"><code class="function-signature">initialize(contract IAugur _augur)</code></a></li><li><a href="#Orders.getMarket(bytes32)"><code class="function-signature">getMarket(bytes32 _orderId)</code></a></li><li><a href="#Orders.getOrderType(bytes32)"><code class="function-signature">getOrderType(bytes32 _orderId)</code></a></li><li><a href="#Orders.getOutcome(bytes32)"><code class="function-signature">getOutcome(bytes32 _orderId)</code></a></li><li><a href="#Orders.getKYCToken(bytes32)"><code class="function-signature">getKYCToken(bytes32 _orderId)</code></a></li><li><a href="#Orders.getAmount(bytes32)"><code class="function-signature">getAmount(bytes32 _orderId)</code></a></li><li><a href="#Orders.getPrice(bytes32)"><code class="function-signature">getPrice(bytes32 _orderId)</code></a></li><li><a href="#Orders.getOrderCreator(bytes32)"><code class="function-signature">getOrderCreator(bytes32 _orderId)</code></a></li><li><a href="#Orders.getOrderSharesEscrowed(bytes32)"><code class="function-signature">getOrderSharesEscrowed(bytes32 _orderId)</code></a></li><li><a href="#Orders.getOrderMoneyEscrowed(bytes32)"><code class="function-signature">getOrderMoneyEscrowed(bytes32 _orderId)</code></a></li><li><a href="#Orders.getOrderDataForLogs(bytes32)"><code class="function-signature">getOrderDataForLogs(bytes32 _orderId)</code></a></li><li><a href="#Orders.getTotalEscrowed(contract IMarket)"><code class="function-signature">getTotalEscrowed(contract IMarket _market)</code></a></li><li><a href="#Orders.getLastOutcomePrice(contract IMarket,uint256)"><code class="function-signature">getLastOutcomePrice(contract IMarket _market, uint256 _outcome)</code></a></li><li><a href="#Orders.getBetterOrderId(bytes32)"><code class="function-signature">getBetterOrderId(bytes32 _orderId)</code></a></li><li><a href="#Orders.getWorseOrderId(bytes32)"><code class="function-signature">getWorseOrderId(bytes32 _orderId)</code></a></li><li><a href="#Orders.getBestOrderId(enum Order.Types,contract IMarket,uint256,contract IERC20)"><code class="function-signature">getBestOrderId(enum Order.Types _type, contract IMarket _market, uint256 _outcome, contract IERC20 _kycToken)</code></a></li><li><a href="#Orders.getWorstOrderId(enum Order.Types,contract IMarket,uint256,contract IERC20)"><code class="function-signature">getWorstOrderId(enum Order.Types _type, contract IMarket _market, uint256 _outcome, contract IERC20 _kycToken)</code></a></li><li><a href="#Orders.getOrderId(enum Order.Types,contract IMarket,uint256,uint256,address,uint256,uint256,uint256,uint256,contract IERC20)"><code class="function-signature">getOrderId(enum Order.Types _type, contract IMarket _market, uint256 _amount, uint256 _price, address _sender, uint256 _blockNumber, uint256 _outcome, uint256 _moneyEscrowed, uint256 _sharesEscrowed, contract IERC20 _kycToken)</code></a></li><li><a href="#Orders.isBetterPrice(enum Order.Types,uint256,bytes32)"><code class="function-signature">isBetterPrice(enum Order.Types _type, uint256 _price, bytes32 _orderId)</code></a></li><li><a href="#Orders.isWorsePrice(enum Order.Types,uint256,bytes32)"><code class="function-signature">isWorsePrice(enum Order.Types _type, uint256 _price, bytes32 _orderId)</code></a></li><li><a href="#Orders.assertIsNotBetterPrice(enum Order.Types,uint256,bytes32)"><code class="function-signature">assertIsNotBetterPrice(enum Order.Types _type, uint256 _price, bytes32 _betterOrderId)</code></a></li><li><a href="#Orders.assertIsNotWorsePrice(enum Order.Types,uint256,bytes32)"><code class="function-signature">assertIsNotWorsePrice(enum Order.Types _type, uint256 _price, bytes32 _worseOrderId)</code></a></li><li><a href="#Orders.saveOrder(enum Order.Types,contract IMarket,uint256,uint256,address,uint256,uint256,uint256,bytes32,bytes32,bytes32,contract IERC20)"><code class="function-signature">saveOrder(enum Order.Types _type, contract IMarket _market, uint256 _amount, uint256 _price, address _sender, uint256 _outcome, uint256 _moneyEscrowed, uint256 _sharesEscrowed, bytes32 _betterOrderId, bytes32 _worseOrderId, bytes32 _tradeGroupId, contract IERC20 _kycToken)</code></a></li><li><a href="#Orders.removeOrder(bytes32)"><code class="function-signature">removeOrder(bytes32 _orderId)</code></a></li><li><a href="#Orders.recordFillOrder(bytes32,uint256,uint256,uint256)"><code class="function-signature">recordFillOrder(bytes32 _orderId, uint256 _sharesFilled, uint256 _tokensFilled, uint256 _fill)</code></a></li><li><a href="#Orders.setPrice(contract IMarket,uint256,uint256)"><code class="function-signature">setPrice(contract IMarket _market, uint256 _outcome, uint256 _price)</code></a></li><li><a href="#Orders.ascendOrderList(enum Order.Types,uint256,bytes32)"><code class="function-signature">ascendOrderList(enum Order.Types _type, uint256 _price, bytes32 _lowestOrderId)</code></a></li><li><a href="#Orders.descendOrderList(enum Order.Types,uint256,bytes32)"><code class="function-signature">descendOrderList(enum Order.Types _type, uint256 _price, bytes32 _highestOrderId)</code></a></li><li><a href="#Orders.findBoundingOrders(enum Order.Types,uint256,bytes32,bytes32,bytes32,bytes32)"><code class="function-signature">findBoundingOrders(enum Order.Types _type, uint256 _price, bytes32 _bestOrderId, bytes32 _worstOrderId, bytes32 _betterOrderId, bytes32 _worseOrderId)</code></a></li><li class="inherited"><a href="#Initializable.endInitialization()"><code class="function-signature">endInitialization()</code></a></li><li class="inherited"><a href="#Initializable.getInitialized()"><code class="function-signature">getInitialized()</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="Orders.initialize(contract IAugur)"></a><code class="function-signature">initialize(contract IAugur _augur)</code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="Orders.getMarket(bytes32)"></a><code class="function-signature">getMarket(bytes32 _orderId) <span class="return-arrow">→</span> <span class="return-type">contract IMarket</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="Orders.getOrderType(bytes32)"></a><code class="function-signature">getOrderType(bytes32 _orderId) <span class="return-arrow">→</span> <span class="return-type">enum Order.Types</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="Orders.getOutcome(bytes32)"></a><code class="function-signature">getOutcome(bytes32 _orderId) <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="Orders.getKYCToken(bytes32)"></a><code class="function-signature">getKYCToken(bytes32 _orderId) <span class="return-arrow">→</span> <span class="return-type">contract IERC20</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="Orders.getAmount(bytes32)"></a><code class="function-signature">getAmount(bytes32 _orderId) <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="Orders.getPrice(bytes32)"></a><code class="function-signature">getPrice(bytes32 _orderId) <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="Orders.getOrderCreator(bytes32)"></a><code class="function-signature">getOrderCreator(bytes32 _orderId) <span class="return-arrow">→</span> <span class="return-type">address</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="Orders.getOrderSharesEscrowed(bytes32)"></a><code class="function-signature">getOrderSharesEscrowed(bytes32 _orderId) <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="Orders.getOrderMoneyEscrowed(bytes32)"></a><code class="function-signature">getOrderMoneyEscrowed(bytes32 _orderId) <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="Orders.getOrderDataForLogs(bytes32)"></a><code class="function-signature">getOrderDataForLogs(bytes32 _orderId) <span class="return-arrow">→</span> <span class="return-type">enum Order.Types,address[],uint256[]</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="Orders.getTotalEscrowed(contract IMarket)"></a><code class="function-signature">getTotalEscrowed(contract IMarket _market) <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="Orders.getLastOutcomePrice(contract IMarket,uint256)"></a><code class="function-signature">getLastOutcomePrice(contract IMarket _market, uint256 _outcome) <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="Orders.getBetterOrderId(bytes32)"></a><code class="function-signature">getBetterOrderId(bytes32 _orderId) <span class="return-arrow">→</span> <span class="return-type">bytes32</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="Orders.getWorseOrderId(bytes32)"></a><code class="function-signature">getWorseOrderId(bytes32 _orderId) <span class="return-arrow">→</span> <span class="return-type">bytes32</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="Orders.getBestOrderId(enum Order.Types,contract IMarket,uint256,contract IERC20)"></a><code class="function-signature">getBestOrderId(enum Order.Types _type, contract IMarket _market, uint256 _outcome, contract IERC20 _kycToken) <span class="return-arrow">→</span> <span class="return-type">bytes32</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="Orders.getWorstOrderId(enum Order.Types,contract IMarket,uint256,contract IERC20)"></a><code class="function-signature">getWorstOrderId(enum Order.Types _type, contract IMarket _market, uint256 _outcome, contract IERC20 _kycToken) <span class="return-arrow">→</span> <span class="return-type">bytes32</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="Orders.getOrderId(enum Order.Types,contract IMarket,uint256,uint256,address,uint256,uint256,uint256,uint256,contract IERC20)"></a><code class="function-signature">getOrderId(enum Order.Types _type, contract IMarket _market, uint256 _amount, uint256 _price, address _sender, uint256 _blockNumber, uint256 _outcome, uint256 _moneyEscrowed, uint256 _sharesEscrowed, contract IERC20 _kycToken) <span class="return-arrow">→</span> <span class="return-type">bytes32</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="Orders.isBetterPrice(enum Order.Types,uint256,bytes32)"></a><code class="function-signature">isBetterPrice(enum Order.Types _type, uint256 _price, bytes32 _orderId) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="Orders.isWorsePrice(enum Order.Types,uint256,bytes32)"></a><code class="function-signature">isWorsePrice(enum Order.Types _type, uint256 _price, bytes32 _orderId) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="Orders.assertIsNotBetterPrice(enum Order.Types,uint256,bytes32)"></a><code class="function-signature">assertIsNotBetterPrice(enum Order.Types _type, uint256 _price, bytes32 _betterOrderId) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="Orders.assertIsNotWorsePrice(enum Order.Types,uint256,bytes32)"></a><code class="function-signature">assertIsNotWorsePrice(enum Order.Types _type, uint256 _price, bytes32 _worseOrderId) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="Orders.saveOrder(enum Order.Types,contract IMarket,uint256,uint256,address,uint256,uint256,uint256,bytes32,bytes32,bytes32,contract IERC20)"></a><code class="function-signature">saveOrder(enum Order.Types _type, contract IMarket _market, uint256 _amount, uint256 _price, address _sender, uint256 _outcome, uint256 _moneyEscrowed, uint256 _sharesEscrowed, bytes32 _betterOrderId, bytes32 _worseOrderId, bytes32 _tradeGroupId, contract IERC20 _kycToken) <span class="return-arrow">→</span> <span class="return-type">bytes32</span></code><span class="function-visibility">external</span></h4>





<h4><a class="anchor" aria-hidden="true" id="Orders.removeOrder(bytes32)"></a><code class="function-signature">removeOrder(bytes32 _orderId) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">external</span></h4>





<h4><a class="anchor" aria-hidden="true" id="Orders.recordFillOrder(bytes32,uint256,uint256,uint256)"></a><code class="function-signature">recordFillOrder(bytes32 _orderId, uint256 _sharesFilled, uint256 _tokensFilled, uint256 _fill) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">external</span></h4>





<h4><a class="anchor" aria-hidden="true" id="Orders.setPrice(contract IMarket,uint256,uint256)"></a><code class="function-signature">setPrice(contract IMarket _market, uint256 _outcome, uint256 _price) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">external</span></h4>





<h4><a class="anchor" aria-hidden="true" id="Orders.ascendOrderList(enum Order.Types,uint256,bytes32)"></a><code class="function-signature">ascendOrderList(enum Order.Types _type, uint256 _price, bytes32 _lowestOrderId) <span class="return-arrow">→</span> <span class="return-type">bytes32,bytes32</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="Orders.descendOrderList(enum Order.Types,uint256,bytes32)"></a><code class="function-signature">descendOrderList(enum Order.Types _type, uint256 _price, bytes32 _highestOrderId) <span class="return-arrow">→</span> <span class="return-type">bytes32,bytes32</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="Orders.findBoundingOrders(enum Order.Types,uint256,bytes32,bytes32,bytes32,bytes32)"></a><code class="function-signature">findBoundingOrders(enum Order.Types _type, uint256 _price, bytes32 _bestOrderId, bytes32 _worstOrderId, bytes32 _betterOrderId, bytes32 _worseOrderId) <span class="return-arrow">→</span> <span class="return-type">bytes32,bytes32</span></code><span class="function-visibility">public</span></h4>







### `SafeMathInt256`



<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#SafeMathInt256.mul(int256,int256)"><code class="function-signature">mul(int256 a, int256 b)</code></a></li><li><a href="#SafeMathInt256.div(int256,int256)"><code class="function-signature">div(int256 a, int256 b)</code></a></li><li><a href="#SafeMathInt256.sub(int256,int256)"><code class="function-signature">sub(int256 a, int256 b)</code></a></li><li><a href="#SafeMathInt256.add(int256,int256)"><code class="function-signature">add(int256 a, int256 b)</code></a></li><li><a href="#SafeMathInt256.min(int256,int256)"><code class="function-signature">min(int256 a, int256 b)</code></a></li><li><a href="#SafeMathInt256.max(int256,int256)"><code class="function-signature">max(int256 a, int256 b)</code></a></li><li><a href="#SafeMathInt256.abs(int256)"><code class="function-signature">abs(int256 a)</code></a></li><li><a href="#SafeMathInt256.getInt256Min()"><code class="function-signature">getInt256Min()</code></a></li><li><a href="#SafeMathInt256.getInt256Max()"><code class="function-signature">getInt256Max()</code></a></li><li><a href="#SafeMathInt256.fxpMul(int256,int256,int256)"><code class="function-signature">fxpMul(int256 a, int256 b, int256 base)</code></a></li><li><a href="#SafeMathInt256.fxpDiv(int256,int256,int256)"><code class="function-signature">fxpDiv(int256 a, int256 b, int256 base)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="SafeMathInt256.mul(int256,int256)"></a><code class="function-signature">mul(int256 a, int256 b) <span class="return-arrow">→</span> <span class="return-type">int256</span></code><span class="function-visibility">internal</span></h4>





<h4><a class="anchor" aria-hidden="true" id="SafeMathInt256.div(int256,int256)"></a><code class="function-signature">div(int256 a, int256 b) <span class="return-arrow">→</span> <span class="return-type">int256</span></code><span class="function-visibility">internal</span></h4>





<h4><a class="anchor" aria-hidden="true" id="SafeMathInt256.sub(int256,int256)"></a><code class="function-signature">sub(int256 a, int256 b) <span class="return-arrow">→</span> <span class="return-type">int256</span></code><span class="function-visibility">internal</span></h4>





<h4><a class="anchor" aria-hidden="true" id="SafeMathInt256.add(int256,int256)"></a><code class="function-signature">add(int256 a, int256 b) <span class="return-arrow">→</span> <span class="return-type">int256</span></code><span class="function-visibility">internal</span></h4>





<h4><a class="anchor" aria-hidden="true" id="SafeMathInt256.min(int256,int256)"></a><code class="function-signature">min(int256 a, int256 b) <span class="return-arrow">→</span> <span class="return-type">int256</span></code><span class="function-visibility">internal</span></h4>





<h4><a class="anchor" aria-hidden="true" id="SafeMathInt256.max(int256,int256)"></a><code class="function-signature">max(int256 a, int256 b) <span class="return-arrow">→</span> <span class="return-type">int256</span></code><span class="function-visibility">internal</span></h4>





<h4><a class="anchor" aria-hidden="true" id="SafeMathInt256.abs(int256)"></a><code class="function-signature">abs(int256 a) <span class="return-arrow">→</span> <span class="return-type">int256</span></code><span class="function-visibility">internal</span></h4>





<h4><a class="anchor" aria-hidden="true" id="SafeMathInt256.getInt256Min()"></a><code class="function-signature">getInt256Min() <span class="return-arrow">→</span> <span class="return-type">int256</span></code><span class="function-visibility">internal</span></h4>





<h4><a class="anchor" aria-hidden="true" id="SafeMathInt256.getInt256Max()"></a><code class="function-signature">getInt256Max() <span class="return-arrow">→</span> <span class="return-type">int256</span></code><span class="function-visibility">internal</span></h4>





<h4><a class="anchor" aria-hidden="true" id="SafeMathInt256.fxpMul(int256,int256,int256)"></a><code class="function-signature">fxpMul(int256 a, int256 b, int256 base) <span class="return-arrow">→</span> <span class="return-type">int256</span></code><span class="function-visibility">internal</span></h4>





<h4><a class="anchor" aria-hidden="true" id="SafeMathInt256.fxpDiv(int256,int256,int256)"></a><code class="function-signature">fxpDiv(int256 a, int256 b, int256 base) <span class="return-arrow">→</span> <span class="return-type">int256</span></code><span class="function-visibility">internal</span></h4>







### `ProfitLoss`



<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#ProfitLoss.initialize(contract IAugur)"><code class="function-signature">initialize(contract IAugur _augur)</code></a></li><li><a href="#ProfitLoss.recordFrozenFundChange(contract IMarket,address,uint256,int256)"><code class="function-signature">recordFrozenFundChange(contract IMarket _market, address _account, uint256 _outcome, int256 _frozenFundDelta)</code></a></li><li><a href="#ProfitLoss.recordExternalTransfer(address,address,uint256)"><code class="function-signature">recordExternalTransfer(address _source, address _destination, uint256 _value)</code></a></li><li><a href="#ProfitLoss.adjustTraderProfitForFees(contract IMarket,address,uint256,uint256)"><code class="function-signature">adjustTraderProfitForFees(contract IMarket _market, address _trader, uint256 _outcome, uint256 _fees)</code></a></li><li><a href="#ProfitLoss.recordTrade(contract IMarket,address,address,uint256,int256,int256,uint256,uint256,uint256,uint256)"><code class="function-signature">recordTrade(contract IMarket _market, address _longAddress, address _shortAddress, uint256 _outcome, int256 _amount, int256 _price, uint256 _numLongTokens, uint256 _numShortTokens, uint256 _numLongShares, uint256 _numShortShares)</code></a></li><li><a href="#ProfitLoss.adjustForTrader(contract IMarket,address,uint256,int256,int256,int256)"><code class="function-signature">adjustForTrader(contract IMarket _market, address _address, uint256 _outcome, int256 _amount, int256 _price, int256 _frozenTokenDelta)</code></a></li><li><a href="#ProfitLoss.recordClaim(contract IMarket,address,uint256[])"><code class="function-signature">recordClaim(contract IMarket _market, address _account, uint256[] _outcomeFees)</code></a></li><li><a href="#ProfitLoss.getNetPosition(address,address,uint256)"><code class="function-signature">getNetPosition(address _market, address _account, uint256 _outcome)</code></a></li><li><a href="#ProfitLoss.getAvgPrice(address,address,uint256)"><code class="function-signature">getAvgPrice(address _market, address _account, uint256 _outcome)</code></a></li><li><a href="#ProfitLoss.getRealizedProfit(address,address,uint256)"><code class="function-signature">getRealizedProfit(address _market, address _account, uint256 _outcome)</code></a></li><li><a href="#ProfitLoss.getFrozenFunds(address,address,uint256)"><code class="function-signature">getFrozenFunds(address _market, address _account, uint256 _outcome)</code></a></li><li><a href="#ProfitLoss.getRealizedCost(address,address,uint256)"><code class="function-signature">getRealizedCost(address _market, address _account, uint256 _outcome)</code></a></li><li class="inherited"><a href="#Initializable.endInitialization()"><code class="function-signature">endInitialization()</code></a></li><li class="inherited"><a href="#Initializable.getInitialized()"><code class="function-signature">getInitialized()</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="ProfitLoss.initialize(contract IAugur)"></a><code class="function-signature">initialize(contract IAugur _augur)</code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="ProfitLoss.recordFrozenFundChange(contract IMarket,address,uint256,int256)"></a><code class="function-signature">recordFrozenFundChange(contract IMarket _market, address _account, uint256 _outcome, int256 _frozenFundDelta) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="ProfitLoss.recordExternalTransfer(address,address,uint256)"></a><code class="function-signature">recordExternalTransfer(address _source, address _destination, uint256 _value) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="ProfitLoss.adjustTraderProfitForFees(contract IMarket,address,uint256,uint256)"></a><code class="function-signature">adjustTraderProfitForFees(contract IMarket _market, address _trader, uint256 _outcome, uint256 _fees) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="ProfitLoss.recordTrade(contract IMarket,address,address,uint256,int256,int256,uint256,uint256,uint256,uint256)"></a><code class="function-signature">recordTrade(contract IMarket _market, address _longAddress, address _shortAddress, uint256 _outcome, int256 _amount, int256 _price, uint256 _numLongTokens, uint256 _numShortTokens, uint256 _numLongShares, uint256 _numShortShares) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="ProfitLoss.adjustForTrader(contract IMarket,address,uint256,int256,int256,int256)"></a><code class="function-signature">adjustForTrader(contract IMarket _market, address _address, uint256 _outcome, int256 _amount, int256 _price, int256 _frozenTokenDelta) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="ProfitLoss.recordClaim(contract IMarket,address,uint256[])"></a><code class="function-signature">recordClaim(contract IMarket _market, address _account, uint256[] _outcomeFees) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="ProfitLoss.getNetPosition(address,address,uint256)"></a><code class="function-signature">getNetPosition(address _market, address _account, uint256 _outcome) <span class="return-arrow">→</span> <span class="return-type">int256</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="ProfitLoss.getAvgPrice(address,address,uint256)"></a><code class="function-signature">getAvgPrice(address _market, address _account, uint256 _outcome) <span class="return-arrow">→</span> <span class="return-type">int256</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="ProfitLoss.getRealizedProfit(address,address,uint256)"></a><code class="function-signature">getRealizedProfit(address _market, address _account, uint256 _outcome) <span class="return-arrow">→</span> <span class="return-type">int256</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="ProfitLoss.getFrozenFunds(address,address,uint256)"></a><code class="function-signature">getFrozenFunds(address _market, address _account, uint256 _outcome) <span class="return-arrow">→</span> <span class="return-type">int256</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="ProfitLoss.getRealizedCost(address,address,uint256)"></a><code class="function-signature">getRealizedCost(address _market, address _account, uint256 _outcome) <span class="return-arrow">→</span> <span class="return-type">int256</span></code><span class="function-visibility">public</span></h4>







### `ShareToken`



<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#ShareToken.initialize(contract IAugur,contract IMarket,uint256,address)"><code class="function-signature">initialize(contract IAugur _augur, contract IMarket _market, uint256 _outcome, address _erc1820RegistryAddress)</code></a></li><li><a href="#ShareToken.createShares(address,uint256)"><code class="function-signature">createShares(address _owner, uint256 _fxpValue)</code></a></li><li><a href="#ShareToken.destroyShares(address,uint256)"><code class="function-signature">destroyShares(address _owner, uint256 _fxpValue)</code></a></li><li><a href="#ShareToken.trustedOrderTransfer(address,address,uint256)"><code class="function-signature">trustedOrderTransfer(address _source, address _destination, uint256 _attotokens)</code></a></li><li><a href="#ShareToken.trustedFillOrderTransfer(address,address,uint256)"><code class="function-signature">trustedFillOrderTransfer(address _source, address _destination, uint256 _attotokens)</code></a></li><li><a href="#ShareToken.trustedCancelOrderTransfer(address,address,uint256)"><code class="function-signature">trustedCancelOrderTransfer(address _source, address _destination, uint256 _attotokens)</code></a></li><li><a href="#ShareToken.getTypeName()"><code class="function-signature">getTypeName()</code></a></li><li><a href="#ShareToken.getMarket()"><code class="function-signature">getMarket()</code></a></li><li><a href="#ShareToken.getOutcome()"><code class="function-signature">getOutcome()</code></a></li><li><a href="#ShareToken.onTokenTransfer(address,address,uint256)"><code class="function-signature">onTokenTransfer(address _from, address _to, uint256 _value)</code></a></li><li><a href="#ShareToken.onMint(address,uint256)"><code class="function-signature">onMint(address _target, uint256 _amount)</code></a></li><li><a href="#ShareToken.onBurn(address,uint256)"><code class="function-signature">onBurn(address _target, uint256 _amount)</code></a></li><li class="inherited"><a href="trading#VariableSupplyToken.mint(address,uint256)"><code class="function-signature">mint(address _target, uint256 _amount)</code></a></li><li class="inherited"><a href="trading#VariableSupplyToken.burn(address,uint256)"><code class="function-signature">burn(address _target, uint256 _amount)</code></a></li><li class="inherited"><a href="trading#StandardToken.initialize1820InterfaceImplementations()"><code class="function-signature">initialize1820InterfaceImplementations()</code></a></li><li class="inherited"><a href="trading#StandardToken.noHooksTransfer(address,uint256)"><code class="function-signature">noHooksTransfer(address _recipient, uint256 _amount)</code></a></li><li class="inherited"><a href="trading#StandardToken.internalNoHooksTransfer(address,address,uint256)"><code class="function-signature">internalNoHooksTransfer(address _from, address _recipient, uint256 _amount)</code></a></li><li class="inherited"><a href="trading#StandardToken.increaseApproval(address,uint256)"><code class="function-signature">increaseApproval(address _spender, uint256 _addedValue)</code></a></li><li class="inherited"><a href="trading#StandardToken.decreaseApproval(address,uint256)"><code class="function-signature">decreaseApproval(address _spender, uint256 _subtractedValue)</code></a></li><li class="inherited"><a href="trading#ERC777.granularity()"><code class="function-signature">granularity()</code></a></li><li class="inherited"><a href="trading#ERC777.totalSupply()"><code class="function-signature">totalSupply()</code></a></li><li class="inherited"><a href="trading#ERC777.balanceOf(address)"><code class="function-signature">balanceOf(address tokenHolder)</code></a></li><li class="inherited"><a href="trading#ERC777.send(address,uint256,bytes)"><code class="function-signature">send(address recipient, uint256 amount, bytes data)</code></a></li><li class="inherited"><a href="trading#ERC777.transfer(address,uint256)"><code class="function-signature">transfer(address recipient, uint256 amount)</code></a></li><li class="inherited"><a href="trading#ERC777._transfer(address,address,uint256,bool)"><code class="function-signature">_transfer(address from, address recipient, uint256 amount, bool callHooks)</code></a></li><li class="inherited"><a href="trading#ERC777.isOperatorFor(address,address)"><code class="function-signature">isOperatorFor(address operator, address tokenHolder)</code></a></li><li class="inherited"><a href="trading#ERC777.authorizeOperator(address)"><code class="function-signature">authorizeOperator(address operator)</code></a></li><li class="inherited"><a href="trading#ERC777.revokeOperator(address)"><code class="function-signature">revokeOperator(address operator)</code></a></li><li class="inherited"><a href="trading#ERC777.defaultOperators()"><code class="function-signature">defaultOperators()</code></a></li><li class="inherited"><a href="trading#ERC777.operatorSend(address,address,uint256,bytes,bytes)"><code class="function-signature">operatorSend(address sender, address recipient, uint256 amount, bytes data, bytes operatorData)</code></a></li><li class="inherited"><a href="trading#ERC777.allowance(address,address)"><code class="function-signature">allowance(address holder, address spender)</code></a></li><li class="inherited"><a href="trading#ERC777.approve(address,uint256)"><code class="function-signature">approve(address spender, uint256 value)</code></a></li><li class="inherited"><a href="trading#ERC777.transferFrom(address,address,uint256)"><code class="function-signature">transferFrom(address holder, address recipient, uint256 amount)</code></a></li><li class="inherited"><a href="trading#ERC777._mint(address,address,uint256,bytes,bytes,bool)"><code class="function-signature">_mint(address operator, address account, uint256 amount, bytes userData, bytes operatorData, bool requireReceptionAck)</code></a></li><li class="inherited"><a href="trading#ERC777._burn(address,address,uint256,bytes,bytes,bool)"><code class="function-signature">_burn(address operator, address from, uint256 amount, bytes data, bytes operatorData, bool callHooks)</code></a></li><li class="inherited"><a href="trading#ERC777._approve(address,address,uint256)"><code class="function-signature">_approve(address holder, address spender, uint256 value)</code></a></li><li class="inherited"><a href="#Initializable.endInitialization()"><code class="function-signature">endInitialization()</code></a></li><li class="inherited"><a href="#Initializable.getInitialized()"><code class="function-signature">getInitialized()</code></a></li></ul><span class="contract-index-title">Events</span><ul><li class="inherited"><a href="#IERC20.Transfer(address,address,uint256)"><code class="function-signature">Transfer(address from, address to, uint256 value)</code></a></li><li class="inherited"><a href="#IERC20.Approval(address,address,uint256)"><code class="function-signature">Approval(address owner, address spender, uint256 value)</code></a></li><li class="inherited"><a href="trading#IERC777.Sent(address,address,address,uint256,bytes,bytes)"><code class="function-signature">Sent(address operator, address from, address to, uint256 amount, bytes data, bytes operatorData)</code></a></li><li class="inherited"><a href="trading#IERC777.Minted(address,address,uint256,bytes,bytes)"><code class="function-signature">Minted(address operator, address to, uint256 amount, bytes data, bytes operatorData)</code></a></li><li class="inherited"><a href="trading#IERC777.Burned(address,address,uint256,bytes,bytes)"><code class="function-signature">Burned(address operator, address from, uint256 amount, bytes data, bytes operatorData)</code></a></li><li class="inherited"><a href="trading#IERC777.AuthorizedOperator(address,address)"><code class="function-signature">AuthorizedOperator(address operator, address tokenHolder)</code></a></li><li class="inherited"><a href="trading#IERC777.RevokedOperator(address,address)"><code class="function-signature">RevokedOperator(address operator, address tokenHolder)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="ShareToken.initialize(contract IAugur,contract IMarket,uint256,address)"></a><code class="function-signature">initialize(contract IAugur _augur, contract IMarket _market, uint256 _outcome, address _erc1820RegistryAddress)</code><span class="function-visibility">external</span></h4>





<h4><a class="anchor" aria-hidden="true" id="ShareToken.createShares(address,uint256)"></a><code class="function-signature">createShares(address _owner, uint256 _fxpValue) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">external</span></h4>





<h4><a class="anchor" aria-hidden="true" id="ShareToken.destroyShares(address,uint256)"></a><code class="function-signature">destroyShares(address _owner, uint256 _fxpValue) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">external</span></h4>





<h4><a class="anchor" aria-hidden="true" id="ShareToken.trustedOrderTransfer(address,address,uint256)"></a><code class="function-signature">trustedOrderTransfer(address _source, address _destination, uint256 _attotokens) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="ShareToken.trustedFillOrderTransfer(address,address,uint256)"></a><code class="function-signature">trustedFillOrderTransfer(address _source, address _destination, uint256 _attotokens) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="ShareToken.trustedCancelOrderTransfer(address,address,uint256)"></a><code class="function-signature">trustedCancelOrderTransfer(address _source, address _destination, uint256 _attotokens) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="ShareToken.getTypeName()"></a><code class="function-signature">getTypeName() <span class="return-arrow">→</span> <span class="return-type">bytes32</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="ShareToken.getMarket()"></a><code class="function-signature">getMarket() <span class="return-arrow">→</span> <span class="return-type">contract IMarket</span></code><span class="function-visibility">external</span></h4>





<h4><a class="anchor" aria-hidden="true" id="ShareToken.getOutcome()"></a><code class="function-signature">getOutcome() <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">external</span></h4>





<h4><a class="anchor" aria-hidden="true" id="ShareToken.onTokenTransfer(address,address,uint256)"></a><code class="function-signature">onTokenTransfer(address _from, address _to, uint256 _value)</code><span class="function-visibility">internal</span></h4>





<h4><a class="anchor" aria-hidden="true" id="ShareToken.onMint(address,uint256)"></a><code class="function-signature">onMint(address _target, uint256 _amount)</code><span class="function-visibility">internal</span></h4>





<h4><a class="anchor" aria-hidden="true" id="ShareToken.onBurn(address,uint256)"></a><code class="function-signature">onBurn(address _target, uint256 _amount)</code><span class="function-visibility">internal</span></h4>







### `IExchange`



<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#IExchange.getOrderInfo(struct IExchange.Order)"><code class="function-signature">getOrderInfo(struct IExchange.Order order)</code></a></li><li><a href="#IExchange.fillOrder(struct IExchange.Order,uint256,bytes)"><code class="function-signature">fillOrder(struct IExchange.Order order, uint256 takerAssetFillAmount, bytes signature)</code></a></li><li><a href="#IExchange.fillOrderNoThrow(struct IExchange.Order,uint256,bytes)"><code class="function-signature">fillOrderNoThrow(struct IExchange.Order order, uint256 takerAssetFillAmount, bytes signature)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="IExchange.getOrderInfo(struct IExchange.Order)"></a><code class="function-signature">getOrderInfo(struct IExchange.Order order) <span class="return-arrow">→</span> <span class="return-type">struct IExchange.OrderInfo</span></code><span class="function-visibility">public</span></h4>

Gets information about an order: status, hash, and amount filled.
 @param order Order to gather information on.
 @return OrderInfo Information about the order and its state.
         See LibOrder.OrderInfo for a complete description.



<h4><a class="anchor" aria-hidden="true" id="IExchange.fillOrder(struct IExchange.Order,uint256,bytes)"></a><code class="function-signature">fillOrder(struct IExchange.Order order, uint256 takerAssetFillAmount, bytes signature) <span class="return-arrow">→</span> <span class="return-type">struct IExchange.FillResults</span></code><span class="function-visibility">public</span></h4>

Fills the input order.
 @param order Order struct containing order specifications.
 @param takerAssetFillAmount Desired amount of takerAsset to sell.
 @param signature Proof that order has been created by maker.
 @return Amounts filled and fees paid by maker and taker.



<h4><a class="anchor" aria-hidden="true" id="IExchange.fillOrderNoThrow(struct IExchange.Order,uint256,bytes)"></a><code class="function-signature">fillOrderNoThrow(struct IExchange.Order order, uint256 takerAssetFillAmount, bytes signature) <span class="return-arrow">→</span> <span class="return-type">struct IExchange.FillResults</span></code><span class="function-visibility">public</span></h4>

Fills an order with specified parameters and ECDSA signature.
      Returns false if the transaction would otherwise revert.
 @param order Order struct containing order specifications.
 @param takerAssetFillAmount Desired amount of takerAsset to sell.
 @param signature Proof that order has been created by maker.
 @return Amounts filled and fees paid by maker and taker.





### `SimulateTrade`



<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#SimulateTrade.initialize(contract IAugur)"><code class="function-signature">initialize(contract IAugur _augur)</code></a></li><li><a href="#SimulateTrade.create(enum Order.TradeDirections,contract IMarket,uint256,uint256,uint256,address,contract IERC20)"><code class="function-signature">create(enum Order.TradeDirections _direction, contract IMarket _market, uint256 _outcome, uint256 _amount, uint256 _price, address _sender, contract IERC20 _kycToken)</code></a></li><li><a href="#SimulateTrade.createFromSignedOrders(struct IExchange.Order,uint256,address)"><code class="function-signature">createFromSignedOrders(struct IExchange.Order _order, uint256 _amount, address _sender)</code></a></li><li><a href="#SimulateTrade.simulateTrade(enum Order.TradeDirections,contract IMarket,uint256,uint256,uint256,contract IERC20,bool)"><code class="function-signature">simulateTrade(enum Order.TradeDirections _direction, contract IMarket _market, uint256 _outcome, uint256 _amount, uint256 _price, contract IERC20 _kycToken, bool _fillOnly)</code></a></li><li><a href="#SimulateTrade.simulateZeroXTrade(struct IExchange.Order[],uint256,bool)"><code class="function-signature">simulateZeroXTrade(struct IExchange.Order[] _orders, uint256 _amount, bool _fillOnly)</code></a></li><li><a href="#SimulateTrade.getNumberOfAvaialableShares(enum Order.TradeDirections,contract IMarket,uint256,address)"><code class="function-signature">getNumberOfAvaialableShares(enum Order.TradeDirections _direction, contract IMarket _market, uint256 _outcome, address _sender)</code></a></li><li class="inherited"><a href="#Initializable.endInitialization()"><code class="function-signature">endInitialization()</code></a></li><li class="inherited"><a href="#Initializable.getInitialized()"><code class="function-signature">getInitialized()</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="SimulateTrade.initialize(contract IAugur)"></a><code class="function-signature">initialize(contract IAugur _augur)</code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="SimulateTrade.create(enum Order.TradeDirections,contract IMarket,uint256,uint256,uint256,address,contract IERC20)"></a><code class="function-signature">create(enum Order.TradeDirections _direction, contract IMarket _market, uint256 _outcome, uint256 _amount, uint256 _price, address _sender, contract IERC20 _kycToken) <span class="return-arrow">→</span> <span class="return-type">struct SimulateTrade.SimulationData</span></code><span class="function-visibility">internal</span></h4>





<h4><a class="anchor" aria-hidden="true" id="SimulateTrade.createFromSignedOrders(struct IExchange.Order,uint256,address)"></a><code class="function-signature">createFromSignedOrders(struct IExchange.Order _order, uint256 _amount, address _sender) <span class="return-arrow">→</span> <span class="return-type">struct SimulateTrade.SimulationData</span></code><span class="function-visibility">internal</span></h4>





<h4><a class="anchor" aria-hidden="true" id="SimulateTrade.simulateTrade(enum Order.TradeDirections,contract IMarket,uint256,uint256,uint256,contract IERC20,bool)"></a><code class="function-signature">simulateTrade(enum Order.TradeDirections _direction, contract IMarket _market, uint256 _outcome, uint256 _amount, uint256 _price, contract IERC20 _kycToken, bool _fillOnly) <span class="return-arrow">→</span> <span class="return-type">uint256,uint256,uint256,uint256,uint256</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="SimulateTrade.simulateZeroXTrade(struct IExchange.Order[],uint256,bool)"></a><code class="function-signature">simulateZeroXTrade(struct IExchange.Order[] _orders, uint256 _amount, bool _fillOnly) <span class="return-arrow">→</span> <span class="return-type">uint256,uint256,uint256,uint256,uint256</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="SimulateTrade.getNumberOfAvaialableShares(enum Order.TradeDirections,contract IMarket,uint256,address)"></a><code class="function-signature">getNumberOfAvaialableShares(enum Order.TradeDirections _direction, contract IMarket _market, uint256 _outcome, address _sender) <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">public</span></h4>







### `ZeroXTradeToken`



<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#ZeroXTradeToken.initialize(contract IAugur)"><code class="function-signature">initialize(contract IAugur _augur)</code></a></li><li><a href="#ZeroXTradeToken.transferFrom(address,address,uint256)"><code class="function-signature">transferFrom(address, address, uint256)</code></a></li><li><a href="#ZeroXTradeToken.trade(uint256,address,bytes32,struct IExchange.Order[],bytes[])"><code class="function-signature">trade(uint256 _requestedFillAmount, address _affiliateAddress, bytes32 _tradeGroupId, struct IExchange.Order[] _orders, bytes[] _signatures)</code></a></li><li><a href="#ZeroXTradeToken.creatorHasFundsForTrade(struct IZeroXTradeToken.AugurOrderData,address,uint256)"><code class="function-signature">creatorHasFundsForTrade(struct IZeroXTradeToken.AugurOrderData _augurOrderData, address _creator, uint256 _amount)</code></a></li><li><a href="#ZeroXTradeToken.parseAssetData(bytes)"><code class="function-signature">parseAssetData(bytes _assetData)</code></a></li><li><a href="#ZeroXTradeToken.createZeroXOrder(uint8,uint256,uint256,address,uint8,address,uint256,uint256)"><code class="function-signature">createZeroXOrder(uint8 _type, uint256 _attoshares, uint256 _price, address _market, uint8 _outcome, address _kycToken, uint256 _expirationTimeSeconds, uint256 _salt)</code></a></li><li class="inherited"><a href="trading#Initializable.endInitialization()"><code class="function-signature">endInitialization()</code></a></li><li class="inherited"><a href="trading#Initializable.getInitialized()"><code class="function-signature">getInitialized()</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="ZeroXTradeToken.initialize(contract IAugur)"></a><code class="function-signature">initialize(contract IAugur _augur)</code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="ZeroXTradeToken.transferFrom(address,address,uint256)"></a><code class="function-signature">transferFrom(address, address, uint256) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="ZeroXTradeToken.trade(uint256,address,bytes32,struct IExchange.Order[],bytes[])"></a><code class="function-signature">trade(uint256 _requestedFillAmount, address _affiliateAddress, bytes32 _tradeGroupId, struct IExchange.Order[] _orders, bytes[] _signatures) <span class="return-arrow">→</span> <span class="return-type">uint256</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="ZeroXTradeToken.creatorHasFundsForTrade(struct IZeroXTradeToken.AugurOrderData,address,uint256)"></a><code class="function-signature">creatorHasFundsForTrade(struct IZeroXTradeToken.AugurOrderData _augurOrderData, address _creator, uint256 _amount) <span class="return-arrow">→</span> <span class="return-type">bool</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="ZeroXTradeToken.parseAssetData(bytes)"></a><code class="function-signature">parseAssetData(bytes _assetData) <span class="return-arrow">→</span> <span class="return-type">struct IZeroXTradeToken.AugurOrderData</span></code><span class="function-visibility">public</span></h4>





<h4><a class="anchor" aria-hidden="true" id="ZeroXTradeToken.createZeroXOrder(uint8,uint256,uint256,address,uint8,address,uint256,uint256)"></a><code class="function-signature">createZeroXOrder(uint8 _type, uint256 _attoshares, uint256 _price, address _market, uint8 _outcome, address _kycToken, uint256 _expirationTimeSeconds, uint256 _salt) <span class="return-arrow">→</span> <span class="return-type">struct IExchange.Order,bytes32</span></code><span class="function-visibility">public</span></h4>







</div>