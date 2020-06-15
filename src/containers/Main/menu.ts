import { Menu, MenuItem } from 'electron';

import { isDev } from '../../utils/environment';
import About from '../About';

const createMenu = () => {
	const menu = new Menu();
	menu.append(
		new MenuItem({
			role: 'fileMenu',
		})
	);
	menu.append(
		new MenuItem({
			label: 'Help',
			submenu: [
				{
					label: 'About',
					click: About,
				},
			],
		})
	);

	if (isDev) {
		menu.append(
			new MenuItem({
				label: 'Developer',
				submenu: [
					{ role: 'reload' },
					{ role: 'forceReload' },
					{ type: 'separator' },
					{ role: 'toggleDevTools' },
				],
			})
		);
	}

	return menu;
};

export default createMenu;
