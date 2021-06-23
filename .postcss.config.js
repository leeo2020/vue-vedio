module.exports = {
  plugins: {
    autoprefixer: {
      browsers: [
        'last 10 Chrome versions',
         'last 5 Firefox versions',
         'Safari >= 8','Android>7',
         'iOS>8']
     },
     postcss-pxtorem:{
       rootValue:37.5,
       propList:['*']
     }
  }
}
