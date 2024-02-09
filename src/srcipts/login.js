const handleClick = () => {
  window.location.href = "register.html";
};

const handleLogin = async () => {
  let loginName = document.getElementById("loginName").value;
  let loginEmail = document.getElementById("loginEmail").value;
  let loginPassword = document.getElementById("loginPassword").value;

  if (loginName.trim() === "") {
    alert("Please enter your name");
    return loginName;
  }

  if (loginEmail.trim() === "") {
    alert("Please enter your email");
    return loginEmail;
  }

  if (loginPassword.trim() === "") {
    alert("Please enter your password");
    return loginPassword;
  }

  try {
    const getData = localStorage.getItem("AllUser");
    const getUser = JSON.parse(getData);

    const dataLogin = {
      nama: loginName,
      email: loginEmail,
      password: loginPassword,
    };

    let found = false;
    for (let i = 0; i < getUser.length; i++) {
      if (
        getUser[i].nama === dataLogin.nama &&
        getUser[i].email === dataLogin.email &&
        getUser[i].password === dataLogin.password
      ) {
        found = true;
        break;
      }
    }

    if (found) {
      alert("Berhasil login");
      window.location.href = "../pages/index.html";
    } else {
      alert("Data tidak ditemukan!! Daftar terlebih dahulu");
    }
  } catch (error) {
    console.error("Error handling login:", error);
    alert("An error occurred while processing the login.");
  }
};
