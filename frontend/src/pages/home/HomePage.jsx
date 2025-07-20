import asset from "../../constants/assets";

function HomePage() {
  return (
    <>
      <h2>Home Page</h2>
      <img alt="logo" src={asset.images.logo} />
      <div
        style={{
          height: " 100px",
          width: "100px",
          color: asset.colors.secondary,
          backgroundColor: asset.colors.primary,
        }}
      >
        Hello World
      </div>
    </>
  );
}
export default HomePage;
