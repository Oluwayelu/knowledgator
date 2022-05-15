export class EditWords {
  constructor(text) {
    this.text = text;
    this.colors = [];

    if (this.text !== "") {
      for (var i = 0; i < this._textToArray(this.text).length; i++) {
        this.colors.push(this._randomColors());
      }
    }
  }

  get fileData() {
    return { text: this.text, colors: this.colors };
  }

  _randomColors = () => {
    return "#" + (Math.random() * 0xffffff * 1000000).toString(16).slice(0, 6);
  };

  _textToArray = (text) => {
    return text.split(" ");
  };

  changeTextColor = (textIndex, color) => {
    this.colors[textIndex] = color;
  };

  changeTextContent = (textIndex, newText) => {
    const textArray = this._textToArray(this.text);
    textArray[textIndex] = newText;
    return textArray.join(" ");
  };

  removeText = (text) => {
    const textArray = this._textToArray(this.text);

    return textArray.filter((t) => t != text).join(" ");
  };

  exportData = () => {
    const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(
      JSON.stringify({ text: this.text, colors: this.colors })
    )}`;

    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "data.json";

    link.click();
  };
}
