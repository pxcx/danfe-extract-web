import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../store";
import { ReportItem } from "../../types/ReportItem";
import Button from "../FormControl/Button";

function DisplayExtract() {
  const { packageID } = useParams();
  const { loading } = useSelector((state: State) => state.application);
  const { reportData, error } = useSelector(
    (state: State) => state.packageReport
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { reset, retrieveReportData } = bindActionCreators(
    actionCreators.packageReport,
    dispatch
  );

  useEffect(() => {
    reset();
    if (packageID) {
      retrieveReportData(packageID);
    }
  }, [packageID]);

  function handleBackButton() {
    navigate("/");
  }

  return (
    <div>
      <p>Resultados do pacote: {packageID}</p>

      <Button onClick={handleBackButton}>Voltar</Button>

      {loading ? (
        <p>Carregando...</p>
      ) : error !== undefined ? (
        <p>Erro: {error}</p>
      ) : (
        <table border={1} width={"100%"}>
          <thead>
            <tr>
              <th>#</th>
              <th>description</th>
              <th>ean</th>
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
            {reportData.map((danfeItem: ReportItem, key: number) => (
              <tr key={key}>
                <td>{key}</td>
                <td style={{ textAlign: "left" }}>{danfeItem.description}</td>
                <td>{danfeItem.ean}</td>
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
      )}
    </div>
  );
}

export default DisplayExtract;
