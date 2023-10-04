import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Helmet } from 'react-helmet';

import { Navigator } from './routes/Navigator';

const MetaHeader = () => (
	<Helmet>
		<meta
			name='cnci-mobile-web-app'
			httpEquiv='Content-Security-Policy'
			content="script-src 'self'"
		/>
	</Helmet>
);

export const App = () => (
	<SafeAreaProvider>
		<MetaHeader />
		<Navigator />
	</SafeAreaProvider>
);
