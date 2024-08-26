function generateDiv(imageUrl, postTitleText, textContent, postNumber, creationDateText) {
    const newDiv = document.createElement('div');
    newDiv.className = 'content-div';

  const img = document.createElement('img');
  img.src = imageUrl || '../assets/error.png';
  img.alt = 'Imagem do Post';

  const postTitle = document.createElement('h1');
  postTitle.textContent = postTitleText || `Post ${postNumber}`;

  const paragraph = document.createElement('p');
  paragraph.textContent = textContent || 'Try refreshing the page';

  const creationDate = document.createElement('h6');
  const currentDate = new Date();
  const formattedTime = currentDate.toLocaleTimeString();
  const formattedDate = currentDate.toLocaleDateString();
  creationDate.textContent = creationDateText || `Criado em: ${formattedDate} às ${formattedTime} `;

  newDiv.appendChild(img);
  newDiv.appendChild(postTitle);
  newDiv.appendChild(paragraph);
  newDiv.appendChild(creationDate);

  const outputContainer = document.getElementById('output-container');
  outputContainer.appendChild(newDiv);
}

document.getElementById('generate-button').addEventListener('click', function() {
  const outputContainer = document.getElementById('output-container');
  outputContainer.innerHTML = '';

  const dataKeys = ['item1', 'item2', 'item3', 'item4', 'item5'];
  dataKeys.forEach((key, index) => {
      const imageUrl = localStorage.getItem(key + '_imageUrl');
      const postTitle = localStorage.getItem(key + '_postTitle')
      const textContent = localStorage.getItem(key + '_textContent');
      const creationDateText = '';
      generateDiv(imageUrl,postTitle, textContent, index + 1, creationDateText);
  });
});

localStorage.setItem('item1_imageUrl', '../assets/pet1.webp');
localStorage.setItem('item1_postTitle', '');
localStorage.setItem('item1_textContent', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit repellat minus architecto incidunt nesciunt. Id, reprehenderit laudantium praesentium modi, porro facilis tempore, hic adipisci repellat debitis molestias obcaecati ex dignissimos..');

localStorage.setItem('item2_imageUrl', '../assets/pet5.jpg');
localStorage.setItem('item2_postTitle', '');
localStorage.setItem('item2_textContent', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit repellat minus architecto incidunt nesciunt. Id, reprehenderit laudantium praesentium modi, porro facilis tempore, hic adipisci repellat debitis molestias obcaecati ex dignissimos..');

localStorage.setItem('item3_imageUrl', '../assets/gatinho.jpg');
localStorage.setItem('item3_postTitle', '');
localStorage.setItem('item3_textContent', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit repellat minus architecto incidunt nesciunt. Id, reprehenderit laudantium praesentium modi, porro facilis tempore, hic adipisci repellat debitis molestias obcaecati ex dignissimos..');

localStorage.setItem('item4_imageUrl', '../assets/pet6.jpg');
localStorage.setItem('item4_postTitle', '');
localStorage.setItem('item4_textContent', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit repellat minus architecto incidunt nesciunt. Id, reprehenderit laudantium praesentium modi, porro facilis tempore, hic adipisci repellat debitis molestias obcaecati ex dignissimos..');

localStorage.setItem('item5_imageUrl', '');
localStorage.setItem('item5_postTitle', '404: not found :(');
localStorage.setItem('item5_textContent', 'No image available for this item.');