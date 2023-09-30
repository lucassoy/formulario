  const URL = "https://jsonplaceholder.typicode.com/users";
  const btn = document.getElementById("btn");

  btn.addEventListener('click', function(){

      let nombre = document.getElementById("nombre").value;
      let apellido = document.getElementById("apellido").value;
      let nacimiento = document.getElementById("nacimiento").value;
      const usuario = {
          name: nombre,
          surname: apellido,
          bornDate: nacimiento,
      };

      fetch(URL, {
          method: 'POST',
          headers: {
              'Content-type': 'application/json; charset=UTF-8',
          },
          body: JSON.stringify(usuario),  
      })
      .then((response) => response.json())
      .catch(error=>console.error("Error", error))
      .then((response) => console.log(usuario,response));
  });