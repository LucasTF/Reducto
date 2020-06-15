import { app, BrowserWindow, globalShortcut } from 'electron';

import MainWindow from './containers/Main';

app.on('ready', () => {
	let mainWindow: BrowserWindow | null = MainWindow();

	globalShortcut.register('Ctrl+R', () => {
		console.log('Recarregando a janela...');
		mainWindow?.reload();
	});

	mainWindow.on('close', () => (mainWindow = null));
});
