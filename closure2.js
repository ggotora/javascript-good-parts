var names = ['zero', 'one', 'two', 'three', 'four'
,'five', 'six', 'seven', 'eight', 'nine'];

var digitName = (function(){
    return function(n){
        return names[n];
    };
}());
console.log(digitName(3));

//closure 

var digit_name = (function(){
    var names = ['zero', 'one', 'two', 'three', 'four', 'five',
                 'six','seven', 'eight', 'nine'];
    return function(n){
        return names[n];
    };
}()
);
console.log(digit_name(4))