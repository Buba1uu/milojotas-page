function letras(){
    const lyricName = document.getElementById('lyricName').value;
      fetch(`https://api.lyrics.ovh/v1/Milo j/${lyricName}`) //${lyricName}
      .then(response => response.json())
      .then(data => {
      console.log(data);
      parrafo = document.getElementById("letra");
      const {lyrics} = data;
      parrafo.innerHTML = `${lyrics}`;
      }
    )
    .catch(error => console.error('Error:', error));
    }