const arrayComentarios = ["hola"];
const comentario = document.getElementById("cometarios");
drawComentarios();

function drawComentarios(){
    comentario.innerHTML = arrayComentarios.map((comentario,index) => 'agregarComentario');
}

const agregarComentario = (type)=> {
  arrayComentarios.push(type);
  drawComentarios();

}