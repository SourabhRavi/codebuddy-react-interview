function FormTwo({ firstName, lastName, address, updateFields }) {
  return (
    <>
      <h1 className="form-heading">Form 2</h1>
      <div className="input-group mb-3">
        <input
          required
          min={2}
          max={50}
          pattern="^[A-Za-z ]+$"
          name="firstName"
          type="text"
          className="form-control"
          placeholder="Enter first name"
          value={firstName}
          onChange={e => updateFields({ firstName: e.target.value })}
        />
      </div>
      <div className="input-group mb-3">
        <input
          name="lastName"
          pattern="^[A-Za-z ]+$"
          type="text"
          className="form-control"
          placeholder="Enter last name"
          value={lastName}
          onChange={e => updateFields({ lastName: e.target.value })}
        />
      </div>
      <div className="input-group mb-3">
        <input
          required
          min={10}
          name="address"
          type="text"
          className="form-control"
          placeholder="Enter address"
          value={address}
          onChange={e => updateFields({ address: e.target.value })}
        />
      </div>
    </>
  );
}

export default FormTwo;
