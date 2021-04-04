interface ICampaignProduct {
  id: string;
  quantity_we_have: number;
}

export default interface ICreateCampaignDTO {
  name: string;
  begin_date: Date;
  end_date: Date;
  available_value: number;
  products: ICampaignProduct[];
}
