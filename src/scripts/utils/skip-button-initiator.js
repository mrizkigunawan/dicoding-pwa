const SkipButtonInitiator = {
  init({ button }) {
    this._button = button;
    this._button.addEventListener('click', this._skipToContent);
  },

  _skipToContent(event) {
    event.preventDefault();
    const sections = document.querySelectorAll('main section');
    const section = sections[sections.length - 1];
    section.focus();
    console.log(section);
  },
};

export default SkipButtonInitiator;
