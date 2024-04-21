const { set } = require("firebase/database")

var vm=new vue({
    el:"example",
    data:{
        a:1
    },
    computed:{
        b:function(){
            return this.a+1
        }
    }
})
//result
a=1
b=2
var vm = new Vue({
    el: '#demo',
    data: {
      firstName: 'Foo',
      lastName: 'Bar'
    },
    
//computed setter
computed:{
    fullname:{
        //getter
        get:function(){
            return this.firstName +''+ this.lastName
        },
        //setter
        set:function(newvalue){
            var names=newvalue.split('')
            this.firstName=names[0]
            this.lastName=names[names.length-1]

        }
    }

}
})