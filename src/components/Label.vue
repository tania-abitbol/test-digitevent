<template>
  <div class="label">
    <div class="trapeze">
      <div class="label__block">
        <label for="label">Please enter dates separated by commas :</label>
        <input
          type="text"
          name="label"
          id="label"
          placeholder="17/04, 13/03, 10/04"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default { name: "Label" };
</script>

<style scoped lang="scss">
.label {
  border-block: none;
  border: none;
  font-family: Helvetica, sans-serif;
  font-size: 18px;
  font-weight: lighter;
  & label {
    padding-bottom: 10px;
  }
  & input {
    text-align: center;
    font-size: 14px;
    font-weight: bold;
    background: transparent;
    border: none;
    border-bottom: 2px solid black;
  }
  &__block {
    display: flex;
    flex-direction: column;
  }
}
.trapeze {
  background-color: rgb(42, 184, 231);
  width: fit-content;
  padding: 5% 5%;
  padding-bottom: 80px;
  clip-path: polygon(0 0, 100% 0, 100% 60%, 0% 100%);
  width: fit-content;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
