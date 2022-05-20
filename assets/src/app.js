// const Vue = window.vue;
import { default as data } from "./data";

Vue.createApp({
    data(){
        return data;
    },
    methods:{
        activeProtein(index,ingredient,name){
 
              
            if(ingredient == 0){
                if(this.selectedProtein.length <2){
             
                    if(!this.selectedProtein.includes(index)){
                        this.selectedProtein.push(index)
                    }else{
                        this.selectedProtein.pop()
                    }
        
    
                }else{
                    console.log(index)
                
                    if(this.selectedProtein[0] == index){
                        
                        this.selectedProtein.splice(0,1)
                        this.proteinActiveIndexOne = null
                    }else if(this.selectedProtein[1] == index){
                        this.selectedProtein.splice(1,1)
                        this.proteinActiveIndexTwo = null
                    }else{
                        this.showProteinFlash = true
                        this.indexProteinFlash = index
                        setTimeout(() => {
                                this.showProteinFlash = false
                                this.showProteinFlash = false
                        }, 1000);
                    }
    
                 
                }
            }

            if(ingredient == 1){

                if(this.selectedRice.length <2 && name !=='NO RICE'){
             
                    if(!this.selectedRice.includes(index)){
                        this.selectedRice.push(index)
                    }else{
                        this.selectedRice.pop()
                    }
        
    
                }else{
                
                    if(this.selectedRice[0] == index){
                        this.selectedRice.splice(0,1)
                    }else if(this.selectedRice[1] == index){
                        this.selectedRice.splice(1,1)
                    }else if(name=='NO RICE'){
                        this.selectedRice.splice(0,2)
                        
                    }
    
                 
                }
            }

            if(ingredient == 2){
                    console.log('hello')
                if(this.selectedBeans.length <2 && name !=='NO BEANS'){
             
                    if(!this.selectedBeans.includes(index)){
                        this.selectedBeans.push(index)
                    }else{
                        this.selectedBeans.pop()
                    }
        
    
                }else{
                
                    if(this.selectedBeans[0] == index){
                        this.selectedBeans.splice(0,1)
                    }else if(this.selectedBeans[1] == index){
                        this.selectedBeans.splice(1,1)
                    }else if(name=='NO BEANS'){
                        this.selectedBeans.splice(0,2)
                        
                    }
    
                 
                }
            }


            if(ingredient == 3){
  
         
                if(!this.selectedExtras.includes(index)){
                    this.selectedExtras.push(index)
                }else{
                    
                    this.selectedExtras.splice(this.selectedExtras.indexOf(index),1)
                    // console.log(this.ingredients[3])
                }
    
        }
      
         
        },
        isSelected(val,index){
            if(index == 0){
                        if(this.selectedProtein.includes(val)){
                            return true
                        }else{
                            return false
                        }
                }

        if(index == 1){
   
                    if(this.selectedRice.includes(val)){
                        return true
                    }else{
                        return false
                    }

        }

        if(index == 2){
   
            if(this.selectedBeans.includes(val)){
                return true
            }else{
                return false
            }

        }
        if(index == 3){
   
            if(this.selectedExtras.includes(val)){
                return true
            }else{
                return false
            }

        }
            // return true;
        },
        isSelectedCountOne(index){
            if(index == 0 &&  this.selectedProtein.length == 1){
                    return true    
            }
            if(index == 1 &&  this.selectedRice.length == 1){
                return true    
            }
            if(index == 2 &&  this.selectedBeans.length == 1){
                return true    
            }
            if(index ==3){
                return true
             }
        },
        isSelectedCountTwo(index){
            if(index == 0 &&  this.selectedProtein.length == 2){
                    return true    
            }
            if(index == 1 &&  this.selectedRice.length == 2){
                return true    
            }
            if(index == 2 &&  this.selectedBeans.length == 2){
                return true    
            }

           
        },
        showDouble(index,ingredient){
            // console.log(index)

            this.ingredients[ingredient].proteinVeggie[index].showDouble = !this.ingredients[ingredient].proteinVeggie[index].showDouble
        },
        activateDouble(index,ingredient){
            if(index !== 'YES'){
                this.ingredients[ingredient].proteinVeggie[index].showDouble = !this.ingredients[ingredient].proteinVeggie[index].showDouble
            }
           
            this.doubleProtein = !this.doubleProtein
        },
        getDouble(index,ingredient){
             return  this.ingredients[ingredient].proteinVeggie[index].ingredient
        },
        showHigherPrice(){

            let final = []
            this.selectedProtein.forEach(element => {
               final.push({'price':this.ingredients[0].proteinVeggie[element].doublePrice,'id':this.ingredients[0].proteinVeggie[element].index})
            });
       
            let higher = final.sort((a,b)=>{
                return  parseFloat(b.price)- parseFloat(a.price) ;
            })
          return higher[0].price
        }
    }
}).mount('#app')