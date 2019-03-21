import inno from './inno.jpg';

function addImage() {
  const img = document.createElement('img');
  img.alt = 'inno';
  img.width = 300;
  img.src = inno;

  const body = document.querySelector('body');
  body.appendChild(img);
}

export default addImage;
