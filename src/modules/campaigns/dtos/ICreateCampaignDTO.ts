interface ICampaignProduct {
  id: string;
  quantity_we_have: number;
}

export default interface ICreateCampaignDTO {
  name: string;
  available_value: number;
  products: ICampaignProduct[];
}
