if(!Array.prototype.indexOf){
    Array.prototype.indexOf=function(item,i){
        i || (i=0);
        var length=this.length;
        if(i<0){
            i = length;
        }
        for(;i<length;i++){
            if(this[i] === item){
                return i;
            }
        }
        return -1;
    };
}
String.prototype.Trim = function(){
    return this.replace(/(^\s*)|(\s*$(ELT))/g, "");
};
