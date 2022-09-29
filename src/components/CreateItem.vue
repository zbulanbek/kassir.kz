<template>
	<div>
		<div class="column-item">
			<label>Название</label>
			<input type="text"
		       	class="input-group-field"
		       	v-model="newColumn.name"
		       	@keyup.enter="addColumn"
		       	placeholder="Название">
		    <span class="error-label" v-if="msg_error">{{msg_error}}</span>
	   	</div>
	   	<div class="column-item">
			<label>Описание</label>
	    	<input type="text"
		       	class="input-group-field"
		       	v-model="newColumn.description"
		       	@keyup.enter="addColumn"
		       	placeholder="Описание">
		</div>
	    <button @click="addColumn" class="btn-main btn-auto">Сохранить</button>
	</div>
</template>
<script>
	export default {
		data() {
    		return {
    			newColumn: {},
    			msg_error: null,
    		}
    	},
    	methods:{
    		addColumn(){
    			if(!this.newColumn.name){
    				this.msg_error = 'Обязательное поле.'
				}else if(this.newColumn.name.length >= 40){
    				this.msg_error = 'Вы можете ввести только 40 символов.'
    			}
    			else{
    				this.$emit('addColumn', this.newColumn);
    				this.newColumn = {};
    				this.msg_error = null;
    				this.$emit('closeModal');
    			}
    		}
    	},
    	watch: {
    		newColumn: {
		      handler(newValue, oldValue) {
			      	if(this.newColumn.name && this.newColumn.name.length >= 40){
			      		this.msg_error = 'Вы можете ввести только 40 символов.'
			      	}else{
			      		this.msg_error = null;
			      	}
		      	},
		      	deep: true
		    }
		}
	}
</script>
<style>
	.error-label{
		color: #FF0000;
		font-size: .7rem;
	}
</style>