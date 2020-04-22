const fn = async () => {
    try {
        const res = await fetch('http://pokeapi.co/api/v2/pokemon');
        const data = await res.json();
    
        console.log(data);
        
        data.results.forEach(element => {
            const li = document.createElement('li');
            li.textContent = element.name;
            document.querySelector('#list').appendChild(li);
        });
    } catch (err) {
        console.log(err);
    }
};

fn();
