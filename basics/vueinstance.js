var vm = new Vue({
    // options
  })
  var MyComponent = Vue.extend({
    // extension options
  })
  // all instances of `MyComponent` are created with
  // the pre-defined extension options
  var myComponentInstance = new MyComponent()
  //properties and methods
  var data= {a:1}
  var vm=new Vue({
  
    data:data
  })
  vm.a===ata.a
  vm.a=2
  data.a=3
  vm.a
  var data = { a: 1 };
var vm = new Vue({
  el: '#example',
  data: data
});

// Accessing the data object through the Vue instance
vm.$data === data // -> true

// Accessing the root element of the Vue instance
vm.$el === document.getElementById('example') // -> true

// Using $watch to watch for changes in a property
vm.$watch('a', function (newVal, oldVal) {
  // This callback will be called when `vm.a` changes
  console.log('the value of a changed from', oldVal, 'to',newVal);S
});
//instance lifecycle
var vm=new Vue({
  data:{a:1},
  created :function(){
    console.log('a is' + this.a);
  }
})