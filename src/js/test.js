// Два варианта добавления данных
localStorage.userName = "Петя";
localStorage.setItem("favoriteColor", "чёрный");

// После добавления в localStorage, они будут там
// до тех пор, пока их явно не удалить
alert(`${localStorage.userName} предпочитает ${localStorage.favoriteColor} цвет.`);

// А теперь удалим данные из хранилища
localStorage.removeItem("userName");
localStorage.removeItem("favoriteColor");