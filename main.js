var app = new Vue({
  el: "#app",
  data: {
    counter: 1
  },
  methods: {
    increment: function() {
      this.counter = this.counter + 1;
      //this.counter += 1;
    }
  }
});
