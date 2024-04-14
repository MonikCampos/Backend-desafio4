const socket = io();

socket.on('Products', products => {
    //console.log(products);
    const tbody = document.getElementById("productsBody");
    tbody.innerHTML = '';

    products.forEach(element => {
        const  tr = tbody.insertRow();
        tr.innerHTML = `
        <td>${element.id}</td>
        <td>${element.title}</td>
        <td>${element.description}</td>
        <td>${element.price}</td>
        <td>${element.code}</td>
        <td>${element.status}</td>
        <td>${element.stock}</td>
        <td>${element.category}</td>
        <td>${element.brand}</td>
        <td>${element.thumbnail==undefined ? 'Without image' : element.thumbnail[0]}</td>
        `;
    });
});
