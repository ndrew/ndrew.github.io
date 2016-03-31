/*!	
* FitText.js 1.0 jQuery free version
*
* Copyright 2011, Dave Rupert http://daverupert.com 
* Released under the WTFPL license 
* http://sam.zoy.org/wtfpl/
* Modified by Slawomir Kolodziej http://slawekk.info
*
* Date: Tue Aug 09 2011 10:45:54 GMT+0200 (CEST)
*/
(function(){
  var css = function (el, prop) {
    return window.getComputedStyle ? getComputedStyle(el).getPropertyValue(prop) : el.currentStyle[prop];
  };
  
  var addEvent = function (el, type, fn) {
    if (el.addEventListener)
      el.addEventListener(type, fn, false);
		else
			el.attachEvent('on'+type, fn);
  };
  
  var extend = function(obj,ext){
    for(var key in ext)
      if(ext.hasOwnProperty(key))
        obj[key] = ext[key];
    return obj;
  };

  window.fitText = function (el, kompressor, options) {

    var settings = extend({
      'minFontSize' : -1/0,
      'maxFontSize' : 1/0
    },options);

    var fit = function (el) {
      var compressor = kompressor || 1;

      var resizer = function () {
        el.style.fontSize = Math.max(Math.min(el.clientWidth / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)) + 'px';
      };

      // Call once to set.
      resizer();

      // Bind events
      // If you have any js library which support Events, replace this part
      // and remove addEvent function (or use original jQuery version)
      addEvent(window, 'resize', resizer);
    };

    if (el.length)
      for(var i=0; i<el.length; i++)
        fit(el[i]);
    else
      fit(el);

    // return set of elements
    return el;
  };
  
  
var phrases = [
    "Вялая ебля в пальмах. ",
    "Кто-то курил немытые хуйцы",
    "Это эко-гастролёры",
    "Вялые хуйцы",
    "Я все равно ни хрена не поняла из ваших холиваров",
    "Бокапор авдеевский",
    "крч, Трояге пизда )))",
    "тот, кто рвет пуканы",
    "Наверное лучше б на яйцеборода пошла смотреть :/",
    "В этом году хочу ахуеть от Флоренс",
    "грусть и печаль на хрен",
    "ты там сайт радио \"Мария\" рассматриваешь?))",
    "Я чуть не умерла утром от пригара",
    "у меня утренняя пригарная истерика))",
    "Я готова стать донором жопы, если кому надо для моды",
    "жалею и посыпаю голову пеплом",
    "просто пиздецебл!!!))",
    "все, я заваливаю все на хуй тогда",
    "На моей надгробной плите напишите \"она умерла ради сач мач на Докудейс\"",
    "он же натянул кожу ртом, всё логично было!",
    "Почему пёс молчит? Он тупой?",
    "мрачелло",
    "мы ещё померяемся с ним радиохэдами, сукан!)",
    "Никакого эстетического вкуса у людей, бич!",
    "я только хотела написать, что мне они как-то так не интересны, что срать на этот лайв вообще",
    "ебаная шея",
    "крч, этим одним планом он меня просто порубал на хуй",
    "может он продал тушу дьяволу, щекастый?",
    "У меня позвонок в штаны сейчас высыпится )",
    "то жирдяй? пиздючелло этот?",
    "Вы будете вместе вжиматься в землю и стонать",
    "Смотрю в зеркало и так бы и разцеловал бы себя в уста сахарные",
    "Увесь твітер побило, вся хата в скрижалях",
    "Тогда я буду с латте, бухая и с мужиками",
    "Какая новая и захватывающая ебля мозга нарисовалась!)",
    "Модерн Толкинг. Какая-то шлягерная дичь, не досмотрела :/",
    "Как-то все раскрошилось на хрен",
    "сочится из глаз читателей",
    "Плюшевый хуец",
    "Там же снаряд в башке",
    "Заряд эстетической бодрости с утра",
    "Час ночи, еба и Мари Чеба",
    "братья Гала Херы",
    "запустенье и тлен, всё как всегда",
    "жесть. Но когда ноготь отваливается это интересный опыт))",
    "Рукалицо, кровь из глаз",
    "Бляха, когда ж они там уже сожрут друг друга, упыри",
    "меня подкупило слово \"алкоголь\"",
    "Там все гремит и жужжит, то кофе, то народ пиздит",
    "Ни часа без пригара блеать !!!",
    "овощ, бичееез",
    "перфекто, бляха (",
    "Гастролеры вялой ебли",
    "пальмы вялых хуйцов",
    "холивары немытой хурмы",
    "пиздюк эко бокапоров",
    "анальные шарики для барби"
];

window.ppp = phrases;

function boo() {
  var data = window.ppp;
  
  var phrase = data[Math.floor(Math.random()*data.length)];
  
   var el = document.getElementById("phrase");
   el.textContent = phrase;
  
   el.className = ~~(Math.random()*2) ? "" : ( ~~(Math.random()*2) ? "red" : "yellow");//"rainbow";
  
  var comp = phrase.length < 35 ? 2 : 2.5;
   window.fitText( el, comp );
  
}
  
  
  window.boo = boo;
   
})();

//window.fitText( document.getElementById("phrase"), 1 );

