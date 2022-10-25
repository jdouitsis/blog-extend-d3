// https://github.com/d3/d3-selection/blob/91245ee124ec4dd491e498ecbdc9679d75332b49/src/selection/classed.js#L61-L75

export default function(name, value) {
  var names = classArray(name + "");

  if (arguments.length < 2) {
    var list = classList(this.node()), i = -1, n = names.length;
    while (++i < n) if (!list.contains(names[i])) return false;
    return true;
  }

  return this.each((typeof value === "function"
      ? classedFunction : value
      ? classedTrue
      : classedFalse)(names, value));
}
