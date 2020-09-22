import React from "react";

class BarnsleyFern extends React.Component {
  componentDidMount() {
    document.body.style.backgroundColor = "black";
    /** Snippet from https://rosettacode.org/wiki/Barnsley_fern#JavaScript **/
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");
    const img = this.refs.image;
    const lim = 10000;
    img.onload = () => {
      var w = canvas.width;
      var h = canvas.height;
      var x = 0,
        y = 0,
        xw = 0,
        yw = 0,
        r;
      // Like in PARI/GP: return random number 0..max-1
      function randgp(max) {
        return Math.floor(Math.random() * max);
      }
      // Clean canvas
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, w, h);
      // MAIN LOOP
      ctx.font = "44px Courier";

      for (var i = 0; i < lim; i++) {
        r = randgp(100);
        if (r <= 1) {
          xw = 0;
          yw = 0.16 * y;
        } else if (r <= 8) {
          xw = 0.2 * x - 0.26 * y;
          yw = 0.23 * x + 0.22 * y + 1.6;
        } else if (r <= 15) {
          xw = -0.15 * x + 0.28 * y;
          yw = 0.26 * x + 0.24 * y + 0.44;
        } else {
          xw = 0.85 * x + 0.04 * y;
          yw = -0.04 * x + 0.85 * y + 1.6;
        }
        x = xw;
        y = yw;
        ctx.fillStyle = "green";
        ctx.fillRect(x * 50 + 260, -y * 50 + 540, 1, 1);
      } //fend i
      ctx.fillText("Fractal Fx", 10, 100);
    }; /** End snippet **/
  }
  render() {
    return (
      <div className="barnsleyfern">
        <canvas ref="canvas" width={640} height={425} />
        <img
          ref="image"
          src="favicon.ico"
          alt=""
          style={{ display: "none" }}
          className="hidden"
        />
      </div>
    );
  }
}
export default BarnsleyFern;
