import Text "mo:core/Text";

actor {
  type RestaurantInfo = {
    name : Text;
    contact : Text;
    location : Text;
  };

  let restaurant : RestaurantInfo = {
    name = "HNR Restaurant";
    contact = "+1-541-818-0466";
    location = "2511 Newmark Ave";
  };

  public query ({ caller }) func getRestaurantInfo() : async RestaurantInfo {
    restaurant;
  };
};
