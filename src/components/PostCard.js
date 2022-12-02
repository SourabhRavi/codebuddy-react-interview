function PostCard({ firstName, lastName, writeup, image, avatar }) {
  return (
    <>
      <div className="card">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <img className="avatar" src={avatar} alt="..." />
          <h5 className="card-title">
            {firstName} {lastName}
          </h5>
          <p className="card-text">{writeup}</p>
        </div>
      </div>
    </>
  );
}

export default PostCard;
