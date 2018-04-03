


browser.contextMenus.onClicked.addListener(contextMenuAction);

function contextMenuAction(info, tab){

	if(info != null && info.hasOwnProperty('menuItemId')
			&& info.hasOwnProperty('selectionText')){
		var searchURL = findSearchEngine(info.menuItemId);


	var url = '';
		
		if(searchURL != ''){
			url = searchURL+info.selectionText;
		}

		console.log("the url is:::"+url);
		
		// When the URL is not null, create a new tab to search
		if( url != ''){
			  browser.tabs.create({url: url});
		}

	}

}


// Create a set of context options for text-selection
browser.contextMenus.create({
  id: "google",
  title: "Google",
  contexts: ["selection"],
  icons: {
   "16": "icons/Sub-Menu Icons/gicon-16.png",
   "32": "icons/Sub-Menu Icons/gicon-32.png"
   }
});


browser.contextMenus.create({
  id: "wiki",
  title: "Wikipedia",
  contexts: ["selection"],
  icons: {
   "16": "icons/Sub-Menu Icons/wicon-16.png",
   "32": "icons/Sub-Menu Icons/wicon-32.png"
   }

});



browser.contextMenus.create({
  id: "bing",
  title: "Bing",
  contexts: ["selection"],
  icons: {
   "16": "icons/Sub-Menu Icons/bicon-16.png",
   "32": "icons/Sub-Menu Icons/bicon-32.png"
   }

});



browser.contextMenus.create({
  id: "youtube",
  title: "YouTube",
  contexts: ["selection"],
  icons: {
   "16": "icons/Sub-Menu Icons/yoicon-16.png",
   "32": "icons/Sub-Menu Icons/yoicon-32.png"
   }

});


browser.contextMenus.create({
  id: "ddg",
  title: "DuckDuckGo",
  contexts: ["selection"],
  icons: {
   "16": "icons/Sub-Menu Icons/ddgicon-16.png",
   "32": "icons/Sub-Menu Icons/ddgicon-32.png"
   }

});


browser.contextMenus.create({
  id: "twitter",
  title: "Twitter",
  contexts: ["selection"],
  icons: {
   "16": "icons/Sub-Menu Icons/ticon-16.png",
   "32": "icons/Sub-Menu Icons/ticon-32.png"
   }

});


browser.contextMenus.create({
  id: "github",
  title: "Github",
  contexts: ["selection"],
  icons: {
   "16": "icons/Sub-Menu Icons/giticon-16.png",
   "32": "icons/Sub-Menu Icons/giticon-32.png"
   }

});


browser.contextMenus.create({
  id: "yandex",
  title: "Yandex",
  contexts: ["selection"],
  icons: {
   "16": "icons/Sub-Menu Icons/yicon-16.png",
   "32": "icons/Sub-Menu Icons/yicon-32.png"
   }

});

browser.contextMenus.create({
  id: "amazon",
  title: "Amazon",
  contexts: ["selection"],
  icons: {
   "16": "icons/Sub-Menu Icons/aicon-16.png",
   "32": "icons/Sub-Menu Icons/aicon-32.png"
   }

});

browser.contextMenus.create({
  id: "facebook",
  title: "Facebook",
  contexts: ["selection"],
  icons: {
   "16": "icons/Sub-Menu Icons/ficon-16.png",
   "32": "icons/Sub-Menu Icons/ficon-32.png"
   }

});

browser.contextMenus.create({
  id: "linkedin",
  title: "Linked In",
  contexts: ["selection"],
  icons: {
   "16": "icons/Sub-Menu Icons/licon-16.png",
   "32": "icons/Sub-Menu Icons/licon-32.png"
   }

});


// Find the Search Engine query url to form the url for new tab
function findSearchEngine(searchEngText){

        if(searchEngText == 'wiki'){
                return 'https://wikipedia.org/wiki/Search?search=';
        }
        else if(searchEngText == 'google'){
                return 'https://www.google.co.in/search?q=';
        }
        else if(searchEngText == 'bing'){
                return 'http://www.bing.com/search?q=';
        }
        else if(searchEngText == 'ddg'){
                return 'https://duckduckgo.com/?q=';
        }
        else if(searchEngText == 'youtube'){
                return 'https://www.youtube.com/results?search_query=';
        }
        else if(searchEngText == 'twitter'){
                return 'https://twitter.com/search?q=';
        }
        else if(searchEngText == 'github'){
                return 'https://github.com/search?q=';
        }
        else if(searchEngText == 'yandex'){
                return 'https://www.yandex.com/search/?text=';
        }
        else if(searchEngText == 'amazon'){
                return 'https://www.amazon.com/s/field-keywords=';
        }
        else if(searchEngText == 'facebook'){
                return 'https://www.facebook.com/public/';
        }

        else if(searchEngText == 'linkedin'){
                return 'https://www.linkedin.com/search/results/index/?keywords=';
        }

        return '';
}

