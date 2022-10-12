function smallEnough(a, limit){
    console.log(limit)
    console.log(a)
   for (let i = 0; i < a.length; i++){
     if (a[i] > limit){
        return false
       } 
    }
    return true 
}