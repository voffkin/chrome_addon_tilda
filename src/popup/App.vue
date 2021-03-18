<template>
  <div class="okmp_container">
    <div class="okmp_worklist">
      <span class="okmp_icon" /> работает
    </div>
    <div class="okmp_blacklist">
      <span class="okmp_icon" /> не работает
    </div>
    <div class="okmp_testlist">
      <span class="okmp_icon" /> надо тестировать
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  mounted () {
    console.log('Mounted');
  }
}
</script>

<style>
.okmp_container {
  padding: 10px;
}
.okmp_icon {
  display: inline-block;
  width: 30px;
  height: 15px;
  border: 1px solid;
  margin-right: 5px;
}
.okmp_blacklist .okmp_icon {
  color: #e74c3c;
}
.okmp_worklist .okmp_icon {
  color: #2ecc71;
}
.okmp_testlist .okmp_icon {
  color: #f1c40f;
}
</style>
