// bước 1: 
// khai báo mảng đối tương category 
var list = JSON.parse(localStorage.getItem("list_category")) ? JSON.parse(localStorage.getItem("list_category")) : [];
console.log(list);
// duyệt mảng và hiển thị vào tbody giống cái bài chữa vừa rồi 

function render() {
    var _tr = "";

    list.forEach(function (item, index) {
        console.log(item);
        _tr += `<tr>
                    <td>${index + 1}</td>
                    <td>${item.id}</td>
                    <td>${item.name}</td>
                    <td>${item.status ? "Hoạt động" : "Không hoạt động"}</td>
                    <td>
                        <a href="">Sửa</a>
                        <a href="#" onclick="remove(${index})">xóa</a>
                    </td>
                </tr>`
    })

    var _tbody = document.getElementById("hung");
    _tbody.innerHTML = _tr;
}
render();

// xử lý việc thêm mới tạo hàm 
// bước 1 lấy được dữ liệu từ input khi click vào nút ttheem mới {id:?lay tư input ma, nam,lay tu input name,status:lay tu input status}

// bước 2 : push phần tử {id:?lay tư input ma, nam,lay tu input name,status:lay tu input status} vào mảng list

// bước 3 gọi hàm render()
function addCategory() {
    var _id = document.getElementById("id").value;
    var _name = document.getElementById("name").value;
    var _inputStatus = document.getElementsByName("status");
    var valueStatus;

    for (const item of _inputStatus) {
        if (item.checked) {
            valueStatus = item.value;
            break;
        }
    }
    var cate = { id: _id, name: _name, status: valueStatus }
    // thêm 1 phần tử vào mảng
    list.push(cate);

    // lưu vào localStorege 
    localStorage.setItem("list_category", JSON.stringify(list));
    // gọi hàm render để hiển thị lại table
    render();
}

// xóa
// tạo hàm xóa
// bước 1 click vào button xóa lấy về index của phần tử trong mảng cần xóa cần xóa
// bước 2 xóa phần tử theo index
// bước 3 gọi lại hàm render() 

function remove(index) {
    console.log(index);
    list.splice(index, 1);
    // lưu vào localStorege 
    localStorage.setItem("list_category", JSON.stringify(list));
    render();
}
