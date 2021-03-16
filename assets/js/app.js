
    function calc(){
        let weight = +weightInput.value;
        let height = +heightInput.value;
        
        if(height > 2.72){
            height = height / 100;
        }

        index = weight / (height ** 2);

        

        resultPlace.innerHTML = index;
        
        if(index <= 16){
            resultPlace2.innerHTML = ("У вас выраженный дефицит массы тела!");
        }else if(( 16 <= index ) && (18,5 >= index)){
            resultPlace2.innerHTML = ("У вас недостаточная масса тела (дефицит)!");
        }else if((18,5 <= index) && (24 >= index)){        
            resultPlace2.innerHTML = ("Поздравляем! У вас нормальная масса тела!");
        }else if((24 <= index) && (30 >= index)){
            resultPlace2.innerHTML = ("У вас избыточная масса тела(предожирение)!");
        }else if((30 <= index) && (35 >= index)){
            resultPlace2.innerHTML = ("У вас ожирение | степени!");
        }else if((35 <= index) && (40 >= index)){
            resultPlace2.innerHTML = ("У вас ожирение || степени!");
        }else if(index >= 40){
            resultPlace2.innerHTML = ("У вас ожирение ||| степени");
        }else {
            resultPlace2.innerHTML = ("Вы мертвы!");
        }

        
    }

   
       
    