interface Location {
  location_id: string;
}

export default interface ICreateCampaignLocationsDTO {
  user_id: string;
  campaign_id: string;
  locations: Location[];
}
