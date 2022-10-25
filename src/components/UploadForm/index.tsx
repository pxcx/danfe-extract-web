import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../store";
import Button from "../FormControl/Button";

function UploadForm() {
  const [selectedFile, setSelectedFile] = useState<File | undefined>(undefined);
  const { packageID, error } = useSelector(
    (state: State) => state.packageUpload
  );
  const dispatch = useDispatch();
  const { reset, uploadPackage } = bindActionCreators(
    actionCreators.packageUpload,
    dispatch
  );

  function onFileSelected(event: React.FormEvent<HTMLInputElement>) {
    if (event.currentTarget.files && event.currentTarget.files.length > 0) {
      setSelectedFile(event.currentTarget.files[0]);
    }
  }

  function submitFile() {
    if (selectedFile) {
      reset();
      uploadPackage(selectedFile);
      setSelectedFile(undefined);
    }
  }

  return (
    <div>
      <p
        className={`${
          error ? "block" : "hidden"
        } p-3 w-1/2 mx-auto my-5 border-2 border-solid border-red-500 rounded-xl bg-red-100 text-red-600`}
      >
        <b>Error:</b> {error}
      </p>
      <p>Adicione um arquivo .zip contendo todos os arquivos .xml</p>
      <p className="py-5">
        <input
          type="file"
          name="danfePackageInput"
          id="danfePackageInput"
          onChange={onFileSelected}
        />
      </p>
      <p className={`${packageID ? "block" : "hidden"}`}>
        <a
          className="block pb-5 underline-offset-8 underline text-green-700 hover:text-green-900 font-bold"
          href={"/package/" + packageID}
        >
          Clique aqui para ver o resultado.
        </a>
      </p>

      <Button disabled={selectedFile === undefined} onClick={submitFile}>
        Enviar
      </Button>
    </div>
  );
}

export default UploadForm;
