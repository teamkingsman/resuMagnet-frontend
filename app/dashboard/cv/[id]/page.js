import CvForm from "@/components/BuilderForm/CvForm/CvForm";

function CV({ params }) {
  return (
    <>
    {
      params.id
    }
      <CvForm></CvForm>
    </>
  );
}

export default CV;
