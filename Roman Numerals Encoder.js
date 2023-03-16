function solution(num)
{
  var res   = '',
      dec = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
      rom = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

  dec.map(function (value, index) {
    while (num >= value) {
      res += rom[index];
      num -= value;
    }
  });
  
  return res;
}