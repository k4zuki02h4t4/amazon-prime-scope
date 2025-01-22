chrome.action.onClicked.addListener((tab) => {
  if (tab.url.match(/https.*?amazon/)) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: runBookmarklet
    });
  }
});

function runBookmarklet() {
  document.location.href=window.document.URL+"&rh=p_6%3AAN1VRQENFRJN5%2Cp_85%3A8070706051%2Cp_n_free_shipping_eligible%3A8070708051";
}
