let pokeArray = [
    {name: 'bulbasaur', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'},
    {name: 'ivysaur', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'},
    {name: 'charmander', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'},
    {name: 'charizard', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png'},
    {name: 'squirtle', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png'},
  
  ];
  index = 0
  firstLoop = true 
  let button = document.getElementById('button');
  button.addEventListener('click',function(){
      let targetNameElement = document.getElementById('name');
      targetNameElement.innerHTML = pokeArray[index].name;

      let targetImageElement = document.getElementById('image');
      targetImageElement.src = pokeArray[index].image;
   
      let targetName2Element = document.getElementById('name2');
      
      let targetImage2Element = document.getElementById('image2');
      if(index != 0 ){
          targetImage2Element.src = pokeArray[index-1].image;
          targetName2Element.innerHTML =  pokeArray[index-1].name;
     }
     if(index == 0 && firstLoop == false){
        targetImage2Element.src = pokeArray[4].image;
        targetName2Element.innerHTML =  pokeArray[4].name;
    }
    index++;
    if(index == 5){
        firstLoop = false;
     index = 0;
    }
    
  })