import PropTypes from "prop-types";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";

// ---------------------------------- CSS IN JS -----------------------------------
// Creando estilos
const styles = css`
  padding: 10px;
  border: 1px solid var(--primary);
  border-radius: 6px;
  width: 100%;
`;

// Creando componentes estilizados
const InputStyled = styled.input`
  width: 100%;
`;

// Un componente puede manipular sus estilos dinámicos mediante props
const Div = styled.div`
  width: 200px;
  height: 200px;
  background-color: ${(prop) => prop.hex};
`;

// ---------------------------------- CSS IN JS -----------------------------------

const Input = ({ handleInput }) => {
  const [hex, setHex] = useState("#000");
  return (
    <>
      {/* se puede agregar estilos a elementos comunes con la propiedad css
       (se debe configurar vite para que entienda la sintaxis [ver archivo vite.config.js]) */}
      <input
        css={styles}
        onChange={handleInput}
        className={styles.input}
        type="text"
      />
      {/* el componente estilizado puede recibir props */}
      <Div hex={hex} />
      <InputStyled type="color" onChange={(e) => setHex(e.target.value)} />
    </>
  );
};

export default Input;

Input.propTypes = {
  handleInput: PropTypes.func.isRequired,
};
