fetch('http://pokeapi.co/api/v2/pokemon')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        
        data.results.forEach(element => {
            const li = document.createElement('li');
            li.textContent = element.name;
            document.querySelector('#list').appendChild(li);
        });
    })
    .catch(error => console.log(error));