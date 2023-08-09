<template>
    <div grid grid-cols-9 max-w-sm mx-auto border-1 border-dark-800>
        <div v-for="(col, colIndex) in board" :key="`col-${colIndex}`" class="col">
            <input v-for="(_row, rowIndex) in col" :key="`col-${colIndex}-row-${rowIndex}`" v-model="board[colIndex][rowIndex]" min="0" max="9" type="number" class="cell">
        </div>
    </div>
</template>

<script lang="ts" setup>
    const { board } = useSudoku();
</script>

<style lang="scss" scoped>
	.col{
		&:not(:last-of-type){
			@apply border-r border-dark-800;
		}
		&:nth-of-type(3n){
			@apply border-r-3;
		}
	}
	.cell{
		@apply bg-light-500 text-center w-10 h-10;

		&:not(:last-of-type){
			@apply border-b border-dark-800;
		}
		&:nth-of-type(3n){
			@apply border-b-3;
		}
	}

	input[type='number']::-webkit-inner-spin-button,
	input[type='number']::-webkit-outer-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
</style>
