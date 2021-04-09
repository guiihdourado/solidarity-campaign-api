interface Location {
  location_id: string;
  user_id: string;
}

export default interface ICreateCampaignLocationsDTO {
  campaign_id: string;
  locations: Location[];
}
