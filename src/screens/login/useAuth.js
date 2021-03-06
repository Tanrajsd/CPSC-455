export default async function login(password) {
  const response = await fetch(
    "https://cpsc455-personalcookbook-api.herokuapp.com/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password: password }),
    }
  );

  const data = await response.json();
  if (!response.ok) {
    const errorMsg = data?.message;
    throw new Error(errorMsg);
  }

  if (data?.valid) {
    window.location.href = "/home";
  } else {
    alert("Password is incorrect please try again!");
  }
}
