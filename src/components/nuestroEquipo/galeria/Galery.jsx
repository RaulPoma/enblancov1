import React, {useState} from 'react'
import ImagesApi from './ImagesApi'
import './Galery.css'
import Modal from './Modal'
const Galery = () => {

  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null) ;   

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item.image);
  };

  const handelRotationRight = () => {
    const totalLength=ImagesApi.length;
    if(currentIndex +1 >= totalLength) {
      setCurrentIndex(0);
      const newImage = ImagesApi[0].image;
      setClickedImg(newImage);
      return;
    }
    const newIndex = currentIndex + 1;
    const newImage = ImagesApi.filter((item) => {
      return ImagesApi.indexOf(item) === newIndex;
    });
    const newItem = newImage[0].image;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
    
  }

  const handelRotationLeft = () => {
    console.log()
    const totalLength = ImagesApi.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newImage= ImagesApi[totalLength - 1].image;
      setClickedImg(newImage);
      return;
    }
    const newIndex = currentIndex - 1;
    const newImage = ImagesApi.filter((item) => {
      return ImagesApi.indexOf(item) === newIndex;
    });
    const newItem = newImage[0].image;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };
  return (
    <>
    
    <div className="containerGalery">

     { ImagesApi.map ((item,index)=> (
         <div className="containerGalery___img">
             <img src={item.image} alt="" onClick={()=> handleClick(item,index)}/>
         </div>
     ))}
     {clickedImg && <Modal 
            clickedImg={clickedImg}
            handelRotationRight={handelRotationRight}
            setClickedImg={setClickedImg}
            handelRotationLeft={handelRotationLeft}
     
     
     
     />}


    </div>
    
    
    </>
  )
}

export default Galery