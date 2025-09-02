function status(request, response) {
  //response.status(200).send("Vou ficar Rica");
  response.status(200).json({ chave: " vou ficar Rica" });
}
export default status;
