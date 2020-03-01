function queensAttack(n, k, y_q, x_q, obstacles) {
    function Point(y,x){
        this.y = y;
        this.x = x;
    }
    
    var allpossiblesquare = [
        [],//left
        [],//right
        [],//up
        [],//down
        [],//upleft
        [],//dowleft
        [],//upright
        [],//downright
    ];
    
    // // here we add the possible points in each direction for 
    // // the main array of possibilities
    for(var i = x_q-1 ;i >= 1 ;i--){
        allpossiblesquare[0].push(new Point(y_q,i))  
    }    
    
    for(var i = x_q+1 ;i <= n ;i++){
        allpossiblesquare[1].push(new Point(y_q,i))  
    }
    
    for(var i = y_q+1 ; i <= n ; i++){
        allpossiblesquare[2].push(new Point(i,x_q))  
    }
    for(var i = y_q-1 ; i >= 1 ; i--){
        allpossiblesquare[3].push(new Point(i,x_q))  
    }
    
    for(var i = y_q+1 ; i <= n ;i++){
        for(var j = x_q-1 ; j >= 1; j--){
          allpossiblesquare[4].push(new Point(i,j))
          i++;
        }
    }    
    
    for(var i = y_q-1;i>=1;i--){
        for(var j = x_q-1;j>=1;j--){
            if(i >= 1 && j >=1){
                allpossiblesquare[5].push(new Point(i,j));
                i--
            }                                      
        }
    }  
    
    for(var i = 1;i< n-x_q+1;i++){
        for(var j = 1;j<n-y_q+1;j++){
            if(i == j){
                allpossiblesquare[6].push(new Point(i+y_q,j+x_q))  
            }  
        }
    }
    
    for(var i = x_q+1; i < n;i++){
        for(var j = y_q-1; j >= 1; j--){
            if((i + j) == (y_q+x_q)){
                allpossiblesquare[7].push(new Point(j,i))  
            }
        }  
    }
    //create array represent the points of obstacles
    var 
    var pointsOfObstacles = [];
    for(var i = 0; i < k; i=i+2){
        var P = new Point(obstacles[i][0],obstacles[i][1]);
        pointsOfObstacles.push(P)
    }
    // here we subtract all the closed pathes
    for(var o = 0; o < k; o++ ){
        for(var i = 0; i < 8; i++){
            for(var j = 0; j < allpossiblesquare[i].length; j++){
                if((pointsOfObstacles[o].x == allpossiblesquare[i][j].x) && (pointsOfObstacles[o].y == allpossiblesquare[i][j].y))
                {
                    allpossiblesquare[i].splice(j) 
                }
            }  
        }
    }
    
    var avilablepoints = 0;
    for(var i = 0; i < allpossiblesquare.length; i++){
        avilablepoints = avilablepoints+allpossiblesquare[i].length
    }
    
    return avilablepoints
}
// console.log(queensAttack(8,1,4,4,[[3,5]]));
