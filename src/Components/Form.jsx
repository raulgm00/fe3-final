import React, { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { name, email } = formData;
    
    // Validar nombre (longitud mayor a 5)
    if (name.length <= 5) {
      setError("Por favor verifique su información nuevamente");
      return false;
    }

    // Validar email (formato correcto)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Por favor verifique su información nuevamente");
      return false;
    }

    setError(""); // Limpiar errores si todo está bien
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Si las validaciones pasan, mostramos mensaje de éxito y los datos en consola
      console.log("Formulario enviado:", formData);
      setSuccessMessage(`Gracias ${formData.name}, te contactaremos cuando antes vía mail`);
      setFormData({ name: "", email: "" }); // Limpiar el formulario
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre: </label>
          <input type="text" id="name" name="name"value={formData.name} onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}/>
        </div>
        <button type="submit">Enviar</button>
      </form>

      {/* Mostrar error si existe */}
      {/* renderizado condicional  */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Mostrar mensaje de éxito si el formulario fue enviado */}
      {/* renderizado condicional  */}
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
    </div>
  );
};

export default Form;
