import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DisplayExtract() {
  const [extract, setExtract] = useState([]);
  let { packageID } = useParams();

  useEffect(() => {
    fetch(`https://cloud.pxcx.com.br:5000/packages/${packageID}/extract-items`)
      .then((res) => res.json())
      .then((data) => {
        setExtract(data.extract);
      });
  }, []);

  return (
    <div>
      <p>Resultados do pacote: {packageID}</p>

      <p>
        <a href="/">Voltar</a>
      </p>

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
              <td>{key}</td>
              <td style={{ textAlign: "left" }}>{danfeItem.description}</td>
              <td>{danfeItem.ncm}</td>
              <td>{danfeItem.cst}</td>
              <td>{danfeItem.cfop}</td>
              <td>{danfeItem.aliqIcms}</td>
              <td>{danfeItem.aliqPis}</td>
              <td>{danfeItem.aliqCofins}</td>
              <td>{danfeItem.origem}</td>
              <td>{danfeItem.cest}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DisplayExtract;
