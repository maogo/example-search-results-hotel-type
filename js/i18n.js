var i18n = {
	en: {
		avgNight: "avg/night",
		deals: "View deals",
		reviews: "Reviews",
		inBerlin: "in Berlin",
		similarHotels: "Show similar hotels",
		bestHotels: "Best Hotels in Berlin",
		bestMix: "Best Mix",
		business: "Business",
		family: "Family",
		romantic: "Romantic",
		luxury: "Luxury",
		more: "More",
		boutique: "Boutique",
		design: "Design",
		budget: "Budget",
		cityTrip: "City Trip",
		party: "Party",
		airport: "Airport",
		beach: "Beach",
		casino: "Casino",
		ecoFriendly: "Eco-friendly",
		spa: "Spa",
		golf: "Golf",
		resort: "Resort",
		lake: "Lake",
		waterPark: "Water Park",
		bestBusinessHotels: "Best Business Hotels in Berlin",
		bestFamilyHotels: "Best Family Hotels in Berlin",
		bestRomanticHotels: "Best Romantic Hotels in Berlin",
		bestLuxuryHotels: "Best Luxury Hotels in Berlin",
		bestBoutiqueHotels: "Best Boutique Hotels in Berlin",
		bestDesignHotels: "Best Design Hotels in Berlin",
		bestBudgetHotels: "Best Budget Hotels in Berlin",
		bestEcoHotels: "Best Eco-Friendly Hotels in Berlin",
		bestWellnessHotels: "Best Wellness Hotels in Berlin",
		bestCityTripHotels: "Best City Trip Hotels in Berlin",
		bestPartyHotels: "Best Party Hotels in Berlin",
		bestCasinoHotels: "Best Casino Hotels in Berlin",
		bestAirportHotels: "Best Airport Hotels in Berlin",
		bestBeachHotels: "Best Beach Hotels in Berlin"
	},
	zh: {
		avgNight: "平均每晚",
		deals: "查看价格",
		reviews: "条评论",
		inBerlin: "柏林",
		similarHotels: "显示类似的酒店",
		bestHotels: "柏林最好的酒店",
		bestMix: "综合",
		business: "商务",
		family: "家庭",
		romantic: "浪漫",
		luxury: "豪华",
		more: "更多",
		boutique: "精品",
		design: "设计",
		budget: "经济",
		cityTrip: "城市",
		party: "聚会",
		airport: "机场",
		beach: "滨海",
		casino: "赌场",
		ecoFriendly: "生态",
		spa: "疗养",
		golf: "高尔夫",
		resort: "度假村",
		lake: "滨湖",
		waterPark: "水上乐园",
		bestBusinessHotels: "柏林最好的商务酒店",
		bestFamilyHotels: "柏林最好的家庭酒店",
		bestRomanticHotels: "柏林最好的浪漫酒店",
		bestLuxuryHotels: "柏林最好的豪华酒店",
		bestBoutiqueHotels: "柏林最好的精品酒店",
		bestDesignHotels: "柏林最好的设计酒店",
		bestBudgetHotels: "柏林最好的经济酒店",
		bestEcoHotels: "柏林最好的生态酒店",
		bestWellnessHotels: "柏林最好的疗养酒店",
		bestCityTripHotels: "柏林最好的城市酒店",
		bestPartyHotels: "柏林最好的聚会酒店",
		bestCasinoHotels: "柏林最好的赌场酒店",
		bestAirportHotels: "柏林最好的机场酒店",
		bestBeachHotels: "柏林最好的滨海酒店"
	}
};

var lang = (function(){
	var loc = location.search,
		args = null,
		lang = null;

	if(loc[loc.length - 1] == "/"){
		loc = loc.substring(1, loc.length - 1);
	}
	else {
		loc = loc.substring(1, loc.length);
	}

	args = loc.split("&");
	var len = args.length,
		arg = null;

	for(var i = 0; i < len; i++){
		arg = args[i].split('=');
		if(arg[0] == "lang"){
			lang = arg[1];
			break
		}
	}

	if( lang != null && lang in i18n){
		return lang;
	}
	else{
		return "en";
	}
})();