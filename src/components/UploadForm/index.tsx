import { useState } from "react";

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

      fetch("https://cloud.pxcx.com.br:5000/upload-package", {
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
      
      <p>Adicione um arquivo .zip contendo todos os arquivos .xml</p>
      <p className="py-5">
        <input type="file" name="danfePackageInput" onChange={onFileSelected} />
      </p>
      <p style={{ display: `${packageId ? "block" : "none"}` }}>
        <a className="block pb-5 underline-offset-8 underline text-green-700 hover:text-green-900 font-bold" href={"/package/" + packageId}>Clique aqui para ver o resultado.</a>
      </p>
      <button
        className={`my-5 py-2 px-6 border-solid border-2 rounded-xl font-bold ${selectedFile === null ? "border-gray-400 text-gray-400" : "cursor-pointer border-blue-600 hover:border-blue-400 text-blue-600 hover:text-blue-400"}`}
        disabled={selectedFile === null}
        onClick={submitFile}
      >
        Enviar
      </button>
      
    </div>
  );
}

export default UploadForm;
