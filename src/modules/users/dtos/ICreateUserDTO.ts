export default interface ICreateUserDTO {
  name: string;
  email: string;
  role: 'admin' | 'user';
}
