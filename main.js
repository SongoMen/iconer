var database = firebase.database();
var icons = document.getElementById('icons')
var input = document.getElementById('search__bar')
function getIcons() {
    firebase.database().ref('icons').once('value',function(snapshot){
        snapshot.forEach(function(child){ 
          let name = child.val().name;
          let url = child.val().url;
          let a = document.createElement('a');
          icons.appendChild(a)
          a.href=`${url}`
          a.download =`${name}`
          a.target="blank"
          a.className="icons__box";
          a.innerHTML=`<img alt=${name} src=${url}></img><p>${name}</p>`
        });
      })
      .then(function(){
          setTimeout(() => {
             document.getElementById('loader').style.display='none'
             document.getElementById('container').style.display='flex'
             document.getElementById('container').style.animation='show 1s'
          }, 1000);
      })
  }

  function filterFunc(){
    let li,a,txtValue,filter;
    filter = input.value;
    a = icons.getElementsByTagName('a');
    for (i = 0; i < a.length; i++) {
        p = a[i].getElementsByTagName("p")[0];
        txtValue = p.textContent || p.innerText;
        if (txtValue.indexOf(filter) > -1) {
          a[i].style.display = "flex";
        } else {
          a[i].style.display = "none";
        }
      }
  }

 getIcons();
