var nameInput = document.getElementById("productName")
var priceInput = document.getElementById("productPrice")
var categoryInput = document.getElementById("productCategory")
var saleInput = document.getElementById("productSale")
var descriptionInput = document.getElementById("productDescription")
var searchInput = document.getElementById("searchInput")
var updateBtn = document.getElementById("#updateButton")

var productList = []
if (localStorage.getItem("storageData") != null) {
    productList = JSON.parse(localStorage.getItem("storageData"))
    displayProduct()
}


function addProduct() {
    var product = {
        name: nameInput.value,
        price: priceInput.value,
        cat: categoryInput.value,
        sale: saleInput.checked,
        desc: descriptionInput.value
    }

    productList.push(product);
    localStorage.setItem("storageData", JSON.stringify(productList))
    displayProduct()
}
function displayProduct() {
    var temp = ""
    for (var i = 0; i < productList.length; i++) {
        temp += `<tr>
        <td>`+ i + `</td>
        <td>`+ productList[i].name + `</td>
        <td>`+ productList[i].price + ` </td>
        <td>`+ productList[i].cat + `</td>
        <td>`+ productList[i].sale + `</td>
        <td>`+ productList[i].desc + `</td>
        <td>
            <button onclick="updateProduct()"  id="updateButton" class="btn btn-warning">Update</button>
        </td>
        <td>
            <button onclick="removeProduct(`+ i +`)" class="btn btn-danger">Delete</button>
        </td>
    </tr>`
    }
    document.getElementById("myTable").innerHTML = temp
}
function searchProduct() {
    var searchVal = searchInput.value.toLowerCase()
    var result = ""
    for (var i = 0; i < productList.length; i++) {
        if (productList[i].name.toLowerCase().includes(searchVal) == true) {
            result += `<tr>
        <td>`+ i + `</td>
        <td>`+ productList[i].name + `</td>
        <td>`+ productList[i].price + ` </td>
        <td>`+ productList[i].cat + `</td>
        <td>`+ productList[i].sale + `</td>
        <td>`+ productList[i].desc + `</td>
        <td>
            <button class="btn btn-warning">Update</button>
        </td>
        <td>
            <button" class="btn btn-danger">Delete</button>
        </td>
    </tr>`
        }
        document.getElementById("myTable").innerHTML = result
    }
}
function removeProduct(index){
    productList.splice(index,1)
    displayProduct()
    localStorage.setItem("storageData", JSON.stringify(productList))
}
function clearForm(){
    nameInput.value = ""
    priceInput.value = ""
    categoryInput.value = ""
    saleInput.value = false
    descriptionInput.value = ""
}
function updateProduct(){
    var update = updateBtn.addEventListener('click',function(e){
        console.log(update.e)
    })
}