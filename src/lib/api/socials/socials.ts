import type { ButtonColorVariant } from '$lib/components/colors';

import Github from '$lib/components/graphics/social/Github.svelte';
import Instagram from '$lib/components/graphics/social/Instagram.svelte';
import Facebook from '$lib/components/graphics/social/Facebook.svelte';
import LinkedIn from '$lib/components/graphics/social/Linkedin.svelte';
import Telegram from '$lib/components/graphics/social/Telegram.svelte';
import Medium from '$lib/components/graphics/social/Medium.svelte';
import Showwcase from '$lib/components/graphics/social/Showwcase.svelte';

export const githubLink = 'https://github.com/srikanthsc';
export const linkedInLink = 'https://www.linkedin.com/in/srikanth-collaty-9343a520b/';
export const whatsappLink = '';
export const emailLink = 'mailto:srikanthcollaty92@gmail.com';

export const socials = [
	{
		social: 'Github',
		name: '@srikanthsc',
		link: githubLink,
		colorVariant: { key: 'github' } as ButtonColorVariant,
		icon: Github
	},
	{
		social: 'LinkedIn',
		name: 'Srikanth COLLATY',
		link: linkedInLink,
		colorVariant: { key: 'linkedIn' } as ButtonColorVariant,
		icon: LinkedIn
	}




];
