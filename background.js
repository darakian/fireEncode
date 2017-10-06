browser.menus.create({
id: "fireEncode-image",
title: "Encode image",
//contexts: ["image"]
contexts: ["image"]
});

browser.menus.onClicked.addListener(function(info, tab) {
if (info.menuItemId == "fireEncode-image") {
  if(info.mediaType=="image" ){
    var reader  = new FileReader();
    var basedImage = "";
    var fetchHeaders = new Headers();
    fetchHeaders.set('Accept', 'image/*');
    var fetchInit = { method: 'GET',
               headers: fetchHeaders,
               mode: 'cors',
               cache: 'default' };



    reader.addEventListener("load", () => {
      browser.sidebarAction.setPanel(
        data:text/plain, reader.result  // object
      )

      browser.notifications.create({
        "type": "basic",
        //"iconUrl": browser.extension.getURL("icons/encode.png"),
        "title": "Fire Encode",
        "message": reader.result
        });
    });

    fetch(info.srcUr, fetchInit)
    .then((response) => response.blob())
    .then((blob) => reader.readAsDataURL(blob));
    .catch(function(error) {
      console.log('There has been a problem with your fetch operation: ' + error.message);
      console.log('There has been a problem with your fetch operation: ' + info.srcUrl);
    });
    }
  }
});
