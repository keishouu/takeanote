document.getElementById('addbtn').addEventListener('click', function() {
    const title = document.querySelector('#title').value;
    const bodyContent = document.querySelector('#bodyContent').value;

    var card = document.createElement('div');
    card.className = 'col';
    card.innerHTML = `
      <div class="items">
        <div class="items-header">
          <h5 id="inputTitle">${title}</h5>
        </div>
        <hr>
        <div class="items-body">
          <p class="text-align-center" id="inputContent">${bodyContent}</p>
          <button class="btn btn-danger float-end">Delete</button>
        </div>
        <br><br><br><hr>
      </div>
    `;

    document.getElementById('items-container').appendChild(card);

    document.getElementById('title').value = '';
    document.getElementById('bodyContent').value = '';
});

document.getElementById('items-container').addEventListener('click', function(event) {
  if (event.target.classList.contains('btn-danger')) {
      event.target.closest('.items').remove();
  }
});

const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
  if (inputBox.value === '') {
      alert("Text shouldn't be empty!");
  } else {
      let li = document.createElement("li");
      li.innerHTML = inputBox.value;
      listContainer.appendChild(li);
      let span = document.createElement("span");
      span.innerHTML = "\u00d7";
      li.appendChild(span);
  }
  inputBox.value = "";
}

  listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
      e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
      e.target.parentElement.remove();
    }
  });
