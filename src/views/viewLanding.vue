<template>
  <div class="Landing">
    <div class="label">
      <div class="rectangle"></div>
      <div class="trapeze">
        <div class="label__block">
          <label for="label">Please enter dates separated by commas :</label>
          <input
            v-on:keyup.enter="getFact($event.target.value)"
            type="text"
            name="label"
            id="label"
            placeholder="17/04, 13/03, 10/04"
          />
        </div>
      </div>
    </div>
    <CardNumber />
    <Card :date="this.date" :fact="this.fact" />
  </div>
</template>

<script>
import CardNumber from "@/components/CardNumber.vue";
import Card from "@/components/Card.vue";
import { getFactApi } from "@/services";

export default {
  name: "Landing",
  components: {
    CardNumber,
    Card,
  },

  data() {
    return { fact: "", date: "" };
  },
  methods: {
    getFact(e) {
      e.split(",").map((value) => {
        if (value.match(/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))/i)) {
          getFactApi(value.split("/")[0], value.split("/")[1]).then((resp) => {
            this.fact = resp;
            this.date = value;
          });
        }
      });
    },
  },
};
</script>

<style scoped lang="scss">
.Landing {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(red, black);
  align-items: center;
  display: flex;
  flex-direction: column;
}

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
.rectangle {
  background-color: rgb(8, 17, 99);
  width: fit-content;
  padding: 5% 5%;
  height: 200px;
  clip-path: polygon(0 0, 100% 0, 100% 0%, 100% 100%);
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
