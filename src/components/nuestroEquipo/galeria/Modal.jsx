// import React, {useEffect, useRef} from "react";

// function useKey(key, cb) {
//   const callbackRef = useRef(cb);

//   useEffect(()=>{
//     callbackRef.current = cb;
//   });

//   useEffect(() => {
//     function handle(event){
//       if(event.code === key) {
//         callbackRef.current(event);
        
//       }
//     }
//     document.addEventListener('keypress', handle);
//     return () => document.removeEventListener ('keypress', handle)
//   }, [key]);
// }
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import { faAngleRight} from '@fortawesome/free-solid-svg-icons';
const Modal = ({
    clickedImg,
    setClickedImg,
    handelRotationRight,
    handelRotationLeft
  }) => {


  //   const aviso = ()=> {
  //     console.log ('presionado')

  //   }

  // useKey('Enter', {handelRotationLeft})
  const handleClick = (e) => {
  if (e.target.classList.contains("dismiss")) {
   setClickedImg(null);
      }
    };
    

    


    return (
      <>
        <div className=" overlayGalery dismiss" onClick={handleClick}>
          
          <img src={clickedImg} alt="bigger pic" />
          <span className="dismiss" onClick={handleClick}>
            X
          </span>
          <div onClick={handelRotationLeft}  >
         
              <button className="btn_shadow overlay-arrows_left" >
                <FontAwesomeIcon icon={faAngleLeft} />
              </button>
          </div>
          <div onClick={handelRotationRight} >
             <button  className="btn_shadow overlay-arrows_right" >
                <FontAwesomeIcon icon={faAngleRight} />
              </button>
          </div>
        </div>
      </>
    );
  };
  
  export default Modal;
  