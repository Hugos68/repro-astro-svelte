<script lang="ts">
	import Bar from './Bar.svelte';
	let value = $state('0');
</script>

<Bar bind:value></Bar>

