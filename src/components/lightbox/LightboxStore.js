class LightboxStore {
  constructor() {
    this.state = {
      images: [],
      index: false,
    };
  }

  addImage(url) {
    return this.state.images.push(url) - 1;
  }

  removeImage(url) {
    this.state.images = this.state.images.filter(image => image !== url);
  }

  open(index) {
    this.state.index = index;
  }

  close() {
    this.state.index = false;
  }

  next() {
    this.state.index += 1;
    if (this.state.index >= this.state.images.length) {
      this.state.index = 0;
    }
  }

  prev() {
    this.state.index -= 1;
    if (this.state.index < 0) {
      this.state.index = this.state.images.length - 1;
    }
  }
}

export default new LightboxStore();
