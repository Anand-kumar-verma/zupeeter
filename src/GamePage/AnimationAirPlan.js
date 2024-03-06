import { byTimeIsEnableSound } from "../redux/slices/counterSlice";

export const demomobile = `
@keyframes slidein {
    0% {
      left: 20px;
      top: calc(100% -  50px);
    }
    20% {
      left:80px;
      top: calc(100% -  50px);
    }
    50% {
      left: 40%;
      top: calc(80% - 40px);
    }
    100% {
      left: 70%;
      top: calc(30% - 42px);
    }
  }
  
 @keyframes slideafter {
  0% {
    left: 70%;
    top: calc(30% - 42px);
  }
  25% {
    left: 72%;
    top: calc(50% - 40px);
  }
  50% {
    left: 75%;
    top: calc(60% - 40px);
  }
  75% {
    left: 72%;
    top: calc(50% - 40px);
  }
  100% {
    left: 70%;
    top: calc(30% - 42px);
  }
}


  @keyframes thirdAnimation {
    0% {
        left: 70%;
        top: calc(30% - 42px);
      }
    50% {
      left: 80%;
      top: calc(20% - 40px);
    }
    100% {
      left: 100%;
      top: 20px;
    }
  }
  
`;
// [10px] left-[20px]
export const demomolap = `
@keyframes slidein {
    0% {
      left: 20px;
      top: calc(100% - 80px);
    }
  25% {
      left:20%;
      top: calc(97% - 80px);
    }
    50% {
      left: 40%;
      top: calc(80% - 80px);
    }
    100% {
      left: 78%;
      top: calc(42% - 80px);
    }
  }
  
 @keyframes slideafter {
  0% {
    left: 78%;
    top: calc(42% - 80px);
  }
  25% {
    left: 81%;
    top: calc(60% - 80px);
  }
  50% {
    left: 84%;
    top: calc(80% - 80px);
  }
  75% {
    left: 81%;
    top: calc(60% - 80px);
  }
  100% {
    left: 78%;
    top: calc(42% - 80px);
  }
}
  @keyframes thirdAnimation {
    0% {
        left: 80%;
        top: calc(42% - 80px);
      }
    100% {
      left: 100%;
      top: 20px;
    }
  }
  
`;
// 50% {
//   left: 70%;
//   top: calc(30% - 100px);
// }
export function animationabove_10_sec(mainDiv, animationAdded,dispatch,fk) {
  console.log(animationAdded, "hiiabove10");
  mainDiv.style.animation = `slidein 5s linear forwards running`;

  mainDiv.addEventListener("animationend", () => {
    mainDiv.style.animation = `slideafter 5s linear forwards running ${
      (animationAdded - 5) / 5 - .3  
    }`;
    mainDiv.addEventListener("animationend", () => {
      mainDiv.style.animation = `thirdAnimation .5s linear forwards running`;
    });
  });
}

export function animationupto_10_sec(mainDiv, animationAdded,dispatch,fk) {
  console.log(animationAdded, "hiiupto10");
  mainDiv.style.animation = `slidein ${
    animationAdded - .3
  }s linear forwards running`;

  mainDiv.addEventListener("animationend", () => {
    mainDiv.style.animation = `thirdAnimation .5s linear forwards running`;
  });
}

export function animationUpTo_5_sec(mainDiv, animationAdded,dispatch,fk) {
  mainDiv.style.animation = `slidein ${
    animationAdded - .3
  }s linear forwards running`;

  mainDiv.addEventListener("animationend", () => {
    mainDiv.style.animation = `thirdAnimation .5s linear forwards running`;
   
  });
}
