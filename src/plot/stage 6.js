const compose = (...fns) => (arg) => 
  fns.reduce((composed, f) => f(composed),arg)


function Filter(callback) {
    return (mass) => mass.filter(callback);
}
function Reduce(callback,...arg) {
    return (mass) => mass.reduce(callback,...arg);
}
function Map(callback) {
      return (mass) => mass.map(callback);
}
////// quest 1 //////
const rectangles = [{color: 'red',width:4,height:4,},
{color: 'black',width:2, height:2,},{color: 'white',width:6,height:9,},
{color: 'black',width:3,height:3,},{color: 'black',width:4,height:4, },
{color: 'black',width:5,height:5,},{color: 'white',width:4,height:2,},{color: 'red',width:5,height:5,}];

function isBlack(rectangle) {
    return rectangle.color == 'black';
    };

function perimeter(rectangle) {
        return rectangle.width*2 + rectangle.height*2;
}  

const result = compose (
               Filter(isBlack),
               Map(perimeter),
               Reduce(Math.max)
               )(rectangles)
///// quest 2 ////

const materials  = [{type:'iron',amount:20},{type:'wood',amount:13},{type:'iron',amount:40}] ;

function isIron(material) {
    return material.type == 'iron';
}

function sumIron(total,iron){
    return total + iron.amount;
} 

function makeSwords(amount){
    return amount / 5
} 

const swordFactory = compose(
                      Filter(isIron),
                      Reduce(sumIron,0),
                      makeSwords)

console.log(swordFactory(materials))
///// quest 3 ////
const demons = [{name: 'Charun',army:3,combatRaiting:487,location:'Demon`s castle'},
{name: 'Asag' ,army:6,combatRaiting:721,location:'Hell lake'},
{name: 'Bakasura',army:6,combatRaiting:785,location:'Dead garden'},
{name: 'Anzu',army:3,combatRaiting:557,location:'Dragon`s fields'},]

function isArmy6(demon){
    return demon.army == 6;
}
function max(demonA,demonB){
    return demonA.combatRaiting < demonB.combatRaiting ?  demonB : demonA;
}
function showLocationAndName(demon){
    return "name: " +demon.name +" location: " + demon.location ;
}
const findLeader = compose(Filter(isArmy6),
                          Reduce(maxRaiting),
                          showLocationAndName,
                          )
console.log(findLeader(demons)) ;


///// quest 4 ////
const persons = [{legion:26,weapons:['stick','bow']},
{legion:1,weapons:['sword','bow']},{legion:26,weapons:['stick',]},
{legion:1,weapons:['spear']}] ;

const weapons2 =['sword','spear'];

function equipWeapons(weapons){
    return (hindu)=>{

        const  newHindu = {...hindu};            
        newHindu.weapons = newHindu.weapons.concat(weapons);
                              
            
         return newHindu;
    }
}

function disEquipWeapons(hindu){
    newHindu = {...hindu}
    newHindu.weapons = []
    return newHindu
}    

function isLegion(legionNum){
        return (hindu) =>{
          return   hindu.legion == legionNum;
        }
    }

     
 const equipWeaponLeg26 = equipWeapons(weapons2) ;
 const isLegion26 = isLegion(26);

 const createLegion26 = compose(
                    Filter(isLegion26),
                    Map(disEquipWeapons),
                    Map(equipWeaponLeg26)
                    )

console.log(createLegion26(persons)) 

///// quest 5 ////
const persons = [{name: 'Akarsh',age:60,health:400,attack:40 },
{name: 'Chirag',age:23,health:420,attack:20},
{name: 'Reyansh',age:25,health:400,attack:45},
{name: 'Shaan',age:28,health:350,attack:60},
{name: 'Anzu',age:45,health:400,attack:30}]

function IsAgeLess30(hindu){
     return hindu.age < 30;
 }

function  combatRaiting(hindu){
    const newHindu = {...hindu,
                      combatRaiting: hindu.health * 1.2 + hindu.attack * 1.5};
    return  newHindu;
    
}

function raitingMore510(hindu){

    return 510 < hindu.combatRaiting;
}

function createGang(obj,hindu){
       const newobj =  {...obj,
                size:obj.size +1,
                sumCombatRaiting:obj.sumCombatRaiting + hindu.combatRaiting,
            };
       newobj.names.push(hindu.name) 
       return  newobj;       
       }

function averageRaiting(gang){
     const newGang = {...gang,
        averageRaiting: gang.sumCombatRaiting/gang.size};
     delete newGang.sumCombatRaiting;
    return newGang;
 }          

 const result = compose(Filter(IsAgeLess30),
                            Map(combatRaiting),
                            Filter(raitingMore510),
                            Reduce(createGang,{number:6,size:0,names:[], sumCombatRaiting:0}),
                            averageRaiting
                            )(persons)
 console.log(result)
 ///// quest 6 //////                         




