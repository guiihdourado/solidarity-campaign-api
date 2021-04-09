interface Location {
  location_id: string;
  user_id: string;
  campaign_id: string;
}

export default interface ICreateCampaignLocationsRepositoryDTO {
  locations: Location[];
}
