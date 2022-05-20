export default{

        showDoubleProtein:false,
        doubleProtein:false,
        selectedProtein:[],
        selectedRice:[],
        selectedBeans:[],
        selectedExtras:[],
        indexProteinFlash:'',
        showProteinFlash:false,
        proteinActiveIndexOne:null,
        proteinActiveIndexTwo:null,
        ingredients:[

            {
               title:'PROTEIN OR VEGGIE',
               subtitle:'Choose up to two.',
               index:0,
               proteinVeggie:[
                {
                    index:0,
                    ingredient:'POLLO ASADO',
                    price:'9.60',
                    cal:'210 cal',
                    img:'./assets/img/proteinveggie/polloasado.png',
                    showDouble:false,
                    doublePrice:'4.00'
                },
                {
                    index:1,
                    ingredient:'CHICKEN',
                    price:'8.95',
                    cal:'180 cal',
                    img:'./assets/img/proteinveggie/chicken.png',
                    showDouble:false,
                    doublePrice:'3.35'
                },
                {
                    index:2,
                    ingredient:'STEAK',
                    price:'10.55',
                    cal:'150 cal',
                    img:'./assets/img/proteinveggie/steak.png',
                    showDouble:false,
                    doublePrice:'4.95'
                },
                {
                    index:3,
                    ingredient:'BARBACOA',
                    price:'10.55',
                    cal:'170 cal',
                    img:'./assets/img/proteinveggie/barbacoa.png',
                    showDouble:false,
                    doublePrice:'4.95'
                },
                {
                    index:4,
                    ingredient:'CARNITAS',
                    price:'9.60',
                    cal:'170 cal',
                    img:'./assets/img/proteinveggie/carnitas.png',
                    showDouble:false,
                    doublePrice:'4.00'
                    
                },
                {
                    index:5,
                    ingredient:'SOFRITAS',
                    subIngredient:'Plant-Based Protein',
                    price:'9.60',
                    cal:'170 cal',
                    img:'./assets/img/proteinveggie/sofritas.png',
                    showDouble:false,
                    doublePrice:'3.35'
                },
                {
                    index:6,
                    ingredient:'VEGGIE',
                    subIngredient:'Includes Guacamole',
                    price:'8.95',
                    cal:'0 cal',
                    img:'./assets/img/proteinveggie/veggie.png',
                    showDouble:false,
                    doublePrice:'4.00'
                },
                {
                    show:false,
                    index:7,
                    ingredient:'DOUBLE YOUR PROTEIN',
                    img:'',
                    subIngredient:'',
                    price:'+3.95',
                    cal:'',
                    showDouble:false,
                    doublePrice:'4.00'
                }
               ]
            },
            {
                title:'RICE',
                subtitle:'',
                index:1,
                proteinVeggie:[
                    {
                        index:0,
                        ingredient:'WHITE RICE',
                        price:'',
                        cal:'210 cal',
                        img:'./assets/img/rice/whiterice.png',
                        showDouble:false,
                        doublePrice:''
                    },
                    {
                        index:1,
                        ingredient:'BROWN RICE',
                        price:'',
                        cal:'210 cal',
                        img:'./assets/img/rice/brownrice.png',
                        showDouble:false,
                        doublePrice:''
                    },
                    {
                        index:2,
                        ingredient:'NO RICE',
                        price:'',
                        cal:'',
                        img:'./assets/img/no.png',
                        showDouble:false,
                        doublePrice:''
                    },
                ]
            },
            {
                title:'BEANS',
                subtitle:'',
                index:2,
                proteinVeggie:[
                    {
                        index:0,
                        ingredient:'BLACK BEANS',
                        price:'',
                        cal:'130 cal',
                        img:'./assets/img/beans/blackbeans.png',
                        showDouble:false,
                        doublePrice:''
                    },
                    {
                        index:1,
                        ingredient:'PINTO BEANS',
                        price:'',
                        cal:'210 cal',
                        img:'./assets/img/beans/pinto.png',
                        showDouble:false,
                        doublePrice:''
                    },
                    {
                        index:2,
                        ingredient:'NO BEANS',
                        price:'',
                        cal:'',
                        img:'./assets/img/no.png',
                        showDouble:false,
                        doublePrice:''
                    },
                ]
            },
            {
                title:'TOP THINGS OFF',
                subtitle:'',
                index:3,
                proteinVeggie:[
                    {
                        index:0,
                        ingredient:'GUACAMOLE',
                        price:'2.60',
                        cal:'230 cal',
                        img:'./assets/img/topthingsoff/guac.png',
                        showDouble:false,
                        doublePrice:''
                    },
                    {
                        index:1,
                        ingredient:'FRESH TOMATO SALSA',
                        price:'',
                        cal:'25 cal',
                        img:'./assets/img/topthingsoff/salsa.png',
                        showDouble:false,
                        doublePrice:''
                    },
                    {
                        index:2,
                        ingredient:'ROASTED CHILI-CORN SALSA',
                        price:'',
                        cal:'80 cal',
                        img:'./assets/img/topthingsoff/chilicornsalsa.png',
                        showDouble:false,
                        doublePrice:''
                    },
                    {
                        index:3,
                        ingredient:'TOTMATILLO-GREEN CHILI SALSA',
                        price:'',
                        cal:'15 cal',
                        img:'./assets/img/topthingsoff/tomatillo-green-chilli-salsa.png',
                        showDouble:false,
                        doublePrice:''
                    },
                    {
                        index:4,
                        ingredient:'TOTMATILLO-RED CHILI SALSA',
                        price:'',
                        cal:'15 cal',
                        img:'./assets/img/topthingsoff/tomatillo-red-chilli-salsa.png',
                        showDouble:false,
                        doublePrice:''
                    },
                    {
                        index:5,
                        ingredient:'SOUR CREAM',
                        price:'',
                        cal:'110 cal',
                        img:'./assets/img/topthingsoff/sourcream.png',
                        showDouble:false,
                        doublePrice:''
                    },
                    {
                        index:6,
                        ingredient:'ROMAINE LETTUCE',
                        price:'',
                        cal:'5 cal',
                        img:'./assets/img/topthingsoff/romainelettuce.png',
                        showDouble:false,
                        doublePrice:''
                    },
                    {
                        index:7,
                        ingredient:'QUESO BLANCO',
                        price:'1.55',
                        cal:'120 cal',
                        img:'./assets/img/topthingsoff/queso.png',
                        showDouble:false,
                        doublePrice:''
                    },
                ]
            }
           
           
          
        ]
    
}