<template>
  <div>
    <div class="trapeze"></div>
    <label for="label">Please enter dates separated by commas :</label>
    <input type="text" name="label" id="label" placeholder="17/04, 13/03, 10/04" />
  </div>
</template>

<script>
export default { name: "Label" };
</script>


<style scoped lang="scss">
.trapeze {
  border-bottom: 50px solid blue;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  height: 0;
  width: 50px;
}
</style>
