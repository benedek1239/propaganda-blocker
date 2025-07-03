const images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCC38kJHL7PuSL6kfO2J7lybd1KNPq2lUscg&s",
  "https://images.theconversation.com/files/651621/original/file-20250226-32-jxjhmy.jpg?ixlib=rb-4.1.0&rect=0%2C0%2C5991%2C3997&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip",
  "https://cataas.com/cat",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS0IQhVr9DDJCq61QX28zCoiqDrvezBh5ylw&s",
  "https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg"
];
const randomImg = images[Math.floor(Math.random() * images.length)];

document.documentElement.innerHTML = `
  <style>
    div {
        width: 50%;
    }
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: #fefefe;
      font-family: Arial, sans-serif;
    }
    img {
      width: 100%;
      height: auto;
      border-radius: 15px;
    }
    h1 {
      color: #444;
    }
  </style>
  <div>
    <h1>Ez az oldal mérgező propagandát tartalmaz!</h1>
    <p>🐾 Helyette itt van egy cica 🐾</p>
    <img src="${randomImg}" alt="cica">
  </div>
`;
