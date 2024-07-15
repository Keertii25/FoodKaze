import React from "react";
import ReactDOM from "react-dom/client"
export const img_cdn_url= "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
  
  const Menu = () => {
  return (
    <div className="menu">
      <h2 className="text-2xl font-bold">Menu</h2>
      <div className="menu-category">
        <h3 className="text-lg font-medium">Appetizers</h3>
        <ul>
          <li>Bruschetta</li>
          <li>Calamari</li>
          <li>Caprese Salad</li>
          <li>Garlic Bread</li>
          <li>Stuffed Mushrooms</li>
          <li>Shrimp Cocktail</li>
        </ul>
      </div>
      <div className="menu-category">
        <h3 className="text-lg font-medium">Main Courses</h3>
        <ul>
          <li>Steak Florentine</li>
          <li>Seafood Linguine</li>
          <li>Vegetarian Lasagna</li>
          <li>Grilled Salmon</li>
          <li>Chicken Marsala</li>
          <li>Ratatouille</li>
        </ul>
      </div>
      <div className="menu-category">
        <h3 className="text-lg font-medium">Desserts</h3>
        <ul>
          <li>Tiramisu</li>
          <li>Creme Brulee</li>
          <li>Gelato</li>
          <li>Chocolate Fondant</li>
          <li>Apple Pie</li>
          <li>Cheesecake</li>
        </ul>
      </div>
      <div className="menu-category">
        <h3 className="text-lg font-medium">Drinks</h3>
        <ul>
          <li>Wine (Red, White, Rose)</li>
          <li>Cocktails</li>
          <li>Soft Drinks</li>
          <li>Espresso</li>
          <li>Tea (Various Blends)</li>
          <li>Fruit Juice</li>
        </ul>
      </div>
    </div>
  );
};
export const restaurantList = [

                  {
                    "info": {
                      "id": "581971",
                      "name": "Pizza Hut",
                      "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
                      "locality": "Airport Road",
                      "areaName": "Kalani Nagar",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Pizzas"
                      ],
                      "avgRating": 4.2,
                      "parentId": "721",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "1K+",
                      "sla": {
                        "deliveryTime": 21,
                        "lastMileTravel": 1.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "1.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-06-21 02:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Pizza.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Pizza.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "subHeader": "UPTO ₹90"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/pizza-hut-airport-road-kalani-nagar-indore-581971",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "322540",
                      "name": "UBQ BY Barbeque Nation",
                      "cloudinaryImageId": "ousldxwz6z3cypd2pygf",
                      "locality": "Treasure Island Mall",
                      "areaName": "Mahatma Gandhi Road",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Barbecue",
                        "Biryani",
                        "Kebabs",
                        "Mughlai",
                        "Desserts"
                      ],
                      "avgRating": 4.1,
                      "parentId": "10804",
                      "avgRatingString": "4.1",
                      "totalRatingsString": "1K+",
                      "sla": {
                        "deliveryTime": 46,
                        "lastMileTravel": 5.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "45-50 mins",
                        "lastMileTravelString": "5.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-06-20 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "17% OFF",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/ubq-by-barbeque-nation-treasure-island-mall-mahatma-gandhi-road-indore-322540",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "536863",
                      "name": "La Pino'z Pizza",
                      "cloudinaryImageId": "5fe4444a065b60c4fe39ef975222c12b",
                      "locality": "kalani Nagar",
                      "areaName": "Sarafa",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Pizzas",
                        "Pastas",
                        "Italian",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.1,
                      "veg": true,
                      "parentId": "4961",
                      "avgRatingString": "4.1",
                      "totalRatingsString": "1K+",
                      "sla": {
                        "deliveryTime": 22,
                        "lastMileTravel": 2.1,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "2.1 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-06-21 02:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Pizza.png",
                            "description": "Delivery!"
                          },
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Pizza.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹199"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/la-pinoz-pizza-kalani-nagar-sarafa-indore-536863",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "861658",
                      "name": "Pastas By Pizza Hut",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/e6705d31-3941-4fb8-a198-fc6e24cdcc36_861658.JPG",
                      "locality": "Airport Road",
                      "areaName": "Kalani Nagar",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Pastas"
                      ],
                      "avgRating": 4,
                      "parentId": "306806",
                      "avgRatingString": "4.0",
                      "totalRatingsString": "8",
                      "sla": {
                        "deliveryTime": 20,
                        "lastMileTravel": 1.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "1.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-06-21 02:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹100 OFF",
                        "subHeader": "ABOVE ₹249",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "isNewlyOnboarded": true,
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/pastas-by-pizza-hut-airport-road-kalani-nagar-indore-861658",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "737926",
                      "name": "KFC",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/8ba01310-e5b7-4a90-bef3-98a10bc91238_737926.JPG",
                      "locality": "Indore",
                      "areaName": "Bhavarkua",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Burgers",
                        "Fast Food",
                        "Rolls & Wraps"
                      ],
                      "avgRating": 4.2,
                      "parentId": "547",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "500+",
                      "sla": {
                        "deliveryTime": 28,
                        "lastMileTravel": 4.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "4.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-06-21 02:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Burger.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Burger.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹179"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/kfc-bhavarkua-indore-737926",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "65268",
                      "name": "McDonald's",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/4a8bc67d-8fe4-44db-be5d-1477086cc52b_65268.JPG",
                      "locality": "Bhawarkua main Rd",
                      "areaName": "Beside Rajnandani Hotel",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Burgers",
                        "Beverages",
                        "Cafe",
                        "Desserts"
                      ],
                      "avgRating": 4.3,
                      "parentId": "630",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "10K+",
                      "sla": {
                        "deliveryTime": 29,
                        "lastMileTravel": 5.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "5.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-06-21 03:45:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Burger.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {
                        
                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Burger.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/mcdonalds-bhawarkua-main-rd-beside-rajnandani-hotel-indore-65268",
                      "type": "WEBLINK"
                    }
                  },
];
export default Menu;