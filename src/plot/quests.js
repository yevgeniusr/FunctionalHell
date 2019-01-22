export const quests = [
    {
        title: "Кайся глупец",
        quests: 
        [
            {
                title: "Корова функционист",
                text: `АД, 2019 год н.э., вечер. Вы оказались в месте, отдалённо напоминающий приватный дом в Соловках. Перед вашим взором предстали   разрушенное имущество, злая корова и грустный индус.

                Индус просит вас подоить корову. Корова категорически против объектно-ориентированной подойки. Вы решаете подоить её функциональным путём.`,
                regexps: [/(return)/g, /(function)/g, /(cow)/g, /(milk)/g, /(milkACow)/g],
                regexpsNone: [/(for)/g, /(while)/g, /(var)/g, /(map)/g, /(reduce)/g, /(filter)/g,  /(filter)/g,],
                code: `//Здраствуй Брат! Клята корова хочет функциональную подойку, помоги братику индусу.
//Напишы функцию milkACow  которая принимает корову и возрощает подоеную корову.

var cow = {
    milk: 10
}

function milkACow(cow) {
    cow.milk = 0
    return cow
}
                       `,
                hints: [
                    "Функция не должна изменять внешние переменные",
                    "Попробуй как то скопировать обект коровы"
                ],
                test: {
                    code: `let valid = true;
                             if(JSON.stringify(milkACow(cow)) !== JSON.stringify({milk: 0})){valid = false};
                             if(cow.milk !== 10){valid = false};
                             if(JSON.stringify(milkACow({milk: 33})) !== JSON.stringify({milk: 0})){valid = false};
                            valid === true`,
                    answer: `
function milkACow(cow) {
    let newcow = Object.assign({}, cow);
    newcow.milk = 0;
    return newcow;
}
`
                }
            },
            {
                title: "Множественная дойка",
                text: `Вы довольны, корова подоена, но индус всё ещё грустный. Оказывается, одиночной функции подойки коровы ему недостаточно, так как тот желает поделиться молоком с другими индусами. К сожалению, корова  может выдержать только ограниченное количество подоёк. Тем не менее, индус настаивает на возможности множественной подойки.`,
                regexps: [/(return)/g, /(function)/g, /(cow)/g, /(milk)/g, /(milkACow)/g],
                regexpsNone: [/(for)/g, /(while)/g, /(var)/g, /(map)/g, /(reduce)/g, /(filter)/g,  /(filter)/g,],
                code: `//Брат, да ты крутой, как ты воще умудрился попасть в функциональный ад?
//Мне пришо много заказов на молоко, напишы шункцию milkACow которая будет доить корову
//на определенное количество молока, и возрощать корову когда у нее закончиться молоко. Придержывайся 2 заповеде,
//я её толком не знаю но попробуй использувать высшую шункцию и первокласную.
                
var cow = {
    milk: 10
}
                
function milkACow(cow, mass) {
    cow.milk -= mass
    if (cow.milk <= 0) {
        return cow
    }
}`,
                test: {
                    code: `let valid = true;
                            let cow2 = {milk: 10}
                                let myCow = milkACow(cow2)
                                if(JSON.stringify(myCow(4)) !== JSON.stringify(undefined)){valid = false};
                                if(JSON.stringify(myCow(4)) !== JSON.stringify(undefined)){valid = false};
                                if(JSON.stringify(myCow(4)) !== JSON.stringify({milk: 0})){valid = false};
                                if(cow2.milk !== 10){valid = false};
                            valid === true`,
                    answer:`
function milkACow(cow) {
    let newcow = Object.assign({}, cow);
    return function(int) {
        if (int >= newcow.milk) {
            newcow.milk = 0
            return newcow;
        }
    newcow.milk -= int   
    }
}`
                }
            },
            {
                title: "Адская экосистема",
                text: `Корова восхищена вашими навыками функционального программирования, а индус и не думает вас отпускать. Оказывается, функции множественной подойки ему тоже недостаточно, ведь у всего индусского поселения закончились запасы сыра. Корова устало вздыхает. Вы молча задаётесь вопросом, откуда здесь вообще индус и корова, и почему она даёт красное молоко.`,
                regexps: [/(return)/g, /(function)/g, /(cow)/g, /(milk)/g, /(milkACow)/g],
                regexpsNone: [/(for)/g, /(while)/g, /(var)/g, /(map)/g, /(reduce)/g, /(filter)/g,  /(filter)/g,],
                code: `//Мои братья индусы хотят сырууу. Помоги нам сделать сыр,
//а я пойду його продавать на базар. Напишы шункцию milkACow которая принимает корову,
//доит её по заказу клиентов и когда молоко закончиться верни масив сыров.
//Попробуй здалать её такой же крутой как о прошлую .
//формула сыру: milk / 2.     

var cow = {
    milk: 10
}

let cheeses = []

function milkACow(cow, mass) {
    cow.milk -= mass
    cheeses.push(maas / 2)
    if (cow.milk <= 0) {
        return cheeses
    }
}
`,
                test: {
                    code: `let valid = true;
                    let cow2 = {milk: 10}
                        let myCow = milkACow(cow2)
                        if(JSON.stringify(myCow(4)) !== JSON.stringify(undefined)){valid = false};
                        if(JSON.stringify(myCow(4)) !== JSON.stringify(undefined)){valid = false};
                        if(JSON.stringify(myCow(4)) !== JSON.stringify([2, 2, 1])){valid = false};
                        if(cow2.milk !== 10){valid = false};
                    valid === true`,
                    answer: `function milkACow(cow) {
                        let newcow = Object.assign({}, cow);
                        let cheeses = []
                        return function(int) {
                            if (int >= newcow.milk) {
                                cheeses.push(newcow.milk / 2)
                                newcow.milk = 0
                                return cheeses;
                            }
                        newcow.milk -= int
                        cheeses.push(int / 2)   
                        }
                    }
                    `
                }
            },
            {
                title: "Звезда спасения индусов",
                text: `Вы оказались в месте, где кроме индуса и коровы вас окружает ещё и изобилие молока и сыра. На сие чудо начинают сходиться другие индусы. У вашего индуса появляется идея начать продавать сыр другим индусам, однако для этого его нужно сначала свесить. Множество индусских глаз теперь сфокусировано на вас.`,
                regexps: [/(return)/g, /(reduce)/g],
                code: "//Hello may frend, my boss please me to create functional summ thet will be calculate\n" +
                    "//mass of stones. I must to get to number of integer and returne summ.\n" +
                    "//boss say thet i must read first lav\n" +
                    "let stonesMass = [1, 3, 5]\n" +
                    "\n" +
                    "function calculateSumm(stones) {\n" +
                    "    //???\n" +
                    "}",
                hints: [
                    "hint sample",
                    "hint sample2"
                ],
                test: {
                    code: "calculateSumm(stonesMass)",
                    answer: "stonesMass.reduce((a,b) => {return a+b})"
                }
            },
            {
                title: "Легенда о великом ублажателе коров",
                text: `Вы и ваш индусский друг смогли наладить производство сыра, после чего стали самыми успешными предприятелями в индусской деревне в Аду. Кажется, вами восхищается даже Мефистофель. На вырученные деньги вы решаете приобрести ещё несколько коров. Теперь вам каким-то образом нужно вести учёт полученного молока и сыра. Вся робота опять легла на вас. Корова понимающе вздыхает.`,
                regexps: [/(return)/g, /(reduce)/g],
                code: `//Brat.. hey... my boss told me create a function sumRange
                    var acc = 0;
                    for (var i = 1; i <= 10; ++i)
                        acc += i;
                    console.log(acc);`,
                hints: [
                    "hint sample",
                    "hint sample2"
                ],
                test: {
                    code: "sumRange(1, 10, 0)",
                    answer: `function sumRange(start, end, acc) {
                        if (start > end)
                            return acc;
                        return sumRange(start + 1, end, acc + start)
                    }`
                }
            },
            {
                title: "Начало легенды",
                text: `Производство процветает, вырученные деньги вы решили вложить в развитие деревни, после чего она смогла гордо называться посёлком городского типа. Вас выбирают главой, однако у вашего индусского брата опять возникла проблема. Ему нужно посчитать общую массу сыра, который дают коровы, дающие больше чем 5 килограммов сыра. Вы в замешательстве, но ваш брат и не думает посвящать вас в детали. Вместо этого он даёт вам какие-то таинственные вещички, намекая, что используя их вы сможете решить эту задачу быстрее и эффективнее. Вы решаетесь использовать эти вещички.`,
                regexps: [/(return)/g, /(reduce)/g],
                code: "//Hello may frend, my boss please me to create functional summ thet will be calculate\n" +
                    "//mass of stones. I must to get to number of integer and returne summ.\n" +
                    "//boss say thet i must read first lav\n" +
                    "let stonesMass = [1, 3, 5]\n" +
                    "\n" +
                    "function calculateSumm(stones) {\n" +
                    "    //???\n" +
                    "}",
                hints: [
                    "hint sample",
                    "hint sample2"
                ],
                test: {
                    code: "calculateSumm(stonesMass)",
                    answer: "stonesMass.reduce((a,b) => {return a+b})"
                }
            },
        ]
    },
    {
        title: "2 глава",
        quests: 
        [
            {
                title: "квест 1 с2",
                text: "задание на квест 1 с2",
                regexps: "",
                code: "",
                test: ""
            },
            {
                title: "квест 2 с2",
                text: "задание на квест 2 с2",
                regexps: "",
                code: "",
                test: ""
            },
            {
                title: "квест 3 с2",
                text: "задание на квест 3 с2",
                regexps: "",
                code: "",
                test: ""
            }
        ]
    }
]