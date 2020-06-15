import { BrowserWindow } from 'electron';
import path from 'path';

import createMenu from './menu';
import { isDev } from '../../utils/environment';

function create() {
	const mainWindow = new BrowserWindow({
		title: 'Reducto',
		width: 400,
		height: 500,
		icon: path.join(
			__dirname,
			'..',
			'..',
			'../assets/icons/Icon_256x256.png'
		),
		resizable: isDev,
	});

	const menu = createMenu();

	mainWindow.setMenu(menu);
	mainWindow.loadURL(
		`file://${path.join(__dirname, '..', '..', '../index.html')}`
	);

	return mainWindow;
}

export default create;
