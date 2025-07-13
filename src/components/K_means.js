function FindDistance(p1, p2) {
  let sum = 0;
  for (let i = 0; i < p1.length; i++) {
    sum += (p1[i] - p2[i]) ** 2;
  }
  return Math.sqrt(sum);
}

function FindNearCluster(data, centroids) {
  const assignedCentroids = [];

  for (let i = 0; i < data.length; i++) {
    let minDistance = Infinity;
    let clusterIndex = -1;

    for (let j = 0; j < centroids.length; j++) {
      const distance = FindDistance(data[i], centroids[j]);
      if (distance < minDistance) {
        minDistance = distance;
        clusterIndex = j;
      }
    }

    assignedCentroids.push(clusterIndex);
  }

  return assignedCentroids;
}

function findCentroids(data, assignedCentroids, k) {
  const sums = Array(k).fill(0).map(() => Array(data[0].length).fill(0));
  const counts = Array(k).fill(0);

  for (let i = 0; i < data.length; i++) {
    const cluster = assignedCentroids[i];

    for (let j = 0; j < data[i].length; j++) {
      sums[cluster][j] += data[i][j];
    }
    counts[cluster]++;
  }

  const centroids = [];
  for (let i = 0; i < k; i++) {
    const centroid = sums[i].map(val => val / (counts[i] || 1));
    centroids.push(centroid);
  }

  return centroids;
}

export default function Kmeans(data, k, maxIterations = 100) {
  const centroids = data.slice(0, k).map(point => [...point]); // deep copy
  let assignedCentroids = [];

  for (let i = 0; i < maxIterations; i++) {
    assignedCentroids = FindNearCluster(data, centroids);
    const newCentroids = findCentroids(data, assignedCentroids, k);

    let converged = true;
    for (let j = 0; j < k; j++) {
      if (FindDistance(centroids[j], newCentroids[j]) > 0.001) {
        converged = false;
        break;
      }
    }

    if (converged) break;

    for (let j = 0; j < k; j++) {
      centroids[j] = newCentroids[j];
    }
  }

  return { centroids, assignedCentroids };
}
