// https://stackoverflow.com/a/42844911/8106429
export const copyToClipboard = (txt: string) => {
  console.log('txt', txt);
  const ele = document.createElement('input');
  ele.value = txt;
  document.body.appendChild(ele);
  ele.select();
  document.execCommand('copy');
  // This is just personal preference.
  // I prefer to not show the the whole text area selected.
  ele.focus();
  // eslint-disable-next-line no-unused-expressions
  ele.parentElement?.removeChild(ele);
  return true;
};
