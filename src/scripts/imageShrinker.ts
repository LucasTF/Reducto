declare const M: any;

const path = require('path');
const os = require('os');
const { ipcRenderer } = require('electron');

const form = document.getElementById('image-form') as HTMLElement;
const slider = document.getElementById('slider') as HTMLInputElement;
const img = document.getElementById('img') as HTMLInputElement;

(document.getElementById('output-path') as HTMLElement).innerText = path.join(
	os.homedir(),
	'reducto'
);

form.addEventListener('submit', e => {
	e.preventDefault();

	const imgPath = (img.files as FileList)[0].path;
	const quality = slider.value;
	const destination = path.join(os.homedir(), 'reducto');

	ipcRenderer.send('image:minimize', {
		imgPath,
		quality,
		destination,
	});
});

ipcRenderer.on('image:done', () => {
	M.toast({
		html: `Image resized to ${slider.value}% quality`,
	});
});
