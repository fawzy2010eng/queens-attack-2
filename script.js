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
    ];
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
    for(var i = y_q+1;i<=n;i++){
        for(var j = x_q+1;j<=n;j++){
            
        }
    }
    console.log((allpossiblesquare))
}

queensAttack(5,0,2,4,[]);
