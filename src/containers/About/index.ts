import { BrowserWindow } from 'electron';
import path from 'path';

function create() {
	const about = new BrowserWindow({
		title: 'Reducto',
		width: 400,
		height: 200,
		icon: path.join(
			__dirname,
			'..',
			'..',
			'../assets/icons/Icon_256x256.png'
		),
		resizable: false,
	});

	about.setMenu(null);
	about.loadURL(
		`file://${path.join(__dirname, '..', '..', '../about.html')}`
	);

	return about;
}

export default create;
