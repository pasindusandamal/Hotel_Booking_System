
const  mongoose  = require("mongoose");

mongoose
  .connect('mongodb+srv://user1:56HNGHlibo2DtwAi@cluster0.jkw3wph.mongodb.net/youtube-video'
  )
  .then(result => {
    console.log(result);
  })
  .catch(err => console.log('err', err))

