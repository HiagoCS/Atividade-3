var a,b,c;
$('#btn').click(function(){
  a = $('#a').val();
  b = $('#b').val();
  c = $('#c').val();
  if(a == b && b == c){
    //Equilatero
    $("#add").html("<div class='row' id='add'><div class='col-sm-12'><img src='components/img/Equilatero.jpg' height='250' width='250' id='img'><br><h2 id='titulo'>Equilatero</h2></div></div>");
  }
  else if(a == b && b != c || b == c && c != a || c == a && a != b){
    //Isoceles
        $("#add").html("<div class='row' id='add'><div class='col-sm-12'><img src='components/img/Isoceles.jpg' height='250' width='250' id='img'><br><h2 id='titulo'>Isoceles</h2></div></div>");

  }
  else if(a != b && b != c){
    //Escaleno
    $("#add").html("<div class='row' id='add'><div class='col-sm-12'><img src='components/img/Escaleno.jpg' height='250' width='250' id='img'><br><h2 id='titulo'>Escaleno</h2></div></div>");
  }
  else if(a == null || b == null || c == null){
    //Triangulo Invalido
    $("#add").html("<div class='row' id='add'><div class='col-sm-12'><img src='components/img/negado.jpg' height='250' width='250' id='img'><br><h2 id='titulo'>Negado</h2></div></div>");
  }
  else{
    //Triangulo Invalido
    $("#add").html("<div class='row' id='add'><div class='col-sm-12'><img src='components/img/negado.jpg' height='250' width='250' id='img'><br><h2 id='titulo'>Negado</h2></div></div>");
  }
});