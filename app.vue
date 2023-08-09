<template>
    <div crate p-10>
        <h1 text-center text-3xl font-bold font-heading mb-10>
            Sudoku Solver
        </h1>

        <Board />

        <div flex gap-5 mt-10 justify-center>
            <Btn @click="solve()">
                Solve
            </Btn>
            <Btn @click="reset()">
                Reset
            </Btn>
        </div>
    </div>
</template>

<script lang="ts" setup>
    const { solve, reset } = useSudoku();
</script>

<style lang="scss">
	html {
		-webkit-tap-highlight-color: transparent;
		scroll-behavior: smooth;
		@apply min-h-screen;
	}
	body {
		@apply overflow-x-hidden;
	}
	img {
		-webkit-user-drag: none;
		@apply select-none;
	}

	// Transitions
	.fade-enter-active,
	.fade-leave-active {
		@apply transition-opacity ease-in-out duration-300;
	}
	.fade-enter-from,
	.fade-leave-to {
		@apply opacity-0;
	}
</style>
