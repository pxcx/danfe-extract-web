import { ChangeEventHandler, SetStateAction, useState } from "react";

function UploadForm() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [packageId, setPackageId] = useState<string | null>(null);

  function onFileSelected(event: React.FormEvent<HTMLInputElement>) {
    if (event.currentTarget.files && event.currentTarget.files.length > 0) {
      setSelectedFile(event.currentTarget.files[0]);
    }
  }

  function submitFile() {
    if (selectedFile !== null) {
      const formData = new FormData();
      formData.append("danfePackage", selectedFile);

      fetch("http://cloud.pxcx.com.br:5000/upload-package", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          setPackageId(data.packageID);
          setSelectedFile(null);
        });
    }
  }

  return (
    <div>
      <p style={{ display: `${packageId ? "block" : "none"}` }}>
        <a href={"/package/" + packageId}>Clique aqui para ver o resultado.</a>
      </p>
      <p>Adicione um arquivo .zip contendo todos os arquivos .xml</p>
      <p>
        <input type="file" name="danfePackageInput" onChange={onFileSelected} />
      </p>
      <button disabled={selectedFile === null} onClick={submitFile}>
        Enviar
      </button>
    </div>
  );
}

export default UploadForm;