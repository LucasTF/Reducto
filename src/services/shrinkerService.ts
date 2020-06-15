import { shell } from 'electron';
import imagemin from 'imagemin';
import imageminMozJpeg from 'imagemin-mozjpeg';
import imageminPngQuant from 'imagemin-pngquant';
import slash from 'slash';

interface IArgs {
	imgPath: string;
	quality: number;
	destination: string;
}

async function shrink(args: IArgs) {
	const percentQuality = args.quality / 100;
	const files = await imagemin([slash(args.imgPath)], {
		destination: args.destination,
		plugins: [
			imageminMozJpeg({ quality: args.quality }),
			imageminPngQuant({
				quality: [percentQuality, percentQuality],
			}),
		],
	});

	shell.openPath(args.destination);
}

export default shrink;
