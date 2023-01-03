// const TIMEOUT = 1500;
// const SUCCESS_STATUS = 'OK';

// const nomeLogin = (user) => localStorage.setItem('nomeLogin', JSON.stringify(user));
// const login = () => JSON.parse(localStorage.getItem('nomeLogin'));

// // const simulateRequest = (response) => (callback) => {
// //   setTimeout(() => {
// //     callback(response);
// //   }, TIMEOUT);
// // };

//   export const createUser = (user) => {
//     const emptyUser = {
//       name: '',
//     };
//     nomeLogin({ ...emptyUser, ...user });
//     // simulateRequest(SUCCESS_STATUS)(resolve);
//   };

//   export const getUser = () =>  {
//     let user = login();
//     if (user === null) {
//      user = {};
//   }
//   // simulateRequest(user)(resolve);
// };