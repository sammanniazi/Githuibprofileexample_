fetch('https://api.github.com/users/sammanniazi')
  .then(response => response.json())
  .then(json => {
  console.log(json)
  	
  document.getElementById('title').innerHTML = json.name;
    document.getElementById('body').innerHTML = json.bio;
  
  })