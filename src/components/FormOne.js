function FormOne({ email, password, updateFields }) {
  return (
    <>
      <h1 className="form-heading">Form 1</h1>
      <div className="input-group mb-3">
        <input
          required
          type="email"
          className="form-control"
          placeholder="Enter email ID"
          value={email}
          onChange={e => updateFields({ email: e.target.value })}
        />
      </div>
      <div className="input-group mb-3">
        <input
          required
          type="text"
          className="form-control"
          placeholder="Enter password"
          value={password}
          onChange={e => updateFields({ password: e.target.value })}
        />
      </div>
    </>
  );
}

export default FormOne;
