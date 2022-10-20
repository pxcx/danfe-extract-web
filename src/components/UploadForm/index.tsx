function UploadForm() {
  return (
    <div>
      <p>Adicione um arquivo .zip contendo todos os arquivos .xml</p>
      <p>
        <input type="file" name="danfePackageInput" />
      </p>
      <button>Enviar</button>
    </div>
  );
}

export default UploadForm;
