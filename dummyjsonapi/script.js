function getdata()
{
    fetch('https://dummyjson.com/products')
    
    .then(res => res.json())

    .then(data=> {

        data.array.forEach(element => {
            console.log
        });
    });


}
