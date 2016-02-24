var Memory = {
  init : function(size) {
    Memory.memory = new Array(size);
  },

  get : function(indice) {
    return Memory.memory[indice];
  },

  set : function(indice, value) {
    Memory.memory[indice] = value;
  }
}

var Inputs = {
  inputs : [],

  init : function(inputs) {
    Inputs.inputs = inputs;
  },

  reset : function() {
    Inputs.inputs = []
  }
}

var Outputs = {
  outputs : [],

  init : function(inputs) {
    Outputs.outputs = outputs;
  },

  reset : function() {
    Outputs.outputs = []
  }
}


var interpreter = {

  codes : [],

  i : 0,

  hand : null,

  dictionary : ['INBOX', 'OUTBOX', 'COPYTO', 'COPYFROM'],

   parser : function(code) {
    return code.split(/\s+/);
  },

  run : function() {

  },

  next : function() {
    if(interpreter.dictionary.indexOf(interpreter.codes[interpreter.i]) != -1) {
      interpreter.call(interpreter.codes[interpreter.i]);
    }
    interpreter.i++;
  },

  prev : function() {

  },

  call : function(word) {
    console.log("la " + word);
    switch (word) {
      case 'INBOX':
        interpreter.inbox();
        break;
      case 'OUTBOX':
        interpreter.outbox();
        break;
      case 'COPYTO':
        interpreter.copyto();
        break;
      case 'COPYFROM':
        interpreter.copyfrom();
        break;
      default:
        alert('Fonction non implémenté.')
    }
  },

  inbox : function() {
    interpreter.hand = Inputs.inputs.shift();
  },

  outbox : function() {
    if(interpreter.hand == null) {
      alert("Outbox avec main vide.");
      return;
    }
    console.log("Ici " + interpreter.hand);
    Outputs.outputs.push(interpreter.hand);
    document.querySelector('#outputs').innerHTML += interpreter.hand;
    interpreter.hand = null;
  },

  copyto : function() {
    interpreter.i++;
    var add = interpreter.codes[interpreter.i];
    var reg = /^\[([0-9]+)\]$/;
    var regCheck = reg.exec(add);
    if(regCheck != null) {
      add = Memory.get(test[1]);
    } else {
      if(!(isInteger(add) && add >= 0)) {
        Memory.set(add, interpreter.hand);
      }
    }
    alert("Addresse " + add + " non valide.")
  },

  copyfrom : function() {
  },

  reset : function() {
    interpreter.hand = null;
    interpreter.codes = [];
  }

};
