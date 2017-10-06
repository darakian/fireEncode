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

    reader.addEventListener("load", () => {
      browser.notifications.create({
        "type": "basic",
        //"iconUrl": browser.extension.getURL("icons/encode.png"),
        "title": "Fire Encode",
        "message": reader.result
        });
    });

    fetch(info.srcUrl)
    .then((response) => response.blob())
    .then((blob) => reader.readAsDataURL(blob));



    }
  }
});
