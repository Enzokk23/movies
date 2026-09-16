import { useState } from "react";

function AddGame() {
  const [gameForm, setGameForm] = useState({
    name: "",
    description: "",
    price: "",
  });

  const [gameFormErrors, setGameFormErrors] = useState({
    name: null,
    description: null,
    price: null,
  });

  function handleInputChange(e) {
    const { name, value } = e.target;

    if (name === "game_name") {
      setGameForm({
        ...gameForm,
        name: value,
      });
    }

    if (name === "description") {
      setGameForm({
        ...gameForm,
        description: value,
      });
    }

    if (name === "price") {
      setGameForm({
        ...gameForm,
        price: value,
      });
    }
  }
  function handleSubmit(e) {
    e.preventDefault();

    const errors = {
      name: null,
      description: null,
      price: null,
    };

    if (gameForm.name.trim() == "") {
      errors.name = "This field is required";
    } else if (gameForm.name.length < 3) {
      errors.name = "Minimum length is 3 characters";
    }

    if (gameForm.description.trim() == "") {
      errors.description = "This field is required";
    } else if (gameForm.description.length < 50) {
      errors.description = "Description must be at least 50 characters";
    }
    if (gameForm.price == "" || Number(gameForm.price) <= 0) {
      errors.price = "Price must be greater than 0";
    }
    setGameFormErrors(errors);
    if (errors.name || errors.description || errors.price) {
      return;
    }
  }
  return (
    <div className="container my-5">
      <div className="border rounded p-4 shadow-sm">
        <h2>Add Game</h2>
        <hr />
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Game Name</label>
            <input
              type="text"
              className="form-control"
              name="game_name"
              value={gameForm.name}
              onChange={handleInputChange}
            />
            {gameFormErrors.name && (
              <div className="text-danger">{gameFormErrors.name}</div>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              rows="4"
              name="description"
              value={gameForm.description}
              onChange={handleInputChange}
            />
            {gameFormErrors.description && (
              <div className="text-danger">{gameFormErrors.description}</div>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">Price</label>
            <input
              type="number"
              className="form-control"
              name="price"
              value={gameForm.price}
              onChange={handleInputChange}
            />
            {gameFormErrors.price && (
              <div className="text-danger">{gameFormErrors.price}</div>
            )}
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default AddGame;
