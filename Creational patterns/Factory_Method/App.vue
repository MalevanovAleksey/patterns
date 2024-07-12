<template>
    <div>
      <h1>Food Factory</h1>
      <button @click="makePizza">Make Pizza</button>
      <button @click="makeSushi">Make Sushi</button>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
import PizzaFactory from './types/FactoryItems/PizzaFactory';
import FoodFactory from './types/FoodFactory';
import SushiFactory from './types/FactoryItems/SushiFactory';
  
  interface Food {
    prepare(): void;
    cook(): void;
    box(): void;
  }
  
  
  export default defineComponent({
    name: 'FoodFactory',
    methods: {
      makePizza() {
        const pizzaFactory: FoodFactory = new PizzaFactory();
        const pizza: Food = pizzaFactory.createFood();
        pizza.prepare();
        pizza.cook();
        pizza.box();
      },
      makeSushi() {
        const sushiFactory: FoodFactory = new SushiFactory();
        const sushi: Food = sushiFactory.createFood();
        sushi.prepare();
        sushi.cook();
        sushi.box();
      }
    }
  });
  </script>
  
  <style scoped>
  button {
    margin: 5px;
  }
  </style>
  