#EventLoop
js is syncuronous and single threded by default 

##There can be async behaviour
- with browser api - set time out , setInterval, setImmediate, nextTick 

- with promises
- with event handlers 
<!-- Event loop callback promos is very imp | in c++ opps | in c pointer  -->


<!-- js is syncuronous(top to bottom hr fn ko brr brr call krega) single threded -->

<!--   -->
#Promise
- A fn not executed immediately  but it must be executed after a while it has some status  during the execution . 
- eg. at final it may resolve (sucess) or reject (unsucess)

#Call back fn
- call back fn that pass an argument or the parameter to another fn

# Modern js is divided into 2 category
- commmon js (.cjs) ->suppots object oriented programming (oops) -> require keyword
- in cjs 1st priority goes to next tick 
-priority(nextTick,Promise,setImmediate,setTimeout)



- ModuleJs (.mjs) => follow in this modular approch -> import in this. This is more famous 
- in mjs 1st priority goes to promises 
- priority(Promise,nextTick,setImmediate/setTimeout)



