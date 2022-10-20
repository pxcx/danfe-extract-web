import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DisplayExtract() {
  const [extract, setExtract] = useState([]);
  let { packageID } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8080/packages/${packageID}/extract-items`)
      .then((res) => res.json())
      .then((data) => {
        setExtract(data.extract);
      });
  }, []);

  return (
    <div>
      <p>Resultados do pacote: {packageID}</p>

      <table border={1} width={"100%"}>
        <thead>
          <tr>
            <th>#</th>
            <th>description</th>
            <th>ncm</th>
            <th>cst</th>
            <th>cfop</th>
            <th>aliqIcms</th>
            <th>aliqPis</th>
            <th>aliqCofins</th>
            <th>origem</th>
            <th>cest</th>
          </tr>
        </thead>
        <tbody>
          {extract.map((danfeItem: any, key: number) => (
            <tr key={key}>
              <td style={{ textAlign: "center" }}>{key}</td>
              <td>{danfeItem.description}</td>
              <td style={{ textAlign: "center" }}>{danfeItem.ncm}</td>
              <td style={{ textAlign: "center" }}>{danfeItem.cst}</td>
              <td style={{ textAlign: "center" }}>{danfeItem.cfop}</td>
              <td style={{ textAlign: "center" }}>{danfeItem.aliqIcms}</td>
              <td style={{ textAlign: "center" }}>{danfeItem.aliqPis}</td>
              <td style={{ textAlign: "center" }}>{danfeItem.aliqCofins}</td>
              <td style={{ textAlign: "center" }}>{danfeItem.origem}</td>
              <td style={{ textAlign: "center" }}>{danfeItem.cest}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DisplayExtract;
