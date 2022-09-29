<template>
	<div>
		<template v-if="!isUpdateColumn">
			<div class="column-item">
				<label>Название</label>
				<p>{{currentColumn.name}}</p>
			</div>
			<div class="column-item">
				<label>Описание</label>
				<p>{{currentColumn.description}}</p>
			</div>
			<div class="btn-wrap">
				<button @click="deleteColumn()" class="btn-main btn-red">Удалить </button>
	    		<button @click="isUpdateColumn = true" class="btn-main">Обновить</button>
			</div>
	   
	    </template>
	    <template v-else>
	    	<div class="column-item">
				<label>Название</label>
		        <input type="text"
		           class="input-group-field"
		           v-model="currentColumn.name"
		          placeholder="Название"
		        >
		    </div>
		    <div class="column-item">
				<label>Описание</label>
		         <input type="text"
		           	class="input-group-field"
		           	v-model="currentColumn.description"
		          	placeholder="Описание"
		        >
		    </div>
	         <button @click="updateColumn()" class="btn-main">Обновить задачу</button>
	    </template>
	</div>
</template>
<script>
	export default {
		props:{
		    currentColumn:{
		      type: Object
		    },
		},
		data() {
    		return {
    			isUpdateColumn: false,
    		}
    	},
    	methods:{
    		updateColumn(){
    			this.$emit('updateColumn');
    			this.isUpdateColumn = false;
    		}
    	}

	}
</script>
<style>
	.column-item{
		margin-bottom: 20px;
	}
	.column-item label{
		display: block;
    	font-weight: 500;
    	color: #12262b;
    	font-size: 1rem;
    	line-height: 1.5rem;
    	margin-bottom: 0.25rem;
    	text-transform: uppercase;
	}
	.column-item p{
		font: inherit;
	    color: #12262b;
	    font-size: 0.875rem;
	    padding: 10px 0px;
	    border-bottom: 1px solid #e2e8f0;
	    margin-bottom: 20px;
	}

	.column-item input {
		padding-left: 1rem;
	    width: 100%;
	    font: inherit;
	    color: #12262b;
	    padding-right: 1rem;
	    font-size: 0.875rem;
	    border-radius: 0.75rem;
	    line-height: 2.5rem;
	    border: 1px solid #e2e8f0;
	    transition: 0.3s cubic-bezier(0, 0, 0.2, 1);
	    box-shadow: 0;
	    outline: none;
	    color: #59646b;
	    
    }

    .btn-wrap{
    	display: flex;
    	align-items: center;
    	margin: 0px -10px;
    }
    .btn-wrap .btn-main{
    	margin: 0 10px;
    	width: 100%;
    }
</style>