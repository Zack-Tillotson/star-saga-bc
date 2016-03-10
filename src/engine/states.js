import generateMap from './map/generator';

const state = {};

export default {
	game: {

		create() {

			state.map = generateMap();

		},

		step(delta) {

		},

		render(delta) {

			const {layer} = this.app;
			const scale = 25;

			// Background

			layer.clear("#02233F");

			// Zones
			state.map.zones.forEach((zone, id) => {
				let avgX = 0;
				let avgY = 0;
				const vertices = zone.vertices.map(vertice => {
					avgX += vertice[0];
					avgY += vertice[1];
					return [
						vertice[0] * scale,
						vertice[1] * scale,
					]
				});
				avgX = avgX * scale / 3;
				avgY = avgY * scale / 3;

				// Triangle
				layer
					.fillStyle(zone.color)
					.polygon(vertices)
					.fill();

				// ID
				layer
					.fillStyle('#000')
					.font('18px Arial bold')
					.fillText(id, avgX + 10, avgY);

			});
			
			// Edges
			state.map.edges.forEach((edge, id) => {
				const width = edge.passable ? 3 : 8;
				const color = edge.passable ? '#fff' : '#000';
				layer
					.strokeStyle(color)
					.lineWidth(width)
					.strokeLine(
						scale * edge.points[0][0], 
						scale * edge.points[0][1], 
						scale * edge.points[1][0], 
						scale * edge.points[1][1]
					);
			});

		}
	}
}