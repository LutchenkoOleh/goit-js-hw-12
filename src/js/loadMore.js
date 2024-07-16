
const hiddenClass = "is-hidden";

function hide(btnMore) {
  btnMore.classList.add(hiddenClass)
}

function show(btnMore) {
  btnMore.classList.remove(hiddenClass)

}

function disable(btnMore) {
  btnMore.disabled = true;
  // spinner.classList.remove(hiddenClass)

}

function enable(btnMore) {
  btnMore.disabled = false;
  // spinner.classList.add(hiddenClass)

}

export default { hide, show, disable, enable }