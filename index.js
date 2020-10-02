////////////////////////////////////////////////////////////////////////////
// TASK 1


const delay = ms => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(ms), ms);
    })
  };
  
  const logger = time => console.log(`Resolved after ${time}ms`);
  
  // Вызовы функции для проверки
  delay(2000).then(logger); // Resolved after 2000ms
  delay(1000).then(logger); // Resolved after 1000ms
  delay(1500).then(logger); // Resolved after 1500ms


  ////////////////////////////////////////////////////////////////////////////
// TASK 2

// const users = [
//     { name: 'Mango', active: true },
//     { name: 'Poly', active: false },
//     { name: 'Ajax', active: true },
//     { name: 'Lux', active: false },
//   ];
  
//   const toggleUserState = (allUsers, userName, callback) => {

///////////////////////через колбэк///////////////////////////////////

    // const updatedUsers = allUsers.map(user =>
    //   user.name === userName ? { ...user, active: !user.active } : user,
    // );
  
    // callback(updatedUsers);

///////////////////////  Через промисы//////////////////////////////////

//     return new Promise ((resolve, reject) => {
//       setTimeout(() => {
//         const updatedUsers = allUsers.map(user =>
//             user.name === userName ? { ...user, active: !user.active } : user,
//           );
//           resolve(updatedUsers)
//       }, 0);
//     })
//   };
  
//   const logger = updatedUsers => console.table(updatedUsers);
  
//   /*
//    * Сейчас работает так
//    */
// //   toggleUserState(users, 'Mango', logger);
// //   toggleUserState(users, 'Lux', logger);
  
//   /*
//    * Должно работать так
//    */
//   toggleUserState(users, 'Mango').then(logger);
//   toggleUserState(users, 'Lux').then(logger);


  ////////////////////////////////////////////////////////////////////////////
// TASK 2


// const randomIntegerFromInterval = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   };
  
//   const makeTransaction = (transaction, onSuccess, onError) => {
//     const delay = randomIntegerFromInterval(200, 500);

///////////////////////Через колбэк///////////////////////////////////

  
    // setTimeout(() => {
    //   const canProcess = Math.random() > 0.3;
  
    //   if (canProcess) {
    //     onSuccess(transaction.id, delay);
    //   } else {
    //     onError(transaction.id);
    //   }
    // }, delay);


/////////////////////////Через промисы//////////////////////////////////

// return new Promise((resolve ,reject) => {
//   setTimeout(() => {
//       const canProcess = Math.random() > 0.3;
//             if (canProcess) {
//         onSuccess({id:transaction.id, time:delay});
//       } else {
//         onError(transaction.id);
//       }
//     }
// )

//   }

//   const logSuccess = (id) => {
//     console.log(`Transaction ${id.id} processed in ${id.time}ms`);
//   };
  
//   const logError = id => {
//     console.warn(`Error processing transaction ${id}. Please try again later.`);
//   };
  
//   /*
//    * Работает так
//    */
// //   makeTransaction({ id: 70, amount: 150 }, logSuccess, logError);
// //   makeTransaction({ id: 71, amount: 230 }, logSuccess, logError);
// //   makeTransaction({ id: 72, amount: 75 }, logSuccess, logError);
// //   makeTransaction({ id: 73, amount: 100 }, logSuccess, logError);
//   /*
//    * Должно работать так
//    */
//   makeTransaction({ id: 70, amount: 150 })
//     .then(logSuccess)
//     .catch(logError);
  
//   makeTransaction({ id: 71, amount: 230 })
//     .then(logSuccess)
//     .catch(logError);
  
//   makeTransaction({ id: 72, amount: 75 })
//     .then(logSuccess)
//     .catch(logError);
  
//   makeTransaction({ id: 73, amount: 100 })
//     .then(logSuccess)
//     .catch(logError);