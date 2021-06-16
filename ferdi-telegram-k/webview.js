"use strict";

module.exports = Franz => {
  function getMessages() {
    let unread = 0
    const badges = document.querySelectorAll('.unread')
	
	for (const badge of badges) {
		unread += Number(badge.innerText);
	}
	
    Franz.setBadge(unread);
  };

  Franz.loop(getMessages);
};