import { routes } from '../shared/constants';

// import Homepage from './Homepage';
import Dashboard from './Dashboard';
import Welcome from './Welcome';
import Portfolio from './Portfolio';
import AddCurrency from './AddCurrency';
import Wallets from './Wallets';
import Airdrops from './Airdrops';
import Setting from './Settings';
import Currency from './Currency';
import AccountSupport from './AccountSupport';

export default {
	// [routes.homepage]: Homepage,
	[routes.dashboardpage]: Dashboard,
	[routes.welcomepage]: Welcome,
	[routes.portfoliopage]: Portfolio,
	[routes.addcurrencypage]: AddCurrency,
	[routes.walletspage]: Wallets,
	[routes.Airdropspage]: Airdrops,
	[routes.settingspage]: Setting,
	[routes.currencypage]: Currency,
	[routes.accountsupportpage]: AccountSupport
};