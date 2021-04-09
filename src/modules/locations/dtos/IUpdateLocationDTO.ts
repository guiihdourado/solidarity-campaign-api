export default interface IUpdateLocationDTO {
  id: string;
  data: {
    place_name: string;
    place_localization: string;
  };
}
