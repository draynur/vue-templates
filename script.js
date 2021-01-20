// console.log("hello world")
// console.log("hello world")

// Template goes here
Vue.component('does-nothing-at-all', {
  template:`
  <div>
    <div> Hello-World  </div>
    <div> {{customatt}}  </div>
  </div>
  `,
  props: {
    customatt: ""
  },

  data() {
    return {

    }
  },

  mounted() {
    console.log(this.customatt)
  },

  methods: {
    stuff() {

    }
  },

  watch: {
    customatt(prev, cur) {
      console.log(prev, cur);
    }
  }

})

// Use the mix-in
// Vue.use()

window.app = new Vue({
  el: "#appContainer",
  data() {
    return {
      name: "stuff",
      num: 1234,
      switch: false,
      complicated: Object,
      customString: "hello from custom att"
    }
  },
  mounted() {
    console.log("Hello world")
  },
  methods: {
    submit() {
      console.log("I'm alive")
    }
  },
  computed: {
    changesSometimes() {
      return this.name + this.num
    }
  },
  watch: {},
})