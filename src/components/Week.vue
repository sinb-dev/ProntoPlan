<template>
    <div class="row">
        <div class="col-10">Uge {{number}}</div>
    </div> 
    <div class="row">
        <div class="col-2 heading">Mandag</div>
        <div class="col-2 heading">Tirsdag</div>
        <div class="col-2 heading">Onsdag</div>
        <div class="col-2 heading">Torsdag</div>
        <div class="col-2 heading">Fredag</div>
    </div> 
    <div class="row">
        <div class="col-2 slot"></div>
        <div class="col-2 slot"></div>
        <div class="col-2 slot"></div>
        <div class="col-2 slot"></div>
        <div class="col-2 slot"></div>
    </div>

    <div class="row">
        <div class="col-2 slot"></div>
        <div class="col-2 slot"></div>
        <div class="col-2 slot"></div>
        <div class="col-2 slot"></div>
        <div class="col-2 slot"></div>
    </div>
</template>

<script>
import draggable from 'vuedraggable'
export default {
    props : {
        'number' : Number
    },
    components : [draggable]
}
</script>

<style>

</style>