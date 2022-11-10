
/*
1. Таблицу с `id="age-table"`.
2. Все элементы `label` внутри этой таблицы (их три).
3. Первый `td` в этой таблице (со словом «Age»).
4. Форму `form` с именем `name="search"`.
5. Первый `input` в этой форме.
6. Последний `input` в этой форме.
*/

// 1
const findTable = document.getElementById("age-table");
console.log(findTable);


// 2
const findElem = findTable.getElementsByTagName("label");
console.log(findElem);


// 3
const firstTd = findTable.getElementsByTagName("td")[0];
console.log(firstTd);


// 4
const findForm = document.getElementsByName("search")[0];
console.log(findForm);


// 5 
const firstInput = findForm.getElementsByTagName("input")[0];
console.log(firstInput);


// 6
const lastInput = findForm.getElementsByTagName("input")[findForm.length-1];
console.log(lastInput);

/* Что выведет код?
<script>
  let body = document.body;

  body.innerHTML = "<!--" + body.tagName + "-->";

  alert( body.firstChild.data ); // что выведет?
</script>

Выведет BODY как alert
*/