 // Gera a div com o conteudo
 function generateDiv(imageUrl, textContent) {
  // CRIA A DIV
  const newDiv = document.createElement('div');
  newDiv.className = 'content-div';

  // CRIA A IMG
  const img = document.createElement('img');
  img.src = imageUrl || '.assets/error.png';
  img.alt = 'Imagem do Post';

  // GERA O PARAGRAFO COM O TEXTO ARMAZENADO NA STORAGE
  const paragraph = document.createElement('p');
  paragraph.textContent = textContent || 'Error: 404';

  // RELACIONA A IMAGEM E O TEXTO A DIV E IMG
  newDiv.appendChild(img);
  newDiv.appendChild(paragraph);

  // RELACIONA A NOVA DIV PRO CONTAINER
  const outputContainer = document.getElementById('output-container');
  outputContainer.appendChild(newDiv);
}

document.getElementById('generate-button').addEventListener('click', function() {
  // Limpa o conteudo anterior
  const outputContainer = document.getElementById('output-container');
  outputContainer.innerHTML = '';

  // Gera varias divs baseado no que esta armazenado na localstorage
  const dataKeys = ['item1', 'item2', 'item3']; // Define your keys
  dataKeys.forEach(key => {
      const imageUrl = localStorage.getItem(key + '_imageURL');
      const textContent = localStorage.getItem(key + '_textContent');
      generateDiv(imageUrl, textContent);
  });
});

localStorage.setItem('item1_imageURL', '');
localStorage.setItem('item1_textContent', 'This is the content for item 1.');

localStorage.setItem('item2_imageURL', 'https://via.placeholder.com/200');
localStorage.setItem('item2_textContent', 'This is the content for item 2.');