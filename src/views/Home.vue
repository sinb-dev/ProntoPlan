<template>
  <div class="row">
    <cardpile></cardpile>
    <div class="col-10" style="padding:0px">
      <Week v-for="num in week_count"
        :key="num"
        :number="num" />
      </div>
  </div>
</template>

<script> 
// @ is an alias to /src
import Data from '@/data/data.js'
import Week from '@/components/Week.vue'
import cardpile from '@/components/Cardpile.vue'

const data = Data.get_data();
export default {
  name: 'Home',
  data() {

    return {
      course : 'H5',
      data : data
    }
  },
  computed: {
    week_count : cmp => { 
      let arr = new Array(cmp.data.maincourse[cmp.course].duration / 5)
      for (let i=0; i < arr.length; i++) {
        arr[i] = i+1
      }
      return arr;
    }
  },
  components: {
    Week,cardpile
  }
}
</script>
