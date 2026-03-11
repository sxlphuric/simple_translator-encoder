  const select = document.getElementById("key");
  for (let i = 0; i <= 999; i++) {
    const formattedNumber = String(i).padStart(3, '0');
    const option = document.createElement("option");
    option.value = formattedNumber;
    option.text = formattedNumber;
    select.add(option);
  }