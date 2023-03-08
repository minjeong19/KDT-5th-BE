const promise = new Promise(function (resolve, reject) {
  const tetz = 'old';
  if (tetz === 'old') {
    setTimeout(() => {
      resolve('tetz is old');
    }, 3000);
  } else {
    reject('tetz is getting old');
  }
});

promise
  // resolve일때는 then, reject일때는 catch
  .then(function (data) {
    console.log(data);
  })
  .catch(function (data) {
    console.log(data);
  });
