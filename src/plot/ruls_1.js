import React from 'react';

export const notes = [[
    {
        title: "Добро пожаловать, герой",
        text: [
            {
                title: "Пролог",
                text: `Мир ООП - грязный и жестокий. Напротив же, мир функционального программирования предлагает 
                невиданные ранее возможности.
                Этот квест поможет тебе освоить функциональное программирование. 
                Тебе предстоит спасти жителей этого мира от грязных лап демона Мефисто, поработившего нагрешивших бедолаг.
                Место действий - "Функционилище" - последнее пристанище ООПешников. Прошу проходить, для тебя мы подготовили
                особый котел~`
            },
            {
                title: "Окно приветствия",
                text: <div><p>В начале некоторых уровней ты сможешь просмотреть полезную информацию по этому уровню: например, туториал к нему. Желаешь посмотреть еще раз? Не беда! Всю эту информацию ты сможешь найти в своём журнале</p>
                    <img className="image-flex" src={require("../../src/img/popup.jpeg")} /></div>
            },
            {
                title: "Левая панель",
                text: <div><p>На левой панели находится список квестов и переключатели между журналом и редактором кода. Ты можешь свободно переключаться между квестами, которые тебе доступны"</p>
                <img className="image-flex" src={require("../../src/img/leftpanel.jpeg")} /></div>
            },
            {
                title: "Квесты",
                text: <div><p>В редакторе кода ты можешь писать свой код. Чтобы запустить его, нажми кнопку 'Run code' или комбинацию ctrl+shift+z. Если задание выполнено правильно, разблокируется следующий квест. Запутался в коде? Нажми кнопку 'Reset'. После прохождения квеста появится кнопка NEXT LEVEL, как думаешь, что она делает?</p>
                    <img className="image-flex" src={require("../../src/img/codeditor.jpeg")} /></div>
            },
            {
                title: "Терминал",
                text: <div><p>Результат запуска твоего кода будет отображаться здесь. Также ты можешь очистить его с помощью нажатия кнопки 'Clear terminal'</p>
                    <img className="image-flex" src={require("../../src/img/terminal.jpeg")} /></div>
            },
            {
                title: "Чат",
                text: <div><p>В чате к тебе будут обращаться сюжетные персонажи. Также ты можешь запросить здесь подсказку. В режиме журнала чат недоступен.</p>
                    <img className="image-flex" src={require("../../src/img/chatbox.jpeg")} /></div>
            },
            {
                title: "Журнал",
                text: <div><p>Если будет нужна помощь, заглядывай в журнал. Здесь ты сможешь найти различные руководства и туториалы к уровням</p>
                    <img className="image-flex" src={require("../../src/img/journal.jpeg")} /></div>
            },
        ]
    },
    {
        title: "6 функциональных законов",
        text: [
            {
                title: "Не загрязняй функцию свою",
                text: `Функции, как и вы люди, хотят быть чистыми. И если функция чувствует что она стала грязной,
            она обязательно закидает тебя ошибками. Что же далает функцию грязной? Представьте,
            что вы - функция, и вокруг вас коробка (область видимости), а вокруг нее куча грязи.
            Если вы хотите взять что-то извне, вам нужно сходить за ним через грязь, и тоже самое,
            если вы хотите что-то снаружи изменить. И ведь все, чего вы хотите в этой жизне,
            это просто жить в коробке и никого не трогать. Когда вы кому-то нужны, они закинули вам какие то вещи,
            вы что-то с ними сделали и выкинули другой результат (новые вещи)`,
            },
            {
                title: "Делай функцию свою или первокласной или высшей",
                text: `Запомни раз и навсегда, есть 2 типа функций : одни хотят править,
            а другие хотят что бы правили ими.`,
            },
            {
                title: "Весь мир это функция, а мы в ней константы",
                text: `Все вокруг константы: ты, твои друзья, родственники. Представь если бы
            все твои друзья постоянно меняли имена и место жительства,
            смог бы ты запомнить все изменения? Нужен друг с другим именем?
            Не проблема, создай нового.`,
            },
            {
                title: "Лямбда всему голова",
                text: `Как я и говорил ранее, весь мир это функция, так вот, я не шутил. Функции везде,
            и они могут передавать друг другу значения - это операция карирования. Так вот, карирование -
            это как конвейер. По конвейеру едут данные, и в каждой функции (чем дальше едет конвейер)
            мы добавляем новые данные.`,
            },
            {
                title: "Рекурсия - лучшый друг программиста",
                text: `Забудь о циклах, вроде for и while!!! Зачем они тебе, если можно все заменить на рекурсию,
            и возможностей больше, и побочных еффектов можно избежать`,
            },
            {
                title: "Артефакты спасут мир",
                text: `Только истинный последователь сможет овладеть артефактом, который поможет ему
            в выполнении тысяч вселенских задач и спасении от нарушения функциональных грехов.
            А за легендой, однажды прийдет герой, который соберет все 3 артефакта и разобьет оковы
            с вечных рабов преисподней и подарит миру свободу`,
            },
        ]
    },
    {
        title: "Чистые функции",
        text: [
            {
                title: "Чистее некуда",
                text: `Чистой называют функцию которая является детерминированой и не имеет побочных еффектов.`,
            },
            {
                title: "Детерминированая?",
                text: `Детерминированой называеться функция, которая при одинаковом наборе входящих данных,
                Вернет одно и то же значение. Детерминированой является функция slice, в отличие от splice,
                ведь slice возвращает новое значение, а splice мутирует изначальный массив.`,
            },
            {
                title: "Побочные эффекты?",
                text: `Побочными эффектами функции называют взаимодействие функции с окружающим миром. 
                Функция без побочных эффектов может обращаться и изменять данные только внутри себя.`,
            },
        ]
    },
    {
        title: "Иммутабельность",
        text: [
            {
                title: "Иммутабельность",
                text: `Неизменяемым (Иммутабельным) называется объект, состояние которого не может быть изменено после 
                создания. Результатом любой модификации такого объекта всегда будет новый объект, при этом старый объект не изменится. `,
            },
            {
                title: "Иммутабельность в JS",
                text: `В JS для клонирования елементов предусмотрено несколько способов, например использовать const newObject = Object.assign({}, object), 
                или использовать spread оператор const newMass = [...mass]. Что-бы обезопасить себя от мутации, обьявляйте переменные при помощи const.`,
            },
            {
                title: "Лучшие методы",
                text: `Так же плохой практикой считается использование методов вроде splice, которые изменяют начальный массив. 
                Вместо них стоит использовать методы вроде filter, map, reduce, которые возращают новый обьект.`,
            },
        ]
    },
    
    {
        title: "Объединение в отряды",
        text: [
            {
                title: "Что-то про отряды",
                text: `Для большей эффективности, в плане боевой силы, индусы любят объединятся в отряды. В чём заключается эффективность,
                кажется, не знают даже сами индусы. Однако, они так лучше себя чувствуют на поле боя, так как при разбитии
                на отряды складывается иллюзия существования какой-то тактики или стратегии. На деле же вся стратегия заключается
                в том, что ты хардкодишь всех до смерти. Совет да смерть.`,
            },

        ]
    }

],
    [
        {
            title: "Filter. Что и как?",
            text: [
                {
                    title: "Причина использовать filter",
                    text: `Представте что у вас есть массив цифр, и вам нужно оставить в нем только четные.
                           Конечно можно перебирать масив в цыкле, смотреть на то какое число передано и добавлять в новый массив если оно четное(
                           Грустно, не правда ли? Но бородатые дядьки постарались, и придумали filter.`,
                },
                {
                    title: "На что способен filter",
                    text: `Всякий раз когда вам надо отфильтровать массив в JavaScript — встроенный метод для отфильтровки вашего массива это хороший выбор. 
                    filter() даёт вам сделать callback для каждого элемента и вернуть отфильтрованный массив.
                    filter() выполняет callback и проверяет возвращаемое значение. Если значение верное,
                     то оно будет положено в новый массив, если же нет, то оно будет из него исключено.`,
                },
                {
                    title: "Что засунуть в callback",
                    text: `В первой главе вы писали чистые функции, которые принимают значение и возращают true или false, например isBlack.
                            Именно такие ЧИСТЫЕ функции нужно пихать в filter.
                            Также обратите внимание на то, что filter() не трогает существующий массив, он будет возвращать только новый отфильтрованный массив каждый раз.`,
                }
            ]
        },
        {
            title: "Map. Просто и со вкусом",
            text: [
                {
                    title: "Причина использовать map",
                    text: `Когда мы учили filter, мы создали массив с четными числами, а теперь представте что вам их нужно зделать не четными, прибавить 1.
                           Так, ну мы можем в цыкле for, пройтись по старому масиву и к кажному елементу сделать + 1. Впринцыпе да, мы можем, но это будет
                           смотреться не очень красиво и громостко. Намного проще и понятнее написать 1 строчку с методом map.`,
                },
                {
                    title: "На что способен map",
                    text: `map() берет callback и пускает его по всем элементам массива, но то, что делает его уникальным — это то
                         что он генерирует новый массив, основываясь на существующем массиве. В новый массив попадут значения которые возращает callback
                         принимая каждый елемент массива.`,
                },
                {
                    title: "Что засунуть в callback",
                    text: `В первой главе вы писали чистые функции, которые принимают значение и возращают другое, новое значение, например perimeter.
                            Именно такие ЧИСТЫЕ функции нужно пихать в map.
                            Как и filter(), map() возвращает массив. Указанный callback для map() изменит элементы массива и сохранит их в новый массив по завершении того, как массив будет возвращен как отmapенный массив.`,
                }
            ]
        },
        {
            title: "Reduce, да это жестка",
            text: [
                {
                    title: "Причина использовать reduce",
                    text: `Давайте возьмем самую банальную задачу, получить суму всех чисел в массиве. Ну тут все просто, делаем
                           цикл for и прибаляем каждый елемент массыва в переменную summ. Казалось-бы, куда проще,
                           но тут в игру вступает reduce.`,
                },
                {
                    title: "На что способен reduce",
                    text: `Как можно уже предположить по названию, этот метод используется для того, чтобы сократить массив в одно простое значение.
                    reduce() берет callback, как и любая функция о которой мы говорили. Внутри этого callback мы берем два аргумента sum и elem. sum это последнее вернувшееся значение функции reduce(). Для примера, изначально значение sum будет равно 0, затем когда запустится callback на первом элементе, он прибавит elem к sum и возвратит значение. На второй итерации sum значение будет — первый elem + 0, на второй итерации 0 + первый elem + второй elem.`,
                },
                {
                    title: "Что засунуть в callback",
                    text: `В первой главе вы писали чистые функции, которые принимают два значение и возращают одно, например add.
                            Таких функций можна придумать множество.
                            `,
                }
            ]
        },
    ]
]