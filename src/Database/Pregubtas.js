export const preguntas = [
    {
      id: 1,
      question: "¿Cuál es la salida de este código?",
      code: "console.log(typeof NaN)",
      answers: [
        "undefined",
        "NaN",
        "string",
        "number"
      ],
      correctAnswer: 3
    },
    {
      id: 2,
      question: "¿Cuál es el resultado de la siguiente expresión?",
      code: "3 + 2 + '7'",
      answers: [
        "12",
        "327",
        "57",
        "NaN"
      ],
      correctAnswer: 2
    },
    {
       id: 3,
      question: "¿Cuál es la salida de este código?",
      code: "let a = 10;\nlet b = () => {\n  console.log(this.a);\n}\nb();",
    answers: [
        "undefined",
        "null",
        "10",
        "ReferenceError"
      ],
      correctAnswer: 0
    },
    {
      id: 4,
      question: "¿Cuál es el resultado de la siguiente expresión?",
      code: "1 + 2 + '3' + 4 + 5",
      answers: [
        "'3345'",
        "15",
        "NaN",
        "Error"
      ],
      correctAnswer: 0
    },
    {
      id: 5,
      question: "¿Cuál es la salida de este código?",
      code: "for (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 1);\n}",
      answers: [
        "0 1 2",
        "3 3 3",
        "1 2 3",
        "2 1 0"
      ],
      correctAnswer: 1
    },
    {
      id: 6,
      question: "¿Cuál es el resultado de la siguiente expresión?",
      code: "2 > '3'",
      answers: [
        "true",
        "false",
        "undefined",
        "NaN"
      ],
      correctAnswer: 1
    },
    {
      id: 7,
      question: "¿Cuál es la salida de este código?",
      code: "const arr = [1, 2, 3, 4, 5];\nconst [x, y, ...rest] = arr;\nconsole.log(rest.length);",
      answers: [
        "0",
        "1",
        "2",
        "3"
      ],
      correctAnswer: 3
    },
    {
      id: 8,
      question: "¿Cuál es el resultado de la siguiente expresión?",
      code: "'2' + 3 * 4",
      answers: [
        "212",
        "20",
        "26",
        "Error"
      ],
      correctAnswer: 0
    },
    {
      id: 9,
      question: "¿Cuál es la salida de este código?",
      code: "const arr = [1, 2, 3];\narr[10] = 10;\nconsole.log(arr.length);",
      answers: [
        "3",
        "10",
        "11",
        "undefined"
      ],
      correctAnswer: 2
    },
    {
      id: 11,
      question: "¿Cuál es la salida de este código?",
      code: "console.log(0.1 + 0.2 === 0.3)",
      answers: [
        "true",
        "false",
        "undefined",
        "NaN"
      ],
      correctAnswer: 1
    },
    {
      id: 12,
      question: "¿Cuál es el resultado de la siguiente expresión?",
      code: "[] + []",
      answers: [
        "[]",
        "''",
        "undefined",
        "NaN"
      ],
      correctAnswer: 1
    },
    {
      id: 13,
      question: "¿Cuál es la salida de este código?",
      code: "const obj1 = {a: 'foo'};\nconst obj2 = {b: 'bar'};\nconst obj3 = {c: 'baz'};\nconst obj4 = Object.assign(obj1, obj2, obj3);\nconsole.log(obj4);",
      answers: [
        "{a: 'foo', b: 'bar', c: 'baz'}",
        "{b: 'bar', c: 'baz'}",
        "{a: 'foo', b: 'bar'}",
        "{c: 'baz'}"
      ],
      correctAnswer: 0
    },
    {
      id: 14,
      question: "¿Cuál es el resultado de la siguiente expresión?",
      code: "'foo' instanceof String",
      answers: [
        "true",
        "false",
        "null",
        "undefined"
      ],
      correctAnswer: 1
    },
    {
      id: 15,
      question: "¿Cuál es la salida de este código?",
      code: "const arr1 = [1, 2, 3];\nconst arr2 = [4, 5, 6];\nconst arr3 = [...arr1, ...arr2];\nconsole.log(arr3);",
      answers: [
        "[1, 2, 3, 4, 5, 6]",
        "[[1, 2, 3], [4, 5, 6]]",
        "[[1, 2, 3], 4, 5, 6]",
        "[1, 2, 3, [4, 5, 6]]"
      ],
      correctAnswer: 0
    },
    {
      id: 16,
      question: "¿Cuál es el resultado de la siguiente expresión?",
      code: "parseInt('0.1')",
      answers: [
        "0.1",
        "1",
        "0",
        "Error"
      ],
      correctAnswer: 2
    },
    {
      id: 17,
      question: "¿Cuál es la salida de este código?",
      code: "const a = {x: 1};\nconst b = {y: 2};\nconst c = Object.assign({}, a, b);\nconsole.log(c);",
      answers: [
        "{x: 1}",
        "{y: 2}",
        "{x: 1, y: 2}",
        "{}"
      ],
      correctAnswer: 2
    },
    {
      id: 18,
      question: "¿Cuál es el resultado de la siguiente expresión?",
      code: "'foo' + new String('bar')",
      answers: [
        "'foobar'",
        "'barfoo'",
        "TypeError",
        "NaN"
      ],
      correctAnswer: 0
    },
    {
      id: 19,
      question: "¿Cuál es la salida de este código?",
      code: "const obj = {a: 1};\nfunction foo(o) {\n o = {b: 2};\n}\nfoo(obj);\nconsole.log(obj);",
      answers: [
        "{a: 1}",
        "{b: 2}",
        "{}",
        "undefined"
      ],
      correctAnswer: 0
    },
    {
      id: 20,
      question: "¿Cuál es el resultado de la siguiente expresión?",
      code: "typeof null",
      answers: [
        "'object'",
        "'null'",
        "'undefined'",
        "TypeError"
      ],
      correctAnswer: 0
    },
    {
      id: 21,
      question: "¿Cuál es la salida de este código?",
      code: "const arr1 = [1, 2, 3];\nconst arr2 = [4, 5, 6];\narr1.push(...arr2);\nconsole.log(arr1);",
    answers: [
        "[1, 2, 3, 4, 5, 6]",
        "[[1, 2, 3], [4, 5, 6]]",
        "[[1, 2, 3], 4, 5, 6]",
        "[1, 2, 3, [4, 5, 6]]"
      ],
      correctAnswer: 0
    },
    {
      id: 22,
      question: "¿Cuál es el resultado de la siguiente expresión?",
      code: "'foo' > 'bar'",
      answers: [
        "true",
        "false",
        "undefined",
        "NaN"
      ],
      correctAnswer: 0
    },
    {
      id: 23,
      question: "¿Cuál es la salida de este código?",
       code: "const obj = {a: 1};\nfunction foo(o) {\n o.a = 2;\n}\nfoo(obj);\nconsole.log(obj);",
      answers: [
        "{a: 1}",
        "{a: 2}",
        "{}",
        "undefined"
      ],
    correctAnswer: 1
    },
    {
    id: 24,
    question: "¿Cuál es el resultado de la siguiente expresión?",
    code: "2 + true",
      answers: [
        "3",
        "2",
        "true",
        "Error"
      ],
      correctAnswer: 0
    },
    {
    id: 25,
    question: "¿Cuál es la salida de este código?",
    code: "const arr1 = [1, 2, 3];\nconst arr2 = [4, 5, 6];\nconst arr3 = [7, 8, 9];\nconst arr4 = [].concat(arr1, arr2, arr3);\nconsole.log(arr4);",
    answers: [
        "[1, 2, 3, 4, 5, 6, 7, 8, 9]",
        "[[1, 2, 3], [4, 5, 6], [7, 8, 9]]",
        "[[1, 2, 3], 4, 5, 6, [7, 8, 9]]",
        "[1, 2, 3, [4, 5, 6], 7, 8, 9]"
      ],
    correctAnswer: 0
    },
    {
    id: 26,
    question: "¿Cuál es el resultado de la siguiente expresión?",
    code: "'1' - - '1'",
    answers: [
        "0",
        "2",
        "'11'",
        "NaN"
      ],
    correctAnswer: 1
    },
    {
    id: 27,
    question: "¿Cuál es la salida de este código?",
    code: "console.log(typeof [][Symbol.iterator]);",
    answers: [
        "undefined",
        "'array'",
        "'object'",
        "'function'"
      ],
    correctAnswer: 3
    },
    {
    id: 28,
    question: "¿Cuál es el resultado de la siguiente expresión?",
    code: "[1, 2, 3].map(num => num * 2);",
    answers: [
        "[2, 4, 6]",
        "[1, 2, 3, 1, 2, 3]",
        "[2, 2, 2]",
        "[1, 4, 9]"
      ],
    correctAnswer: 0
    },
    {
    id: 29,
    question: "¿Cuál es la salida de este código?",
    code: "let a = 10;\nlet b = () => {\n console.log(this.a);\n}\nlet c = {a: 5, b: b};\nc.b();",
    answers:[
        "undefined",
        "null",
        "10",
        "5"
      ],
    correctAnswer: 0
    },
    {
    id: 30,
    question: "¿Cuál es el resultado de la siguiente expresión?",
    code: "true + false",
    answers: [
        "1",
        "0",
        "'truefalse'",
        "Error"
      ],
    correctAnswer: 0
    }
  ];