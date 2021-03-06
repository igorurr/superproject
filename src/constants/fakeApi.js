export const users  = [
  {
    login: 'vasua',
    password: '123',
    name: 'П1',
    session: 's5d4g5sg456dg5dfg',
    group: {
      id: 0,
      name: 'Г1'
    },
    data: {
      fieldg1: 'fieldg1 a'
    }
  },
  {
    login: 'petua',
    password: '123',
    name: 'П2',
    session: '45gdfgs5hj346hj4d',
    group: {
      id: 1,
      name: 'Г1.1'
    },
    data: {
      fieldg1: 'fieldg1 b',
      fieldg11: 'fieldg11'
    }
  },
  {
    login: 'fedua',
    password: '123',
    name: 'П3',
    session: 'df5sgfsd4fy7jszhg',
    group: {
      id: 2,
      name: 'Г2'
    },
    data: {
      fieldg2: 'fieldg2'
    }
  }
];

export const contentPage2  = [
  {
    id: 0,
    parent: 3,
    icon: 'https://pp.userapi.com/c320328/v320328522/9f6a/BBM05TSlTbo.jpg?ava=1',
    header: '0 post',
    content: 'Последние несколько лет функциональное программирование переживает свой подъём. Такие языки, как Clojure, Scala и Haskell, дали возможность разработчикам, привыкшим писать в императивном стиле, использовать интересные техники, которые в определённых случаях могут приносить значительные преимущества. Цель Immutable.js — привнести эти преимущества в JavaScript с помощью простого и понятного API. В этом обзоре мы познакомимся с некоторыми из них и научимся использовать их в своих проектах.'
  },
  {
    id: 1,
    parent: 3,
    icon: 'https://pp.userapi.com/c320328/v320328522/9f6a/BBM05TSlTbo.jpg?ava=1',
    header: '1 post',
    content: 'Несмотря на то, что функциональное программирование понятие гораздо более широкое, чем просто иммутабельность данных, многие функциональные языки уделяют особое внимание именно этому аспекту. Некоторые, такие как Clean и Haskell, на этапе компиляции накладывают строгие ограничения на то, как и когда данные могут быть мутированы. Это отталкивает многих разработчиков. Для тех же, кто справился с волной первоначального шока, начинают появляться новые паттерны и новые способы решения проблем. В частности, структуры данных — это ключевой момент, вызывающий трудности у тех, кто только начинает знакомиться с функциональной парадигмой.'
  },
  {
    id: 2,
    parent: 0,
    icon: 'https://pp.userapi.com/c320328/v320328522/9f6a/BBM05TSlTbo.jpg?ava=1',
    header: '2 post',
    content: 'В конечном итоге вопрос иммутабельных и мутабельных структур данных сводится к чистой математике. Анализ алгоритмов подскажет, какие структуры данных лучше подойдут для решения тех или иных типов задач. Поддержка языком, однако, может облегчить использование и реализацию этих структур данных. JavaScript, чьим достоинством является мультипарадигмальность, хорошо подходит и для мутабельных, и для иммутабельных структур данных. В других языках, таких как C, можно реализовывать иммутабельные структуры, однако, их использование может быть не слишком удобным из-за ограничений языка.'
  },
  {
    id: 3,
    icon: 'https://pp.userapi.com/c320328/v320328522/9f6a/BBM05TSlTbo.jpg?ava=1',
    header: '3 post',
    content: 'Что же такое мутация? Мутация — это изменение существующих данных или структуры, которая их в себе хранит. Иммутабельность же, в свою очередь, предполагает создание копии существующих данных или структуры, когда необходимы изменения, и добавление этих изменений туда.'
  },
  {
    id: 4,
    parent: 6,
    icon: 'https://pp.userapi.com/c320328/v320328522/9f6a/BBM05TSlTbo.jpg?ava=1',
    header: '4 post',
    content: 'Каковы же основные принципы функциональных структур данных, и, что особенно важно, что делает иммутабельность таким значимым фактором? В каких случаях это можно использовать? Эти вопросы мы рассмотрим дальше.'
  },
  {
    id: 5,
    icon: 'https://pp.userapi.com/c627929/v627929124/c551/f_vrSAlaKiI.jpg?ava=1',
    header: '5 post',
    content: 'Важно: вы могли не знать об этом, но возможно, вы уже используете некоторые конструкции функционального программирования в своём JavaScript-коде. Например, Array.map() применяет переданную функцию на каждом элементе массива и возвращает вам новый массив, не модифицируя существующий. Функциональное программирование как парадигма поощряет использование функций первого порядка, которые могут передаваться в алгоритм и возвращать новую версию существующих данных. В частности, именно это и делает Array.map(). Такой подход к написанию кода предполагает использование композиции - ещё один базовый концепт функционального программирования.'
  },
  {
    id: 6,
    icon: 'https://pp.userapi.com/c320328/v320328522/9f6a/BBM05TSlTbo.jpg?ava=1',
    header: '6 post',
    content: 'За функциональным программированием стоит несколько ключевых идей. Надеюсь, следуя далее по статье, вы поймёте, как эти идеи находят отражение в Immutable.js и других функциональных библиотеках.'
  },
  {
    id: 7,
    parent: 4,
    icon: 'https://pp.userapi.com/c320328/v320328522/9f6a/BBM05TSlTbo.jpg?ava=1',
    header: '7 post',
    content: 'Иммутабельность предполагает, что после создания данные или структура, которая их содержит, не могут быть изменены. На практике существует два типа мутаций (изменений) — видимые и невидимые. Видимые мутации — это мутации, изменяющие данные или структуру, содержащую эти данные, способом, который контролируется внешним наблюдателем через API. Невидимые мутации не могут контролироваться через API (хорошим примером являются кэширующие структуры данных). В некотором смысле невидимые изменения могут рассматриваться как сайд-эффекты (side-effects) (мы рассмотрим этот аспект и его значение чуть позже). В контексте функционального программирования обычно запрещены оба вида модификаций: не только данные являются иммутабельными по умолчанию, но и структуры данных не могут быть изменены после создания.'
  },
  {
    id: 8,
    parent: 7,
    icon: 'https://pp.userapi.com/c320328/v320328522/9f6a/BBM05TSlTbo.jpg?ava=1',
    header: '8 post',
    content: 'Иногда во время выполнения JavaScript извлекает из этого преимущества: во время загрузки или во время JIT (Just-In-Time) компиляции упрощается сравнение строк (обычно между строковыми литералами), превращаясь в простое сравнение ссылок. Вы можете сами увидеть, как браузер делает это с помощью теста JSPerf, а также сделать много других простых проверок.'
  },
  {
    id: 9,
    parent: 8,
    icon: 'https://pp.userapi.com/c320328/v320328522/9f6a/BBM05TSlTbo.jpg?ava=1',
    header: '9 post',
    content: 'JavaScript — это динамический слабо типизированный язык (или нетипизированный, если вы знакомы с теорией языков программирования). Из-за этого временами трудно обеспечить наличие определённых ограничений на объекты и данные, и здесь нам на помощь приходит Object.freeze(). Вызов этого метода делает все свойства объекта неизменяемыми. Попытка присвоить значение либо просто упадёт, либо выбросит ошибку (в strict mode). Если вы хотите создать иммутабельный объект, то вызов Object.freeze() после создания объекта может вам помочь.'
  }
];