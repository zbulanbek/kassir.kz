<template>
<div>
  <div class="header-column">
    <button @click="showCreateColumn" class="btn-main">Создать задачу</button>
  </div>
  
  <drag-in-drop @showModal="showCurrentColumn" :columns="columns"/>
  <modal
    v-model="isShowModal"
    :close="closeModal">
    <div class="modal-wrap">
      <div class="modal-header">
        <p class="title">{{ columnType == 'CreateItem' ? 'Создать задачу' : 'Редактировать задачу' }}</p>
        <button @click="closeModal" class="close-btn"></button>
      </div>
      <div class="modal-body">
        <component 
        v-if="columnType"
        :is="columnType" 
        :currentColumn="currentColumn"
        @closeModal="closeModal"
        @deleteColumn="deleteColumn"
        @updateColumn="updateColumn"
        @addColumn="addColumn"
        ></component>
      </div>
    </div>
  </modal>
</div>
</template>

<script>
import DragInDrop from "./components/DragInDrop";
import UpdateItem from "./components/UpdateItem";
import CreateItem from "./components/CreateItem";

export default {
  components: {
    DragInDrop,
    UpdateItem,
    CreateItem
  },
  data() {
    return {
        columnType: null,
        isShowModal: false,
        currentColumn: {},
        newColumn: {},
        maxId: 1,
        columns: [
          {
              title: "TO DO",
              list:[
                { name: "Обновить roadmap", description: 'Lorem', id: 1 },
              ]
          },
          {
              title: "IN PROGRESS",
              list:[]
          },
          {
              title: "DONE",
              list:[]
          },
          {
              title: "PROD",
              list:[]
          },
        ],
      }
  },
  methods:{
    addColumn(newColumn) {
      if (newColumn) {
        this.maxId = this.maxId + 1;
        this.columns[0].list.push({
          name: newColumn.name,
          description: newColumn.description,
          id: this.maxId
        });
      }
    },
     deleteColumn(){
      let index_column = this.currentColumn.index;
      let index_list = this.findIndexList(index_column);
      this.columns[index_column].list.splice(index_list, 1);
      this.closeModal();
    },
    updateColumn(){
      let index_column = this.currentColumn.index;
      let index_list = this.findIndexList(index_column);
      this.columns[index_column].list[index_list].name = this.currentColumn.name;
      this.closeModal();
    },
    showModal () {
      this.isShowModal = true;
    },
    closeModal () {
      this.isShowModal = false;
    },
    showCreateColumn(){
      this.columnType = 'CreateItem';
      this.showModal();
    },
    showCurrentColumn(index_column, id){
      this.columnType = 'UpdateItem';
      let index_list = this.columns[index_column].list.findIndex(item => item.id === id);
      this.currentColumn.name = this.columns[index_column].list[index_list].name;
      this.currentColumn.index = index_column;
      this.currentColumn.description = this.columns[index_column].list[index_list].description;
      this.currentColumn.id = id;
      this.showModal();
    },
    
    findIndexList(index){
      let index_list = this.columns[index].list.findIndex(item => item.id === this.currentColumn.id);
      return index_list;
    },
  }
}

</script>

<style>
  .header-column{
    display: flex;
    justify-content: flex-end;
    margin:  24px 16px;
  }
.modal-wrap {
  width: 500px;
  padding: 16px;
  box-sizing: border-box;
  background-color: #fff;
  font-size: 20px;
  border-radius: 2rem;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 10%), 0 10px 10px -5px rgb(0 0 0 / 4%);
}
.vue-universal-modal{
  z-index: 1000;
}
button{
  background-color: transparent;
  border:none;
}
.close-btn{
  display: block;
  position: relative;
  width: 28px;
  height: 28px;
}

.close-btn:before, .close-btn:after {
  position: absolute;
  left: 15px;
  top: 0;
  content: ' ';
  height: 28px;
  width: 2px;
  background-color: #333;
}
.close-btn:before {
  transform: rotate(45deg);
}
.close-btn:after {
  transform: rotate(-45deg);
}
.modal-header{
  padding: 10px;
}

.modal-header p{
  margin: 0;
}
.btn-main{
    height: 3rem;
    padding-left: 2rem;
    padding-right: 2rem;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    background-color: #0b42c3;
    font-size: 1.125rem;
    border-radius: 0.75rem;
    transition: background-color 0.3s cubic-bezier(0, 0, 0.2, 1);
}

.btn-red{
  background-color: #FF0000;
}
.btn-auto{
  margin: auto;
}
</style>