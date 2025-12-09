export const SpinnerLoading = () => {
  return (
    <>
      <div
        className="container d-flex justify-content-center my-5"
        style={{ width: "5rem", height: "5rem" }}
      >
        <div className="spinner-border text-secondary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
};
