const Canvas = (() => {
	return {
		strokeLine: function (context, x0, y0, x, y, strokeColor) {

			context.beginPath();
			context.moveTo(x0, y0);
			context.lineTo(x, y);
			context.strokeStyle = strokeColor;
			context.stroke();
			context.closePath();
		},

		strokeTriangle: function (context, x0, y0, x1, y1, x2, y2, strokeColor) {

			context.beginPath();
			context.moveTo(x0, y0);
			context.lineTo(x1, y1);
			context.lineTo(x2, y2);
			context.lineTo(x0, y0);
			context.strokeStyle = strokeColor;
			context.stroke();
			context.closePath();
		},

		drawTriangle: function (context, x0, y0, x1, y1, x2, y2, fillColor, strokeColor) {

			context.beginPath();
			context.moveTo(x0, y0);
			context.lineTo(x1, y1);
			context.lineTo(x2, y2);
			context.lineTo(x0, y0);
			context.fillStyle = fillColor;
			context.fill();
			context.strokeStyle = strokeColor;
			context.stroke();
			context.closePath();
		},

		strokeRectangle: function (context, x, y, width, height, strokeColor) {

			context.beginPath();
			context.strokeStyle = strokeColor;
			context.strokeRect(x, y, width, height);
			context.closePath();
		},

		drawRectangle: function (context, x, y, width, height, fillColor, strokeColor) {

			context.beginPath();
			context.fillStyle = fillColor;
			context.fillRect(x, y, width, height);
			context.strokeStyle = strokeColor;
			context.strokeRect(x, y, width, height);
			context.closePath();
		},

		strokeSquare: function (context, x, y, side, strokeColor) {

			context.beginPath();
			context.strokeStyle = strokeColor;
			context.strokeRect(x, y, side, side);
			context.closePath();
		},

		drawSquare: function (context, x, y, side, fillColor, strokeColor) {

			context.beginPath();
			context.fillStyle = fillColor;
			context.fillRect(x, y, side, side);
			context.strokeStyle = strokeColor;
			context.strokeRect(x, y, side, side);
			context.closePath();
		},

		strokeCircle: function (context, x, y, radius, strokeColor) {

			context.beginPath();
			context.arc(x, y, radius, 0, 2 * Math.PI, true);
			context.strokeStyle = strokeColor;
			context.stroke();
			context.closePath();
		},

		drawCircle: function (context, x, y, radius, fillColor, strokeColor) {

			context.beginPath();
			context.fillStyle = fillColor;
			context.arc(x, y, radius, 0, 2 * Math.PI, true);
			context.fill();
			context.strokeStyle = strokeColor;
			context.stroke();
			context.closePath();
		},

		strokeArcBottom: function (context, x, y, radius, strokeColor) {

			context.beginPath();
			context.arc(x, y, radius, Math.PI, 0, true);
			context.strokeStyle = strokeColor;
			context.stroke();
			context.closePath();
		},

		strokeArcTop: function (context, x, y, radius, strokeColor) {

			context.beginPath();
			context.arc(x, y, radius, 0, Math.PI, true);
			context.strokeStyle = strokeColor;
			context.stroke();
			context.closePath();
		},

		drawArcTop: function (context, x, y, radius, fillColor, strokeColor) {

			context.beginPath();
			context.fillStyle = fillColor;
			context.arc(x, y, radius, 0, Math.PI, true);
			context.fill();
			context.strokeStyle = strokeColor;
			context.stroke();
			context.closePath();
		},

		strokeArcLeft: function (context, x, y, radius, strokeColor) {

			context.beginPath();
			context.arc(x, y, radius, Math.PI / 2, -Math.PI / 2, true);
			context.strokeStyle = strokeColor;
			context.stroke();
			context.closePath();
		},

		strokeArcRight: function (context, x, y, radius, strokeColor) {

			context.beginPath();
			context.arc(x, y, radius, -Math.PI / 2, Math.PI / 2, true);
			context.strokeStyle = strokeColor;
			context.stroke();
			context.closePath();
		},

		setLinearGradient2Colors: function (context, x, y, width, height, color0, color1) {
			let grad = this.createLinearGradient(x, y, width, height);

			grad.addColorStop(0, color0);
			grad.addColorStop(1, color1);

			return grad;
		},

		setLinearGradient3Colors: function (context, x, y, width, height, color0, color1, color2) {
			let grad = context.createLinearGradient(x, y, width, height);

			grad.addColorStop(0, color0);
			grad.addColorStop(0.5, color1);
			grad.addColorStop(1, color2);

			return grad;
		},

		setLinearGradient4Colors: function (context, x, y, width, height, color0, color1, color2, color3) {
			let grad = context.createLinearGradient(x, y, width, height);

			grad.addColorStop(0, color0);
			grad.addColorStop(0.33, color1);
			grad.addColorStop(0.66, color2);
			grad.addColorStop(1, color3);

			return grad;
		},

		setLinearGradient5Colors: function (context, x, y, width, height, color0, color1, color2, color3, color4) {
			let grad = context.createLinearGradient(x, y, width, height);

			grad.addColorStop(0, color0);
			grad.addColorStop(0.25, color1);
			grad.addColorStop(0.5, color2);
			grad.addColorStop(0.75, color3);
			grad.addColorStop(1, color4);

			return grad;
		},

		strokeQuadraticBezierCurve: function (ctx, xStart, yStart, xMiddle, yMiddle, xEnd, yEnd, strokeColor) {

			ctx.beginPath();
			ctx.bezierCurveTo(xStart, yStart, xMiddle, yMiddle, xEnd, yEnd);
			ctx.strokeStyle = strokeColor;
			ctx.stroke();
			ctx.closePath();
		},

		fillQuadraticBezierCurve: function (ctx, xStart, yStart, xMiddle, yMiddle, xEnd, yEnd, strokeColor) {

			ctx.beginPath();
			ctx.bezierCurveTo(xStart, yStart, xMiddle, yMiddle, xEnd, yEnd);
			ctx.fillStyle = strokeColor;
			ctx.fill();
			ctx.closePath();
		},

		getPointOfQuadraticBezierCurve: function (percent, xStart, yStart, xMiddle, yMiddle, xEnd, yEnd) {

			let pct = percent / 100,
				xP = xStart + pct * (xMiddle - xStart),
				yP = yStart + pct * (yMiddle - yStart),
				xR = xMiddle + pct * (xEnd - xMiddle),
				yR = yMiddle + pct * (yEnd - yMiddle);

			return point = { x: xP + pct * (xR - xP), y: yP + pct * (yR - yP) }
		},

		rotateTo: function (ctx, angleInt) {

			let radians = (angleInt * Math.PI) / 180;

			return ctx.rotate(radians);
		}
	};
})();
