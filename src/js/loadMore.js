
const hiddenClass = "is-hidden";

function hide(btnMore) {
  btnMore.classList.add(hiddenClass)
}

function show(btnMore) {
  btnMore.classList.remove(hiddenClass)

}

function disable(btnMore,) {
  btnMore.disabled = true;
  // loadTime.classList.remove(hiddenClass)

}

function enable(btnMore,) {
  btnMore.disabled = false;
  // loadTime.classList.add(hiddenClass)

}

export default { hide, show, disable, enable }