let witch = {
  health: 70,
  apples: 0,
  attractive: 0,
};

let umnik = {
  apples: 5,
  name: "Умник"
};

let vorchun = {
  apples: 10,
  name: 'Ворчун'
};

let veselchak = {
  apples: 15,
  name: 'Весельчак'
};

let sonya = {
  apples: 20,
  name: 'Соня'
};

let skromnik = {
  apples: 25,
  name: 'Скромник'
};

let chihun = {
  apples: 30,
  name: 'Чихун'
};

let prostak = {
  apples: 35,
  name: 'Простак'
};

alert(
  "Жила - была старая и не красивая ведьма. И хотела она стать столь прекрасной как Белоснежка. Но душа ведьмы была чиста и добра. Не хотела она причиниь вред девушке. Белоснежка предложила ведьме выход. Заработать у гномов яблочки молодильные отгадав загадку. А яблочками расплатиться в клинике пластической хирургии и стать прекрасной принцессой ... "
);
alert("Инструкция: \r\n Отвечать на каждую загадку каждого гнома можно только 1н раз.")

function show() {
  alert(` Вы собрали - ${witch.apples} яблок \r\n Ваше здоровье - ${witch.health} \r\n Уровень привлекательности - ${witch.attractive} `);
  if (witch.attractive == 100) {
    alert("Поздравляю!!! Теперь ужасная ведьма стала прекрасной принцессой")
  }
  else if (witch.health <= 0 || witch.apples < 140) {
    alert("Не достаточно яблок, или ваше здоровье исчерпано. Вы проиграли!")
  }
}

function clinic() {
  let operation = prompt(
    "Что желаете изменить? \r\n 1. Пластика носа - 5 яблок \r\n 2. Изменение разреза глаз - 10 яблок \r\n 3. Пластика скул - 15 яблок \r\n 4. Увеличение губ 20 - яблок \r\n 5. Уколы ботокса 25 яблок \r\n 6. Липосакция - 30 яблок \r\n 7. Увеличение груди - 35 яблок"
  );
  switch (operation) {
    case "1":
      if (witch.apples < 5) {
        alert("Недостаточно яблок для данной операции!");
      } else {
        witch.apples -= 5;
        witch.attractive += 10;
        alert("Мадам, у вас прекрасный нос \r\n + 10 привлекательности");
      }

      break;

    case "2":
      if (witch.apples < 10) {
        alert("Недостаточно яблок для данной операции!");
      } else {
        witch.apples -= 10;
        witch.attractive += 10;
        alert("Мадам, у вас красивые глаза \r\n + 10 привлекательности");
      }
      break;

    case "3":
      if (witch.apples < 15) {
        alert("Недостаточно яблок для данной операции!");
      } else {
        witch.apples -= 15;
        witch.attractive += 10;
        alert("Мадам, у вас очень милые щечки \r\n + 10 привлекательности");
      }
      break;

    case "4":
      if (witch.apples < 20) {
        alert("Недостаточно яблок для данной операции!");
      } else {
        witch.apples -= 20;
        witch.attractive += 10;
        alert("Мадам, да у вас губы Лободы \r\n + 10 привлекательности");
      }
      break;

    case "5":
      if (witch.apples < 25) {
        alert("Недостаточно яблок для данной операции!");
      } else {
        witch.apples -= 25;
        witch.attractive += 20;
        alert("Девушка, а сколько вам лет? \r\n + 20 привлекательности");
      }
      break;

    case "6":
      if (witch.apples < 30) {
        alert("Недостаточно яблок для данной операции!");
      } else {
        witch.apples -= 30;
        witch.attractive += 20;
        alert("Девушка, вы так стройны \r\n + 20 привлекательности");
      }
      break;

    case "7":
      if (witch.apples < 35) {
        alert("Недостаточно яблок для данной операции!");
      } else {
        witch.apples -= 35;
        witch.attractive += 20;
        alert("О прекрасная принцесса, я покарен на век! Будь моей женой! \r\n + 20 привлекательности");
      }
      break;
  }
}

function riddle1(umnik) {
  let answer = prompt('Не ездок, а со шпорами, Не будильник, а всех будит.', '1. Петух. 2. Рыцарь');
  if (answer == 1) {
    alert("Да ты сообразительная, бабуля! Держи" + umnik.apples + "яблочек");
    witch.apples += umnik.apples;
  }
  else {
    witch.health -= 10;
    alert("К сожалению это не правильный ответ \r\n - 10 здоровья");
  }
}

function riddle2(vorchun) {
  let answer = prompt('Она красива и мила, А имя ей от слова "зола".', '1. Белоснежка. 2. Золушка');
  if (answer == 2) {
    alert("Да ты сообразительная, бабуля! Держи" + vorchun.apples + "яблочек");
    witch.apples += vorchun.apples;
  }
  else {
    witch.health -= 10;
    alert("К сожалению это не правильный ответ \r\n - 10 здоровья");
  }
}

function riddle3(veselchak) {
  let answer = prompt('Ношу их много лет, А счету им не знаю.', '1. Туфли. 2. Волосы');
  if (answer == 2) {
    alert("Да ты сообразительная, бабуля! Держи" + veselchak.apples + "яблочек");
    witch.apples += veselchak.apples;
  }
  else {
    witch.health -= 10;
    alert("К сожалению это не правильный ответ \r\n - 10 здоровья");
  }
}

function riddle4(sonya) {
  let answer = prompt('Три глаза - три приказа, Красный - самый опасный.', '1. Светофор. 2. Циклоп');
  if (answer == 1) {
    alert("Да ты сообразительная, бабуля! Держи " + sonya.apples + "яблочек");
    witch.apples += sonya.apples;
  }
  else {
    witch.health -= 10;
    alert("К сожалению это не правильный ответ \r\n - 10 здоровья");
  }
}

function riddle5(skromnik) {
  let answer = prompt('Если б не было его, Не сказал бы ничего.', '1. Язык. 2. Болтун');
  if (answer == 1) {
    alert("Да ты сообразительная, бабуля! Держи " + skromnik.apples + "яблочек");
    witch.apples += skromnik.apples;
  }
  else {
    witch.health -= 10;
    alert("К сожалению это не правильный ответ \r\n - 10 здоровья");
  }
}

function riddle6(chihun) {
  let answer = prompt('Кто приходит, кто уходит, Все ее за ручку водят.', '1. Дверь. 2. Маленькая девочка');
  if (answer == 1) {
    alert("Да ты сообразительная, бабуля! Держи " + chihun.apples + "яблочек");
    witch.apples += chihun.apples;
  }
  else {
    witch.health -= 10;
    alert("К сожалению это не правильный ответ \r\n - 10 здоровья");
  }
}

function riddle7(prostak) {
  let answer = prompt('Кругом вода, а с питьем беда.', '1. Похмелье. 2. Море');
  if (answer == 2) {
    alert("Да ты сообразительная, бабуля! Держи " + prostak.apples + "яблочек");
    witch.apples += prostak.apples;
    alert("Поздравляю!!! Все загадки загаданы. Отправляйся в клинику для исполнения заветной мечты.")
  }
  else {
    witch.health -= 10;
    alert("К сожалению это не правильный ответ \r\n - 10 здоровья");
  }
}


