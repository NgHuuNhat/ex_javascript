// Hàm hiển thị form
function showContent(contentId) {
  // Lấy danh sách các form
  var forms = document.getElementsByTagName('form');

  // Ẩn tất cả các form
  for (var i = 0; i < forms.length; i++) {
    forms[i].style.display = 'none';
  }

  // Hiển thị form được chọn
  var contentForm = document.getElementById(contentId);
  if (contentForm) {
    contentForm.style.display = 'grid';
  }
}

// Gán sự kiện click cho mỗi menu item
document.addEventListener('DOMContentLoaded', function () {
  var menuItems = document.getElementsByClassName('nav-link');
  for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', function (e) {
      e.preventDefault();
      var target = e.target.getAttribute('href').substring(1);
      showContent(target);
    });
  }
});






//login
document.getElementById("loginBtn").addEventListener("click", function (event) {
  event.preventDefault(); // Ngăn chặn gửi biểu mẫu và tải lại trang

  var email = document.getElementById("loginEmail").value;
  var password = document.getElementById("loginPassword").value;
  var user = localStorage.getItem(email);
  var data = JSON.parse(user);

  // Xử lý logic đăng nhập ở đây
  if (email === data.email && password === data.password) {
    document.getElementById("loginButton").style.display = "none";
    document.getElementById("logoutButton").style.display = "block";
    document.getElementById("updateButton").style.display = "block";

    document.getElementById("userEmail").textContent = email;
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    showContent("userListForm");
    alert("Login successful!");
    // location.reload();
  } else {
    alert("Login failed. Please check your email and password.");
  }
});

// click createBtn trong form login
document.getElementById("createBtn").addEventListener("click", function (event) {
  event.preventDefault(); // Ngăn chặn gửi biểu mẫu và tải lại trang
  showContent("createAccountForm");
});

// click updateBtn trong form login
document.getElementById("updateBtn").addEventListener("click", function (event) {
  event.preventDefault(); // Ngăn chặn gửi biểu mẫu và tải lại trang
  showContent("updateAccountForm");
});

//logout
document.getElementById("logoutButton").addEventListener("click", function () {
  document.getElementById("loginButton").style.display = "grid";
  document.getElementById("logoutButton").style.display = "none";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  alert("Logout successful!");
  location.reload();
  showContent("userListForm");
});






//create_account
document.getElementById("createAccountForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Ngăn chặn gửi biểu mẫu và tải lại trang

  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  // var captcha = document.getElementById("captcha").value;

  // Kiểm tra tính hợp lệ của email
  if (!validateEmail(email)) {
    document.getElementById("emailError").textContent = "Invalid email.";
    return;
  } else {
    document.getElementById("emailError").textContent = "";
  }

  // Kiểm tra tính hợp lệ của mật khẩu
  if (!validatePassword(password)) {
    document.getElementById("passwordError").textContent = "Invalid password. Password must be at least 8 characters.";
    return;
  } else {
    document.getElementById("passwordError").textContent = "";
  }

  // Kiểm tra tính hợp lệ của mật khẩu xác nhận
  if (password !== confirmPassword) {
    document.getElementById("confirmPasswordError").textContent = "Passwords do not match.";
    return;
  } else {
    document.getElementById("confirmPasswordError").textContent = "";
  }

  // Kiểm tra tính hợp lệ của captcha
  // if (!validateCaptcha(captcha)) {
  //   document.getElementById("captchaError").textContent = "Invalid captcha.";
  //   return;
  // } else {
  //   document.getElementById("captchaError").textContent = "";
  // }

  var user = {
    email: email,
    password: password,
  };
  localStorage.setItem(email, JSON.stringify(user));
  alert("Account created successfully!");

  // Reset biểu mẫu
  document.getElementById("createAccountForm").reset();

  // Hiển thị userListForm
  location.reload();
  showContent("userListForm");
});






//update_account
document.getElementById("updateAccountForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Ngăn chặn gửi biểu mẫu và tải lại trang

  // // Kiểm tra đăng nhập
  // if (isLoggedIn()) {
  //   // Đã đăng nhập, thực hiện cập nhật tài khoản
  //   showContent("updateAccountForm");
  // } else {
  //   // Chưa đăng nhập, chuyển hướng đến trang đăng nhập hoặc hiển thị thông báo lỗi
  //   showContent("loginForm");
  // }

  var email = document.getElementById("emailUpdate").value;
  var password = document.getElementById("passwordUpdate").value;
  var confirmPassword = document.getElementById("passwordConfirmUpdate").value;
  // var captcha = document.getElementById("captcha").value;
  var avatar = document.getElementById('avatar').value;
  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var phone = document.getElementById('phone').value;
  var address = document.getElementById('address').value;
  var cccd = document.getElementById('cccd').value;
  var socialsFB = document.getElementById('socialsFB').value;
  var socialsTW = document.getElementById('socialsTW').value;

  // Kiểm tra tính hợp lệ của email
  if (!validateEmail(email)) {
    document.getElementById("uemailError").textContent = "Invalid email.";
    return;
  } else {
    document.getElementById("uemailError").textContent = "";
  }

  // Kiểm tra tính hợp lệ của mật khẩu
  if (!validatePassword(password)) {
    document.getElementById("upasswordError").textContent = "Invalid password. Password must be at least 8 characters.";
    return;
  } else {
    document.getElementById("upasswordError").textContent = "";
  }

  // Kiểm tra tính hợp lệ của mật khẩu xác nhận
  if (password !== confirmPassword) {
    document.getElementById("uconfirmPasswordError").textContent = "Passwords do not match.";
    return;
  } else {
    document.getElementById("uconfirmPasswordError").textContent = "";
  }

  // Kiểm tra tính hợp lệ của captcha
  // if (!validateCaptcha(captcha)) {
  //   document.getElementById("captchaError").textContent = "Invalid captcha.";
  //   return;
  // } else {
  //   document.getElementById("captchaError").textContent = "";
  // }

  var user = {
    email: email,
    password: password,
    avatar: avatar,
    firstName: firstName,
    lastName: lastName,
    phone: phone,
    address: address,
    cccd: cccd,
    socialsFB: socialsFB,
    socialsTW: socialsTW,
  };

  localStorage.setItem(email, JSON.stringify(user));
  alert("Account updated successfully!");

  // Reset biểu mẫu
  document.getElementById("updateAccountForm").reset();

  // Hiển thị userListForm
  location.reload();
  showContent("userListForm");
});

// Hàm kiểm tra tính hợp lệ của email
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Hàm kiểm tra tính hợp lệ của mật khẩu
function validatePassword(password) {
  return password.length >= 8;
}

// Hàm kiểm tra tính hợp lệ của captcha
function validateCaptcha(captcha) {
  return captcha.length === 8;
}






// userListForm
var keys = Object.keys(localStorage);
var userListDiv = document.getElementById("userListFormc");
var userDetails = document.getElementById("userDetailsForm");
var userCardTemplate = document.getElementsByClassName("userCard")[0];

userCardTemplate.style.display = "none"; // Ẩn biểu mẫu mặc định

if (keys.length === 0) {
  userListDiv.style.display = "none";
  userDetails.style.display = "none";
} else {
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var storedUser = localStorage.getItem(key);

    if (storedUser !== null) {
      var user = JSON.parse(storedUser);
      var userCardClone = userCardTemplate.cloneNode(true);
      userCardClone.id = "";

      userCardClone.querySelector(".card-img-top").src = user.avatar;
      userCardClone.querySelector(".card-title").textContent = user.firstName + " " + user.lastName;
      userCardClone.querySelector(".card-email").textContent = user.email;

      userCardClone.querySelector(".btn").addEventListener("click", function (event) {
        event.preventDefault();

        var clickedUserEmail = event.target.parentElement.querySelector(".card-email").textContent;
        var clickedUser = JSON.parse(localStorage.getItem(clickedUserEmail));
        displayUserDetails(clickedUser);
        userListForm.style.display = "none";
        userDetailsForm.style.display = "grid";
      });

      userCardClone.style.display = "block"; // Hiển thị biểu mẫu sao chép

      userListDiv.appendChild(userCardClone);
    }
  }
}

// userDetailsForm
function displayUserDetails(user) {
  var userDetailsForm = document.getElementById("userDetailsFormc");

  userDetailsForm.querySelector("#avatar").src = user.avatar;
  userDetailsForm.querySelector("#email").textContent = user.email;
  userDetailsForm.querySelector("#firstName").textContent = user.firstName;
  userDetailsForm.querySelector("#lastName").textContent = user.lastName;
  userDetailsForm.querySelector("#phone").textContent = user.phone;
  userDetailsForm.querySelector("#address").textContent = user.address;
  userDetailsForm.querySelector("#cccd").textContent = user.cccd;
  userDetailsForm.querySelector("#socialsFB").textContent = user.socialsFB;
  userDetailsForm.querySelector("#socialsTW").textContent = user.socialsTW;

  // Hiển thị biểu mẫu userDetailsForm và ẩn biểu mẫu userListForm
  document.getElementById("userListForm").style.display = "none";
  userDetailsForm.style.display = "flex";
}

// //xoa du lieu
// var clearLocalStorageButton = document.getElementById('clearLocalStorageButton');
// clearLocalStorageButton.addEventListener('click', function () {
//   localStorage.clear();
//   alert('Đã xóa dữ liệu trong Local Storage!');
//   location.reload();
// });