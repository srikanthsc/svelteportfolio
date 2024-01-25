<script lang="ts">
	import type { ButtonColorVariant } from '$lib/components/colors';

	import background from '$lib/components/graphics/18765.jpg';

	import Emblem from '$lib/components/graphics/Emblem.svelte';
	import Wrappper from '$lib/components/widgets/Wrappper.svelte';
	import Button from '$lib/components/buttons/Button.svelte';

	import Typewriter from 'svelte-typewriter/Typewriter.svelte';

	const secondaryButton: ButtonColorVariant = { key: 'secondary' };
</script>

<section>
	<!-- Background image -->
	<div
		class="h-[800px] md:h-[900px] bg-cover bg-no-repeat bg-center flex relative duration-500"
		style="background-image: url({background});"
	>
		<div class="md:mt-16 w-full flex">
			<Wrappper>
				<div class="w-full md:flex md:gap-4 md:justify-between my-auto">
					<div class="mb-52 mt-16 md:m-0 py-2 md:py-8 lg:py-9 sm:max-md:text-center duration-500">
						<!-- Hero text -->
						<h2 id="home" class="dark:text-white duration-500">Hello, my name is</h2>
						<h1 class="mb-2 dark:text-white duration-500">
							Srikanth <span class="text-inherit text-primary">C.</span>
						</h1>

						<!-- Typing effect -->
						<h4 class="mb-4 dark:text-white duration-500">
							<Typewriter mode={'loop'} interval={25}>
								A
								<span class="text-white-900 dark:text-white-900">FullStack developer developer</span>
								<span class="text-orange-600 dark:text-orange-400">SAP Software Engineer</span>
							</Typewriter>
						</h4>

						<!-- Call to action buttons -->
						<div class="flex gap-3 sm:max-md:justify-center">
							<a href="#contact">
								<Button variant={secondaryButton} noDarkVariant={false}>Contact me</Button>
							</a>
						</div>
					</div>

				
				</div>
			</Wrappper>
		</div>
	</div>
</section>

<style>
	.dark:root {
		--cursor-color: #fff;
	}

	  #home {
    font-weight: bold;
    color: red;
  }
</style>
