import Kmeans
 from "@madancg/kmeans";

function KmeansAlgo() {
  const data = [
    [1, 2],
    [2, 3],
    [3, 3],
    [8, 9],
    [9, 10],
    [10, 11]
  ];
  
  const k = 2;
  const result = Kmeans(data, k);

  return (
    <>
      <h2>Centroids:</h2>
      <ul>
        {result.centroids.map((centroid, index) => (
          <li key={index}>[{centroid.map(c => c.toFixed(2)).join(", ")}]</li>
        ))}
      </ul>

      <h2>Cluster Assignments:</h2>
      <ul>
        {result.assignedCentroids.map((cluster, index) => (
          <li key={index}>Point {index + 1} → Cluster {cluster}</li>
        ))}
      </ul>
    </>
  );
}

export default KmeansAlgo;
