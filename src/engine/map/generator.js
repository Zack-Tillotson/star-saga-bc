import triangulate from 'delaunay-triangulate';

function buildPoint(x, y) {
	return [x, y];
}

function buildEdge(i1, i2, allPoints) {
	const guid = `${i1} - ${i2}`;
	const points = [allPoints[i1], allPoints[i2]];
	const passable = Math.random() > .15;
	return {guid, points, passable}
}

function buildZones(points, triangles) {

	const edgeMap = {};

	const zones = triangles.map(triangle => {
		const triPoints = triangle.sort();

		// Make the edges
		const i1 = triPoints[0];
		const i2 = triPoints[1];
		const i3 = triPoints[2];

		const e1 = buildEdge(i1, i2, points);
		const e2 = buildEdge(i1, i3, points);
		const e3 = buildEdge(i2, i3, points);

		edgeMap[e1.guid] = e1;
		edgeMap[e2.guid] = e2;
		edgeMap[e3.guid] = e3;

		const vertices = [points[i1], points[i2], points[i3]];

		return {
			edges: [e1, e2, e3],
			color: ['red', 'blue', 'green', 'yellow', 'purple'][parseInt(Math.random() * 5)],
			vertices,
		}
	});

	const edges = Object.keys(edgeMap).map(key => edgeMap[key]);

	return {edges, zones};

}

export default function() {
	
	const points = [];
	for(let i = 0 ; i < 100 ; i++) {
		const x = parseInt(Math.random() * 50);
		const y = parseInt(Math.random() * 25);
		points.push([x, y]);
	}
	const triangles = triangulate(points);

	const zones = buildZones(points, triangles);

	return zones;

}