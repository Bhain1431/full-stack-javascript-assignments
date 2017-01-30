const address = new Address("123 fake street, slc , ut , 84111");
console.log(address);
address.validate({});//wrong change object to class

static validate(adress){
  const keys = Object.key(address);

  console.log(keys);
  return result = keys.length === 4;
  console.log(keys);  [ 'streetAddress', 'city', 'state', 'zip']

  const result = keys.length ===4
  && keys
  && keys
  && keys
  && keys
  && address.streetAddress
  && address.city
  && address.state.length === 2
  && address.zip.length === 5;

return result;
}
}
