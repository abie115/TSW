/*jshint globalstrict: true, devel: true */
/*jslint node: true */
'use strict';
var t = require('underscore');
/*defFun(fun, types){
  //  return
};*/

var defFun = function (fun, types) {
    fun.typeConstr = types;
    return fun;
};

var appFun = function (f) {
    var args = arguments, types = f.typeConstr, i = 0;
    t.each(t.toArray(args).slice(1, args.length), function (el) {
            if (typeof el !== types[i])
                throw ( { typerr: "Wystąpił błąd, Oczekiwano: " + types[i] + " Orzymano: " + typeof el } );
                    i++;
 
});
    
return f.apply(this, t.toArray(args).slice(1, args.length)); 

};

var myfun = defFun(function (a, b) {
    return a + b;
}, ['number', 'number']);

/*try {
    console.log(appFun(myfun, 12, 15));
} catch (e) {
    console.log(e.typerr);
}*/