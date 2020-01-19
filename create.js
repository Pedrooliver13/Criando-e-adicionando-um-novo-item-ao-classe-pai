const buttonIngredient = document.querySelector(".add-ingredient");
buttonIngredient.addEventListener("click", addIngredient);

function addIngredient() {
    const ingredients = document.querySelector("#ingredients");//classe pai
    const fieldContainer = document.querySelectorAll(".ingredient");//onde fica o elemento filho do input
    
    // Realiza um clone do último ingrediente adicionado
    const newField = fieldContainer[fieldContainer.length - 1].cloneNode(
      true
    );
  
    // Não adiciona um novo input se o último tem um valor vazio
    if (newField.children[0].value == "") return false;
  
    // Deixa o valor do input vazio
    newField.children[0].value = ""; 
    ingredients.appendChild( newField );
    //appendChild = Adiciona um nó ao final da lista de filhos de um nó pai especificado.
  //Se o nó já existir no documento, ele é removido de seu nó pai atual antes de ser adicionado ao novo pai.
  }
