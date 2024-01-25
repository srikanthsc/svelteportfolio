import type { Project } from './types';

const githubApiLink = 'https://api.github.com/users/srikanthsc/repos';

const initialProjects: Project[] = [
	{
		id: 0,
		name: 'Online Auction App',
		url: `https://github.com/srikanthsc/abap-cheat-sheets`,
		description: '',
		imageUrl: 'https://github.com/ikhsan3adi/Flutter-Auction-App/raw/master/images/banner.png',
		readmeUrl: 'https://raw.githubusercontent.com/ikhsan3adi/flutter-auction-app/master/README.md',
		tags: ['flutter']
	},
	{
		id: 1,
		name: 'Sistem Perpustakaan QR Code',
		url: `${githubApiLink}/sistem-perpustakaan-qr-code`,
		description: '',
		imageUrl:
			'https://github.com/ikhsan3adi/sistem-perpustakaan-qr-code/raw/main/screenshots/home.png',
		readmeUrl:
			'https://raw.githubusercontent.com/ikhsan3adi/sistem-perpustakaan-qr-code/main/README.md',
		tags: ['codeigniter', 'php']
	},
	{
		id: 2,
		name: 'Celenganku App Clone',
		url: `${githubApiLink}/flutter-celenganku-clone`,
		description: '',
		imageUrl:
			'https://github.com/ikhsan3adi/flutter_celenganku_app_clone/raw/master/screenshots/screenshot-1.png',
		readmeUrl:
			'https://raw.githubusercontent.com/ikhsan3adi/flutter-celenganku-clone/master/README.md',
		tags: ['flutter']
	},
	{
		id: 3,
		name: 'Sistem Absensi QR Code',
		url: `${githubApiLink}/absensi-sekolah-qr-code`,
		description: '',
		imageUrl:
			'https://github.com/ikhsan3adi/absensi-sekolah-qr-code/raw/master/screenshots/hero.png',
		readmeUrl:
			'https://raw.githubusercontent.com/ikhsan3adi/absensi-sekolah-qr-code/master/README.md',
		tags: ['codeigniter', 'php']
	},
	{
		id: 4,
		name: 'Portfolio website',
		url: `${githubApiLink}/ikhsan3adi.github.io`,
		description: '',
		imageUrl: 'https://github.com/ikhsan3adi/ikhsan3adi.github.io/raw/main/images/preview.png',
		readmeUrl: 'https://raw.githubusercontent.com/ikhsan3adi/ikhsan3adi.github.io/master/README.md',
		tags: ['html', 'typescript']
	}
];

export { initialProjects };
