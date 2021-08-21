import App from './App.svelte';

const app = new App({
	target: document.querySelector('#newsletter-signup'),
	props: {
		name: 'world'
	}
});

export default app;
