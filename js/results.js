var demographic_options = {	
	pharmacy_id:["1", "2", "3"],
	gender:["Male", "Female"],
	age_band:["18 - 30", "31 - 50", "51 - 70", "71+"],
	ethnic_group:["White British","Other White Background","White/Black","White/Asian","Mixed Other","Caribbean","African","Black Other","Indian","Pakistani","Bangladeshi","Chinese","Asian Other"]	
}
var demographic_titles = {
	pharmacy_id:"Pharmacies",
	gender:"Genders",
	age_band:"Age Bands",
	ethnic_group: "Ethnic Groups"
	
}
var result_responses = {
	reason:{
		"Prescription":"Prescription",
		"Buy a Medicine":"Buy a medicine (over-the-counter)",
		"Buy a Product":"Buy a product (non-medicinal)",
		"Advice":"Advice",
		"Other":"Other"
	},
	bought:["Yes", "No"],
	intention:["Yes", "No"],
	influence:{
		"Used Before":"Used Before",
		"Recommended by family/friend":"Family/friend",
		"Recommended by HCP":"Healthcare professional",
		"Advertised":"Advertised",
		"Internet":"Internet",
		"Other":"Other"
	},
	trust:["Strongly Agree","Agree","Neither","Disagree","Strongly Disagree"],
	same:["Yes", "No"],
	symptoms:["Yes", "No"],
	helpful:["Strongly Agree","Agree","Neither","Disagree","Strongly Disagree"],
	advice:{
		"Pharmacy":"In a pharmacy",
		"Doctor":"My Doctor",
		"Family/friend":"Family/friends",
		"Internet":"The internet",
		"Books":"Magazines or books",
		"Don't":"I don't",
		"Other":"Other"
	}
}
var result_showing = {
	reason:{
		"Prescription":"visisted to collect a prescription",
		"Buy a Medicine":"visisted to buy a medicine",
		"Buy a Product":"visited to buy a product",
		"Advice":"visited for advice",
		"Other":"visited for other reasons"
	},
	bought:{
		"Yes":"bought a medicine", 
		"No":"did not buy a medicine"
	},
	intention:{
		"Yes":"came with the intention to buy a specific medicine", 
		"No":"came with the intention to buy a medicine (but not a specific one)"
	},
	influence:{
		"Used Before":"came to buy a specific medicine having used it before",
		"Recommended by family/friend":"came to buy a specific medicine recommended by a family/friend",
		"Recommended by HCP":"came to buy a medicine recommended by a healthcare professional",
		"Advertised":"came to buy a specific medicine they saw advertised",
		"Internet":"came to buy a specific medicine they saw on the internet",
		"Other":"came to buy a specific medicine"
	},
	trust:{
		"Strongly Agree":"strongly agrees they trust the influence ({{key:influence}})",
		"Agree":"agrees they trust the influence ({{key:influence}})",
		"Neither":"neither agrees or disagrees they trust the influence ({{key:influence}})",
		"Disagree":"disagrees they trust the influence ({{key:influence}})",
		"Strongly Disagree":"strongly disagrees they trust the influence ({{key:influence}})"
	},
	same:{
		"Yes":"did not buy the same medicine they intended do", 
		"No":"bought the same medicine they intended do"
	},
	symptoms:{
		"Yes":"discussed symptoms or alternative products with pharmacy staff", 
		"No":"did not discuss symptoms or alternative products with pharmacy staff"
	},
	helpful:{
		"Strongly Agree":"strongly agrees discussing symptoms with pharmacy staff was helpful",
		"Agree":"agrees discussing symptoms with pharmacy staff was helpful",
		"Neither":"neither agrees or disagrees discussing symptoms with pharmacy staff was helpful",
		"Disagree":"disagrees discussing symptoms with pharmacy staff was helpful",
		"Strongly Disagree":"strongly disagress discussing symptoms with pharmacy staff was helpful"
	},
	advice:{
		"Pharmacy":"generally get advice from a pharmacy for OTC medicines",
		"Doctor":"generally get advice from a doctor for OTC medicines",
		"Family/friend":"generally get advice from family/friends for OTC medicines",
		"Internet":"generally get advice from the internet for OTC medicines",
		"Books":"generally get advice from books or magazines for OTC medicines",
		"Don't":"generally don't get advice for OTC medicine ",
		"Other":"generally get advice from other sources for OTC medicines"
	}
}

var questions = {
	reason:{
		number:1,
		question:"What was the reason for visiting the pharmacy today?"
	},
	bought:{
		number:2,
		question:"Did you buy a medicine from the pharmacy today (not a prescription medicine)?",
		nested_under:1
	},
	intention:{
		number:3,
		question:"Did you come with the intention to buy a particular product?",
		nested_under:1
	},
	influence:{
		number:4,
		question:"What influenced you or helped you make your decision to buy the intended product?",
		nested_under:3
	},
	trust:{
		number:5,
		question:"The source of information or influence was trustworthy?",
		nested_under:4
	},
	same:{
		number:6,
		question:"Did you buy the same product you initially intended?",
		nested_under:3
	},
	symptoms:{
		number:7,
		question:"Did you discuss symptoms or product with a member of staff in the pharmacy today?",
		nested_under:1
	},
	helpful:{
		number:8,
		question:"The advice given by the member of staff was helpful to me?",
		nested_under:7
	},
	advice:{
		number:9,
		question:"Generally speaking, where do you prefer to get advice or information about medicine that you can buy from a pharmacy?"
	}
}




var results = [
	{
		"form_id": "2",
		"pharmacy_id": "2",
		"gender": "Female",
		"age_band": "31 - 50",
		"ethnic_group": "White British",
		"reason": "Buy a Medicine",
		"bought": "Yes",
		"intention": "No",
		"influence": "Recommended by HCP",
		"trust": "Strongly Agree",
		"same": "No",
		"symptoms": "No",
		"helpful": "Neither",
		"advice": [
			"Pharmacy"
		]
	},
	{
		"form_id": "3",
		"pharmacy_id": "2",
		"gender": "Female",
		"age_band": "31 - 50",
		"ethnic_group": "White British",
		"reason": "Prescription",
		"bought": "",
		"intention": "",
		"influence": "",
		"trust": "",
		"same": "",
		"symptoms": "",
		"helpful": "",
		"advice": [
			"Pharmacy"
		]
	},
	{
		"form_id": "4",
		"pharmacy_id": "2",
		"gender": "Female",
		"age_band": "18 - 30",
		"ethnic_group": "White British",
		"reason": "Prescription",
		"bought": "",
		"intention": "",
		"influence": "",
		"trust": "",
		"same": "",
		"symptoms": "",
		"helpful": "",
		"advice": [
			"Doctor"
		]
	},
	{
		"form_id": "5",
		"pharmacy_id": "2",
		"gender": "Male",
		"age_band": "31 - 50",
		"ethnic_group": "White British",
		"reason": "Buy a Medicine",
		"bought": "Yes",
		"intention": "Yes",
		"influence": "Recommended by HCP",
		"trust": "Strongly Agree",
		"same": "No",
		"symptoms": "Yes",
		"helpful": "Strongly Agree",
		"advice": [
			"Doctor",
			"Internet"
		]
	},
	{
		"form_id": "6",
		"pharmacy_id": "2",
		"gender": "Female",
		"age_band": "31 - 50",
		"ethnic_group": "White British",
		"reason": "Buy a Medicine",
		"bought": "Yes",
		"intention": "Yes",
		"influence": "Internet",
		"trust": "Neither",
		"same": "No",
		"symptoms": "Yes",
		"helpful": "Agree",
		"advice": [
			"Internet"
		]
	},
	{
		"form_id": "7",
		"pharmacy_id": "2",
		"gender": "Male",
		"age_band": "31 - 50",
		"ethnic_group": "White British",
		"reason": "Buy a Medicine",
		"bought": "Yes",
		"intention": "Yes",
		"influence": "Recommended by family/friend",
		"trust": "Neither",
		"same": "No",
		"symptoms": "Yes",
		"helpful": "Agree",
		"advice": [
			"Pharmacy"
		]
	},
	{
		"form_id": "8",
		"pharmacy_id": "2",
		"gender": "Female",
		"age_band": "31 - 50",
		"ethnic_group": "White British",
		"reason": "Buy a Medicine",
		"bought": "Yes",
		"intention": "Yes",
		"influence": "Used Before",
		"trust": "Agree",
		"same": "Yes",
		"symptoms": "No",
		"helpful": "Agree",
		"advice": [
			"Pharmacy"
		]
	},
	{
		"form_id": "9",
		"pharmacy_id": "2",
		"gender": "Female",
		"age_band": "18 - 30",
		"ethnic_group": "White British",
		"reason": "Prescription",
		"bought": "",
		"intention": "",
		"influence": "",
		"trust": "",
		"same": "",
		"symptoms": "",
		"helpful": "",
		"advice": [
			"Internet"
		]
	},
	{
		"form_id": "10",
		"pharmacy_id": "2",
		"gender": "Female",
		"age_band": "31 - 50",
		"ethnic_group": "White British",
		"reason": "Buy a Product",
		"bought": "",
		"intention": "",
		"influence": "",
		"trust": "",
		"same": "",
		"symptoms": "",
		"helpful": "",
		"advice": [
			"Pharmacy",
			"Internet"
		]
	},
	{
		"form_id": "11",
		"pharmacy_id": "2",
		"gender": "Female",
		"age_band": "31 - 50",
		"ethnic_group": "White British",
		"reason": "Buy a Medicine",
		"bought": "Yes",
		"intention": "Yes",
		"influence": "Recommended by family/friend",
		"trust": "Agree",
		"same": "No",
		"symptoms": "Yes",
		"helpful": "Agree",
		"advice": [
			"Internet"
		]
	},
	{
		"form_id": "12",
		"pharmacy_id": "2",
		"gender": "Male",
		"age_band": "18 - 30",
		"ethnic_group": "White British",
		"reason": "Prescription",
		"bought": "",
		"intention": "",
		"influence": "",
		"trust": "",
		"same": "",
		"symptoms": "",
		"helpful": "",
		"advice": [
			"Internet"
		]
	},
	{
		"form_id": "13",
		"pharmacy_id": "2",
		"gender": "Male",
		"age_band": "31 - 50",
		"ethnic_group": "White British",
		"reason": "Buy a Medicine",
		"bought": "Yes",
		"intention": "Yes",
		"influence": "Used Before",
		"trust": "Strongly Agree",
		"same": "Yes",
		"symptoms": "No",
		"helpful": "Strongly Agree",
		"advice": [
			"Internet"
		]
	},
	{
		"form_id": "14",
		"pharmacy_id": "2",
		"gender": "Male",
		"age_band": "51 - 70",
		"ethnic_group": "White British",
		"reason": "Buy a Medicine",
		"bought": "Yes",
		"intention": "Yes",
		"influence": "Used Before",
		"trust": "Strongly Agree",
		"same": "Yes",
		"symptoms": "No",
		"helpful": "Strongly Agree",
		"advice": [
			"Pharmacy"
		]
	},
	{
		"form_id": "15",
		"pharmacy_id": "2",
		"gender": "Male",
		"age_band": "51 - 70",
		"ethnic_group": "White British",
		"reason": "Buy a Medicine",
		"bought": "Yes",
		"intention": "Yes",
		"influence": "Recommended by HCP",
		"trust": "Strongly Agree",
		"same": "No",
		"symptoms": "Yes",
		"helpful": "Strongly Agree",
		"advice": [
			"Pharmacy"
		]
	},
	{
		"form_id": "16",
		"pharmacy_id": "2",
		"gender": "Female",
		"age_band": "31 - 50",
		"ethnic_group": "White British",
		"reason": "Prescription",
		"bought": "",
		"intention": "",
		"influence": "",
		"trust": "",
		"same": "",
		"symptoms": "",
		"helpful": "",
		"advice": [
			"Pharmacy"
		]
	},
	{
		"form_id": "17",
		"pharmacy_id": "2",
		"gender": "Female",
		"age_band": "51 - 70",
		"ethnic_group": "White British",
		"reason": "Prescription",
		"bought": "",
		"intention": "",
		"influence": "",
		"trust": "",
		"same": "",
		"symptoms": "",
		"helpful": "",
		"advice": [
			"Pharmacy"
		]
	},
	{
		"form_id": "18",
		"pharmacy_id": "2",
		"gender": "Female",
		"age_band": "51 - 70",
		"ethnic_group": "White British",
		"reason": "Buy a Medicine",
		"bought": "No",
		"intention": "Yes",
		"influence": "Recommended by family/friend",
		"trust": "Neither",
		"same": "No",
		"symptoms": "Yes",
		"helpful": "Neither",
		"advice": [
			"Pharmacy"
		]
	},
	{
		"form_id": "19",
		"pharmacy_id": "2",
		"gender": "Female",
		"age_band": "31 - 50",
		"ethnic_group": "White British",
		"reason": "Buy a Medicine",
		"bought": "Yes",
		"intention": "Yes",
		"influence": "Used Before",
		"trust": "Strongly Agree",
		"same": "Yes",
		"symptoms": "No",
		"helpful": "",
		"advice": [
			"Pharmacy"
		]
	},
	{
		"form_id": "20",
		"pharmacy_id": "2",
		"gender": "Female",
		"age_band": "31 - 50",
		"ethnic_group": "White British",
		"reason": "Prescription",
		"bought": "",
		"intention": "",
		"influence": "",
		"trust": "",
		"same": "",
		"symptoms": "",
		"helpful": "",
		"advice": [
			"Pharmacy"
		]
	},
	{
		"form_id": "21",
		"pharmacy_id": "2",
		"gender": "Female",
		"age_band": "18 - 30",
		"ethnic_group": "White British",
		"reason": "Prescription",
		"bought": "",
		"intention": "",
		"influence": "",
		"trust": "",
		"same": "",
		"symptoms": "",
		"helpful": "",
		"advice": [
			"Internet"
		]
	},
	{
		"form_id": "22",
		"pharmacy_id": "2",
		"gender": "Male",
		"age_band": "51 - 70",
		"ethnic_group": "White British",
		"reason": "Prescription",
		"bought": "",
		"intention": "",
		"influence": "",
		"trust": "",
		"same": "",
		"symptoms": "",
		"helpful": "",
		"advice": [
			"Pharmacy",
			"Family/friend"
		]
	},
	{
		"form_id": "23",
		"pharmacy_id": "2",
		"gender": "Female",
		"age_band": "31 - 50",
		"ethnic_group": "White British",
		"reason": "Buy a Medicine",
		"bought": "Yes",
		"intention": "Yes",
		"influence": "Recommended by HCP",
		"trust": "Strongly Agree",
		"same": "Yes",
		"symptoms": "No",
		"helpful": "",
		"advice": [
			"Internet"
		]
	},
	{
		"form_id": "24",
		"pharmacy_id": "2",
		"gender": "Male",
		"age_band": "51 - 70",
		"ethnic_group": "White British",
		"reason": "Prescription",
		"bought": "",
		"intention": "",
		"influence": "",
		"trust": "",
		"same": "",
		"symptoms": "",
		"helpful": "",
		"advice": [
			"Family/friend"
		]
	},
	{
		"form_id": "25",
		"pharmacy_id": "2",
		"gender": "Male",
		"age_band": "31 - 50",
		"ethnic_group": "White British",
		"reason": "Buy a Medicine",
		"bought": "No",
		"intention": "No",
		"influence": "Used Before",
		"trust": "Agree",
		"same": "No",
		"symptoms": "Yes",
		"helpful": "Agree",
		"advice": [
			"Pharmacy"
		]
	},
	{
		"form_id": "26",
		"pharmacy_id": "2",
		"gender": "Male",
		"age_band": "51 - 70",
		"ethnic_group": "White British",
		"reason": "Prescription",
		"bought": "",
		"intention": "",
		"influence": "",
		"trust": "",
		"same": "",
		"symptoms": "",
		"helpful": "",
		"advice": [
			"Pharmacy"
		]
	},
	{
		"form_id": "27",
		"pharmacy_id": "2",
		"gender": "Female",
		"age_band": "31 - 50",
		"ethnic_group": "White British",
		"reason": "Buy a Medicine",
		"bought": "Yes",
		"intention": "Yes",
		"influence": "Used Before",
		"trust": "Strongly Agree",
		"same": "Yes",
		"symptoms": "Yes",
		"helpful": "Strongly Agree",
		"advice": [
			"Pharmacy"
		]
	},
	{
		"form_id": "28",
		"pharmacy_id": "2",
		"gender": "Male",
		"age_band": "51 - 70",
		"ethnic_group": "White British",
		"reason": "Buy a Medicine",
		"bought": "Yes",
		"intention": "No",
		"influence": "Recommended by HCP",
		"trust": "Agree",
		"same": "No",
		"symptoms": "Yes",
		"helpful": "Agree",
		"advice": [
			"Family/friend"
		]
	},
	{
		"form_id": "29",
		"pharmacy_id": "2",
		"gender": "Female",
		"age_band": "51 - 70",
		"ethnic_group": "White British",
		"reason": "Buy a Medicine",
		"bought": "Yes",
		"intention": "No",
		"influence": "Recommended by HCP",
		"trust": "Agree",
		"same": "No",
		"symptoms": "Yes",
		"helpful": "Agree",
		"advice": [
			"Pharmacy"
		]
	},
	{
		"form_id": "30",
		"pharmacy_id": "2",
		"gender": "Female",
		"age_band": "71+",
		"ethnic_group": "White British",
		"reason": "Buy a Medicine",
		"bought": "Yes",
		"intention": "Yes",
		"influence": "Used Before",
		"trust": "Agree",
		"same": "Yes",
		"symptoms": "No",
		"helpful": "Agree",
		"advice": [
			"Family/friend"
		]
	},
	{
		"form_id": "31",
		"pharmacy_id": "2",
		"gender": "Male",
		"age_band": "31 - 50",
		"ethnic_group": "White/Black",
		"reason": "Prescription",
		"bought": "",
		"intention": "",
		"influence": "",
		"trust": "",
		"same": "",
		"symptoms": "",
		"helpful": "",
		"advice": [
			"Pharmacy"
		]
	},
	{
		"form_id": "32",
		"pharmacy_id": "2",
		"gender": "Female",
		"age_band": "51 - 70",
		"ethnic_group": "White British",
		"reason": "Prescription",
		"bought": "",
		"intention": "",
		"influence": "",
		"trust": "",
		"same": "",
		"symptoms": "",
		"helpful": "",
		"advice": [
			"Pharmacy"
		]
	},
	{
		"form_id": "33",
		"pharmacy_id": "2",
		"gender": "Male",
		"age_band": "51 - 70",
		"ethnic_group": "White British",
		"reason": "Buy a Product",
		"bought": "",
		"intention": "",
		"influence": "",
		"trust": "",
		"same": "",
		"symptoms": "",
		"helpful": "",
		"advice": [
			"Pharmacy"
		]
	},
	{
		"form_id": "34",
		"pharmacy_id": "2",
		"gender": "Female",
		"age_band": "51 - 70",
		"ethnic_group": "White British",
		"reason": "Buy a Medicine",
		"bought": "Yes",
		"intention": "Yes",
		"influence": "Used Before",
		"trust": "Agree",
		"same": "Yes",
		"symptoms": "No",
		"helpful": "Agree",
		"advice": [
			"Pharmacy",
			"Doctor"
		]
	},
	{
		"form_id": "35",
		"pharmacy_id": "2",
		"gender": "Male",
		"age_band": "51 - 70",
		"ethnic_group": "White British",
		"reason": "Other",
		"bought": "",
		"intention": "",
		"influence": "",
		"trust": "",
		"same": "",
		"symptoms": "",
		"helpful": "",
		"advice": [
			"Pharmacy"
		]
	},
	{
		"form_id": "36",
		"pharmacy_id": "2",
		"gender": "Female",
		"age_band": "31 - 50",
		"ethnic_group": "White British",
		"reason": "Prescription",
		"bought": "",
		"intention": "",
		"influence": "",
		"trust": "",
		"same": "",
		"symptoms": "",
		"helpful": "",
		"advice": [
			"Pharmacy",
			"Family/friend"
		]
	},
	{
		"form_id": "37",
		"pharmacy_id": "2",
		"gender": "Female",
		"age_band": "51 - 70",
		"ethnic_group": "Caribbean",
		"reason": "Prescription",
		"bought": "",
		"intention": "",
		"influence": "",
		"trust": "",
		"same": "",
		"symptoms": "",
		"helpful": "",
		"advice": [
			"Pharmacy"
		]
	},
	{
		"form_id": "38",
		"pharmacy_id": "1",
		"gender": "Male",
		"age_band": "31 - 50",
		"ethnic_group": "White British",
		"reason": "Buy a Product",
		"bought": "",
		"intention": "",
		"influence": "",
		"trust": "",
		"same": "",
		"symptoms": "",
		"helpful": "",
		"advice": [
			"Doctor"
		]
	},
	{
		"form_id": "39",
		"pharmacy_id": "1",
		"gender": "Male",
		"age_band": "18 - 30",
		"ethnic_group": "White British",
		"reason": "Other",
		"bought": "",
		"intention": "",
		"influence": "",
		"trust": "",
		"same": "",
		"symptoms": "",
		"helpful": "",
		"advice": [
			"Doctor"
		]
	},
	{
		"form_id": "40",
		"pharmacy_id": "1",
		"gender": "Male",
		"age_band": "31 - 50",
		"ethnic_group": "White British",
		"reason": "Prescription",
		"bought": "",
		"intention": "",
		"influence": "",
		"trust": "",
		"same": "",
		"symptoms": "",
		"helpful": "",
		"advice": [
			"Internet"
		]
	},
	{
		"form_id": "41",
		"pharmacy_id": "1",
		"gender": "Female",
		"age_band": "51 - 70",
		"ethnic_group": "White British",
		"reason": "Prescription",
		"bought": "",
		"intention": "",
		"influence": "",
		"trust": "",
		"same": "",
		"symptoms": "",
		"helpful": "",
		"advice": [
			"Doctor"
		]
	},
	{
		"form_id": "42",
		"pharmacy_id": "1",
		"gender": "Male",
		"age_band": "51 - 70",
		"ethnic_group": "Bangladeshi",
		"reason": "Buy a Medicine",
		"bought": "Yes",
		"intention": "Yes",
		"influence": "Used Before",
		"trust": "Strongly Agree",
		"same": "Yes",
		"symptoms": "No",
		"helpful": "Strongly Agree",
		"advice": [
			"Doctor"
		]
	},
	{
		"form_id": "43",
		"pharmacy_id": "1",
		"gender": "Male",
		"age_band": "31 - 50",
		"ethnic_group": "White British",
		"reason": "Other",
		"bought": "",
		"intention": "",
		"influence": "",
		"trust": "",
		"same": "",
		"symptoms": "",
		"helpful": "",
		"advice": [
			"Doctor"
		]
	},
	{
		"form_id": "44",
		"pharmacy_id": "1",
		"gender": "Female",
		"age_band": "31 - 50",
		"ethnic_group": "White British",
		"reason": "Buy a Medicine",
		"bought": "Yes",
		"intention": "Yes",
		"influence": "Recommended by HCP",
		"trust": "Agree",
		"same": "Yes",
		"symptoms": "No",
		"helpful": "",
		"advice": [
			"Doctor"
		]
	},
	{
		"form_id": "45",
		"pharmacy_id": "2",
		"gender": "Female",
		"age_band": "31 - 50",
		"ethnic_group": "White British",
		"reason": "Buy a Medicine",
		"bought": "Yes",
		"intention": "Yes",
		"influence": "Used Before",
		"trust": "Strongly Agree",
		"same": "Yes",
		"symptoms": "No",
		"helpful": "Neither",
		"advice": [
			"Pharmacy"
		]
	},
	{
		"form_id": "46",
		"pharmacy_id": "2",
		"gender": "Female",
		"age_band": "51 - 70",
		"ethnic_group": "White British",
		"reason": "Prescription",
		"bought": "",
		"intention": "",
		"influence": "",
		"trust": "",
		"same": "",
		"symptoms": "",
		"helpful": "",
		"advice": [
			"Pharmacy"
		]
	},
	{
		"form_id": "47",
		"pharmacy_id": "2",
		"gender": "Male",
		"age_band": "31 - 50",
		"ethnic_group": "White British",
		"reason": "Buy a Product",
		"bought": "",
		"intention": "",
		"influence": "",
		"trust": "",
		"same": "",
		"symptoms": "",
		"helpful": "",
		"advice": [
			"Doctor"
		]
	},
	{
		"form_id": "48",
		"pharmacy_id": "2",
		"gender": "Female",
		"age_band": "71+",
		"ethnic_group": "White British",
		"reason": "Buy a Medicine",
		"bought": "Yes",
		"intention": "Yes",
		"influence": "Used Before",
		"trust": "Neither",
		"same": "Yes",
		"symptoms": "No",
		"helpful": "Neither",
		"advice": [
			"Doctor"
		]
	},
	{
		"form_id": "49",
		"pharmacy_id": "2",
		"gender": "Female",
		"age_band": "31 - 50",
		"ethnic_group": "White British",
		"reason": "Buy a Medicine",
		"bought": "Yes",
		"intention": "Yes",
		"influence": "Recommended by family/friend",
		"trust": "Agree",
		"same": "Yes",
		"symptoms": "Yes",
		"helpful": "Agree",
		"advice": [
			"Pharmacy"
		]
	},
	{
		"form_id": "50",
		"pharmacy_id": "2",
		"gender": "Male",
		"age_band": "18 - 30",
		"ethnic_group": "White British",
		"reason": "Buy a Medicine",
		"bought": "Yes",
		"intention": "Yes",
		"influence": "Used Before",
		"trust": "Neither",
		"same": "Yes",
		"symptoms": "No",
		"helpful": "Neither",
		"advice": [
			"Doctor",
			"Internet"
		]
	},
	{
		"form_id": "51",
		"pharmacy_id": "2",
		"gender": "Female",
		"age_band": "31 - 50",
		"ethnic_group": "White British",
		"reason": "Prescription",
		"bought": "",
		"intention": "",
		"influence": "",
		"trust": "",
		"same": "",
		"symptoms": "",
		"helpful": "",
		"advice": [
			"Pharmacy"
		]
	},
	{
		"form_id": "52",
		"pharmacy_id": "2",
		"gender": "Female",
		"age_band": "31 - 50",
		"ethnic_group": "White British",
		"reason": "Buy a Medicine",
		"bought": "Yes",
		"intention": "Yes",
		"influence": "Used Before",
		"trust": "Agree",
		"same": "Yes",
		"symptoms": "No",
		"helpful": "",
		"advice": [
			"Pharmacy",
			"Doctor"
		]
	},
	{
		"form_id": "53",
		"pharmacy_id": "2",
		"gender": "Male",
		"age_band": "31 - 50",
		"ethnic_group": "White British",
		"reason": "Prescription",
		"bought": "",
		"intention": "",
		"influence": "",
		"trust": "",
		"same": "",
		"symptoms": "",
		"helpful": "",
		"advice": [
			"Pharmacy"
		]
	},
	{
		"form_id": "54",
		"pharmacy_id": "2",
		"gender": "Male",
		"age_band": "51 - 70",
		"ethnic_group": "White British",
		"reason": "Buy a Product",
		"bought": "",
		"intention": "",
		"influence": "",
		"trust": "",
		"same": "",
		"symptoms": "",
		"helpful": "",
		"advice": [
			"Other"
		]
	},
	{
		"form_id": "55",
		"pharmacy_id": "2",
		"gender": "Male",
		"age_band": "18 - 30",
		"ethnic_group": "White British",
		"reason": "Buy a Medicine",
		"bought": "Yes",
		"intention": "No",
		"influence": "Recommended by HCP",
		"trust": "Strongly Agree",
		"same": "No",
		"symptoms": "Yes",
		"helpful": "Neither",
		"advice": [
			"Internet"
		]
	},
	{
		"form_id": "56",
		"pharmacy_id": "2",
		"gender": "Female",
		"age_band": "51 - 70",
		"ethnic_group": "White British",
		"reason": "Buy a Medicine",
		"bought": "Yes",
		"intention": "Yes",
		"influence": "Used Before",
		"trust": "Neither",
		"same": "Yes",
		"symptoms": "No",
		"helpful": "",
		"advice": [
			"Pharmacy"
		]
	},
	{
		"form_id": "57",
		"pharmacy_id": "2",
		"gender": "Female",
		"age_band": "51 - 70",
		"ethnic_group": "White British",
		"reason": "Buy a Medicine",
		"bought": "Yes",
		"intention": "Yes",
		"influence": "Used Before",
		"trust": "Agree",
		"same": "Yes",
		"symptoms": "No",
		"helpful": "",
		"advice": [
			"Pharmacy"
		]
	},
	{
		"form_id": "58",
		"pharmacy_id": "2",
		"gender": "Female",
		"age_band": "31 - 50",
		"ethnic_group": "White British",
		"reason": "Buy a Medicine",
		"bought": "Yes",
		"intention": "No",
		"influence": "Recommended by HCP",
		"trust": "Agree",
		"same": "No",
		"symptoms": "Yes",
		"helpful": "Strongly Agree",
		"advice": [
			"Internet"
		]
	},
	{
		"form_id": "59",
		"pharmacy_id": "2",
		"gender": "Male",
		"age_band": "51 - 70",
		"ethnic_group": "White British",
		"reason": "Prescription",
		"bought": "",
		"intention": "",
		"influence": "",
		"trust": "",
		"same": "",
		"symptoms": "",
		"helpful": "",
		"advice": [
			"Pharmacy"
		]
	},
	{
		"form_id": "60",
		"pharmacy_id": "2",
		"gender": "Male",
		"age_band": "31 - 50",
		"ethnic_group": "White British",
		"reason": "Prescription",
		"bought": "",
		"intention": "",
		"influence": "",
		"trust": "",
		"same": "",
		"symptoms": "",
		"helpful": "",
		"advice": [
			"Pharmacy",
			"Doctor"
		]
	},
	{
		"form_id": "61",
		"pharmacy_id": "2",
		"gender": "Female",
		"age_band": "18 - 30",
		"ethnic_group": "White British",
		"reason": "Buy a Medicine",
		"bought": "Yes",
		"intention": "Yes",
		"influence": "Used Before",
		"trust": "Strongly Agree",
		"same": "Yes",
		"symptoms": "Yes",
		"helpful": "Strongly Agree",
		"advice": [
			"Pharmacy"
		]
	},
	{
		"form_id": "62",
		"pharmacy_id": "2",
		"gender": "Female",
		"age_band": "31 - 50",
		"ethnic_group": "White British",
		"reason": "Buy a Medicine",
		"bought": "Yes",
		"intention": "No",
		"influence": "Recommended by HCP",
		"trust": "Agree",
		"same": "No",
		"symptoms": "Yes",
		"helpful": "Agree",
		"advice": [
			"Pharmacy"
		]
	},
	{
		"form_id": "63",
		"pharmacy_id": "2",
		"gender": "Male",
		"age_band": "51 - 70",
		"ethnic_group": "White British",
		"reason": "Buy a Medicine",
		"bought": "Yes",
		"intention": "Yes",
		"influence": "Recommended by HCP",
		"trust": "Strongly Agree",
		"same": "Yes",
		"symptoms": "No",
		"helpful": "",
		"advice": [
			"Pharmacy"
		]
	},
	{
		"form_id": "64",
		"pharmacy_id": "2",
		"gender": "Female",
		"age_band": "31 - 50",
		"ethnic_group": "White British",
		"reason": "Buy a Medicine",
		"bought": "Yes",
		"intention": "Yes",
		"influence": "Recommended by family/friend",
		"trust": "Strongly Agree",
		"same": "Yes",
		"symptoms": "No",
		"helpful": "Agree",
		"advice": [
			"Pharmacy",
			"Doctor"
		]
	},
	{
		"form_id": "65",
		"pharmacy_id": "3",
		"gender": "Male",
		"age_band": "51 - 70",
		"ethnic_group": "Indian",
		"reason": "Prescription",
		"bought": "",
		"intention": "",
		"influence": "",
		"trust": "",
		"same": "",
		"symptoms": "",
		"helpful": "",
		"advice": [
			"Pharmacy"
		]
	},
	{
		"form_id": "66",
		"pharmacy_id": "3",
		"gender": "Female",
		"age_band": "51 - 70",
		"ethnic_group": "White British",
		"reason": "Prescription",
		"bought": "",
		"intention": "",
		"influence": "",
		"trust": "",
		"same": "",
		"symptoms": "",
		"helpful": "",
		"advice": [
			"Pharmacy"
		]
	},
	{
		"form_id": "67",
		"pharmacy_id": "3",
		"gender": "Male",
		"age_band": "31 - 50",
		"ethnic_group": "Caribbean",
		"reason": "Prescription",
		"bought": "",
		"intention": "",
		"influence": "",
		"trust": "",
		"same": "",
		"symptoms": "",
		"helpful": "",
		"advice": [
			"Doctor"
		]
	},
	{
		"form_id": "68",
		"pharmacy_id": "3",
		"gender": "Male",
		"age_band": "31 - 50",
		"ethnic_group": "White British",
		"reason": "Prescription",
		"bought": "",
		"intention": "",
		"influence": "",
		"trust": "",
		"same": "",
		"symptoms": "",
		"helpful": "",
		"advice": [
			"Pharmacy"
		]
	},
	{
		"form_id": "69",
		"pharmacy_id": "3",
		"gender": "Female",
		"age_band": "51 - 70",
		"ethnic_group": "White British",
		"reason": "Prescription",
		"bought": "",
		"intention": "",
		"influence": "",
		"trust": "",
		"same": "",
		"symptoms": "",
		"helpful": "",
		"advice": [
			"Pharmacy"
		]
	},
	{
		"form_id": "70",
		"pharmacy_id": "3",
		"gender": "Male",
		"age_band": "31 - 50",
		"ethnic_group": "White British",
		"reason": "Prescription",
		"bought": "",
		"intention": "",
		"influence": "",
		"trust": "",
		"same": "",
		"symptoms": "",
		"helpful": "",
		"advice": [
			"Pharmacy",
			"Internet"
		]
	}
]	