function FormThree({ countryCode, phoneNumber, acceptTermsAndCondition, updateFields }) {
  return (
    <>
      <h1 className="form-heading">Form 3</h1>
      <div className="input-group mb-3">
        <select
          required
          className="form-select"
          aria-label="Default select example"
          name="countryCode"
          value={countryCode}
          onChange={e => updateFields({ countryCode: e.target.value })}
        >
          <option value="+91">India (+91)</option>
          <option value="+1">America (+1)</option>
        </select>
        <input
          required
          name="phoneNumber"
          type="tel"
          max={10}
          className="form-control"
          placeholder="Enter phone number"
          value={phoneNumber}
          onChange={e => updateFields({ phoneNumber: e.target.value })}
        />
      </div>
      <div className="mb-3 form-check">
        <input
          required
          className="form-check-input"
          type="checkbox"
          id="flexCheckChecked"
          name="acceptTermsAndCondition"
          value={acceptTermsAndCondition}
          onChange={e => updateFields({ acceptTermsAndCondition: e.target.value })}
        />
        <label className="form-check-label" htmlFor="flexCheckChecked">
          Accept terms And conditions
        </label>
      </div>
    </>
  );
}

export default FormThree;
