import pic1 from '../images/cards/1.jpg';
import pic2 from '../images/cards/2.jpg';
import pic3 from '../images/cards/3.jpg';
import pic4 from '../images/cards/4.jpg';
import pic5 from '../images/cards/5.jpg';
import pic6 from '../images/cards/6.jpg';
import pic7 from '../images/cards/7.jpg';
import pic8 from '../images/cards/8.jpg';
import pic9 from '../images/cards/9.jpg';
import pic10 from '../images/cards/10.jpg';
import pic11 from '../images/cards/11.jpg';
import pic12 from '../images/cards/12.jpg';

const arrImgInitial = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12];
const arrImgSaved = [pic1, pic2, pic3];

export const initialCards = arrImgInitial.map(img => {
  return  {
    duration: 27,
    image: img,
    nameRU: 'В погоне за Бенкси',
  }
});

export const savedCards = arrImgSaved.map(img => {
  return  {
    duration: 27,
    image: img,
    nameRU: 'В погоне за Бенкси',
  }
});
