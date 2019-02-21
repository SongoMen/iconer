var database = firebase.database();
var icons = document.getElementById('icons')
var input = document.getElementById('search__bar')
function getIcons() {
    firebase.database().ref('icons').once('value',function(snapshot){
        snapshot.forEach(function(child){ 
          let name = child.val().name;
          let url = child.val().url;
          let div = document.createElement('div');
          icons.appendChild(div)
          div.className="icons__box";
          div.innerHTML=`<img alt=${name} src=${url}></img><p>${name}</p>`
        });
      })
      .then(function(){
          setTimeout(() => {
             document.getElementById('loader').style.display='none'
             document.getElementById('container').style.animation='show 1s'
          }, 1000);
      })
  }

  function filterFunc(){
    let li,a,txtValue,filter;
    filter = input.value;
    li = icons.getElementsByTagName('li');
    for (i = 0; i < li.length; i++) {
        p = li[i].getElementsByTagName("p")[0];
        txtValue = p.textContent || p.innerText;
        if (txtValue.indexOf(filter) > -1) {
          li[i].style.display = "flex";
        } else {
          li[i].style.display = "none";
        }
      }
  }

 getIcons();