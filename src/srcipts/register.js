function createAccount() {
  inputData();
}

const inputData = async () => {
  const user = localStorage.getItem("AllUser");
  const registerName = document.getElementById("registerName").value;
  const registerEmail = document.getElementById("registerEmail").value;
  const registerPassword = document.getElementById("registerPassword").value;
  backLoginPage = true;

  if (registerName.trim() === "") {
    alert("Please enter your name");
    backLoginPage = false;
    return;
  }

  if (registerEmail.trim() === "") {
    alert("Please enter your email");
    backLoginPage = false;
    return;
  }

  if (registerPassword.trim() === "") {
    alert("Please enter your password");
    backLoginPage = false;
    return;
  }

  let datas = {
    nama: registerName,
    email: registerEmail,
    password: registerPassword,
  };

  try {
    if (user) {
      const oldUser = JSON.parse(user);
      let addData = true;

      const existName = oldUser.find(
        (oldUser) => oldUser.nama === registerName
      );
      if (existName) {
        alert("Nama sudah ada");
        addData = false;
        clear();
        return;
      }

      const existEmail = oldUser.find(
        (oldUser) => oldUser.email === registerEmail
      );
      if (existEmail) {
        alert("Email sudah digunakan");
        addData = false;
        clear();
        return;
      }

      if (addData) {
        const newData = [...oldUser, datas];
        localStorage.setItem("AllUser", JSON.stringify(newData));
        clear();
      }
    } else {
      localStorage.setItem("AllUser", JSON.stringify([datas]));
      clear();
    }
  } catch (error) {
    console.error("Error saving user data:", error);
  }

  if (backLoginPage) {
    window.location.href = "../pages/login.html";
    alert("Success");
  } else {
    alert("gagal");
  }
};

const clear = () => {
  const registerName = (document.getElementById("registerName").value = "");
  const registerEmail = (document.getElementById("registerEmail").value = "");
  const registerPassword = (document.getElementById("registerPassword").value =
    "");
};
