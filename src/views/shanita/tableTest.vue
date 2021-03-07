 
<template>

  
<!-- {{getTestData}} -->

   <div>
        <div class="form-group">
            <label for="avatar" class="control-label">Avatar</label>
            <input type="file"  >
            <div class="help-block">
                Help block here updated 4 🍸 ...
            </div>
        </div>

        <div class="col-md-6">
            <input type="hidden" name="avatar_id">
            <img class="avatar" title="Current avatar">
        </div>
   </div>
</template>

<script>
export default { 
  data() {
    return {
    
    };
  },

  mounted() {},
  created(){
      this.$store.dispatch("getTestDataList");
  },
  computed: {
    getTestData(){
        return this.$store.getters.getTestDataGetters;
      } 
  },
  
};
</script>

