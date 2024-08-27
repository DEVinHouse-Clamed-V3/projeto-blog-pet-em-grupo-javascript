 // Gera a div com o conteudo
 function generateDiv(imageUrl, textContent) {
  // CRIA A DIV
  const newDiv = document.createElement('div');
  newDiv.className = 'content-div';

  // CRIA A IMG
  const img = document.createElement('img');
  img.src = imageUrl || '../assets/error.png';
  img.alt = 'Imagem do Post';
 
  // GERA O PARAGRAFO COM O TEXTO ARMAZENADO NA STORAGE
  const paragraph = document.createElement('p');
  paragraph.textContent = textContent || 'Try refreshing the page';

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
      const imageUrl = localStorage.getItem(key + '_imageUrl');
      const textContent = localStorage.getItem(key + '_textContent');
      generateDiv(imageUrl, textContent);
  });
});

localStorage.setItem('item1_imageUrl', '../assets/pet1.webp');
localStorage.setItem('item1_textContent', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit repellat minus architecto incidunt nesciunt. Id, reprehenderit laudantium praesentium modi, porro facilis tempore, hic adipisci repellat debitis molestias obcaecati ex dignissimos..');

localStorage.setItem('item2_imageUrl', '../assets/pet5.jpg');
localStorage.setItem('item2_textContent', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit repellat minus architecto incidunt nesciunt. Id, reprehenderit laudantium praesentium modi, porro facilis tempore, hic adipisci repellat debitis molestias obcaecati ex dignissimos..');

localStorage.setItem('item3_imageUrl', '');
localStorage.setItem('item3_textContent', 'No image available for this item.');