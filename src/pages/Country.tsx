import { useCountry } from "../hooks";
import { Loader } from "../components";
import { Button } from "antd";
import { GoArrowLeft } from "react-icons/go";
import { useNavigate } from "react-router-dom";
const Country = () => {
  const { country, isPending } = useCountry();
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  if (isPending) return <Loader />;
  return (
    <section className="flex gap-8 flex-col mt-8">
      <div>
        <Button onClick={handleGoBack} className="px-8 shadow-md py-4">
          <GoArrowLeft />
          Back
        </Button>
      </div>
      <div className="flex gap-8">
        <div className="flex-1">
          <img
            src={country?.flags?.svg}
            alt={country?.flags?.alt}
            className="w-full max-h-[600px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Country;
