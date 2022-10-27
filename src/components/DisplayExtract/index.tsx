import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../store";
import { ReportItem } from "../../types/ReportItem";
import Button from "../FormControl/Button";
import { Box } from "../UI/Box";
import { ErrorMessage } from "../UI/ErrorMessage";

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
      <Button onClick={handleBackButton}>Voltar</Button>
      {loading ? (
        <p className="my-5 text-xl font-bold">Carregando...</p>
      ) : error !== undefined ? (
        <div>
          <ErrorMessage error={error} />
        </div>
      ) : (
        <Box>
          <h1 className="mb-8 text-xl">
            Resultados do pacote: <b>{packageID}</b>
          </h1>
          <table className="border border-collapse border-slate-500 text-xs">
            <thead>
              <tr>
                <th className="p-1 bg-slate-300 border border-collapse border-slate-500 text-left w-1/2 overflow-clip">
                  Description
                </th>
                <th className="p-1 bg-slate-300 border border-collapse border-slate-500">
                  GTIN/EAN
                </th>
                <th className="p-1 bg-slate-300 border border-collapse border-slate-500">
                  NCM
                </th>
                <th className="p-1 bg-slate-300 border border-collapse border-slate-500">
                  CST
                </th>
                <th className="p-1 bg-slate-300 border border-collapse border-slate-500">
                  CFOP
                </th>
                <th className="p-1 bg-slate-300 border border-collapse border-slate-500">
                  Orig
                </th>
                <th className="p-1 bg-slate-300 border border-collapse border-slate-500">
                  ICMS
                </th>
                <th className="p-1 bg-slate-300 border border-collapse border-slate-500">
                  PIS
                </th>
                <th className="p-1 bg-slate-300 border border-collapse border-slate-500">
                  COFINS
                </th>
                <th className="p-1 bg-slate-300 border border-collapse border-slate-500">
                  CEST
                </th>
              </tr>
            </thead>
            <tbody>
              {reportData.map((danfeItem: ReportItem, key: number) => (
                <tr key={key}>
                  <td className="p-1 border border-collapse border-slate-500 text-left w-1/2 overflow-clip">
                    {danfeItem.description}
                  </td>
                  <td className="p-1 border border-collapse border-slate-500">
                    {danfeItem.ean}
                  </td>
                  <td className="p-1 border border-collapse border-slate-500">
                    {danfeItem.ncm}
                  </td>
                  <td className="p-1 border border-collapse border-slate-500">
                    {danfeItem.cst}
                  </td>
                  <td className="p-1 border border-collapse border-slate-500">
                    {danfeItem.cfop}
                  </td>
                  <td className="p-1 border border-collapse border-slate-500">
                    {danfeItem.origem}
                  </td>
                  <td className="p-1 border border-collapse border-slate-500">
                    {danfeItem.aliqIcms}
                  </td>
                  <td className="p-1 border border-collapse border-slate-500">
                    {danfeItem.aliqPis}
                  </td>
                  <td className="p-1 border border-collapse border-slate-500">
                    {danfeItem.aliqCofins}
                  </td>
                  <td className="p-1 border border-collapse border-slate-500">
                    {danfeItem.cest}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Box>
      )}
    </div>
  );
}

export default DisplayExtract;
