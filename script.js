window.onload = () =>{
    let image = createImage();
    fetch('https://api.giphy.com/v1/gifs/translate?api_key=1F2Wn1zC9lZ2cGgA72RsVLdJLPpu5kBY&s=cats', {mode: 'cors'})
    .then(function(response) {
        return response.json();
      })
      .then(function(response) {
        image.src = response.data.images.original.url;
      });
      AddImage(image);
};
const createImage = () => {
    let image = document.createElement('img');
    return image;
};
const AddImage = (image) => {
    let target = document.querySelector('.weather');
    target.appendChild(image);
};
