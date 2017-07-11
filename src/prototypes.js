// https://stackoverflow.com/questions/18405736/is-there-a-c-sharp-string-format-equivalent-in-javascript
// First, checks if it isn't implemented yet.

class Protoypes {
  static prototypeStringFormat() {
    if (!String.prototype.format) {
      String.prototype.format = function () {
        let args = arguments;
        return this.replace(/{(\d+)}/g, function (match, number) {
          return typeof args[number] !== 'undefined'
            ? args[number]
            : match
            ;
        });
      };
    }
  }

  static init() {
    Protoypes.prototypeStringFormat();
  }

}

export default Protoypes