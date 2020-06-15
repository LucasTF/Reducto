import { app, BrowserWindow, globalShortcut, ipcMain } from 'electron';

import MainWindow from './containers/Main';
import ShrinkService from './services/shrinkerService';

app.on('ready', () => {
	let mainWindow: BrowserWindow | null = MainWindow();

	globalShortcut.register('Ctrl+R', () => {
		console.log('Recarregando a janela...');
		mainWindow?.reload();
	});

	mainWindow.on('close', () => (mainWindow = null));

	ipcMain.on('image:minimize', (e, args) => {
		try {
			ShrinkService(args);
			mainWindow?.webContents.send('image:done');
		} catch (error) {
			console.log(error);
		}
	});
});
