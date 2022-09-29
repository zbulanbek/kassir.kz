<template>
  <div class="container-fluid">
  <div class="row">
    <div v-for="(column, indexColumn) in columns"
        :key="column.title"
        class="col-sm-3 col-md-3 col-lg-3 col-xl-3  ghost-card">
        <div class="wrap_list-group-item">
          <p class="tracking-wide">{{column.title}}</p>
          <draggable
              class="list-group"
              :list="column.list"
              group="people"
              @change="log"
              itemKey="name">
            <template #item="{ element, index }">
              <div class="list-group-item shadow" @click="showModal(indexColumn, element.id)">
                <button class="icon-pencil"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Blue_pencil.svg/1200px-Blue_pencil.svg.png"></button>
                <div class="drag-item">
                  <label>Название: </label>
                   <p> {{ element.name }}</p>
                </div>
                <div class="drag-item">
                  <label>Описание: </label>
                   <p> {{ element.description }}</p>
                </div> 
                <p class="logo-label">Kassir.kz</p>
              </div>
            </template>
          </draggable>
        </div>
    </div>
  </div>
  </div>
</template>
<script>
import draggable from "vuedraggable";

export default {
  name: "two-lists",
  components: {
    draggable,
  },
  props:{
    columns:{
      type: Array
    }
  },
  methods: {
    showModal(indexColumn, index, id){
      this.$emit('showModal', indexColumn, index, id)
    },
    add: function() {
      this.list.push({ name: "Juan" });
    },
    replace: function() {
      this.list = [{ name: "Edgard" }];
    },
    log: function(evt) {
      window.console.log(evt);
    }
  }
};
</script>

<style scoped>
.wrap_list-group-item {
  opacity: 0.9;
  background: #F7FAFC;
  padding: 16px;
}

.mr-4 {
  margin-right: 1rem;
}

.tracking-wide{
  letter-spacing: .025em;
  opacity: 1;
  color: #4a5568;
  font-size: .875rem;
}

.list-group-item{
  cursor: move;
  margin-top: 0.75rem;
  padding: .75rem .75rem .9rem;
  position: relative;
}

.icon-pencil{
  position: absolute;
  width: 30px;
  height: 30px;
  top: 5px;
  right: 5px;
}

.icon-pencil img{
  width: 100%;
  height: 100%; 
  object-fit: contain;
}
/**/

.shadow{
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%);
}
.drag-item{
  display: flex;
  margin-bottom: .5rem;
}
.drag-item label{
  font-size: 0.875rem;
  color: #5d6d79;
  line-height: 1.5rem;
}
.drag-item p{
  font-size: 0.875rem;
  margin-bottom: 0px;
  line-height: 1.5rem;
  color: black;
  margin-left: 3px;
}

.logo-label{
  color: #0b42c3;
  margin-bottom: 0px;
  font-size: 0.795rem;
}
</style>
