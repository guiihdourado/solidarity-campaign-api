interface Product {
  campaign_product_id: string;
  quoted_price: number;
}

export default interface ICreateCampaignProductQuotationDTO {
  user_id: string;
  products: Product[];
}
