function Bewerber(firstName) {
    this.firstName = firstName || 'Félix Martínez';
};

Bewerber.prototype.gothejob = function(){
  alert('Vielen Dank!');
};
var martinez = new Bewerber ("Félix Martínez");
martinez.gothejob();