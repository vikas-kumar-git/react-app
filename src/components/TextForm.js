import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, SetText] = useState('');

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    SetText(newText);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    SetText(newText);
  };

  const handleClearClick = () => {
    let newText = '';
    SetText(newText);
  };

  const handleOnChange = (event) => {
    SetText(event.target.value);
  };

  const wordCount = text.trim() === '' ? 0 : text.split(/\s+/).length;
  const charCount = text.length;
  const readingTime = 0.08 * wordCount;

  return (
    <>
      <div className="container my-4">
        <div className="row">
          {/* Left side for large screens (Input area) */}
          <div className="col-md-6 mb-4">
            <h2 className="mb-4">{props.heading}</h2>
            <div className="mb-3">
              <textarea
                className="form-control"
                value={text}
                onChange={handleOnChange}
                id="myBox"
                rows="8"
                placeholder="Enter text here"
              ></textarea>
            </div>
            <div className="d-flex justify-content-start gap-3 mt-3">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleUpClick}
              >
                Uppercase
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleLoClick}
              >
                Lowercase
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={handleClearClick}
              >
                Clear text
              </button>
            </div>
          </div>

          {/* Right side for large screens (Preview area) */}
          <div className="col-md-6 mb-4">
            <h3 className="mb-3">Your text summary</h3>
            <p><strong>{wordCount}</strong> words and <strong>{charCount}</strong> characters.</p>
            <p><strong>{readingTime.toFixed(2)}</strong> minutes to read</p>
            <h3 className="mt-4">Preview</h3>
            <p>{text || "No text to preview."}</p>
          </div>
        </div>
      </div>
    </>
  );
}
