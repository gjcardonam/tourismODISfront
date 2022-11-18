import { useform } from "./hooks/Hform";
import { Ivalues } from "./interfaces/Iform";
import { handleSubmit } from "./api/Aform";

function App() {
  const initialvalues: Ivalues = {
    name: "",
    description: "",
    localization: "",
    coordenades: "",
    contact: "",
  };

  const { values, onSubmit, onChange } = useform(initialvalues, handleSubmit);

  return (
    <div>
      <h1 className="m-5">Ingresar Lugar</h1>
      <form className="m-5" onSubmit={onSubmit}>
        <input
          className="form-control mb-3"
          type="text"
          name="name"
          placeholder="Nombre"
          onChange={onChange}
          value={values.name}
        />
        <input
          className="form-control mb-3"
          type="text"
          name="description"
          placeholder="Descripcion"
          onChange={onChange}
          value={values.description}
        />
        <input
          className="form-control mb-3"
          type="text"
          name="localization"
          placeholder="Localizacion"
          onChange={onChange}
          value={values.localization}
        />
        <input
          className="form-control mb-3"
          type="text"
          name="coordenades"
          placeholder="Coordenadas"
          onChange={onChange}
          value={values.coordenades}
        />
        <input
          className="form-control mb-3"
          type="text"
          name="contact"
          placeholder="Contacto"
          onChange={onChange}
          value={values.contact}
        />
        <input className="btn btn-primary" type="submit" />
      </form>
    </div>
  );
}

export default App;
