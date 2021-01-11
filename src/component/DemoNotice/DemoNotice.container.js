/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/base-theme
 * @link https://github.com/scandipwa/base-theme
 */

import { connect } from 'react-redux';

import DemoNotice from './DemoNotice.component';

// eslint-disable-next-line @scandipwa/scandipwa-guidelines/use-namespace
export const mapStateToProps = (state) => ({
    isDemoNoticeEnabled: state.ConfigReducer.demo_notice,
    device: state.ConfigReducer.device
});

// eslint-disable-next-line @scandipwa/scandipwa-guidelines/use-namespace
export const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DemoNotice);
