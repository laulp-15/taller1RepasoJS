let idEditing = null;

const validateForm = () => {
    let email = document.getElementById("email").value.trim();
    let name = document.getElementById("name").value.trim();
    let doc = document.getElementById("doc").value.trim();

    if (!email || !name || !doc) {
        alert("Por favor complete todos los campos obligatorios.");
        return false;
    }

    if (!email.includes("@")) {
        alert("Por favor, ingrese un correo electrónico válido.");
        return false;
    }

    let listData = JSON.parse(localStorage.getItem("listData")) || [];

    // Buscar duplicados 
    let registered = listData.find(item => (item.email === email || item.doc === doc) && item.id !== idEditing);

    if (registered) {
        if (registered.email === email) {
            alert("Este correo ya está registrado.");
        } else {
            alert("Este documento ya está registrado.");
        }
        return false;
    }

    return true;
};


const showData = () => {
    let listData;
    if (localStorage.getItem("listData") == null) {
        listData = [];
    } else {
        listData = JSON.parse(localStorage.getItem("listData"));
    }

    let html = "";

    listData.forEach(function (element) {
        html += `<tr>
                    <td>${element.email}</td>
                    <td>${element.name}</td>
                    <td>${element.doc}</td>
                    <td>
                        <button class="btn btn-sm btn-outline-warning" onclick="editData(${element.id})">
                            <i class="bi bi-pencil"></i>
                        </button>
                        <button class="btn btn-sm btn-outline-danger" onclick="deleteData(${element.id})">
                            <i class="bi bi-trash"></i>
                        </button>
                    </td>
                </tr>`;
    });
    document.getElementById("data-table-body").innerHTML = html;
};

// Create Data
window.onload = showData;

const addData = () => {
    if (!validateForm()) return;

    let email = document.getElementById("email").value.trim();
    let name = document.getElementById("name").value.trim();
    let doc = document.getElementById("doc").value.trim();


    let listData = JSON.parse(localStorage.getItem("listData")) || [];

    if (idEditing === null) {
        // crear
        listData.push({
            id: Date.now(),
            email,
            name,
            doc
        });
    } else {
        // editar
        listData = listData.map(item => {
            if (item.id === idEditing) {
                return { id: item.id, email, name, doc };
            }
            return item;
        });
        idEditing = null;
    }

    localStorage.setItem("listData", JSON.stringify(listData));
    showData();

    document.getElementById("email").value = "";
    document.getElementById("name").value = "";
    document.getElementById("doc").value = "";
};

// Edit Data
function editData(id) {
    let listData = JSON.parse(localStorage.getItem("listData"));

    let data = listData.find(item => item.id === id);

    document.getElementById("email").value = data.email;
    document.getElementById("name").value = data.name;
    document.getElementById("doc").value = data.doc;

    idEditing = id;
};

// Delete Data
function deleteData(id) {
    let listData = JSON.parse(localStorage.getItem("listData")) || [];

    listData = listData.filter(item => item.id !== id);

    localStorage.setItem("listData", JSON.stringify(listData));
    showData();
};

function deleteAllData() {
    if (!confirm("¿Seguro que quieres borrar todos los registros?")) {
        return;
    }

    localStorage.removeItem("listData");
    showData();

    idEditing = null; // Resetear el estado de edición
};