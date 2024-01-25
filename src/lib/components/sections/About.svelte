<script lang="ts">
	import { linkedInLink } from '$lib/api/socials';
	import type { ButtonColorVariant } from '$lib/components/colors';

	import Wrappper from '$lib/components/widgets/Wrappper.svelte';
	import Button from '$lib/components/buttons/Button.svelte';
	import MarqueeText from '$lib/components/widgets/MarqueeText.svelte';

	import Saos from 'saos';
	import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';

	const primaryButton: ButtonColorVariant = { key: 'primary' };
</script>

<section class="w-full bg-custom-1 dark:bg-purple-900 relative pt-20">
	<div
		class="absolute left-0 right-0 top-0 bg-primary h-12 md:h-14 lg:h-16 border-slate-900 border-y-4 flex items-center"
	>
		<MarqueeText direction="left">
			<div class="flex items-center gap-8 mx-4">
				<h4>● Welcome to my website!</h4>
				<h4>● Mobile development</h4>
				<h4>● Back-end development</h4>
				<h4>● Front-end development</h4>
				<h4>● Full Stack developer</h4>
				<h4>● IT Engineer</h4>
				<h4>● SAP developer</h4>
			</div>
		</MarqueeText>
	</div>
	<Wrappper>
		<div class="w-full pb-20">
			<Saos animation={'scale-up-center 1s cubic-bezier(0.4, 0, 0.2, 1) both'} once>
				<h1
					class="text-center mx-auto my-10 md:my-12 lg:my-16 dark:text-white duration-500"
					id="about"
				>
					About
				</h1>
			</Saos>
			<div class="w-full flex flex-col gap-4 md:flex-row md:justify-between h-max">
				<div class="w-full">
					<Saos animation={'scale-up-center 1s cubic-bezier(0.4, 0, 0.2, 1) both'} once>
						<div class="bg-custom-2 px-4 py-4 md:px-6 lg:py-6 lg:px-8 border-4 border-slate-900">
							<h3 class="mb-4">About me</h3>
							<p>
								I am Srikanth, I have recently graduated, I am a Tech enthusiast.

I am always open to collaborating on projects and innovative/disruptive ideas.

When I am not coding, you will find me lifting weights in the gym or at my desk sketching stuff
							</p>
						</div>
					</Saos>
				</div>
				<div class="w-full">
					<Saos
						css_observer={'display: flex; height: 100%;'}
						animation={'scale-up-center 1s cubic-bezier(0.4, 0, 0.2, 1) both'}
						once
					>
						<div
							class="bg-secondary px-4 py-4 md:px-6 lg:py-6 h-full lg:px-8 border-4 border-slate-900"
						>
							<p class="mb-4">
								To gain further insight into my professional background and skills, you're welcome to explore my LinkedIn profile at:
							</p>

							<a href={linkedInLink} target="_blank">
								<Button variant={primaryButton}>
									<Fa icon={faExternalLink} slot="icon" />Visit LinkedIn
								</Button>
							</a>
						</div>
					</Saos>
				</div>
			</div>
		</div>
	</Wrappper>
</section>
