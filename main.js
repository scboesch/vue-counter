var app = new Vue({
  el: "#app",
  data: {
    counter: 1
  },
  methods: {
    increment: function() {
      this.counter = this.counter + 1;
    },
    decrement: function() {
      this.counter = this.counter - 1;
    },
    reset: function() {
      this.counter = 0;
    }
  }
});
