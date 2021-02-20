function randomDreamGen() {
  let luckvar = Math.floor((Math.random() * 7500000000000000) + 1);
  if(luckvar == 123456789) {
    location.assign('/cheater');
  }else{
    location.assign('/unlucky');
  }
}