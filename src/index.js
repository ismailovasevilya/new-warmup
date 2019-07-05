var temperature;
module.exports = function warmup(temperature) {
  console.log('Input the temperature in Celcius')
  parseInt(temperature);
  console.log(temperature*9/5 + 32);
  return (temperature*9/5 + 32);

};

