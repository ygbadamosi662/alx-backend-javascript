import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((res) => (res.map((pr) => ({
      ststus: pr.status,
      value: pr.status === 'fulfilled' ? pr.value : String(pr.reason),
    }))));
}
console.log(handleProfileSignup('diane', 'yusuf', 'me.txt'));
