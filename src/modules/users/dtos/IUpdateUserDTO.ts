export default interface IUpdateUserDTO {
  name: string;
  email: string;
  role: 'admin' | 'user';
}
