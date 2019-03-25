function Circle(x,y,r){
 var midPointX = x;
var midPointY = y;
var midPointR = r;

this.setRadius = function(r){
    midPointR = r;
}
this.getRadius = function(){
    return midPointR;
}

this.setX = function(x) {
     midPointX = x;
}
this.getx = function(){
   return midPointX;
}

this.sety = function(y){
    midPointY = y;
}

this.gety = function(){
    return midPointY;
}

this.getArea= function () {
    return 3.24* midPointR*midPointR
}
this.getCirFerence = function(){
    return 2*3.14 *midPointR;
}
}




