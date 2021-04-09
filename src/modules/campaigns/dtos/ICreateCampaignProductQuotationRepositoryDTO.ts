interface Product {
  campaign_product_id: string;
  campaign_location_id: string;
  user_id: string;
  quoted_price: number;
}

export default interface ICreateCampaignProductQuotationRepositoryDTO {
  quoted_products: Product[];
}
