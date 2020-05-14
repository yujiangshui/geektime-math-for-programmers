const characters = ['a', 'b', 'c', 'd', 'e'];

const password = 'ebea';

function guessPass(result = []) {
  if (result.length === 4) {
    console.log('trying: ', result.join(''));
    if (result.join('') === password) {
      throw result.join('');
    }
    return;
  }
  for (let i = 0; i < characters.length; i++) {
    newResult = [...result];
    newResult.push(characters[i]);

    guessPass(newResult);
  }
}

try {
  guessPass();
} catch (password) {
  console.log('get the password: ', password);
}
