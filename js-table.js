function onTextareaInput(event) { // On textarea change event
  var item = event.currentTarget;
  item.style.height = 'auto';
  item.style.height = item.scrollHeight + 'px';
}

function onClickEditable(event) { // On editable cell click
  var item = event.currentTarget;
  if (item.editableInput == null) { // Find & cache inner input element...
    var editableInput = item.getElementsByClassName('input');
    item.editableInput = editableInput && editableInput.length && editableInput[0] || false;
  }
  if (item.editableInput && item.editableInput.focus) { // Focus on input if found...
    item.editableInput.focus()
  }
}

function onload() {

  // Initialize textareas...
  var textareas = document.getElementsByClassName('textarea');
  Array.from(textareas).forEach(function(item){
    item.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y:hidden;');
    item.addEventListener('input', onTextareaInput);
  });

  // Add events emulate clicks...
  var editables = document.getElementsByClassName('editable');
  Array.from(editables).forEach(function initEditable(item) {
    item.addEventListener('click', onClickEditable);
  });

  var one1 = document.getElementById('col13');
  var one2 = document.getElementById('col14');
  var oneS = document.getElementById('col15');

  var two1 = document.getElementById('col23');
  var two2 = document.getElementById('col24');
  var twoS = document.getElementById('col25');

  var three1 = document.getElementById('col33');
  var three2 = document.getElementById('col34');
  var threeS = document.getElementById('col35');

  var four2 = document.getElementById('col44');
  var four1 = document.getElementById('col43');
  var fourS = document.getElementById('col45');

  var five1 = document.getElementById('col53');
  var five2 = document.getElementById('col54');
  var fiveS = document.getElementById('col55');

  var res1 = document.getElementById('col63');
  var res2 = document.getElementById('col64');
  var resS = document.getElementById('col65');


  var six1 = document.getElementById('col73');
  var six2 = document.getElementById('col74');
  var sixS = document.getElementById('col75');

  var seven1 = document.getElementById('col83');
  var seven2 = document.getElementById('col84');
  var sevenS = document.getElementById('col85');

  var eight1 = document.getElementById('col93');
  var eight2 = document.getElementById('col94');
  var eightS = document.getElementById('col95');

  var nine1 = document.getElementById('col103');
  var nine2 = document.getElementById('col104');
  var nineS = document.getElementById('col105');

  var ten1 = document.getElementById('col113');
  var ten2 = document.getElementById('col114');
  var tenS = document.getElementById('col115');

  var sum1 = document.getElementById('col123');
  var sum2 = document.getElementById('col124');
  var sumS = document.getElementById('col125');

  var button = document.getElementById('print');

  // Section

  button.onclick = function() {
    alert('Пожалуйста, выберите книжную ориентацию и поставьте галочку "Фоновые цвета и изображения"')
    print();
  }

  document.onkeypress = function(e) {
    var tar = e.target;
    // console.log(e.code);
    if (tar.id == 'col13' || tar.id == 'col14' || tar.id == 'col15' || tar.id == 'col23' || tar.id == 'col24' || tar.id == 'col25' || tar.id == 'col33' || tar.id == 'col34' || tar.id == 'col35' || tar.id == 'col43' || tar.id == 'col44' || tar.id == 'col45' || tar.id == 'col53' || tar.id == 'col54' || tar.id == 'col55' || tar.id == 'col63' || tar.id == 'col64' || tar.id == 'col65' || tar.id == 'col73' || tar.id == 'col74' || tar.id == 'col75' || tar.id == 'col83' || tar.id == 'col84' || tar.id == 'col85' || tar.id == 'col93' || tar.id == 'col94' || tar.id == 'col95' || tar.id == 'col103' || tar.id == 'col104' || tar.id == 'col105' || tar.id == 'col113' || tar.id == 'col114' || tar.id == 'col115' || tar.id == 'col123' || tar.id == 'col124' || tar.id == 'col125') {
      tar.value = tar.value.replace(",", ".");
      // tar.value = tar.value.replace(".", ".");
    //     // if (e.code == "Digit1" || e.code == "Slash" || e.code == "Digit2" || e.code == "Digit3" || e.code == "Digit4" || e.code == "Digit5" || e.code == "Digit6" || e.code == "Digit7" || e.code == "Digit8" || e.code == "Digit9" || e.code == "Digit0" || e.code == "Period" || e.code == "Numpad1" || e.code == "Numpad2" || e.code == "Numpad3" || e.code == "Numpad4" || e.code == "Numpad5" || e.code == "Numpad6" || e.code == "Numpad7" || e.code == "Numpad8" || e.code == "Numpad9" || e.code == "Numpad0") {
    //     //   // console.log('ok' + e.code);
    //     //   return;
    //     // }
    //     // else {
    //     //   // console.log('false' + e.code);
    //     //   return false;
    //     // }
      }
    //   // else if (e.key)
  }

  document.onkeyup = function() {
      // alert('s');
      if (isNaN(oneS.value)) oneS.value = 0;
      if (isNaN(twoS.value)) twoS.value = 0;
      if (isNaN(threeS.value)) threeS.value = 0;
      if (isNaN(fourS.value)) fourS.value = 0;
      if (isNaN(fiveS.value)) fiveS.value = 0;
      if (isNaN(resS.value)) resS.value = 0;
      if (isNaN(res1.value)) res1.value = 0;
      if (isNaN(res2.value)) res2.value = 0;
      if (isNaN(sixS.value)) sixS.value = 0;
      if (isNaN(sevenS.value)) sevenS.value = 0;
      if (isNaN(eightS.value)) eightS.value = 0;
      if (isNaN(nineS.value)) nineS.value = 0;
      if (isNaN(tenS.value)) tenS.value = 0;
      if (isNaN(sum1.value)) sum1.value = 0;
      if (isNaN(sum2.value)) sum2.value = 0;
      if (isNaN(sumS.value)) sumS.value = 0;
  }

  six1.oninput = function() {
      sixS.value = six1.value * six2.value;
      sum1.value = parseFloat(six1.value) + parseFloat(seven1.value) + parseFloat(eight1.value) + parseFloat(nine1.value) + parseFloat(ten1.value);
      sumS.value = parseFloat(sum1.value) * parseFloat(sum2.value);
  }
  six2.oninput = function() {
      sixS.value = six1.value * six2.value;
      number.sum2.value.toFixed(1) = parseFloat(six2.value) + parseFloat(seven2.value) + parseFloat(eight2.value) + parseFloat(nine2.value) + parseFloat(ten2.value);
      sumS.value = parseFloat(sum1.value) * parseFloat(sum2.value);
  }
  seven1.oninput = function() {
      sevenS.value = seven1.value * seven2.value;
      sum1.value = parseFloat(six1.value) + parseFloat(seven1.value) + parseFloat(eight1.value) + parseFloat(nine1.value) + parseFloat(ten1.value);
      sumS.value = parseFloat(sum1.value) * parseFloat(sum2.value);
  }
  seven2.oninput = function() {
      sevenS.value = seven1.value * seven2.value;
      number.sum2.value.toFixed(1) = parseFloat(six2.value) + parseFloat(seven2.value) + parseFloat(eight2.value) + parseFloat(nine2.value) + parseFloat(ten2.value);
      sumS.value = parseFloat(sum1.value) * parseFloat(sum2.value);
  }
  eight1.oninput = function() {
      eightS.value = eight1.value * eight2.value;
      sum1.value = parseFloat(six1.value) + parseFloat(seven1.value) + parseFloat(eight1.value) + parseFloat(nine1.value) + parseFloat(ten1.value);
      sumS.value = parseFloat(sum1.value) * parseFloat(sum2.value);
  }
  eight2.oninput = function() {
      eightS.value = eight1.value * eight2.value;
      number.sum2.value.toFixed(1) = parseFloat(six2.value) + parseFloat(seven2.value) + parseFloat(eight2.value) + parseFloat(nine2.value) + parseFloat(ten2.value);
      sumS.value = parseFloat(sum1.value) * parseFloat(sum2.value);
  }
  nine1.oninput = function() {
      nineS.value = nine1.value * nine2.value;
      sum1.value = parseFloat(six1.value) + parseFloat(seven1.value) + parseFloat(eight1.value) + parseFloat(nine1.value) + parseFloat(ten1.value);
      sumS.value = parseFloat(sum1.value) * parseFloat(sum2.value);
  }
  nine2.oninput = function() {
      nineS.value = nine1.value * nine2.value;
      sum2.value = parseFloat(six2.value) + parseFloat(seven2.value) + parseFloat(eight2.value) + parseFloat(nine2.value) + parseFloat(ten2.value);
      sumS.value = parseFloat(sum1.value) * parseFloat(sum2.value);
  }
  ten1.oninput = function() {
      tenS.value = ten1.value * ten2.value;
      sum1.value = parseFloat(six1.value) + parseFloat(seven1.value) + parseFloat(eight1.value) + parseFloat(nine1.value) + parseFloat(ten1.value);
      sumS.value = parseFloat(sum1.value) * parseFloat(sum2.value);
  }
  ten2.oninput = function() {
      tenS.value = ten1.value * ten2.value;
      number.sum2.value.toFixed(1) = (parseFloat(six2.value) + parseFloat(seven2.value) + parseFloat(eight2.value) + parseFloat(nine2.value) + parseFloat(ten2.value)).toFixed(1);
      sumS.value = parseFloat(sum1.value) * parseFloat(sum2.value);
  }
  sum1.oninput = function() {
      sumS.value = parseFloat(sum1.value) * parseFloat(sum2.value);
  }
  sum2.oninput = function() {
      sumS.value = parseFloat(sum1.value) * parseFloat(sum2.value);
  }
  one1.oninput = function() {
      oneS.value = one1.value * one2.value;
      res1.value = parseFloat(one1.value) + parseFloat(two1.value) + parseFloat(three1.value) + parseFloat(four1.value) + parseFloat(five1.value);
      resS.value = parseFloat(res1.value) * parseFloat(res2.value);
  }
  one2.oninput = function() {
      
      oneS.value = one1.value * one2.value;
      res2.value = parseFloat(one2.value) + parseFloat(two2.value) + parseFloat(three2.value) + parseFloat(four2.value) + parseFloat(five2.value);
      resS.value = parseFloat(res1.value) * parseFloat(res2.value);
  }
  two1.oninput = function() {
      twoS.value = two1.value * two2.value;
      res1.value = parseFloat(one1.value) + parseFloat(two1.value) + parseFloat(three1.value) + parseFloat(four1.value) + parseFloat(five1.value);
      resS.value = parseFloat(res1.value) * parseFloat(res2.value);
  }
  two2.oninput = function() {
      twoS.value = two1.value * two2.value;
      res2.value = parseFloat(one2.value) + parseFloat(two2.value) + parseFloat(three2.value) + parseFloat(four2.value) + parseFloat(five2.value);
      resS.value = parseFloat(res1.value) * parseFloat(res2.value);
  }
  three1.oninput = function() {
      threeS.value = three1.value * three2.value;
      res1.value = parseFloat(one1.value) + parseFloat(two1.value) + parseFloat(three1.value) + parseFloat(four1.value) + parseFloat(five1.value);
      resS.value = parseFloat(res1.value) * parseFloat(res2.value);
  }
  three2.oninput = function() {
      threeS.value = three1.value * three2.value;
      res2.value = parseFloat(one2.value) + parseFloat(two2.value) + parseFloat(three2.value) + parseFloat(four2.value) + parseFloat(five2.value);
      resS.value = parseFloat(res1.value) * parseFloat(res2.value);
  }
  four1.oninput = function() {
      fourS.value = four1.value * four2.value;
      res1.value = parseFloat(one1.value) + parseFloat(two1.value) + parseFloat(three1.value) + parseFloat(four1.value) + parseFloat(five1.value);
      resS.value = parseFloat(res1.value) * parseFloat(res2.value);
  }
  four2.oninput = function() {
      fourS.value = four1.value * four2.value;
      res2.value = parseFloat(one2.value) + parseFloat(two2.value) + parseFloat(three2.value) + parseFloat(four2.value) + parseFloat(five2.value);
      resS.value = parseFloat(res1.value) * parseFloat(res2.value);
  }
  five1.oninput = function() {
      fiveS.value = five1.value * five2.value;
      res1.value = parseFloat(one1.value) + parseFloat(two1.value) + parseFloat(three1.value) + parseFloat(four1.value) + parseFloat(five1.value);
      resS.value = parseFloat(res1.value) * parseFloat(res2.value);
  }
  five2.oninput = function() {
      fiveS.value = five1.value * five2.value;
      res2.value = parseFloat(one2.value) + parseFloat(two2.value) + parseFloat(three2.value) + parseFloat(four2.value) + parseFloat(five2.value);
      resS.value = parseFloat(res1.value) * parseFloat(res2.value);
  }
  res1.oninput = function() {
      resS.value = parseFloat(res1.value) * parseFloat(res2.value);
  }
  res2.oninput = function() {
      resS.value = parseFloat(res1.value) * parseFloat(res2.value);
  }
}
