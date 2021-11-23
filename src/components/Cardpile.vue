<template>
<div class="col-2" id="cards" style="padding:30px">
    <draggable>
      <template #item>
          <card text="item.short"></card>
      </template>
    </draggable>
    <div class="card course-1">Serverside</div>
    <div class="card course-2">App 3</div>
    <div class="card course-3">App 3</div>
    <div class="card course-3">App 3</div>
    <div class="card course-4">Systemudvikling</div>
    <div class="card course-4">Systemudvikling</div>
</div>
  
</template>

<script>
import draggable from 'vuedraggable'
import card from '@/components/Card.vue'
export default {
    components : [draggable, card]
}
</script>

<style>

</style>