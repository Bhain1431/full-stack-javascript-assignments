export const ssn = value => {

  const sanitize = () => value.replace(/\D+/g, '');// This RegEx removes non-digit charictures such asnletters, spaces ,and puctuation

  const format = (value) => `${value.substring(0, 3)}-${value.substring(3, 5)}-${value.substring(5)}`;// This one formats the number to look like this 000-00-0000

  const sanitized = sanitize();

  const isValid = () => {

  return sanitized.length === 10
  };
  return{


    isValid,

    toString(){
      return format(sanitized)

    }
  };
};



// Why does this work?.......  This works because of hoisting even though line 28 dosent know what calculate is because it is given a value later Javascript mooves it up.
export const result = calculate(1,2);         //but this is stupid dont do it.

function calculate(x, y) {
  return x + y;
}
