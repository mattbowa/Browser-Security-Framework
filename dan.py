#Modules
from bs4 import BeautifulSoup #For Parsing the HTML (and CSS) web response
import requests               #Sending web request, GET, POST, etc



#********************************** -- FUNC GetPrice -- *******************************************#
# @Description   Get the prices. They are usually advertised in 3 sets. 
#                With Beer, Cider,and Pal Ale, the prices are per bottle, six and case
#                For Wine (Red, White, Sparkling), the prices are per bottle and in six 
#                Spirits normally come with the price per bottle  
# @Aurguments    Div HTML element with data corresponding to a 
# @Return value  NIll
#**************************************************************************************************# 
def GetPrice(product_price):
	price = product_price.find("div","independent-product-side-container")
	price_list = price.find_all("p")
	for final_price in price_list:
	    print( final_price.select(".price"))

		

#********************************** -- FUNC GetPrice -- *******************************************#
# @Description   Get the prices. They are usually advertised in 3 sets. 
#                With Beer, Cider,and Pal Ale, the prices are per bottle, six and case
#                For Wine (Red, White, Sparkling), the prices are per bottle and in six 
#                Spirits normally come with the price per bottle  
# @Aurguments    Div HTML element with data corresponding to a 
# @Return value  NIll
#**************************************************************************************************# 	
def GetBrand(product_name):
    name = product_entry.find("h2","independent-product-module-title")
    print(name.a['title'])


		
#Request a web page	
web_response  = requests.get("https://www.danmurphys.com.au/red-wine/shiraz")
#Sets the limit of the data received ~~ no text, not binary data
data = web_response.text

soup = BeautifulSoup(data, 'html.parser')	
	
for product_entry in soup.find_all("div","independent-product-module"):
    price = name = product_entry
    GetPrice(price)
    GetBrand(name)	
		
