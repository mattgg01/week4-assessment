const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const candyBtn = document.getElementById("candyButton")
const songBtn = document.getElementById("songButton")
const stockBtn = document.getElementById("stockButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortunes/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
const getCandy = () => {
    axios.get("http://localhost:4000/api/candies/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getSong = () => {
    axios.get("http://localhost:4000/api/songs/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
const getStock = () => {
    axios.get("http://localhost:4000/api/stocks/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
candyBtn.addEventListener('click', getCandy)
songBtn.addEventListener('click', getSong)
stockBtn.addEventListener('click', getStock)