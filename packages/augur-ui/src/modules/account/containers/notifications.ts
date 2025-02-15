import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Notifications from "modules/account/components/notifications";
import { selectNotifications } from "modules/notifications/selectors/notification-state";
import { updateReadNotifications } from "modules/notifications/actions/update-notifications";
import { updateModal } from "modules/modal/actions/update-modal";
import { AppState } from "store";
import {
  MODAL_FINALIZE_MARKET,
  MODAL_CLAIM_PROCEEDS,
  MODAL_CLAIM_FEES,
  MODAL_UNSIGNED_ORDERS,
  MODAL_OPEN_ORDERS,
} from "modules/common/constants";
import { ThunkDispatch } from "redux-thunk";
import { Action } from "redux";
import { NodeStyleCallback } from "modules/types";

// TODO create state Interface
const mapStateToProps = (state: AppState) => {
  const notifications = selectNotifications(state);

  return {
    notifications,
    currentAugurTimestamp: state.blockchain.currentAugurTimestamp,
    reportingWindowStatsEndTime: state.disputeWindowStats.endTime,
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<void, any, Action>) => ({
  updateReadNotifications: (notifications: any) =>
    dispatch(updateReadNotifications(notifications)),
  finalizeMarketModal: (marketId: any, cb: NodeStyleCallback) =>
    dispatch(updateModal({ type: MODAL_FINALIZE_MARKET, marketId, cb })),
  claimTradingProceeds: (cb: NodeStyleCallback) =>
    dispatch(updateModal({ type: MODAL_CLAIM_PROCEEDS, cb })),
  claimReportingFees: (reportingFees: any, cb: NodeStyleCallback) =>
    dispatch(
      updateModal({
        type: MODAL_CLAIM_FEES,
        cb,
        ...reportingFees,
      }),
    ),
  unsignedOrdersModal: (marketId: string, cb: Function) =>
    dispatch(
      updateModal({
        type: MODAL_UNSIGNED_ORDERS,
        marketId,
        cb,
      }),
    ),
  openOrdersModal: (marketId: string, cb: Function) =>
    dispatch(
      updateModal({
        type: MODAL_OPEN_ORDERS,
        marketId,
        cb,
      }),
    ),
});

const NotificationsContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Notifications),
);

export default NotificationsContainer;
