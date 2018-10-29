export interface Currency {
  id: String;
  name: String;
  symbol: String;
  rank: String;
  price_usd: String;
  price_btc: String;
  "24h_volume_usd": String;
  available_supply: String;
  total_supply: String;
  max_supply: String;
  percent_change_1h: String;
  percent_change_24h: String;
  percent_change_7d: String;
  last_updated: String;
}