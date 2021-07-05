// salary 绩效等级

//A 12
//B 6
//C 3
//D 0
//const caculateBonus = () =>{

//}

//const caculateBonus  ;
let  caculateBonus = null;
//对象字面量 发钱的策略 
let  categories = {
    'S': (salary) => {
        return salary* 60
    },
    'A': (salary) => {
        return salary* 24
    },
    'B': (salary) => {
        return salary* 18
    },
    'C': (salary) => {
        return salary* 15
    },
    'D': (salary) => {
        return salary* 12
    }
}
//console.log(caculateBonus);
//计算过程
caculateBonus = (salary, type = 'c') => {
     let bounce = categories[type](salary)
     return bounce;
}
console.log(caculateBonus(20000,'B'));