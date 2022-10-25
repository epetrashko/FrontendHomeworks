<script lang="ts">
	import vk from '../lib/images/vk.png';
	import instagram from '../lib/images/instagram.png';
	import github from '../lib/images/github.png';
</script>

<div class="slide-right">
	<h1>Evgeny Petrashko</h1>
	<h1>21 years old</h1>
	<h1>Innopolis University student</h1>
	<h1>Android/Web Developer</h1>
	<div class="row">
		<a href="https://vk.com/epetrashko"><img src={vk} alt="" /></a>
		<a href="https://www.instagram.com/epetrashko"><img src={instagram} alt="" /></a>
		<a href="https://github.com/epetrashko"><img src={github} alt="" /></a>
	</div>
</div>

<style>
	.slide-right h1,
	.slide-right div {
		animation: 3s slide-right 0s forwards;
		transform: translateX(100%);
	}

	@keyframes slide-right {
		to {
			transform: translateX(0);
		}
	}
</style>
