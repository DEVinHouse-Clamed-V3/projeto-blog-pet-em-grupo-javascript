
  function generateDiv(imageUrl, textContent) {

  const newDiv = document.createElement('div');
  newDiv.className = 'content-div';

  const img = document.createElement('img');
  img.src = imageUrl || '../assets/error.png';
  img.alt = 'Imagem do Post';

  const paragraph = document.createElement('p');
  paragraph.textContent = textContent || 'Try refreshing the page';


  newDiv.appendChild(img);
  newDiv.appendChild(paragraph);


  const outputContainer = document.getElementById('output-container');
  outputContainer.appendChild(newDiv);
}

document.getElementById('generate-button').addEventListener('click', function() {
  const outputContainer = document.getElementById('output-container');
  outputContainer.innerHTML = '';

  const dataKeys = ['item1', 'item2', 'item3']; 
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