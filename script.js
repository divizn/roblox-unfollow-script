const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const unfollow = async () => {
  const users = document.getElementsByClassName("btn-generic-more-sm");
  while (
    !document
      .getElementsByClassName("pager-next")[0]
      .getElementsByClassName("btn-generic-right-sm")[0].disabled
  ) {
    for (j = 0; j <= users.length - 1; j++) {
      users[j].click();
      await sleep(250);
      document.getElementsByClassName("friend-unfollow")[0].click();
      await sleep(50);
    }
    document
      .getElementsByClassName("pager-next")[0]
      .getElementsByClassName("btn-generic-right-sm")[0]
      .click();
    await sleep(300);
  }
};
