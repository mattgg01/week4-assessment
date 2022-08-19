module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = ["You will find $100 tomorrow", "Your road to glory will be rocky, but fulfilling","Don't worry about money, the best things in life are free","Nothing is so much to be feared as fear","The real kindness comes from within you","If you want the rainbow, you have to tolerate the rain"];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },
    getCandy: (req, res) => {
        const candies = ["Twix", "KitKat","Almond Joy","Nerds","Skittles"];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * candies.length);
        let randomCandy = candies[randomIndex];
      
        res.status(200).send(randomCandy);
    },
    getSong: (req, res) => {
        const songs = ["Viva La Vida", "Locked Out of Heaven","The Night We Met","Heathens","Circles"];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * songs.length);
        let randomSong = songs[randomIndex];
      
        res.status(200).send(randomSong);
    },
    getStock: (req, res) => {
        const stocks = ["$GME", "$AAPL","$AMZN","$GOOG","$DPZ","$SNAP","$SHOP"];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * stocks.length);
        let randomStock = stocks[randomIndex];
      
        res.status(200).send(randomStock);
    },
}